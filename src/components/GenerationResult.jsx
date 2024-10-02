// import React from "react";
import PropTypes from "prop-types";

const GenerationResult = ({responseText , imageUrl , showResult=true}) => {
   console.log();
  return (
    <div className="p-4 bg-gray-500 rounded-lg w-full">
        {showResult ? (
            <div className="mx-auto p-4 mt-4 gap-2 bg-green-600 w-[70%] border-2 border-green-950 rounded-3xl flex justify-center min-h-[600px] mb-20">
                <div className="w-4/6   border-green-950 rounded-2xl">
                    <img 
                        src={imageUrl}
                        alt="generated image"
                        width={300}
                        height={300}
                    />
                    <p>{responseText}</p>

                </div>

                {/* <div className="w-2/6 border-2 border-green-950 rounded" */}

            </div>
          ) : (
            <div></div>
          )
        }
        
    </div>
  )
}

GenerationResult.propTypes ={
    responseText:PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    showResult:PropTypes.bool,

};

export default GenerationResult;
