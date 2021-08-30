import React from 'react'
import Card from '../components/card';
import FormGroup from '../components/form-gorup';
import { withRouter } from 'react-router-dom';

import axios from 'axios'
import { thisTypeAnnotation } from '@babel/types';

class Login extends React.Component {

    state={
        email:'',
        senha:'',
        mensagemErro:null
    }

    entrar = () =>{
       axios.post('http://localhost:8080/api/usuarios/autenticar', {
           email: this.state.email,
           senha: this.state.senha

       }).then(response => {
           this.props.history.push('/home')

       }).catch( erro =>{
          this.setState({mensagemErro: erro.response.data})
       })
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios')
    }



    render() {
        return (
          
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <span>{this.state.mensagemErro}</span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>

                                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                    
                                                <input type="email" 
                                                       value= {this.state.email}
                                                       onChange={e => this.setState({email: e.target.value})}
                                                       className="form-control" 
                                                       id="exampleInputEmail1" 
                                                       aria-describedby="emailHelp" 
                                                       placeholder="Digite o Email"
                                                       style={{margin: "6px 0px"}}/>
                                                </FormGroup >
                                               
                                                 <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                 <input type="password" 
                                                        value= {this.state.senha}
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputPassword1" 
                                                        placeholder="Password"
                                                        style={{margin: "6px 0px"}}/>
                                                </FormGroup>
                                                <br/>
                                                <button onClick={this.entrar} className="btn btn-success">Entrar</button>&nbsp;
                                                <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>
                                            </fieldset>
                                        </div>
                                        </div>
                                    </div>
                            </Card>
                        </div>
                        </div>
                    </div>
               
                )
    }
}
                export default withRouter ( Login )