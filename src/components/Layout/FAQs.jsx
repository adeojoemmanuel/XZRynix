import React, { Fragment } from "react";

import FAQsItem from "../Data/FAQsItem";

const faqsData = [
  {
    id: "q1",
    que: "How easy is it to find a property on your platform?",
    ans: "Finding a property is quick and simple. Just enter your preferences, and our advanced search filters will help you discover homes that match your needs.",
  },
  {
    id: "q2",
    que: "Can I sell my property through your platform?",
    ans: "Yes, you can easily list your property for sale. Our platform offers user-friendly tools to upload details and photos of your property, making it easy to reach potential buyers.",
  },
  {
    id: "q3",
    que: "Is the platform available for both renting and buying?",
    ans: "Absolutely! Our platform offers options for buying, selling, and renting homes, so you can explore all types of real estate opportunities in one place.",
  },
  {
    id: "q4",
    que: "How secure is my personal information on your site?",
    ans: "We prioritize your privacy. Our platform uses advanced security protocols to ensure your personal and payment information is kept safe and secure at all times."

  },
];

const FAQs = () => {
  const mappedList = faqsData.map((item) => (
    <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <h1 className="font-Poppins font-bold text-3xl text-center mb-10">
          Frequently Asked <span className="text-blue">Questions</span>
        </h1>
        <div className="lg:mx-28 mx-0">{mappedList}</div>
      </section>
    </Fragment>
  );
};

export default FAQs;
