"use client"

import { useState, createContext, useContext, type ReactNode } from "react"
import {
  Camera,
  Mail,
  Cloud,
  Check,
  Shield,
  Lock,
  EyeOff,
  Globe,
  MessageCircle,
} from "lucide-react"

// --- TRANSLATIONS ---
const translations = {
  tr: {
    nav: { services: "Hizmetler", privacy: "Gizlilik", contact: "İletişim", cta: "Hemen Başla" },
    hero: {
      title: "Dijital Netlik,",
      subtitle: "Zihinsel Özgürlük.",
      description:
        "Galeri, Gelen Kutusu ve Bulut Düzenleme Hizmetleri ile zihninizi dijital kirlilikten arındırın.",
      getStarted: "Başla",
      learnMore: "Daha Fazla Bilgi",
    },
    services: {
      title: "Dijital Alanınızı Geri Kazanın",
      description: "Sunduğumuz profesyonel düzenleme hizmetleri ile dijital hayatınızdaki gürültüyü azaltıyoruz.",
      gallery: {
        title: "Galeri Detoksu",
        desc: "Binlerce gereksiz ekran görüntüsü, benzer fotoğraf ve bulanık kareden kurtulun. Sadece anılarınız kalsın.",
      },
      inbox: {
        title: "Inbox Zero",
        desc: "E-posta kutunuzu profesyonelce düzenleyelim. Spamleri temizleyip önemli olanları kategorize edelim.",
      },
      cloud: {
        title: "Bulut Kurulumu",
        desc: "Dosyalarınızı iCloud, Google Drive veya OneDrive üzerinde mükemmel bir klasör yapısıyla organize edelim.",
      },
    },
    pricing: {
      title: "Size Uygun Paketi Seçin",
      description: "İhtiyacınıza göre özelleştirilmiş, şeffaf fiyatlandırma politikamızla tanışın.",
      perTime: "tek sefer",
      buy: "Satın Al",
      mostPopular: "En Popüler",
    },
    testimonials: {
      title: "Müşterilerimiz Ne Diyor?",
      description: "Dijital özgürlüğüne kavuşan yüzlerce mutlu müşterimizden birkaçı.",
    },
    privacy: {
      title: "Gizliliğiniz Önceliğimizdir",
      description:
        "Verilerinizin mahremiyeti bizim için kutsaldır. DigiFlow olarak %100 güvenlik garantisi veriyoruz. Hiçbir veriniz saklanmaz, kopyalanmaz veya paylaşılmaz.",
      encrypted: "Şifrelenmiş Erişim",
      encryptedDesc: "Tüm yetkilendirmeler tek kullanımlık ve geçicidir.",
      zeroTracking: "Sıfır İzleme",
      zeroTrackingDesc: "İşlem bittiği an tüm erişim yetkileri kalıcı olarak silinir.",
    },
    footer: {
      ctaTitle: "Hemen Temizliğe Başla",
      ctaDesc:
        "Zihinsel özgürlüğe giden yol dijital netlikten geçer. WhatsApp üzerinden bize yazın, süreci hemen başlatalım.",
      whatsapp: "WhatsApp ile Başla",
      rights: "Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: { services: "Services", privacy: "Privacy", contact: "Contact", cta: "Get Started" },
    hero: {
      title: "Digital Clarity,",
      subtitle: "Mental Liberty.",
      description:
        "Gallery, Inbox & Cloud Organization Services designed to free your mind from digital clutter.",
      getStarted: "Get Started",
      learnMore: "Learn More",
    },
    services: {
      title: "Reclaim Your Digital Space",
      description: "Reduce the noise in your digital life with our professional organizing services.",
      gallery: {
        title: "Gallery Detox",
        desc: "Clear out thousands of junk screenshots and blurry frames. Keep only the memories.",
      },
      inbox: {
        title: "Inbox Zero",
        desc: "Professionally organize your inbox. Clear spam and categorize what matters.",
      },
      cloud: {
        title: "Cloud Setup",
        desc: "Organize files on iCloud, Drive, or OneDrive with a perfect folder structure.",
      },
    },
    pricing: {
      title: "Choose Your Plan",
      description: "Transparent pricing policy, customized to your specific digital needs.",
      perTime: "one-time",
      buy: "Buy Now",
      mostPopular: "Most Popular",
    },
    testimonials: {
      title: "What Our Clients Say",
      description: "A few of our happy clients who achieved digital freedom.",
    },
    privacy: {
      title: "Privacy is Our Priority",
      description:
        "The privacy of your data is sacred. We guarantee 100% security. Your data is never stored, copied, or shared.",
      encrypted: "Encrypted Access",
      encryptedDesc: "All authorizations are one-time and temporary.",
      zeroTracking: "Zero Tracking",
      zeroTrackingDesc: "All access rights are deleted as soon as the process ends.",
    },
    footer: {
      ctaTitle: "Start Cleaning Now",
      ctaDesc: "The path to mental liberty goes through digital clarity. Text us on WhatsApp to start.",
      whatsapp: "Start via WhatsApp",
      rights: "All rights reserved.",
    },
  },
}

type Language = "tr" | "en"
type TranslationType = typeof translations.tr

// --- CONTEXT ---
const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationType
} | null>(null)

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("tr")

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage missing context")
  return context
}

