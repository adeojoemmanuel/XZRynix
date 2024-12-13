import React, { Fragment } from "react";

import TestimonialItems from "../Data/TestimonialItems";

import Client1 from "../../assets/Client1.jpg";
import Client2 from "../../assets/Client2.jpg";
import Client3 from "../../assets/Client3.jpg";
import Client4 from "../../assets/Client4.jpg";

const testimonialData = [
  {
    id: "p1",
    text: "This platform made finding my dream home so easy! The user-friendly design and helpful features made the process smooth and stress-free. Highly recommend to anyone searching for a home!",
    name: "Emily Josh",
    image: Client1,
  },
  {
    id: "p2",
    text: "Amazing service and support! The site is intuitive, and I was able to quickly find the perfect property. The team behind it is incredibly responsive and made the whole experience enjoyable.",
    name: "Robert Jack",
    image: Client2,
  },
  {
    id: "p3",
    text: "I had a seamless experience from start to finish. The website is easy to navigate, and I was able to find my dream home in no time. I highly recommend this platform to anyone looking for a new place!",
    name: "Olivia Ava",
    image: Client3,
  },
  {
    id: "p4",
    text: "This site made my home search so much easier! The layout is clean, and the search tools are very effective. I found exactly what I was looking for, and the customer service is top-notch!",
    name: "Noah Emma",
    image: Client4,
  },
];

const Testimonial = () => {
  const mappedList = <TestimonialItems data={testimonialData} />;
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-between px-auto">
          <div>
            <h1 className="font-Poppins font-bold text-3xl text-left mb-3">
              What Our Client <span className="text-blue">Say</span>
            </h1>
            <p className="text-left text-ash">
            Find your perfect home, effortlessly. Our platform simplifies your search, making it quick and easy!
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row my-6">
          {mappedList}
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
