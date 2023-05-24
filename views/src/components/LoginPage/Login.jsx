import axios from 'axios';//biblioteca para fazer requisições HTTP em JavaScript
import { useState } from 'react';//é um hook do React que permite gerenciar estados em componentes 
import { useNavigate } from 'react-router-dom';
import refriImage from '../util/refri.png';




function Login() {
    // componente em React que representa uma tela de login
    // useState é um hook do React que permite que você adicione o estado a um componente
    //UseState retorna um array com duas posições: o primeiro item é o valor do estado atual 
    //segundo item é uma função para atualizar esse estado.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    const fazerLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);

        try {

            const response = await axios.post('http://localhost:3001/login', {
                email,
                password,
            });

            setUser(response.data.user);

            // Exibe no console o objeto de resposta da requisição
            console.log(response.data);
            // Define o usuário atual como o objeto de resposta da requisição

            setUser(response.data);

            if (error) {
                setError('Usuário ou senha inválidos');
                return;
            }

            // Armazena o token JWT e o refresh token no local storage
            localStorage.setItem('token', user?.session?.access_token);
            localStorage.setItem('refreshToken', user?.session?.refresh_token);

            navigate('/home');

        } catch (error) {
            // Verifica se ocorreu um erro na requisição
            if (!error?.response) {
                // Exibe uma mensagem de erro genérica caso não tenha ocorrido um erro de resposta
                setError('Erro ao acessar o servidor');
            } else if (error.response.status === 401) {
                // Exibe uma mensagem de erro caso a resposta seja um erro de autenticação (status 401)
                setError(error.response.data.message);
            }
        }
    };

    const fazerLogout = async (e) => {
        e.preventDefault();
        // Remove o token JWT e o refresh token do local storage
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');

    };


    return (

        <div className="login-form-wrap">

            {user == null ? (
                <div className='login-container'>
                    <div className="title-pai">
                        <div className="title1">
                            <span>P</span>
                            <span>I</span>
                            <span>N</span>
                            <span>K</span>
                        </div>
                        <div className="title2">
                            <span>D</span>
                            <span>R</span>
                            <span>I</span>
                            <span>N</span>
                            <span>K</span>
                            <span>E</span>
                            <span>R</span>
                            <span>S</span>
                        </div>
                    </div>
                    <div className='form-area'>
                        <div className='img-refri'>
                            <img src={refriImage} alt="Refri" />
                        </div>

                        <form className='login-form'>
                            <h1>ACESSO</h1>
                            <div className='area-inputs'>
                                <div className='area-user-senha-form'>
                                    <div className='user-form'>
                                        <div className='label-email'>
                                            <label htmlFor="email">USUÁRIO</label>
                                        </div>
                                        <div className='input-user'>
                                        <input type="usuario"
                                            name="usuario"
                                            placeholder="Informe seu Email"
                                            //campo obrigatiorio
                                            required
                                            //evento que será acionado toda vez que o valor do campo de entrada for alterado
                                            onChange={(e) =>
                                                //chamada da função setEmail e atualiza o state email
                                                setEmail(e.target.value)} />
                                    </div>
                                    </div>
                                 
                                    <div className='senha-form'>
                                        <div className='label-senha'>
                                            <label htmlFor="senha">SENHA</label>
                                        </div>
                                        <div className='input-password'>
                                        <input type="password"
                                            name="senha"
                                            placeholder="Informe sua senha"
                                            required
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    </div>
                                </div>
                                <div className='area-btn-form'>
                                    <button type="entrar"
                                        className='btn-entrarLogin'
                                        onClick={(e) =>
                                            fazerLogin(e)}>ENTRAR</button>
                                </div>

                            </div>

                        </form>
                    </div>



                </div>
            ) : (
                // Página de boas-vindas
                <div>
                    <h2>Olá, {user.name}</h2>
                    <button type="button"
                        className='btn-login'
                        onClick={(e) => fazerLogout(e)}>Logout</button>

                </div>
            )}
        </div>

    );
}

export default Login;