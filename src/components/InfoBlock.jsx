import { Link } from 'react-router-dom';

const books = [
    { title: "1984", author: "George Orwell", image: "/images/book1.jpg" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", image: "/images/book2.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "/images/book3.jpg" },
    { title: "Moby Dick", author: "Herman Melville", image: "/images/book1.jpg" },
];

const InfoBlock = () => {
    return (
        <div className='bg-gray-800'>
            {/* Library Section */}
            <div className="flex flex-col md:flex-row justify-center items-center py-10 pt-20">
                <div className="text-center md:text-left md:w-[500px] w-[300px]">
                    <h1 className="text-yellow-400 text-2xl">Welcome to Our Library!</h1>
                    <p className="text-white text-sm py-5">Discover a world of knowledge and adventure!</p>
                    <div className="flex justify-center md:justify-start">
                        <Link to={'/about'} className="bg-green-500 rounded-full px-10 py-2 mr-3">About Us</Link>
                        <Link to={'/generation'} className="bg-white rounded-full px-10 py-2">Generation</Link>
                    </div>
                </div>
                <div className="md:ml-10">
                    <img className='md:block hidden rounded-3xl' src="/images/book1.jpg" alt="Library" width={400} />
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='w-[925px] pb-10 text-white text-center'>
                    <p>Reading is not just a pastime; it’s a way to expand your horizons and grow intellectually. Dive into our various genres and find your next favorite book!</p>
                </div>
            </div>

            <h2 className='text-3xl text-white text-center mb-5'>Featured Books</h2>
            <div className='flex flex-wrap justify-center'>
                {books.map((book, index) => (
                    <div key={index} className="border rounded-lg shadow-lg overflow-hidden bg-white m-5">
                        <img src={book.image} alt={book.title} className='w-[200px] h-[300px] object-cover' />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-green-600">{book.title}</h3>
                            <p className="text-gray-600">by {book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfoBlock;