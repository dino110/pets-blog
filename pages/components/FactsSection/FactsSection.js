import styles from "./FactsSection.module.scss";
import Image from "next/image";

export default function FactsSection() {
  return (
    <div className={styles.factsSection}>
      <p className={styles.factsTitle}> Daily pet facts - Love!</p>
      <div className={styles.petsContainer}>
        <div className={styles.petInfo}>
          <div className={styles.imageSection}>
            <Image
              src="/images/meow.jpg"
              alt="Cat"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 1220px) 444px, (min-width: 720px) calc(35.83vw + 14px), 345px"
            />
          </div>
          <div className={styles.textSection}>
            <h2 className={styles.petTitle}>The cat</h2>
            <p className={styles.petDescription}>
              Cats have been domesticated for around 4,000 years. While they
              were once valued for their hunting abilities, they are now valued
              for their companionship and loving behaviour. <br />
              <br />
              While not well known, the collective nouns used for cats and
              kittens are a clowder of cats and a kindle of kittens. <br />
              <br />
              Our domestic cats are known as little cats. They differ from large
              cats such as lions and tigers because they are naturally active at
              night and can purr. <br /> <br />
              Cats are now the most popular pet in the UK and in the US.
            </p>
          </div>
        </div>
        <div className={`${styles.petInfo} ${styles.petInfoReverse} `}>
          <div className={styles.textSection}>
            <h2 className={styles.petTitle}>The dog</h2>
            <p className={styles.petDescription}>
              Domestic dogs have been companions to people for more than 15,000
              years. There are more than 400 different breeds of dogs. PAWS or
              your local animal shelter has a wide variety of breeds available
              for adoption. The most popular types are the non-pedigree. They
              are extra special because they are one-of-a-kind! <br />
              <br />
              In general, small dogs live longer than large dogs. Small dogs
              such as terriers may live 20 years. Giant dogs like Great Danes
              may live eight years. The average lifespan for a mixed breed dog
              is 13 to 14 years. By making sure dogs have good food, regular
              veterinary care, shelter and a loving family, they will live
              longer, healthier lives.
            </p>
          </div>
          <div className={styles.imageSection}>
            <Image
              src="/images/woof.jpg"
              alt="Cat"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 1220px) 444px, (min-width: 720px) calc(35.83vw + 14px), 345px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
