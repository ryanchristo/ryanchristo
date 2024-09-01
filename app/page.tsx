import { Metadata } from "next";

import Background from "@components/Background";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen",
};

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.banner}>
        <div>
          <h1>{"ryan christoffersen"}</h1>
          <p>
            <i>
              {"the grass is always greener on the decentralized web"}
            </i>
          </p>
          <p>{"software research and development"}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
