
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '80px',
    ...theme.mixins.toolbar,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,

    },

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
