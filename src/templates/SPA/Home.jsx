import { Button } from "../../components/Button/Button";
import { LoginButton } from "../../components/Menu/LoginButton";
import { NavBar } from "../../components/Menu/NavBar";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { TextGroupComponent } from "../../components/TextGroup/TextGroupComponent";
import { Container } from "../../components/Container/Container";

export const Home = () => {
  return (
    <Container bg="bg-HomeBg">
      <NavBar
        isRouteActive={true}
        dynamicButton={<LoginButton content="Entrar" link="/login" />}
        isArchitectureButtonActive={true}
        logoff={<Button text="Sair" />}
        HomeNavBar={true}
      />
      <SocialMedia />
      <TextGroupComponent />
    </Container>
  );
};
