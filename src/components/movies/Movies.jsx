import React, { useState } from 'react';
import './Search.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SimpleModal from '../Modal/SimpleModal.';
import AnimatedModal from '../Modal/AnimatedModal';

import styles from './Movies.module.scss';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Movies = ({ movies }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [MoviesName, setMoviesName] = useState('');
  const [clickedMovie, setClickedMovie] = useState(null);
  console.log(MoviesName);

  const handleOpen = (movie) => {
    setClickedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setClickedMovie(null);
    setOpen(false);
  };

  const title = movies.map((movie, id) => (
    <p>{movie.title}</p>
  ));

  return (
    <div>
      <div className={styles.container}>
        {movies.map((movie, i) => (
          <div className={styles.movie} key={i}>
            <img onClick={(movie) => { handleOpen(movie); }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </div>
        ))}

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2>{clickedMovie.title}</h2>
            <p>
              {movies.overview}
            </p>
          </div>
        </Modal>
      </div>

    </div>
  );
};

// <div className={styles.container}>
//   {movies.map((movie, i) => (
//     <div className={styles.movie} key={i}>
//       <img onClick={handleOpen} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
//     </div>
//   ))}
// </div>

export default Movies;
