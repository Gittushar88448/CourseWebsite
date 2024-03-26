import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc"


const Card = (props) => {
let data = props.data;
 return (
  <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden' >
      <div className='relative'>
         
          <img src={data.image.url}/>

          <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
          grid place-items-center'>
              <button >
                  {
                       
                      <FcLike fontSize="1.75rem" />
            
                  }
              </button>
          </div>
      </div>
      

      <div className='p-4'>
          <p className="text-white font-semibold text-lg leading-6">{data.title}</p>
          <p className='mt-2 text-white'>
                  {
                       data.description
                //       (courses.description.substr(0,100)) + "..." :
                //       (courses.description)
                  }
          </p>
      </div>
  </div>
)
}

export default Card