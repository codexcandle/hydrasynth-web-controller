import './app.styles.sass';

import React, { FC } from 'react';

import MidiThing from '../midiThing/midiThing';

const App: FC = () => {
  return (
    <div className="App">
      <header>Hydrasynth Web Controller</header>
      <MidiThing />
    </div>
  );
};

export default App;
