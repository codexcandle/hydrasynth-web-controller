import { MIDIVal, MIDIValOutput } from '@midival/core';
import Button from '@mui/material/Button';
import React, { FC, MouseEvent, useEffect, useState } from 'react';

import { HSYNTH_MIDI_CC_BANK, HSYNTH_MIDI_DEVICE_NAME } from '../../model/appConstants';

const MidiThing: FC = () => {
  const [hsynthMidiOutput, setHsynthMidiOutput] = useState<MIDIValOutput>();

  useEffect(() => {
    getDeviceIndex();
  }, []);

  function getDeviceIndex() {
    MIDIVal.connect().then((accessObject) => {
      for (let i = 0; i < accessObject.inputs.length; i++) {
        const name = accessObject.inputs[i].name;
        if (name === HSYNTH_MIDI_DEVICE_NAME) {
          setHsynthMidiOutput(new MIDIValOutput(accessObject.outputs[i]));
        }
      }
    });
  }

  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();

    // TODO - make values dynamic
    const bankIndex = 0; // 0-3
    const programIndex = 0; // 0-127;

    if (hsynthMidiOutput) setProgram(hsynthMidiOutput, bankIndex, programIndex);
  };

  function setProgram(output: MIDIValOutput, bankIndex: number, programIndex: number) {
    output.sendProgramChange(programIndex);
    output.sendControlChange(HSYNTH_MIDI_CC_BANK, bankIndex);
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        01
      </Button>
    </div>
  );
};

export default MidiThing;
