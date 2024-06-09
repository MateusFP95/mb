import { useFormContext } from '../../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';
import { LabelInput, LabelStep, Title } from '../../../components/Title/input';
import MaskedInput from '../../../components/MaskedInput';
import { CLASSNAMES } from '../../../utils/constants';
import Button from '../../../components/Button';

const Step4 = () => {
  const { prevStep } = useFormContext();
  const { getValues } = useRHFContext();

  return (
    <div className="max-w-md mx-auto p-4">
      <LabelStep text="4" />
      <Title text="Revise suas informações" />
      <div>
        <div className="mb-4">
          <LabelInput text="Endereço de e-mail" />
          <MaskedInput
            name="email"
            readOnly
            value={getValues().email}
          />
        </div>
        {getValues().type === 'fisica' && (
          <>
            <div className="mb-4">
              <LabelInput text="Nome" />
              <MaskedInput
                name="nome"
                readOnly
                value={getValues().nome}
              />
            </div>
            <div className="mb-4">
              <LabelInput text="CPF" />
              <MaskedInput
                name="cpf"
                readOnly
                value={getValues().cpf}
              />
            </div>
            <div className="mb-4">
              <LabelInput text="Data de nascimento" />
              <MaskedInput
                name="dataNascimento"
                value={getValues().dataNascimento}
                readOnly
                type="date"
              />
            </div>
          </>
        )}
        {getValues().type === 'juridica' && (
          <>
            <div className="mb-4">
              <LabelInput text="Razão social" />
              <MaskedInput
                name="razaoSocial"
                value={getValues().razaoSocial}
                readOnly
              />
            </div>
            <div className="mb-4">
              <LabelInput text="CNPJ" />
              <MaskedInput
                name="cnpj"
                value={getValues().cnpj}
                readOnly
              />
            </div>
            <div className="mb-4">
              <LabelInput text="Data de abertura" />
              <MaskedInput
                name="dataAbertura"
                type="date"
                value={getValues().dataAbertura}
                readOnly
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <LabelInput text="Telefone" />
          <MaskedInput
            name="telefone"
            type="tel"
            value={getValues().telefone}
            readOnly
          />
        </div>
        <div className="mb-4">
          <LabelInput text="Senha" />
          <MaskedInput
            name="senha"
            type="password"
            value={getValues().senha}
            readOnly
          />
        </div>
        <div className="flex justify-between">
          <Button
            onClick={prevStep}
            text="Voltar"
            className={CLASSNAMES.buttonBack}
          />
          <div className="w-4"></div>
          <Button
            type="submit"
            text="Cadastrar"
            className={CLASSNAMES.buttonContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;