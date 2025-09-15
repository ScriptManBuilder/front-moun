import React from "react";
import {
  FooterWrapper,
  FooterTitle,
  FooterIcons,
  FooterIconLink,
} from "../assets/styles/footer.style";

import { FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { SiTiktok, SiThreads } from "react-icons/si";

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterTitle>© 2025 Moun Digital Agency</FooterTitle>
    <FooterIcons>
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
    </FooterIcons>
  </FooterWrapper>
);

export default Footer;