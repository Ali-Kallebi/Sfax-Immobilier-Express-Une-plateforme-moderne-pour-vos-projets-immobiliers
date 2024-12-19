import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import './offre.css';
import { useNavigate } from 'react-router-dom';

const Offre = () => {
    const navigate = useNavigate(); 
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);

  const propertyTypeOptions = [
    { label: 'Terrain', value: 'Terrain' },
    { label: 'Maison', value: 'Maison' }
  ];

  const optionMaison = [
    { label: 'Vente', value: 'Vente' },
    { label: 'Location', value: 'Location' }
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="background-image">
      <div className="welcome-message">
        <h1 className="welcome-title">Bienvenue à Sfax Immobilier Express</h1>
        <h1 className="welcome-title">أهلاً وسهلاً بكم في صفاقس للعقارات</h1>
      </div>
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
      <div className="overlay">
        <div className="offre-form-container">
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Nom & Prénom */}
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="nom">Nom / الاسم</label>
                <InputText id="nom" {...register('nom', { required: true })} placeholder="Nom / الاسم" />
                {errors.nom && <div className="error-message">Le nom est obligatoire / الاسم إجباري.</div>}
              </div>
              <div className="form-group half-width">
                <label htmlFor="prenom">Prénom / اللقب</label>
                <InputText id="prenom" {...register('prenom', { required: true })} placeholder="Prénom / اللقب" />
                {errors.prenom && <div className="error-message">Le prénom est obligatoire / اللقب إجباري.</div>}
              </div>
            </div>

            {/* Téléphone & Type */}
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="tel">Téléphone / الهاتف</label>
                <InputText id="tel" {...register('tel', { required: true, maxLength: 8 })} placeholder="Téléphone / الهاتف" />
                {errors.tel && <div className="error-message">Téléphone est obligatoire et doit être de 8 chiffres / الهاتف إجباري ويجب أن يكون 8 أرقام.</div>}
              </div>
              <div className="form-group half-width">
                <label htmlFor="type">Type / النوع</label>
                <Dropdown id="type" {...register('type', { required: true })} options={optionMaison} placeholder="Choisissez / اختر" />
                {errors.type && <div className="error-message">Type est obligatoire / النوع إجباري.</div>}
              </div>
            </div>

            {/* Terrain Fields */}
            {selectedPropertyType === 'Terrain' && (
              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="metrage">Métrage (m²) / القياس (م²)</label>
                  <InputText id="metrage" {...register('metrage', { required: true })} placeholder="Métrage (m²) / القياس (م²)" />
                  {errors.metrage && <div className="error-message">Le métrage est obligatoire pour un terrain / القياس إجباري للأرض.</div>}
                </div>
                <div className="form-group half-width">
                  <label htmlFor="infoTerrain">Info Terrain / معلومات عن الأرض</label>
                  <InputTextarea id="infoTerrain" {...register('infoTerrain', { required: true })} placeholder="Info Terrain / معلومات عن الأرض" />
                  {errors.infoTerrain && <div className="error-message">Les informations sur le terrain sont obligatoires / المعلومات عن الأرض إجبارية.</div>}
                </div>
              </div>
            )}

            {/* Maison Fields */}
            {selectedPropertyType === 'Maison' && (
              <div className="form-row">
                <div className="form-group full-width">
                  <label htmlFor="infoImmo">Info sur l'immo / معلومات عن العقار</label>
                  <InputTextarea id="infoImmo" {...register('infoImmo', { required: true })} placeholder="Exemple : Surface totale, surface couverte, localisation, etc. / مثال: المساحة الإجمالية، المساحة المغطاة، الموقع، إلخ." />
                  {errors.infoImmo && <div className="error-message">Informations sur l'immo sont obligatoires / المعلومات عن العقار إجبارية.</div>}
                </div>
                <div className="form-group half-width">
                  <label htmlFor="maisonVenteLocation">Vente ou Location / بيع أو إيجار</label>
                  <Dropdown id="maisonVenteLocation" {...register('maisonVenteLocation', { required: true })} options={optionMaison} placeholder="Choisissez / اختر" />
                  {errors.maisonVenteLocation && <div className="error-message">Sélectionner une option est obligatoire / إختيار مطلوب.</div>}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" label="Soumettre / إرسال" disabled={!watch('nom') || !watch('prenom') || !watch('tel')} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Offre;
