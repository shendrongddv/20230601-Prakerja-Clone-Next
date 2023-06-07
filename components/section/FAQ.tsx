"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { BsChevronRight } from "react-icons/bs";

import { frequentlyAskedQuestion } from "../../dummydata.js";

const FAQ = () => {
  const items = frequentlyAskedQuestion;

  return (
    <section className="bg-white px-6 py-16">
      <div className="container">
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="w-full border sm:w-1/4">
            <h2 className="h2">Pertanyaan Populer</h2>
          </div>
          <div className="w-full space-y-4 border sm:w-3/4">
            {items?.map((item) => (
              <Disclosure key={item.id}>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <div className="rounded-2xl bg-slate-100 p-4 sm:p-6">
                    <Disclosure.Button className="flex w-full items-start justify-between">
                      <h3 className="text-start text-base font-bold sm:text-lg">
                        {item.q}
                      </h3>
                      <BsChevronRight
                        className={
                          open
                            ? "mt-1 rotate-90 transform duration-500 ease-out"
                            : "mt-1 duration-500 ease-out"
                        }
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-500 ease-out"
                      enterFrom="transform scale-95 opacity-0 pt-0"
                      enterTo="transform scale-100 opacity-100 pt-4"
                      // leave="transition duration-300 ease-out"
                      // leaveFrom="transform scale-100 opacity-100"
                      // leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        <p className="text-sm opacity-90 sm:text-base">
                          {item.a}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
