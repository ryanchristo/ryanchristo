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
          <h1>{"public accounts"}</h1>
          <p>
            {
              'The following is a complete list of public accounts that are currently "active" but most of which are not being actively used.'
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
              <i>{" - for research, less social"}</i>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"youtube"}
              </a>
              <i>{" - for research, less social"}</i>
            </li>
            <li>
              <a
                href="https://bsky.app/profile/ryanchristo.bsky.social"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"bluesky"}
              </a>
              <i>{" - not active but exploring"}</i>
            </li>
            <li>
              <a
                href="https://substack.com/@ryanchristo"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"substack"}
              </a>
              <i>{" - not active but exploring"}</i>
            </li>
            <li>
              <a
                href="https://independent.academia.edu/ryanchristo_"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"academia"}
              </a>
              <i>{" - not active but exploring"}</i>
            </li>
            <li>
              <a
                href="https://regeneratecascadia.org/members/ryanchristo/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"cascadia"}
              </a>
              <i>{" - not active but exploring"}</i>
            </li>
            <li>
              <a
                href="https://mirror.xyz/ryanchristo.eth"
                rel="noopener noreferrer"
                target="_blank"
              >
                {"mirror"}
              </a>
              <i>{" - not active but exploring"}</i>
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
                "Public accounts are understood here as having a public profile, therefore this list does not include accounts without a public profile. This list is complete and I will continue updating it (including the removal of deactivated accounts). If you see a public account that is not on the list, then I am probably not the owner."
              }
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
