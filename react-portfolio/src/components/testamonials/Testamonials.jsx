import React from 'react'
import './testamonials.css'
import AVTR1 from '../../assets/avatars/avatar1.1.jpg'
import AVTR2 from '../../assets/avatars/avatar2.jpg'
import AVTR3 from '../../assets/avatars/avatar3.jpg'
import AVTR4 from '../../assets/avatars/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Jamie Roberts',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eaque necessitatibus odit asperiores ipsam, explicabo corrupti iusto nisi similique sapiente.'
    },
    {
        avatar: AVTR2,
        name: 'Jarod Bradford',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eaque necessitatibus odit asperiores ipsam, explicabo corrupti iusto nisi similique sapiente.'
    },
    {
        avatar: AVTR3,
        name: 'Stephanie Mills',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eaque necessitatibus odit asperiores ipsam, explicabo corrupti iusto nisi similique sapiente.'
    },
    {
        avatar: AVTR4,
        name: 'James Yen',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eaque necessitatibus odit asperiores ipsam, explicabo corrupti iusto nisi similique sapiente.'
    }
]

export default function Testamonials() {

    

  return (
    <section id="testamonialsSection">
        <h5>Review from Clients</h5>
        <h2>Testamonials</h2>
        
        <Swiper className="container testamonials__container"
            
            // install Swiper modules
            modules={[ Pagination ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
                {
            data.map(({avatar, name, review}, index) => {
                return (
                    <SwiperSlide key={index} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt={name} />
                        </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">
                            {review}
                            </small>
                    </SwiperSlide> 
                )
    }
    )
}
         
        </Swiper>
    </section>
  )
}
