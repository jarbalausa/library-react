import Navbar from '../components/Navbar';
import InfoBlock from '../components/InfoBlock';
import Choose from '../components/Choose';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

const MainPage = ({ onUpdate, selectedData, onGenerate }) => {
  console.log(onUpdate, selectedData, onGenerate);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      <InfoBlock />
      
      <div className="container mx-auto p-4 font-poppins my-10">
        <h1 className="font-bold text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-green-700 mb-10">
          Library Book Selector
        </h1>
        <div className="flex flex-col items-center min-h-[400px]">
          <Choose className="w-full max-w-md sm:max-w-xl" onUpdate={onUpdate} selectedData={selectedData} />
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            onClick={onGenerate}
            aria-label="Show selected books"
          >
            Show Selected Books
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

MainPage.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedData: PropTypes.array.isRequired,
  onGenerate: PropTypes.func.isRequired,
};

export default MainPage;