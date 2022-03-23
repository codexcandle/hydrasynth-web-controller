import './patchSelect.styles.sass';

import { MIDIVal, MIDIValOutput } from '@midival/core';
import { Box, Button, ButtonGroup, Container, Typography } from '@mui/material';
import React, { FC, MouseEvent, useEffect, useState } from 'react';

import { PATCH_SELECTION_HEADER } from '../../model/appConstants';
import { HSYNTH_MIDI_CC_BANK, HSYNTH_MIDI_DEVICE_NAME } from '../../model/appConstants';

const PatchSelect: FC = () => {
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
    const programIndex: number = e.currentTarget.textContent
      ? +e.currentTarget.textContent - 1
      : 0; // 0-127;

    if (hsynthMidiOutput) setProgram(hsynthMidiOutput, bankIndex, programIndex);
  };

  function setProgram(output: MIDIValOutput, bankIndex: number, programIndex: number) {
    output.sendProgramChange(programIndex);
    output.sendControlChange(HSYNTH_MIDI_CC_BANK, bankIndex);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container
        component="main"
        sx={{ mt: 8, mb: 2 }}
        maxWidth="sm"
        className="containerBg rcorners"
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {PATCH_SELECTION_HEADER}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'select program.'}
        </Typography>
        {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={handleClick}>1</Button>
          <Button onClick={handleClick}>2</Button>
          <Button onClick={handleClick}>3</Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default PatchSelect;
