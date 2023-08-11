import styled from "styled-components";
import logo from "./Logo.png"
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";


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