/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';
import useStartAnimation from "../hook/useStartAnimation";
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const transition = (duration) =>
      `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  return (
      <Disclosure as="nav" className="bg-yellow-800  fixed top-0 w-screen z-40">
        {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                          className="block lg:hidden h-8 w-auto"
                          src={process.env.PUBLIC_URL+'/assets/bootoken.png'}
                          alt="Workflow"
                      />
                      <img
                          className="hidden lg:block h-8 w-auto"
                          src={process.env.PUBLIC_URL+'/assets/bootoken.png'}
                          alt="Workflow"
                      />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex  space-x-4">
                        {content.nav.links.map((link, index) => {
                          if (link.text === 'Buy Boo' || link.text === 'Whitepaper')
                          {
                            return (
                                <a href={link.to} target="_blank" rel="noopener noreferrer">
                                <span className={classNames(
                                    link.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'mr-4 cursor-pointer px-3 py-2 rounded-md text-sm font-medium'
                                )} key={index}>
                                {link.text}
                              </span>
                                </a>
                            )
                          }
                          else {
                            return (
                                <ScrollLink to={link.to} smooth={true}>
                <span className={classNames(
                    link.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'mr-4 cursor-pointer px-3 py-2 rounded-md text-sm font-medium'
                )} key={index}>
                  {link.text}
                </span>
                                </ScrollLink>
                            );
                          }})}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {content.nav.links.map((link, index) => {
                    if (link.text === 'Buy Boo' || link.text === 'Whitepaper')
                    {
                      return (
                          <a href={link.to} target="_blank" rel="noopener noreferrer">
                                <span className={classNames(
                                    link.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'mr-4 cursor-pointer px-3 py-2 rounded-md text-sm font-medium'
                                )} key={index}>
                                {link.text}
                              </span>
                          </a>
                      )
                    }
                    else {
                      return (
                          <ScrollLink to={link.to} smooth={true}>
                <span className={classNames(
                    link.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block mr-4 cursor-pointer px-3 py-2 rounded-md text-base font-medium'
                )} key={index}>
                  {link.text}
                </span>
                          </ScrollLink>
                      );
                    }})}
                </div>
              </Disclosure.Panel>
            </>
        )}
      </Disclosure>
  )
}
