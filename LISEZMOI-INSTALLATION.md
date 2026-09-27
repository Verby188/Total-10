# Total 10 — notes avant premier build

Ce zip contient toute la structure du projet Android, prête à ouvrir dans
Android Studio, **sauf deux éléments que je ne peux pas générer moi-même** :

## 1. Le wrapper Gradle (`gradlew`, `gradlew.bat`, `gradle/wrapper/`)

Ce sont des scripts + un binaire générés automatiquement par Gradle, identiques
d'un projet à l'autre (rien de spécifique à Total 10 dedans). Le plus simple :

- Copie ces 3 éléments directement depuis ton repo `5-rois` (racine du repo :
  `gradlew`, `gradlew.bat`, dossier `gradle/`) dans la racine de ce projet.
- Ou, si tu ouvres directement ce dossier dans Android Studio sans ces
  fichiers, Android Studio te proposera de les régénérer automatiquement au
  premier lancement de la synchronisation Gradle.

## 2. `app/google-services.json`

Ce fichier est lié au nom de paquet (`com.verby188.total10`) et doit venir de
la console Firebase — voir la discussion précédente : ajoute une nouvelle
application Android dans le **même projet Firebase** que 5 Rois (package
`com.verby188.total10`), télécharge le fichier généré, et place-le dans
`app/google-services.json`.

Sans ce fichier, le plugin `com.google.gms.google-services` fera échouer le
build avec une erreur explicite (`File google-services.json is missing`) —
donc impossible de rater cette étape, mais je préfère te prévenir avant.

## Ce qui est déjà en place

- Tout le code Kotlin (`MainActivity.kt`, `MyFirebaseMessagingService.kt`)
- Le manifeste (`AndroidManifest.xml`)
- Les icônes (legacy + adaptative)
- Les fichiers web (`index.html` — c'est `total10.html` renommé — et ses
  scripts : `config.js`, `cinqrois-i18n.js`, `total10-i18n-extra.js`,
  `total10-rules-i18n.js`)
- `build.gradle` (racine et `app/`), `settings.gradle`, `gradle.properties`,
  `.gitignore`, `proguard-rules.pro`

Les fichiers Gradle génériques (racine, `settings.gradle`, `gradle.properties`)
sont ma reconstruction standard, pas une copie exacte de ceux de 5 Rois — si
tu veux une parité stricte, remplace-les par les tiens.
