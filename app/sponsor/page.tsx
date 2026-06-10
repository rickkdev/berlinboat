import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  ArrowLeft,
  BadgeEuro,
  CalendarDays,
  Check,
  Mail,
  Ship,
} from "lucide-react";

export const metadata: Metadata = {
  title: "sponsor bertie | bertie the boat",
  description:
    "Sponsor bertie the boat across both event days in Berlin. One tier, two days, EUR 1,000.",
};

const sponsorGets = [
  "presence across both boat days: ai day on june 16 and protocol day on june 17",
  "4 free tickets for your team or guests",
  "a 30-45 minute session on the boat",
  "your name or logo on the sponsor page and event materials where it fits",
  "a simple shoutout from bertie before and during the event",
  "room to bring the right people aboard without turning the boat into a booth",
];

const whyItWorks = [
  "two days of high-signal builders, researchers, founders, funders, and protocol people",
  "small enough that people actually talk to each other",
  "we float between the conferences instead of fighting for hallway space",
];

const boatImages = [
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

export default function SponsorPage() {
  return (
    <main className="sponsor-page">
      <section className="sponsor-hero" aria-label="sponsor bertie the boat">
        <div className="sponsor-hero__photo" aria-hidden="true" />
        <div className="sponsor-hero__shade" />
        <nav className="topbar sponsor-topbar" aria-label="sponsor navigation">
          <Link className="brand" href="/" aria-label="bertie the boat home">
            bertie
          </Link>
          <Link className="topbar__link" href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            home
          </Link>
        </nav>

        <div className="sponsor-hero__content">
          <p className="eyebrow">
            <Ship size={17} aria-hidden="true" />
            sponsor the boat
          </p>
          <h1>sponsor bertie</h1>
          <p className="sponsor-hero__copy">
            tl;dr: bertie is a two-day boat during berlin blockchain week. ai
            people on june 16. protocol people on june 17. you sponsor both
            days for EUR 1,000, get 4 free tickets, and run one 30-45 minute
            session on the boat. that is the tier.
          </p>
        </div>
      </section>

      <section className="sponsor-brief" aria-labelledby="sponsor-brief-title">
        <div className="sponsor-brief__intro">
          <p className="eyebrow">
            <Anchor size={17} aria-hidden="true" />
            what this is
          </p>
          <h2 id="sponsor-brief-title">one boat, two days, useful people.</h2>
          <p>
            bertie moves people between the berlin blockchain week orbit and
            gives them a place to meet without pretending this is a conference
            stage. it is transport, networking, bbq, sunset cruise, and a
            floating excuse for better conversations.
          </p>
        </div>

        <article className="sponsor-tier" aria-label="sponsor tier">
          <div className="sponsor-tier__top">
            <p>the only tier</p>
            <BadgeEuro size={30} aria-hidden="true" />
          </div>
          <div>
            <h3>EUR 1,000</h3>
            <span>
              covers both days, 4 tickets, and one 30-45 minute session. no
              bronze. no silver. no yacht math.
            </span>
          </div>
          <div className="sponsor-tier__actions">
            <a className="sponsor-tier__cta" href="https://t.me/rickkdev">
              telegram @rickkdev
            </a>
            <a className="sponsor-tier__mail" href="mailto:mail@rick.build">
              <Mail size={17} aria-hidden="true" />
              mail@rick.build
            </a>
          </div>
        </article>
      </section>

      <section className="sponsor-gallery" aria-labelledby="sponsor-gallery-title">
        <div className="sponsor-gallery__heading">
          <p className="eyebrow">boat proof</p>
          <h2 id="sponsor-gallery-title">this is the vibe sponsors get.</h2>
        </div>
        <div className="sponsor-gallery__grid">
          {boatImages.map((image) => (
            <figure className="sponsor-gallery__image" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={1066}
                sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 22vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="sponsor-details" aria-label="sponsor details">
        <article className="sponsor-panel">
          <p className="eyebrow">
            <CalendarDays size={17} aria-hidden="true" />
            what you get
          </p>
          <ul>
            {sponsorGets.map((item) => (
              <li key={item}>
                <Check size={17} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="sponsor-panel sponsor-panel--quiet">
          <p className="eyebrow">why sponsor</p>
          <ul>
            {whyItWorks.map((item) => (
              <li key={item}>
                <Check size={17} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
