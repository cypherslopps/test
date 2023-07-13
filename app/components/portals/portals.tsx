"use client";

import { ReactNode, useEffect, useState, useRef, FC } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

interface PortalProps {
    children: ReactNode;
    elementId: string;
    className?: string;
}

const Portal: FC<PortalProps> = ({ children, elementId, className }) => {
    const portalRef = useRef<HTMLElement | null>(null)
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        console.log(document.querySelector<HTMLElement>(`#${elementId}`), elementId);
        portalRef.current = document.querySelector<HTMLElement>(`#${elementId}`);
        setMounted(true);
    }, [mounted]);

    return ((mounted && portalRef.current) ? createPortal(
        <div className={`fixed top-0 left-0 w-full h-screen bg-black/10 ${className ?? "z-40"} backdrop-blur-lg`}>
            {children}
        </div>, 
        portalRef.current
    ) : null);
};

Portal.propTypes = {
    children: PropTypes.node.isRequired,
    elementId: PropTypes.string.isRequired
}

export default Portal;