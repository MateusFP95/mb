import { useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registrationSchema = () =>
  yup.object().shape({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    type: yup.string().required('Tipo de pessoa é obrigatório'),
    nome: yup.string().when("type", {
      is: "fisica",
      then: () => yup.string().required('Nome é obrigatório'),
    }),
    cpf: yup.string().when("type", {
      is: "fisica",
      then: () => yup.string().required('CPF é obrigatório para pessoa fisica')
      .test("min", "Seu CPF deve ter pelo menos 11 caracteres", (value) => { return value && value.length < 14 ? false : true; })
    }),
    dataNascimento: yup.string().when("type", {
      is: "fisica",
      then: () => yup.string().required('Data de nascimento é obrigatória'),
    }),
    telefone: yup.string().required('Telefone é obrigatório'),
    razaoSocial: yup.string().when('type', {
      is: 'juridica',
      then: () => yup.string().required('Razão social é obrigatória'),
    }),
    cnpj: yup.string().when('type', {
      is: 'juridica',
      then: () => yup.string().required('CNPJ é obrigatório')
      .test("min", "Seu CNPJ deve ter pelo menos 14 caracteres", (value) => { return value && value.length < 18 ? false : true; }),
    }),
    dataAbertura: yup.string().when('type', {
      is: 'juridica',
      then: () => yup.string().required('Data de abertura é obrigatória'),
    }),
    senha: yup.string()
    .required('Senha é obrigatória')
    .test("min", "Sua senha deve ter pelo menos 8 caracteres", (value) => { return value && value.length >= 8 ? true : false; }
    ),
  });

export const useRegistrationSchema = () => {
  return yupResolver(useMemo(() => registrationSchema(), []));
};
