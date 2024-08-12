// для того чтобы вставлять компоненты в ЛЮБОЕ место (для модалок, тултипов, диалогов)
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode; // то, ЧТО телепортируем
    element?: HTMLElement // то, КУДА телепортируем
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
