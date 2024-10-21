interface InsuranceCoverageSectionProps {
  title: string;
  coveredTitle: string;
  coveredItems: string[];
  notCoveredTitle?: string;
  notCoveredItems?: string[];
  additionalInfo?: string;
}

export const InsuranceCoverageSection: React.FC<
  InsuranceCoverageSectionProps
> = ({
  title,
  coveredTitle,
  coveredItems,
  notCoveredTitle,
  notCoveredItems,
  additionalInfo,
}) => {
  return (
    <section className="busins-sec3">
      <div className="row twobx">
        <div className="cortbox wow fadeInLeft">
          <div className="cntrr">
            <h2 className="redd">What&#39;s covered?</h2>
            <p className="grayy bldd">{coveredTitle}</p>
            <ul>
              {coveredItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {additionalInfo && <p className="grayy">{additionalInfo}</p>}
          </div>
        </div>
        {notCoveredTitle && notCoveredItems && (
          <div className="cortbox wrongbox wow fadeInRight">
            <div className="cntrr">
              <h2 className="redd">What&#39;s Not covered?</h2>
              <ul>
                {notCoveredItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
