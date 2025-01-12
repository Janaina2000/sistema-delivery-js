import Cliente from './cliente.js';
import Restaurante from './restaurante.js';
import Pedido from './pedido.js';
import Entrega from './entrega.js';

function adicionarPedido(event) {
    event.preventDefault();


  
    const nome = document.getElementById("nomeCliente").value;
    const endereco = document.getElementById("enderecoCliente").value;
    const codigo = document.getElementById("pedido").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const restauranteNome = document.getElementById("restaurante").value;
    const entregador = document.getElementById("nomeEntregador").value;
    const status = document.getElementById("statusEntrega").value;

    const cliente = new Cliente(nome, endereco);
    const restaurante = new Restaurante(restauranteNome);  
    const pedido = new Pedido(cliente, restaurante, codigo, valor, entregador, status); 

    adicionarTabela(pedido);

    document.getElementById("pedidoForm").reset();
}

function adicionarTabela(pedido) {
    const tabelaPedidos = document.getElementById("tabelaPedidos").getElementsByTagName("tbody")[0];
    const novaLinha = tabelaPedidos.insertRow();

    novaLinha.insertCell(0).innerText = pedido.cliente.nome; 
    novaLinha.insertCell(1).innerText = pedido.cliente.endereco;
    novaLinha.insertCell(2).innerText =  pedido.entrega.codigo; 
    novaLinha.insertCell(3).innerText = `R$ ${pedido.valor.toFixed(2)}`;
    novaLinha.insertCell(4).innerText = pedido.restaurante.nome; 
    novaLinha.insertCell(5).innerText = pedido.entrega.entregador; 
    novaLinha.insertCell(6).innerText = pedido.entrega.status; 
}

export default adicionarPedido;