// --- COMPONENTS ---

const Logo = ({
  className = "h-10",
  showText = true,
}: {
  className?: string
  showText?: boolean
  textColor?: "dark" | "light"
}) => {
  const navy = "#2c4266"
  const teal = "#82cec4"

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M45,85 C70,85 90,65 90,40 C90,25 80,15 70,10"
          stroke={teal}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="70" cy="10" r="2.5" fill={teal} />
        <circle cx="90" cy="40" r="2.5" fill={teal} />
        <path
          d="M30,65 C15,65 15,45 30,45 C30,30 50,25 60,35 C75,35 75,65 60,65 Z"
          stroke={navy}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="45" r="1.5" fill={teal} />
        <circle cx="55" cy="40" r="1.5" fill={teal} />
        <path d="M40,45 L40,55" stroke={teal} strokeWidth="1" />
        <path d="M55,40 L55,50" stroke={teal} strokeWidth="1" />
        <path
          d="M48,60 L48,42 M42,48 L48,42 L54,48"
          stroke={navy}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M35,75 C50,82 70,78 80,68" stroke={teal} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="62" r="1.5" fill={navy} />
        <circle cx="23" cy="68" r="1.5" fill={navy} />
        <circle cx="28" cy="72" r="1.5" fill={navy} />
        <circle cx="25" cy="65" r="1" fill={navy} opacity="0.5" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="text-2xl font-bold tracking-tight">
            <span style={{ color: navy }}>Digi</span>
            <span style={{ color: teal }}>Flow</span>
          </div>
          <div className="text-[8px] tracking-[0.2em] font-medium mt-1 uppercase text-slate-400">
            Digital Minimalism
          </div>
        </div>
      )}
    </div>
  )
}

