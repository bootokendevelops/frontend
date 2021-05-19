import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function About() {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#FEFEFE',
      }}
      id="about"
    >
      <h1 className="text-5xl font-dosis font-bold">{content.about.title}</h1>
      <p className="text-gray-600 text-2xl font-dosis mb-10">Give a hand</p>
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 ">

          <div
          className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
            transform: animated
              ? 'translate(-10%, 0%) rotate3d(0.540, -0.95, 0, 22deg) rotateZ(7deg)'
              : '',
            boxShadow:
              '35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <AboutDetail />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <AboutDetail />
        </div>
      </div>
    </div>
  );
}

const AboutDetail = () => {
  const animated = useWindowPosition('header', 0.6);
  return (
    <div>
      <h1
        className={` ${
          animated ? '' : 'translate-y-10 opacity-0'
        }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {content.about.projectName}
      </h1>
      <p
        className={`${
          animated ? '' : 'translate-y-10 opacity-0'
        }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {content.about.desc}
      </p>
    </div>
  );
};
