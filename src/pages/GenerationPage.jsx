
import Navbar from '../components/Navbar';

import Choose from '../components/Choose';
// import MainPage from '../compoents/MainPage';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

const GeneratePage = ({ onUpdate, selectedData, onGenerate}) => {
  console.log(onUpdate, selectedData, onGenerate);

  return (
    <div className="flex flex-col min-h-[400] justify-between">
      <Navbar />
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


GeneratePage.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedData: PropTypes.array.isRequired,
  onGenerate: PropTypes.func.isRequired,
  

};

export default GeneratePage;

// import { useState } from 'react';

// const GenerationPage = () => {
//     const [inputText, setInputText] = useState('');
//     const [result, setResult] = useState('');

//     const generateText = () => {
//         setResult(`Generated Text: ${inputText}`);
//     };

//     return (
//         <div className="flex flex-col items-center justify-center w-full h-full p-4">
//             <h1 className="text-2xl font-bold mb-4">GPT-мен Жұмыс Жасау</h1>
//             <textarea
//                 placeholder="Мәтінді осында енгізіңіз..."
//                 rows="4"
//                 className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//             />
//             <button
//                 onClick={generateText}
//                 className="mt-4 p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
//             >
//                 Генерациялау
//             </button>
//             {result && (
//                 <div className="mt-4 p-4 border border-gray-300 rounded-lg w-full max-w-md">
//                     <h2 className="font-bold">Нәтиже:</h2>
//                     <p>{result}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GenerationPage;