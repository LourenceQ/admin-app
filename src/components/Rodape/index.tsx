import facebook from './assets/facebook.png';
import whatsapp from './assets/whatsapp.png';
import coinstagramnsulta from './assets/instagram.png';
import google from './assets/google.png';
import styled from 'styled-components';

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`

const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center
`

const itemEstilizado = styled.li`
    list-style-type: none;
`

function Rodape() {
    return(
        <RodapeEstilizado>
            <ListaEstilizada>
                <li>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook"/>
                    </a>
                </li>
            </ListaEstilizada>
            <p> 2023 Desenvolvido por Alura | Projeto fictício sem fins comerciais. </p>
        </RodapeEstilizado>
    )
}

export default Rodape;