import { useFormContext } from '../../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';
import { maskCPF, maskPhone } from '../../../utils/masks';
import MaskedInput from '../../../components/MaskedInput';
import { LabelInput, LabelStep, Title } from '../../../components/Title/input';
import Button from '../../../components/Button';
import { CLASSNAMES } from '../../../utils/constants';

const Step2Fisica = () => {
  const { prevStep, nextStep } = useFormContext();
  const { watch } = useRHFContext();

  const { nome, cpf, dataNascimento, telefone } = watch();
  const allFieldsValid = nome && cpf && cpf.length === 14 && dataNascimento && telefone;

  return (
    <div className="max-w-md mx-auto p-4">
      <LabelStep text="2" />
      <Title text="Pessoa Física" />
      <div>
        <div className="mb-4">
          <LabelInput text="Nome" />
          <MaskedInput
            name="nome"
          />
        </div>
        <div className="mb-4">
          <LabelInput text="CPF" />
          <MaskedInput
            name="cpf"
            mask={maskCPF}
            maxLength={14}
          />
        </div>
        <div className="mb-4">
          <LabelInput text="Data de nascimento" />
          <MaskedInput
            name="dataNascimento"
            type="date"
          />
        </div>
        <div className="mb-4">
          <LabelInput text="Telefone" />
          <MaskedInput
            name="telefone"
            type="tel"
            mask={maskPhone}
            placeholder="(XX) xxxxx-xxxx"
            maxLength={15}
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
            onClick={nextStep}
            text="Continuar"
            disabled={!allFieldsValid}
            className={`${CLASSNAMES.buttonContinue} ${!allFieldsValid ? CLASSNAMES.notAllowed : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2Fisica;