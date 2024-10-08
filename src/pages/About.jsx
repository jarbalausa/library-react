import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import PropTypes from "prop-types";

const About = ({ onUpdate, selectedData, onGenerate }) => {
  console.log(onUpdate, selectedData, onGenerate);

  return (
    <div className="flex flex-col min-h-[400] justify-between">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Library Book Selector
        </h1>

        <div className="container mx-auto p-6 max-w-2xl bg-gray-900 text-gray-200">
          <h1 className="text-3xl font-bold mb-4 text-green-400 ">About Us</h1>
          <p className="mb-4">
            Our library AI Website is a convenient platforn for selecting and
            reading books .We aim to make reading accessible and enjoyable for
            everyone.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-green">
            Features
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Search and filter books</li>
            <li>Select favourite books</li>
            <li>Organize and create lists of books</li>
            <li>Get information about books</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-400">
            Book Enthusiasts{" "}
          </h2>
          <p>
            Our team is made up of passionate readers and dedicated book
            enthusiasts who understand the joy and magic that books bring to our
            lives. We are committed to curating an exceptional experience for
            fellow book lovers, ensuring that you find the perfect reads to
            ignite your imagination. We value your feedback and continuously
            strive to enhance our platform, making it easier for you to
            discover, share, and celebrate the stories that inspire you.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

About.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  selectedData: PropTypes.array.isRequired,
  onGenerate: PropTypes.func.isRequired,
};

export default About;
