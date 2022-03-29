# HYDRASYNTH WEB CONTROLLER

## Overview

[home](https://codebycandle.com/lab/hsynth-web-controller/)

As an owner of the [Hydrasynth](https://www.ashunsoundmachines.com/hydrasynth-key) hardware synthesizer, have found it difficult to view its (somewhat small) main LCD display screen. Thus, this tool was created.

![tool](https://github.com/codexcandle/hydrasynth-web-controller/blob/main/screenshot/screenshot.png?raw=true)

A few notes:

- DESKTOP-ONLY (as again, preferring larger screen space).
- MIDI-COMPATIBLE BROWSER ONLY (e.g. chrome, but NOT FIREFOX).
- special thanks for [sword breaker's template](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier).

## Setup

1. install project dependencies:
   `yarn install`
2. plugin HYDRASYNTH to computer (via usb).
3. start project:
   `yarn dev`
4. view web page:
   [http://localhost:3000/](http://localhost:3000/)
5. using page controls, send midi commands to HYDRASYNTH.

## Help

Page display just says "BANK....PROGRAM" (and seems broken).

1. Ensure viewing from midi-compatible brower (e.g. chrome, but NOT FIREFOX).
2. Ensure your HYDRASYNTH is plugged in (via MIDI) to the same computer you're viewing this web app.
3. Refresh the page (as midi device is sought upon page load).
