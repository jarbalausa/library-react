import  { useState, useEffect } from "react";

const Options = () => {             
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [typeOfBook, setTypeOfBook] = useState('');
  const [additionalCriteria, setAdditionalCriteria] = useState('');

  const sendInfoOptions = () => {
    // setInfoFromOptions(`genreType: ${genre} ,author : ${author} ,typeOFBook:${typeOfBook} , AddtionalCriteria ${additionalCriteria}`)
  }


  useEffect(() => {
    sendInfoOptions();
  }, [genre, author, typeOfBook, additionalCriteria]);

  // const handleUpdate = () => {
  //   // Only update if some criteria are set
  //   onUpdate({
  //     genre: genre || null,
  //     author: author || null,
  //     typeOfBook: typeOfBook || null,
  //     additionalCriteria: additionalCriteria || null
  //   });
  // };

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
        {/* <select 
        name = "author"
        id='author'
        onChange = {(e) => setAuthor(e.terget.value)}
        className = 'p;-1 w-[200px' */}
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
      <div>
          <p>selected genre type: <span className="text-orange-500 font-bold">{genre}</span></p>
          <p>write author: <span className="text-orange-500 font-bold">{author}</span></p>
          <p>selected book type: <span className="text-orange-500 font-bold">{typeOfBook}</span></p>
          <p>selected addtional criteria: <span className="text-orange-500 font-bold">{additionalCriteria}</span></p>
      </div>
    </div> 

    
  );
}

export default Options;
