import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';

export default function Tokenomics() {
  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col"
      style={{
        background: '#eee',
      }} id='tokenomics'
    >
      <h1 className="text-5xl font-dosis font-bold mb-10">Tokenomics</h1>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.tokenomics.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
            </span>
          ))}
        </div>
      </div>

      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis ">
        {content.tokenomics.desc}.
      </p>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.tokenomics.tech2.map((tech, index) => (
              <span
                  key={index}
                  className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                      index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
                  }`}
              >
                <a href={tech.link} target='_blank'>
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
              </a>
            </span>
          ))}
        </div>
        <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis ">
          {content.tokenomics.lock}.
        </p>
      </div>
    </div>
  );
}
