const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <img
            src="/images/book_logo.png"
            alt="Website Logo "
            className="w-24 mx-auto"
          />
        </div>

        <div className="mb-10 text-3xl">
          <p>Contact Us:</p>
          <p>
            <a href="mailto:balausanisa@gmail.com" className="text-green-400">
              Email
            </a>
          </p>
        </div>
        <div className="mb-4 text-3xl">
          <p>Follow Us On</p>
          <a
            href="https://www.instagram.com/library.almaty/"
            className="text-green-400 mx-2"
          >
            Instagram
          </a>
          <a
            href="https://github.com/jarbalausa-github"
            className="text-green-400 mx-2"
          >
            GitHub
          </a>
        </div>
        <div className=" my-10 text-3xl">
          <p> Library AI . All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
