import React from 'react';
import { Link } from 'react-router-dom';
// import { SocialIcon } from 'react-social-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-green-200 p-8">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-black-600 text-left">Eco-Log</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className=" f mb-4 text-red-900  font-bold  text-xl ">About Us</h3>
          <Link to="/about" className="block text-black-600 hover:text-green-600 mb-2">
            About Eco-Log
          </Link>
          <Link to="/team" className="block text-black-600 hover:text-green-600 mb-2">
            Meet the Team
          </Link>
          <Link to="/careers" className="block text-black-600 hover:text-green-600 mb-2">
            Careers
          </Link>
          <Link to="/contact" className="block text-gray-600 hover:text-green-600">
            Contact Us
          </Link>
        </div>

        <div>
          <h3 className=" mb-4 text-red-900  font-bold  text-xl">Resources</h3>
          <Link to="/blog" className="block text-gray-600 hover:text-green-600 mb-2">
            Blog
          </Link>
          <Link to="/faq" className="block text-gray-600 hover:text-green-600 mb-2">
            FAQ
          </Link>
          <Link to="/support" className="block text-gray-600 hover:text-green-600 mb-2">
            Support
          </Link>
          <Link to="/privacy" className="block text-gray-600 hover:text-green-600">
            Privacy Policy
          </Link>
        </div>

        <div>
          <h3 className="mb-4 text-red-900  font-bold  text-xl">Legal</h3>
          <Link to="/terms" className="block text-gray-600 hover:text-green-600 mb-2">
            Terms of Service
          </Link>
          <Link to="/cookies" className="block text-gray-600 hover:text-green-600 mb-2">
            Cookie Policy
          </Link>
          <Link to="/disclaimer" className="block text-gray-600 hover:text-green-600 mb-2">
            Disclaimer
          </Link>
          <Link to="/sitemap" className="block text-gray-600 hover:text-green-600">
            Sitemap
          </Link>
        </div>

        <div>
          <h3 className="mb-4 text-red-900  font-bold  text-xl">Connect</h3>
          <div className=' font-medium pb-3 '>Call us at :- 9999999999</div>
          <div className=' font-medium pb-8 '>Mail us at :- ecologsolutions@gmail.com </div>
          <div className="flex space-x-4 justify-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600  } ">
               <img src="src\assets\sociallogo\facebook.png" alt="" class='w-3/4' />
               {/* <SocialIcon href="www.github.com" /> */}
              {/* <i className="fab fa-facebook"></i> */}
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
            {/* <SocialIcon href="www.instagram.com" /> */}
              <img src="src\assets\sociallogo\instagram.png" alt="" className='w-3/4' />
              {/* <i className="fab fa-instagram"></i> */}
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
              <img src="src\assets\sociallogo\social.png" alt="" className='w-3/4'  />
              {/* <i className="fab fa-twitter"></i> */}
            </a>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
              <img src="src\assets\sociallogo\twitter.png" alt="" className='w-3/4 '  />
              {/* <i className="fab fa-discord"></i> */}
            </a>
          </div>
        </div>
      </div>
      <div className=" mt-8 text-gray-600 text-left">
        &copy; {new Date().getFullYear()} Eco-Log. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;