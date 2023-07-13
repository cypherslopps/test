import { FC, FormEvent, ReactNode, useEffect, useState } from "react";
import Portal from "../portals/portals";
import Image from "next/image";
import { X } from "lucide-react";
import Avatar from '@/public/images/avatar.png';
import Button from "../button/button";
import { validateForm } from "@/app/lib/validation";
import FormInput from "../form-input/form-input";
import { fetchAllCountries } from "@/app/lib/server";

interface ModalProps {
    children: ReactNode;
    className?: string;
}
 
const Modal: FC<ModalProps> = ({ children, className }) => {   
    return (
        <Portal elementId="modal-root" className={className}>
            {children}
        </Portal>
    );
}
 
export default Modal;