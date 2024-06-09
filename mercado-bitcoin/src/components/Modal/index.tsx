import { FaCheck, FaRegTimesCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useFormContext } from "../../context/context";
import { CLASSNAMES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const Modal = () => {
  const navigate = useNavigate();
  const { isModalOpen, setIsModalOpen, modalType } = useFormContext();

  if (!isModalOpen) return null;

  const handleClose = () => {
    setIsModalOpen(false);
    navigate(0);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" onClick={handleClose}>
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div
          className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col items-center">
            <div className={`flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-full`}>
              {modalType === "success" && (
                <IconContext.Provider value={{ className: "h-20 w-20 text-green-600" }}>
                  <FaCheck />
                </IconContext.Provider>
              )}
              {modalType === "error" && (
                <IconContext.Provider value={{ className: "h-20 w-20 text-red-600" }}>
                  <FaRegTimesCircle />
                </IconContext.Provider>
              )}
            </div>
            <h3 className="mt-4 text-lg leading-6 font-semibold text-gray-900">{modalType === "success" ? "Successo" : "Falha ao cadastrar"}</h3>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex items-center justify-center">
            <div className="sm:flex sm:flex-row-reverse max-w-48 w-full">
              <Button
                onClick={handleClose}
                text={modalType === "success" ? "Cadastrar novo" : "Tentar novamente"}
                className={CLASSNAMES.buttonCloseModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;