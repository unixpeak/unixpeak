import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Page not found</p>
        <h1>We could not find that UNIXPEAK page</h1>
        <p className={styles.intro}>
          The page may have moved, or the tour link may no longer be available.
          You can return home, browse Program Tours, or contact the team for help.
        </p>
        <p className={styles.introTh}>
          ไม่พบหน้าที่คุณต้องการ อาจมีการย้ายหน้า หรือ URL ไม่ถูกต้อง
          สามารถกลับหน้าแรก ดูโปรแกรมทัวร์ หรือติดต่อทีมงานได้
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} href="/#top">
            Home
          </Link>
          <Link className={styles.secondaryButton} href="/program-tours">
            Program Tours
          </Link>
          <Link className={styles.textLink} href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
