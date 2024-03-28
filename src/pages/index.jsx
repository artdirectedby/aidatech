import React, { useEffect, useState } from "react"
import Hero from "../components/Hero/Hero"
import "../assets/fonts/fonts.css"
import "../styles/home.scss"
import "../global.css"
import "../i18n"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FeatureSlides from "../components/FeatureSlides/FeatureSlides"
import { useTranslation} from "react-i18next"
import LanguageSelector from "../components/Language/LanguageSelector"
import Loading from "../Loading/Loading"
import AppForm from "../components/Form/AppForm"




const IndexPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  if (loading) {
    return <Loading onLoaded={handleLoaded} />;
  }

  return (
    <div>
      <header className="header-main">
        <img
          className="logo"
          alt="logo"
          src="https://cdn.animaapp.com/projects/65fda43e03961e9ed716ec98/releases/65fda44658ce50360aaf8adf/img/layer-1.svg"
        />
        <div className="navbar">
          <div className="text-wrapper">{t('Services')}</div>
          <div className="text-wrapper">{t('Industries')}</div>
          <div className="text-wrapper">{t('Clients')}</div>
          <div className="text-wrapper">{t('Company')}</div>
          <div className="button">
            <div className="div">{t('Contact us')}</div>
          </div>
          <LanguageSelector/>
        </div>
      </header>
      <Hero />
      <FeatureSlides/>
      <AppForm/>
      <div className="footer">© 2024 AIDA.group</div>
    </div>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>
