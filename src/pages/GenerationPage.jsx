
import Navbar from '../components/Navbar';
import InfoBlock from '../components/InfoBlock';
import Choose from '../components/Choose';
// import Options from '../components/Options';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

const GenerationPage = ({ onUpdate, selectedData, onGenerate}) => {
  console.log(onUpdate, selectedData, onGenerate);

  return (
    <div className="flex flex-col min-h-[400] justify-between">
      <Navbar />
      <InfoBlock />
      
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Library Book Selector</h1>
        <div className="flex flex-col min-h-[600] align-center">
          <Choose className="w-full " onUpdate={onUpdate} selectedData={selectedData} />
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onGenerate}
            aria-label="Show selected books"
          >
            
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}


GenerationPage.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedData: PropTypes.array.isRequired,
  onGenerate: PropTypes.func.isRequired,
  

};

export default GenerationPage;