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
   journal de partie type "X pioche à l'emplacement Y") : voir
   total10-rules-i18n.js séparément.

   Langues couvertes ici : en, de, es, it, pt. Néerlandais/polonais pas
   encore ajoutés (pas assez confiant sans vérification) — mêmes clés,
   à compléter plus tard si besoin.

   NOTE SUR "Balles neuves" : terme officiel confirmé via les livrets DE/IT
   fournis par Mathieu ("Frische Karten" / "Carte nuove") — "Fresh cards"
   (EN) et "Cartas novas" (PT) sont déduits par analogie, aucune source
   officielle trouvée dans ces langues pour cette mécanique précise. Voir
   total10-rules-i18n.js pour le détail des sources par langue.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  if (!window.__CR_LANGS__) window.__CR_LANGS__ = {};

  Object.assign(window.__CR_LANGS__, {
    // ── Connexion / inscription ──
    "Connexion": { en: "Log in", de: "Anmelden", es: "Iniciar sesión", it: "Accedi", pt: "Entrar" },
    "Inscription": { en: "Sign up", de: "Registrieren", es: "Registrarse", it: "Registrati", pt: "Registar" },
    "Se connecter": { en: "Log in", de: "Anmelden", es: "Iniciar sesión", it: "Accedi", pt: "Entrar" },
    "Se déconnecter": { en: "Log out", de: "Abmelden", es: "Cerrar sesión", it: "Disconnetti", pt: "Sair" },
    "Email": { en: "Email", de: "E-Mail", es: "Correo electrónico", it: "Email", pt: "Email" },
    "Mot de passe": { en: "Password", de: "Passwort", es: "Contraseña", it: "Password", pt: "Senha" },
    "Mot de passe oublié ?": { en: "Forgot password?", de: "Passwort vergessen?", es: "¿Olvidaste tu contraseña?", it: "Password dimenticata?", pt: "Esqueceu-se da senha?" },
    "Continuer sans compte →": { en: "Continue without an account →", de: "Ohne Konto fortfahren →", es: "Continuar sin cuenta →", it: "Continua senza account →", pt: "Continuar sem conta →" },
    "Pseudo": { en: "Username", de: "Name", es: "Nombre de usuario", it: "Nome utente", pt: "Nome de utilizador" },
    "Pseudo (ex: Mathieu)": { en: "Username (e.g. Mathieu)", de: "Name (z. B. Mathieu)", es: "Nombre de usuario (p. ej. Mathieu)", it: "Nome utente (es: Mathieu)", pt: "Nome de utilizador (ex.: Mathieu)" },
    "Choisis ton pseudo": { en: "Choose your username", de: "Wähle deinen Namen", es: "Elige tu nombre de usuario", it: "Scegli il tuo nome utente", pt: "Escolhe o teu nome de utilizador" },
    "Ton pseudo": { en: "Your username", de: "Dein Name", es: "Tu nombre de usuario", it: "Il tuo nome utente", pt: "O teu nome de utilizador" },
    "Nouveau pseudo": { en: "New username", de: "Neuer Name", es: "Nuevo nombre de usuario", it: "Nuovo nome utente", pt: "Novo nome de utilizador" },
    "Code de parrainage (optionnel)": { en: "Referral code (optional)", de: "Empfehlungscode (optional)", es: "Código de referido (opcional)", it: "Codice di invito (opzionale)", pt: "Código de referência (opcional)" },
    "email@exemple.com": { en: "email@example.com", de: "email@beispiel.com", es: "email@ejemplo.com", it: "email@esempio.com", pt: "email@exemplo.com" },

    // ── Choix du mode / lobby ──
    "🎮 Jouer en local": { en: "🎮 Play locally", de: "🎮 Lokal spielen", es: "🎮 Jugar en local", it: "🎮 Gioca in locale", pt: "🎮 Jogar em local" },
    "Mode local — solo ou hotseat, avec IA.": { en: "Local mode — solo or hotseat, with AI.", de: "Lokaler Modus — solo oder im Wechsel, mit KI.", es: "Modo local — solo o por turnos, con IA.", it: "Modalità locale — solo o a turni, con IA.", pt: "Modo local — solo ou por turnos, com IA." },
    "Solo ou hotseat, avec IA — sur cet appareil": { en: "Solo or hotseat, with AI — on this device", de: "Solo oder im Wechsel, mit KI — auf diesem Gerät", es: "Solo o por turnos, con IA — en este dispositivo", it: "Solo o a turni, con IA — su questo dispositivo", pt: "Solo ou por turnos, com IA — neste dispositivo" },
    "➕ Créer une partie": { en: "➕ Create a game", de: "➕ Spiel erstellen", es: "➕ Crear una partida", it: "➕ Crea una partita", pt: "➕ Criar uma partida" },
    "Créer une partie": { en: "Create a game", de: "Spiel erstellen", es: "Crear una partida", it: "Crea una partita", pt: "Criar uma partida" },
    "Héberge une partie en réseau, les autres rejoignent avec un code": { en: "Host an online game, others join with a code", de: "Hoste ein Online-Spiel, andere treten mit einem Code bei", es: "Organiza una partida en línea, los demás se unen con un código", it: "Ospita una partita online, gli altri si uniscono con un codice", pt: "Aloja uma partida online, os outros juntam-se com um código" },
    "🔑 Rejoindre une partie": { en: "🔑 Join a game", de: "🔑 Spiel beitreten", es: "🔑 Unirse a una partida", it: "🔑 Unisciti a una partita", pt: "🔑 Juntar-se a uma partida" },
    "Rejoindre une partie": { en: "Join a game", de: "Spiel beitreten", es: "Unirse a una partida", it: "Unisciti a una partita", pt: "Juntar-se a uma partida" },
    "Entre le code donné par l'hôte": { en: "Enter the code given by the host", de: "Gib den Code vom Gastgeber ein", es: "Introduce el código del anfitrión", it: "Inserisci il codice fornito dall'host", pt: "Introduz o código dado pelo anfitrião" },
    "👥 Mes amis": { en: "👥 My friends", de: "👥 Meine Freunde", es: "👥 Mis amigos", it: "👥 I miei amici", pt: "👥 Os meus amigos" },
    "Mes amis": { en: "My friends", de: "Meine Freunde", es: "Mis amigos", it: "I miei amici", pt: "Os meus amigos" },
    "Gérer votre liste d'amis": { en: "Manage your friend list", de: "Verwalte deine Freundesliste", es: "Gestiona tu lista de amigos", it: "Gestisci la tua lista di amici", pt: "Gere a tua lista de amigos" },
    "🏆 Classement global": { en: "🏆 Global leaderboard", de: "🏆 Globale Rangliste", es: "🏆 Clasificación global", it: "🏆 Classifica globale", pt: "🏆 Classificação global" },
    "🏆 Classement Global": { en: "🏆 Global Leaderboard", de: "🏆 Globale Rangliste", es: "🏆 Clasificación Global", it: "🏆 Classifica Globale", pt: "🏆 Classificação Global" },
    "Victoires, % de victoires, score moyen": { en: "Wins, win %, average score", de: "Siege, Sieg-%, Durchschnittspunktzahl", es: "Victorias, % de victorias, puntuación media", it: "Vittorie, % di vittorie, punteggio medio", pt: "Vitórias, % de vitórias, pontuação média" },
    "⚙️ Réglages": { en: "⚙️ Settings", de: "⚙️ Einstellungen", es: "⚙️ Ajustes", it: "⚙️ Impostazioni", pt: "⚙️ Definições" },
    "Langue, sons": { en: "Language, sounds", de: "Sprache, Töne", es: "Idioma, sonidos", it: "Lingua, suoni", pt: "Idioma, sons" },

    // ── Créer / rejoindre une salle ──
    "Votre nom": { en: "Your name", de: "Dein Name", es: "Tu nombre", it: "Il tuo nome", pt: "O teu nome" },
    "Hôte": { en: "Host", de: "Gastgeber", es: "Anfitrión", it: "Host", pt: "Anfitrião" },
    "Invité": { en: "Guest", de: "Gast", es: "Invitado", it: "Ospite", pt: "Convidado" },
    "Nombre d'invités humains attendus": { en: "Expected number of human guests", de: "Erwartete Anzahl menschlicher Gäste", es: "Número de invitados humanos esperados", it: "Numero di ospiti umani attesi", pt: "Número de convidados humanos esperados" },
    "Nombre d'IA": { en: "Number of AI", de: "Anzahl KI", es: "Número de IA", it: "Numero di IA", pt: "Número de IA" },
    "Créer la salle": { en: "Create the room", de: "Raum erstellen", es: "Crear la sala", it: "Crea la stanza", pt: "Criar a sala" },
    "Code de la salle": { en: "Room code", de: "Raumcode", es: "Código de la sala", it: "Codice della stanza", pt: "Código da sala" },
    "Rejoindre": { en: "Join", de: "Beitreten", es: "Unirse", it: "Unisciti", pt: "Juntar-se" },
    "Salle d'attente": { en: "Waiting room", de: "Warteraum", es: "Sala de espera", it: "Sala d'attesa", pt: "Sala de espera" },
    "Ton code :": { en: "Your code:", de: "Dein Code:", es: "Tu código:", it: "Il tuo codice:", pt: "O teu código:" },
    "Démarrer la partie": { en: "Start the game", de: "Spiel starten", es: "Empezar la partida", it: "Avvia la partita", pt: "Começar a partida" },
    "Aucun joueur pour l'instant": { en: "No players yet", de: "Noch keine Spieler", es: "Aún no hay jugadores", it: "Nessun giocatore per ora", pt: "Ainda sem jogadores" },

    // ── Amis ──
    "👥 Amis": { en: "👥 Friends", de: "👥 Freunde", es: "👥 Amigos", it: "👥 Amici", pt: "👥 Amigos" },
    "Ajouter un ami": { en: "Add a friend", de: "Freund hinzufügen", es: "Añadir un amigo", it: "Aggiungi un amico", pt: "Adicionar um amigo" },
    "Pseudo de l'ami...": { en: "Friend's username...", de: "Name des Freundes...", es: "Nombre del amigo...", it: "Nome utente dell'amico...", pt: "Nome de utilizador do amigo..." },
    "Aucun résultat": { en: "No results", de: "Kein Ergebnis", es: "Sin resultados", it: "Nessun risultato", pt: "Sem resultados" },
    "+ Ajouter": { en: "+ Add", de: "+ Hinzufügen", es: "+ Añadir", it: "+ Aggiungi", pt: "+ Adicionar" },
    "Déjà ami": { en: "Already friends", de: "Bereits befreundet", es: "Ya sois amigos", it: "Già amici", pt: "Já são amigos" },
    "Demande envoyée ! Appuyez à nouveau pour annuler.": { en: "Request sent! Tap again to cancel.", de: "Anfrage gesendet! Tippe erneut, um sie zu stornieren.", es: "¡Solicitud enviada! Toca de nuevo para cancelarla.", it: "Richiesta inviata! Tocca di nuovo per annullare.", pt: "Pedido enviado! Toca novamente para cancelar." },
    "Demande annulée.": { en: "Request cancelled.", de: "Anfrage storniert.", es: "Solicitud cancelada.", it: "Richiesta annullata.", pt: "Pedido cancelado." },
    "Demandes reçues": { en: "Requests received", de: "Erhaltene Anfragen", es: "Solicitudes recibidas", it: "Richieste ricevute", pt: "Pedidos recebidos" },
    "Aucun ami pour l'instant": { en: "No friends yet", de: "Noch keine Freunde", es: "Aún no tienes amigos", it: "Nessun amico per ora", pt: "Ainda sem amigos" },
    "Retirer": { en: "Remove", de: "Entfernen", es: "Eliminar", it: "Rimuovi", pt: "Remover" },

    // ── Profil ──
    "🖼️ Avatar": { en: "🖼️ Avatar", de: "🖼️ Avatar", es: "🖼️ Avatar", it: "🖼️ Avatar", pt: "🖼️ Avatar" },
    "🎁 Parrainage": { en: "🎁 Referral", de: "🎁 Empfehlung", es: "🎁 Recomendación", it: "🎁 Invito", pt: "🎁 Recomendação" },
    "Copier": { en: "Copy", de: "Kopieren", es: "Copiar", it: "Copia", pt: "Copiar" },
    "Enregistrer": { en: "Save", de: "Speichern", es: "Guardar", it: "Salva", pt: "Guardar" },
    "Dernières parties": { en: "Recent games", de: "Letzte Partien", es: "Últimas partidas", it: "Ultime partite", pt: "Últimas partidas" },
    "Aucune partie jouée": { en: "No games played", de: "Keine Partien gespielt", es: "Ninguna partida jugada", it: "Nessuna partita giocata", pt: "Nenhuma partida jogada" },
    "parties": { en: "games", de: "Partien", es: "partidas", it: "partite", pt: "partidas" },
    "victoires": { en: "wins", de: "Siege", es: "victorias", it: "vittorie", pt: "vitórias" },
    "moy. pts": { en: "avg. pts", de: "Ø Pkt.", es: "media pts", it: "media pt", pt: "média pts" },
    "record": { en: "record", de: "Rekord", es: "récord", it: "record", pt: "recorde" },
    "Votre main": { en: "Your hand", de: "Deine Hand", es: "Tu mano", it: "La tua mano", pt: "A tua mão" },

    // ── Réglages ──
    "Sons": { en: "Sounds", de: "Töne", es: "Sonidos", it: "Suoni", pt: "Sons" },
    "Commencer la partie": { en: "Start the game", de: "Spiel starten", es: "Empezar la partida", it: "Inizia la partita", pt: "Começar a partida" },
    "Comment jouer, interception, fin de partie": { en: "How to play, interception, end of game", de: "Spielablauf, Abfangen, Spielende", es: "Cómo jugar, intercepción, final de la partida", it: "Come giocare, intercetto, fine partita", pt: "Como jogar, interceção, fim de jogo" },
    "📖 Règles du jeu": { en: "📖 Game rules", de: "📖 Spielregeln", es: "📖 Reglas del juego", it: "📖 Regole del gioco", pt: "📖 Regras do jogo" },
    "C'est compris, jouons !": { en: "Got it, let's play!", de: "Verstanden, los geht's!", es: "Entendido, ¡a jugar!", it: "Capito, si gioca!", pt: "Percebido, vamos jogar!" },
    "👋 Bienvenue sur Total 10 !": { en: "👋 Welcome to Total 10!", de: "👋 Willkommen bei Total 10!", es: "👋 ¡Bienvenido a Total 10!", it: "👋 Benvenuto su Total 10!", pt: "👋 Bem-vindo ao Total 10!" },
    "Nouveau ici ? Un petit tour des règles avant de commencer ?": { en: "New here? A quick look at the rules before you start?", de: "Neu hier? Ein kurzer Blick auf die Regeln, bevor es losgeht?", es: "¿Nuevo por aquí? ¿Un vistazo rápido a las reglas antes de empezar?", it: "Nuovo qui? Uno sguardo veloce alle regole prima di iniziare?", pt: "Novo por aqui? Uma vista de olhos rápida às regras antes de começar?" },
    "📖 Voir les règles": { en: "📖 See the rules", de: "📖 Regeln ansehen", es: "📖 Ver las reglas", it: "📖 Vedi le regole", pt: "📖 Ver as regras" },
    "Plus tard": { en: "Later", de: "Später", es: "Más tarde", it: "Più tardi", pt: "Mais tarde" },
    "Nombre de joueurs": { en: "Number of players", de: "Anzahl der Spieler", es: "Número de jugadores", it: "Numero di giocatori", pt: "Número de jogadores" },
    "cinqrois-i18n.js non chargé": { en: "cinqrois-i18n.js not loaded", de: "cinqrois-i18n.js nicht geladen", es: "cinqrois-i18n.js no cargado", it: "cinqrois-i18n.js non caricato", pt: "cinqrois-i18n.js não carregado" },
    "En ligne": { en: "Online", de: "Online", es: "En línea", it: "Online", pt: "Online" },
    "Hors ligne": { en: "Offline", de: "Offline", es: "Desconectado", it: "Offline", pt: "Offline" },
    "Inviter": { en: "Invite", de: "Einladen", es: "Invitar", it: "Invita", pt: "Convidar" },
    "Invité ✓": { en: "Invited ✓", de: "Eingeladen ✓", es: "Invitado ✓", it: "Invitato ✓", pt: "Convidado ✓" },
    "TOTAL 10 !": { en: "TOTAL 10!", de: "TOTAL 10!", es: "¡TOTAL 10!", it: "TOTAL 10!", pt: "TOTAL 10!" },
    "Langue": { en: "Language", de: "Sprache", es: "Idioma", it: "Lingua", pt: "Idioma" },

    // ── Classement ──
    "🥇 Victoires": { en: "🥇 Wins", de: "🥇 Siege", es: "🥇 Victorias", it: "🥇 Vittorie", pt: "🥇 Vitórias" },
    "% Victoires": { en: "% Wins", de: "% Siege", es: "% Victorias", it: "% Vittorie", pt: "% Vitórias" },
    "📊 Moy. score": { en: "📊 Avg. score", de: "📊 Ø Punktzahl", es: "📊 Puntuación media", it: "📊 Punteggio medio", pt: "📊 Pontuação média" },
    "(toi)": { en: "(you)", de: "(du)", es: "(tú)", it: "(tu)", pt: "(tu)" },
    "Aucune partie pour l'instant": { en: "No games yet", de: "Noch keine Partien", es: "Aún no hay partidas", it: "Nessuna partita per ora", pt: "Ainda sem partidas" },

    // ── Boutons / navigation courants ──
    "← Retour": { en: "← Back", de: "← Zurück", es: "← Volver", it: "← Indietro", pt: "← Voltar" },
    "← Annuler": { en: "← Cancel", de: "← Abbrechen", es: "← Cancelar", it: "← Annulla", pt: "← Cancelar" },
    "Annuler": { en: "Cancel", de: "Abbrechen", es: "Cancelar", it: "Annulla", pt: "Cancelar" },
    "Valider": { en: "Confirm", de: "Bestätigen", es: "Confirmar", it: "Conferma", pt: "Confirmar" },
    "Chargement…": { en: "Loading…", de: "Wird geladen…", es: "Cargando…", it: "Caricamento…", pt: "A carregar…" },
    "Erreur de chargement": { en: "Loading error", de: "Ladefehler", es: "Error de carga", it: "Errore di caricamento", pt: "Erro de carregamento" },

    // ── Fin de partie ──
    "🏆 Partie terminée": { en: "🏆 Game over", de: "🏆 Spiel beendet", es: "🏆 Partida terminada", it: "🏆 Partita terminata", pt: "🏆 Partida terminada" },
    "Manche suivante": { en: "Next round", de: "Nächste Runde", es: "Siguiente ronda", it: "Manche successiva", pt: "Ronda seguinte" },
    "Rejouer": { en: "Play again", de: "Nochmal spielen", es: "Jugar de nuevo", it: "Rigioca", pt: "Jogar novamente" },

    // ── Hotseat local ──
    "👁️ Voir mon jeu": { en: "👁️ See my hand", de: "👁️ Meine Karten ansehen", es: "👁️ Ver mi mano", it: "👁️ Guarda le mie carte", pt: "👁️ Ver a minha mão" },

    // ── Fragments pour messages construits dynamiquement (via crT(), pas le TreeWalker) ──
    "Ta position :": { en: "Your rank:", de: "Deine Position:", es: "Tu posición:", it: "La tua posizione:", pt: "A tua posição:" },
    "Main de": { en: "Hand of", de: "Hand von", es: "Mano de", it: "Mano di", pt: "Mão de" },
    "réfléchit… 🤖": { en: "thinking… 🤖", de: "überlegt… 🤖", es: "pensando… 🤖", it: "sta pensando… 🤖", pt: "a pensar… 🤖" },
    "joue…": { en: "is playing…", de: "spielt…", es: "está jugando…", it: "sta giocando…", pt: "está a jogar…" },
    "La main n'est pas valide": { en: "The hand is not valid", de: "Die Hand ist nicht gültig", es: "La mano no es válida", it: "La mano non è valida", pt: "A mão não é válida" },
    "carte(s) non combinée(s)": { en: "uncombined card(s)", de: "unkombinierte Karte(n)", es: "carta(s) no combinada(s)", it: "carta(e) non combinata(e)", pt: "carta(s) não combinada(s)" },
    "intercepte — choisissez une carte à échanger": { en: "is intercepting — choose a card to swap", de: "fängt ab — wähle eine Karte zum Tauschen", es: "está interceptando — elige una carta para intercambiar", it: "sta intercettando — scegli una carta da scambiare", pt: "está a intercetar — escolhe uma carta para trocar" },
    "piochez une carte du plateau": { en: "draw a card from the board", de: "ziehe eine Karte vom Tisch", es: "roba una carta de la mesa", it: "pesca una carta dal tavolo", pt: "compra uma carta da mesa" },
    "Au tour de": { en: "It's the turn of", de: "Am Zug ist", es: "Le toca a", it: "È il turno di", pt: "É a vez de" },
    "C'est votre tour — les autres joueurs ne doivent pas regarder l'écran.": { en: "It's your turn — other players shouldn't look at the screen.", de: "Du bist dran — die anderen Spieler sollten nicht auf den Bildschirm schauen.", es: "Es tu turno — los demás jugadores no deben mirar la pantalla.", it: "È il tuo turno — gli altri giocatori non devono guardare lo schermo.", pt: "É a tua vez — os outros jogadores não devem olhar para o ecrã." },

    // ── Actions de jeu simples (pas des explications de règles) ──
    "Défausser": { en: "Discard", de: "Ablegen", es: "Descartar", it: "Scarta", pt: "Descartar" },
    "Passer": { en: "Pass", de: "Passen", es: "Pasar", it: "Passa", pt: "Passar" },
    "Échanger": { en: "Swap", de: "Tauschen", es: "Intercambiar", it: "Scambia", pt: "Trocar" },
    "🖐️ Intercepter !": { en: "🖐️ Intercept!", de: "🖐️ Abfangen!", es: "🖐️ ¡Interceptar!", it: "🖐️ Intercetta!", pt: "🖐️ Intercetar!" },
    "🔄 Balles neuves": { en: "🔄 Fresh cards", de: "🔄 Frische Karten", es: "🔄 Cartas nuevas", it: "🔄 Carte nuove", pt: "🔄 Cartas novas" },
  });
})();
