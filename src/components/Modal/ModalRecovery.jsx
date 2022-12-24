import { useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth";
import { Button } from "../Button/Button";
import { FloatLabel } from "../InputComponent/FloatLabel";
import { Text } from "../TextComponent/Text";

export function ModalRecovery({ message, retry }) {
  const { validationNumber } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const [time, setTime] = useState(60);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);

    if (time === 0) {
      setDisabled((disabled) => !disabled);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [time]);

  const handleTimeOut = () => {
    setTime(60);
    setDisabled((disabled) => !disabled);
  };

  const handleChange = (e) => {
    e.target.value == validationNumber && navigate("/newpassword");
  };

  const handleCancel = () => {
    navigate("/login")
  };

  return (
    <section
      className="
        text-center backdrop-blur-md z-20 shadow-innerDefault
        absolute inset-0 px-4 pt-[25vh]
        "
    >
      <Text className="justify-center text-sm py-4 cursor-default first-letter:uppercase">
        {message}
      </Text>
      <Text className="font-thin text-center py-4 cursor-default">
        Recomendo que verifique o spam ou lixo eletrônico.
      </Text>
      {time > 0 && (
        <Text className="font-thin">
          Reenviar E-mail em: <span className="text-violet-500">{time}</span>
        </Text>
      )}
      <Button
        onClick={(e) => {
          retry(e);
          handleTimeOut();
        }}
        disabled={disabled}
        className="mt-4"
        text="Reenviar E-mail"
      />
      <form className="py-8 m-auto md:max-w-[80vw] lg:max-w-2xl">
        <FloatLabel
          floatText="Insira seu número de validação"
          type="text"
          name="email"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <Button title='Voltar para tela de conexão' text='Cancelar' onClick={() => handleCancel()}/>
    </section>
  );
}
