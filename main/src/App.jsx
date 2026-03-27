import groupPic from './grouppic.jpg';
import "./App.css"

const App = () => {
  const members = [
    { name: "Dominic", role: "Team Simpleng Tao", desc: "The Databe's Prophet." },
    { name: "Gian", role: "Nagbabatak Mag Developer", desc: "Looking Left cause You never Treat me right." },
    { name: "Frank", role: "CUTIEPIE Entrepreneur", desc: "Laging nasa hustlin para mabili ng mamahalin." },
    { name: "Kim", role: "Halimaw Engineer", desc: "MAYBE THE NIGHTS." },
    { name: "Mary Joy", role: "SYSTEMATIC Analyst", desc: "MAYBE TOMORROW IS ANOTHER DAY BUT TODAY IS NOT TOMORROW" },
  ];

  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <h1 className="logo">databae's</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Landing Page Section */}
      <header id="home" className="hero-section">
        <section className="hero-content">
          <div className="group-img-container">
            <img src={groupPic} alt="asya ine amon group picture" />
          </div>

          <div className="hero-text">
            <h1>We are the Databae's</h1>
            <p>inspired by Mr. Databae himself | BS Info Tech - 2B</p>
            <a href="#about" className="btn">About Us</a>
          </div>
        </section>
      </header>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="about-card">
          <h3>Hi Everyone Welcome!</h3>
          <p>We are a group of IT students from section 2B. We Love Solving our Own problems.</p>
        </div>

        {/* 5 Column Members Grid */}
        <div className="members-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <div className="member-image-wrapper">
                <img src={groupPic} alt={member.name} />
                <div className="member-hover-overlay">
                  <p>{member.desc}</p>
                </div>
              </div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section*/}
      <section id="contact" className="contact-section">
        <h2>Get In Touch With Us </h2>
        <p>Feel free to reach out to us "Wag Kang Matakot" through any of these platforms:</p>
        
        <div className="contact-info-grid">
          <div className="info-item">
            <h4>Email</h4>
            <p>databaes.DominicGianFrankKimMaryJoy@email.com</p>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>Calbayog city Rueds Street. NWSSU CCIS Department - LAB2 </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Databae's | BS Info Tech - 2B</p>
          <div className="footer-links">
            <a href="#">Facebook</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App