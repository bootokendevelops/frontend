import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Community() {
    const animated = useWindowPosition('header', 0.6, 4);
    return (
        <div
            className=" min-h-screen  flex justify-center items-center  "
            id="community"
        >
            <div
                style={{
                    minHeight: '50vh',
                    background: '#fedf6a',
                }}
                className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
            >
                <LazyLoadImage
                    effect="blur"
                    src={content.contact.img}
                    placeholderSrc={content.contact.imgPlaceholder}
                    alt="profile"
                    width="300px"
                    className="mt-10 transtion duration-2000 ease-in-out mx-auto"
                />
                <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
                    <h1
                        className={`${
                            animated ? '' : 'translate-y-10 opacity-0'
                        } transform transition duration-3000 text-yellow-800 text-5xl font-bold`}
                    >
                        {content.contact.title}
                    </h1>
                    <p
                        className={`${
                            animated ? '' : 'translate-y-10 opacity-0'
                        } transform transition duration-3000 text-yellow-800 text-2xl`}
                    >
                        {content.contact.desc}
                    </p>
                    <div
                        className={`flex ${
                            animated ? '' : 'translate-y-10 opacity-0'
                        } transform transition duration-3000 `}
                    >
                        {content.contact.socials.map((social, index) => {
                            return (
                                <a href={social.link} target='_blank'>
                                <LazyLoadImage
                                    effect="blur"
                                    className="m-2 px-1"
                                    width="50px"
                                    key={index}
                                    src={social.img}
                                    alt={social.alt}
                                />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
