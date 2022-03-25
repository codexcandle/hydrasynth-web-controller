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
import BankData from './../../model/interface/bankData';
import PatchData from './../../model/interface/patchData';

interface Props {
  banks: BankData[];
}

const PatchSelect: FC<{
  banks: BankData[];
}> = ({ banks }: Props) => {
  const [hsynthMidiOutput, setHsynthMidiOutput] = useState<MIDIValOutput>();
  const [programList, setProgramList] = useState<PatchData[]>();
  const [programIndex, setProgramIndex] = useState(0);
  const [bankIndex, setBankIndex] = useState(0);

  const [activeBankName, setActiveBankName] = useState('');

  let names = [];
  for (let bank of banks) {
    names.push(bank.title);
  }
  const [bankNames, setBankNames] = useState<string[]>(names);

  useEffect(() => {
    const getDevIndex = async () => await getDeviceIndex();

    getDevIndex();

    setProgramList(banks[bankIndex].programs);
    console.log('2');
    if (hsynthMidiOutput) {
      setProgram(hsynthMidiOutput, bankIndex, programIndex);
    }
  }, []);

  async function getDeviceIndex() {
    MIDIVal.connect().then((accessObject) => {
      for (let i = 0; i < accessObject.inputs.length; i++) {
        const name = accessObject.inputs[i].name;
        if (name === HSYNTH_MIDI_DEVICE_NAME) {
          const midiOutput = new MIDIValOutput(accessObject.outputs[i]);
          setHsynthMidiOutput(midiOutput);

          // TODO - hacky to include in this method, but await call not working; investigate.
          setProgramList(banks[bankIndex].programs);
          setProgram(midiOutput, bankIndex, programIndex);
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
      setProgramList(banks[fileIndex].programs);
      setProgram(hsynthMidiOutput, index, programIndex);
      setBankIndex(index);
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
        <Typography variant="h5" component="h4" gutterBottom sx={{ color: 'gray' }}>
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
                  backgroundColor: index === programIndex ? 'green' : 'black',
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
