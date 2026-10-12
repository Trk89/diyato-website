# diyato.com – Seite von Diyato Studios

Statische Seite ohne Framework, gebaut am 11. Oktober 2026 aus dem abgesegneten Entwurf (`Desktop/diyato-website-entwurf`).

## Dateien

- `index.html`, `spiele.html`, `feedback.html`: Startseite, Spiele, Feedback und Kontakt (wie im Entwurf)
- `impressum.html`: Text aus Kiezkrieg (`public/impressum.html`), ohne das Kontaktformular
- `datenschutz.html`: oben eigener Teil „Diese Website“, darunter „Kiezkrieg“ mit der Erklärung unverändert aus Kiezkrieg
- `konto-loeschen.html`: Text unverändert aus Kiezkrieg
- `squishy-world/datenschutz.html`: Datenschutzerklärung für Squishy World (Adresse /squishy-world/datenschutz, Pfade relativ mit `../`)
- `404.html`: Seite nicht gefunden (absolute Pfade, weil GitHub Pages sie bei jeder unbekannten Adresse zeigt)
- `favicon.ico`, `apple-touch-icon.png`, `bilder/favicon-192.png`: Favicon aus dem „D“ des Logos
- `css/stil.css`: gemeinsames Aussehen aller Seiten
- `js/formular.js`: zeigt im Feedback-Formular beim Senden nur „Das Formular ist bald verfügbar“ (es wird nichts verschickt)
- `schriften/`: Figtree und Bricolage Grotesque lokal (SIL Open Font License, Lizenzen liegen daneben)
- `bilder/`: Logo und Spiel-Icons als WebP, fürs Web verkleinert
- `.nojekyll`: damit GitHub Pages die Dateien unverändert ausliefert

## Grundsätze

- Nichts wird von fremden Servern geladen, keine Cookies, kein Tracking, kein lokaler Speicher.
- Jede Seite hat eine strenge Content-Security-Policy (nur eigene Dateien, Formulare senden nirgendwohin).
  Wer später etwas Fremdes einbindet oder das Formular anschließt, muss sie in allen Seiten anpassen.

## Ansehen

`index.html` im Explorer doppelklicken (die 404-Seite sieht man so ohne Aussehen, weil sie absolute Pfade nutzt). Oder im Ordner `npx serve .` und dann http://localhost:3000 öffnen.
