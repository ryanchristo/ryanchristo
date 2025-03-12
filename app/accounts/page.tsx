import { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ryan christoffersen | accounts",
};

const AccountsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>{"accounts"}</h1>
          <p>
            {
              "For social media and other public platforms, the following is a complete list of accounts that I currently own or operate:"
            }
          </p>
          <p>{"social/writing/research accounts"}</p>
          <ul>
            <li>
              <a
                href="https://bsky.app/profile/ryanchristo.bsky.social"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"bluesky"}
              </a>
              <i>{" - passively exploring"}</i>
            </li>
            <li>
              <a
                href="https://substack.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"substack"}
              </a>
              <i>{" - passively exploring"}</i>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"youtube"}
              </a>
              <i>{" - passively exploring"}</i>
            </li>
            <li>
              <a
                href="https://independent.academia.edu/ryanchristo_"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"academia"}
              </a>
              <i>{" - passively exploring"}</i>
            </li>
            <li>
              <a
                href="https://mirror.xyz/ryanchristo.eth"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"mirror"}
              </a>
              <i>{" - passively exploring"}</i>
            </li>
          </ul>
          <p>{"software/professional accounts"}</p>
          <ul>
            <li>
              <a
                href="https://github.com/ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"github"}
              </a>
              <i>{" - for software projects"}</i>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/~ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"npmjs"}
              </a>
              <i>{" - for software projects"}</i>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ryanchristo-"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"linkedin"}
              </a>
              <i>{" - for work experience"}</i>
            </li>
            <li>
              <a
                href="https://hackmd.io/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"hackmd"}
              </a>
              <i>{" - historically for work"}</i>
            </li>
            <li>
              <a
                href="https://medium.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"medium"}
              </a>
              <i>{" - historically for work"}</i>
            </li>
          </ul>
          <p>
            <i>
              {
                "This list does not include messaging platforms (e.g. Signal, Telegram, Discord) or project-specific forums for technical and governance discussions."
              }
            </i>
          </p>
          <p>
            <i>
              {
                "I currently do not have an account on X, Instagram, Facebook, TikTok, etc. If you see a suspicious account that is not on the list, please "
              }
              <a href="/contact">{"let me know"}</a>
              {"."}
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
