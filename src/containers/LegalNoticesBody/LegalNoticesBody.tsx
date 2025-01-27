import { legalNoticesType } from "@/utilities/types";
import classes from "./LegalNoticesBody.module.css";

type LegalNoticesBodyTypes = {
  sectionsRef: any;
  privacyPolicy: legalNoticesType[];
};

const LegalNoticesBody = ({
  sectionsRef,
  privacyPolicy,
}: LegalNoticesBodyTypes) => {
  return (
    <section className={classes.container}>
      {privacyPolicy.map((data, i) => {
        return (
          <div
            className={classes.policy}
            key={i}
            id={data.title.toLowerCase()}
            ref={(el) => (sectionsRef.current[i] = el as any)}
          >
            <h4>{data.title}</h4>
            <div className={classes.paragraphs}>
              {data?.paragraph?.map((paragraph, j) => {
                return (
                  <div key={j}>
                    <p>{paragraph.text}</p>
                    <ul>
                      {paragraph.list?.map((paraList, k) => {
                        return <li key={k}>{paraList}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <ul className={classes.lists}>
              {data.list?.map((list, listId) => {
                return <li key={listId}>{list}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default LegalNoticesBody;
