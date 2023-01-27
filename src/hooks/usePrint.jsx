import { useContext } from "react";
import { useReactToPrint } from "react-to-print";
import { UIContext } from "../contexts/UIContext";

export default function usePrint() {
  const { printRef } = useContext(UIContext);
  const buttonProps = {
    text: "Save & Print",
    icon: <i className="fa-sharp fa-solid fa-download" />,
    onClick: useReactToPrint({
      content: () => {
        printRef.current.style.boxShadow = "none";
        setTimeout(() => {
          printRef.current.style.boxShadow = "0 0 10px lightgrey";
        }, 2000);
        return printRef.current;
      },
    }),
  };
  return { buttonProps};
}
