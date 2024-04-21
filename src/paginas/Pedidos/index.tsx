import { AbBotao } from "ds-alurabooks";

const Pedidos = () => {
    return (<section className="pedidos">
        <h1>Meus Pedidos</h1>
        <div>
            <ul>
                <li>Pedido: <strong>123456</strong></li>
                <li>Data do pedido: <strong>12/08/1234</strong></li>
                <li>Valor total: <strong>R$ 45.00</strong></li>
                <li>Entrega realizada em: <strong>13/09/2134</strong></li>
            </ul>
            <AbBotao texto="Detalhes" />
        </div>
    </section>)
}

export default Pedidos;