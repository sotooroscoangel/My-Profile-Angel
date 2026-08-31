import { useLanguage } from '../../i18n/LanguageContext'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Skills.css'

import siemensLogo from '../../assets/logos/siemens.png'
import keyenceLogo from '../../assets/logos/keyence.png'
import allenBradleyLogo from '../../assets/logos/allen-bradley.png'
import rockwellLogo from '../../assets/logos/rockwell-automation.svg'
import omronLogo from '../../assets/logos/omron.png'
import schneiderLogo from '../../assets/logos/schneider-electric.svg'
import viakonLogo from '../../assets/logos/viakon.png'
import abbLogo from '../../assets/logos/abb.png'
import mitsubishiLogo from '../../assets/logos/mitsubishi-electric.png'
import festoLogo from '../../assets/logos/festo.svg'
import fanucLogo from '../../assets/logos/fanuc.png'
import kukaLogo from '../../assets/logos/kuka.png'
import endressHauserLogo from '../../assets/logos/endress-hauser.png'
import bannerLogo from '../../assets/logos/banner-engineering.png'
import danfossLogo from '../../assets/logos/danfoss.png'
import yaskawaLogo from '../../assets/logos/yaskawa.png'
import universalRobotsLogo from '../../assets/logos/universal-robots.png'
import deltaLogo from '../../assets/logos/delta-electronics.png'
import eatonLogo from '../../assets/logos/eaton.png'
import legrandLogo from '../../assets/logos/legrand.png'
import rittalLogo from '../../assets/logos/rittal.png'

interface Brand {
  name: string
  logo: string
}

// Proper nouns — same in every language, so this lives here instead
// of in translations.ts (same pattern as the project technologies).
const BRANDS: Brand[] = [
  { name: 'Siemens', logo: siemensLogo },
  { name: 'Keyence', logo: keyenceLogo },
  { name: 'Allen-Bradley', logo: allenBradleyLogo },
  { name: 'Rockwell Automation', logo: rockwellLogo },
  { name: 'Omron', logo: omronLogo },
  { name: 'Schneider Electric', logo: schneiderLogo },
  { name: 'Viakon', logo: viakonLogo },
  { name: 'ABB', logo: abbLogo },
  { name: 'Mitsubishi Electric', logo: mitsubishiLogo },
  { name: 'Festo', logo: festoLogo },
  { name: 'FANUC', logo: fanucLogo },
  { name: 'KUKA', logo: kukaLogo },
  { name: 'Endress+Hauser', logo: endressHauserLogo },
  { name: 'Banner Engineering', logo: bannerLogo },
  { name: 'Danfoss', logo: danfossLogo },
  { name: 'Yaskawa', logo: yaskawaLogo },
  { name: 'Universal Robots', logo: universalRobotsLogo },
  { name: 'Delta Electronics', logo: deltaLogo },
  { name: 'Eaton', logo: eatonLogo },
  { name: 'Legrand', logo: legrandLogo },
  { name: 'Rittal', logo: rittalLogo },
]

function Skills() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills reveal ${isVisible ? 'reveal--visible' : ''}`}
    >
      <div className="skills__header">
        <p className="skills__eyebrow">{t.skills.eyebrow}</p>

        <h2 className="skills__title">
          {t.skills.title.map((line, index) => (
            <span key={line}>
              {line}
              {index < t.skills.title.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>

      <div className="skills__grid">
        {t.skills.groups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3>{group.title}</h3>

            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="skills__brands">
        <p className="skills__brands-label">{t.skills.brandsLabel}</p>

        <div className="skills__brands-grid">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="brand-card">
              <img
                src={brand.logo}
                alt={brand.name}
                className="brand-card__logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
