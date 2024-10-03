import { Link } from 'react-router-dom';

const books = [
    { title: "1984", author: "George Orwell", image: "/images/comic.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", image: "/images/book2.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "/images/book3.jpg" },
    { title: "Moby Dick", author: "Herman Melville", image: "/images/fairytale.jpg" },
];

const InfoBlock = () => {
    return (
        <div className='bg-gray-800'>
            {/* Library Section */}
            <div className="flex flex-col md:flex-row justify-center items-center py-10 pt-20 font-roboto ">
                <div className="text-center mr-9 md:text-left md:w-[500px] w-[300px]">
                    <h1 className="text-yellow-400 text-9xl font-poppins mr-20">Welcome to AI Library!</h1>
                    <p className="text-white text-4xl py-5">Discover a world of knowledge and adventure!</p>
                    <div className="flex justify-center md:justify-start">
                        <Link to={'/about'} className="bg-green-700 rounded-full px-10 py-3  mr-4 text-3xl text-green-950">about us</Link>
                        <Link to={'/generation'} className="bg-white rounded-full px-10 py-3 text-3xl text-green-800">generation</Link>
                    </div>
                </div>
                <div className="md:ml-10">
                    <img className='md:block hidden rounded-3xl' src="/images/book1.jpg" alt="Library" width={400} />
                </div>
            </div>

            <div className='flex justify-center my-30'>
                <div className='w-[925px] pb-10 text-red-800 font-bold text-center text-2xl mt-30'>
                    <p>Reading is not just a pastime;   It’s a way to expand your horizons and grow intellectually.    Dive into our various genres and find your next favorite book!</p>
                </div>
            </div>

            <h2 className='mt-40 my-10 text-white text-center mb-5 text-5xl bg-green-800 py-10 font-poppins' >Featured Books</h2>
            <div className='flex flex-wrap justify-center mt-20 mx-30 mb-40'>
                {books.map((book, index) => (
                    <div key={index} className="border rounded-lg shadow-lg overflow-hidden bg-white m-5">
                        <img src={book.image} alt={book.title} className='w-[250px] h-[350px] object-cover' />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-green-600">{book.title}</h3>
                            <p className="text-gray-600 text-xl">by {book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfoBlock;