/* ═══════════════════════════════════════════════════════════════════════
   Total 10 — Traduction des RÈGLES DU JEU (distinct de total10-i18n-extra.js
   qui couvre l'interface de base). À charger après ce dernier, une fois
   qu'un écran de règles/tutoriel existera pour consommer ces clés.
   ═══════════════════════════════════════════════════════════════════════
   SOURCES PAR LANGUE :
     - allemand (de) et italien (it) : texte OFFICIEL, repris mot pour mot
       des livrets PDF fournis par Mathieu (Yaqua Games / Crack Games).
     - anglais (en) : les termes clés (intercept, discard, draws, TOTAL 10,
       goal of the game, uncombined cards…) viennent du résumé officiel
       anglais (yaquagames.com/en-us/pages/total-10-game-rules) ; le reste
       (Fresh cards, tour dans le sens horaire, qui commence, égalité)
       est ma reconstruction avec la même terminologie — PAS une source
       officielle, à faire relire.
     - espagnol (es) : SEUL le paragraphe d'introduction ("OBJETIVO DEL
       JUEGO…") est officiel (il figure sur la boîte, identique quelle que
       soit la langue du livret). Le reste n'a pas de source espagnole
       trouvée — ces entrées sont ABSENTES ci-dessous plutôt que devinées.
     - portugais (pt) : entièrement RECONSTRUIT par mes soins (portugais
       européen, ex. "interceção" plutôt que le "interceptação" brésilien) —
       AUCUNE source officielle trouvée pour Total 10 en portugais, ni pour
       l'intro (contrairement à l'espagnol qui figure sur la boîte). À faire
       relire en priorité si tu comptes publier dans cette langue.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  if (!window.__CR_LANGS__) window.__CR_LANGS__ = {};

  Object.assign(window.__CR_LANGS__, {

    // ── But du jeu (intro — ES officiel disponible ici, PT reconstruit) ──
    "Être le premier à faire «TOTAL 10 !» en combinant ses 10 cartes avec des sommes de 10 dans différentes couleurs. Interdiction de répéter une somme de 10 dans la même couleur.": {
      en: "Be the first to make \"TOTAL 10!\" by combining your 10 cards into different coloured sets that each add up to 10. Each set must be a different colour.",
      de: "Sei der Erste, der „TOTAL 10!“ erreicht, indem du deine 10 Karten zu Summen von 10 in verschiedenen Farben kombinierst. Es ist nicht erlaubt, eine Summe von 10 in derselben Farbe zu wiederholen.",
      it: "Sii il primo a fare “TOTAL 10!” combinando le tue 10 carte per ottenere somme di 10 in colori diversi. Non è consentito ripetere una somma di 10 nello stesso colore.",
      es: "Ser el primero en hacer «¡TOTAL 10!» combinando tus 10 cartas para obtener sumas de 10 en diferentes colores. No está permitido repetir una suma de 10 del mismo color.",
      pt: "Ser o primeiro a fazer «TOTAL 10!» combinando as tuas 10 cartas em somas de 10 em cores diferentes. É proibido repetir uma soma de 10 na mesma cor.",
    },

    // ── On commence ? ──
    "10 cartes par joueur (vous pouvez les trier par couleur !)": {
      en: "10 cards per player (you can sort them by colour!)",
      de: "10 Karten pro Spieler (ihr könnt sie nach Farben sortieren!)",
      it: "10 carte per giocatore (puoi anche ordinarle per colore!)",
      pt: "10 cartas por jogador (podes ordená-las por cor!)",
    },
    "12 cartes au milieu en 3 rangées de 4, face cachées.": {
      en: "12 cards in the middle, in 3 rows of 4, face down.",
      de: "12 Karten in der Mitte, in 3 Reihen zu je 4 Karten, verdeckt.",
      it: "12 carte al centro disposte in 3 file da 4, coperte.",
      pt: "12 cartas ao centro em 3 filas de 4, viradas para baixo.",
    },
    "Le reste du paquet est mis de côté.": {
      en: "The rest of the deck is set aside.",
      de: "Der Rest des Kartenstapels wird beiseitegelegt.",
      it: "Il resto del mazzo viene messo da parte.",
      pt: "O resto do baralho é posto de lado.",
    },
    "Le joueur le plus jeune commence.": {
      en: "The youngest player starts.",
      de: "Der jüngste Spieler beginnt.",
      it: "Il giocatore più giovane inizia.",
      pt: "O jogador mais novo começa.",
    },
    "On joue chacun son tour dans le sens horaire.": {
      en: "Play proceeds clockwise, one player at a time.",
      de: "Gespielt wird reihum im Uhrzeigersinn.",
      it: "Si gioca a turno in senso orario.",
      pt: "Joga-se por turnos no sentido horário.",
    },

    // ── À qui le tour ? ──
    "Pioche une carte parmi les 12 cartes du plateau (face cachée ou déjà révélée).": {
      en: "Draws a card from the 12 cards on the table (face down or already revealed).",
      de: "Zieht der Spieler eine Karte von den 12 Karten auf dem Tisch (verdeckt oder bereits aufgedeckt).",
      it: "Pesca una carta tra le 12 carte sul tavolo (coperta o già scoperta).",
      pt: "Compra uma carta entre as 12 cartas da mesa (virada para baixo ou já revelada).",
    },
    "Défausse une carte de sa main, face visible, à la place de la carte prise. Le joueur doit toujours avoir exactement 10 cartes en main, avant et après son tour.": {
      en: "Discards a card from their hand, face up, in place of the card taken. Each player must always have exactly 10 cards in hand, before and after their turn.",
      de: "Legt anschließend eine Karte aus seiner Hand offen auf den Platz der gezogenen Karte ab. Ein Spieler muss immer genau 10 Karten auf der Hand haben, vor und nach seinem Zug.",
      it: "Scarta una carta dalla propria mano, scoperta, al posto della carta appena presa. Un giocatore deve avere sempre esattamente 10 carte in mano, prima e dopo il proprio turno.",
      pt: "Descarta uma carta da sua mão, virada para cima, no lugar da carta comprada. O jogador deve ter sempre exatamente 10 cartas na mão, antes e depois do seu turno.",
    },

    // ── Balles neuves ──
    "Balles neuves": {
      en: "Fresh cards", // reconstruit par analogie avec DE "Frische Karten" / IT "Carte nuove" — pas de source EN officielle
      de: "Frische Karten",
      it: "Carte nuove",
      pt: "Cartas novas", // reconstruit, pas de source officielle
    },
    "Si les 12 cartes du plateau sont toutes retournées, le joueur dont c'est le tour peut annoncer «Balles neuves». Les cartes du plateau sont alors retirées et remplacées par 12 nouvelles face cachée, disposées en 3 rangées de 4 cartes.": {
      en: "If all 12 cards on the board are face up, the player whose turn it is may call \"Fresh cards\". The cards on the board are then removed and replaced with 12 new face-down cards, laid out again in 3 rows of 4.",
      de: "Sind alle 12 Karten auf dem Tisch aufgedeckt, kann der Spieler, der am Zug ist, „Frische Karten“ ansagen. Die 12 Karten auf dem Tisch werden dann entfernt und durch 12 neue verdeckte Karten ersetzt, die wieder in 3 Reihen zu je 4 Karten ausgelegt werden.",
      it: "Se tutte le 12 carte sul tavolo sono scoperte, il giocatore di turno può annunciare “Carte nuove”. Le 12 carte sul tavolo vengono allora rimosse e sostituite con 12 nuove carte coperte, disposte nuovamente in 3 file da 4 carte.",
      pt: "Se as 12 cartas da mesa estiverem todas viradas para cima, o jogador da vez pode anunciar «Cartas novas». As cartas da mesa são então retiradas e substituídas por 12 novas cartas viradas para baixo, dispostas novamente em 3 filas de 4.",
    },

    // ── Interception ──
    "Interception ! (à partir de 3 joueurs)": {
      en: "Interception! (from 3 players)",
      de: "Abfangen! (ab 3 Spielern)",
      it: "Intercetto! (a partire da 3 giocatori)",
      pt: "Interceção! (a partir de 3 jogadores)",
    },
    "Lorsqu'une carte est rejetée, les autres joueurs (mais jamais le joueur dont c'est le tour) peuvent tenter de l'intercepter.": {
      en: "When a card is discarded, the other players (never the player whose turn it is) can try to intercept it.",
      de: "Wird eine Karte abgelegt, können die anderen Spieler (aber niemals der Spieler, der am Zug ist) versuchen, sie abzufangen.",
      it: "Quando una carta viene scartata, gli altri giocatori (ma mai il giocatore di turno) possono tentare di intercettarla.",
      pt: "Quando uma carta é descartada, os outros jogadores (mas nunca o jogador da vez) podem tentar intercetá-la.",
    },
    "Le premier joueur à toucher la carte rejetée peut l'échanger immédiatement avec une carte de sa main.": {
      en: "The first player to touch the discarded card can swap it instantly with a card from their hand.",
      de: "Der erste Spieler, der die abgelegte Karte berührt, darf sie sofort gegen eine Karte aus seiner Hand austauschen.",
      it: "Il primo giocatore che tocca la carta scartata può scambiarla immediatamente con una carta della propria mano.",
      pt: "O primeiro jogador a tocar na carta descartada pode trocá-la imediatamente por uma carta da sua mão.",
    },
    "La carte ainsi rejetée peut à son tour être interceptée, etc.": {
      en: "That newly discarded card can then be intercepted in turn, and so on.",
      de: "Die neu abgelegte Karte kann wiederum abgefangen werden.",
      it: "La carta appena scartata può a sua volta essere intercettata.",
      pt: "Essa carta recém-descartada pode, por sua vez, ser intercetada, e assim por diante.",
    },
    "Le jeu reprend ensuite avec le joueur dont c'était le tour de jouer.": {
      en: "Play then resumes with the player whose turn it was.",
      de: "Anschließend geht das Spiel mit dem Spieler weiter, der am Zug war.",
      it: "Il gioco riprende quindi con il giocatore il cui turno era in corso.",
      pt: "O jogo continua depois com o jogador cuja vez era.",
    },
    "Règles d'interception :": {
      en: "Interception rules:",
      de: "Regeln zum Abfangen:",
      it: "Regole di intercetto:",
      pt: "Regras de interceção:",
    },
    "Toucher, c'est jouer ! Une fois touchée, la carte interceptée doit obligatoirement être échangée avec une autre carte de sa main.": {
      en: "Touching means playing! Once touched, the intercepted card must be exchanged with another card from that player's hand.",
      de: "Berühren heißt spielen! Wer eine Karte berührt, muss sie unbedingt abfangen und mit einer Karte aus seiner Hand tauschen.",
      it: "Toccare significa giocare! Una volta toccata, la carta intercettata deve obbligatoriamente essere scambiata con una carta della propria mano.",
      pt: "Tocar é jogar! Uma vez tocada, a carta intercetada deve obrigatoriamente ser trocada por outra carta da mão.",
    },
    "Égalité : si deux joueurs touchent en même temps, le joueur dont c'est le tour reprend la main.": {
      en: "Tie: if two players touch it at the same time, the player whose turn it is takes priority.",
      de: "Gleichzeitig: Berühren zwei Spieler die Karte gleichzeitig, hat der Spieler am Zug Vorrang.",
      it: "Parità: se due giocatori toccano la carta nello stesso momento, la priorità spetta al giocatore di turno.",
      pt: "Empate: se dois jogadores tocarem ao mesmo tempo, o jogador da vez tem prioridade.",
    },

    // ── TOTAL 10 ! ──
    "À son tour et après avoir rejeté une carte, un joueur peut annoncer «TOTAL 10 !» et étaler ses 10 cartes.": {
      en: "On their turn, after discarding a card, a player may call \"TOTAL 10!\" and lay down their 10 cards.",
      de: "In seinem Zug kann ein Spieler, nachdem er eine Karte abgelegt hat, „TOTAL 10!“ ansagen und seine 10 Karten auslegen.",
      it: "Durante il proprio turno, dopo aver scartato una carta, un giocatore può annunciare “TOTAL 10!” e scoprire le sue 10 carte.",
      pt: "Na sua vez e depois de descartar uma carta, um jogador pode anunciar «TOTAL 10!» e mostrar as suas 10 cartas.",
    },
    "Pour être valide, sa main doit être composée de sommes égales à 10, dans des couleurs différentes, sans répéter une combinaison dans la même couleur.": {
      en: "To be valid, their hand must be made up of sums equal to 10, each in a different colour, without repeating a combination in the same colour.",
      de: "Damit dies gültig ist, muss seine Hand aus Kombinationen bestehen, deren Summe 10 ergibt, und zwar in verschiedenen Farben. Eine Farbe darf nicht zweimal verwendet werden.",
      it: "Per essere valida, la mano deve essere composta da combinazioni che sommano 10 in colori diversi. Uno stesso colore non può essere utilizzato due volte.",
      pt: "Para ser válida, a sua mão deve ser composta por somas iguais a 10, em cores diferentes, sem repetir uma combinação na mesma cor.",
    },
    "Si la combinaison est correcte, le joueur remporte immédiatement la manche.": {
      en: "If the combination is correct, the player immediately wins the round.",
      de: "Ist die Kombination korrekt, gewinnt der Spieler sofort die Runde.",
      it: "Se la combinazione è corretta, il giocatore vince immediatamente la manche.",
      pt: "Se a combinação estiver correta, o jogador ganha imediatamente a ronda.",
    },
    "Dans le cas contraire, il reprend ses cartes en main et la partie continue normalement.": {
      en: "Otherwise, they take their cards back into their hand and the game continues normally.",
      de: "Andernfalls nimmt er seine Karten wieder auf und das Spiel geht normal weiter.",
      it: "In caso contrario, riprende le proprie carte e la partita continua normalmente.",
      pt: "Caso contrário, recolhe as suas cartas e o jogo continua normalmente.",
    },

    // ── Comment ça se termine ? ──
    "La partie se joue en 5 manches.": {
      en: "The game is played over 5 rounds.",
      de: "Das Spiel wird über 5 Runden gespielt.",
      it: "La partita si gioca in 5 manche.",
      pt: "O jogo joga-se em 5 rondas.",
    },
    "Le joueur qui a annoncé «TOTAL 10» : marque 10 points.": {
      en: "The player who called \"TOTAL 10\" scores 10 points.",
      de: "Der Spieler, der „TOTAL 10“ angesagt hat, erhält 10 Punkte.",
      it: "Il giocatore che ha annunciato «TOTAL 10» ottiene 10 punti.",
      pt: "O jogador que anunciou «TOTAL 10» marca 10 pontos.",
    },
    "Les autres joueurs marquent un score négatif égal au nombre de leurs cartes non combinées.": {
      en: "The other players score a negative score equal to the number of their uncombined cards.",
      de: "Die anderen Spieler erhalten eine negative Punktzahl, die der Anzahl ihrer nicht kombinierten Karten entspricht.",
      it: "Gli altri giocatori ricevono un punteggio negativo pari al numero di carte non combinate rimaste nella loro mano.",
      pt: "Os outros jogadores marcam uma pontuação negativa igual ao número das suas cartas não combinadas.",
    },
    "Le joueur gagnant commence toujours la manche suivante.": {
      en: "The winning player always starts the next round.",
      de: "Der Gewinner beginnt immer die nächste Runde.",
      it: "Il giocatore vincente inizia sempre il turno successivo.",
      pt: "O jogador vencedor começa sempre a ronda seguinte.",
    },
    "À la fin de la 5ème manche, le joueur ayant le plus de points remporte la partie.": {
      en: "At the end of the 5th round, the player with the most points wins the game.",
      de: "Am Ende der 5. Runde gewinnt der Spieler mit den meisten Punkten.",
      it: "Alla fine della 5ª manche, il giocatore con più punti vince la partita.",
      pt: "No final da 5ª ronda, o jogador com mais pontos vence a partida.",
    },
    "Exemple :": { en: "Example:", de: "Beispiel:", it: "Esempio:", pt: "Exemplo:" },
    "Le joueur A marque 10 points (il a fait TOTAL 10)": {
      en: "Player A scores 10 points (they made TOTAL 10)",
      de: "Spieler A erhält 10 Punkte (er hat TOTAL 10 geschafft).",
      it: "Il giocatore A ottiene 10 punti (ha fatto TOTAL 10).",
      pt: "O jogador A marca 10 pontos (fez TOTAL 10).",
    },
    "Le joueur B marque –4 points (il lui reste 4 cartes non combinées : 3 cartes bleues (5, 3 et 1) et une carte verte (1).": {
      en: "Player B scores –4 points (they have 4 uncombined cards left: 3 blue cards (5, 3 and 1) and one green card (1)).",
      de: "Spieler B erhält –4 Punkte (er hat noch 4 nicht kombinierte Karten: 3 blaue Karten (5, 3 und 1) und eine grüne Karte (1)).",
      it: "Il giocatore B ottiene –4 punti (gli restano 4 carte non combinate: 3 carte blu (5, 3 e 1) e una carta verde (1)).",
      pt: "O jogador B marca –4 pontos (ficam-lhe 4 cartas não combinadas: 3 cartas azuis (5, 3 e 1) e uma carta verde (1)).",
    },
  });
})();
