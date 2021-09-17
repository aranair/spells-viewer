import {
  Typography,
  Container,
} from '@material-ui/core';
import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';

import { mainTheme } from '../theme';
import { StoreContext } from '../store/StoreContext';
import Spellbook  from '../components/Spellbook';
import Header  from '../components/Header';
import spellsList from '../spells.json';

const AllSpells = observer((): JSX.Element | null => {

  return (
    <>
      <Header text="The Hidden Book of All Spells" />
      <Spellbook spells={spellsList} filteredByUser={false} />
    </>
  );
});

export default AllSpells;
