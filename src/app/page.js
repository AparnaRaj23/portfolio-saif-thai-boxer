import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Muay Thai Training</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h2>Train with the Best</h2>
            <p>
              Master the art of eight limbs with world-class Muay Thai training.
            </p>
            <a href="#contact" className="cta-button">
              Book a Session
            </a>
          </div>

        </section>

        <section id="about" className="section">
          <h2 className="section-title">About the Trainer</h2>
          <p>
            With over 15 years of experience, I am passionate about teaching the
            discipline and power of Muay Thai. My goal is to help students of all
            levels achieve their fitness and martial arts goals.
          </p>
          <p>
            I have trained in Thailand and have competed internationally, bringing
            a wealth of knowledge and authentic techniques to my classes.
          </p>
        </section>

        <section id="services" className="section">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Group Classes</h3>
              <p>
                Dynamic and high-energy classes for all skill levels. Learn
                fundamentals, combinations, and conditioning.
              </p>
            </div>
            <div className="service-card">
              <h3>Private Training</h3>
              <p>
                Personalized one-on-one sessions to focus on your specific needs
                and accelerate your progress.
              </p>
            </div>
            <div className="service-card">
              <h3>Sparring Sessions</h3>
              <p>
                Safe and controlled sparring to apply your techniques in a
                realistic setting.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <h2 className="section-title">Contact</h2>
          <p>Ready to start your journey? Get in touch today!</p>
          <p>
            *Email:* trainwith.trainer@example.com
            <br />
            *Phone:* (123) 456-7890
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          © 2025 Muay Thai Training. All rights reserved.
        </p>
      </footer>
    </div>
  );
}