import React from 'react';

const CreatePlaylistForm = () => {
  return (
    <div>
      <h2>Create New Playlist</h2>
      <form>
        <label>Playlist Name</label>
        <input type="text"/>
        <button type="button">Create Playlist</button>
      </form>
    </div>
  );
}

export default CreatePlaylistForm;