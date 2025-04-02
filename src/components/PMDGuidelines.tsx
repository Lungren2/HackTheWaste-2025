import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, X, Droplet, Package, Info } from "lucide-react"
import { useTranslation } from "../context/TranslationContext"

export const PMDGuidelines = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    {
      title: t("plasticPackagingTitle"),
      items: [
        t("plasticBottles"),
        t("plasticDishes"),
        t("plasticPots"),
        t("plasticFilms"),
        t("plasticCapsules"),
      ],
    },
    {
      title: t("metalPackagingTitle"),
      items: [
        t("metalCans"),
        t("metalAerosols"),
        t("metalTrays"),
        t("metalLids"),
        t("metalCapsules"),
      ],
    },
    {
      title: t("drinksCartonsTitle"),
      items: [t("drinksCartons")],
    },
  ]

  const notAccepted = [
    t("notAcceptedBatteries"),
    t("notAcceptedGas"),
    t("notAcceptedChildproof"),
    t("notAcceptedLarge"),
    t("notAcceptedStyrofoam"),
    t("notAcceptedHazard"),
    t("notAcceptedOil"),
  ]

  const preparationRules = [
    t("prepRuleEmpty"),
    t("prepRuleFlatten"),
    t("prepRuleFilms"),
    t("prepRuleSleeves"),
    t("prepRuleStack"),
    t("prepRuleBags"),
    t("prepRuleAttach"),
  ]

  return (
    <section className='py-16' ref={ref}>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-fost-primary mb-4'>
            {t("pmdGuidelinesTitle")}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t("pmdGuidelinesDescription")}
          </p>
        </motion.div>

        <div className='relative mb-16'>
          {" "}
          {/* Parent wrapper */}
          <div className='grid md:grid-cols-3 gap-8'>
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className='bg-fost-bg rounded-xl p-6 shadow-lg'
              >
                <h3 className='text-xl font-semibold text-fost-primary mb-4 flex items-center gap-2'>
                  <Package className='w-6 h-6' />
                  {category.title}
                </h3>
                <ul className='space-y-3'>
                  {category.items.map((item) => (
                    <li key={item} className='flex items-center gap-2'>
                      <Check className='w-5 h-5 text-fost-secondary flex-shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <img
            src='/raccoon-walking-front.png'
            alt='trash panda'
            className='absolute right-0 bottom-44 z-[-1]'
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className='bg-red-50 rounded-xl p-6 mb-16'
        >
          <h3 className='text-xl font-semibold text-red-600 mb-4 flex items-center gap-2'>
            <X className='w-6 h-6' />
            Not Accepted Items
          </h3>
          <div className='grid md:grid-cols-2 gap-4'>
            {notAccepted.map((item) => (
              <div key={item} className='flex items-center gap-2'>
                <X className='w-5 h-5 text-red-500 flex-shrink-0' />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className='bg-fost-bg rounded-xl p-6'
        >
          <h3 className='text-xl font-semibold text-fost-primary mb-4 flex items-center gap-2'>
            <Info className='w-6 h-6' />
            Preparation Rules
          </h3>
          <div className='grid md:grid-cols-2 gap-4'>
            {preparationRules.map((rule) => (
              <div key={rule} className='flex items-center gap-2'>
                <Droplet className='w-5 h-5 text-fost-secondary flex-shrink-0' />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className='text-center text-gray-600 mt-8 italic'
        >
          {t("pmdGuidelinesFinalNote")}
        </motion.p>
      </div>
    </section>
  )
}
