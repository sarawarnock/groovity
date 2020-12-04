import React from 'react';
import PlaylistDisplay from './Components/PlaylistDisplay/PlaylistDisplay';
import CreatePlaylistForm from './Components/CreatePlaylistForm/CreatePlaylistForm';

const Home = () => {
  return (
    <section>
      <CreatePlaylistForm />
      <PlaylistDisplay />
    </section>
  );
}

export default Home;
