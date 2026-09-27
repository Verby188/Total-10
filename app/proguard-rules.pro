# Ajouter ici les règles spécifiques au projet si besoin.
# Voir http://developer.android.com/guide/developing/tools/proguard.html

# Conserve les classes utilisées par le WebView JS bridge (AndroidBridge)
-keepclassmembers class com.verby188.total10.AndroidBridge {
    public *;
}
