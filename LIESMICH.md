# diyato.com – Seite von Diyato Studios

Statische Seite ohne Framework, gebaut am 11. Oktober 2026 aus dem abgesegneten Entwurf (`Desktop/diyato-website-entwurf`).

## Dateien

- `index.html`, `spiele.html`, `feedback.html`: Startseite, Spiele, Feedback und Kontakt (wie im Entwurf)
- `impressum.html`, `datenschutz.html`, `konto-loeschen.html`: Texte unverändert aus Kiezkrieg (`public/*.html`)
- `css/stil.css`: gemeinsames Aussehen aller Seiten
- `js/formular.js`: zeigt beim Senden nur „Das Formular ist bald verfügbar“ (es wird nichts verschickt)
- `schriften/`: Figtree und Bricolage Grotesque lokal (SIL Open Font License, Lizenzen liegen daneben)
- `bilder/`: Logo und Spiel-Icons als WebP, fürs Web verkleinert
- `.nojekyll`: damit GitHub Pages die Dateien unverändert ausliefert

## Grundsätze

- Nichts wird von fremden Servern geladen, keine Cookies, kein Tracking, kein lokaler Speicher.
- Jede Seite hat eine strenge Content-Security-Policy (nur eigene Dateien, Formulare senden nirgendwohin).
  Wer später etwas Fremdes einbindet oder das Formular anschließt, muss sie in allen Seiten anpassen.

## Ansehen

`index.html` im Explorer doppelklicken. Oder im Ordner `npx serve .` und dann http://localhost:3000 öffnen.
