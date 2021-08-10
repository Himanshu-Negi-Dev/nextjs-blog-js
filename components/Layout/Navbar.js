import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <header className={styles.header_class}>
        <nav className={styles.nav_class}>
          <div className={styles.nav_logo}>
            <h2>Logo</h2>
          </div>
          <div className={styles.nav_links}>
            <ul>
              <li>
                <Link href="/">Posts</Link>
              </li>
              <li>
                <Link href="/createPost">Create Post</Link>
              </li>
              <li>
                <Link href="/service">Service</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
