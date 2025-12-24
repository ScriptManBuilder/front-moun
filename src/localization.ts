export enum LOCALES {
  ENGLISH = 'en',
  RUSSIAN = 'ru', 
  UKRAINIAN = 'uk',
}

export interface HeaderLocaleContent {
  logo: string;
  subtitle: string;
  language: string;
  contactUs: string;
}

export interface HeroLocaleContent {
  title: string;
  subtitle: string;
  cta: string;
}

export interface ServiceCardContent {
  title: string;
  description: string;
  price: string;
  button: string;
}

export interface ServicesLocaleContent {
  title: string;
  cards: {
    onePageWebsite: ServiceCardContent;
    onlineStore: ServiceCardContent;
    portfolioSite: ServiceCardContent;
    customProgram: ServiceCardContent;
    landingPage: ServiceCardContent;
    customWebsite: ServiceCardContent;
  };
  pricePrefix: string;
}

export interface FeatureContent {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsLocaleContent {
  title: string;
  features: {
    skilledTeam: FeatureContent;
    tailoredSolutions: FeatureContent;
    realWorldExperience: FeatureContent;
    alwaysEvolving: FeatureContent;
    transparentProcess: FeatureContent;
    smartTechnology: FeatureContent;
  };
}

export interface OurApproachLocaleContent {
  title: string;
  subtitle: string;
  steps: {
    websiteCreation: FeatureContent;
    seoOptimization: FeatureContent;
    promotionSetup: FeatureContent;
    salesGrowth: FeatureContent;
    technicalSupport: FeatureContent;
    analyticsReporting: FeatureContent;
  };
  presentation: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export interface OurStackLocaleContent {
  title: string;
  subtitle: string;
  portfolio: {
    title: string;
  };
}

export interface DiscussLocaleContent {
  title: string;
  subtitle: string;
  form: {
    namePlaceholder: string;
    phonePlaceholder: string;
    commentPlaceholder: string;
    additionalServices: string;
    servicesSelected: string;
    submitButton: string;
    countrySearchPlaceholder: string;
    phoneError: string;
    formError: string;
    phoneOnlyNumbers: string;
  };
  services: {
    webDesign: string;
    development: string;
    seoOptimization: string;
    digitalMarketing: string;
    technicalSupport: string;
  };
  alerts: {
    success: string;
    error: string;
    rateLimitError: string;
  };
}

export interface RoadmapLocaleContent {
  mainTitle: string;
  subTitle: string;
  description: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
  consultation: {
    qualityGuarantee: string;
    workForResults: string;
    teamOfExperts: string;
    yourSuccess: string;
  };
}

export interface OrderButtonLocaleContent {
  signUpConsultation: string;
}

export interface ContactModalLocaleContent {
  title: {
    mainText: string;
    subText: string;
  };
  form: {
    namePlaceholder: string;
    phonePlaceholder: string;
    commentPlaceholder: string;
    additionalServices: string;
    countrySearchPlaceholder: string;
    phoneOnlyNumbers: string;
    sending: string;
    send: string;
  };
  services: {
    seoOptimization: string;
    webDesign: string;
    websiteDevelopment: string;
    digitalMarketing: string;
    consultations: string;
  };
  messages: {
    successSent: string;
    errorOccurred: string;
    serverError: string;
  };
  telegram: {
    orChooseMessenger: string;
    telegramButton: string;
  };
}

export interface CalculatorLocaleContent {
  title: string;
  subtitle: string;
  siteType: {
    label: string;
    options: {
      single: string;
      landing: string;
      business: string;
      corporate: string;
      ecommerce: string;
      custom: string;
    };
  };
  pageCount: {
    label: string;
    unit: string;
  };
  design: {
    label: string;
    options: {
      template: string;
      unique: string;
      premium: string;
    };
  };
  additionalServices: {
    label: string;
    options: {
      support: string;
      seo: string;
      content: string;
      analytics: string;
    };
  };
  result: {
    title: string;
    onetime: string;
    disclaimer: string;
    button: string;
  };
}

export interface FAQQuestionContent {
  question: string;
  answer: string;
}

export interface FAQQuoteContent {
  text: string;
  author: string;
}

export interface FAQLocaleContent {
  title: string;
  subtitle: string;
  questions: {
    developmentTime: FAQQuestionContent;
    developmentStages: FAQQuestionContent;
    maintenanceSupport: FAQQuestionContent;
    technologiesUsed: FAQQuestionContent;
    projectChanges: FAQQuestionContent;
  };
  quote: FAQQuoteContent;
}

export interface AlertLocaleContent {
  success: {
    title: string;
    messageSubmitted: string;
  };
  error: {
    title: string;
    messageNotSubmitted: string;
    rateLimitError: string;
  };
  warning: {
    title: string;
  };
  info: {
    title: string;
  };
}

export interface FooterLocaleContent {
  copyright: string;
  supportEmail: string;
  contactEmail: string;
  contactDescription: string;
  supportDescription: string;
  serviceArea: string;
  contactTitle: string;
  contactSubtitle: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  subscribeButton: string;
  newsletterSuccess: string;
  connectWithUs: string;
  trustBadges: string;
  privacyPolicy: string;
  links: string;
  mainPage: string;
  faq: string;
  calculatePrice: string;
  order: string;
  consultation: string;
}

export interface PrivacyPolicyLocaleContent {
  title: string;
  lastUpdated: string;
  backToHome: string;
  introduction: {
    title: string;
    text: string;
  };
  dataCollection: {
    title: string;
    text: string;
    items: {
      email: string;
      emailDesc: string;
      contact: string;
      contactDesc: string;
      usage: string;
      usageDesc: string;
    };
  };
  dataUse: {
    title: string;
    text: string;
    items: {
      respond: string;
      newsletter: string;
      improve: string;
      legal: string;
    };
  };
  dataProtection: {
    title: string;
    text: string;
  };
  sharing: {
    title: string;
    text: string;
  };
  rights: {
    title: string;
    text: string;
    items: {
      access: string;
      correct: string;
      delete: string;
      unsubscribe: string;
    };
  };
  cookies: {
    title: string;
    text: string;
  };
  contact: {
    title: string;
    text: string;
  };
}

export interface LocaleContent {
  header: HeaderLocaleContent;
  hero: HeroLocaleContent;
  services: ServicesLocaleContent;
  whyChooseUs: WhyChooseUsLocaleContent;
  ourApproach: OurApproachLocaleContent;
  ourStack: OurStackLocaleContent;
  discuss: DiscussLocaleContent;
  roadmap: RoadmapLocaleContent;
  orderButton: OrderButtonLocaleContent;
  contactModal: ContactModalLocaleContent;
  calculator: CalculatorLocaleContent;
  faq: FAQLocaleContent;
  alert: AlertLocaleContent;
  footer: FooterLocaleContent;
  privacyPolicy: PrivacyPolicyLocaleContent;
}

// Функция для получения локализации из локальных файлов
export const getLocaleContent = async (locale: LOCALES): Promise<LocaleContent | null> => {
  try {
    // Импортируем JSON файлы динамически
    const localeData = await import(`./locales/${locale}.json`);
    return localeData.default;
  } catch (error) {
    console.error('Error loading localization data:', error);
    return null; 
  }
};
