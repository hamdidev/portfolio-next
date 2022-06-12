import {
  Emaillink,
  EmailWrapper,
  FooterContainer,
  FooterCredit,
  Footertext,
  LeftSide,
  RightSide,
  SocialIconLink,
  SocialItem,
  SocialList,
  SvgIcon,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <RightSide>
        <EmailWrapper>
          <Emaillink href="mailto:hello@muhammedhalaf.com">
            hello@muhammedhalaf.com
          </Emaillink>
        </EmailWrapper>
      </RightSide>

      <FooterCredit>
        <Footertext> Built by M.HALAF</Footertext>
      </FooterCredit>

      <LeftSide>
        <SocialList>
          <SocialItem>
            <SocialIconLink
              href="https://github.com/hamdidev"
              target="blank"
              aria-label="Github"
            >
              <SvgIcon src="/github.svg" alt="Github Icon" />
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink
              href="https://www.linkedin.com/in/mohammed-khalafs/"
              target="blank"
              aria-label="LinkedIn"
            >
              <SvgIcon src="/images/linkedin.svg" alt="Linkedin Icon" />
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink
              href="https://twitter.com/sadSYRguy/"
              target="blank"
              aria-label="Twitter"
            >
              <SvgIcon src="/images/twitter.svg" alt="Twitter Icon" />
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink
              href="https://www.instagram.com/"
              target="blank"
              aria-label="Instagram"
            >
              <SvgIcon src="/images/instagram.svg" alt="Instagram Icon" />
            </SocialIconLink>
          </SocialItem>
        </SocialList>
      </LeftSide>
    </FooterContainer>
  );
};

export default Footer;
