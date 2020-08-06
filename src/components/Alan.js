import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectGenre, selectCategory, toggleMode } from '../actions';

function Alan() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    alanBtn({
      key: '2b4d51c596098c03255747fce375bd5a2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, genre, genres }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find((gen) => gen.name.toLowerCase() === genre.toLowerCase());

          if (foundGenre) {
            history.push('/');
            dispatch(selectGenre(foundGenre.id, 1));
          } else if (genre) {
            const parsedGenre = genre.startsWith('top') ? 'top_rated' : genre;

            history.push('/');
            dispatch(selectCategory(parsedGenre, 1));
          } else {
            alanBtn().playText('Try that again.');
          }
        } else if (command === 'changeMode') {
          dispatch(toggleMode());
        }
      },
    });
  }, []);
  return (
    <div>
      test
    </div>
  );
}

export default Alan;
