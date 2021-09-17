import {
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';

import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { mainTheme } from '../theme';
import { StoreContext } from '../store/StoreContext';
import Spellbook  from '../components/Spellbook';
import Header  from '../components/Header';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    textAlign: 'center',
    marginTop: 100,
  }
}));

const MySpells = observer((): JSX.Element | null => {
  const classes = useStyles(mainTheme);

  return (
    <>
      <Header text="Spells (for Wizards and other Adventurers)" />
      <Spellbook spells={[]} filteredByUser={true} />
    </>
  );
});

export default MySpells;
