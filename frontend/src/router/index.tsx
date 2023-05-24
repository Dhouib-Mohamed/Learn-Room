import {useContext} from "react";
import Disconnected from "./Disconnected.tsx";
import Connected from "./Connected.tsx";
import {ConnectedContext} from "../context/connected.tsx";

export default function MainRouter() {
    const {isConnected} = useContext(ConnectedContext)
    console.log(isConnected)
    return isConnected ? <Connected/> : <Disconnected/>
}
