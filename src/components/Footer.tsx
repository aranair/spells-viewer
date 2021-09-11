import {
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link, useLocation } from 'react-router-dom';

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

  return (
    <div className={classes.footerContainer}>
      {
        location.pathname == '/' &&
        <Link to="/explore" className={classes.link}><ListAltIcon /></Link>
      }
      {
        location.pathname == '/explore' &&
        <Link to="/" className={classes.link}><AccessibilityNewIcon /></Link>
      }
       <a href="https://github.com/aranair/spells-viewer" target="_blank" className={classes.link}>
         <GitHubIcon />
       </a>
    </div>
  );
}
