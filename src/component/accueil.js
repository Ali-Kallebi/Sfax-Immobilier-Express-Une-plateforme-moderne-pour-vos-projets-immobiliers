import React from "react";
import { useNavigate } from "react-router-dom";
import "./accueil.css";

const Accueil = () => {
  const navigate = useNavigate();

  const navigateTobien = () => {
    console.log("Navigating to Achat de biens...");
    navigate("/Bien");
  };

  const navigateToOffre = () => {
    console.log("Navigating to Offres et demandes...");
    navigate("/Offre");
  };

  const navigateToContact = () => {
    navigate("/contact"); // Naviguer vers la page de contact
  };

  return (
    <div
    className="background-wrapper"
    style={{
      backgroundImage: "url('https://rflx.fr/wp-content/uploads/2023/06/projet-pierreconchezimmobilier-1024x733.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"
    }}
  >
    <div className="accueil-container">
      <div className="profile-picture-container">
        <img
          src="assets/layout/images/0.jpg"
          alt="Profile Picture"
          className="profile-picture"
        />
      </div>

        {/* Bienvenue Section */}
        <section className="welcome-section">
          <h1 className="agency-name">Sfax Immobilier Express</h1>
          <h2 className="location">Sfax, Tunis - Route Lafrane km 9</h2>
          <p className="description">
            Avec plus de 15 ans d'expérience dans le secteur immobilier, nous sommes votre partenaire de confiance pour tous vos besoins immobiliers. 
          </p>
          <p className="description-ar">
            مع أكثر من 15 عامًا من الخبرة في مجال العقارات، نحن شريكك الموثوق به لجميع احتياجاتك العقارية.
          </p>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2>Nos Services</h2>
          <div className="service-grid">
            <div className="service-item" onClick={navigateTobien}>
              <i className="pi pi-home"></i>
              <h3>Achat de biens</h3>
              <p>Découvrez nos biens immobiliers disponibles à l'achat.</p>
              <p>العقارات المتاحة للبيع</p>
            </div>
            <div className="service-item" onClick={navigateToOffre}>
              <i className="pi pi-money-bill"></i>
              <h3>Offres et demandes</h3>
              <p>Consultez les offres et demandes sur le marché.</p>
              <p>تقديم العروض والطلبات</p>
            </div>
            <div className="service-item" onClick={navigateToContact}>
              <i className="pi pi-phone"></i>
              <h3>Contact</h3>
              <p>Contactez-nous pour toute information ou assistance.</p>
              <p>صفحة الاتصال</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div>
      {/* Section "Notre Expérience" */}
      <section className="experience-section">
        <h2>Notre Expérience</h2>
        <p>
          Fort de plus d'une décennie d'expérience dans l'immobilier, Sfax Immobilier Express s'est établi comme un leader dans le secteur. Nous mettons à disposition notre expertise pour vous offrir les meilleurs conseils en matière d'achat, de vente et de gestion immobilière.
          <br />
          <span style={{ fontSize: "0.8em" }}>
            بفضل أكثر من عشر سنوات من الخبرة في مجال العقارات، أصبح Sfax Immobilier Express رائدًا في هذا القطاع. نحن نضع خبرتنا في خدمتك لنقدم لك أفضل النصائح فيما يتعلق بشراء وبيع وإدارة العقارات.
          </span>
        </p>
      </section>

      {/* Section "Call to Action" */}
      <section className="call-to-action">
        <p>
          Choisissez parmi nos offres pour trouver la solution qui vous convient le mieux.
          <br />
          <span style={{ fontSize: "0.8em" }}>
            اختر من بين عروضنا للعثور على الحل الأنسب لك.
          </span>
        </p>
        <a
          href="https://wa.me/21625930974"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Contacter sur WhatsApp
        </a>
      </section>
    </div>
      </div>
    </div>
  );
};

export default Accueil;
