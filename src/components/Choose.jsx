import { useState } from "react";
// import Genre from "./Genre";
import Book from "./Book";
import Options from "./Options";
import GenerationResult from "./GenerationResult";
import loading from "../../public/images/loading.gif";

const Choose = () => {
  const apikey = import.meta.env.VITE_API_KEY;
  const apiurl = import.meta.env.VITE_API_URL;

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [gptPromptBook, setGptPromptBook] = useState([]);
  const [infoFromOptions, setInfoFromOptions] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const genresData = [
    { name: "Adventure" },
    { name: "Classic" },
    { name: "Comic" },
    { name: "Crime" },
    { name: "Drama" },
    { name: "Fairytale" },
  ];

  const booksData = [
    {
      title: "1984",
      author: "George Orwell",
      img: "../../public/images/book1.jpg",
    },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ];

  const handleGenreClick = (genre) => {
    setGptPromptBook((prev) => [...prev, genre]);
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleBookClick = (book) => {
    setGptPromptBook((prev) => [...prev, book.title]);
    setSelectedBooks((prev) =>
      prev.includes(book.title)
        ? prev.filter((b) => b !== book.title)
        : [...prev, book.title]
    );
  };

  const ChooseGenres = () => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-6 max-sm:grid max-sm:grid-col-2 ">
        {genresData.map((genre, index) => (
          <button
            key={index}
            className={`bg-gray-800 text-green-300 border-none 
                        rounded-full flex items-center justify-center 
                        text-base w-36 h-12 
                        mx-2 my-2 cursor-pointer 
                        transition duration-300 ease-in-out 
                        hover:bg-red-900 hover:text-white hover:w-40 hover:text-xl`}
            onClick={() => handleGenreClick(genre.name)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    );
  };

  const createPromptText = () => {
    let prompt = "I am interested in the following genres and books:";
    prompt +=
      selectedGenres.length > 0
        ? selectedGenres.join(", ")
        : "No genres selected";
    prompt += ". Selected books: ";
    prompt +=
      selectedBooks.length > 0 ? selectedBooks.join(", ") : "No books selected";
    prompt +=
      infoFromOptions.length > 0 ? ", " + infoFromOptions.join(", ") : "";
    prompt += gptPromptBook.length > 0 ? ", " + gptPromptBook.join(", ") : "";
    console.log("Prompt text:", prompt);
    return prompt;
  };

  const generateText = async () => {
    const prompt = `Generate me book preferences with these genres and other information: ${gptPromptBook.join(
      ", "
    )}`;

    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, max_tokens: 350 }),
      });
      const data = await response.json();
      const text = data.choices[0].text;
      console.log(text);
      setResponseText(text);
      setIsLoading(false);
    } catch (error) {
      console.error("API error", error);
    }
  };

  const generateImage = async (promptText) => {
    setIsLoading(true);
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: promptText, n: 1, size: "512x512" }),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const data = await response.json();
      setImageUrl(data.data[0].url);
      await generateText();
      setShowResult(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert("Sorry, generation failed");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-center my-10 text-blue-950">
        Choose Your Genres
      </h1>
      <ChooseGenres />
      <h2 className="text-5xl bg-green-700 text-center py-10 text-white font-semibold my-10">
        Select Books
      </h2>
      <div className="flex flex-row  justify-center max-sm:flex-col">
        {booksData.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            img={
              book.img ? (
                <img src={book.img} alt={book.title} />
              ) : (
                <p>No Image Available</p>
              )
            }
            isSelected={selectedBooks.includes(book.title)}
            onClick={() => handleBookClick(book)}
          />
        ))}
      </div>

      <div>
        <h3 className=" font-semibold text-red-800 text-4xl">
          Selected Genres:
        </h3>
        <ul className="list-disc pl-5">
          {selectedGenres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>

        <h3 className=" font-semibold mt-4 text-4xl text-blue-950">
          Selected Books:
        </h3>
        <ul className="list-disc pl-5">
          {selectedBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>

      <div className="flex w-full   flex-col justify-center  xl:flex-row max-sm:items-center max-sm:min-w-[30vh]">
        <Options setInfoFromOptions={setInfoFromOptions} />
      </div>

      <div className="flex justify-center my-10">
        <button
          onClick={() => generateImage(createPromptText())}
          className="px-5 py-3 border-green-900 text-green-800 border-double border-4 rounded-lg text-4xl text-bold font-poppins"
          disabled={isLoading}
        >
          {isLoading ? (
            <img src={loading} alt="loading" width={30} height={30} />
          ) : (
            "Generate Book"
          )}
        </button>
      </div>
      {/* <p className="flex flex-none">IsLoading status : {isLoading + ''} </p> */}
      <div>
        {showResult && (
          <GenerationResult
            responseText={responseText}
            imageUrl={imageUrl}
            showResult={showResult}
          />
        )}
      </div>
    </div>
  );
};

export default Choose;
