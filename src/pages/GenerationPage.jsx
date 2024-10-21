
import Navbar from '../components/Navbar';

import Choose from '../components/Choose';
// import MainPage from '../compoents/MainPage';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';


const GeneratePage = ({ onUpdate, selectedData, onGenerate}) => {
  console.log(onUpdate, selectedData, onGenerate);


  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Library Book Selector</h1>
        <div className="flex flex-col min-h-[600] align-center">
          <Choose className="w-full " onUpdate={onUpdate} selectedData={selectedData} />
        </div>
        
      </div>

      <Footer />
    </div>
  );
}


GeneratePage.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedData: PropTypes.array.isRequired,
  onGenerate: PropTypes.func.isRequired,
  

};

export default GeneratePage;

