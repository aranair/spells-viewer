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

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import React, { useState, useContext } from 'react';
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

const useStyles = makeStyles((theme) => ({
  spellBookContainer: {
    background: 'url("/img/spellbook.jpeg") no-repeat',
    margin: '30px auto 0 auto',
    width: '1000px',
    height: '600px',
  },
  connectButtonContainer: {
    position: 'relative',
    display: 'block',
    top: 200,
    left: -210,
    textAlign: 'center',
  },
  spellImageContainer: {
    width: '300px',
    height: '300px',
    position: 'relative',
    top: 95,
    left: 135,
  },
  nameTextContainer: {
    position: 'relative',
    display: 'block',
    width: 100,
    top: -206,
    left: 663,
    textAlign: 'center',
  },
  spellNameContainer: {
    position: 'relative',
    display: 'block',
    width: 400,
    top: -198,
    left: 515,
    textAlign: 'center',
  },
  spellSchoolContainer: {
    position: 'relative',
    width: 400,
    top: -150,
    left: 548,
    textAlign: 'left',
  },
  spellRangeContainer: {
    position: 'relative',
    width: 400,
    top: -100,
    left: 548,
    textAlign: 'left',
  },
  spellDurationContainer: {
    position: 'relative',
    width: 400,
    top: -50,
    left: 548,
    textAlign: 'left',
  },
  nameText: { color: theme.palette.spellbook.brown, },
  spellNameText: {
    color: theme.palette.spellbook.purple,
    fontSize: '1.1em',
  },
  spellSchoolText: { color: theme.palette.spellbook.darkbrown, },
  spellRangeText: { color: theme.palette.spellbook.darkbrown, },
  spellDurationText: { color: theme.palette.spellbook.darkbrown, },
  nextText: { color: theme.palette.spellbook.darkbrown, },
  prevText: { color: theme.palette.spellbook.darkbrown, },

  prevContainer: {
    position: 'relative',
    top: 15,
    left: 100,
    textAlign: 'left',
  },
  nextContainer: {
    position: 'relative',
    top: -10,
    left: 850,
    textAlign: 'left',
  },

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

const MySpells = observer((): JSX.Element | null => {
  const classes = useStyles(mainTheme);
  const store = useContext(StoreContext);
  const { user } = store;
  const [spellIdx, setSpellIdx] = useState(0);

  let spellsCount = 0;
  if (user.spells && user.spells.length > 0) {
    spellsCount = user.spells.length;
  }

  return (
    <div className={classes.spellBookContainer}>
      <div className={classes.connectButtonContainer}>
        {
          !user.wallet && (
          <Button variant="contained" color="secondary" onClick={user.connect}>
            Connect
          </Button>
          )
        }
      </div>
      {
        user.spells && (
        <div>
          <div className={classes.spellImageContainer}>
              <img src={`https://spells-explorer.s3.amazonaws.com/images/${user.spells[spellIdx].name.split(' ').map(s => s.toLowerCase()).join('-')}.png`} alt={`${user.spells[spellIdx].name}`} />
          </div>

          <div className={classes.nameTextContainer}>
            <Typography variant="body1" className={classes.nameText}> :Name: </Typography>
          </div>

          <div className={classes.spellNameContainer}>
            <Typography variant="body1" className={classes.spellNameText}> { user.spells[spellIdx].name } </Typography>
          </div>

          <div className={classes.spellSchoolContainer}>
            <Typography variant="body1" className={classes.spellSchoolText}>
              School .......... { user.spells[spellIdx].school }
            </Typography>
          </div>

          <div className={classes.spellRangeContainer}>
            <Typography variant="body1" className={classes.spellRangeText}>
              Range ........... { user.spells[spellIdx].range }
            </Typography>
          </div>

          <div className={classes.spellDurationContainer}>
            <Typography variant="body1" className={classes.spellDurationText}>
              Duration ....... { user.spells[spellIdx].duration }
            </Typography>
          </div>

          <div className={classes.prevContainer}>
            <Typography
               variant="body1"
               className={classes.prevText}
               onClick={() => setSpellIdx((spellIdx - 1) % spellsCount || 0)}
            >
            Prev
            </Typography>
          </div>

          <div className={classes.nextContainer}>
            <Typography
               variant="body1"
               className={classes.nextText}
               onClick={() => setSpellIdx((spellIdx + 1) % spellsCount || 0)}
            >
              Next
            </Typography>
          </div>
        </div>
        )
      }
    </div>
  );
});

export default MySpells;
