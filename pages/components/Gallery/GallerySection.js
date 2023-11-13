import styles from "./GallerySection.module.scss";
import Image from "next/image";

export default function GallerySection() {
  const images = require.context("../../../public/images/gallery/cats", true);
  const imageList = images.keys().map((image) => images(image));
  return (
    <div className={styles.galleryContainer}>
      {imageList.map((image, index) => (
        <div className={styles.galleryImage} key={image.default + index}>
          <Image
            src={image.default}
            alt={`image-${index}`}
            style={{ objectFit: "cover" }}
            fill={true}
            sizes="(min-width: 720px) 255px, 157px"
          />
        </div>
      ))}
    </div>
  );
}
