"use client";

import { useState } from "react";
import { Menu, X, Instagram, Facebook, ChevronDown } from "lucide-react";

const images = {
  logo: "/images/logoTtBeachClub.png",
  logoLight: "/images/logoTtBeachClubLight.png",
  hero: "/images/hero.png",
  about: "/images/about.png",
  goddess: "/images/ttIcon1.png",
  statue: "/images/ttIcon2.png",
  rituals: "/images/rituals.png",
  dining: "/images/eatAndDrink.png",
  wellness: "/images/wellness.png",
  private: "/images/privateEvents.png",
  public: "/images/publicEvents.png",
  bar: "/images/barStool.png",
  hammock: "/images/hammock.png",
  lounge: "/images/sofaLounge.png",
  plantation: "/images/plantation.png",
  westSandDayBed: "/images/westSandDayBed.png",
  eastSandDayBed: "/images/eastSandDayBed.png",
  westLagoonDayBed: "/images/westLagoonDayBed.png",
  eastLagoonDayBed: "/images/eastLagoonDayBed.png",
  cabana: "/images/Cabana.png",
  indoor: "images/indoor.png",
  deck: "/images/deck.png",
  sunsetDiningLounge: "/images/sunsetDiningLounge.png"
};

const experiences = [
  { title: "Rituals", text: "Choose the melody that reflects your spirit.", image: images.rituals },
  { title: "Eat & Drink", text: "A dining experience shaped by the land, the sea, and the rhythm of gentle breezes.", image: images.dining },
  { title: "Wellness", text: "Swarna Spa invites you to slow down, reconnect, and indulge in purposeful rest.", image: images.wellness },
  { title: "Private Events", text: "Celebrating every one of your journeys intimately.", image: images.private },
  { title: "Public Events", text: "Experience every nuance, every day.", image: images.public }
];

const spaces = [
  { title: "Bar Stool", text: "This is the beating heart of Tropical Temptation’s social spirit, a craft that holds the power to unite souls.", image: images.bar },
  { title: "Hammock", text: "Resting in a hammock with the open sea before them, free spirits find this enclave a soulful pause.", image: images.hammock },
  { title: "Sofa Lounge", text: "Free-spirited at heart yet drawn to comfort, shape an intimate space to share with your loved ones.", image: images.lounge },
  { title: "Plantation", text: "Set along the shoreline, accompanied by shade, palm trees, ocean breezes, and natural textures that define its character.", image: images.plantation },
  { title: "West Sand Day Bed", text: "The perfect choice for those who long for closeness with the open sea, and barefoot relaxation as the sun gently descends", image: images.westSandDayBed },
  { title: "East Sand Day Bed", text: "The best place to begin your day at a gentle pace, where the textures of the earth restore and rejuvenate you.", image: images.eastSandDayBed },
  { title: "West Lagoon Day Bed", text: "Water elements will always nourish your soul, let them touch your body and guide you into the slow rhythm of rest.", image: images.westLagoonDayBed },
  { title: "East Lagoon Day Bed", text: "Water carries intimacy in its freshness, offering the quiet reward of deep tranquility.", image: images.eastLagoonDayBed },
  { title: "VIP Cabana", text: "Though togetherness is at the heart of it all, comfort often blooms in moments of privacy and intimacy, making this the perfect choice for you.", image: images.cabana },
  { title: "VVIP Indoor", text: "Imagine a shelter that gathers memories with your loved ones, nurturing intimacy and showing that togetherness can be quiet and profound.", image: images.indoor },
  { title: "VVIP Deck", text: "Find a new perspective on repose as  you gaze across the ocean, letting vibrant energy surround you and your laughter melt into perfect comfort.", image: images.deck },
  { title: "Sunset Dining Lounge", text: "Savor each bite as its flavors deepen, growing richer as daylight softens and the first stars begin to appear.", image: images.sunsetDiningLounge }
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`brand ${light ? "brand-light" : ""}`} aria-label="Tropical Temptation home">
      <img className="logo" src={images.logo} alt="Logo Tropical Temptation Beach Club" />
    </a>
  );
}

