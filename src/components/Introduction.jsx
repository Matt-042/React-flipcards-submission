// Imports
import React from 'react';
import jsonData from '/src/data.json'
import './Introduction.css'

const Introduction = () => {
  // Extract content into variable (did this to not mix up between Intro and Conclusion in the render)
  const { introductionContent } = jsonData;

  // Component rendering
  return (
    <div className="intro text-block">
      <img className="intro-img text-block-img" src={introductionContent.asset} alt={introductionContent.title} />
      <span className="text-block-heading">{introductionContent.title}</span>
      <div className="text-block-body" dangerouslySetInnerHTML={{ __html: introductionContent.description }} />
    </div>
  );
};

export default Introduction;
