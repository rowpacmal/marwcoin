import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const threshold = 160;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  }, []);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  const onScroll = (style) => {
    return scrollPosition > threshold ? ` ${style}` : '';
  };

  const onActive = (isActive) => {
    return styles.link + (isActive ? ` ${styles.active}` : '');
  };

  return (
    <header className={styles.header + onScroll(styles.scroll)}>
      <div className={styles.wrapper}>
        <Link
          to='/'
          className={styles.logo + onScroll(styles.hide)}
        >
          <img
            src='./src/assets/Logo3.png'
            alt='Marw Logo'
            width='2408'
            height='1208'
          />
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={showMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
          <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>
            <li className={styles.li}>
              <NavLink
                to='/'
                className={({ isActive }) => onActive(isActive)}
              >
                Home
              </NavLink>
            </li>

            <li className={styles.li}>
              <NavLink
                to='/transaction'
                className={({ isActive }) => onActive(isActive)}
              >
                Transaction
              </NavLink>
            </li>

            <li className={styles.li}>
              <NavLink
                to='/blocks'
                className={({ isActive }) => onActive(isActive)}
              >
                Blocks
              </NavLink>
            </li>

            <li className={styles.li}>
              <NavLink
                to='/about'
                className={({ isActive }) => onActive(isActive)}
              >
                About
              </NavLink>
            </li>

            <li className={styles.li}>
              <NavLink
                to='/contact'
                className={({ isActive }) => onActive(isActive)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
