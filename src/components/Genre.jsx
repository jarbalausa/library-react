

// eslint-disable-next-line react/prop-types
const Genre = ({ imageSrc, genreName, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`w-[150px] h-[100px] flex items-center justify-center
                cursor-pointer m-[10px] rounded-lg bg-gray-800 hover:bg-gray-700 transition duration-200`} 
        >
            <img src={imageSrc} alt={genreName} className='w-[120px] h-[80px] rounded-2xl' />
            <div className="absolute text-white font-semibold">{genreName}</div>
        </div>
    );
}

export default Genre;