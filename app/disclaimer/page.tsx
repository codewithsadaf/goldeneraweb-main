import React from "react";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";
import DisclaimerSliderSection from "../components/DisclaimerSliderSection";

const Disclaimer = () => {
  return (
    <>
      <DisclaimerSliderSection />
      <section className="bg-white-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h6 className="text-lg font-semibold text-gray-800 mb-6">
            Legal Disclaimers
          </h6>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>
              <strong>Accuracy:</strong> Every effort is made to provide
              information that is accurate. However, protocols, policies,
              prices, and other matters contained in this website are subject to
              change at any time by appropriate action of Wagner-Giblin
              Insurance Agency.
            </li>
            <li>
              <strong>Not Solicitation or Advice:</strong> The information
              contained within this site is provided for education and general
              information purposes and is not intended to constitute an offer to
              solicit business or an offer to sell in connection with any
              product or service. We do not intend this site to be a
              solicitation related to any particular company, nor does it intend
              to provide investment, legal, or tax advice. Users should consult
              with their own investment, legal, or tax advisors regarding any
              insurance or investment strategies discussed in this website.
            </li>
            <li>
              <strong>Copyright:</strong> Copyright in this website rests with
              Wagner-Giblin Insurance Agency unless otherwise indicated.
            </li>
            <li>
              <strong>No Warranties:</strong> THIS WEBSITE IS PROVIDED ON AN
              &#34;AS IS,&#34; &#34;AS AVAILABLE&#34; BASIS WITHOUT WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
              THOSE OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
              OR NON-INFRINGEMENT OR ANY WARRANTY ARISING FROM A COURSE OF
              DEALING, USAGE, OR TRADE PRACTICE. NO ORAL ADVICE OR WRITTEN
              INFORMATION PROVIDED SHALL CREATE A WARRANTY; NOR SHALL MEMBERS OR
              VISITORS TO THE SITE RELY ON ANY SUCH INFORMATION OR ADVICE.
            </li>
            <li>
              <strong>Disclaimer of Liability:</strong> The user assumes all
              responsibility and risk for the use of this website and the
              Internet generally. Under no circumstances, including negligence,
              shall anyone involved in creating or maintaining this website be
              liable for any DIRECT, INDIRECT, INCIDENTAL, SPECIAL, or
              CONSEQUENTIAL DAMAGES, or LOST PROFITS that result from the use or
              inability to use the website and/or any other websites which are
              linked to this site. Nor shall they be liable for any such damages
              including, but not limited to, reliance by a member or visitor on
              any information obtained via the website; or that result from
              mistakes, omissions, interruptions, deletion of files, viruses,
              errors, defects, or any failure of performance, communications
              failure, theft, destruction, or unauthorized access.
            </li>
            <li>
              <strong>Legal Limitations:</strong> States or Countries which do
              not allow some or all of the above limitations of liability,
              liability shall be limited to the greatest extent allowed by law.
            </li>
            <li>
              <strong>Online Conduct:</strong> Visitors agree to use the website
              only for lawful purposes and are prohibited from posting on the
              website any unlawful, harmful, threatening, abusive, harassing,
              defamatory, or obscene material of any kind, including, but not
              limited to, any material which encourages conduct that would
              constitute a criminal offense, give rise to civil liability, or
              otherwise violate any applicable local, state, national, or
              international law. Although in the absence of a specific complaint
              any postings are not monitored for compliance with this provision,
              in an effort to discourage such conduct, please note that all
              postings in any guestbook or similar area will be removed that do
              not comply.
            </li>
            <li>
              <strong>Third Party Content:</strong> This site contains links to
              external sites which are not maintained by Wagner-Giblin Insurance
              Agency, and we are not responsible for the content of such
              external sites. We are DISTRIBUTORS (NOT PUBLISHERS) of the
              content supplied by visitors and other third parties on this
              website. Accordingly, we have no more editorial control over this
              content than does a public library. Your access to and use of any
              other Internet sites linked to or from this website is at your own
              risk and Wagner-Giblin Insurance Agency assumes no obligation or
              liability in connection therewith. Any opinions, advice,
              statements, services, offers, or other information or content made
              available by members, visitors, and other third parties are those
              of the respective author(s) and we are not responsible for any
              material posted by third parties. We cannot and do not endorse it
              in any way, nor do we vouch for its accuracy or usefulness.
              Furthermore, we expressly disclaim any liability associated with
              material posted by third parties.
            </li>
            <li>
              <strong>Disclaimer of Endorsement:</strong> Reference to any
              products, services, hypertext links to third parties, or other
              information by trade name, trademark, supplier, or otherwise does
              not constitute or imply its endorsement, sponsorship, or
              recommendation by us. Nor is an endorsement of us implied by such
              links.
            </li>
            <li>
              <strong>Information Subject to Change:</strong> Any information on
              this website may include technical inaccuracies or typographical
              errors. Furthermore, the information may change from time to time
              without any notice.
            </li>
          </ul>
        </div>
      </section>
      <CustomerFeedbackSection />
    </>
  );
};

export default Disclaimer;
