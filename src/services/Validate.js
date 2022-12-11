import * as yup from "yup";
import { useState } from "react";

export async function Validate({
    email,
    name,
    message
}) {
    const [error, setError] = useState(message);

    let schema = yup.object().shape({
      email: yup
        .string("Por favor, insira um e-mail válido!")
        .required("Por favor, insira um e-mail válido!")
        .email("Por favor, insira um e-mail válido!"),
    });

    try {
      await schema.validate({email, name});
      return true;
    } catch (err) {
      setError(err.errors);
      return false;
    }
  }