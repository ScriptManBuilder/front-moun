import React, { useEffect } from "react";
import {
  PrivacyWrapper,
  PrivacyContainer,
  PrivacyTitle,
  PrivacySection,
  SectionTitle,
  SectionText,
  SectionList,
  ListItem,
  BackButton,
} from "../assets/styles/privacyPolicy.styles";
import { useLocale } from "../LocaleContext";

const PrivacyPolicy: React.FC = () => {
  const { localeContent } = useLocale();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PrivacyWrapper>
      <PrivacyContainer>
        <BackButton href="/">← {localeContent?.privacyPolicy?.backToHome || "Back to Home"}</BackButton>
        
        <PrivacyTitle>{localeContent?.privacyPolicy?.title || "Privacy Policy"}</PrivacyTitle>
        
        <SectionText>
          {localeContent?.privacyPolicy?.lastUpdated || "Last updated: December 23, 2025"}
        </SectionText>

        <PrivacySection>
          <SectionTitle>{localeContent?.privacyPolicy?.introduction?.title || "Introduction"}</SectionTitle>
          <SectionText>
            {localeContent?.privacyPolicy?.introduction?.text || 
              "At Moun Digital Agency, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services."}
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>{localeContent?.privacyPolicy?.dataCollection?.title || "Information We Collect"}</SectionTitle>
          <SectionText>
            {localeContent?.privacyPolicy?.dataCollection?.text || "We collect the following types of information:"}
          </SectionText>
          <SectionList>
            <ListItem>
              <strong>{localeContent?.privacyPolicy?.dataCollection?.items?.email || "Email addresses"}</strong> - 
              {localeContent?.privacyPolicy?.dataCollection?.items?.emailDesc || " when you subscribe to our newsletter or submit a contact form"}
            </ListItem>
            <ListItem>
              <strong>{localeContent?.privacyPolicy?.dataCollection?.items?.contact || "Contact information"}</strong> - 
              {localeContent?.privacyPolicy?.dataCollection?.items?.contactDesc || " including name, phone number, and company details when you fill out our contact forms"}
            </ListItem>
            <ListItem>
              <strong>{localeContent?.privacyPolicy?.dataCollection?.items?.usage || "Usage data"}</strong> - 
              {localeContent?.privacyPolicy?.dataCollection?.items?.usageDesc || " such as IP address, browser type, and pages visited"}
            </ListItem>
          </SectionList>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>{localeContent?.privacyPolicy?.dataUse?.title || "How We Use Your Information"}</SectionTitle>
          <SectionText>
            {localeContent?.privacyPolicy?.dataUse?.text || "We use the collected information for:"}
          </SectionText>
          <SectionList>
            <ListItem>{localeContent?.privacyPolicy?.dataUse?.items?.respond || "Responding to your inquiries and providing customer support"}</ListItem>
            <ListItem>{localeContent?.privacyPolicy?.dataUse?.items?.newsletter || "Sending newsletters and marketing communications (only if you've subscribed)"}</ListItem>
            <ListItem>{localeContent?.privacyPolicy?.dataUse?.items?.improve || "Improving our website and services"}</ListItem>
            <ListItem>{localeContent?.privacyPolicy?.dataUse?.items?.legal || "Complying with legal obligations"}</ListItem>
          </SectionList>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>{localeContent?.privacyPolicy?.dataProtection?.title || "Data Protection"}</SectionTitle>
          <SectionText>
            {localeContent?.privacyPolicy?.dataProtection?.text || 
              "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. Your data is stored securely and is only accessible to authorized personnel."}
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>{localeContent?.privacyPolicy?.sharing?.title || "Data Sharing"}</SectionTitle>
          <SectionText>
            {localeContent?.privacyPolicy?.sharing?.text || 
              "We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share your data with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential."}
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>{localeContent?.privacyPolicy?.rights?.title || "Your Rights"}</SectionTitle>
          <SectionText>
            {localeContent?.privacyPolicy?.rights?.text || "You have the right to:"}
          </SectionText>
          <SectionList>
            <ListItem>{localeContent?.privacyPolicy?.rights?.items?.access || "Access the personal data we hold about you"}</ListItem>
            <ListItem>{localeContent?.privacyPolicy?.rights?.items?.correct || "Request correction of inaccurate data"}</ListItem>
            <ListItem>{localeContent?.privacyPolicy?.rights?.items?.delete || "Request deletion of your personal data"}</ListItem>
            <ListItem>{localeContent?.privacyPolicy?.rights?.items?.unsubscribe || "Unsubscribe from our newsletter at any time"}</ListItem>
          </SectionList>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>{localeContent?.privacyPolicy?.cookies?.title || "Cookies"}</SectionTitle>
          <SectionText>
            {localeContent?.privacyPolicy?.cookies?.text || 
              "Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of certain features."}
          </SectionText>
        </PrivacySection>

        <PrivacySection>
          <SectionTitle>{localeContent?.privacyPolicy?.contact?.title || "Contact Us"}</SectionTitle>
          <SectionText>
            {localeContent?.privacyPolicy?.contact?.text || 
              "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:"}<br />
            <strong>support@mounweb.com</strong>
          </SectionText>
        </PrivacySection>
      </PrivacyContainer>
    </PrivacyWrapper>
  );
};

export default PrivacyPolicy;
