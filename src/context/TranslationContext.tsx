import { createContext, useState, useContext } from "react"
import { translations } from "../translations"

type LanguageCode = keyof typeof translations

interface TranslationContextType {
  language: LanguageCode
  t: (key: string) => string
  changeLanguage: (lang: LanguageCode) => void
}

const TranslationContext = createContext<TranslationContextType>({
  language: "en",
  t: (key) => key,
  changeLanguage: () => {},
})

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem(
      "preferredLanguage"
    ) as LanguageCode
    return savedLanguage || "en"
  })

  const t = (key: string) => {
    if (!translations[language]) return key
    if (
      !translations[language][key as keyof (typeof translations)[LanguageCode]]
    )
      return key

    return translations[language][
      key as keyof (typeof translations)[LanguageCode]
    ]
  }

  const changeLanguage = (lang: LanguageCode) => {
    if (translations[lang]) {
      setLanguage(lang)
      localStorage.setItem("preferredLanguage", lang)
    }
  }

  return (
    <TranslationContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => useContext(TranslationContext)
