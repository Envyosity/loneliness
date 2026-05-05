"use client";

import { useState } from "react";
import styles from "./MemoryFragments.module.css";

const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const memoryFragmentsData = [
  // Bleach
  {
    en: "Ichigo, I hate the rain. It rains in this world too. When your heart is in chaos, this sky becomes clouded. When you are sad, rain falls so easily. To stop that rain, I shall lend you any strength you need. If you trust in me, I won't let a single drop of rain fall from that sky.",
    pt: "Ichigo, você sabe como eu odeio a chuva? E chove neste mundo também. Se seu coração estiver perturbado, o céu ficará nublado; se você sofrer, choverá facilmente. Eu me pergunto se você pode entender o medo de ser atingido pela chuva neste mundo solitário. Se for para parar essa chuva, eu lhe emprestarei qualquer força. Se você tiver fé em mim, não deixarei cair nem uma gota de chuva deste céu.",
    image: "/images/animes/zangetsu.png",
  },

  // Cowboy Bebop
  {
    en: "Look at my eyes, Faye. One of them is a fake because I lost it in an accident. Since then, I've been seeing the past in one eye and the present in the other.",
    pt: "Olhe para os meus olhos, Faye. Um deles é falso porque o perdi em um acidente. Desde então, tenho visto o passado em um olho e o presente no outro.",
    image: "/images/animes/cowboy_bebop.gif",
  },

  // Vinland Saga
  {
    en: "You have no enemies. No one in the world is your enemy. There is no one you need to hurt.",
    pt: "Você não tem inimigos. Ninguém no mundo é seu inimigo. Não há ninguém que você precise machucar.",
    image: "/images/animes/vinland_saga.gif",
  },

  // Jujutsu Kaisen
  {
    en: "Well, I'm not trying to promote the ideal of saving the weak. It's just always gone against my nature to leave things alone when I feel like they're wrong; I've just never been able to fix that habit. The Goddess of Justice blinds her sight to maintain fairness under the law, and people turn a blind eye to all kinds of things to protect themselves. But I don't want to brush away the hands of people who cling to me for help. The least I can do is keep my eyes open.",
    pt: "Eu não tô querendo brandir este ideal de salvar os fracos. É que, desde sempre, vai contra a minha natureza deixar as coisas de lado quando vejo um erro. Eu nunca consegui me livrar deste hábito. A deusa da justiça cobre os olhos para manter a equidade da lei e as pessoas, a fim de se protegerem, fecham os olhos para várias coisas. Mesmo assim, eu não quero afastar as mãos que se agarram em mim por ajuda. Por isso eu gostaria de manter os olhos abertos.",
    image: "/images/animes/higuruma.gif",
  },

  // Bioshock
  {
    en: "We all make choices, but in the end, our choices make us.",
    pt: "Todos fazemos escolhas, mas no fim, nossas escolhas fazem a nós mesmos.",
    image: "/images/games/bioshock.gif",
  },

  // Fallout
  {
    en: "I survived because the fire inside me burned brighter than the fire around me.",
    pt: "Eu sobrevivi porque o fogo dentro de mim ardia mais forte que o fogo ao meu redor.",
    image: "/images/games/fallout.webp",
  },
  {
    en: "For many of us, the road is a difficult one. But, the path is always there for us to follow, no matter how many times we may fall.",
    pt: "Para muitos de nós, a estrada é difícil. Mas o caminho sempre está lá para seguirmos, não importa quantas vezes possamos cair.",
    image: "/images/games/fallout.webp",
  },
  {
    en: "The fire that had kept me alive was love. Their love. God's love. I will never be able to repay the debt I owe to them, but I must try.",
    pt: "O fogo que me manteve vivo foi o amor. O amor deles. O amor de Deus. Nunca serei capaz de pagar a dívida que tenho com eles, mas devo tentar.",
    image: "/images/games/fallout.webp",
  },
  {
    en: "In a world filled with misery and uncertainty, it is a great comfort to know that, in the end, there is light in the darkness.",
    pt: "Em um mundo cheio de miséria e incerteza, é um grande conforto saber que, no fim, há luz na escuridão.",
    image: "/images/games/fallout.webp",
  },

  // Persona
  {
    en: "Remember that you will die. And that is exactly why you must live.",
    pt: "Lembre-se de que você vai morrer. E é exatamente por isso que você deve viver.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "It's alright to be weak; what's wrong is to let that weakness stop you.",
    pt: "Tudo bem ser fraco; o errado é deixar que essa fraqueza te pare.",
    image: "/images/games/persona_4.gif",
  },
  {
    en: "If you want to change the world, you have to be the one to do it.",
    pt: "Se você quer mudar o mundo, você tem que ser aquele a fazer isso.",
    image: "/images/games/persona_5.gif",
  },
  {
    en: "What should I believe in to live on in this ever-changing world?",
    pt: "No que devo acreditar para continuar vivendo neste mundo em constante mudança?",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "The masks you wear become your face, and your memories erase.",
    pt: "A máscara que você usa se tornam seu rosto, e suas memórias se apagam.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "What matters after endings is how you left your mark.",
    pt: "O que importa depois dos finais é como você deixou sua marca.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "Only time will tell the magnitude of deeds.",
    pt: "Só o tempo dirá a magnitude dos atos.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "No one should need a permit to a way of life.",
    pt: "Ninguém deveria precisar de permissão para um estilo de vida.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "You’ve got a choice ahead: what would you do? Would you sit still, or would you pursue? Somebody’s gotta speak up—are you being quiet, or would you man up and face it, knowing it’ll cause a riot?",
    pt: "Você tem uma escolha pela frente: o que você faria? Ficaria parado ou iria atrás? Alguém tem que se manifestar — você vai ficar calado ou vai ser homem e encarar, sabendo que isso vai causar uma revolta?",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "The hardest thing is doing the right thing, but what happens when they each stand for their 'right' things?",
    pt: "A coisa mais difícil é fazer a coisa certa, mas o que acontece quando cada um defende as suas próprias 'coisas certas'?",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "Time is free to all and it’s priceless, but when it only hurts, it's lifeless.",
    pt: "O tempo é livre para todos e não tem preço, mas quando apenas machuca, é sem vida.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "Every time: goodbye to yesterday, greeted by today, smiling at tomorrow.",
    pt: "Toda vez: adeus ao ontem, saudado pelo hoje, sorrindo para o amanhã.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "Some of my regrets come haunting me to this day. The choice I made was wrong; how thoughtless to believe that I was alone. I learned it the hard way, but you don't have to go through what I've been through, because you're not alone in this frustration. So, come with me.",
    pt: "Alguns dos meus arrependimentos me assombram até hoje. A escolha que fiz foi errada; que insensatez acreditar que eu estava sozinho. Aprendi da pior maneira, mas você não precisa passar pelo que eu passei, porque você não está sozinho nessa frustração. Então, venha comigo.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "Fears cut deeper than gun wounds; they can put your fate and destiny into the tomb. The hardest thing to do is changing who you are now to who you wanna be soon. The first enemy is inside us already; whoever makes it out may be ready for the battle. It's pitiless, so you'd better be ready—not only for winning, but for losing, knowing it brings experience for a bigger win later.",
    pt: "Os medos cortam mais fundo que ferimentos de bala; eles podem colocar seu destino no túmulo. A coisa mais difícil de fazer é mudar quem você é agora para quem você quer ser em breve. O primeiro inimigo já está dentro de nós; quem conseguir sair pode estar pronto para a batalha. É impiedoso, então é melhor você estar pronto — não apenas para ganhar, mas para perder, sabendo que isso traz experiência para uma vitória maior depois.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "This ain't school days, it's real life. Realize that there ain't no textbook to your life; instead, you gotta write your own manuals.",
    pt: "Estes não são os dias de escola, é a vida real. Perceba que não há livro didático para a sua vida; em vez disso, você tem que escrever seus próprios manuais.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "Believing in me gave me possibilities. It's more like a gift that I don't deserve, so I gotta give back to you by all means.",
    pt: "Acreditar em mim me deu possibilidades. É mais como um dom que eu não mereço, então eu tenho que retribuir a você de todas as formas.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "Win or defeat, it's empty. Im gonna feel incomplete, feeling half-awake and half-asleep. I'd rather be asleep and dream of days of peace.",
    pt: "Vitória ou derrota, é vazio. Vou me sentir incompleto, meio acordado e meio dormindo. Preferia estar dormindo e sonhar com dias de paz.",
    image: "/images/games/persona_3.gif",
  },
  {
    en: "Life goes on, with or without you.",
    pt: "A vida continua, com ou sem você.",
    image: "/images/games/persona_4.gif",
  },
  {
    en: "Still, music keeps on turning me from the words that hurt my soul, removing doubts from my mind.",
    pt: "Ainda assim, a música continua me afastando das palavras que machucam minha alma, removendo as dúvidas da minha mente.",
    image: "/images/games/persona_4.gif",
  },
  {
    en: "It's a war out there every day; you can't hide from it. You gotta play by the rules, play it cool, and laugh in the face of the sad disgrace when your friends and foes look alike.",
    pt: "É uma guerra lá fora todos os dias; você não pode se esconder dela. Você tem que jogar pelas regras, manter a calma e rir na cara da triste desgraça quando seus amigos e inimigos se parecem.",
    image: "/images/games/persona_4.gif",
  },
  {
    en: "I wanna know—even if it may hurt, even if it brings pain within. My mind's determined: I need to know, even if it may kill, even if it may change me. I'm ready to face the truth.",
    pt: "Eu quero saber — mesmo que possa doer, mesmo que traga dor por dentro. Minha mente está determinada: eu preciso saber, mesmo que possa matar, mesmo que possa me mudar. Estou pronto para encarar a verdade.",
    image: "/images/games/persona_4.gif",
  },
  {
    en: "Such strong will and faith can turn around the fates; I'm never going to give up.",
    pt: "Tanta força de vontade e fé podem mudar os destinos; eu nunca vou desistir.",
    image: "/images/games/persona_4.gif",
  },
  {
    en: "You are stronger than all the things that made you weak.",
    pt: "Você é mais forte do que todas as coisas que te deixaram fraco.",
    image: "/images/games/persona_5.gif",
  },
  {
    en: "The toughest prison to break out of is in your mind.",
    pt: "A prisão mais difícil de escapar é a da sua mente.",
    image: "/images/games/persona_5.gif",
  },
  {
    en: "I can't tell you how to see me—just a cage of bones, there's nothing inside.",
    pt: "Não posso te dizer como me ver — apenas uma gaiola de ossos, não há nada dentro.",
    image: "/images/games/persona_5.gif",
  },
  {
    en: "Can't hold on, or life won't change.",
    pt: "Não posso me apegar, ou a vida não vai mudar.",
    image: "/images/games/persona_5.gif",
  },
  {
    en: "It's our turn to get back, to grab the future in which we fully believe. It's not given to us; it's earned.",
    pt: "É a nossa vez de revidar, de agarrar o futuro no qual acreditamos plenamente. Ele não nos é dado; é conquistado.",
    image: "/images/games/persona_5.gif",
  },
  {
    en: "Live your life, day by day, before it all gets taken away",
    pt: "Viva a sua vida, dia a dia, antes que tudo seja tirado",
    image: "/images/games/persona_Q2.gif",
  },
  // Metal Gear
  {
    en: "A strong man doesn't need to read the future. He makes his own.",
    pt: "Um homem forte não precisa ler o futuro. Ele faz o seu próprio.",
    image: "/images/games/metal_gear_solid.gif",
  },
  {
    en: "We are not tools of the government, or anyone else. Fighting was the only thing I was good at, but at least I always fought for what I believed in.",
    pt: "Não somos ferramentas do governo, ou de qualquer outra pessoa. Lutar foi a única coisa em que eu era bom, mas pelo menos sempre lutei por aquilo em que acreditava.",
    image: "/images/games/metal_gear_solid.gif",
  },
  {
    en: "We mustn't allow ourselves to be chained to fate, to be ruled by our genes. Humans can choose the type of life they want to live. What's important is that you choose life... and then live.",
    pt: "Não devemos nos permitir ser acorrentados ao destino, ser governados por nossos genes. Os humanos podem escolher o tipo de vida que querem viver. O importante é que você escolha a vida... e então viva.",
    image: "/images/games/metal_gear_solid.gif",
  },
  {
    en: "There's no such thing as a 'final' reality. Most of what we think we know is information we've received through various media... but memories... they aren't meant to be stored on digital media. They need to be passed on by the person themselves. That's what I live for. We need to pass the torch, and let our children read our messy and sad history by its light.",
    pt: "Não existe algo como uma realidade 'final'. A maior parte do que achamos que sabemos é informação que recebemos por vários meios de comunicação... mas memórias... elas não foram feitas para serem armazenadas em mídia digital. Elas precisam ser passadas pela própria pessoa. É para isso que eu vivo. Precisamos passar a tocha e deixar que nossos filhos leiam nossa história bagunçada e triste sob essa luz.",
    image: "/images/games/metal_gear_solid.gif",
  },
  {
    en: "Building the future and keeping the past alive are one and the same thing.",
    pt: "Construir o futuro e manter o passado vivo são a mesma coisa.",
    image: "/images/games/metal_gear_solid_2.gif",
  },
  {
    en: "Find something to believe in, and find it for yourself. When you do, pass it on to the future.",
    pt: "Encontre algo em que acreditar, e encontre por si mesmo. Quando o fizer, passe adiante para o futuro.",
    image: "/images/games/metal_gear_solid_2.gif",
  },
  {
    en: "Choose your own legacy. It's for you to decide. It's up to you.",
    pt: "Escolha seu próprio legado. É você quem decide. Só depende de você.",
    image: "/images/games/metal_gear_solid_2.gif",
  },
  {
    en: "It's not whether you're right or wrong, but how much faith you're willing to have, that decides the future.",
    pt: "Não se trata de estar certo ou errado, mas de quanta fé você está disposto a ter, é isso que decide o futuro.",
    image: "/images/games/metal_gear_solid_2.gif",
  },
  {
    en: "Never give up. Fight until the end. Always believe you will succeed, even when the odds are against you.",
    pt: "Nunca desista. Lute até o fim. Sempre acredite que você vai ter sucesso, mesmo quando as chances estiverem contra você.",
    image: "/images/games/metal_gear_solid_3.gif",
  },
  {
    en: "I've taught you all I can. The rest you'll need to learn on your own. In the end, you have to choose whether you're gonna live as a soldier, or just another man with a gun. There is nothing more for me to give you. All that's left for you to take is my life.",
    pt: "Eu te ensinei tudo o que podia. O resto você terá que aprender sozinho. No fim, você tem que escolher se vai viver como um soldado, ou apenas mais um homem com uma arma. Não há mais nada para eu te dar. Tudo que resta para você levar é a minha vida.",
    image: "/images/games/metal_gear_solid_3.gif",
  },
  {
    en: "We all must atone for our own sins. We must not pass them on to the next generation. We must not leave them for the future. That is our true mission.",
    pt: "Todos nós devemos expiar os nossos próprios pecados. Não devemos passá-los para a próxima geração. Não devemos deixá-los para o futuro. Essa é a nossa verdadeira missão.",
    image: "/images/games/metal_gear_solid_4.gif",
  },

  // Silent Hill
  {
    en: "There was a hole in here, now its gone.",
    pt: "Havia um buraco aqui, agora ele se foi.",
    image: "/images/games/silent_hill_2.gif",
  },
  {
    en: "I was weak. That's why I needed you... needed someone to punish me for my sins... but that's all over now.",
    pt: "Eu era fraco. É por isso que eu precisava de você... precisava de alguém para me punir pelos meus pecados... mas tudo isso acabou agora.",
    image: "/images/games/silent_hill_2.gif",
  },
  {
    en: "We were put here on this earth, put here to feel joy, not be blue",
    pt: "Fomos colocados aqui nesta terra, colocados aqui para sentir alegria, não para ficar tristes.",
    image: "/images/games/silent_hill_3.gif",
  },

  // Cod zombies
  {
    en: "The loneliness is only missed when I am alone",
    pt: "A solidão só faz falta quando estou sozinho.",
    image: "/images/games/cod_zombies.gif",
  },

  // Clair Obscur
  {
    en: "You know, hobbies don't always have to be useful. I'm enjoying the uselessness of today, and readying my usefulness for tomorrow.",
    pt: "Sabe, hobbies nem sempre precisam ser úteis. Estou aproveitando a inutilidade de hoje e preparando minha utilidade para o amanhã.",
    image: "/images/games/clair_obscur.jpg",
  },
];

export default function MemoryFragments() {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  return (
    <div className={styles["memory-container"]}>
      <header className={styles["memory-header"]}>
        <h2>Memory Fragments</h2>

        <button
          className={styles["translate-btn"]}
          onClick={toggleLanguage}
          aria-label="Alternar idioma"
        >
          <GlobeIcon />
          <span>{language === "en" ? "PT-BR" : "EN"}</span>
        </button>
      </header>

      <div className={styles["memory-content"]}>
        {memoryFragmentsData.map((fragment, index) => (
          <div
            key={index}
            className={styles["memory-item"]}
            style={
              { "--bg-image": `url(${fragment.image})` } as React.CSSProperties
            }
          >
            <p>&quot;{fragment[language]}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
