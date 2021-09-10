import {
  AppBar,
  Avatar,
  Button,
  Collapse,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styled from "@emotion/styled";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mainTheme } from '../theme';
import { StoreContext } from '../store/StoreContext';

import spells from '../spells.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150, filterable: true },
  { field: 'name', headerName: 'Spell', width: 200, filterable: true },
  { field: 'school', headerName: 'School', width: 200, filterable: true },
  { field: 'range', headerName: 'Range', width: 200, filterable: true },
  { field: 'duration', headerName: 'Duration', width: 300, filterable: true },
];

const SpellListContainer = styled.div`
  display: 'block';
  margin: 30px auto 0 auto;
  height: 80vh;
  width: 80%;
  max-width: 1200px;
`;

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    justifyContent: 'space-between',
    color: '#e1c0b1',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: theme.spacing(1),
    },
  },
  accountContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  link: {
    textDecoration: 'none',
    color: '#e0decc',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const SpellList = observer((): JSX.Element | null => {
  const classes = useStyles(mainTheme);
  const store = useContext(StoreContext);
  const { user } = store;

  let spellsCount = 0;
  if (user.spells && user.spells.length > 0) {
    spellsCount = user.spells.length;
  }

  return (
    <SpellListContainer>
      <DataGrid
        rows={spells}
        columns={columns}
      />
    </SpellListContainer>
  );
});

export default SpellList;
