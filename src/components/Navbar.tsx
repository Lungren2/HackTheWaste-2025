import { Link } from "react-router-dom"
import { useTranslation } from "../context/TranslationContext"

export const Navbar = () => {
  const { language, changeLanguage, t } = useTranslation()

  return (
    <nav className='bg-white shadow-md fixed w-full z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <img
                src='/raccon-logo.png'
                alt='Raccoon Logo'
                className='h-8 w-auto'
              />
            </Link>
          </div>
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-4'>
              <Link
                to='/'
                className='text-gray-600 hover:text-fost-primary transition-colors'
              >
                {t("home")}
              </Link>
              <Link
                to='/legislation'
                className='text-gray-600 hover:text-fost-primary transition-colors'
              >
                {t("legislation")}
              </Link>
            </div>
            <div className='flex gap-2 ml-4 border-l pl-6'>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-fost-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === "nl"
                    ? "bg-fost-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => changeLanguage("nl")}
              >
                NL
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === "fr"
                    ? "bg-fost-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => changeLanguage("fr")}
              >
                FR
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  language === "de"
                    ? "bg-fost-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => changeLanguage("de")}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
