import React from 'react';

const AddSongForm = () => {
  return (
    <div>
      <h2>Add Song</h2>
      <form>
        <label>Song Name</label>
        <input type="text"/>
        <button type="button">Add Song</button>
      </form>
    </div>
  );
}

export default AddSongForm;