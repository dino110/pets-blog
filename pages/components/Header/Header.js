import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/images/headline_image.jpg"
        alt="Yellow cat"
        fill
        priority={true}
        style={{ objectFit: "cover" }}
        sizes="(max-width: 700px) 100vw, (max-width: 1130px) 50vw, 33vw"
      />
    </header>
  );
}
