import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | contact",
};

const TextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"text"}</h1>
          <p>
            {
              "I've been writing technical documentation, product and strategy updates, and other work-related documents but I'm now looking for ways to expand my thinking and writing. I'm exporing the following topics:"
            }
          </p>
          <ul>
            <li>
              {
                "rights of nature, ecological institutions, and interspecies mutualism"
              }
            </li>
            <li>
              {
                "dark forest theory in relation to privacy, intellegence, and the internet"
              }
            </li>
          </ul>
          <p>
            {
              "If you're interested in exploring any of the above topics alongside me, feel free to reach out. I'm also open to receive recommendations and to connect with anyone who can assist me with editing and reviews."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
