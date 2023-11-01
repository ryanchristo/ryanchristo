import { Metadata } from "next";
import Image from "next/image";

import profile1 from "../../public/images/profile_1.jpg";
import profile2 from "../../public/images/profile_2.jpg";
import profile3 from "../../public/images/profile_3.jpg";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | about",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"about"}</h1>
          <p>{"I was born and raised in the Pacific Northwest."}</p>
          <p>
            {
              "I studied liberal arts in college with a focus on classical languages, critical and cultural theory, and film studies."
            }
          </p>
          <p>
            {
              "I bounced around jobs after college but eventually found myself pursuing a career as a software developer within the web3 ecosystem."
            }
          </p>
          <div className={styles.item}>
            <h2>{"2018 - present"}</h2>
            <Image alt="ryan christoffersen" src={profile3} />
            <p>
              {
                "researching commons governance, ecological regeneration, and distributed ledger technology, also learning about small-scale farming"
              }
            </p>
            <p>
              {
                "software developer, product manager, and protocol researcher for teams specializing in tools and infrastructure for the web3 ecosystem"
              }
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"2014 - 2018"}</h2>
            <Image alt="ryan christoffersen" src={profile2} />
            <p>
              {
                "website developer, network administrator, and full stack engineer for small businesses, early startups, and non-profit organizations"
              }
            </p>
            <p>
              {
                "technical support and account manager at an AI software company and quality assurance specialist at a solar panel manufacturing company"
              }
            </p>
          </div>
          <div className={styles.item}>
            <h2>{"2010 - 2014"}</h2>
            <Image alt="ryan christoffersen" src={profile1} />
            <p>
              {
                "produced documentary films, promotional videos, and experimental short films exploring poverty, microfinance, and cinematography"
              }
            </p>
            <p>
              {
                "earned a BA in classical languages and literature, minors in classical greek, english literature, and film studies, also earned a CELTA certificate"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
