import './patchSelect.sass';

import { MIDIVal, MIDIValOutput } from '@midival/core';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { FC, MouseEvent, useEffect, useState } from 'react';

import { PATCH_SELECTION_HEADER } from '../../model/constant/appConstants';
import {
  HSYNTH_MIDI_CC_BANK,
  HSYNTH_MIDI_DEVICE_NAME,
} from '../../model/constant/appConstants';
import BankSelect from '../bankSelect/bankSelect';
import PatchData from './../../model/interface/patchData';

interface Props {
  bankNames: string[];
  activeBankName: string;
  programs?: PatchData[];
}

const PatchSelect: FC<{
  bankNames: string[];
  activeBankName: string;
  programs: PatchData[];
}> = ({ bankNames, activeBankName, programs }: Props) => {
  const [hsynthMidiOutput, setHsynthMidiOutput] = useState<MIDIValOutput>();
  const [programList, setProgramList] = useState<PatchData[]>();
  const [programIndex, setProgramIndex] = useState(0);
  const [bankIndex, setBankIndex] = useState(0);

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

      if (hsynthMidiOutput) {
        setProgram(hsynthMidiOutput, bankIndex, index);
        setProgramIndex(index);
      }
    };

  const handleBankSelect = (index: number, fileIndex: number) => {
    if (hsynthMidiOutput) {
      setProgram(hsynthMidiOutput, index, programIndex);
      setBankIndex(index);

      // TODO - handle bank-file index
      console.log('BANK SELECT index: ' + index + ' fileIndex: ' + fileIndex);
    }
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
          {activeBankName}
        </Typography>
        <BankSelect bankNames={bankNames} selectHandler={handleBankSelect} />
        <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          {programList?.map((program, index) => (
            <Grid item xs={3} key={index} className="grid">
              <Button
                variant="contained"
                key={index}
                onClick={handleClick(index)}
                sx={{
                  backgroundColor: index === programIndex ? 'blue' : 'black',
                }}
              >
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
