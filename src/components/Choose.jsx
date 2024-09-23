import { useState } from 'react';
import Genre from './Genre'; // Assuming you have a Genre component to handle genre selection

const Choose = ({ onUpdate }) => {
  const genresData = [
    { name: 'adventure', imageSrc: '/images/adventure.jpg' },
    { name: 'classic', imageSrc: '/images/classic.jpg' },
    { name: 'comic', imageSrc: '/images/comic.jpg' },
    { name: 'crime', imageSrc: '/images/crime.jpg' },
    { name: 'dish', imageSrc: '/images/dish.png' },
    { name: 'drama', imageSrc: '/images/drama.jpg' },
    { name: 'fairytale', imageSrc: '/images/fairytale.jpg' }
  ];

  const booksData = [
    '1984 by George Orwell',
    'Pride and Prejudice by Jane Austen',
    'To Kill a Mockingbird by Harper Lee',
    'The Great Gatsby by F. Scott Fitzgerald'
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleSelectedGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(item => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
    onUpdate({ genres: [...selectedGenres, genre] });
  };

  const handleBookClick = (book) => {
    const updatedBooks = selectedBooks.includes(book)
      ? selectedBooks.filter(b => b !== book)
      : [...selectedBooks, book];

    setSelectedBooks(updatedBooks);
    onUpdate({ books: updatedBooks });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Select Genres</h2>
      <div className="flex flex-wrap">
        {genresData.map((genre, index) => (
          <Genre
            key={index}
            imageSrc={genre.imageSrc}
            isSelected={selectedGenres.includes(genre.name)}
            onClick={() => handleSelectedGenreClick(genre.name)}
          />
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Select Books</h2>
      <div className="grid grid-cols-2 gap-4">
        {booksData.map((book, index) => (
          <button
            key={index}
            onClick={() => handleBookClick(book)}
            className={`p-2 rounded ${selectedBooks.includes(book) ? 'bg-green-300' : 'bg-gray-200'}`}
          >
            {book}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Selected Genres:</h3>
        <ul>
          {selectedGenres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mt-4">Selected Books:</h3>
        <p>{selectedBooks.join(', ')}</p>
      </div>
    </div>
  );
};

export default Choose;
