// import React from "react";
import PropTypes from "prop-types";

const Book = ({ title, author, coverImage, onSelect, description, googleBooksLink }) => {
  const handleViewDetails = () => {
    window.open(googleBooksLink, '_blank');
    if (onSelect) {
      onSelect(title); 
    }
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden p-4 m-2 bg-white">
      <img
        src={coverImage}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-2"
      />

      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{author}</p>
      <p className="text-gray-500 text-sm">{description}</p>
      <button
        onClick={handleViewDetails} 
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Details
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  onSelect: PropTypes.func, // Make this optional
  description: PropTypes.string.isRequired,
  googleBooksLink: PropTypes.string.isRequired,
};

const BookList = () => {
  const booksData = [
    { 
      title: "1984", 
      author: "George Orwell",
      coverImage: "/images/book2.jpg", 
      description: "A dystopian novel set in a totalitarian society.",
      googleBooksLink: "https://www.google.com/search?q=1984+george+orwell&sca_esv=011acecb7a9df786&biw=1528&bih=738&sxsrf=ADLYWILlaG9MOvQhCs3cP3_IMGl9UUNPLA%3A1727930759590&ei=hyH-ZuLlI6TEwPAPrYv78A0&gs_ssp=eJzj4tDP1TfIqbIsNmD0EjK0tDBRSE_NL0pPVcgvKk_NyQEAg8oJUQ&oq=1984+jo&gs_lp=Egxnd3Mtd2l6LXNlcnAiBzE5ODQgam8qAggAMgcQLhiABBgKMgcQABiABBgKMggQABiABBjLATIIEC4YgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyFhAuGIAEGAoYlwUY3AQY3gQY4ATYAQFI8EhQtAJY_y5wAXgAkAEAmAGkAaAB3AWqAQMwLjW4AQHIAQD4AQGYAgmgAp8xwgINEAAYgAQYsAMYQxiKBcICCBAAGIAEGLADwgIJEAAYsAMYBxgewgIOEAAYsAMY5AIY1gTYAQHCAhYQLhiABBiwAxhDGNQCGMgDGIoF2AEBwgIZEC4YgAQYsAMYsQMYQxiDARjIAxiKBdgBAcICExAuGIAEGLADGEMYyAMYigXYAQHCAhQQLhiABBiwAxixAxjUAhjIA9gBAcICChAuGIAEGEMYigXCAgoQABiABBhDGIoFwgIFEAAYgATCAhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEBwgILEC4YgAQY1AIYywGYAwCIBgGQBhO6BgYIARABGAmSBwkxLjUuNy0yLjGgB_JK&sclient=gws-wiz-serp" 
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      coverImage: "/images/book1.jpg",
      description: "A classic novel about love and social standing.",
      googleBooksLink: "https://www.google.com/search?q=pride+and+prejudice&sca_esv=011acecb7a9df786&biw=1528&bih=738&sxsrf=ADLYWIJ_ehsp6nlRu-zwUpOm7rjAchmCpw%3A1727933481806&ei=KSz-Zp37MIa-wPAPyMH-6AQ&oq=&gs_lp=Egxnd3Mtd2l6LXNlcnAiACoCCAAyBxAjGCcY6gIyBxAuGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyExAAGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyExAAGIAEGEMYtAIYigUY6gLYAQEyFhAuGIAEGEMYtAIYyAMYigUY6gLYAQEyFxAuGIAEGOMEGLQCGMgDGOkEGOoC2AEBSM8HUABYAHABeAGQAQCYAQCgAQCqAQC4AQHIAQD4AQGYAgGgAgeoAhGYAwe6BgYIARABGAGSBwExoAcA&sclient=gws-wiz-serp"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "/images/book3.jpg",
      description: "A novel about racial injustice in the Deep South.",
      googleBooksLink: "https://www.google.com/search?q=to+kill+mockinbird&sca_esv=011acecb7a9df786&biw=1528&bih=738&sxsrf=ADLYWIKFH2eh-SLJqhostW_HJiKrE3A8qA%3A1727933476821&ei=JCz-Zo7wMeW3wPAPx52rmAU&ved=0ahUKEwiOktPovfGIAxXlGxAIHcfOClMQ4dUDCA8&uact=5&oq=to+kill+mockinbird&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnRvIGtpbGwgbW9ja2luYmlyZDIKEC4YgAQYChjLATIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIZEC4YgAQYChjLARiXBRjcBBjeBBjgBNgBAUiwQVDAA1ijQHAFeAGQAQCYAbABoAGuF6oBBDAuMjK4AQPIAQD4AQGYAhugAtAYqAISwgIHECMYJxjqAsICBxAuGCcY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AEBwgIKECMYgAQYJxiKBcICChAuGIAEGEMYigXCAg0QLhiABBhDGNQCGIoFwgILEC4YgAQYsQMYgwHCAgsQABiABBixAxiDAcICERAuGIAEGLEDGNEDGIMBGMcBwgIIEAAYgAQYsQPCAgoQABiABBhDGIoFwgIZEC4YgAQYQxiKBRiXBRjcBBjeBBjfBNgBAcICBRAAGIAEwgIFEC4YgATCAhAQABiABBixAxhDGIMBGIoFwgIPECMYgAQYJxiKBRhGGP8BwgIZEAAYgAQYigUYRhj_ARiXBRiMBRjdBNgBAcICHBAuGIAEGEMY1AIYigUYlwUY3AQY3gQY4ATYAQHCAggQABiABBjLAcICCxAuGIAEGNQCGMsBwgIaEC4YgAQY1AIYywEYlwUY3AQY3gQY4ATYAQGYAxC6BgYIARABGAiSBwQ1LjIyoAehyAI&sclient=gws-wiz-serp"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "/images/crime.jpg",
      description: "A critique of the American Dream set in the 1920s.",
      googleBooksLink: "https://www.google.com/search?q=the+great+gatsby&sca_esv=011acecb7a9df786&biw=1528&bih=738&sxsrf=ADLYWILqi08GlJk5cSoEIGKWfKn44bYwFg%3A1727933623221&ei=tyz-ZsCcDc3IwPAPn--b0Q0&ved=0ahUKEwiA1LquvvGIAxVNJBAIHZ_3JtoQ4dUDCA8&uact=5&oq=the+great+gatsby&gs_lp=Egxnd3Mtd2l6LXNlcnAiEHRoZSBncmVhdCBnYXRzYnkyExAuGIAEGLEDGEMYgwEY1AIYigUyExAuGIAEGLEDGEMYgwEY1AIYigUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMggQABiABBjLATIiEC4YgAQYsQMYQxiDARjUAhiKBRiXBRjcBBjeBBjgBNgBAUiFKVDhBVjxJXABeAGQAQCYAakCoAGrE6oBBjAuMTUuMbgBA8gBAPgBAZgCEaAC-BOoAhLCAgcQIxgnGOoCwgIHEC4YJxjqAsICGRAuGIAEGEMY1AIYtAIYyAMYigUY6gLYAQHCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AEBwgIKECMYgAQYJxiKBcICDRAuGIAEGEMY1AIYigXCAgoQLhiABBhDGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIEECMYJ8ICDBAjGIAEGBMYJxiKBcICCBAAGIAEGLEDwgILEC4YgAQYsQMYgwHCAhQQLhiABBjHARiYBRiZBRieBRivAcICBRAuGIAEwgIIEC4YgAQYywGYAwfiAwUSATEgQLoGBggBEAEYCJIHCDEuMTUuMC4xoAf2xAI&sclient=gws-wiz-serp"
    },
  ];

  const handleSelect = (bookTitle) => {
    console.log(`Selected: ${bookTitle}`);
  };

  return (
    <div className="flex flex-wrap justify-center max-sm:flex-col">
      {booksData.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          coverImage={book.coverImage}
          description={book.description}
          googleBooksLink={book.googleBooksLink}
          onSelect={handleSelect} // Pass the onSelect function
        />
      ))}
    </div>
  );
};

export default BookList;