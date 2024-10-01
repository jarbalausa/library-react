import  { useState } from "react";
import Genre from "./Genre";
import Book from "./Book"; 

const Choose = () => {
    const apikey = import.meta.env.VITE_API_KEY; 
    // const apiurl = import.meta.env.VITE_API_URL;
    // const [generatedText , setGeneratedText] = useState('');

    const genresData = [
        { name: 'Adventure', imageSrc: '/images/adventure.jpg' },
        { name: 'Classic', imageSrc: '/images/classic.jpg' },
        { name: 'Comic', imageSrc: '/images/comic.jpg' },
        { name: 'Crime', imageSrc: '/images/crime.jpg' },
        { name: 'Drama', imageSrc: '/images/drama.jpg' },
        { name: 'Fairytale', imageSrc: '/images/fairytale.jpg' }
    ];

    const booksData = [
        { title: '1984', author: 'George Orwell' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
    ];

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    const handleGenreClick = (genre) => {
        setSelectedGenres((prev) =>
            prev.includes(genre)
                ? prev.filter((g) => g !== genre)
                : [...prev, genre]
        );
    };

    const handleBookClick = (book) => {
        setSelectedBooks((prev) =>
            prev.includes(book.title)
                ? prev.filter((b) => b !== book.title)
                : [...prev, book.title]
        );
    };

    // const generateText = async () => {
    //     const options = {
    //         method : "POST",
    //         heaaders: {
    //             Authorizition: `Bearer ${apikey}` ,
    //             "Content-Type":"application/json",
    //         },
    //         body: JSON.stringify({
    //             prompt: text,
    //             max_tokens: 350,
                
    //         }),
        
    //     };
        
    //     console.log('Text generating ... ');
        
    //     try{
    //         const response = await fetch(apiurl , )
            
    //     }catch(error){
    //         console.error('error:' , error)
    //     }
   // }

    const createPromptText = () => {
        let prompt = 'I am interested in the following genres and books: ';
        prompt += selectedGenres.length > 0 ? selectedGenres.join(', ') : 'No genres selected';
        prompt += '. Selected books: ';
        prompt += selectedBooks.length > 0 ? selectedBooks.join(', ') : 'No books selected';
        console.log('Prompt text:', prompt);
        return prompt;
    };

    const fetchData = async () => {
        const promptText = createPromptText();
        
        try {
            const response = await fetch("YOUR_API_ENDPOINT", {
                headers: {
                    Authorization: `Bearer ${apikey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: promptText }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Choose Your Genres</h1>
            <div className="flex flex-wrap mb-6">
                {genresData.map((genre, index) => (
                    <Genre
                        key={index}
                        imageSrc={genre.imageSrc}
                        name={genre.name}
                        isSelected={selectedGenres.includes(genre.name)}
                        onClick={() => handleGenreClick(genre.name)}
                    />
                ))}
            </div>

            <h2 className="text-xl font-semibold mb-4">Select Books</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {booksData.map((book, index) => (
                    <Book
                        key={index}
                        title={book.title}
                        author={book.author}
                        isSelected={selectedBooks.includes(book.title)}
                        onClick={() => handleBookClick(book)}
                    />
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold">Selected Genres:</h3>
                <ul className="list-disc pl-5">
                    {selectedGenres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                    ))}
                </ul>

                <h3 className="text-lg font-semibold mt-4">Selected Books:</h3>
                <ul className="list-disc pl-5">
                    {selectedBooks.map((book, index) => (
                        <li key={index}>{book}</li>
                    ))}
                </ul>
            </div>

            <button
                onClick={fetchData}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Generate Recommendations
            </button>
        </div>
    );
};

export default Choose;