import { AbModal } from "ds-alurabooks"

import imagemPrincipal from './assets/login.png';

const ModalCadastroUsuario = () => {
    return (<AbModal titulo="Cadastrar" aberta={true} aoFechar={() => console.log('fecha ai')}>
        <figure>
            <img src={imagemPrincipal} alt="Monitor com uma fechadura e uma pessoa com uma chave ao lado." />
        </figure>
    </AbModal>)
}

export default ModalCadastroUsuario;