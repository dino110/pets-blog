import styles from "./Footer.module.scss";
import Link from "next/link";
import Form from "./Form";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContext}>
        <div className={styles.footerTabs}>
          <div className={styles.column}>
            <p className={styles.columnTitle}>PET-FACTS.COM</p>
            <Link href="/" className={styles.columnLink}>
              About us
            </Link>
            <Link href="/" className={styles.columnLink}>
              Careers
            </Link>
            <Link href="/" className={styles.columnLink}>
              FAQ
            </Link>
          </div>
          <div className={styles.column}>
            <p className={styles.columnTitle}>OUR BRANDS</p>
            <Link href="/" className={styles.columnLink}>
              Supercoat
            </Link>
            <Link href="/" className={styles.columnLink}>
              Fancy Feast
            </Link>
            <Link href="/" className={styles.columnLink}>
              Pro Plan
            </Link>
            <Link href="/" className={styles.columnLink}>
              Beyond
            </Link>
          </div>
          <div className={styles.column}>
            <p className={styles.columnTitle}>CONTACT US</p>
            <Link href="/" className={styles.columnLink}>
              Contact us
            </Link>
            <Link href="/" className={styles.columnLink}>
              Terms & Conditions
            </Link>
            <Link href="/" className={styles.columnLink}>
              Privacy Policy
            </Link>
          </div>
        </div>
        <Form />
        <div className={styles.copyright}>
          <p>
            Copyright is a legal right, existing in many countries, that grants
            the creator of an original work exclusive rights to determine
            whether, and under what conditions, this original work may be used
            by others.
          </p>
        </div>
      </div>
    </footer>
  );
}
