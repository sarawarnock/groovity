import React from 'react';
import PlaylistDisplay from '../PlaylistDisplay/PlaylistDisplay'
import CreatePlaylistForm from '../CreatePlaylistForm/CreatePlaylistForm';

const Home = () => {
  return (
    <section>
      <CreatePlaylistForm />
      <PlaylistDisplay />
    </section>
  );
}

export default Home;
