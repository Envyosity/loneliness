import GifCard from '../GifCard/GifCard';
import styles from './Interests.module.css';

const gifs = [
  { src: "/images/games/persona_3.gif", alt: "Persona3", interest: "Persona 3" },
  { src: "/images/games/persona_4.gif", alt: "Persona4", interest: "Persona 4" },
  { src: "/images/games/persona_5.gif", alt: "Persona5", interest: "Persona 5" },
  { src: "/images/games/resident_evil.gif", alt: "Resident Evil", interest: "Resident Evil." },
  { src: "/images/games/metal_gear_solid.gif", alt: "Metal Gear Solid", interest: "Metal Gear Solid" },
  { src: "/images/games/metal_gear_solid_2.gif", alt: "Metal Gear Solid 2", interest: "Metal Gear Solid 2" },
  { src: "/images/games/metal_gear_solid_3.gif", alt: "Metal Gear Solid", interest: "Metal Gear Solid 3" },
  { src: "/images/games/metal_gear_solid_4.gif", alt: "Metal Gear Solid 4", interest: "Metal Gear Solid 4" },
  { src: "/images/games/metal_gear_rising.gif", alt: "Metal Gear Rising: Revengeance", interest: "Metal Gear Rising: Revengeance" },
  { src: "/images/games/destiny.jpg", alt: "Destiny", interest: "Destiny" },
  { src: "/images/animes/berserk.gif", alt: "Berserk", interest: "Berserk" },
  { src: "/images/animes/hellsing.gif", alt: "Hellsing", interest: "Hellsing" },
  { src: "/images/games/bioshock.gif", alt: "Bioshock", interest: "Bioshock" },
  { src: "/images/games/cod_zombies.gif", alt: "CodZombies", interest: "Call of Duty Zombies" },
  { src: "/images/games/bloodborne.gif", alt: "Bloodborne", interest: "Bloodborne" },
  { src: "/images/games/fallout.webp", alt: "Fallout", interest: "Fallout" },
  { src: "/images/games/clair_obscur.jpg", alt: "Expedition", interest: "Clair Obscur: Expedition 33" },
  { src: "/images/animes/urahara.png", alt: "Urahara", interest: "Bleach" },
  { src: "/images/animes/ulquiorra.jpg", alt: "Ulquiorra", interest: "Bleach" },
  { src: "/images/animes/zangetsu.png", alt: "Zangetsu", interest: "Bleach" },
  { src: "/images/games/silent_hill_2.gif", alt: "SilentHill2", interest: "Silent Hill" },
  { src: "/images/games/silent_hill_3.gif", alt: "SilentHill3", interest: "Silent Hill" },
  { src: "/images/animes/vinland_saga.gif", alt: "VinlandSaga", interest: "Vinland Saga" },
  { src: "/images/animes/cowboy_bebop.gif", alt: "CowboyBebop", interest: "Cowboy Bebop" },
  { src: "/images/animes/higuruma.gif", alt: "Higuruma", interest: "Jujutsu Kaisen" },
  { src: "/images/animes/fullmetal_alchemist_brotherhood.gif", alt: "fullmetal_alchemist_brotherhood", interest: "Fullmetal Alchemist Brotherhood" }  
];

export default function Interests() {
  return (
    <div className={styles.interests}>
      <div className={styles.masonryGrid}>
        {gifs.map((g, i) => <GifCard key={i} {...g} />)}
      </div>
    </div>
  );
}