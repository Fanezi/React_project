import React from 'react'
import { WebsiteRights, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
         <FooterLinksContainer>
           <FooterLinksWrapper>
              <FooterLinksItems>
                 <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to="/signin">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Careers</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                 <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/signin">Submit Video</FooterLink>
                    <FooterLink to="/signin">Ambassadors</FooterLink>
                    <FooterLink to="/signin">Agency</FooterLink>
                    <FooterLink to="/signin">Influencer</FooterLink>
              </FooterLinksItems>
           </FooterLinksWrapper>
           <FooterLinksWrapper>
           <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                 <FooterLink to="/signin">Contact</FooterLink>
                 <FooterLink to="/signin">Support</FooterLink>
                 <FooterLink to="/signin">Sponserships</FooterLink> 
           </FooterLinksItems>
           <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                 <FooterLink to="/signin">Instagram</FooterLink>
                 <FooterLink to="/signin">Facebook</FooterLink>
                 <FooterLink to="/signin">Twitter</FooterLink> 
           </FooterLinksItems>
           </FooterLinksWrapper>
         </FooterLinksContainer>
        <WebsiteRights>Bongwe Bank &copy; 2023. All Right Reserved.</WebsiteRights> 
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
