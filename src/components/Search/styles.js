import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    width: 400,
    borderRadius: '15px',
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
