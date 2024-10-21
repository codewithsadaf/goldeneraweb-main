"use client";
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const TermsOfUseSection = () => {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tabId: string) => {
    setOpenTab(openTab === tabId ? null : tabId);
  };
  return (
    <div className="row txt-part lft-aln pl-20 pr-20">
      <h1 className="wow fadeInDown">
        Golden Era Insurance Agency Website Terms of Use
      </h1>
      <p>
        <b>Last Updated: 8/29/2024</b>
      </p>
      <p>
        Welcome to the Golden Era Insurance Agency website
        (&quot;Website&quot;). By accessing or using our Website, you agree to
        comply with and be bound by these Terms of Use (&quot;Terms&quot;). If
        you do not agree to these Terms, please do not use this Website.
      </p>
      <div className="text-left">
        {glossaryItems.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            question={item.term}
            answer={item.definition}
            isOpen={openTab === item.id}
            onToggle={() => toggleTab(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

const glossaryItems = [
  {
    id: "glossary-1",
    term: "Acceptance of Terms",
    definition: (
      <>
        By using this Website, you represent that you are at least 18 years old
        and have the legal authority to accept these Terms. You agree to use the
        Website in accordance with all applicable laws, rules, and regulations.
      </>
    ),
  },
  {
    id: "glossary-2",
    term: "Changes to the Terms",
    definition: (
      <>
        Golden Era Insurance Agency reserves the right to modify or update these
        Terms at any time without prior notice. Any changes will be effective
        immediately upon posting to the Website. Your continued use of the
        Website after any changes constitutes your acceptance of the revised
        Terms.
      </>
    ),
  },
  {
    id: "glossary-3",
    term: "Use of the Website",
    definition: (
      <>
        <ul>
          <li>
            <b>Permitted Use</b>
          </li>
          You may use the Website for your personal, non-commercial purposes
          only. You agree not to use the Website for any unlawful or prohibited
          purpose.
          <li>
            <b>Prohibited Use</b>
          </li>
          You agree not to:
          <ul>
            <li>
              Modify, copy, distribute, transmit, display, perform, reproduce,
              publish, license, create derivative works from, transfer, or sell
              any content, information, software, products, or services obtained
              from or through this Website.
            </li>
            <li>
              Use the Website in any manner that could damage, disable,
              overburden, or impair any Golden Era Insurance Agency server or
              network.
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the Website,
              other accounts, computer systems, or networks connected to the
              Website.
            </li>
            <li>
              Use any robot, spider, scraper, or other automated means to access
              the Website for any purpose without our express written
              permission.
            </li>
          </ul>
        </ul>
      </>
    ),
  },
  {
    id: "glossary-4",
    term: "Intellectual Property Rights",
    definition: (
      <>
        All content on this Website, including but not limited to text,
        graphics, logos, images, videos, and software, is the property of Golden
        Era Insurance Agency or its licensors and is protected by intellectual
        property laws. You may not use any of our intellectual property without
        our prior written consent.
      </>
    ),
  },
  {
    id: "glossary-5",
    term: "Third-Party Links",
    definition: (
      <>
        This Website may contain links to third-party websites for your
        convenience. Golden Era Insurance Agency does not endorse or control
        these third-party websites and is not responsible for their content or
        accuracy. Accessing any third-party website is at your own risk.
      </>
    ),
  },
  {
    id: "glossary-6",
    term: "Privacy Policy",
    definition: (
      <>
        Your use of this Website is also governed by our Privacy Policy, which
        describes how we collect, use, and protect your personal information. By
        using this Website, you consent to the practices described in our
        Privacy Policy.
      </>
    ),
  },
  {
    id: "glossary-7",
    term: "Disclaimer of Warranties",
    definition: (
      <>
        Golden Era Insurance Agency makes no representations or warranties about
        the accuracy, reliability, completeness, or timeliness of the content on
        this Website. The Website is provided on an &quot;as&ndash;is&quot; and
        &quot;as&ndash;available&quot; basis. To the fullest extent permitted by
        law, Golden Era Insurance Agency disclaims all warranties, express or
        implied, including but not limited to warranties of merchantability,
        fitness for a particular purpose, and non-infringement.
      </>
    ),
  },
  {
    id: "glossary-8",
    term: "Limitation of Liability",
    definition: (
      <>
        To the fullest extent permitted by law, Golden Era Insurance Agency
        shall not be liable for any direct, indirect, incidental, special,
        consequential, or punitive damages, including but not limited to loss of
        profits, data, or other intangible losses, resulting from:
        <ul>
          <li>Your use or inability to use the Website.</li>
          <li>Any unauthorized access to or alteration of your data.</li>
          <li>Any statements or conduct of any third party on the Website.</li>
        </ul>
      </>
    ),
  },
  {
    id: "glossary-9",
    term: "Indemnification",
    definition: (
      <>
        You agree to indemnify, defend, and hold harmless Golden Era Insurance
        Agency, its affiliates, officers, directors, employees, agents,
        licensors, and suppliers from and against all claims, losses, expenses,
        damages, and costs, including reasonable attorneys&#39; fees, arising
        out of or relating to your use of the Website or violation of these
        Terms.
      </>
    ),
  },
  {
    id: "glossary-10",
    term: "Governing Law and Jurisdiction",
    definition: (
      <>
        These Terms and your use of the Website are governed by and construed in
        accordance with the laws of California, without regard to its conflict
        of law principles. Any legal action or proceeding arising out of or
        related to these Terms shall be brought exclusively in the courts
        located in Calilfornia.
      </>
    ),
  },
  {
    id: "glossary-11",
    term: "Termination",
    definition: (
      <>
        Golden Era Insurance Agency reserves the right to terminate or suspend
        your access to the Website at its sole discretion, without notice, for
        conduct that Golden Era Insurance Agency believes violates these Terms
        or is harmful to other users, Golden Era Insurance Agency, or third
        parties.
      </>
    ),
  },
  {
    id: "glossary-12",
    term: "Contact Information",
    definition: (
      <>
        If you have any questions or concerns about these Terms, please contact
        us at:
        <br />
        <b>Golden Era Insurance Agency</b>
        <br />
        200 Brown Road
        <br />
        Suite 203 <br />
        Fremont, CA 94539 <br />
        (510) 270-8141
        <br />
        info@goldenerainsurance.com
        <br />
      </>
    ),
  },
  {
    id: "glossary-13",
    term: "Miscellaneous",
    definition: (
      <>
        <ul>
          <li>
            <b>Severability:</b> If any provision of these Terms is found to be
            unlawful, void, or unenforceable, the remaining provisions shall
            remain in full force and effect.
          </li>
          <li>
            <b>Entire Agreement:</b> These Terms constitute the entire agreement
            between you and Golden Era Insurance Agency concerning your use of
            the Website.
          </li>
          <li>
            <b>Waiver:</b> No waiver of any term or condition shall be deemed a
            further or continuing waiver of such term or condition or any other
            term or condition.
          </li>
        </ul>
      </>
    ),
  },
];

export default TermsOfUseSection;
