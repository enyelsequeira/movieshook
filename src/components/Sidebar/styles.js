import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  links: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',

    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.type === 'dark' ? 'white' : 'black',
    },
  },

  image: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',

  },
  testing: {
    width: '50%',
  },

}));
