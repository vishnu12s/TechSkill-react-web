import React, { Component } from 'react'
import './Courses.css'
import ai from'../../../assets/img//ai.png'
import sd from'../../../assets/img//sd.png'
import dg from'../../../assets/img//dg.png'
import hacking from'../../../assets/img//hacking.png'

function Courses() {
     
    const courseData =[{
        title:'AI Development',
        desc:'MasterAI Development',
        img:ai,

},
{
    title:'Digital Marketing',
    desc:'Master Digital Marketing',
    img:dg,

},
{
    title:'Cyber Security',
    desc:'Master Cyber Security',
    img:hacking,

},
{
    title:'Software development',
    desc:'MasterAI Development',
    img:sd,

}]




  return (
    <div className='container container-course'>
        <div className='course-top'>
            <h2 className='section-title' >Our Free Courses</h2>
            <p>The Top Trending Free courses With Free certificates</p>
            <div className='course-wrapper'>

                {
                    courseData.map((course,index)=>(
                   

                        <div className='course-item' key={index}>

                        <span className='course-icon'>
                            <img src={course.img} alt=''/>
    
                        </span>
    
                        <div className='course-content'>
                            <h4>{course.title}</h4>
                            <p>{course.desc}</p>
                        </div>
                        </div>

                        
                    ))
                }
                
                
            </div>
        </div>
    </div>
    
  )
}

export default Courses