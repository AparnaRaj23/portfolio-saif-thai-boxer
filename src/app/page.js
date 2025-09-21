"use client";
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';




export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile nav
  const [isScrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > 50; 
      setScrolled(isPastThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const galleryImages = [
    { src: "https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0173.jpg", alt: "Muay Thai training in action" },
    { src: "https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0173.jpg", alt: "Student practicing a kick" },
    { src: "https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0173.jpg", alt: "Group class photo" },
    { src: "https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0173.jpg", alt: "Trainer with student" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,      // two images visible on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,   // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo-container">
            <a href="/">
              <Image
                src="https://as1.ftcdn.net/v2/jpg/05/75/47/40/1000_F_575474031_FMbGVNgXPflKAaIlH3GyFpO90FpXwIqC.jpg"
                alt="Muay Thai Training Logo"
                width={50}
                height={50}
              />
            </a>
          </div>

          {/* Navigation Links with conditional class */}
          <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={() => setIsNavOpen(false)}>About</a>
            <a href="#achievements" onClick={() => setIsNavOpen(false)}>Achievements</a>
            <a href="#services" onClick={() => setIsNavOpen(false)}>Services</a>
            <a href="#gallery" onClick={() => setIsNavOpen(false)}>Gallery</a>
            <a href="#contact" onClick={() => setIsNavOpen(false)}>Contact</a>
          </nav>

          {/* Hamburger Menu Icon */}
          <button
  className={`hamburger ${isNavOpen ? 'open' : ''}`}
  onClick={toggleNav}
  aria-label="Toggle navigation"
>
  <span className="bar"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h1>Muay Thai: The Art of Eight Limbs</h1>
            <p className="red-text">Experience authentic training with a world-class instructor.</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2 className="section-title">About the Trainer</h2>
          <div className="container">
            <div className="about-content">
              <div className="trainer-photo">
                <Image
                  src="/images/saif-trainer.jpeg"
                  alt="Trainer Saif"
                  width={400}
                  height={500}
                />
              </div>
              <div className="about-text">
  <p>
    I am Shaik Shafath Ali, widely known as Coach Saif Thai Boxer, an internationally certified Muay Thai trainer with over a decade of experience in the art of eight limbs. My journey in Muay Thai began more than 12 years ago, driven by passion, discipline, and the pursuit of excellence. From a dedicated athlete to a professional coach, I have committed my life to spreading authentic Muay Thai in India and beyond.
  </p>

  <p>
    I hold the prestigious Khan 11 Red Mongkhon (Master’s Degree in Muay Thai)—achieved by participating according to the highest standard set by KRU Muay Thai Association, registered under the Office National Culture Commission, Ministry of Culture, Thailand. This recognizes my skill, knowledge, and dedication to the sport. Throughout my competitive career, I became a five-time Muay Thai National Champion (2015–2019), proudly representing at the highest levels of competition.
  </p>

  <p>
    Today, as the Head Coach of Iconic Fitness Club and founder of my own Muay Thai programs, I have trained hundreds of students, fighters, and fitness enthusiasts. My training system blends traditional Muay Thai techniques with modern fitness methods, ensuring that every student not only learns to fight but also builds strength, confidence, and discipline.
  </p>

  <p>
    My work and teaching have earned me the trust and respect of the community. On Google, my gym—Coach Saif Thai Boxer—holds a 5-star rating with over 230 reviews, a true reflection of the quality, dedication, and results I deliver to every student.
  </p>
</div>

            </div>
          </div>
        </section>

              <section id="achievements" className="achievements-section">
  <h2 className="achievements-title">Achievements</h2>
  <div className="achievements-content">
    <h2 className="achievement-item">🏆 5-time Muay Thai National Champion (2015–2019)</h2>
    <h2 className="achievement-item">🎓 Khan 11 Red Mongkhon (Master’s Degree in Muay Thai)</h2>
    <h2 className="achievement-item">🌍 Internationally certified Muay Thai trainer</h2>
    <h2 className="achievement-item">💪 Head Coach at Iconic Fitness Club</h2>
    <h2 className="achievement-item">⭐ Over 230 5-star reviews on Google</h2>
    <h2 className="achievement-item">🥇 Trained hundreds of students and fighters</h2>
  </div>
</section>




        {/* Services Section */}
        <section id="services" className="section">
          <h2 className="section-title">Services</h2>
          <div className="container">
            <div className="services-grid">
              <div className="service-card">
                <h3>Group Classes</h3>
                Dynamic and high-energy classes for all skill levels. Learn
                fundamentals, combinations, and conditioning.
              </div>
              <div className="service-card">
                <h3>Private Training</h3>
                Personalized one-on-one sessions to focus on your specific needs
                and accelerate your progress.
              </div>
              <div className="service-card">
                <h3>Sparring Sessions</h3>
                Safe and controlled sparring to apply your techniques in a
                realistic setting.
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section as Carousel */}
        <section id="gallery" className="section">
          <h2 className="section-title">Gallery</h2>
          <div id="carousel" className="container">
            <Slider {...sliderSettings}>
              {galleryImages.map((img, idx) => (
                <div key={idx} className="gallery-item">
                  <Image src={img.src} alt={img.alt} width={400} height={300} />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <h2 className="section-title">Contact</h2>
          <div className="container">
            Ready to start your journey? Get in touch today!
            <br />
            Email: trainwith.trainer@example.com
            <br />
            Phone: (123) 456-7890
            <div className="social-links">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>

            <div className="social-links">
  <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} size="2x" />
  </a>
  <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faYoutube} size="2x" />
  </a>
</div>
          </div>
        </section>
      </main>

      <footer className="footer">

        <div className="container">
          <p>© 2025 Muay Thai Training. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
