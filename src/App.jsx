import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "/images/logo.png";

import g1 from "/images/g1.png";
import g2 from "/images/g2.png";
import g3 from "/images/g3.jpeg";
import g4 from "/images/g4.jpeg";
import g5 from "/images/g5.jpeg";
import g6 from "/images/g6.jpeg";

import gv1 from "/videos/gv1.mp4";
import gv2 from "/videos/gv2.mp4";
import gv3 from "/videos/gv3.MP4";
import gv4 from "/videos/gv4.mp4";

import annal from "/videos/annal.mp4";
import about from "/videos/about.mp4";



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [previewMedia, setPreviewMedia] = useState({ src: g1, type: "image" });

  const impactCardsRef = useRef(null);

  

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const cardsContainer = impactCardsRef.current;
    if (!cardsContainer) return;
  
    let interval;
  
    const startAutoScroll = () => {
      if (window.innerWidth <= 768) {
        const card = cardsContainer.querySelector(".card");
        if (!card) return;
  
        const scrollAmount = card.offsetWidth + 16; // 16px gap
        let scrollPosition = 0;
  
        interval = setInterval(() => {
          scrollPosition += scrollAmount;
          if (scrollPosition >= cardsContainer.scrollWidth - cardsContainer.clientWidth) {
            scrollPosition = 0;
          }
          cardsContainer.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
          });
        }, 3000); // change card every 3s
      }
    };
  
    startAutoScroll();
    window.addEventListener("resize", startAutoScroll);
  
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", startAutoScroll);
    };
  }, []);
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
        <a href="/">
          <img src={logo} alt="Annal Electricals Logo" className="logo" />
        </a>

          {/* <img src={logo} alt="Annal Electricals Logo" /> */}
          <span>Annal Electricals & Irrigation System</span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {["home", "Our Services", "Know Us", "Our Work", "contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setIsMenuOpen(false)} // close menu on click
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

     {/* Hero Section */}
      <section className="hero" id="home" data-aos="fade-up">
        {/* 🎥 Background Video */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={annal} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* 🌑 Overlay for brightness control */}
        <div className="hero-overlay"></div>

        {/* 💬 Content */}
        <div className="hero-content">
          <h1>
            Innovative <span>Water & Power</span> Solutions
          </h1>
          <p>
          Transform your home or business with intelligent <strong>irrigation systems</strong>, 
           energy-efficient <strong>electrical solutions</strong>, and stunning <strong>water features</strong>.  
          </p>
          <p>
           Trusted across Mangalore, we have been the top service providers for leading builders, 
           delivering quality, reliability, and innovation in every project.          </p>
        </div>

        {/* 🌿 Impact Cards */}
        <div className="impact-cards" ref={impactCardsRef}>
        <div className="card" data-aos="fade-up">
            <h3>3000+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="100">
            <h3>15</h3>
            <p>Years of Experience</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="200">
            <h3>100%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="card" data-aos="fade-up" data-aos-delay="300">
            <h3>24/7</h3>
            <p>Support Availability</p>
          </div>
        </div>
      </section>




      {/* Services Section */}
      <section className="services" id="Our Services" data-aos="fade-up">
        <h2>Our <span>Premium</span> Services</h2>
        <div className="services-grid">
          {[
            {
              title: "Automation in Irrigation",
              desc: "Reduces manpower and ensures efficient, hassle-free watering for your garden with advanced fog systems, drip irrigation, and automated sprinkler solutions.",
              img: "/images/d1.jpeg",
            },
            {
              title: "Water Fountains",
              desc: "Where art meets engineering — crafting elegant water fountains that bring style, serenity, and precision to homes, gardens, and commercial spaces.",
              img: "/images/k1.png",
            },
         
            {
              title: "Swimming Pools",
              desc: "We craft pools that bring luxury, comfort, and lasting quality to your surroundings.",
              img: "/images/f1.jpg",
            },
           
            {
              title: "Electrical Works",
              desc: "We specialize in High Tension (HT) and Transformer Centre (TC) installations, combining expertise with a commitment to quality and reliability.",
              img: "/images/s2.png",
            },
            {
              title: "Rooftop Solar Panel",
              desc: "Harness the sun’s power with efficient solar rooftop panels for a cleaner, cost-saving energy future.",
              img: "/images/s5.jpg",
            },
          ].map((service, i) => (
            <div
              className="service-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img src={service.img} alt={service.title} className="service-img" />
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* About Section */}
        <section className="about" id="Know Us" data-aos="fade-up">
          {/* Fullscreen background video */}
          <video
            className="about-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={about} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay to dull video */}
          <div className="about-overlay-bg"></div>

          {/* Content */}
          <div className="about-overlay">
            <h2>About <span>Annal Electricals & Irrigation Systems</span></h2>

            <p>
              At Annal Electricals and Irrigation, we bring together innovation and sustainability to deliver smarter, greener, and more efficient solutions for residential, commercial, and agricultural projects.
            </p>
            <p>
              With years of hands-on experience and a deep passion for excellence, our team transforms ideas into reality creating reliable, high-quality systems that stand the test of time.
            </p>
            <p>    From concept to completion, we manage every detail with precision and care, ensuring seamless execution, superior craftsmanship, and lasting performance.
            </p>
              Whether you're a builder, homeowner, or developer, Annal Electricals and Irrigation is your trusted partner for solutions that blend technology, design, and sustainability powering progress the smart way.
          </div>
        </section>



        {/* Gallery Section - Redesigned with Inline Preview (Images + Videos) */}
        <section className="gallery" id="Our Work" data-aos="fade-up">
          <h2 className="gallery-heading">
            Navigating <span>Our Masterpieces</span>
          </h2>
          <p className="gallery-subheading">
            Explore Our Smart Irrigation and Water Fountain Projects with Interactive Visualization
          </p>

          <div className="gallery-container">
            {/* Left side: Dynamic preview */}
            <div className="gallery-main">
              {previewMedia?.type === "video" ? (
                <video
                  src={previewMedia.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="gallery-video"
                />
              ) : (
                <img src={previewMedia?.src || g1} alt="Preview" />
              )}
            </div>

            {/* Right side: Project list */}
            <div className="gallery-list">
              {[
                { src: gv2, type: "video", title: "Sprinkler on Landscape" },
                { src: g6, type: "image", title: "Water Sprinkler for Farms"},
                { src: gv3, type: "video", title: "Water Fountain with Lights" },
                { src: g1, type: "image", title: "Water Fountain" },
                { src: g5, type: "image", title: "Water Sprinkler for Gardens"},
                { src: g2, type: "image", title: "Water Fountain"},
                
                { src: g3, type: "image", title: "Sprinkler" },
                { src: gv1, type: "video", title: "Water Fountain for Home" },
                { src: g4, type: "image", title: "Drip Irrigation" },
                { src: gv4, type: "video", title: "Water Sprinkler for Gardens"},
                
                


              ].map((item, i) => (
                <div
                  key={i}
                  className={`gallery-list-item ${
                    previewMedia?.src === item.src ? "active" : ""
                  }`}
                  onClick={() => setPreviewMedia(item)}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="thumb-video"
                    />
                  ) : (
                    <img src={item.src} alt="Gallery" />
                  )}

                  {/* {item.type === "video" ? (
                    <video src={item.src} muted loop playsInline className="thumb-video" />
                  ) : (
                    <img src={item.src} alt="Gallery" />
                  )} */}
                  <div className="gallery-info">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



        <footer className="footer" id="contact">
          <div className="footer-content">
            {/* Logo & Contact */}
            <div className="footer-logo">
              <img src={logo} alt="Annal Electricals Logo" className="footer-logo-img" />
              <p>
                <strong>Main Office:</strong> <a href="https://share.google/OBSYXuKMPofzOGlsT">📍 Kotimura 5th Cross, Kulshekar, Mangalore, Karnataka 575005</a>
              </p>
              <p><strong>📞</strong> <a href="tel:+919686612726">+91 9686612726</a></p>
              <p><strong>✉️</strong> <a href="mailto:annalelectricals@gmail.com">annalelectricals@gmail.com</a></p>

              <div className="social-icons">
              <a href="https://www.facebook.com/share/16WTJXpmVs/?mibextid=wwXIfr"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/annalelectricals"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/919686612726"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>

            {/* Our Services */}
            <div className="footer-column">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#Our Services">Irrigation Systems</a></li>
                <li><a href="#Our Services">Electrical Works</a></li>
                <li><a href="#Our Services">Water Fountains</a></li>
                <li><a href="#Our Services">Swimming Pools</a></li>
                <li><a href="#Our Services">Garden Lighting</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#Know Us">About Us</a></li>
                <li><a href="#Our Services">Services</a></li>
                <li><a href="#Our Work">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Annal Electricals & Irrigation System. All Rights Reserved.</p>
          </div>
        </footer>



    </div>
  );
}

export default App;


