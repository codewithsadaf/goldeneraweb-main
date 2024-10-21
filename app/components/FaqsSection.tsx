"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem"; // Import the AccordionItem component

const FaqsSection = () => {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tabId: string) => {
    setOpenTab(openTab === tabId ? null : tabId);
  };

  return (
    <section className="mt-20 mb-20">
      <div className="row  text-red-500">
        <div className="top-secc mb-6">
          <h3>Questions to answer before renewing your business insurance</h3>
          <h6>
            To prepare for insurance renewal, business owners should be prepared
            to answer the following questions:
          </h6>
        </div>

        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openTab === item.id}
            onToggle={() => toggleTab(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

const faqItems = [
  {
    id: "collapse-1",
    question: "Have you moved to a new location?",
    answer: (
      <>
        Moving from a home office to a commercial space, expanding to a new
        location, or opening an additional office could all trigger the need for
        changes to general liability insurance or a business owner&#39;s policy.
        In some cases, insurance rates may actually go down – especially if the
        new location is smaller and includes enhanced safety features, such as a
        wired alarm system or sprinklers.
      </>
    ),
  },
  {
    id: "collapse-2",
    question: "Has your number of employees changed?",
    answer: (
      <>
        Staff changes could require updates to your workers&#39; compensation
        insurance policy. Every state has different rules, but the majority
        require employers to purchase coverage as soon as the first employee is
        hired.
        <br />
        As employees join or leave the company, workers&#39; comp coverage
        levels should be adjusted. This ensures all employees are covered and
        business owners aren&#39;t paying for staff members who are no longer
        with the company. The insurance renewal process is the perfect
        opportunity for business owners to verify they are carrying appropriate
        workers&#39; comp coverage.
      </>
    ),
  },
  {
    id: "collapse-3",
    question: "Are you offering new goods or services?",
    answer: (
      <>
        Changes in service offerings may require adjustments to professional
        liability insurance coverage, and businesses that update product lines
        should revisit the product liability coverage in their general liability
        policy.
        <br />
        The renewal period is also a good time to verify if you have cyber
        liability coverage, which can protect small business owners from the
        financial fallout of a data breach. This coverage is often included in
        professional liability or general liability policies. It can also be
        purchased as a standalone policy.
      </>
    ),
  },
  {
    id: "collapse-4",
    question: "Did you purchase new business equipment?",
    answer: (
      <>
        The rates for commercial property insurance, which can be purchased
        separately or as part of a business owner&#39;s policy, are based on the
        type and amount of equipment a business owns. Significant changes to the
        value of business property could impact your annual premium.
      </>
    ),
  },
  {
    id: "collapse-5",
    question: "Have your business practices changed significantly?",
    answer: (
      <>
        If your business practices have changed significantly, you may need to
        adjust certain policies, such as general liability insurance, or add new
        ones, such as commercial auto insurance, to ensure the business is
        protected from additional risks.
      </>
    ),
  },
  {
    id: "collapse-6",
    question: "Did you purchase or sell commercial vehicles?",
    answer: (
      <>
        Businesses that bought or sold a business vehicle will need to adjust
        their commercial auto insurance coverage if they haven&#39;t already
        done so. In addition, businesses may need to add hired and non-owned
        auto insurance if employees use personal vehicles for business purposes.
        Personal auto insurance policies typically don&#39;t cover work-related
        driving. A change to the company&#39;s travel radius could also trigger
        an increase or decrease in coverage need.
      </>
    ),
  },
];

export default FaqsSection;
