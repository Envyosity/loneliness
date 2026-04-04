import Image from 'next/image';
import styles from './ProfileHeader.module.css';

export default function ProfileHeader() {
  return (
    <header className={styles.profileHeader}>
      <div className={styles.profilePic}>
        <Image 
          src="/images/pfp.jpg" 
          alt="𝓛𝓮𝓸𝓷𝓪𝓻𝓭𝓸's profile picture" 
          width={160}
          height={160}
          unoptimized
        />
      </div>
      <h1 className={styles.glitchName} data-text="𝓛𝓮𝓸𝓷𝓪𝓻𝓭𝓸">𝓛𝓮𝓸𝓷𝓪𝓻𝓭𝓸</h1>
      <p className={styles.quote}>&quot;We can only move forward, even in the darkest time&quot;</p>
    </header>
  );
}