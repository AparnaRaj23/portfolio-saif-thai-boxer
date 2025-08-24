import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo-container">
            {/* The Logo with a link to home */}
            <a href="/">
              <Image
                src="https://as1.ftcdn.net/v2/jpg/05/75/47/40/1000_F_575474031_FMbGVNgXPflKAaIlH3GyFpO90FpXwIqC.jpg"
                alt="Muay Thai Training Logo"
                width={50}
                height={50}
              />
            </a>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h1>Muay Thai: The Art of Eight Limbs</h1>
            <p>
              Experience authentic training with a world-class instructor.
            </p>
          </div>
        </section>

        {/* About Section with Trainer Photo */}
        <section id="about" className="section">
          <h2 className="section-title">About the Trainer</h2>
          <div className="container">
            <div className="about-content">
              <div className="trainer-photo">
                <Image
                  src="https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0077.jpg"
                  alt="Trainer Saif"
                  width={400}
                  height={500}
                />
              </div>
              <div className="about-text">
                  With over 15 years of experience, I am passionate about teaching the
                  discipline and power of Muay Thai. My goal is to help students of all
                  levels achieve their fitness and martial arts goals.
                  I have trained extensively in Thailand and have competed internationally, bringing
                  a wealth of knowledge and authentic techniques to my classes.
              </div>
            </div>
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

        {/* Gallery Section */}
        <section id="gallery" className="section">
          <h2 className="section-title">Gallery</h2>
          <div className="container">
            <div className="gallery-grid">
              <div className="gallery-item">
                <Image src="https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0173.jpg" alt="Muay Thai training in action" width={300} height={200} />
              </div>
              <div className="gallery-item">
                <Image src="https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0173.jpg" alt="Student practicing a kick" width={300} height={200} />
              </div>
              <div className="gallery-item">
                <Image src="https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0173.jpg" alt="Group class photo" width={300} height={200} />
              </div>
              <div className="gallery-item">
                <Image src="https://cdn.onefc.com/wp-content/uploads/2017/01/Muay-Thai-AO1U0173.jpg" alt="Trainer with student" width={300} height={200} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <h2 className="section-title">Contact</h2>
          <div className="container">
            Ready to start your journey? Get in touch today!
              Email: trainwith.trainer@example.com
              <br />
              Phone: (123) 456-7890
            <div className="social-links">
              {/* You can use an icon library like React Icons here */}
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
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