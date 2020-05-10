import React from 'react';
import { useSelector } from 'react-redux';

import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { PhotoPlaceholder } from 'react-placeholder-image';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const genres = useSelector((state) => state.config.genres);

  return (
    <>
      <div className={styles.userContainer}>
        <PhotoPlaceholder className={styles.image} width={50} height={50} />
        <div>
          <h5>Estelle Collins</h5>
          <h6>Montreal, QC</h6>
        </div>
      </div>
      <Divider />
      <List>
        {genres ? genres.map((genre) => (
          <ListItem button key={genre.id}>
            <ListItemText primary={genre.name} />
          </ListItem>
        )) : null}
      </List>
    </>
  );
};

export default Sidebar;
