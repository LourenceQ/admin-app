import facebook from './assets/facebook.png';
import whatsapp from './assets/whatsapp.png';
import coinstagramnsulta from './assets/instagram.png';
import google from './assets/google.png';
import styled from 'styled-components';

function Rodape() {
    return(
        <footer>
            <ul>
                <li>
                    <a>
                        <img src={facebook} alt="logo do facebook"/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}