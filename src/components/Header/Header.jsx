import { NavLink, useNavigate } from "react-router-dom";
import { navItems } from "./navList";
import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/header/logo.svg?react";
import s from "./Header.module.scss";
import cn from "classnames";

export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const burgerRef = useRef(null);
  const navRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (navRef.current &&
          burgerRef.current &&
          !navRef.current.contains(e.target)) ||
        burgerRef.current.contains(e.target)
      ) {
        setOpenBurger(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.addEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleLinkActive = ({ isActive }) =>
    `${s.navLink} ${isActive ? s.activeLink : ""}`;

  return (
    <header className={cn(s.Header, isHomePage && scrolled && s.mode)}>
      <div className={cn(s.inner, !isHomePage && s.rounded)}>
        <div className={s.logoWrapper}>
          <Logo className={s.logo} onClick={() => navigate("/")} />
        </div>
        <nav className={cn(s.nav, openBurger ? s.nav_opened : "")} ref={navRef}>
          <div className={s.burgerLogoWrapper}>
            <Logo className={`${s.logo} ${s.burgerLogo}`} />
          </div>

          {navItems.main.map(({ name, id, href }) => (
            <NavLink
              key={id}
              to={href}
              className={handleLinkActive}
              onClick={() => setOpenBurger(false)}
            >
              {name}
            </NavLink>
          ))}

          <div className={s.entLink}>
            <span className={s.navLink}>Развлечения</span>
            <div className={s.entSubmenuWrapper}>
              <div className={s.entSubmenu}>
                {navItems.addit.map(({ name, id, href }) => (
                  <NavLink
                    key={id}
                    to={href}
                    className={handleLinkActive}
                    onClick={() => setOpenBurger(false)}
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div
          ref={burgerRef}
          className={cn(s.burger, openBurger ? s.burger_open : "")}
          onClick={() => setOpenBurger((prev) => !prev)}
        >
          <span
            className={cn(s.burgerLine, !isHomePage && s.darkBurger)}
          ></span>
        </div>
      </div>
    </header>
  );
};
