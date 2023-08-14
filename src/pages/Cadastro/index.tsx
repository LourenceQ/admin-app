import styled from "styled-components";
import logo from "./Logo.png"
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import IClinica from "../../types/IClinica";
import UsePost from "../../usePost";
import { useNavigate } from "react-router-dom";


const Imagem = styled.img`
    padding: 2rm 0;
`

interface PropsCustomizada {
    cor: string
}

const StepCustomizada = styled.div<PropsCustomizada>`
    background-color: ${({cor}) => cor};
    width: 16px;
    height: 16px;
    border-radius: 50%;
`


export default function Cadastro() {
    const [etapaAtiva, setEtapaAtiva] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [senhaVerificada, setSenhaVerificada] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [estado, setEstado] = useState('');
    const { cadastrarDados, erro, sucesso } = UsePost();
    const navigate = useNavigate();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // previne o envio padrão do formulário
        
        const clinica: IClinica = {
            email: email,
            nome: nome,
            senha: senha,
            endereco: {
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
                estado: estado
            }
        }

        if(etapaAtiva !== 0) {
            try {
               cadastrarDados({url: 'clinica', dados: clinica});
               navigate('/login');
            }
            catch(erro) {
                erro && alert ('erro ao cadastrar dados');
            }
       }     
       setEtapaAtiva(etapaAtiva + 1); // atualiza o estado da etapa para a próxima etapa

    }
    

    return (
        <>
        <Imagem src={logo} alt="Logo" />
        <Stepper activeStep={etapaAtiva}>
            <Step>
                <StepLabel  
                    StepIconComponent={(props) => (
                        <StepCustomizada cor = {props.active? 'lightblue' : 'lightgray'}/>
                    )}/>
            </Step>

            <Step>
            <StepLabel  
                    StepIconComponent={(props) => (
                        <StepCustomizada cor = {props.active? 'lightblue' : 'lightgray'}/>
                    )}/>
            </Step>

        </Stepper>
        </>
    );
}
