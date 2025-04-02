import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Building2,
  Users2,
  Recycle,
  TreePine,
  Factory,
  FileCheck,
} from "lucide-react"
import { useTranslation } from "../context/TranslationContext"

export const RecyclingServices = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Building2,
      title: t("municipalServicesTitle"),
      description: t("municipalServicesDescription"),
    },
    {
      icon: Factory,
      title: t("businessSolutionsTitle"),
      description: t("businessSolutionsDescription"),
    },
    {
      icon: Users2,
      title: t("communityProgramsTitle"),
      description: t("communityProgramsDescription"),
    },
    {
      icon: Recycle,
      title: t("collectionNetworkTitle"),
      description: t("collectionNetworkDescription"),
    },
    {
      icon: TreePine,
      title: t("environmentalImpactTitle"),
      description: t("environmentalImpactDescription"),
    },
    {
      icon: FileCheck,
      title: t("complianceSupportTitle"),
      description: t("complianceSupportDescription"),
    },
  ]

  return (
    <section className='py-20 bg-[#f7f9ed]' ref={ref}>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-[#456f2b] mb-6'>
            {t("recyclingPartnerTitle")}
          </h2>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
            {t("recyclingPartnerDescription")}
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'
            >
              <div className='bg-[#578c37] w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                <service.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-[#456f2b] mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-600'>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className='bg-[#456f2b] rounded-2xl p-8 text-center text-white'
        >
          <h3 className='text-2xl font-bold mb-4'>
            {t("partnerCalloutTitle")}
          </h3>
          <p className='text-lg mb-6 max-w-2xl mx-auto'>
            {t("partnerCalloutDescription")}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='https://www.fostplus.be/en'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center px-6 py-3 bg-white text-[#456f2b] rounded-full font-semibold hover:bg-gray-100 transition-colors'
            >
              {t("visitWebsiteButton")}
            </a>
            <button className='inline-flex items-center justify-center px-6 py-3 bg-[#578c37] text-white rounded-full font-semibold hover:bg-[#456f2b] transition-colors'>
              {t("contactTeamButton")}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
