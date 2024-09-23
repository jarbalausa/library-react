import  { useState, useEffect } from 'react';

function Options({ onUpdate }) {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [typeOfBook, setTypeOfBook] = useState('');
  const [additionalCriteria, setAdditionalCriteria] = useState('');

  // Update the parent component when any option changes.
  useEffect(() => {
    handleUpdate();
  }, [genre, author, typeOfBook, additionalCriteria]);

  const handleUpdate = () => {
    // Only update if some criteria are set
    onUpdate({
      genre: genre || null,
      author: author || null,
      typeOfBook: typeOfBook || null,
      additionalCriteria: additionalCriteria || null
    });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Options</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Select Genre</label>
        <select
          className="w-full p-2 border rounded mt-2"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        >
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Favorite Author</label>
        <input
          className="w-full p-2 border rounded mt-2"
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Type of Book</label>
        <select
          className="w-full p-2 border rounded mt-2"
          value={typeOfBook}
          onChange={e => setTypeOfBook(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Audiobook">Audiobook</option>
          <option value="Ebook">Ebook</option>
          <option value="Printed">Printed</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Additional Criteria</label>
        <input
          className="w-full p-2 border rounded mt-2"
          type="text"
          value={additionalCriteria}
          onChange={e => setAdditionalCriteria(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Options;
