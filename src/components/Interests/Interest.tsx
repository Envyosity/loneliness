import GifCard from '../GifCard/GifCard';
import styles from './Interests.module.css';

const gifs = [
  { src: "/images/games/persona_3.gif", alt: "Persona3", quote: "Time delivers all equally to the same end." },
  { src: "/images/games/persona_4.gif", alt: "Persona4", quote: "Reach out to the truth." },
  { src: "/images/games/persona_5.gif", alt: "Persona5", quote: "Take your heart." },
  { src: "/images/games/resident_evil.gif", alt: "Resident Evil", quote: "September 30th, 1998. It's a day I'll never forget." },
  { src: "/images/games/metal_gear.gif", alt: "Metal Gear Solid", quote: "I'm no hero. Never was, never will be." },
  { src: "/images/games/destiny.jpg", alt: "Destiny", quote: "Eyes up, Guardian." },
  { src: "/images/animes/berserk.gif", alt: "Berserk", quote: "Struggle, endure, contend." },
  { src: "/images/animes/hellsing.gif", alt: "Hellsing", quote: "The bird of Hermes is my name..." },
  { src: "/images/games/bioshock.gif", alt: "Bioshock", quote: "A man chooses, a slave obeys." },
  { src: "/images/games/cod_zombies.gif", alt: "CodZombies", quote: "Fetch me their souls!" },
  { src: "/images/games/bloodborne.gif", alt: "Bloodborne", quote: "A hunter must hunt." },
  { src: "/images/games/fallout.gif", alt: "Fallout", quote: "I survived because the fire inside burned brighter than the fire around me." },
  { src: "/images/games/clair_obscur.jpg", alt: "Expedition", quote: "Tomorrow is a gift we must earn." },
  { src: "/images/animes/urahara.png", alt: "Urahara", quote: "There is nothing but fear reflected in your sword." },
  { src: "/images/animes/ulquiorra.jpg", alt: "Ulquiorra", quote: "What is a heart?" },
  { src: "/images/games/silent_hill_2.gif", alt: "SilentHill2", quote: "There was a hole here. It's gone now." },
  { src: "/images/games/silent_hill_3.gif", alt: "SilentHill3", quote: "Monsters? They looked like monsters to you?" },
  { src: "/images/animes/vinland_saga.gif", alt: "VinlandSaga", quote: "A true warrior needs no sword." },
  { src: "/images/animes/higuruma.gif", alt: "Higuruma", quote: "If evereyone told the truth, there would be no need for trials." }
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