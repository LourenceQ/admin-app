import { useState } from "react";
import CampoDigitacao from "../CampoDIgitacao";

export default function Login() {
    const [email, setEmail] = useState('');
    return (
        <>
            <CampoDigitacao 
                valor={email} 
                tipo="text" 
                placeholder="Insira o e-mail"
                onChange={setEmail}/>
        </>
    )
}