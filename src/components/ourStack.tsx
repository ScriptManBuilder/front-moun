import React, { useState, useEffect } from 'react';
import { useLocale } from '../LocaleContext';
import { 
  StackContainer, 
  LeftSection, 
  RightSection, 
  Title, 
  Subtitle, 
  IconsWrapper, 
  Icon,
  // Portfolio components
  PortfolioSection, 
  PortfolioTitle, 
  PortfolioGrid, 
  PortfolioItem, 
  PortfolioImage 
} from '../assets/styles/ourStack.styles';

const OurStack: React.FC = () => {
  const { localeContent } = useLocale();
  
  // Все изображения из вашего GitHub репозитория
  const allImages = [
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img1.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img1p.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img2.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img2p.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img3.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img3p.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img4.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img4p.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img5.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img5p.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img6.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img6p.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img7p.png',

    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/pizzaJ12.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/calcuat.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/locksmith8.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/bark.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/cointre0.png',

    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/faq.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/moneycase9.png',

   
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/locktg.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/coimtree.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/roadmap.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/lockSmith11.png',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/cards.png'

  ];

  // Объект с соответствием изображений и их URL
  const imageLinks: { [key: string]: string } = {
    // Password Generator
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img1p.png': 'https://password-generator-site-tau.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img2p.png': 'https://password-generator-site-tau.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img3p.png': 'https://password-generator-site-tau.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img4p.png': 'https://password-generator-site-tau.vercel.app/chatbot',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img5p.png': 'https://password-generator-site-tau.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img6p.png': 'https://password-generator-site-tau.vercel.app/contact',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img7p.png': 'https://password-generator-site-tau.vercel.app/',
    // Book Store
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img1.png': 'https://book-st0re.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img2.png': 'https://book-st0re.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img3.png': 'https://book-st0re.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img4.png': 'https://book-st0re.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img5.png': 'https://book-st0re.vercel.app/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/img6.png': 'https://book-st0re.vercel.app/',
    // Cointree
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/coimtree.png': 'https://www.cointree.com/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/cointre0.png': 'https://www.cointree.com/',
    // // QuantaTech
    // 'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/blog3.png': 'https://quantatech.net/',
    // 'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/profile10.png': 'https://quantatech.net/',
    // // MoneyCase
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/moneycase9.png': 'https://moneycase.com.ua/',
    // Locksmith
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/locksmith8.png': 'https://www.locksmithmp.com/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/cards.png': 'https://www.locksmithmp.com/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/locktg.png': 'https://www.locksmithmp.com/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/lockSmith11.png': 'https://www.locksmithmp.com/',
    // Papa John's
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/pizzaJ12.png': 'https://www.papajohns.cl/pizzas/',
    // MounWeb
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/calcuat.png': 'https://mounweb.com/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/roadmap.png': 'https://mounweb.com/',
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/faq.png': 'https://mounweb.com/',
    // Bark
    'https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/bark.png': 'https://bark.com/'
  };

  // Состояние для отслеживания текущего индекса слайдшоу
  const [currentImageSet, setCurrentImageSet] = useState(0);

  // Функция для получения текущих 6 изображений
  const getCurrentImages = () => {
    const result = [];
    for (let i = 0; i < 6; i++) {
      const imageIndex = (currentImageSet + i) % allImages.length;
      const imageUrl = allImages[imageIndex];
      result.push({
        id: i + 1,
        imageUrl: imageUrl,
        linkUrl: imageLinks[imageUrl] || null
      });
    }
    return result;
  };

  // useEffect для автоматической смены изображений каждые 10 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet((prevSet) => (prevSet + 1) % allImages.length);
    }, 5000); // 10 секунд

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [allImages.length]);

  const icons = [
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Nest", src: "https://docs.nestjs.com/assets/logo-small.svg" },
    { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MSSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "JSON", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
   
    { name: "Xml", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    

    { name: "API", src: "https://img.icons8.com/ios-filled/50/000000/api-settings.png" }
  ];

  // Получаем текущие 6 изображений для отображения
  const portfolioItems = getCurrentImages();

  return (
    <>
      <StackContainer>
        <LeftSection>
          <Title>{localeContent?.ourStack?.title || "Development technologies we work with"}</Title>
          <Subtitle>{localeContent?.ourStack?.subtitle || "The power of code is in our developers' hands"}</Subtitle>
        </LeftSection>
        <RightSection>
          <IconsWrapper>
            {icons.map((icon) => (
              <Icon key={icon.name}>
                <img src={icon.src} alt={icon.name} />
                <figcaption>{icon.name}</figcaption>
              </Icon>
            ))}
          </IconsWrapper>
        </RightSection>
      </StackContainer>
        {/* Portfolio Section */}
      <PortfolioSection>
        <PortfolioTitle dangerouslySetInnerHTML={{ 
          __html: localeContent?.ourStack?.portfolio?.title || "What <b>We Create</b>" 
        }} />
        <PortfolioGrid>
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id}>
              {item.linkUrl ? (
                <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                  <PortfolioImage imageUrl={item.imageUrl} />
                </a>
              ) : (
                <PortfolioImage imageUrl={item.imageUrl} />
              )}
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </PortfolioSection>
    </>
  );
};

export default OurStack;