import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './contact.css'; // S'assurer que le fichier CSS existe dans le bon chemin

const Contact = () => {
  const navigate = useNavigate(); // Initialiser le hook de navigation

  return (
    <div 
      className="contact-page" 
      style={{
        backgroundImage: "url('assets/layout/images/Sfax Immobilier Express.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column', // Permet d'aligner les éléments verticalement
        padding: '20px',
      }}
    >
      {/* Icône pour retourner à l'accueil */}
      <div 
        className="back-icon" 
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          cursor: 'pointer',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => navigate('/')} // Naviguer vers la page d'accueil
      >
        <i 
          className="pi pi-arrow-left" // Classe d'icône PrimeIcons
          style={{
            fontSize: '20px',
            color: 'white',
          }}
        ></i>
      </div>

      {/* Contenu principal */}
      <div className="contact-container">
        <h1>Contactez-nous</h1>

        <p className="contact-message">
          Pour toute information, n'hésitez pas à nous contacter via l'un des moyens ci-dessous.
          <br />
          للتواصل معنا لأي استفسار، لا تتردد في الاتصال بنا عبر إحدى الوسائل أدناه.
        </p>

        <p className="contact-message">
          Nous sommes à votre écoute pour répondre à toutes vos questions et vous offrir le meilleur service possible.
          <br />
          نحن هنا للاستماع إليك والإجابة على جميع استفساراتك وتقديم أفضل خدمة ممكنة.
        </p>

        <div className="contact-info">
          <div className="contact-card">
            <p><strong>📞 Téléphone :</strong></p>
            <p><a href="tel:+21627521512">+216 27 521 512</a></p>
            <p><a href="tel:+21625930974">+216 25 930 974</a></p>
          </div>

          <div className="contact-card">
            <p><strong>💬 WhatsApp :</strong></p>
            <p>
              <a href="https://wa.me/21625930974" target="_blank" rel="noopener noreferrer">
                +216 25 930 974
              </a>
            </p>
          </div>

          <div className="contact-card">
            <p><strong>🌐 Facebook :</strong></p>
            <p>
              <a href="https://www.facebook.com/profile.php?id=61551353844523" target="_blank" rel="noopener noreferrer">
                Visitez notre page Facebook
              </a>
            </p>
          </div>

          <div className="contact-card">
            <p><strong>✉️ Email :</strong></p>
            <p>
              <a href="mailto:sfaximmobilier@express.com">sfaximmobilier@express.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
