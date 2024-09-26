import BookImage1 from '../../public/images/book1.jpg'; // Replace with actual book images
import BookImage2 from '../../public/images/book2.jpg'; // Replace with actual book images
import BookImage3 from '../../public/images/book3.jpg'; // Replace with actual book images
import { Link } from 'react-router-dom';

const books = [
    { title: "1984", author: "George Orwell", image: BookImage1 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", image: BookImage2 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: BookImage3 },
    { title: "Moby Dick", author: "Herman Melville", image: BookImage1 },
];

const InfoBlock = () => {
    return (
        <div className='bg-gray-800'>
            {/* Library Section */}
            <div className="flex justify-center items-center py-10 pt-20">
                <div className="text-center">
                    <div className="text-yellow-400 text-2xl sm:w-[500px] w-[300px]">Welcome to Our Library!</div>
                    <div className="text-white text-sm sm:w-[400px] w-[300px] py-5">Discover a world of knowledge and adventure!</div>
                    <Link to={'/newarrivals'} className="bg-green-500 rounded-full px-10 py-2 mr-3">New Arrivals</Link>
                    <Link to={'/recommendations'} className="bg-white rounded-full px-10 py-2">Book Recommendations</Link>
                </div>
                <div>
                    <img className='md:block hidden rounded-3xl' src={BookImage1} alt="Library" width={400} />
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-[925px] pb-10 text-white'>
                    Reading is not just a pastime; it’s a way to expand your horizons and grow intellectually. Dive into our various genres and find your next favorite book!
                </div>
            </div>
            <div className='text-3xl text-white ml-[200px]'>Featured Books</div>
            <div className='flex justify-center'>
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