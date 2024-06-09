import { useFormContext } from '../../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';
import { LabelInput, LabelStep, Title } from '../../../components/Title/input';
import MaskedInput from '../../../components/MaskedInput';
import { maskCNPJ, maskPhone } from '../../../utils/masks';
import Button from '../../../components/Button';
import { CLASSNAMES } from '../../../utils/constants';

const Step2Juridica = () => {
  const { prevStep, nextStep } = useFormContext();
  const { watch } = useRHFContext();

  const { razaoSocial, cnpj, dataAbertura, telefone } = watch();
  const allFieldsValid = razaoSocial && cnpj && cnpj.length === 18 && dataAbertura && telefone;

  return (
    <div className="max-w-md mx-auto p-4">
      <LabelStep text="2" />
      <Title text="Pessoa Jurídica" />
      <div>
        <div className="mb-4">
          <LabelInput text="Razão social" />
          <MaskedInput
            name="razaoSocial"
          />
        </div>
        <div className="mb-4">
          <LabelInput text="CNPJ" />
          <MaskedInput
            name="cnpj"
            mask={maskCNPJ}
            maxLength={18}
          />
        </div>
        <div className="mb-4">
          <LabelInput text="Data de abertura" />
          <MaskedInput
            name="dataAbertura"
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

export default Step2Juridica;