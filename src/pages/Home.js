import React from 'react';
import Hero from "../components/Hero";
import CourseList from '../components/CourseList';
import { Course } from '../components/Course';
import fakeData from '../fakedata';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const Home = () => {

  const generate = (item,index)=>{
    return(
      <Course instructor-name={item.instructor}
      duration={item.duration}
      in_cart={item.in_cart}
      price={item.price}
      instructor_photo={item.instructor_photo}
      title={item.title}
      instructor={item.instructor}
      course_thumbnail={item.course_thumbnail} key={index}/>      
    )
  }
  return (
    <div className='holder'>
      <Hero />
      <CourseList />
      {fakeData.map((item,index)=>generate(item,index)  
      )}
      <Faq />
      <Footer />
    </div>
    
  )

};


export default Home;