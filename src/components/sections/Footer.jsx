import React from "react";
import styled from "styled-components";
import { MdEmail, MdPhone } from "react-icons/md";

const FooterContainer = styled.div`
  width: 100%;
  padding: 1rem ;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;




const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #RRGGBB
  text-align: center;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text_primary};
  font-size: 0.9rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
       

        <Copyright>&copy; 2024 Hassan Mehmood. All rights reserved.</Copyright>

        <Contact>
          <ContactItem>
            <MdEmail /> hm350074@gmail.com
          </ContactItem>
          <ContactItem>
            <MdPhone /> +92 337 3156161
          </ContactItem>
        </Contact>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;