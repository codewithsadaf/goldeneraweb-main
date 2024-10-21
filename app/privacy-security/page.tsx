"use client";
import React, { useState } from "react";
import TabNavigation from "../components/TabNavigation";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";
import AccordionItem from "../components/AccordionItem";
const PrivacySecurity = () => {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tabId: string) => {
    setOpenTab(openTab === tabId ? null : tabId);
  };
  return (
    <>
      <TabNavigation />
      <div className="row txt-part lft-aln mt-14 pl-20 pr-20">
        <div className="">
          <h1 className="wow fadeInDown">
            Golden Era Insurance Agency Privacy & Security Policy
          </h1>
          <p>
            <b>Last Updated: 8/29/2024</b>
          </p>
          <p>
            <strong>
              Golden Era Insurance Agency (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) respects your privacy and is committed to
              protecting your personal information. This Privacy & Security
              Policy (&quot;Policy&quot;) explains how we collect, use, share,
              and safeguard your information when you visit our website
              (&quot;Website&quot;). By accessing or using our Website, you
              agree to the terms of this Policy. If you do not agree, please do
              not use our Website.
            </strong>
          </p>
        </div>
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
      {/* <div className="ml-20 px-[55px] mb-10"></div> */}
      <CustomerFeedbackSection />
    </>
  );
};
const glossaryItems = [
  {
    id: "glossary-1",
    term: "Information We Collect",
    definition: (
      <>
        We may collect the following types of information when you use our
        Website:
        <ul>
          <li>
            <b>Personal Information:</b> Information that identifies you
            personally, such as your name, address, email address, phone number,
            and other contact details. We collect this information when you fill
            out forms on our Website, request information, or contact us.
          </li>
          <li>
            <b>Non-Personal Information:</b> Information that does not identify
            you personally, such as your IP address, browser type, operating
            system, and browsing behavior on our Website. This information is
            collected automatically through cookies, web beacons, and other
            tracking technologies.
          </li>
          <li>
            <b>Financial Information:</b> If you use our services to make
            payments, we may collect financial information, such as credit card
            numbers or bank account details, through our secure payment
            processor.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "glossary-2",
    term: "How We Use Your Information",
    definition: (
      <>
        We use the information we collect for the following purposes:
        <ul>
          <li>To provide, maintain, and improve our services and Website.</li>
          <li>
            To respond to your inquiries, process your requests, or complete
            transactions.
          </li>
          <li>
            To communicate with you, including sending you promotional materials
            or other information related to our services.
          </li>
          <li>
            To analyze and understand how users interact with our Website to
            improve user experience.
          </li>
          <li>
            To comply with legal obligations and protect the rights, property,
            or safety of Golden Era Insurance Agency, our customers, or others.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "glossary-3",
    term: "Sharing Your Information",
    definition: (
      <>
        We do not sell or rent your personal information to third parties.
        However, we may share your information in the following circumstances:
        <ul>
          <li>
            <b>With Service Providers:</b> We may share your information with
            third-party service providers who perform services on our behalf,
            such as payment processing, data analysis, email delivery, and
            hosting services. These providers are obligated to protect your
            information and only use it for the purposes for which it was
            shared.
          </li>
          <li>
            <b>For Legal Reasons:</b> We may disclose your information if
            required by law, court order, or other legal processes, or if we
            believe it is necessary to protect the rights, property, or safety
            of Golden Era Insurance Agency, our customers, or others.
          </li>
          <li>
            <b>In Connection with a Business Transfer:</b> If we are involved in
            a merger, acquisition, or sale of assets, your information may be
            transferred as part of that business transaction.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "glossary-4",
    term: "Cookies and Tracking Technologies",
    definition: (
      <>
        Our Website uses cookies, web beacons, and similar tracking technologies
        to enhance your experience and analyze usage.
        <ul>
          <li>
            <b>Cookies:</b> Cookies are small text files placed on your device
            to collect standard internet log information and visitor behavior
            information. You can control the use of cookies through your browser
            settings.
          </li>
          <li>
            <b>Web Beacons:</b> Web beacons are small graphic images that may be
            included in our emails and on our Website to track usage and monitor
            the effectiveness of our marketing campaigns.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "glossary-5",
    term: "Data Security",
    definition: (
      <>
        We take reasonable measures to protect your information from
        unauthorized access, disclosure, alteration, or destruction. These
        measures include:
        <ul>
          <li>
            <b>Encryption:</b> We use encryption technologies, such as Secure
            Socket Layer (SSL), to protect your data during transmission.
          </li>
          <li>
            <b>Access Controls:</b> Access to personal information is restricted
            to authorized employees, agents, or contractors who need it to
            perform their job functions.
          </li>
          <li>
            <b>Regular Monitoring:</b> We regularly monitor our systems for
            potential vulnerabilities and attacks.
          </li>
        </ul>
        However, please note that no method of transmission over the Internet or
        method of electronic storage is 100% secure. While we strive to use
        commercially acceptable means to protect your information, we cannot
        guarantee absolute security.
      </>
    ),
  },
  {
    id: "glossary-6",
    term: "Your Choices and Rights",
    definition: (
      <>
        <ul>
          <li>
            <b>Opt-Out:</b> You may choose to opt out of receiving promotional
            communications from us by following the unsubscribe instructions in
            the email or contacting us directly.
          </li>
          <li>
            <b>Access and Update Information:</b>You may request access to the
            personal information we hold about you and request corrections or
            deletions of inaccurate information.
          </li>
          <li>
            <b>Cookies:</b>You can choose to accept or decline cookies. Most web
            browsers automatically accept cookies, but you can usually modify
            your browser settings to decline cookies if you prefer.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "glossary-7",
    term: "Third-Party Websites",
    definition: (
      <>
        Our Website may contain links to third&ndash;party websites. We are not
        responsible for the privacy practices or the content of these websites.
        We encourage you to read the privacy policies of any third-party
        websites you visit.
      </>
    ),
  },
  {
    id: "glossary-8",
    term: "Children's Privacyy",
    definition: (
      <>
        Our Website is not intended for children under the age of 13, and we do
        not knowingly collect personal information from children under 13. If
        you are a parent or guardian and believe your child has provided us with
        personal information, please contact us, and we will delete such
        information from our records.
      </>
    ),
  },
  {
    id: "glossary-9",
    term: "International Users",
    definition: (
      <>
        If you are accessing our Website from outside the United States, please
        be aware that your information may be transferred to, stored, and
        processed in the United States. By using our Website, you consent to the
        transfer, storage, and processing of your information in the United
        States, where data protection and privacy regulations may differ from
        those of your home country.
      </>
    ),
  },
  {
    id: "glossary-10",
    term: "Changes to This Privacy & Security Policy",
    definition: (
      <>
        We reserve the right to modify or update this Policy at any time. We
        will notify you of any changes by posting the updated Policy on our
        Website with a new &quot;Last Updated&quot; date. Your continued use of
        the Website following any changes constitutes your acceptance of the
        updated Policy.
      </>
    ),
  },
  {
    id: "glossary-11",
    term: "Contact Us",
    definition: (
      <>
        If you have any questions, concerns, or comments about this Privacy &
        Security Policy, or if you need to update or delete your information,
        please contact us at:
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
    id: "glossary-12",
    term: "Your California Privacy Rights",
    definition: (
      <>
        If you are a California resident, you have the right under the
        California Consumer Privacy Act (CCPA) to request information regarding
        the collection, use, and sharing of your personal information, as well
        as the right to request the deletion of your personal information under
        certain conditions. To exercise these rights, please contact us using
        the information provided above.
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
            <b>Severability:</b> If any provision of this Policy is found to be
            unlawful, void, or unenforceable, the remaining provisions shall
            remain in full force and effect.{" "}
          </li>
          <li>
            <b>Entire Agreement:</b> This Policy constitutes the entire
            agreement between you and Golden Era Insurance Agency concerning
            your privacy and security on the Website.
          </li>
        </ul>
      </>
    ),
  },
];
export default PrivacySecurity;
