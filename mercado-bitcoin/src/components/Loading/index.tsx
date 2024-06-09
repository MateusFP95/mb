import { IconContext } from "react-icons";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { CLASSNAMES } from "../../utils/constants";
import { useFormContext } from "../../context/context";

const Loading = () => {
  const { isLoading } = useFormContext();

  if (!isLoading) return null;

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${CLASSNAMES.notAllowed}`}>
      <div className="flex items-center justify-center h-screen">
        <IconContext.Provider value={{ className: "animate-spin text-4xl text-gray-500" }}>
          <AiOutlineLoading3Quarters />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Loading;
