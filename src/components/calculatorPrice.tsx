import React, { useState } from 'react';
import {
  CalculatorSection,
  CalculatorTitle,
  CalculatorSubtitle,
  CalculatorContainer,
  CalculatorForm,
  CalculatorResult,
  FormGroup,
  FormLabel,
  Select,
  SliderContainer,
  Slider,
  SliderLabels,
  SliderValue,
  CheckboxGroup,
  CheckboxItem,
  Checkbox,
  CheckboxLabel,
  CheckboxPrice,
  ResultTitle,
  PriceDisplay,
  PriceLabel,
  Summary,
  SummaryItem,
  GetQuoteButton
} from '../assets/styles/calculatorPrice.styles';
import ContactModal from './ContactModal';
import { useLocale } from '../LocaleContext';

interface AdditionalService {
  id: string;
  name: string;
  price: number;
  unit?: string;
}

const CalculatorPrice: React.FC = () => {
  const { localeContent } = useLocale();
  const [siteType, setSiteType] = useState('business');
  const [pageCount, setPageCount] = useState(5);
  const [designType, setDesignType] = useState('unique');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const siteTypes = [
    { value: 'single', label: localeContent?.calculator.siteType.options.single || 'Single Page Website', basePrice: 200 },
    { value: 'landing', label: localeContent?.calculator.siteType.options.landing || 'Landing Page', basePrice: 300 },
    { value: 'business', label: localeContent?.calculator.siteType.options.business || 'Business Card Site', basePrice: 375 },
    { value: 'corporate', label: localeContent?.calculator.siteType.options.corporate || 'Corporate Website', basePrice: 625 },
    { value: 'ecommerce', label: localeContent?.calculator.siteType.options.ecommerce || 'Online Store', basePrice: 1000 },
    { value: 'custom', label: localeContent?.calculator.siteType.options.custom || 'Complex Project', basePrice: 1500 }
  ];

  const designTypes = [
    { value: 'template', label: localeContent?.calculator.design.options.template || 'Template-based', multiplier: 0.7 },
    { value: 'unique', label: localeContent?.calculator.design.options.unique || 'Individual (unique design)', multiplier: 1 },
    { value: 'premium', label: localeContent?.calculator.design.options.premium || 'Premium Design', multiplier: 1.5 }
  ];

  const additionalServices: AdditionalService[] = [
    { id: 'support', name: localeContent?.calculator.additionalServices.options.support || 'Technical Support', price: 100, unit: '$/month' },
    { id: 'seo', name: localeContent?.calculator.additionalServices.options.seo || 'SEO Optimization', price: 75 },
    { id: 'content', name: localeContent?.calculator.additionalServices.options.content || 'Content Filling', price: 60 },
    { id: 'analytics', name: localeContent?.calculator.additionalServices.options.analytics || 'Analytics Setup', price: 50 }
  ];

  const handleServiceChange = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculatePrice = () => {
    const selectedSiteType = siteTypes.find(type => type.value === siteType);
    const selectedDesignType = designTypes.find(type => type.value === designType);
    
    if (!selectedSiteType || !selectedDesignType) return 0;

    let basePrice = selectedSiteType.basePrice;
    
    // Множник за дизайн
    basePrice *= selectedDesignType.multiplier;
    
    // Доплата за кількість сторінок (більше 5)
    if (pageCount > 5) {
      basePrice += (pageCount - 5) * 50;
    }
    
    // Додаткові послуги
    const servicesPrice = selectedServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
    
    return Math.round(basePrice + servicesPrice);
  };

  const getCurrentSiteType = () => {
    return siteTypes.find(type => type.value === siteType)?.label || '';
  };

  const getCurrentDesignType = () => {
    return designTypes.find(type => type.value === designType)?.label || '';
  };

  return (
    <CalculatorSection>
      <CalculatorTitle>{localeContent?.calculator.title || 'Calculate Website Cost'}</CalculatorTitle>
      <CalculatorSubtitle>
        {localeContent?.calculator.subtitle || 'Specify the parameters of your future website and get an estimated cost'}
      </CalculatorSubtitle>
      <CalculatorContainer>
      <CalculatorForm>
        <FormGroup>
          <FormLabel>{localeContent?.calculator.siteType.label || 'Site Type'}</FormLabel>
          <Select 
            value={siteType} 
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSiteType(e.target.value)}
          >
            {siteTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <FormLabel>{localeContent?.calculator.pageCount.label || 'Number of Pages'}</FormLabel>
          <SliderContainer>
            <Slider
              type="range"
              min="1"
              max="50"
              value={pageCount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = parseInt(e.target.value);
                setPageCount(value);
                // Обновляем CSS переменную для прогресса
                const progress = ((value - 1) / (50 - 1)) * 100;
                e.target.style.setProperty('--slider-progress', `${progress}%`);
              }}
              style={{ '--slider-progress': `${((pageCount - 1) / (50 - 1)) * 100}%` } as React.CSSProperties}
            />
            <SliderLabels>
              <span>1</span>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
              <span>50+</span>
            </SliderLabels>
            <SliderValue>{pageCount} {localeContent?.calculator.pageCount.unit || 'pages'}</SliderValue>
          </SliderContainer>
        </FormGroup>

        <FormGroup>
          <FormLabel>{localeContent?.calculator.design.label || 'Design'}</FormLabel>
          <Select 
            value={designType} 
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDesignType(e.target.value)}
          >
            {designTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <FormLabel>{localeContent?.calculator.additionalServices.label || 'Additional Services'}</FormLabel>
          <CheckboxGroup>
            {additionalServices.map(service => (
              <CheckboxItem key={service.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    onChange={() => handleServiceChange(service.id)}
                  />
                  <CheckboxLabel>{service.name}</CheckboxLabel>
                </div>
                <CheckboxPrice>
                  +${service.price.toLocaleString()} {service.unit || '$'}
                </CheckboxPrice>
              </CheckboxItem>
            ))}
          </CheckboxGroup>
        </FormGroup>
      </CalculatorForm>

      <CalculatorResult>
        <ResultTitle>{localeContent?.calculator.result.title || 'Estimated Cost:'}</ResultTitle>
        <PriceDisplay>${calculatePrice().toLocaleString()}</PriceDisplay>
        <PriceLabel>{localeContent?.calculator.result.onetime || 'one-time'}</PriceLabel>
        <PriceLabel style={{ fontSize: '12px', marginTop: '10px' }}>
          {localeContent?.calculator.result.disclaimer || '* Please confirm the exact cost with the manager'}
        </PriceLabel>

        <Summary>
          <SummaryItem>
            <span>{getCurrentSiteType()}</span>
          </SummaryItem>
          <SummaryItem>
            <span>{pageCount} {localeContent?.calculator.pageCount.unit || 'pages'}</span>
          </SummaryItem>
          <SummaryItem>
            <span>{getCurrentDesignType()}</span>
          </SummaryItem>
          {selectedServices.length > 0 && selectedServices.map(serviceId => {
            const service = additionalServices.find(s => s.id === serviceId);
            if (service) {
              return (
                <SummaryItem key={service.id}>
                  <span>{service.name}</span>
                  <span>+${service.price.toLocaleString()} {service.unit || '$'}</span>
                </SummaryItem>
              );
            }
            return null;
          })}
        </Summary>

        <GetQuoteButton onClick={handleOpenModal}>
          {localeContent?.calculator.result.button || 'Get Commercial Proposal'}
        </GetQuoteButton>
      </CalculatorResult>
    </CalculatorContainer>

    {/* Компонент модального окна с формой */}
    <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </CalculatorSection>
  );
};

export default CalculatorPrice;