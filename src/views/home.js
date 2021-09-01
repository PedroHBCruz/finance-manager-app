import axios from "axios";
import React from "react"
import { Jumbotron } from 'styled-jumbotron-component';

class Home extends React.Component {
  
    state = {

        saldo: 0
    }

    componentDidMount(){
        
        const usuarioLogadoString =  localStorage.getItem('_usuario_logado')
        const usuarioLogado = JSON.parse(usuarioLogadoString)
        axios.get(`http://localhost:8080/api/usuarios/${usuarioLogado.id}/saldo`)
        
        .then(response => {
            this.setState({saldo: response.data})
        }).catch(error => {
            console.log(error.response)
        });
    }
    
    render() {
        return (
          
            <Jumbotron fluid>
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$ {this.state.saldo} </p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg"
                        href="#/cadastro-usuarios"
                        role="button"><i className="pi pi-users"></i>
                        Cadastrar Usuário
                    </a>&nbsp;
                    <a className="btn btn-danger btn-lg"
                        href="#/cadasstro-lancamentos"
                        role="button"><i className="pi pi-money-bill"></i>
                        Cadastrar Lançamento
                    </a>
                </p>


            </Jumbotron>
           
            
        )
    }
}
export default Home