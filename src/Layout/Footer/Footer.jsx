
// import WhatsAppButton from './../WhatsAppButton/WhatsAppButton';

// const Footer = () => {
//   return (
//     <footer>
  
//       <div className="grid lg:md:grid-cols-2 text-white">
//         <aside className="bg-[#1F2937] text-center">
//           <p className="pt-20 pb-6">Contract Us</p>
//           <div className='flex items-center'><WhatsAppButton></WhatsAppButton> </div>
//           <p className="pb-20">
//             <br />Kushtia Bangladesh <br />
//             Mon - Fri: 08:00 - 23:00 <br />
//             Sat - Sun: 09:00 - 23:00
//           </p>
          
//         </aside>
//         <nav className="bg-[#111827] pt-20 pb-32">
//           <h6 className="text-center ">Follow Us</h6>
//           <h1 className="text-center py-5">Join our Social Media</h1>
//           <div className="flex items-center justify-center">
//             <a href="https://www.linkedin.com/in/md-juwel-rana-a86781294">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//               </svg>
//             </a>
//             <a href="https://www.facebook.com/">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current mx-6"
//               >
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>
//             <a href="https://www.facebook.com/">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//           </div>
//         </nav>
//       </div>
//       <div className="footer footer-center p-4 bg-[#151515] text-center text-white">
//         <aside>
//           <p className="text-center">
//             Copyright © 2024 - All right reserved by Juwel Rana
//             Industries Ltd
//           </p>
//         </aside>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import WhatsAppButton from './../WhatsAppButton/WhatsAppButton';

// const SocialIcon = ({ href, ariaLabel, children }) => (
//   <a href={href} aria-label={ariaLabel} className="mx-3">
//     {children}
//   </a>
// );

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white">
        {/* Contact Section */}
        <aside className="bg-[#1F2937] text-center text-white py-10 px-6">
  <p className="text-xl font-semibold pt-10 pb-6">Contact Us</p>
  <div className="flex flex-col items-center space-y-4">
    {/* WhatsApp Button */}
    <div className="flex items-center bg-green-500 px-2 rounded-lg shadow-lg">
      <p className="text-lg font-medium">WhatsApp</p>
      <WhatsAppButton /> 
    </div>
    {/* Address and Timing */}
    <p className="text-sm leading-relaxed">
      Kushtia, Bangladesh <br />
      <span className="block font-medium">Mon - Fri: 08:00 - 23:00</span>
      <span className="block font-medium">Sat - Sun: 09:00 - 23:00</span>
    </p>
  </div>
</aside>


        {/* Social Media Section */}
        <nav className="bg-[#11271a] pt-20 pb-32 text-white">
          <h6 className="text-center">Follow Us</h6>
          <h1 className="text-center py-5">Join our Social Media</h1>
          {/* <div className="flex items-center justify-center">
            <SocialIcon
              href="https://www.linkedin.com/in/md-juwel-rana-a86781294"
              ariaLabel="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-..."></path>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/" ariaLabel="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-..."></path>
              </svg>
            </SocialIcon>
          </div> */}
  <div className="flex items-center justify-center space-x-6 text-white py-6">
  <a
    href="https://www.linkedin.com/in/md-juwel-rana-a86781294"
    aria-label="LinkedIn"
    className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5c0 1.38-1.11 2.5-2.5 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V8H0v16zm9 0h5V14.5c0-2.09 2.91-2.27 2.91 0V24h5V13.5c0-5.83-6.65-5.61-7.91-2.75V8H9v16z"></path>
    </svg>
  </a>
  <a
    href="https://www.facebook.com/"
    aria-label="Facebook"
    className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.345v21.31c0 .746.597 1.345 1.325 1.345h11.483v-9.29h-3.13v-3.622h3.13V7.414c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.463.098 2.795.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.765v2.314h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.599 1.325-1.345V1.345C24 .6 23.403 0 22.675 0z"></path>
    </svg>
  </a>
  <a
    href="https://www.twitter.com/"
    aria-label="Twitter"
    className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition duration-300 transform hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
    </svg>
  </a>
</div>


        </nav>
        
      </div>

      {/* Copyright Section */}
      <div className="footer footer-center p-4 bg-[#151515] text-center text-white">
        <aside>
          <p className="text-center">
            Copyright © 2024 - All rights reserved by Juwel Rana Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

