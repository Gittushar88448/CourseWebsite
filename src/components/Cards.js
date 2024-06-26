import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {

const [likedCourses, setLikedCourses] = useState([]);

let courses = props.courses;
const category = props.category;

    function getCourses(){

        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }   


    }
    return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map(data=>(
               <Card
                data={data}
                key= {data.id}
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}/>
            ))
        }
    </div>
  )
}

export default Cards