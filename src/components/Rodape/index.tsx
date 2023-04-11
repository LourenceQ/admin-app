import facebook from './assets/facebook.png';
import whatsapp from './assets/whatsapp.png';
import coinstagramnsulta from './assets/instagram.png';
import google from './assets/google.png';
import styled from 'styled-components';

const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center
`

function Rodape() {
    return(
        <RodapeEstilizado>
            <ul>
                <li>
                    <a>
                        <img src={facebook} alt="logo do facebook"/>
                    </a>
                </li>
            </ul>
        </RodapeEstilizado>
    )
}

export default Rodape;