import {
  Typography,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mainTheme } from '../theme';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    textAlign: 'center',
    marginTop: 100,
  }
}));

export default function Routes(): JSX.Element {
  const classes = useStyles(mainTheme);

  return (
    <Container className={classes.headerContainer}>
      <Typography variant="h5" component="h1">
        Spells (for Wizards and other Adventurers)
      </Typography>
    </Container>
  );
}
