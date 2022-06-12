import { Container } from "../../styles/globalStyle";
import {
  ContactSection,
  ContactWrapper,
  EmailLink,
  Text,
  Title,
} from "./ContactStyles";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <ContactWrapper>
          <Title>Get In Touch</Title>
          <Text>
            I’m currently looking for a better new opportunity, my inbox is
            always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </Text>
          <EmailLink
            href="mailto:itechtranss@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hello
          </EmailLink>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};
export default Contact;
