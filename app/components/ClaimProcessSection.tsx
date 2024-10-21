"use client";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const ClaimProcessSection = () => {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tabId: string) => {
    setOpenTab(openTab === tabId ? null : tabId);
  };
  return (
    <section className="mt-20 mb-20">
      <div className="row  text-red-500">
        <div className="top-secc ml-12 mr-12 mb-5">
          <h5> Guiding you through the claim process</h5>
          <h6>
            To prepare for insurance renewal, business owners should be prepared
            to answer the following questions:
          </h6>
        </div>
        <div className="m-9">
          {claimProcessItems.map((item) => (
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
      </div>
    </section>
  );
};

const claimProcessItems = [
  {
    id: "claim-process-1",
    question: "Essential steps to follow if your property has been damaged",
    answer: (
      <>
        <p>
          Report your claim anytime to Golden Era Insurance online or by calling
          1 (510) 270-8141. The sooner you report, the sooner we can help. When
          making any necessary temporary repairs, be sure to always save your
          receipts. Your Golden Era claim professional may ask you to provide
          them for reimbursement purposes.
        </p>
        <p>
          Be sure to separate your damaged property (such as inventory or stock)
          from your undamaged property.
        </p>
        <p>
          If your business has sustained extensive damage, do not go back inside
          until cleared to do so by emergency personnel or town officials, even
          if the damage is confined to one room.
        </p>
        <p>
          In cases where your business and personal property have been
          destroyed, please do not risk injury by walking through the debris.
        </p>
        {/* <p>
          If you have Business Income coverage, it may provide protection
          against certain financial losses that are sustained if your business
          is unable to operate. Learn more about Business Income coverage.
        </p> */}
      </>
    ),
  },
  {
    id: "claim-process-2",
    question:
      "I just reported my commercial property claim. What can I expect to happen next?",
    answer: (
      <>
        <p>
          Your Golden Era claim professional will contact you shortly to walk
          you through the claim process, evaluate your coverage, and assess the
          damage to your business or business property. We want to resolve your
          claim as quickly as possible. If you have questions or concerns at any
          point during the claim process, contact your Golden Era claim
          professional directly.
        </p>
      </>
    ),
  },
  {
    id: "claim-process-3",
    question: "What if this loss affects my business operations?",
    answer: (
      <>
        <p>
          You should discuss your operations and any contingency plans with your
          Golden Era claim professional as soon as possible. Your claim
          professional may be able to provide guidance and assistance to help
          you get your operation back up and running as soon as possible.
        </p>
      </>
    ),
  },
  {
    id: "claim-process-4",
    question:
      "Who is responsible for the cost of repairing the damage to the building if I am a tenant?",
    answer: (
      <>
        <p>
          Generally, if you are a tenant, your lease/rental agreement governs
          who is responsible for the cost to repair the damage to the building
          and for any betterments or improvements made to your rental space.
          Your Golden Era claim professional will review your lease/rental
          agreement and discuss it with you.
        </p>
      </>
    ),
  },
  {
    id: "claim-process-5",
    question: "How do you determine the value of my damages?",
    answer: (
      <>
        <p>
          Depending on the type of damage, your Golden Era claim professional
          may need to schedule a time to inspect your building to determine what
          needs to be repaired or replaced.
        </p>
        <p>
          If your personal property, also known as contents, has been damaged or
          destroyed, your Golden Era claim professional will work with you to
          complete an inventory of the property.
        </p>
        <p>
          Your contents inventory will be used to develop an estimate for the
          Actual Cash Value (ACV) and Replacement Cost Value (RCV) of your
          damaged property.
        </p>
        <p>
          RCV is the estimated cost of repairing a damaged item or replacing a
          damaged item with a similar one. ACV is the estimated value of the
          item or damage at the time of the loss. Generally, ACV is calculated
          as RCV minus depreciation.
        </p>
        <p>
          Your estimate will also include other information such as tax and the
          amount of depreciation, if any. Refer to our guide to understanding
          your property estimate to help you navigate the estimate&#39;s
          sections. Still have questions? Contact your Golden Era claim
          professional.
        </p>
        <p>
          If repairs are necessary, you may choose to make the repairs yourself.
          If you choose to hire a contractor, you are free to hire the
          contractor of your choice. We encourage you to check references before
          hiring anyone. Be sure your contractor is insured and bonded. It is
          possible that once a contractor begins working, he or she may discover
          a need for repairs beyond those originally addressed. If this occurs,
          please have your contractor contact your claim professional before
          conducting further repairs. We will work with your contractor so that
          repairs can continue with little to no interruption.
        </p>
      </>
    ),
  },
  {
    id: "claim-process-6",
    question: "Who will be listed as payees on any checks provided to me?",
    answer: (
      <>
        <p>
          If your policy has additional named insureds or loss payees, they will
          be listed on your check. If you have a mortgage (or other similar
          lien) on your property, the mortgage company (or lienholder) has a
          financial interest in your property. Your insurance policy requires us
          to protect their interest by including them on any payments made to
          you for damage to your buildings or other structures. Your mortgage
          company may require you to provide documentation confirming that
          repairs have been made before endorsing these payments to you, or it
          may wish to hold the payments in escrow until repairs have been
          completed. Each mortgage company has its own requirements, and it may
          take time for you to complete these requirements. To minimize any
          potential delays, you should contact your mortgage company as soon as
          possible regarding their requirements.
        </p>
      </>
    ),
  },
];

export default ClaimProcessSection;
