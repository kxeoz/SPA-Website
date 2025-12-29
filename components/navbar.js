class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #020037ff;
          padding: 0.3rem;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .logo img {
          height: 60px;
          margin-right: 10px;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
        }
        a:hover {
          opacity: 0.9;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }
        a:hover::after {
          width: 100%;
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: #6f42c1;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            clip-path: circle(0px at 90% -10%);
            transition: clip-path 0.5s ease-out;
          }
          ul.open {
            clip-path: circle(1000px at 90% -10%);
          }
          .nav-toggle {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="navbar-container">
          <a href="index.html" class="logo">
            <img src="images/school logo.png" alt="School Logo">
            <span>Nicolas L. Galvez MINHS - Laguna</span>
          </a>
          <button class="nav-toggle" id="navToggle">
            <i data-feather="menu"></i>
          </button>
          <ul id="navMenu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contacts</a></li>
          </ul>
        </div>
      </nav>
    `;
    
    // Add mobile menu toggle functionality
    const navToggle = this.shadowRoot.getElementById('navToggle');
    const navMenu = this.shadowRoot.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);