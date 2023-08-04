import { Container } from "@mui/material";
import Titulo from "../../components/Titulo";
import Tabela from "../../components/Tabela";
import Grafico from "../../components/Grafico";
import Avaliacao from "../../components/Avaliacao";
import useDadosConsulta from "../../useDadosConsulta.";
import useDadosProfissional from "../../useDadosProfissional";
import Botao from "../../components/Botao";

export default function Dashboard() {

    const {dados: consultas, erro: consultasErro} = useDadosConsulta();
    const {dados: profissionais, erro: profissionaisErro } = useDadosProfissional();

    if(consultasErro || profissionaisErro) {
        console.log('Erro na requisição.')
    }
    return (
        <Container>
            <Titulo>Área administrativa</Titulo>
            <Botao>Cadastrar Especialista</Botao>
            <Titulo imagem="consulta">Consultas do dia</Titulo>
            <Tabela consultas = {consultas}/>
            <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
            <Grafico consultas = {consultas} profissionais={profissionais}/>
            <Avaliacao profissionais={profissionais}/>
        </Container>
    );
}