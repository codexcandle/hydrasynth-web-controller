import './patchSelect.styles.sass';

import { MIDIVal, MIDIValOutput } from '@midival/core';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { FC, MouseEvent, useEffect, useState } from 'react';

import { PATCH_SELECTION_HEADER } from '../../model/appConstants';
import { HSYNTH_MIDI_CC_BANK, HSYNTH_MIDI_DEVICE_NAME } from '../../model/appConstants';
import PatchData from './../../model/interface/patchData';

interface Props {
  bankTitle: string;
  programs: PatchData[];
}

const PatchSelect: FC<{ bankTitle: string; programs: PatchData[] }> = ({
  bankTitle,
  programs,
}: Props) => {
  const [hsynthMidiOutput, setHsynthMidiOutput] = useState<MIDIValOutput>();
  const [programList, setProgramList] = useState<PatchData[]>();

  useEffect(() => {
    getDeviceIndex();
    setProgramList(programs);
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

  const handleClick =
    (index: number) =>
    (e: MouseEvent<HTMLElement>): void => {
      e.preventDefault();

      const programIndex: number = index;

      // TODO - make values dynamic
      const bankIndex = 0; // 0-3

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
        maxWidth="lg"
        className="containerBg rcorners"
      >
        <Typography variant="h4" component="h3" gutterBottom>
          {PATCH_SELECTION_HEADER}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {bankTitle}
        </Typography>
        {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {programList?.map((program, index) => (
            <Grid item xs={3} key={index} className="grid">
              <Button variant="contained" key={index} onClick={handleClick(index)}>
                {program.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PatchSelect;
