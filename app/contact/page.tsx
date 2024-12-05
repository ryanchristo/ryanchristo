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
          <p>{"The following is a list of ways we can stay in touch:"}</p>
          <ul>
            <li>
              {"Email"}
              {": ryan [at] ryanchristo.com"}
              <i>{" - always an option"}</i>
            </li>
            <li>
              {"Signal"}
              {": [ available upon request ]"}
              <i>{" - preferred if we have met"}</i>
            </li>
            <li>
              {"Telegram"}
              {": [ available upon request ]"}
              <i>{" - alternative to preferred"}</i>
            </li>
            <li>
              {"Phone"}
              {": [ I have a phone number ]"}
              <i>{" - only when required "}</i>
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
