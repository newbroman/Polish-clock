# Say the Time in Polish

An interactive analogue clock that shows how to say the time in Polish, with phonetics, English and audio.

**Live app:** https://newbroman.github.io/Polish-clock/

## Features

- Analogue clock with hour, minute and optional second hands. Drag the hands to set a time, or type a time (for example 14:20) into the digital box.
- Shows the Polish phrase, a phonetic rendering and the English equivalent for the time displayed.
- Two modes:
  - Casual: 12-hour style ("pięć po czwartej", "w pół do piątej", "za dziesięć piąta", with "północ" and "południe" for midnight and noon).
  - Formal: 24-hour style ("Godzina siedemnasta dziesięć"), with "zero" added for minutes 1 to 9.
- Words are colour coded by grammar: cardinal numbers (blue), nominative (orange) and genitive (purple).
- Buttons: Actual Time (follows the real clock), Random Time, Sec on/off (adds seconds to the phrase), Phon (show/hide phonetics), and EN/PL for the interface language.
- Quiz mode: hides the answer and offers four multiple-choice phrases; correct turns green, wrong turns red. A Reveal button is available.
- Listen at normal speed or half speed, using the browser's Polish speech synthesis.
- Bilingual help pages (English and Polish) explaining the grammar, loaded in a pop-up panel.
- Follows the system light/dark setting.

## Using it

Open the live app in a modern browser. It installs as a PWA: on a phone you can add it to the home screen using the browser's menu, and `manifest.json` provides the name, icon and standalone display. A service worker caches the app on first load, so it works offline afterwards.

Audio uses the Web Speech API and asks for the `pl-PL` language. For proper Polish pronunciation the device needs a Polish voice installed; otherwise the browser may use a default voice or stay silent.

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Page markup: clock, controls, display area, help pop-up |
| `script.js` | All app logic: time-to-Polish conversion, phonetics, clock dragging, quiz, speech |
| `style.css` | Styling, including the dark theme |
| `help_en.html`, `help_pl.html` | Help content fetched into the pop-up |
| `manifest.json`, `icon.png` | PWA manifest and app icon |
| `sw.js` | Service worker: precaches the app files (relative paths) and serves them cache-first; registered from `index.html`. Bump `CACHE_NAME` when files change |

## Development

There is no build step. Serve the folder with a static server and open the page:

```
python3 -m http.server
```

then open http://localhost:8000.

The help pages are loaded with `fetch`, so open the app through a server rather than directly from the file system.

## Notes

- The help text writes the half-hour form as "wpół do"; the app itself displays "w pół do".

Built by Martin Hollingham.
