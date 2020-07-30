import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    padding: '0 5px',
    width: 400,
    borderRadius: '15px',
    [theme.breakpoints.down('xs')]: {
      // height: 25,
      // marginRight: '5px',
      width: 180,
      marginRight: 35,
      height: 40,
    },
    [theme.breakpoints.down('sm')]: {
      // marginRight: '5px',
      width: 180,
      marginRight: 35,
      height: 40,
    },
    [theme.breakpoints.only('md')]: {
      // marginRight: '5px',
      width: 250,
      marginRight: 'auto',
      marginLeft: '10px',
      height: 40,
    },
  },
  searchContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  input: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    alignContent: 'center',
    margin: 'auto',

  },
  iconButton: {
    padding: 10,
    outline: 'none !important',
  },
  divider: {
    height: 28,
    margin: 4,

  },
  field: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: '3%',
    width: '20%',

  },
}));
