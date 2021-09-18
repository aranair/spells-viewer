import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mainTheme } from '../theme';
import Header  from '../components/Header';

import spells from '../spells.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150, filterable: true },
  { field: 'name', headerName: 'Spell', width: 200, filterable: true },
  { field: 'school', headerName: 'School', width: 200, filterable: true },
  { field: 'range', headerName: 'Range', width: 200, filterable: true },
  { field: 'duration', headerName: 'Duration', width: 300, filterable: true },
];

const useStyles = makeStyles((theme) => ({
  spellListContainer: {
    display: 'block',
    margin: '30px auto 0 auto',
    height: '70vh',
    width: '80%',
    maxWidth: 1200,
  },
  helperContainer: {
    textAlign: 'right',
  }
}));

const SpellList = observer((): JSX.Element | null => {
  const classes = useStyles(mainTheme);

  return (
    <>
    <Header text="Spells (for Wizards and other Adventurers)" />
    <div className={classes.spellListContainer}>
      <div className={classes.helperContainer}>
        <Typography>
          * Mouseover columns to filter
        </Typography>
      </div>

      <DataGrid rows={spells} columns={columns} />
    </div>
    </>
  );
});

export default SpellList;
