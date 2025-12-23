import React, { useState } from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterTop,
  FooterLeft,
  FooterCenter,
  FooterRight,
  ServiceArea,
  ContactSection,
  ContactTitle,
  ContactSubtitle,
  ContactEmail,
  EmailDescription,
  SocialSection,
  SocialTitle,
  NewsletterSection,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterForm,
  NewsletterInput,
  SubscribeButton,
  SocialIcons,
  FooterIconLink,
  FooterBottom,
  Copyright,
  TrustBadges,
} from "../assets/styles/footer.style";
import { useLocale } from "../LocaleContext";
import CustomAlert from "./customAlert";
import ContactModal from "./ContactModal";

import { FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { SiTiktok, SiThreads } from "react-icons/si";

const Footer: React.FC = () => {
  const { localeContent } = useLocale();
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
      
      if (!botToken || !chatId) {
        console.error('Telegram credentials not found in environment variables');
        setAlertType('error');
        setShowAlert(true);
        return;
      }

      const message = `📧 New Newsletter Subscription\n\nEmail: ${email}`;
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setAlertType('success');
        setShowAlert(true);
        setEmail("");
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      setAlertType('error');
      setShowAlert(true);
    }
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTop>
          <FooterLeft>
            <ServiceArea>
              {localeContent?.footer.serviceArea || "High-quality web development for clients in Ukraine, USA & Europe"}
            </ServiceArea>
            
            <ContactSection>
              <ContactTitle>
                {localeContent?.footer.contactTitle || "Have an idea or need a reliable digital partner?"}
              </ContactTitle>
              <ContactSubtitle>
                {localeContent?.footer.contactSubtitle || "We help businesses design, build, and launch modern websites that are fast, scalable, and tailored to real business goals."}
              </ContactSubtitle>
              
              <div>
                <ContactEmail as="div">
                  ✉️ {localeContent?.footer.contactEmail || "contact@mounweb.com"}
                </ContactEmail>
                <EmailDescription>
                  {localeContent?.footer.contactDescription || "New projects & collaborations"}
                </EmailDescription>
              </div>

              <div>
                <ContactEmail as="div">
                  ⚙️ {localeContent?.footer.supportEmail || "support@mounweb.com"}
                </ContactEmail>
                <EmailDescription>
                  {localeContent?.footer.supportDescription || "Ongoing projects & client support"}
                </EmailDescription>
              </div>
            </ContactSection>
          </FooterLeft>

          <FooterCenter>
            <ContactSection>
              <ContactTitle>
                {localeContent?.footer.links || "Links"}
              </ContactTitle>
              <div>
                <EmailDescription as="a" href="#top" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  {localeContent?.footer.mainPage || "Main Page"}
                </EmailDescription>
              </div>
                   <div>
                <EmailDescription as="a" href="#calculator" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  {localeContent?.footer.calculatePrice || "Calculate Price"}
                </EmailDescription>
              </div>
                <div>
                <EmailDescription as="a" href="#roadmap" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  {localeContent?.footer.consultation || "Consultation"}
                </EmailDescription>
              </div>
                   <div>
                <EmailDescription 
                  as="button" 
                  onClick={() => setIsModalOpen(true)}
                  style={{ 
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'inherit'
                  }}
                >
                  {localeContent?.footer.order || "Order"}
                </EmailDescription>
              </div>
            
              <div>
                <EmailDescription as="a" href="#faq" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  {localeContent?.footer.faq || "FAQ"}
                </EmailDescription>
              </div>
         
         
              <div>
                <EmailDescription as="a" href="/privacy-policy" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  {localeContent?.footer.privacyPolicy || "Privacy Policy"}
                </EmailDescription>
              </div>
            </ContactSection>
          </FooterCenter>

          <FooterRight>
            <NewsletterSection>
              <NewsletterTitle>
                {localeContent?.footer.newsletterTitle || "Stay Updated"}
              </NewsletterTitle>
              <NewsletterDescription>
                {localeContent?.footer.newsletterDescription || "Join our newsletter to get the latest marketing tips and industry insights delivered straight to your inbox."}
              </NewsletterDescription>
              <NewsletterForm onSubmit={handleSubscribe}>
                <NewsletterInput
                  type="email"
                  placeholder={localeContent?.footer.newsletterPlaceholder || "Enter your email address"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <SubscribeButton type="submit">
                  {localeContent?.footer.subscribeButton || "Subscribe"}
                </SubscribeButton>
              </NewsletterForm>
            </NewsletterSection>

            <SocialSection>
              <SocialTitle>{localeContent?.footer.connectWithUs || "Connect with us"}</SocialTitle>
              <SocialIcons>
                <FooterIconLink href="https://www.instagram.com/moun_digital_agency" target="_blank" rel="noopener noreferrer">
                  {React.createElement(FaInstagram as any)}
                </FooterIconLink>
                <FooterIconLink href="https://www.threads.com/@moun_digital_agency" target="_blank" rel="noopener noreferrer">
                  {React.createElement(SiThreads as any)}
                </FooterIconLink>
                <FooterIconLink href="https://www.linkedin.com/company/digital-agency-moun/" target="_blank" rel="noopener noreferrer">
                  {React.createElement(FaLinkedin as any)}
                </FooterIconLink>
                <FooterIconLink href="https://www.tiktok.com/@moun.digital.agen" target="_blank" rel="noopener noreferrer">
                  {React.createElement(SiTiktok as any)}
                </FooterIconLink>
                <FooterIconLink href="https://t.me/moun_digital" target="_blank" rel="noopener noreferrer">
                  {React.createElement(FaTelegramPlane as any)}
                </FooterIconLink>
              </SocialIcons>
            </SocialSection>
          </FooterRight>
        </FooterTop>

        <FooterBottom>
          <Copyright>{localeContent?.footer.copyright || "© 2025 Moun Digital Agency. All rights reserved."}</Copyright>
          <TrustBadges>
            {localeContent?.footer.trustBadges || "Building digital solutions for clients worldwide • Long-term partnerships"}
          </TrustBadges>
        </FooterBottom>
      </FooterContent>

      <CustomAlert
        isVisible={showAlert}
        type={alertType}
        message={localeContent?.footer?.newsletterSuccess || "Thank you for subscribing! You'll receive our latest updates."}
        duration={5000}
        onClose={() => setShowAlert(false)}
      />

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </FooterWrapper>
  );
};

export default Footer;