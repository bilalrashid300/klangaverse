/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
// import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Oswald500 } from "components/general/Texts";
import { ReactComponent as ConnectIcon } from "assets/icons/connect-icon.svg";
import LanguageSelect from "components/general/LanguageSelect";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, toggle }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={classNames({
        flex: i.is_button,
        "align-center": i.is_button,
        "justify-center": i.is_button,
      })}
    >
      <Link
        to={i.link}
        onClick={toggle}
        className={classNames({ mobile_nav_list_button: i.is_button })}
      >
        {i.icon && i.icon}
        <Oswald500 size="32px">{i.name}</Oswald500>
      </Link>
    </motion.li>
  );
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, open }) => (
  <button
    onClick={toggle}
    type="button"
    className={open ? "nav-button-open" : "nav-button-closed"}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const items = [
  { name: "About Us", link: "/about" },
  { name: "Tokenomics", link: "/tokenomics" },
  { name: "Whitepaper", link: "/" },
  { name: "Sound Map", link: "/soundmap" },
  { name: "Audit", link: "/" },
  { name: "FAQ", link: "/faq" },
  "language",
  { name: "Join Presale", link: "/register", is_button: true },
  { name: "Connect Wallet", link: "/", is_button: true, icon: <ConnectIcon /> },
];
export const Navigation = ({ toggle, isOpen }) => (
  <div className={`mobile_nav_links_wrapper ${isOpen ? "open" : ""}`}>
    <motion.ul
      className="mobile_nav_links"
      variants={{
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
      }}
    >
      {items.map((i, _) =>
        i === "language" ? (
          <React.Fragment key={_}>
            {isOpen ? <LanguageSelect /> : null}
          </React.Fragment>
        ) : (
          <MenuItem i={i} key={_} toggle={toggle} />
        )
      )}
    </motion.ul>
    {/* {} */}
  </div>
);

const sidebar = {
  open: (height = window.innerHeight) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = 4000;

  return (
    <motion.div
      className="mobile_nav relative"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className={`background ${
          isOpen ? "background-active" : "background-inactive"
        }`}
        variants={sidebar}
      />
      <Navigation toggle={() => toggleOpen()} isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} open={isOpen} />
    </motion.div>
  );
};
