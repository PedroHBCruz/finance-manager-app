import React from 'react';
import Card from '../components/card';
import FormGroup from '../components/form-gorup';
import { withRouter } from 'react-router-dom';

import UsuarioService from '../app/service/usuarioService';
import { mensagemSuceeso, mensagemErro } from '../components/toastr'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepetição: ''
    }

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    cadastrar = () => {
        const usuario = {

            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        }
        this.service.salvar(usuario)
        .then(response =>{
            mensagemSuceeso('Usuário cadastrado com sucesso! Faça o login para acessar o sistema.')
            this.props.history.push('/login')

        }).catch(error => {
            mensagemErro(error.response.data)
        })
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    render() {
        return (

            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="text"
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    id="inputSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password"
                                    id="inputRepitaSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senhaRepetição: e.target.value })} />
                            </FormGroup>
                            <br />
                            <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                            &nbsp;<button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>

        )
    }
}
export default withRouter(CadastroUsuario)