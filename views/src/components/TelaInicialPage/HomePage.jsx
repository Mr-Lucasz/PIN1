import './HomePageStyle.css';
import { useNavigate } from 'react-router-dom';
import refriImage from '../util/refrihome.png';
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
    const solicitarReposicao = async (e) => {
        e.preventDefault();
        navigate('/gerenciar_reposicao');
    };

    return (
        <div>
        <Header/>
        <div className="home-wrap">
 

            <div className="title-home">
                <div className="titleHome1">
                    <span>
                        Um time de
                        <span class="destaque"> sucesso </span>
                        levando</span>
                </div>
                <div className="titleHome2">
                    <span>as</span>

                    <span className="destaque"> melhores bebidas</span>
                    <span> até </span>

                    <span className="destaque">você!</span>
                </div>
            </div>
            <div className="area-btn-img">

                <div className='img-refri-home'>
                    <img src={refriImage} alt="Refri" />
                </div>
                <div className="area-buttons">
                    <button className='maquinas-button' onClick={(e) => gerenciarMaqMenu(e)} >GERENCIAR MÁQUINAS</button>
                    <button className='relatorios-button' onClick={(e) => relatorioMenu(e)}>RELATÓRIOS</button>
                    <button className='estoque-button'onClick={(e) => gerenciarEstoqueMenu(e)} >GERENCIAR ESTOQUE</button>
                    <button className='reposicao-button'onClick={(e) => solicitarReposicao(e)} >SOLICITAR REPOSIÇÃO</button>
                </div>
            </div>

        </div>
        </div>
    );
}


export default HomePage;