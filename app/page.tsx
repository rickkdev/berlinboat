import Image from "next/image";
import { CalendarDays, ExternalLink, MapPin, MoveRight, Ticket } from "lucide-react";

const eventDays = [
  {
    name: "AI Day",
    date: "June 16, 2026",
    href: "https://luma.com/a5f93n7y",
    summary:
      "The opening day for builders, creators, and operators gathering on the Spree.",
    perks: [
      "Full-day boat access",
      "Futura Camp conference ticket day pass",
      "Evening BBQ at Futura Camp",
    ],
  },
  {
    name: "Protocol Day",
    date: "June 17, 2026",
    href: "https://luma.com/um189sij",
    summary:
      "A separate ticketed day focused on protocol conversations and deeper technical exchange.",
    perks: [
      "Full-day boat access",
      "Futura Camp conference ticket day pass",
      "Sunset Cruise",
    ],
  },
];

const programs = [
  {
    day: "June 16",
    name: "The AI Day",
    focus:
      "AI founders, researchers, agent ecosystems, and conference connectivity.",
    blocks: [
      {
        time: "10:30-13:00",
        route: "Funkhaus -> Jannowitzbrücke (DappCon) -> Funkhaus",
        title: "Conference Connector #1",
      },
      {
        time: "13:30-16:00",
        route: "Funkhaus -> Jannowitzbrücke (DappCon) -> Funkhaus",
        title: "Conference Connector #2",
      },
      {
        time: "16:30-19:00",
        route: "Funkhaus -> Jannowitzbrücke (DappCon) -> Funkhaus",
        title: "Conference Connector #3",
      },
    ],
    after: {
      title: "BBQ at Futura Camp",
      time: "From 19:00",
      items: [
        "Food & drinks",
        "Founder networking",
        "AI community meetup",
        "Sponsor activations",
        "Community gathering",
      ],
    },
  },
  {
    day: "June 17",
    name: "The Protocol Day",
    focus:
      "Ethereum, protocols, infrastructure, builders, and the flagship sunset experience.",
    blocks: [
      {
        time: "10:30-13:00",
        route: "Funkhaus -> Jannowitzbrücke (DappCon) -> Funkhaus",
        title: "Conference Connector #1",
      },
      {
        time: "13:30-16:00",
        route: "Funkhaus -> Jannowitzbrücke (DappCon) -> Funkhaus",
        title: "Conference Connector #2",
      },
      {
        time: "16:30-19:00",
        route: "Funkhaus -> Maybachufer (Blockspäti) -> Funkhaus",
        title: "Conference Connector #3",
      },
      {
        time: "19:30-22:00",
        route: "Berlin from the water",
        title: "The Sunset Cruise",
      },
    ],
  },
];

const impressions = [
  {
    src: "/impressions/boattrip-01.jpg",
    alt: "Guests gathered on a Berlin boat deck.",
  },
  {
    src: "/impressions/boattrip-02.jpg",
    alt: "People networking during a boat trip in Berlin.",
  },
  {
    src: "/impressions/boattrip-03.jpg",
    alt: "A boat event group on the water in Berlin.",
  },
  {
    src: "/impressions/boattrip-04.jpg",
    alt: "Berlin boat event guests seated and talking.",
  },
  {
    src: "/impressions/boattrip-05.jpg",
    alt: "A group of guests outdoors during a Berlin boat trip.",
  },
  {
    src: "/impressions/boattrip-06.jpg",
    alt: "People meeting on a boat deck during a Berlin event.",
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
      <section className="hero" aria-label="Berlin Boat event">
        <div className="berlin-scene" aria-hidden="true">
          <div className="scene-photo" />
        </div>
        <div className="hero__shade" />
        <nav className="topbar" aria-label="Event navigation">
          <a className="brand" href="#top" aria-label="Berlin Boat home">
            Berlin Boat
          </a>
          <a className="topbar__link" href="#tickets">
            Tickets
          </a>
        </nav>

        <div className="hero__content" id="top">
          <p className="eyebrow">
            <MapPin size={17} aria-hidden="true" />
            Berlin, on the Spree
          </p>
          <h1>Berlin Boat</h1>
          <p className="hero__copy">
            Two separate days, one floating Berlin gathering. Join AI Day on June
            16 or Protocol Day on June 17, with each ticket handled on Luma.
          </p>
          <div className="hero__actions" aria-label="Primary Luma ticket links">
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
          <p className="eyebrow">Impressions</p>
          <h2 id="impressions-title">The week feels different on the water.</h2>
        </div>
        <div className="impressions__carousel" aria-label="Boat impressions">
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
              Separate Luma tickets
            </p>
            <h2 id="tickets-title">Two days. One floating layer.</h2>
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
            <span>Berlin Blockchain Week, off the street grid.</span>
            <p>
              A floating social layer for conferences, founders, builders,
              researchers, and investors, with Berlin passing by from the water.
            </p>
          </article>
          <article className="statement">
            <span>Swap the ride across town for the Spree.</span>
            <p>
              Move between the week&apos;s conversations by boat, not another
              back seat.
            </p>
          </article>
          {eventDays.map((event, index) => (
            <article className="day-card" key={event.name}>
              <span className="day-card__number">0{index + 1}</span>
              <div>
                <p className="day-card__date">{event.date}</p>
                <h3>{event.name}</h3>
                <p>{event.summary}</p>
                <ul className="day-card__perks" aria-label={`${event.name} perks`}>
                  {event.perks.map((perk) => (
                    <li key={perk}>
                      {perk === "Futura Camp conference ticket day pass" ? (
                        <>
                          <a href="https://futura.camp/">Futura Camp</a>{" "}
                          conference ticket day pass
                        </>
                      ) : (
                        perk
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <a className="day-card__link" href={event.href}>
                Get this Luma ticket
                <ExternalLink size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
          <article className="statement statement--wide">
            <span>More on-board programming is planned.</span>
            <p>
              Expect founder challenges, floating coworking, product demos,
              minigames, and community sessions throughout the day. Check the
              Luma pages for the latest programming details.
            </p>
          </article>
        </div>

        <section className="programs" aria-labelledby="programs-title">
          <div className="programs__heading">
            <p className="eyebrow">Program</p>
            <h2 id="programs-title">Main routes, landmarks in between.</h2>
            <p>
              These are the core routes for each day. Between the conference
              connectors, the boat will also pass selected Berlin landmarks on
              the Spree.
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
