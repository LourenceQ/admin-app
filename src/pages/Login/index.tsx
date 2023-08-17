import { useState } from "react";
import CampoDigitacao from "../CampoDIgitacao";
import UsePost from "../../usePost";

interface ILogin {
    email: string;
    senha: string
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {cadastrarDados, erro, sucesso} = UsePost() {};

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const usuario: ILogin = {
            email: email,
            senha: senha
        }
        try {
            cadastrarDados({url: "auth/login", dados: usuario})
        } catch(erro) {
            erro && alert('Não foi possível fazer login')
        }
    }

    return (
        <>
            <CampoDigitacao valor={email} tipo="text" placeholder="Insira o e-mail" onChange={setEmail}/>
            <CampoDigitacao valor={senha} tipo="password" placeholder="Insira a senha" onChange={setSenha}/>
        </>
    )
}