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
      then: () => yup.string().required('CPF é obrigatório para pessoa fisica'),
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
      then: () => yup.string().required('CNPJ é obrigatório'),
    }),
    dataAbertura: yup.string().when('type', {
      is: 'juridica',
      then: () => yup.string().required('Data de abertura é obrigatória'),
    }),
    senha: yup.string().required('Senha é obrigatória')
  });

export const useRegistrationSchema = () => {
  return yupResolver(useMemo(() => registrationSchema(), []));
};
