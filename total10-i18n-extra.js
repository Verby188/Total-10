/* ═══════════════════════════════════════════════════════════════════════
   Total 10 — Compléments i18n (propres à cette appli, hors 5 Rois)
   ═══════════════════════════════════════════════════════════════════════
   À charger APRÈS cinqrois-i18n.js (qui apporte le moteur : TreeWalker +
   MutationObserver + crT/crSetLang/crGetLang). Ce fichier n'ajoute QUE le
   dictionnaire propre à Total 10 — l'auth, le lobby, les amis, le profil,
   les réglages, la salle d'attente, le classement, les boutons courants,
   et quelques libellés d'action simples (Défausser, Passer, Intercepter…).

   VOLONTAIREMENT LAISSÉ DE CÔTÉ pour l'instant (textes qui touchent aux
   règles du jeu elles-mêmes — tutoriel, écran de règles, messages du
   journal de partie type "X pioche à l'emplacement Y") : Mathieu fournit
   les traductions anglais/allemand/espagnol de ces textes séparément,
   déjà vérifiées sur ses sources.

   Langues couvertes ici : en, de, es (comme demandé). Les mêmes clés
   pourront recevoir it/pt/nl/pl plus tard si besoin, sans rien casser —
   il suffira d'ajouter les langues manquantes à chaque entrée.

   NOTE SUR "Balles neuves" : terme officiel confirmé via les livrets DE/IT
   fournis par Mathieu ("Frische Karten" / "Carte nuove") — "Fresh cards" en
   anglais est déduit par analogie (aucune source anglaise officielle
   trouvée pour cette mécanique précise, absente du résumé "règles en 60
   secondes"). Voir total10-rules-i18n.js pour le détail des sources.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  if (!window.__CR_LANGS__) window.__CR_LANGS__ = {};

  Object.assign(window.__CR_LANGS__, {
    // ── Connexion / inscription ──
    "Connexion": { en: "Log in", de: "Anmelden", es: "Iniciar sesión" },
    "Inscription": { en: "Sign up", de: "Registrieren", es: "Registrarse" },
    "Se connecter": { en: "Log in", de: "Anmelden", es: "Iniciar sesión" },
    "Se déconnecter": { en: "Log out", de: "Abmelden", es: "Cerrar sesión" },
    "Email": { en: "Email", de: "E-Mail", es: "Correo electrónico" },
    "Mot de passe": { en: "Password", de: "Passwort", es: "Contraseña" },
    "Mot de passe oublié ?": { en: "Forgot password?", de: "Passwort vergessen?", es: "¿Olvidaste tu contraseña?" },
    "Continuer sans compte →": { en: "Continue without an account →", de: "Ohne Konto fortfahren →", es: "Continuar sin cuenta →" },
    "Pseudo": { en: "Username", de: "Name", es: "Nombre de usuario" },
    "Pseudo (ex: Mathieu)": { en: "Username (e.g. Mathieu)", de: "Name (z. B. Mathieu)", es: "Nombre de usuario (p. ej. Mathieu)" },
    "Choisis ton pseudo": { en: "Choose your username", de: "Wähle deinen Namen", es: "Elige tu nombre de usuario" },
    "Ton pseudo": { en: "Your username", de: "Dein Name", es: "Tu nombre de usuario" },
    "Nouveau pseudo": { en: "New username", de: "Neuer Name", es: "Nuevo nombre de usuario" },
    "Code de parrainage (optionnel)": { en: "Referral code (optional)", de: "Empfehlungscode (optional)", es: "Código de referido (opcional)" },
    "email@exemple.com": { en: "email@example.com", de: "email@beispiel.com", es: "email@ejemplo.com" },

    // ── Choix du mode / lobby ──
    "🎮 Jouer en local": { en: "🎮 Play locally", de: "🎮 Lokal spielen", es: "🎮 Jugar en local" },
    "Mode local — solo ou hotseat, avec IA.": { en: "Local mode — solo or hotseat, with AI.", de: "Lokaler Modus — solo oder im Wechsel, mit KI.", es: "Modo local — solo o por turnos, con IA." },
    "Solo ou hotseat, avec IA — sur cet appareil": { en: "Solo or hotseat, with AI — on this device", de: "Solo oder im Wechsel, mit KI — auf diesem Gerät", es: "Solo o por turnos, con IA — en este dispositivo" },
    "➕ Créer une partie": { en: "➕ Create a game", de: "➕ Spiel erstellen", es: "➕ Crear una partida" },
    "Créer une partie": { en: "Create a game", de: "Spiel erstellen", es: "Crear una partida" },
    "Héberge une partie en réseau, les autres rejoignent avec un code": { en: "Host an online game, others join with a code", de: "Hoste ein Online-Spiel, andere treten mit einem Code bei", es: "Organiza una partida en línea, los demás se unen con un código" },
    "🔑 Rejoindre une partie": { en: "🔑 Join a game", de: "🔑 Spiel beitreten", es: "🔑 Unirse a una partida" },
    "Rejoindre une partie": { en: "Join a game", de: "Spiel beitreten", es: "Unirse a una partida" },
    "Entre le code donné par l'hôte": { en: "Enter the code given by the host", de: "Gib den Code vom Gastgeber ein", es: "Introduce el código del anfitrión" },
    "👥 Mes amis": { en: "👥 My friends", de: "👥 Meine Freunde", es: "👥 Mis amigos" },
    "Mes amis": { en: "My friends", de: "Meine Freunde", es: "Mis amigos" },
    "Gérer votre liste d'amis": { en: "Manage your friend list", de: "Verwalte deine Freundesliste", es: "Gestiona tu lista de amigos" },
    "🏆 Classement global": { en: "🏆 Global leaderboard", de: "🏆 Globale Rangliste", es: "🏆 Clasificación global" },
    "🏆 Classement Global": { en: "🏆 Global Leaderboard", de: "🏆 Globale Rangliste", es: "🏆 Clasificación Global" },
    "Victoires, % de victoires, score moyen": { en: "Wins, win %, average score", de: "Siege, Sieg-%, Durchschnittspunktzahl", es: "Victorias, % de victorias, puntuación media" },
    "⚙️ Réglages": { en: "⚙️ Settings", de: "⚙️ Einstellungen", es: "⚙️ Ajustes" },
    "Langue, sons": { en: "Language, sounds", de: "Sprache, Töne", es: "Idioma, sonidos" },

    // ── Créer / rejoindre une salle ──
    "Votre nom": { en: "Your name", de: "Dein Name", es: "Tu nombre" },
    "Hôte": { en: "Host", de: "Gastgeber", es: "Anfitrión" },
    "Invité": { en: "Guest", de: "Gast", es: "Invitado" },
    "Nombre d'invités humains attendus": { en: "Expected number of human guests", de: "Erwartete Anzahl menschlicher Gäste", es: "Número de invitados humanos esperados" },
    "Nombre d'IA": { en: "Number of AI", de: "Anzahl KI", es: "Número de IA" },
    "Créer la salle": { en: "Create the room", de: "Raum erstellen", es: "Crear la sala" },
    "Code de la salle": { en: "Room code", de: "Raumcode", es: "Código de la sala" },
    "Rejoindre": { en: "Join", de: "Beitreten", es: "Unirse" },
    "Salle d'attente": { en: "Waiting room", de: "Warteraum", es: "Sala de espera" },
    "Ton code :": { en: "Your code:", de: "Dein Code:", es: "Tu código:" },
    "Démarrer la partie": { en: "Start the game", de: "Spiel starten", es: "Empezar la partida" },
    "Aucun joueur pour l'instant": { en: "No players yet", de: "Noch keine Spieler", es: "Aún no hay jugadores" },

    // ── Amis ──
    "👥 Amis": { en: "👥 Friends", de: "👥 Freunde", es: "👥 Amigos" },
    "Ajouter un ami": { en: "Add a friend", de: "Freund hinzufügen", es: "Añadir un amigo" },
    "Pseudo de l'ami...": { en: "Friend's username...", de: "Name des Freundes...", es: "Nombre del amigo..." },
    "Aucun résultat": { en: "No results", de: "Kein Ergebnis", es: "Sin resultados" },
    "+ Ajouter": { en: "+ Add", de: "+ Hinzufügen", es: "+ Añadir" },
    "Déjà ami": { en: "Already friends", de: "Bereits befreundet", es: "Ya sois amigos" },
    "Demande envoyée ! Appuyez à nouveau pour annuler.": { en: "Request sent! Tap again to cancel.", de: "Anfrage gesendet! Tippe erneut, um sie zu stornieren.", es: "¡Solicitud enviada! Toca de nuevo para cancelarla." },
    "Demande annulée.": { en: "Request cancelled.", de: "Anfrage storniert.", es: "Solicitud cancelada." },
    "Demandes reçues": { en: "Requests received", de: "Erhaltene Anfragen", es: "Solicitudes recibidas" },
    "Aucun ami pour l'instant": { en: "No friends yet", de: "Noch keine Freunde", es: "Aún no tienes amigos" },
    "Retirer": { en: "Remove", de: "Entfernen", es: "Eliminar" },

    // ── Profil ──
    "🖼️ Avatar": { en: "🖼️ Avatar", de: "🖼️ Avatar", es: "🖼️ Avatar" },
    "🎁 Parrainage": { en: "🎁 Referral", de: "🎁 Empfehlung", es: "🎁 Recomendación" },
    "Copier": { en: "Copy", de: "Kopieren", es: "Copiar" },
    "Enregistrer": { en: "Save", de: "Speichern", es: "Guardar" },
    "Dernières parties": { en: "Recent games", de: "Letzte Partien", es: "Últimas partidas" },
    "Aucune partie jouée": { en: "No games played", de: "Keine Partien gespielt", es: "Ninguna partida jugada" },
    "parties": { en: "games", de: "Partien", es: "partidas" },
    "victoires": { en: "wins", de: "Siege", es: "victorias" },
    "moy. pts": { en: "avg. pts", de: "Ø Pkt.", es: "media pts" },
    "record": { en: "record", de: "Rekord", es: "récord" },
    "Votre main": { en: "Your hand", de: "Deine Hand", es: "Tu mano" },

    // ── Réglages ──
    "Sons": { en: "Sounds", de: "Töne", es: "Sonidos" },
    "Commencer la partie": { en: "Start the game", de: "Spiel starten", es: "Empezar la partida" },
    "Nombre de joueurs": { en: "Number of players", de: "Anzahl der Spieler", es: "Número de jugadores" },
    "cinqrois-i18n.js non chargé": { en: "cinqrois-i18n.js not loaded", de: "cinqrois-i18n.js nicht geladen", es: "cinqrois-i18n.js no cargado" },
    "En ligne": { en: "Online", de: "Online", es: "En línea" },
    "Hors ligne": { en: "Offline", de: "Offline", es: "Desconectado" },
    "Inviter": { en: "Invite", de: "Einladen", es: "Invitar" },
    "Invité ✓": { en: "Invited ✓", de: "Eingeladen ✓", es: "Invitado ✓" },
    "TOTAL 10 !": { en: "TOTAL 10!", de: "TOTAL 10!", es: "¡TOTAL 10!" },
    "Langue": { en: "Language", de: "Sprache", es: "Idioma" },

    // ── Classement ──
    "🥇 Victoires": { en: "🥇 Wins", de: "🥇 Siege", es: "🥇 Victorias" },
    "% Victoires": { en: "% Wins", de: "% Siege", es: "% Victorias" },
    "📊 Moy. score": { en: "📊 Avg. score", de: "📊 Ø Punktzahl", es: "📊 Puntuación media" },
    "(toi)": { en: "(you)", de: "(du)", es: "(tú)" },
    "Aucune partie pour l'instant": { en: "No games yet", de: "Noch keine Partien", es: "Aún no hay partidas" },

    // ── Boutons / navigation courants ──
    "← Retour": { en: "← Back", de: "← Zurück", es: "← Volver" },
    "← Annuler": { en: "← Cancel", de: "← Abbrechen", es: "← Cancelar" },
    "Annuler": { en: "Cancel", de: "Abbrechen", es: "Cancelar" },
    "Valider": { en: "Confirm", de: "Bestätigen", es: "Confirmar" },
    "Chargement…": { en: "Loading…", de: "Wird geladen…", es: "Cargando…" },
    "Erreur de chargement": { en: "Loading error", de: "Ladefehler", es: "Error de carga" },

    // ── Fin de partie ──
    "🏆 Partie terminée": { en: "🏆 Game over", de: "🏆 Spiel beendet", es: "🏆 Partida terminada" },
    "Manche suivante": { en: "Next round", de: "Nächste Runde", es: "Siguiente ronda" },
    "Rejouer": { en: "Play again", de: "Nochmal spielen", es: "Jugar de nuevo" },

    // ── Hotseat local ──
    "👁️ Voir mon jeu": { en: "👁️ See my hand", de: "👁️ Meine Karten ansehen", es: "👁️ Ver mi mano" },
    "C'est votre tour — les autres joueurs ne doivent pas regarder l'écran.": { en: "It's your turn — other players shouldn't look at the screen.", de: "Du bist dran — die anderen Spieler sollten nicht auf den Bildschirm schauen.", es: "Es tu turno — los demás jugadores no deben mirar la pantalla." },

    // ── Actions de jeu simples (pas des explications de règles) ──
    "Défausser": { en: "Discard", de: "Ablegen", es: "Descartar" },
    "Passer": { en: "Pass", de: "Passen", es: "Pasar" },
    "Échanger": { en: "Swap", de: "Tauschen", es: "Intercambiar" },
    "🖐️ Intercepter !": { en: "🖐️ Intercept!", de: "🖐️ Abfangen!", es: "🖐️ ¡Interceptar!" },
    "🔄 Balles neuves": { en: "🔄 Fresh cards", de: "🔄 Frische Karten", es: "🔄 Cartas nuevas" },
  });
})();
