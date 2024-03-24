import React from 'react'
import Card from './Card';
const Cards = (props) => {
    const courses = props.courses;
    let category = props.category;

    function getCourses(){
        let allCourses = [];
        if(category === "All"){
            Object.values(courses)
            .forEach((array)=>array
              .forEach((data)=>allCourses.push(data)));
            
            return allCourses;
        }else{
            return courses[category];
        }
    }
    return (
    <div>
        {
            getCourses().map((data)=>(
               <Card            
                courses={courses}
                key={courses.id}/>
            ))
        }
    </div>
  )
}

export default Cards