function BrandLight({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`brand ${light ? "brand-light" : ""}`} aria-label="Tropical Temptation home">
      <img className="logo" src={images.logoLight} alt="Logo Light Tropical Temptation Beach Club" />
    </a>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [spaceIndex, setSpaceIndex] = useState(0);

  return (
    <main id="top">
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#spaces">Spaces</a><a href="#experiences">Experiences</a><a href="#experiences">Eat & Drink</a>
          <a href="#experiences">Events</a><a href="#offers">Offers & News</a>
          <a className="nav-button" href="#contact">Reserve</a><a className="nav-outline" href="#offers">Get Voucher</a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && <nav className="mobile-menu">
        {["Spaces", "Experiences", "Eat & Drink", "Events", "Offers & News"].map((item) =>
          <a key={item} href={item === "Spaces" ? "#spaces" : item.startsWith("Offers") ? "#offers" : "#experiences"} onClick={() => setMenuOpen(false)}>{item}</a>
        )}
        <a href="#contact" onClick={() => setMenuOpen(false)}>Reserve</a>
        <a href="#offers" onClick={() => setMenuOpen(false)}>Get Voucher</a>
      </nav>}

      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(24,24,21,.48), rgba(24,24,21,.2)), url(${images.hero})` }}>
        <div className="hero-copy">
          <p>Tropical Temptation Beach Club</p>
          <h1>Under The Same Sun</h1>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll to about"><ChevronDown size={21} /></a>
      </section>

      <section id="about" className="about-section">
        <div className="section-intro">
          <p className="eyebrow">About Tropical Temptation</p>
          <h2>More Than a Beach Club</h2>
        </div>
        <div className="about-grid">
          <img className="about-photo" src={images.about} alt="Beach club pool and sun loungers" />
          <p className="about-copy"><strong>Tropical Temptation</strong> honors intertwined lives, embodied in a gathering place in Melasti, an inviting beach club in Uluwatu where people meet beneath the same sun. In this Uluwatu beach club, a natural rhythm carries the day from calm light into sunset contemplation. Togetherness lingers long after the sun slips below the horizon.</p>
        </div>
        <div className="icons-grid">
          <img src={images.goddess} alt="Decorative Balinese statue" />
          <div className="icons-copy">
            <h2>The Icons</h2>
            <p><strong>Dewi Namora</strong> and <strong>Dewi Bhatari</strong> stand as guardians of beauty and balance, honoring the confidence that rises when we move in harmony. At this tropical beach club in Bali, overlooking an open, endless sea, the infinity pool becomes a meditation on impermanence and shared presence. Within this Uluwatu beach experience, design and emotion flow together, an atmosphere meant not only to be seen, but felt and returned to.</p>
          </div>
          <img src={images.statue} alt="Statue overlooking the ocean" />
        </div>
      </section>

      <section id="experiences" className="experiences-section patterned">
        <div className="experience-heading">
          <p className="eyebrow">Experiences</p>
          <h2>Feel The Thrill of Escape</h2>
        </div>
        <div className="experience-grid">
          {experiences.map((item, i) => (
            <article className={`experience-card experience-${i + 1}`} key={item.title} style={{ backgroundImage: `linear-gradient(0deg, rgba(30,20,16,.74), rgba(30,20,16,.08)), url(${item.image})` }}>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="spaces" className="spaces-section patterned-light">
        <div className="spaces-heading">
          <p className="eyebrow">Spaces</p>
          <h2>Find Your Spot</h2>
        </div>

        <div className="spaces-viewport">
          <div className="spaces-track">
            {spaces.map((item) => (
              <article className="space-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-controls" aria-label="Browse spaces">
          <button
            onClick={() => {
              document
                .querySelector(".spaces-viewport")
                ?.scrollBy({ left: -320, behavior: "smooth" });
            }}
            aria-label="Previous spaces"
          >
            ←
          </button>

          <span>Explore Spaces</span>

          <button
            onClick={() => {
              document
                .querySelector(".spaces-viewport")
                ?.scrollBy({ left: 320, behavior: "smooth" });
            }}
            aria-label="Next spaces"
          >
            →
          </button>
        </div>
      </section>

      <section id="offers" className="offers-section">
        <p className="eyebrow">Explore</p>
        <div className="offers-grid">
          <div><h2>Offers</h2><a className="light-button" href="#contact">Enjoy the temptation with exclusive offers</a></div>
          <span className="ampersand">&</span>
          <div><h2>News</h2><a className="light-button" href="#contact">Read the latest news of temptation</a></div>
        </div>
        <div className="footer-rule"><span /><span /></div>
        <footer id="contact" className="footer-grid">
          <div className="footer-about">
            <BrandLight light />
            <p>Tropical Temptation is a bohemian sanctuary by the sea. Not a place to visit, but a place to belong — alive through shared moments and returning souls.</p>
          </div>
          <div className="footer-info"><h3>Address</h3><a href="https://www.google.com/maps/search/?api=1&query=Tropical+Temptation+Beach+Club+Bali"target="_blank">Jl. Melasti Beach 88, Ungasan, Bali<p>Open Daily : 7 AM – 9 PM</p></div>
          <div className="footer-info"><h3>Contact</h3><a href="tel:+6281238868631">+62 812-3886-8631</a><a href="mailto:info@ttbeach.club">info@ttbeach.club</a></div>
          <div className="socials"><span>Find Us</span><a href="https://www.instagram.com/tropicaltemptation" aria-label="Instagram"><Instagram /></a><a href="https://www.facebook.com/ttbeachclub" aria-label="Facebook"><Facebook /></a></div>
        </footer>
        <div className="copyright">Copyright © 2026 Celia Maureen</div>
      </section>
    </main>
  );
}
