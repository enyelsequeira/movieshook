import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  tittle: {
    color: theme.palette.type === 'dark' ? 'white' : 'black',
    textOverflow: ' ellipsis',
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
  },
  movie: {
    padding: '10px 10px',
    display: 'flex',
    textAlign: 'center',
  },
  image: {
    borderRadius: '20px',
    height: '300px',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },
  },
  links: {
    fontWeight: 'bolder',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
}));
