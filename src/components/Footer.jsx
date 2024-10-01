

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
            <div className="mb-4"
            ><img
            src="/path/to/logo.png"
            alt="Website Logo "
            className="w-24 mx-auto"
            />
            </div>
            
        
        <div className="mb-4">
            <p>Contact Us:</p>
            <p>Email :<a href="mailto:your-email@gmail.com" className="text-green-400">
                balausanisa@gmail.com</a></p>
        </div>
        <div className="mb-4">
            <p>Follow Us On:</p>
            <a href="https://www.instagram.com/library.almaty/" className="text-green-400 mx-2">Instagram</a>
            <a href="https://github.com/jarbalausa-github" className="text-green-400 mx-2">GitHub</a>
        </div>
        <div >
            <p> Library IA . All rights reserved</p>
        </div>
        </div>
    </footer>
  );
};
export default Footer;
