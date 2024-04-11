import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"

import imagemPrincipal from './assets/login.png';
import { useState } from "react";

const ModalCadastroUsuario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');

    return (<AbModal titulo="Cadastrar" aberta={true} aoFechar={() => console.log('fecha ai')}>
        <figure>
            <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma pessoa com uma chave ao lado." />
        </figure>

        <form>
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

    </AbModal>)
}

export default ModalCadastroUsuario;