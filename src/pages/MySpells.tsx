import {
  Button,
  Typography,
  Link,
  makeStyles,
} from '@material-ui/core';

import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { mainTheme } from '../theme';
import { StoreContext } from '../store/StoreContext';

const colors = {
  darkbrown: '#5B382B'
};

const useStyles = makeStyles((theme) => ({
  wrapper:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  spellBookContainer: {
    width: '1000px',
    height: '570px',
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
    top: 72,
    left: 104,
  },
  nameTextContainer: {
    position: 'relative',
    display: 'block',
    top: -210,
    left: 218,
    textAlign: 'center',
  },
  spellNameContainer: {
    position: 'relative',
    display: 'block',
    width: 400,
    top: -202,
    left: 515,
    textAlign: 'center',
  },
  spellSchoolContainer: {
    position: 'relative',
    width: 400,
    top: -155,
    left: 548,
    textAlign: 'left',
  },
  spellRangeContainer: {
    position: 'relative',
    width: 400,
    top: -105,
    left: 548,
    textAlign: 'left',
  },
  spellDurationContainer: {
    position: 'relative',
    width: 400,
    top: -55,
    left: 548,
    textAlign: 'left',
  },
  nameText: { color: theme.palette.secondary.main, },
  spellNameText: {
    color: theme.palette.primary.main,
    fontSize: '1.1em',
  },
  spellSchoolText: { color: colors.darkbrown, },
  spellRangeText: { color: colors.darkbrown, },
  spellDurationText: { color: colors.darkbrown, },
  nextText: { color: colors.darkbrown, cursor: 'pointer '},
  prevText: { color: colors.darkbrown, cursor: 'pointer' },

  prevContainer: {
    position: 'relative',
    top: 5,
    left: 88,
    textAlign: 'left',
  },
  nextContainer: {
    width: 100,
    position: 'relative',
    top: -22,
    left: 870,
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
  creditsContainer: {
    width: 950,
    textAlign: 'right',
  },
  link: {
    textDecoration: 'none',
    color: '#e0decc',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const spellColors: { [name: string]: string } = {
  Abjuration: '#3e7172',
  Conjuration: '#b1621f',
  Divination: 'white',
  Enchantment: '#bf971a',
  Evocation: '#7e5269',
  Illusion: '#374e6c',
  Necromancy: '#3a362c',
  Transmutation: '#576e3d',
}

// const nameTextColors: { [name: string]: string } = {
//   Abjuration: '#3e7172',
//   Conjuration: '#b1621f',
//   Divination: '#a28e77',
//   Enchantment: '#bf971a',
//   Evocation: '#7e5269',
//   Illusion: '#374e6c',
//   Necromancy: '#3a362c',
//   Transmutation: '#576e3d',
// }

const getRandomInt = (max: number) => {
  const rd: number = Math.random();
  return Math.floor(rd * max);
}

const MySpells = observer((): JSX.Element | null => {
  const classes = useStyles(mainTheme);
  const store = useContext(StoreContext);
  const { user } = store;
  const [spellIdx, setSpellIdx] = useState(0);

  let spellsCount = 0;
  if (user.spells && user.spells.length > 0) {
    spellsCount = user.spells.length;
  }

  var spellSchool = (user.spells && spellsCount > 0 && user.spells[spellIdx].school) || Object.keys(spellColors)[getRandomInt(8)];
  if (spellSchool.length === 0) {
    spellSchool = Object.keys(spellColors)[getRandomInt(8)];
  }
  const backgroundImage = `url("/img/spellbook_${spellSchool.toLowerCase()}.png") no-repeat`;
  const textColor = spellColors[spellSchool];
  const spellName = (user.spells && spellsCount > 0 && user.spells[spellIdx].name) || '';

  return (
    <div className={classes.wrapper}>
    <div className={classes.spellBookContainer} style={{ background: backgroundImage }}>
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
        user.spells && spellsCount > 0 && (
        <div>
          <div className={classes.spellImageContainer}>
              <img width="342px" height="342px" src={`https://spells-explorer.s3.amazonaws.com/images/${spellName.replace(':','').split(' ').map(s => s.toLowerCase()).join('-')}.png`} alt={`${spellName}`} />
          </div>

          <div className={classes.nameTextContainer}>
            <Typography variant="body1" className={classes.nameText}> :Name: </Typography>
          </div>

          <div className={classes.spellNameContainer}>
            <Typography variant="body1" style={{ color: textColor }}> { spellName } </Typography>
          </div>

          <div className={classes.spellSchoolContainer}>
            <Typography variant="body1" className={classes.spellSchoolText}>
              School .......... { spellSchool }
            </Typography>
          </div>

          <div className={classes.spellRangeContainer}>
            <Typography variant="body1" className={classes.spellRangeText}>
              Range ........... { user.spells[spellIdx].range }
            </Typography>
          </div>

          <div className={classes.spellDurationContainer}>
            <Typography variant="body1" className={classes.spellDurationText}>
              { user.spells[spellIdx].duration }
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
    <div className={classes.creditsContainer}>
      <Typography>
        Crafted by <Link href="https://twitter.com/ozzzmabro" className={classes.link}>Ozzz</Link> & <Link href="https://twitter.com/aranair" className={classes.link}>aranair</Link>
      </Typography>
    </div>
    </div>
  );
});

export default MySpells;
