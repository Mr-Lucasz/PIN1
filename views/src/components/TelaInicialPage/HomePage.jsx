
import './HomePageStyle.css';
import { useNavigate } from 'react-router-dom';

import Header from '../Header/Header';




function HomePage({ isAuthenticated }) {

    const navigate = useNavigate();
    // const handleLogout = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:3001/logout');
    //         // Redireciona o usuário para a página de login
    //         navigate('/login');
    //         console.log('Logout realizado com sucesso!');
    //     } catch (error) {
    //         // Em caso de erro, exibe a mensagem de erro no console
    //         console.error(error);
    //     }
    // };
    const gerenciarMaqMenu = async (e) => {
        e.preventDefault();
        navigate('/gerenciar-maquina');
    };

    const relatorioMenu = async (e) => {
        e.preventDefault();
        navigate('/relatorio');
    };


    const gerenciarEstoqueMenu = async (e) => {
        e.preventDefault();   
        navigate('/cadastro-produto');
    };

    return (
        <div className="home-wrap">
             <Header/>
            <div className="title-home">
                <div className="titleHome1">
                    <span>
                        Um time de
                        <span class="destaque"> sucesso </span>
                        levando</span>
                </div>
                <div className="titleHome2">
                    <span>as</span>
                    <span class="destaque"> melhores bebidas</span>
                    <span> até </span>
                    <span class="destaque">você!</span>
                </div>
            </div>
            <div className="buttons">
                <input type="button" value="GERENCIAR MÁQUINAS" className="maquinas-button" 
                onClick={(e) =>gerenciarMaqMenu(e)}/>
                <input type="button" value="RELATÓRIOS" className="relatorios-button"  
                onClick={(e) =>relatorioMenu(e)}/>
                <input type="button" value="GERENCIAR ESTOQUE" className="estoque-button" 
                onClick={(e) =>gerenciarEstoqueMenu(e)}/>
            </div>

            <div className='img-refrigerante' />
        </div>
    );
}

export default HomePage;