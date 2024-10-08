// import React from "react";
import PropTypes from "prop-types";

const GenerationResult = ({responseText , imageUrl}) => {
   console.log();
  return (
    <div className="p-4 bg-gray-100 rounded-lg w-full">
       
            <div className="mx-auto p-4 mt-4 bg-gray-200 gap-2 w-[90%] lg:w-[70%] border-2 border-white rounded-3xl flex justify-center min-h-[600px] mb-20 text-gray-800 text-2xl text-center tracking-wide">
                <div className="w-4/6   rounded-2xl">
                    <img 
                        className="w-[100vh] min-h-[50vh]"
                        src={imageUrl}
                        alt="generated image"
                        width={300}
                        height={300}
                    />
                    <p>{responseText}</p>

                </div>

                {/* <div className="w-2/6 border-2 border-green-950 rounded" */}

            </div>
       
        
        
    </div>
  )
}

GenerationResult.propTypes ={
    responseText:PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    showResult:PropTypes.bool,

};

export default GenerationResult;
