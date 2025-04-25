import { CSSTransition } from "react-transition-group";
import { ReactNode, useEffect, useRef } from "react";
import { getScrollWidth } from "../../utils/modalHelper";
import "./Modal.css";
import Portal from "../Portal";

type Props = {
  show?: boolean;
  children?: ReactNode;
  onClose?: () => void;
};

const Modal = ({ show = false, onClose, children }: Props) => {
  const modalRef = useRef(null);

  const handleOnClose = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.paddingRight = `${getScrollWidth()}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <Portal>
      <CSSTransition
        in={show}
        nodeRef={modalRef}
        timeout={{ enter: 150, exit: 150 }}
        classNames="modal-overlay"
        unmountOnExit={true}
      >
        <div
          ref={modalRef}
          className="fixed inset-0 flex items-center justify-center bg-transparent z-50 w-full min-h-screen modal-overlay"
          onClick={onClose}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleOnClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-black"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Modal;
