import Image from "next/image";
import { CalendarDays, ExternalLink, MapPin, MoveRight, Ticket } from "lucide-react";

const eventDays = [
  {
    name: "ai day",
    title: "bertie the boat: ai day",
    date: "june 16, 2026",
    when: "10:30 til late",
    href: "https://luma.com/a5f93n7y",
    summary:
      "june 16 is the ai crowd. you board, you tell me what you are building, i make the introductions out loud somewhere in the middle of the river.",
    perks: [
      "full day on me",
      "futura camp day pass",
      "bbq after",
    ],
  },
  {
    name: "protocol day",
    title: "bertie the boat: protocol day",
    date: "june 17, 2026",
    when: "10:30 til 22:00",
    href: "https://luma.com/um189sij",
    summary:
      "june 17 is researchers, builders, infra people, and the people who fund them. the words get harder and the conversations get longer.",
    perks: [
      "full day on me",
      "futura camp day pass",
      "sunset cruise",
    ],
  },
];

const programs = [
  {
    day: "june 16",
    name: "bertie the boat: ai day",
    focus:
      "ai founders, researchers, agent ecosystems, and the person you needed to meet but would absolutely have missed.",
    blocks: [
      {
        time: "10:30-13:00",
        route: "funkhaus -> jannowitzbrücke (dappcon) -> funkhaus",
        title: "conference connector #1",
      },
      {
        time: "13:30-16:00",
        route: "funkhaus -> jannowitzbrücke (dappcon) -> funkhaus",
        title: "conference connector #2",
      },
      {
        time: "16:30-19:00",
        route: "funkhaus -> jannowitzbrücke (dappcon) -> funkhaus",
        title: "conference connector #3",
      },
    ],
    after: {
      title: "bbq at futura camp",
      time: "from 19:00",
      items: [
        "food and drinks",
        "founder problems solved on deck",
        "ai community meetup",
        "later there is worse than coffee",
        "community gathering",
      ],
    },
  },
  {
    day: "june 17",
    name: "bertie the boat: protocol day",
    focus:
      "researchers, builders, infra people, funders, and protocol discourse i was not built for and yet here i am.",
    blocks: [
      {
        time: "10:30-13:00",
        route: "funkhaus -> jannowitzbrücke (dappcon) -> funkhaus",
        title: "core dev at the bow",
      },
      {
        time: "13:30-16:00",
        route: "funkhaus -> jannowitzbrücke (dappcon) -> funkhaus",
        title: "conference connector #2",
      },
      {
        time: "16:30-19:00",
        route: "funkhaus -> jannowitzbrücke (dappcon) -> funkhaus",
        title: "conference connector #3",
      },
      {
        time: "19:15-22:00",
        route: "berlin from the water",
        title: "the sunset cruise",
      },
    ],
  },
];

const impressions = [
  {
    src: "/impressions/boattrip-01.jpg",
    alt: "guests gathered on a berlin boat deck.",
  },
  {
    src: "/impressions/boattrip-02.jpg",
    alt: "people networking during a boat trip in berlin.",
  },
  {
    src: "/impressions/boattrip-03.jpg",
    alt: "a boat event group on the water in berlin.",
  },
  {
    src: "/impressions/boattrip-04.jpg",
    alt: "berlin boat event guests seated and talking.",
  },
  {
    src: "/impressions/boattrip-05.jpg",
    alt: "a group of guests outdoors during a berlin boat trip.",
  },
  {
    src: "/impressions/boattrip-06.jpg",
    alt: "people meeting on a boat deck during a berlin event.",
  },
];

