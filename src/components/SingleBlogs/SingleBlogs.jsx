import React from 'react'
import divider from "../../assets/divider-line.png";
import calender from "../../assets/calender-blog.png";



const SingleBlogs = ({blog : {question,answer,date}}) => {    

  return (
    <div className="border bg-[#141414]/10 p-8 rounded-2xl mt-16">
            <h5 className="font-bold text-[20px] text-[#141414] mb-3">
              {question}
            </h5>
            <img src={divider} alt="divider" />
            <p className="font-extrabold text-[20px] text-[#0EA106] mt-4">Answer:</p>
            <p className="plus-jakarta-sans-medium text-[18px] text-[#141414]/60 mb-4">
             {answer}
            </p>
            <img src={divider} alt="divider" />
            <p className="plus-jakarta-sans-medium text-[18px] text-[#141414]/60 flex items-center gap-3 mt-4">
              <img src={calender} alt="calender icon" className='w-5 h-5'/>
              <span>Added at {date}</span>
            </p>
          </div>
  )
}

export default SingleBlogs