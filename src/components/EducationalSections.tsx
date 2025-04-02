import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Battery, Package2, Trash2 } from "lucide-react"
import { sections } from "../data"
import { useTranslation } from "../context/TranslationContext"

const icons = {
  Battery,
  Package2,
  Trash2,
}

export const EducationalSections = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className='py-16 bg-fost-bg' ref={ref}>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-2 text-fost-primary'>
          {t("priorityAreasTitle")}
        </h2>
        <img
          src='/walking-raccoon.png'
          alt='trash panda'
          className='mx-auto -my-6'
        />
        <div className='grid md:grid-cols-3 gap-8'>
          {sections.map((section, index) => {
            const Icon = icons[section.icon as keyof typeof icons]

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className='bg-white p-6 rounded-xl shadow-lg'
              >
                <div className='flex items-center justify-center w-12 h-12 bg-fost-bg rounded-full mb-4'>
                  <Icon className='w-6 h-6 text-fost-primary' />
                </div>
                <h3 className='text-xl font-semibold mb-3 text-fost-primary'>
                  {t(section.title)}
                </h3>
                <p className='text-gray-600 mb-4'>{t(section.description)}</p>
                <ul className='space-y-2'>
                  {section.items.map((item) => (
                    <li key={item} className='flex items-center text-gray-700'>
                      <span className='w-2 h-2 bg-fost-secondary rounded-full mr-2' />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
        <div className='flex justify-center mt-6'>
          <a
            href='https://www.bettersorting.be/'
            className='bg-fost-primary text-2xl text-white px-6 py-3 rounded-full hover:bg-fost-secondary transition duration-300'
          >
            {t("learnMoreButton")}
          </a>
        </div>
      </div>
    </section>
  )
}
