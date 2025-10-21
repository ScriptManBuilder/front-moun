import React, { useState } from "react";
import { useLocale } from "../LocaleContext";
import {
  ApproachSection,
  ApproachTitle,
  ApproachSubtitle,
  ApproachSteps,
  ApproachStep,
  StepIcon,
  StepTitle,
  StepDescription,
  StepArrow,
  PresentationSection,
  PresentationTitle,
  PresentationDescription,
  PresentationButton
} from "../assets/styles/ourApproach.styles";

const OurApproach: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const { localeContent } = useLocale();

  if (!localeContent?.ourApproach) {
    return <div>Loading...</div>;
  }

  const { title, subtitle, steps } = localeContent.ourApproach;

  // Преобразуем объект steps в массив для отображения
  const stepsArray = [
    steps.websiteCreation,
    steps.seoOptimization,
    steps.promotionSetup,
    steps.salesGrowth,
    steps.technicalSupport,
    steps.analyticsReporting,
  ];

  return (
    <ApproachSection>
      <ApproachTitle dangerouslySetInnerHTML={{ __html: title || "Our Effective <b>Approach</b>" }} />
      <ApproachSubtitle>
        {subtitle || "Steps that help you create a project without unnecessary stress"}
      </ApproachSubtitle>
      <ApproachSteps>
        {stepsArray.map((step, idx) => {
          const isActive = activeIdx === idx;
          return (
            <ApproachStep
              key={idx}
              $active={isActive}
              onClick={() => setActiveIdx(isActive ? null : idx)}
            >
              <StepIcon $active={isActive}>{step.icon}</StepIcon>
              <StepTitle dangerouslySetInnerHTML={{ __html: step.title || "" }} />
              <StepDescription $active={isActive}>
                {step.description}
              </StepDescription>
              <StepArrow $active={isActive}>&#8250;</StepArrow>
            </ApproachStep>
          );
        })}
      </ApproachSteps>
      
      {/* Presentation Section */}
      <PresentationSection>
        <PresentationTitle 
          dangerouslySetInnerHTML={{ 
            __html: localeContent.ourApproach.presentation?.title || "Discover Our <span>Full Story</span>" 
          }} 
        />
        <PresentationDescription>
          {localeContent.ourApproach.presentation?.description || 
            "Want to learn more about MOUN Digital Agency? Download our complete presentation with detailed information about our services, portfolio, and success stories."}
        </PresentationDescription>
        <PresentationButton 
          href="https://raw.githubusercontent.com/ScriptManBuilder/images4DigitalAgencyMOUN/main/MounMainPresentation.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pdf-icon">📄</span>
          {localeContent.ourApproach.presentation?.buttonText || "Download Presentation"}
        </PresentationButton>
      </PresentationSection>
    </ApproachSection>
  );
};

export default OurApproach;
