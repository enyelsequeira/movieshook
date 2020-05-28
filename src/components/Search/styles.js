import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  searchContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%',
  },

  input: {
    border: '1px solid gray',
    padding: '0.5% 7%',
    borderRadius: '50px',
    outline: 'none',
  },
}));
