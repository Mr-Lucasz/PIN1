import './AdminHomePageStyle.css';
import { useNavigate } from 'react-router-dom';
import refriImage from '../util/refrihome.png';
import Header from '../Header/Header';


function AdminHomePage({ isAuthenticated }) {
    const navigate = useNavigate();

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

    const cadastroFuncionario = async (e) => {
        e.preventDefault();
        navigate('/cadastro-funcionario');
    };

    return (
        <div>
        <Header/>
        <div className="home-wrap-admin">
 

            <div className="title-home-admin">
                <div className="titleHome1-admin">
                    <span>
                        Um time de
                        <span className="destaque-admin"> sucesso </span>
                        levando</span>
                </div>
                <div className="titleHome2-admin">
                    <span>as</span>

                    <span className="destaque-admin"> melhores bebidas</span>
                    <span> até </span>

                    <span className="destaque-admin">você!</span>
                </div>
            </div>
            <div className="area-btn-img-admin">

                <div className='img-refri-home-admin'>
                    <img src={refriImage} alt="Refri" />
                </div>
                <div className="area-buttons-admin">
                    <button className='maquinas-button-admin' onClick={(e) => gerenciarMaqMenu(e)} >GERENCIAR MÁQUINAS</button>
                    <button className='relatorios-button-admin' onClick={(e) => relatorioMenu(e)}>RELATÓRIOS</button>
                    <button className='estoque-button-admin'onClick={(e) => gerenciarEstoqueMenu(e)} >GERENCIAR ESTOQUE</button>
                    <button className='gerenciar-usuario-button-admin'onClick={(e) => cadastroFuncionario(e)} >GERENCIAR USUÁRIO</button>
                </div>
            </div>

        </div>
        </div>
    );
}


export default AdminHomePage;
