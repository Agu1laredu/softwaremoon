import React from 'react'
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => (
  <section className="xs:w-[250px] w-full">
    <div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      style={{ cursor: 'pointer' }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </section>
)

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>NOSOTROS.</h2>
      </div>

      <p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        En Digital Moon, nuestra pasión es llevar a las marcas más allá,
        impulsándolas hacia nuevas alturas en el mundo digital. Somos una
        agencia innovadora y comprometida, especializada en el desarrollo de
        soluciones digitales personalizadas que marcan la diferencia. Nuestro
        conjunto integral de servicios incluye la creación de landing pages
        cautivadoras, e-commerces dinámicos, sistemas POS eficientes y asesorías
        estratégicas que transforman negocios
      </p>
      <p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Nuestro equipo de expertos, altamente calificados y apasionados, se
        dedica a brindar soluciones digitales excepcionales que impulsan el
        crecimiento y el éxito empresarial. Sabemos que cada marca es única y
        requiere un enfoque adaptado a sus necesidades específicas. Por eso, nos
        esforzamos en entender a nuestros clientes y sus objetivos para
        ofrecerles soluciones a medida que destacan en el competitivo mundo en
        línea.
      </p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