function RouteLabel({ route }: { route: string }) {
  const stops = route.split(" -> ");

  if (stops.length === 1) {
    return <span>{route}</span>;
  }

  return (
    <span className="route-label" aria-label={route}>
      {stops.map((stop, index) => (
        <span className="route-label__stop" key={`${stop}-${index}`}>
          {index > 0 ? (
            <MoveRight
              className="route-label__icon"
              size={16}
              strokeWidth={2.4}
              aria-hidden="true"
            />
          ) : null}
          <span>{stop}</span>
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" aria-label="bertie the boat event">
        <div className="berlin-scene" aria-hidden="true">
          <div className="scene-photo" />
        </div>
        <div className="hero__shade" />
        <nav className="topbar" aria-label="event navigation">
          <a className="brand" href="#top" aria-label="bertie the boat home">
            bertie
          </a>
          <div className="topbar__links">
            <a className="topbar__link" href="#tickets">
              tickets
            </a>
          </div>
        </nav>

        <div className="hero__content" id="top">
          <p className="eyebrow">
            <MapPin size={17} aria-hidden="true" />
            berlin, on the spree
          </p>
          <h1>bertie the boat</h1>
          <p className="hero__copy">
            hi. i am bertie. i am a boat. people keep asking me to explain
            myself and i will not be doing that.
          </p>
          <div className="hero__actions" aria-label="primary luma ticket links">
            {eventDays.map((event) => (
              <a className="button" href={event.href} key={event.name}>
                <Ticket size={18} aria-hidden="true" />
                {event.name}
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="impressions" aria-labelledby="impressions-title">
        <div className="impressions__heading">
          <p className="eyebrow">impressions</p>
          <h2 id="impressions-title">the venue is me. i am a boat.</h2>
        </div>
        <div className="impressions__carousel" aria-label="boat impressions">
          <div className="impressions__track">
            {[0, 1].map((group) => (
              <div className="impressions__group" key={group}>
                {impressions.map((image) => (
                  <figure className="impression" key={`${image.src}-${group}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1600}
                      height={1066}
                      sizes="(max-width: 760px) 82vw, 34vw"
                      loading="eager"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="days" id="tickets" aria-labelledby="tickets-title">
        <div className="days__intro">
          <div className="section-heading">
            <p className="eyebrow">
              <CalendarDays size={17} aria-hidden="true" />
              separate luma tickets
            </p>
            <h2 id="tickets-title">two events, one voice, no chill.</h2>
          </div>
          <div className="section-boat" aria-hidden="true">
            <svg viewBox="0 0 560 260" role="presentation">
              <path
                className="boat-line boat-line--soft"
                d="M42 198 H222 M260 198 H506"
              />
              <path
                className="boat-line boat-line--soft"
                d="M82 225 C158 235 308 236 462 224"
              />
              <path
                className="boat-line boat-line--soft"
                d="M138 244 C224 252 332 252 430 244"
              />
              <path
                className="boat-line"
                d="M98 128 H458 L496 166 C468 205 407 218 290 218 H166 C118 218 88 196 76 158 C72 143 78 128 98 128Z"
              />
              <path
                className="boat-line"
                d="M170 128 L194 62 H332 L354 128"
              />
              <path className="boat-line" d="M194 62 L352 62" />
              <path className="boat-line" d="M128 106 H408" />
              <path className="boat-line" d="M122 106 V80" />
              <path
                className="boat-line"
                d="M122 80 H168 C178 80 182 94 172 101 L122 101"
              />
              <path
                className="boat-line"
                d="M226 86 H262"
              />
              <path
                className="boat-line"
                d="M292 86 H330"
              />
              <path className="boat-line" d="M188 218 H388" />
            </svg>
          </div>
        </div>

        <div className="bento-grid">
          <article className="statement statement--primary">
            <span>bertie is a boat that posts like it has been online too long.</span>
            <p>
              funny, blunt, a little unhinged, occasionally profound by
              accident. never explains the joke. has main character energy.
            </p>
          </article>
          <article className="statement">
            <span>replace your uber with a boat.</span>
            <p>
              i have been saying this for days and nobody can prove me wrong.
            </p>
          </article>
          {eventDays.map((event, index) => (
            <article className="day-card" key={event.name}>
              <span className="day-card__number">0{index + 1}</span>
              <div>
                <p className="day-card__date">
                  {event.date}, {event.when}
                </p>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
                <ul className="day-card__perks" aria-label={`${event.name} perks`}>
                  {event.perks.map((perk) => (
                    <li key={perk}>
                      {perk === "futura camp day pass" ? (
                        <>
                          <a href="https://futura.camp/">futura camp</a> day pass
                        </>
                      ) : (
                        perk
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <a className="day-card__link" href={event.href}>
                get this luma ticket
                <ExternalLink size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
          <article className="statement statement--wide">
            <span>we have a lot planned. please be surprised.</span>
            <p>
              bertie carries you between the conferences of berlin blockchain
              week and introduces you to the people you would otherwise miss.
              you can also co-work on me, technically. we are in germany, so
              internet is not a given. prepare like you are on an ice train:
              self-host a 20b model, rock it offline, and act normal.
            </p>
          </article>
        </div>

        <section className="programs" aria-labelledby="programs-title">
          <div className="programs__heading">
            <p className="eyebrow">program</p>
            <h2 id="programs-title">i float between the conferences all day.</h2>
            <p>
              you board, you tell me what you are building, i make the
              introductions out loud somewhere in the middle of the river. one
              ticket, hop on any sailing that day.
            </p>
          </div>

          {programs.map((program) => (
            <article className="program" key={program.name}>
              <div className="program__intro">
                <p>{program.day}</p>
                <h3>{program.name}</h3>
                <span>{program.focus}</span>
              </div>
              <div className="program__timeline">
                {program.blocks.map((block) => (
                  <div className="program__stop" key={`${program.name}-${block.time}`}>
                    <p>{block.time}</p>
                    <h4>{block.title}</h4>
                    <RouteLabel route={block.route} />
                  </div>
                ))}
                {program.after ? (
                  <div className="program__stop program__stop--after">
                    <p>{program.after.time}</p>
                    <h4>{program.after.title}</h4>
                    <ul>
                      {program.after.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
