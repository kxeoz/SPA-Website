class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #020037ff;
          color: white;
          padding: 1rem 1rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          color: #ffffffff;
          margin-bottom: 1rem;
        }
        .footer-section p {
          margin-bottom: 0.5rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: white;
          transition: color 0.3s ease;
        }
        .copyright {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3><u>About Us</u></h3>
                <p>Nicolas L. Galvez Memorial National High School's Special Program in the Arts nurtures young talents in various artistic disciplines.</p>
            </div>
            <div class="footer-section">
                <h3><u>Contact Info</u></h3>
                <p><i data-feather="map-pin"></i> Purok 1 Brgy. San Antonio Bay, Laguna, 4033</p>
                <p><i data-feather="phone"></i> +49 4957 21231</p>
            </div>
            <div class="footer-facebook">
                <h3><u>Visit our Official Facebook Page</u></h3>
                <a href="https://www.facebook.com/DepEdTayoNLGMINHS301262/about" target="_blank">
                    <img src="images/fb icon.png" alt="Facebook" class="fb-icon" width="15" height="15">
                </a>
                DepEd Tayo Nicolas L. Galvez MINHS - Laguna 
            </div>
        </div>
        <div class="copyright">
            <p>&copy; <script>document.write(new Date().getFullYear())</script> Nicolas L. Galvez MNHS - SPA Program. All rights reserved.</p>
        </div>
    </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);