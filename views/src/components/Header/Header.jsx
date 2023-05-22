import Logo from '../util/logoDrinker.png';
import iconeHome from '../util/iconeHome.png';
import iconeGerenciar from '../util/iconeGerenciar.png';
import iconeSolicitacoes from '../util/iconeSolicitacoes.png';
import iconeSair from '../util/iconeSair.png';
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
     
        <header className='header-fixed'>
   
                <div class="container-header">

            <div className='logo'>
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="nome-user">
                <span>Olá, Lucas</span>
                </div>

            <nav className="container-nav">
                <a href="/home" className="nav-link">
                    <img src={iconeHome} alt="Ícone da Opção Home" className="nav-icon" />
                    <span>HOME</span>
                </a>
                <a href="/gerenciar" className="nav-link">
                    <img src={iconeGerenciar} alt="Ícone da Opção Gerenciar" className="nav-icon" />
                    <span>GERENCIAR</span>
                </a>
                <a href="/solicitacoes" className="nav-link">
                    <img src={iconeSolicitacoes} alt="Ícone da Opção Solicitações" className="nav-icon" />
                    <span>SOLICITAÇÕES</span>
                </a>
                <a href="/logout" onClick={handleLogout} className="nav-link">
                <span className="nav-text">SAIR</span>
                    <img src={iconeSair} alt="Ícone da Opção de Sair" className="nav-icon" />
                </a>
            </nav>
            </div>
        </header>
    
    );

}

export default Header;
