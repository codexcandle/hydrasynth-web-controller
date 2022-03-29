# HYDRASYNTH WEB CONTROLLER

## Overview

This project started as was difficult to view the small LCD display of the Hydrasynth:
[hydrasynth homepage](https://www.ashunsoundmachines.com/hydrasynth-key)

Thus, starting with LARGE DISPLAY to choose device PATCH (PROGRAM + BANK).

DESKTOP-ONLY (as again, preferring larger screen space)!

CHROME-ONLY (as requires midi-compatible browser)!

Note, this code for this project was started via:
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

Page display just says "BANK....PROGRAM."

1. Ensure viewing from midi-compatible brower like CHROME (but NOT Firefox, etc).
2. Ensure you have your HYDRASYNTH plugged into the same machine you're viewing this app.
3. Refresh the page (as looks for midi device on page load).