const Header = () => {
  const { language, setLanguage, t } = useLanguage()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo className="h-14" />

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-sm font-semibold text-slate-600 hover:text-[#82cec4] transition-colors uppercase tracking-wider"
          >
            {t.nav.services}
          </a>
          <a
            href="#privacy"
            className="text-sm font-semibold text-slate-600 hover:text-[#82cec4] transition-colors uppercase tracking-wider"
          >
            {t.nav.privacy}
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-slate-600 hover:text-[#82cec4] transition-colors uppercase tracking-wider"
          >
            {t.nav.contact}
          </a>

          <button
            onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
            className="flex items-center space-x-1 text-xs font-bold px-3 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors uppercase"
          >
            <Globe className="w-3 h-3" />
            <span>{language === "tr" ? "EN" : "TR"}</span>
          </button>

          <a
            href="https://wa.me/905355646598"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#2c4266] text-white text-sm font-bold rounded-xl hover:bg-[#1a2b45] transition-all shadow-lg shadow-slate-200 uppercase tracking-widest"
          >
            {t.nav.cta}
          </a>
        </nav>

        <button className="md:hidden text-[#2c4266]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

const Hero = () => {
  const { t } = useLanguage()
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden relative bg-gradient-to-b from-[#d4eeeb] via-[#e8f5f3] to-[#f0f9f8]">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#2c4266] mb-2 tracking-tight leading-tight">
          {t.hero.title}
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#82cec4] mb-8 tracking-tight leading-tight">
          {t.hero.subtitle}
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-12 font-normal max-w-xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <a
            href="#services"
            className="w-full px-10 py-5 bg-[#2c4266] text-white font-bold rounded-2xl hover:bg-[#1a2b45] transition-all text-base uppercase tracking-widest text-center"
          >
            {t.hero.getStarted}
          </a>
          <a
            href="#privacy"
            className="w-full px-10 py-5 bg-white text-[#2c4266] font-semibold rounded-2xl border-2 border-slate-200 hover:bg-slate-50 transition-all text-base text-center"
          >
            {t.hero.learnMore}
          </a>
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  const { t } = useLanguage()
  const services = [
    { title: t.services.gallery.title, desc: t.services.gallery.desc, icon: Camera, color: "bg-sky-50" },
    { title: t.services.inbox.title, desc: t.services.inbox.desc, icon: Mail, color: "bg-sky-50" },
    { title: t.services.cloud.title, desc: t.services.cloud.desc, icon: Cloud, color: "bg-sky-50" },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c4266] mb-4">{t.services.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">{t.services.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl border border-slate-100 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-100 transition-all group bg-white"
            >
              <div
                className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-8 h-8 text-[#82cec4]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Pricing = () => {
  const { t, language } = useLanguage()
  const plans = [
    {
      name: "Mini",
      price: "499",
      features:
        language === "tr"
          ? ["Gallery Detox (Son 6 ay)", "Hızlı Temizlik Rehberi", "Tek Cihaz Desteği", "E-posta ile Destek"]
          : ["Gallery Detox (Last 6 months)", "Quick Clean Guide", "Single Device Support", "Email Support"],
      highlight: false,
    },
    {
      name: "Standard",
      price: "999",
      features:
        language === "tr"
          ? ["Tüm Galeri Temizliği", "Inbox Zero Kurulumu", "Cloud Klasörleme (Temel)", "Öncelikli Destek"]
          : ["Full Gallery Clean", "Inbox Zero Setup", "Cloud Folder Org (Basic)", "Priority Support"],
      highlight: true,
    },
    {
      name: "Full Flow",
      price: "1.799",
      features:
        language === "tr"
          ? ["Sınırsız Galeri & Cloud", "Tüm E-posta Hesapları", "Aylık Bakım Programı", "7/24 VIP Destek Hattı"]
          : ["Unlimited Gallery & Cloud", "All Email Accounts", "Monthly Maintenance", "24/7 VIP Support"],
      highlight: false,
    },
  ]

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c4266] mb-4">{t.pricing.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">{t.pricing.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-[32px] transition-all duration-300 flex flex-col ${
                plan.highlight
                  ? "bg-[#2c4266] text-white border-4 border-[#82cec4] shadow-2xl shadow-[#2c4266]/20 scale-105 z-10"
                  : "bg-white text-slate-900 border border-slate-200 hover:border-[#82cec4]/50 hover:shadow-xl"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#82cec4] text-[#2c4266] text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  {t.pricing.mostPopular}
                </span>
              )}
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-black">{"₺" + plan.price}</span>
                <span className={`ml-1 text-sm ${plan.highlight ? "text-slate-300" : "text-slate-400"}`}>
                  /{t.pricing.perTime}
                </span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-[#82cec4]" : "text-[#2c4266]"}`} />
                    <span className={`text-sm font-medium ${plan.highlight ? "text-slate-100" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-transform active:scale-95 ${
                  plan.highlight
                    ? "bg-white text-[#2c4266] hover:bg-slate-100"
                    : "bg-[#2c4266] text-white hover:bg-[#1a2b45] shadow-lg shadow-[#2c4266]/20"
                }`}
              >
                {t.pricing.buy}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  const { language, t } = useLanguage()
  const reviews = [
    {
      name: "Selim Yilmaz",
      role: language === "tr" ? "Girisimci" : "Entrepreneur",
      quote:
        language === "tr"
          ? "DigiFlow sayesinde galerimdeki 5000 gereksiz görselden kurtuldum. Artık aradığımı saniyeler içinde buluyorum."
          : "Thanks to DigiFlow, I got rid of 5000 unnecessary images in my gallery. Now I find what I'm looking for in seconds.",
    },
    {
      name: "Ayse Demir",
      role: language === "tr" ? "Pazarlama Müdürü" : "Marketing Manager",
      quote:
        language === "tr"
          ? "Inbox Zero hayaldi, DigiFlow ile gerçek oldu. E-posta kutum artık bir stres kaynağı değil."
          : "Inbox Zero was a dream, it became reality with DigiFlow. My inbox is no longer a source of stress.",
    },
    {
      name: "James Wilson",
      role: "Software Developer",
      quote:
        language === "tr"
          ? "Dijital düzenleme konusunda en iyisi. Bulut kurulum hizmeti uzaktan çalışan ekipler için hayat kurtarıcı."
          : "Digital organization at its best. The Cloud Setup service is a lifesaver for remote teams.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c4266] mb-4">{t.testimonials.title}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">{t.testimonials.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div key={index} className="p-10 rounded-[32px] bg-sky-50/30 border border-sky-100 flex flex-col relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute top-6 right-8 w-10 h-10 text-sky-200"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              </svg>
              <p className="text-slate-700 italic font-medium mb-8 relative z-10">{'"' + item.quote + '"'}</p>
              <div className="mt-auto">
                <p className="font-black text-slate-900">{item.name}</p>
                <p className="text-xs font-bold text-[#82cec4] uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Privacy = () => {
  const { t } = useLanguage()
  return (
    <section id="privacy" className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-full mb-8">
          <Shield className="w-10 h-10 text-emerald-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-[#2c4266] mb-6 uppercase tracking-tight">
          {t.privacy.title}
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed mb-12 font-medium">{t.privacy.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl">
            <Lock className="w-6 h-6 text-[#82cec4] mt-1" />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">{t.privacy.encrypted}</h4>
              <p className="text-sm text-slate-500 font-medium">{t.privacy.encryptedDesc}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl">
            <EyeOff className="w-6 h-6 text-[#82cec4] mt-1" />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">{t.privacy.zeroTracking}</h4>
              <p className="text-sm text-slate-500 font-medium">{t.privacy.zeroTrackingDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  const { t, language } = useLanguage()
  const waMsg =
    language === "tr"
      ? "Merhaba, DigiFlow servisleri hakkında bilgi almak istiyorum."
      : "Hi, I would like to get information about DigiFlow services."
  return (
    <footer id="contact" className="bg-[#f8fafc] text-slate-900 pt-24 pb-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2c4266] mb-8">{t.footer.ctaTitle}</h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto text-lg font-medium">{t.footer.ctaDesc}</p>
          <a
            href={`https://wa.me/905355646598?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-12 py-7 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-[32px] transition-all hover:scale-105 shadow-2xl shadow-emerald-500/30 text-xl tracking-tight"
          >
            <MessageCircle className="w-8 h-8" />
            <span>{t.footer.whatsapp}</span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-12">
          <Logo className="h-10 mb-6 md:mb-0" textColor="dark" />
          <div className="text-slate-400 text-sm font-medium">
            {"© " + new Date().getFullYear() + " DigiFlow. " + t.footer.rights}
          </div>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-[#82cec4] transition-colors font-medium">
              Instagram
            </a>
            <a href="#" className="text-slate-400 hover:text-[#82cec4] transition-colors font-medium">
              LinkedIn
            </a>
            <a href="#" className="text-slate-400 hover:text-[#82cec4] transition-colors font-medium">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <Pricing />
          <Testimonials />
          <Privacy />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
