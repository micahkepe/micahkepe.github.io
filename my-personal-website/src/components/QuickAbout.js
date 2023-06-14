import React from 'react';

const QuickAbout = () => {
  return (
    <section className="quick-about">
      <h1 className='font-sans font-bold text-4xl mb-6 underline decoration-sky-500'>Micah Kepe</h1>
      <p className='font-bold'>
        Computer Science Student at
      <a href="https://www.niche.com/colleges/rice-university/" target="_blank" style={ {color: "white"}} rel="noreferrer" className='no-underline hover:underline decoration-indigo-500'> Rice University</a> 
      </p>
      <p className='font-normal italic mb-6 mt-2'>Dedicated to delivering high-quality solutions.</p>
    </section>
  );
};

export default QuickAbout;



