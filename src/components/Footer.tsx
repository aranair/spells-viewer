import {
  makeStyles,
} from '@material-ui/core';

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { mainTheme } from '../theme';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  link: {
    margin: 5,
    color: 'white',
  }
}));

export default function Routes(): JSX.Element {
  const classes = useStyles(mainTheme);
  const location = useLocation();
  const history = useHistory();

  return (
    <div className={classes.footerContainer}>
      {
        location.pathname === '/' &&
        <Link to="#" className={classes.link} onClick={() => history.push("/list")}><ListAltIcon /></Link>
      }
      {
        location.pathname !== '/' &&
        <Link to="#" className={classes.link} onClick={() => history.push("/")}><AccessibilityNewIcon /></Link>
      }
       <a href="https://github.com/aranair/spells-viewer" target="_blank" rel="noreferrer" className={classes.link}>
         <GitHubIcon />
       </a>
       <a href="https://etherscan.io/token/0x38e942948cea825992f105e0ec4a2ee9138afae4" target="_blank" rel="noreferrer" className={classes.link}>
         <img width="25px" src={`/img/etherscan-logo-light-circle.png`} alt={`wizardspell-contract`} />
       </a>
       <a href="http://forgottenrunes.com/" target="_blank" rel="noreferrer" className={classes.link}>
         <img width="50px" src={`/img/wizard8935.png`} alt={`forgotten-runes-wizard-8935`} />
       </a>
    </div>
  );
}
