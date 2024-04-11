import { AbModal } from "ds-alurabooks"

const ModalCadastroUsuario = () => {
    return (<AbModal titulo="Cadastrar" aberta={true} aoFechar={() => console.log('fecha ai')}>
        <h1>Olá Mundo</h1>
    </AbModal>)
}

export default ModalCadastroUsuario;