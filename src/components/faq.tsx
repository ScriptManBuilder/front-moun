import React, { useState } from 'react';
import {
  FAQSection,
  FAQContainer,
  FAQTitle,
  FAQSubtitle,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQIcon,
  FAQAnswer,
  FAQAnswerContent,
  QuoteSection,
  QuoteContainer,
  QuoteText,
  QuoteAuthor
} from '../assets/styles/faq.styles';
import { useLocale } from '../LocaleContext';

interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { localeContent } = useLocale();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqData: FAQItemData[] = [
    {
      id: 'development-time',
      question: localeContent?.faq?.questions?.developmentTime?.question || 'How long does it take to create a website?',
      answer: localeContent?.faq?.questions?.developmentTime?.answer || 'Development time depends on project complexity. A simple landing page can be ready in 1-2 weeks, while a complex e-commerce site may take 1-2 months.'
    },
    {
      id: 'development-stages',
      question: localeContent?.faq?.questions?.developmentStages?.question || 'What are the website development stages?',
      answer: localeContent?.faq?.questions?.developmentStages?.answer || 'Development includes: requirements analysis, design mockup creation, layout, functionality programming, testing, content filling, and project launch.'
    },
    {
      id: 'maintenance-support',
      question: localeContent?.faq?.questions?.maintenanceSupport?.question || 'Do you provide website maintenance services?',
      answer: localeContent?.faq?.questions?.maintenanceSupport?.answer || 'Yes, we provide a full range of technical support services: content updates, backups, security monitoring, and technical issue resolution.'
    },
    {
      id: 'technologies-used',
      question: localeContent?.faq?.questions?.technologiesUsed?.question || 'What technologies do you use?',
      answer: localeContent?.faq?.questions?.technologiesUsed?.answer || 'We work with modern technologies: JavaScript, TypeScript, React, Node.js, Nest.js, MongoDB, PostgreSQL and many others depending on project needs.'
    },
    {
      id: 'project-changes',
      question: localeContent?.faq?.questions?.projectChanges?.question || 'Can I make changes to the project during development?',
      answer: localeContent?.faq?.questions?.projectChanges?.answer || 'Absolutely! We are always open to client changes and suggestions. It\'s important to discuss changes in advance so they don\'t affect timelines and budget.'
    }
  ];

  const toggleItem = (itemId: string) => {
    setOpenItem(prev => prev === itemId ? null : itemId);
  };

  return (
    <FAQSection>
      <FAQContainer>
        <FAQTitle>
          {localeContent?.faq?.title || 'FAQ'}
        </FAQTitle>
        <FAQSubtitle>
          {localeContent?.faq?.subtitle || 'Answers to the most common questions about website development'}
        </FAQSubtitle>
        
        <FAQList>
          {faqData.map((item) => (
            <FAQItem key={item.id}>
              <FAQQuestion 
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
              >
                <span>{item.question}</span>
                <FAQIcon isOpen={openItem === item.id} />
              </FAQQuestion>
              
              <FAQAnswer isOpen={openItem === item.id}>
                <FAQAnswerContent>
                  {item.answer}
                </FAQAnswerContent>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>

        <QuoteSection>
          <QuoteContainer>
            <QuoteText>
              "{localeContent?.faq?.quote?.text || "Together with us, let's elevate your project to MOUN. Ready to take the step?"}"
            </QuoteText>
            <QuoteAuthor>
              {localeContent?.faq?.quote?.author || "MOUN Digital Team"}
            </QuoteAuthor>
          </QuoteContainer>
        </QuoteSection>
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
