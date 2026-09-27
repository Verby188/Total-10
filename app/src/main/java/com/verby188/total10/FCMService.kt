package com.verby188.total10

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import androidx.core.app.NotificationCompat
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

/**
 * Service FCM de Total 10 — même logique que 5 Rois/U9 : jetons d'appareil et
 * messages de données (jamais de "notification payload" côté serveur, on gère
 * tout nous-mêmes pour pouvoir router vers le WebView quand l'appli est ouverte).
 *
 * Déclarer dans AndroidManifest.xml :
 *   <service android:name=".FCMService" android:exported="false">
 *     <intent-filter><action android:name="com.google.firebase.MESSAGING_EVENT"/></intent-filter>
 *   </service>
 */
class FCMService : FirebaseMessagingService() {

    companion object {
        private const val CHANNEL_ID = "total10_default"
        private const val CHANNEL_NAME = "Total 10"
    }

    /** Nouveau jeton (première installation, ou rotation du jeton par le système). */
    override fun onNewToken(token: String) {
        super.onNewToken(token)
        // Si l'appli est au premier plan, on l'injecte directement — sinon
        // MainActivity.getFcmTokenAndInject() le récupérera au prochain lancement.
        val activity = MainActivity.instance
        activity?.runOnUiThread {
            activity.webViewEvaluate("if(typeof onFcmToken==='function')onFcmToken('$token');")
        }
    }

    /** Message reçu (invitation de partie, demande d'ami…). Toujours un data message,
     *  jamais de "notification" côté serveur — voir Worker Cloudflare. */
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        super.onMessageReceived(remoteMessage)
        val data = remoteMessage.data
        if (data.isEmpty()) return

        val activity = MainActivity.instance
        if (activity != null) {
            // Appli ouverte : on transmet directement au JS, pas de notification système.
            activity.runOnUiThread { activity.onMessageReceived(data) }
        } else {
            showSystemNotification(data)
        }
    }

    private fun showSystemNotification(data: Map<String, String>) {
        val type = data["type"]
        val (title, body) = when (type) {
            "gameInvite" -> (data["senderName"] ?: "Un ami") to "vous invite à jouer à Total 10 !"
            "friendRequest" -> (data["senderName"] ?: "Quelqu'un") to "vous a envoyé une demande d'ami."
            else -> "Total 10" to "Vous avez une nouvelle notification."
        }

        val launchIntent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP
            // handleIntent() dans MainActivity lit ces extras (pas un lien profond total10://
            // ici — ce chemin est réservé aux notifications, l'autre aux liens SMS/partagés).
            putExtra("type", type)
            data["code"]?.let { putExtra("code", it) }
            data["senderName"]?.let { putExtra("senderName", it) }
        }
        val pendingIntent = PendingIntent.getActivity(
            this, 0, launchIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val nm = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                CHANNEL_ID, CHANNEL_NAME, NotificationManager.IMPORTANCE_HIGH
            )
            nm.createNotificationChannel(channel)
        }

        val notification = NotificationCompat.Builder(this, CHANNEL_ID)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title)
            .setContentText(body)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .build()

        nm.notify(System.currentTimeMillis().toInt(), notification)
    }
}
