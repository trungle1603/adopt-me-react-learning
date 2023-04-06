import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: any }) => {
    const elRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect((): any => {
        const modalRoot = document.getElementById("modal");
        modalRoot?.appendChild(elRef.current as HTMLDivElement);

        // clean up
        return () => modalRoot?.removeChild(elRef.current as HTMLDivElement);
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
