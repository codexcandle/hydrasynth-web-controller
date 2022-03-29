# HYDRASYNTH WEB CONTROLLER

## Overview

As an owner of the Hydrasynth synthesizer:

[hydrasynth homepage](https://www.ashunsoundmachines.com/hydrasynth-key)

I found it difficult to view its (somewhat small) main LCD display screen.

- Thus, this tool was created to address this concern.
- DESKTOP-ONLY (as again, preferring larger screen space)!
- MIDI-COMPATIBLE BROWSER ONLY (e.g. chrome, but NOT FIREFOX)!
- project code started via:
  [sword breaker's template](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier)

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

Page display just says "BANK....PROGRAM" (and generally appears to not be working).

1. Ensure viewing from midi-compatible brower like CHROME (but NOT Firefox, etc).
2. Ensure you have your HYDRASYNTH plugged into the same machine you're viewing this app (via MIDI).
3. Refresh the page (as the app looks for your "hydrasynth" midi device upon page load).
