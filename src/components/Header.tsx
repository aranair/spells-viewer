import {
  Typography,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mainTheme } from '../theme';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    margin: '100px auto 0 auto',
    textAlign: 'left',
    width: 1000,
    [theme.breakpoints.down('md')]: {
      color: 'transparent',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 15
    },
  }
}));

interface HeaderProps {
  text: String;
}

export default function Header(props: HeaderProps): JSX.Element {
  const { text } = props;
  const classes = useStyles(mainTheme);

  return (
    <Container className={classes.headerContainer}>
      <Typography variant="h5" component="h1">{text}</Typography>
    </Container>
  );
}
