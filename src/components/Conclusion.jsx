// Imports
import React from 'react';
import jsonData from '/src/data.json'
import './Conclusion.css'

const Conclusion = () => {
  // Extract content into variable (did this to not mix up between Intro and Conclusion in the render)
  const { conclusionContent } = jsonData;

  // Component rendering
  return (
    <div className="conclusion text-block">
      <img className="conclusion-img text-block-img" src={conclusionContent.asset} alt={conclusionContent.title} />
      <span className="text-block-heading">{conclusionContent.title}</span>
      <div className="text-block-body" dangerouslySetInnerHTML={{ __html: conclusionContent.description }} />
    </div>
  );
};

export default Conclusion;