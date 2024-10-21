"use client";

import { useState, FC, ReactNode } from "react";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div key={id} className="relative mb-3">
      <h6 className="mb-0">
        <button
          onClick={onToggle}
          className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
        >
          <span>{question}</span>
          <i
            className={`absolute right-0 pt-1 text-xs fa fa-plus ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></i>
          <i
            className={`absolute right-0 pt-1 text-xs fa fa-minus ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          ></i>
        </button>
      </h6>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
