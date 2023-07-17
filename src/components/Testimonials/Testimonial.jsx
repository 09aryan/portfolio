import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import cn from '../../img/cn.jpg'
import iiit from '../../img/iiit.png'
import chegg from '../../img/chegg.png'


const Testimonial = () => {
  const clients = [
    {
      img: cn,
      review:
        "As a Teaching Assistant at Coding Ninjas, I had the privilege of assisting students in their coding journey. I provided guidance, answered questions, and facilitated interactive learning sessions. Collaborating with talented instructors and witnessing students' progress was immensely rewarding. Being a part of their learning experience was truly fulfilling.",
    },
    {
      img: iiit,
      review:
        "Achieving 1st position in the App Development Hackathon at IIIT Dharwad was a proud moment for me. Collaborating with my team, we developed an innovative and functional app that impressed the judges. It was a testament to our skills, creativity, and dedication to creating impactful solutions.",
    },
    {
      img: chegg,
      review:
        "As an SME (Subject Matter Expert) at Chegg, I provided expert-level assistance to students seeking help with their academic questions and assignments. Leveraging my knowledge and expertise, I delivered clear and accurate explanations, helping students grasp complex concepts and achieve academic success. It was a rewarding experience contributing to their learning journey.",
    },
  
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
