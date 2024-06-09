import { useFormContext } from '../../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';
import { LabelInput, LabelStep, Title } from '../../../components/Title/input';
import MaskedInput from '../../../components/MaskedInput';
import { CLASSNAMES } from '../../../utils/constants';
import Button from '../../../components/Button';

const Step3 = () => {
  const { prevStep, nextStep } = useFormContext();
  const { watch } = useRHFContext();

  const { senha } = watch();
  const allFieldsValid = senha && senha.length >= 8;

  return (
    <div className="max-w-md mx-auto p-4">
      <LabelStep text="3" />
      <Title text="Senha de acesso" />
      <div>
        <div className="mb-4">
          <LabelInput text="Sua senha" />
          <MaskedInput
            name="senha"
            type="password"
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

export default Step3;