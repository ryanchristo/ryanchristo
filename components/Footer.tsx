"use client";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a
            href="https://github.com/ryanchristo"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"github"}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ryan-christoffersen-9b13282b4/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"linkedin"}
          </a>
        </li>
        {/*<li>*/}
        {/*  <a*/}
        {/*    href="https://medium.com/@ryanchristo"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    target="_blank"*/}
        {/*  >*/}
        {/*    {"medium"}*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a*/}
        {/*    href="https://mirror.xyz/ryanchristo.eth"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    target="_blank"*/}
        {/*  >*/}
        {/*    {"mirror"}*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a*/}
        {/*    href="https://substack.com/@ryanchristo"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    target="_blank"*/}
        {/*  >*/}
        {/*    {"substack"}*/}
        {/*  </a>*/}
        {/*</li>*/}
        <li>
          <a
            href="https://twitter.com/ryanchristo_"
            rel="noopener noreferrer"
            target="_blank"
          >
            {"twitter"}
          </a>
        </li>
        {/*<li>*/}
        {/*  <a*/}
        {/*    href="https://www.youtube.com/@ryanchristo"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    target="_blank"*/}
        {/*  >*/}
        {/*    {"youtube"}*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
};

export default Footer;
