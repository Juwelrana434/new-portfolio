// import React, { useState } from 'react';

// // Modal component
// const Modal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // Don't render modal if it's not open

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 lg:w-1/3">
//         <h2 className="text-2xl font-bold mb-4">This is a Modal</h2>
//         <p>This modal opens when the button is clicked.</p>
//         <button
//           onClick={onClose}
//           className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };