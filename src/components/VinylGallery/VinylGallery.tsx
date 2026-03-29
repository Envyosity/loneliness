import Image from "next/image";
import styles from "./VinylGallery.module.css";

/**
 * Renders a gallery of vinyl record covers and external status widgets.
 * Uses Next.js Image component for optimized loading and layout stability.
 * * @returns {JSX.Element} The VinylGallery component.
 */
const vinyls = [
  { img: "/images/musics/powerwolf.jpg", title: "Powerwolf" },
  { img: "/images/musics/pierce_the_veil.jpg", title: "Pierce the Veil" },
  { img: "/images/musics/evanescence.jpg", title: "Evanescence" },
  { img: "/images/musics/linkin_park.jpg", title: "Linkin Park" },
  {
    img: "/images/musics/my_chemical_romance.jpg",
    title: "My Chemical Romance",
  },
  { img: "/images/musics/system_of_a_down.jpg", title: "System of a Down" },
  { img: "/images/musics/limp_bizkit.jpg", title: "Limp Bizkit" },
  { img: "/images/musics/elena_siegman.jpg", title: "Elena Siegman" },
  { img: "/images/musics/ozzy_osbourne.jpg", title: "Ozzy Osbourne" },
];

export default function VinylGallery() {

  return (
    <section>
      <h3 className="text-center">Currently listening to:</h3>
      <div className="flex-center">
          <a href={process.env.NEXT_PUBLIC_SPOTIFY_NOVATOREM} rel="ugc">
            <Image
              style={{ borderRadius: "12px" }}
              src={process.env.NEXT_PUBLIC_SPOTIFY_IMAGE || ""}
              alt="Spotify"
              width={400}
              height={100}
              unoptimized
            />
          </a>
      </div>

      <h3 className="text-center">Recent played games:</h3>
      <div
        className="flex-center"
        style={{ width: "100%", overflow: "hidden", padding: "10px 0" }}
      >
        <a
          href={process.env.NEXT_PUBLIC_EXOPHASE_PROFILE}
          rel="ugc"
        >
          <Image
            style={{
              borderRadius: "8px",
              width: "100%",
              height: "auto",
              display: "block",
            }}
            src={process.env.NEXT_PUBLIC_EXOPHASE_IMAGE || ""}
            alt="Exophase"
            width={400}
            height={100}
            unoptimized
          />
        </a>
      </div>

      <div className={styles.vinylGallery}>
        {vinyls.map((v, i) => (
          <div key={i} className={styles.vinyl}>
            <Image
              src={v.img}
              alt={v.title}
              width={200}
              height={200}
              className={styles.vinylImage}
            />
            <div className={styles.title}>{v.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
