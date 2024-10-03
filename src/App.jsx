import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './pages/MainPage';
import GenerationPage from './pages/GenerationPage';
import Navbar from './components/Navbar';

function App() {
  const [selectedData, setSelectedData] = useState({
    books: [],
    genre: '',
    author: '',
    typeOfBook: '',
    additionalCriteria: ''
  });

  const handleUpdate = (newData) => {
    setSelectedData(prevData => ({ ...prevData, ...newData }));
  };

  const bookGeneration = () => {
    console.log("Selected books with:", selectedData);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage 
              onUpdate={handleUpdate} 
              selectedData={selectedData} 
              onGenerate={bookGeneration}
            />
          }
        />
        <Route path="/generation" element={<GenerationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

