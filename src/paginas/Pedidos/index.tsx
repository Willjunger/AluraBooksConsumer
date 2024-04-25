import { AbBotao } from "ds-alurabooks";

import axios from 'axios'

import './Pedidos.css'
import { useEffect, useState } from "react";
import { IPedido } from '../../interfaces/IPedido'

const Pedidos = () => {

    const [pedidos, setPedidos] = useState<IPedido[]>([])

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        axios.get<IPedido[]>('http://localhost:8000/pedidos', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(resposta => setPedidos(resposta.data))
            .catch(erro => console.log(erro))
    }, [])


    return (<section className="pedidos">
        <h1>Meus Pedidos</h1>
        {pedidos.map(pedido =>
            <div className="pedido" key={pedido.id}>
                <ul>
                    <li>Pedido: <strong>{pedido.id}</strong></li>
                    <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                    <li>Valor total: <strong>R$ {pedido.total}</strong></li>
                    <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                </ul>
                <AbBotao texto="Detalhes" />
            </div>
        )}
    </section>)
}

export default Pedidos;