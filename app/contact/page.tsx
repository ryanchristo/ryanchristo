import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | contact",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"contact info"}</h1>
          <p>
            {
              "I support open-source and privacy-preserving technologies. I prefer to keep direct communication limited to the following options:"
            }
          </p>
          <ul>
            <li>
              {"Email"}
              {": ryan [at] ryanchristo.com"}
            </li>
            <li>
              {"Signal"}
              {": [ available upon request ]"}
            </li>
            <li>
              {"Telegram"}
              {": [ available upon request ]"}
            </li>
            <li>
              {"Phone"}
              {": [ only shared if necessary ]"}
            </li>
          </ul>
          <p>
            <i>
              {
                "For inquiries related to software research and development services, please use the contact information provided at "
              }
              <a
                href="https://chora.studio/solutions"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"chora.studio/solutions"}
              </a>
              {"."}
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
