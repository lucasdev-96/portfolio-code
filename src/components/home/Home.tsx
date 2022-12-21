import './Home.css';
import lucasImg from '../../assets/img/lucas.jpeg';
import { useTranslation } from 'react-i18next';

function HomeComponent() {
  const { t } = useTranslation();
  return (
    <section id="home" className="homeFather">
      <div>
        <div className="containerFather">
          <img src={lucasImg} alt="lucas" />
          <div>
            <h2>{t('home.greeting')}</h2>
            <p>{t('home.amI')}</p>
            <p>{t('home.about')}</p>
            <p style={{ fontSize: '15px' }}>{t('home.info')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
