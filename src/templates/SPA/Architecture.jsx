import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";

export function Architecture() {
  const navigate = useNavigate();

  const handleArchitecture = () => {
    navigate("/privateloading");
  };

  return (
    <Container id="Architecture" bg='bg-ArchitectureBg'>
      <div className="text-center py-[25vh]">
        <Button
          className="m-2 lg:mx-28 xl:mx-44 2xl:mx-60"
          text="Viajar para Arquitetura"
          onClick={() => handleArchitecture()}
        />
      </div>
    </Container>
  );
}


