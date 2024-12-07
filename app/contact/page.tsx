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
        <h1>{"contact info"}</h1>
          <p>
            {
              "I try to take a minimalist approach to social media and I usually prefer to stay connected with friends using one of the following options:"
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
              {": [ only when necessary ]"}
            </li>
          </ul>
          <p>
            {
              'The following is a complete list of active public accounts. The accounts listed here are "public" in the sense that they are intended to be public or they can be easily discovered by someone browsing the world wide web:'
            }
          </p>
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
              <i>{" - for work and resume"}</i>
            </li>
            <li>
              <a
                href="https://twitter.com/ryanchristo_"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"twitter"}
              </a>
              <i>{" - for research and content"}</i>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"youtube"}
              </a>
              <i>{" - for research and content"}</i>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/ryanchristo.bsky.social"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"bluesky"}
              </a>
              <i>{" - passively exploring content"}</i>
            </li>
            <li>
              <a
                href="https://substack.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"substack"}
              </a>
              <i>{" - passively exploring content"}</i>
            </li>
            <li>
              <a
                href="https://independent.academia.edu/ryanchristo_"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"academia"}
              </a>
              <i>{" - passively exploring content"}</i>
            </li>
            <li>
              <a
                href="https://regeneratecascadia.org/members/ryanchristo/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"cascadia"}
              </a>
              <i>{" - passively exploring content"}</i>
            </li>
            <li>
              <a
                href="https://mirror.xyz/ryanchristo.eth"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"mirror"}
              </a>
              <i>{" - passively exploring content"}</i>
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
                "And no, I do not have an account on Facebook, Instagram, or TikTok. This is a complete list. If you see an account impersonating me, please let me know so that I can celebrate my celebrity status and take action if necessary."
              }
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
