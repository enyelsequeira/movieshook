import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    border: '1px solid',
    alignItems: 'center',
    padding: '2px 45px',
    borderRadius: '20px',
    background: '#FFFFFF',
    color: 'rgb(12, 12, 12)',
    margin: '20px 2px',
    fontFamily: ' Arial, Helvetica, sans-serif',
    fontWeight: '700',
  },
  pageNumber: {
    color: 'white',
    margin: '0 20px',
    borderBottom: '2px solid white',
  },

}));

