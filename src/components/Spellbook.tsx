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
import { SpellData } from '../interface/spell-data.interface';
import { WizardData } from '../interface/wizard-data.interface';

const colors = {
  darkbrown: '#5B382B',
};

const useStyles = makeStyles((theme) => ({
  wrapper:{
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
    flexDirection: 'row',
    minWidth: 1000,
  },
  spellBookWrapper:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  spellBookContainer: {
    width: 1000,
    height: 570,
  },
  wizardNameContainer: {
    textAlign: 'center',
    width: 240,
    height: 70,
    marginLeft: 90,
    paddingTop: 15
  },
  wizardImageContainer: {
    width: 450,
    height: 450,
    backgroundImage: 'url("/img/wizard_frame.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  wizardImage: {
    paddingLeft: 35,
  },
  wizardContainer: {
    width: 450,
    height: 450,
    marginTop: 50,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  spellBookContentContainer:{
    display: 'flex',
    flexDirection: 'row',
    height: 435,
  },
  spellBookActionsContainer: {
    height: 100,
  },
  spellBookLeftContainer: {
    flex: 1,
  },
  spellBookRightContainer: {
    flex: 1,
  },
  spellAttributesContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 220,
    paddingLeft: 50,
    marginTop: 15,
  },
  spellIdContainer: {
    position: 'relative',
    display: 'block',
    top: 28,
    left: 90,
    textAlign: 'left',
  },
  connectButtonContainer: {
    position: 'relative',
    display: 'block',
    top: 200,
    left: 30,
    textAlign: 'center',
  },
  spellImageContainer: {
    width: '300px',
    height: '300px',
    position: 'relative',
    top: 41,
    left: 104,
  },
  nameTextContainer: {
    display: 'block',
    position: 'relative',
    left: 168,
    textAlign: 'center',
    width: 100,
    marginTop: 90,
  },
  spellNameContainer: {
    position: 'relative',
    display: 'block',
    width: 300,
    textAlign: 'center',
    left: 70,
    paddingTop: 8,
    height: 35,
  },
  spellSchoolContainer: {
    position: 'relative',
    width: 400,
    textAlign: 'left',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  spellRangeContainer: {
    position: 'relative',
    width: 400,
    textAlign: 'left',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  spellDurationContainer: {
    position: 'relative',
    width: 400,
    textAlign: 'left',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    color: 'gray',
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

const getRandomInt = (max: number) => {
  const rd: number = Math.random();
  return Math.floor(rd * max);
}

interface SpellbookProps {
  wizards: WizardData[];
  spells: SpellData[];
  filteredByUser: boolean;
}

const Spellbook = observer((props: SpellbookProps): JSX.Element | null => {
  const classes = useStyles(mainTheme);
  const store = useContext(StoreContext);
  const { user } = store;
  const [spellIdx, setSpellIdx] = useState(0);
  var { wizards, spells, filteredByUser } = props;

  if(filteredByUser) {
    spells = user.spells || [];
    wizards = user.wizards || [];
  }

  var spellsCount = 0;
  spellsCount = spells.length;

  var spellSchool = (spells && spellsCount > 0 && spells[spellIdx].school) || Object.keys(spellColors)[getRandomInt(8)];
  if (spellSchool.length === 0) {
    spellSchool = Object.keys(spellColors)[getRandomInt(8)];
  }
  const backgroundImage = `url("/img/spellbook_${spellSchool.toLowerCase()}.png") no-repeat`;
  const textColor = spellColors[spellSchool];
  const spell = spells && spellsCount > 0 && spells[spellIdx];
  let spellName = (spell && spell.name) || '';

  const goPrevPage = () => {
    var prevPage = spellIdx - 1;
    if (prevPage < 0) { prevPage = spellsCount - 1; }
    setSpellIdx(prevPage);
  }

  const goNextPage = () => setSpellIdx((spellIdx + 1) % spellsCount);
  const currentWizard = spell && wizards && wizards.find(wiz => wiz.id === spell.id);

  return (
    <div className={classes.wrapper}>
      <div className={classes.spellBookWrapper}>
        <div className={classes.spellBookContainer} style={{ background: backgroundImage }}>
          <div className={classes.spellBookContentContainer}>
            <div className={classes.spellBookLeftContainer}>
              {
                filteredByUser && !user.wallet && (
                  <div className={classes.connectButtonContainer}>
                    <Button variant="contained" color="secondary" onClick={user.connect}>
                      Connect
                    </Button>
                  </div>
                )
              }
              {
                spells && spellsCount > 0 && (
                  <>
                    <div className={classes.spellIdContainer}>
                      <Typography variant="body1" style={{ color: textColor }}>{spells[spellIdx].id}</Typography>
                    </div>
                    <div className={classes.spellImageContainer}>
                        <img width="343px" height="349px" src={`https://spells-explorer.s3.amazonaws.com/images/${spellName.replace(':','').split(' ').map(s => s.toLowerCase()).join('-')}.png`} alt={`${spellName}`} />
                    </div>
                  </>
                )
              }
            </div>

            <div className={classes.spellBookRightContainer}>
              {
                spells && spellsCount > 0 && (
                  <>
                    <div className={classes.nameTextContainer}>
                      <Typography variant="body1" className={classes.nameText}> :Name: </Typography>
                    </div>

                    <div className={classes.spellNameContainer}>
                      <Typography variant="body1" style={{ color: textColor }}> { spellName } </Typography>
                    </div>

                    <div className={classes.spellAttributesContainer}>
                      <div className={classes.spellSchoolContainer}>
                        <Typography variant="body1" className={classes.spellSchoolText}>
                          School .......... { spellSchool }
                        </Typography>
                      </div>

                      <div className={classes.spellRangeContainer}>
                        <Typography variant="body1" className={classes.spellRangeText}>
                          Range ........... { spells[spellIdx].range }
                        </Typography>
                      </div>

                      <div className={classes.spellDurationContainer}>
                        <Typography variant="body1" className={classes.spellDurationText}>
                          { spells[spellIdx].duration }
                        </Typography>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          </div>

          <div className={classes.spellBookActionsContainer}>
            {
              spells && spellsCount > 0 && (
                <>
                  <div className={classes.prevContainer}>
                    <Typography variant="body1" className={classes.prevText} onClick={goPrevPage} >
                    Prev
                    </Typography>
                  </div>

                  <div className={classes.nextContainer}>
                    <Typography variant="body1" className={classes.nextText} onClick={goNextPage} >
                      Next
                    </Typography>
                  </div>
                </>
              )
            }
          </div>
        </div>
        <div className={classes.creditsContainer}>
          <Typography>
            Crafted by <Link href="https://twitter.com/ozzzmabro" className={classes.link}>Ozzz</Link> & <Link href="https://twitter.com/aranair" className={classes.link}>aranair</Link>
          </Typography>

          <Typography>
            Contract by <Link href="https://twitter.com/tv3636" className={classes.link}>tv3636</Link>, <Link href="https://twitter.com/niski_iski" className={classes.link}>Niski</Link> & <Link href="https://twitter.com/aranair" className={classes.link}>aranair</Link>
          </Typography>
        </div>
      </div>

      <div className={classes.wizardContainer}>
        <div className={classes.wizardImageContainer}>
          <div className={classes.wizardNameContainer}>
          {
            currentWizard && (
              <Typography>
                { currentWizard.name }
              </Typography>
            )
          }
          </div>
          <div className={classes.wizardImage}>
          {
            currentWizard && (
                <img width="350px" height="350px" src={`https://nftz.forgottenrunes.com/wizards/alt/400-nobg/wizard-${currentWizard.id}.png`} alt={`${spellName}`} />
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
});

export default Spellbook;
