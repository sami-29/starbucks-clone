import React from "react";

const Column = (data) => {
  console.log(data);
  return (
    <>
      <div className={`column column-${data.bgColor}`}>
        <div className={`flex-md flex-${data.direction}`}>
          <div className='flex md-size6of12 justify-center align-center'>
            <img src={data.img} alt='' />
          </div>
          <div className='text-container md-size6of12'>
            <div className='text-block'>
              <h1>{data.h1}</h1>
              <p>{data.p}</p>
              <button>{data.button}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Column;
