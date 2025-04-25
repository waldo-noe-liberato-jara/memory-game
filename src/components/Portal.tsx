import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  appendTo?: HTMLElement;
};

export default function Portal({ children, appendTo = document.body }: Props) {
  return createPortal(children, appendTo);
}
