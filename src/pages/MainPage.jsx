
import Navbar from '../components/Navbar';
import InfoBlock from '../components/InfoBlock';
import Choose from '../components/Choose';
import Options from '../components/Options';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

const MainPage = ({ onUpdate, selectedData, onGenerate }) => {
  console.log(onUpdate, selectedData, onGenerate);

  return (
    <div className="flex flex-col">
      <Navbar />
      <InfoBlock />
      
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Library Book Selector</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Choose onUpdate={onUpdate} selectedData={selectedData} />
          <Options onUpdate={onUpdate} />
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
}


MainPage.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedData: PropTypes.array.isRequired,
  onGenerate: PropTypes.func.isRequired,
};

export default MainPage;