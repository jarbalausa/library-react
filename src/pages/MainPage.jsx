import React from 'react';
import BooksChoose from '../components/BooksChoose';
import Options from '../components/Options';

function MainPage({ onUpdate, selectedData, onGenerate }) {
  console.log(onUpdate, selectedData, onGenerate);  // Check if props are correctly passed

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Library Book Selector</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BooksChoose onUpdate={onUpdate} />
        <Options onUpdate={onUpdate} />
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onGenerate}
        >
          Show Selected Books
        </button>
      </div>
    </div>
  );
}

export default MainPage;
