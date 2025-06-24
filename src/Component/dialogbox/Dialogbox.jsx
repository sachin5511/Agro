import React, { useState } from 'react';

const Dialogbox = (props) => {
    const [showDialog, setShowDialog] = useState(true);
  return (
    <>
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-green-600">
              {props.message}   
            </p>
            <button
              className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
              onClick={() => setShowDialog(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialogbox;
