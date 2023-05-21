import Logo from './logoDrinker.png';
import iconeHome from './iconeHome.png';
import iconeGerenciar from './iconeGerenciar.png';
import iconeSolicitacoes from './iconeSolicitacoes.png';
import iconeSair from './iconeSair.png';
import './headerStyle.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/logout');
            // Redireciona o usuário para a página de login
            navigate('/login');
            console.log('Logout realizado com sucesso!');
        } catch (error) {
            // Em caso de erro, exibe a mensagem de erro no console
            console.error(error);
        }
    };
    return (
        <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="nomeuser">Olá, Lucas</div>
        <nav className="nav">
            <a href="/home" class="home">
                <img src={iconeHome} alt="Ícone da Opção Home" className="icone" />
                HOME
            </a>
            <a href="/gerenciar" class="gerenciar">
                <img src={iconeGerenciar} alt="Ícone da Opção Gerenciar" className="icone" />
                GERENCIAR
            </a>
            <a href="/solicitacoes" class="solicitacoes">
                <img src={iconeSolicitacoes} alt="Ícone da Opção Solicitações" className="icone" />
                SOLICITAÇÕES
            </a>
            <a href="/logout" onClick={handleLogout} class="sair">
                SAIR
                <img src={iconeSair} alt="Ícone da Opção de Sair" className="icone" />
            </a>
        </nav>
    </header>
    );
}

export default Header;
