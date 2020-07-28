import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  links: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',
  },

  // links:hover{
  //     text-decoration:none;
  //     color: black;
  // }
  image: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10% 0',

  },
  testing: {
    width: '50%',
  },

}));
