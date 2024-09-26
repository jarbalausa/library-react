
import PropTypes from 'prop-types';

const Book = ({ title, author, coverImage, onSelect }) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden p-4 m-2 bg-white">
            <img src={coverImage} alt={title} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600">{author}</p>
            <button
                onClick={onSelect}
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
    onSelect: PropTypes.func.isRequired,
};

export default Book;