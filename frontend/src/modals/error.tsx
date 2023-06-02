import {ModalCloseButton, ModalHeader} from "@chakra-ui/react";
import {useContext} from "react";
import {ErrorContext} from "../context/error.tsx";

export default function ErrorModal() {
    const {error} = useContext(ErrorContext)
    return (
        <>
            <ModalHeader>Error :</ModalHeader>
            <ModalCloseButton/>
            {error}
        </>
    )
}