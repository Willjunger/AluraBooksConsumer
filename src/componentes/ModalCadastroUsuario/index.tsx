import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react";
import axios from 'axios';

import imagemPrincipal from './assets/login.png';

import './ModalCadastroUsuario.css';

interface PropsModalCadastroUsuario {
    aberta: boolean
    aoFechar: () => void
}

const ModalCadastroUsuario = ({ aberta, aoFechar }: PropsModalCadastroUsuario) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');


    const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const usuario = {
            nome,
            email,
            senha,
            endereco,
            cep,
            complemento
        }

        console.log(usuario)

        axios.post('http://localhost:8000/public/registrar', usuario)
            .then(() => {
                alert('Usuario foi cadastrado com sucesso!');
                setNome('')
                setEmail('')
                setEndereco('')
                setComplemento('')
                setCep('')
                setSenha('')
                setSenhaConfirmada('')
                aoFechar();
            })
            .catch(() => {
                alert('ops! alguma coisa deu errado!')
            })
    }

    return (<AbModal titulo="Cadastrar" aberta={aberta} aoFechar={aoFechar}>
        <div className="corpoModalCadastro">
            <figure>
                <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma pessoa com uma chave ao lado." />
            </figure>

            <form onSubmit={aoSubmeterFormular}>
                <AbCampoTexto label='Nome' value={nome} onChange={setNome} />
                <AbCampoTexto label='Email' value={email} onChange={setEmail} />
                <AbCampoTexto label='Endereco' value={endereco} onChange={setEndereco} />
                <AbCampoTexto label='Complemento' value={complemento} onChange={setComplemento} />
                <AbCampoTexto label='Cep' value={cep} onChange={setCep} />
                <AbCampoTexto label='Senha' value={senha} onChange={setSenha} />
                <AbCampoTexto label='SenhaConfirmada' value={senhaConfirmada} onChange={setSenhaConfirmada} />

                <footer>
                    <AbBotao texto="Cadastrar" />
                </footer>
            </form>
        </div>

    </AbModal>)
}

export default ModalCadastroUsuario;