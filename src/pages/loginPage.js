import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Jumbotron, Button, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label, Input, Form } from 'reactstrap';
import { API } from '../helper';
import { loginAction } from '../actions';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            passType: "password",
            textType: "Show"
         }
    }

    onBtnShow = ()=>{
        if (this.state.passType != "password") {
            this.setState({
                passType: "password",
                textType: "Show",
                redirect: false
            })
        } else {
            this.setState({
                passType: "text",
                textType: "Hide"
            })
        }
    }

    onLoginClick = ()=>{
        let uname = this.uname.value
        let password = this.password.value
        let endpoint = API + 'users?uname=' + uname +'&password=' + password

        if(uname == "" || password == ""){
            alert(`Required!`)
        } else {
            axios.get(endpoint).then(x=>{
                if (x.data.length > 0){
                    localStorage.setItem("tkn_name", x.data[0].uname)
                    this.props.loginAction(x.data[0])
                    alert(`Hello, ${x.data[0].uname}. Login Success!`)
                    // this.setState({redirect:true})
                } else{
                    alert(`User not Found or Password Error!`)
                }  
                console.log('get', x )
            }).catch(err=>{
                console.log('onLoginClickErr', err )
                alert(`Error Get!`)
            })
        }
    }

    render() { 
        if (this.props.iduser) {
            return <Redirect to="/"/>
        } else {
            return ( 
                <div className="container m-5 m-auto row" style={{paddingTop : '10vh'}}>
                    <div className="col-12 col-md-7">
                        <Jumbotron className="text-md-center">
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-2" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p className="lead">
                            <Button color="primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                    </div>

                    <div className="col-12 col-md-5">
                        <Form>
                            <FormGroup>
                                <Label for="exampleUname">Username</Label>
                                <Input type="text" name="uname" id="exampleUname" placeholder="username..." innerRef={x => this.uname = x}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                    <InputGroup>
                                    <Input type={this.state.passType} name="password" id="examplePassword" placeholder="password..." innerRef={x => this.password = x}/>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText onClick={this.onBtnShow}>{this.state.textType}</InputGroupText>
                                    </InputGroupAddon>
                                    </InputGroup>
                            </FormGroup>
                        </Form>
                        <Button type="button" onClick={this.onLoginClick}>Sign In</Button>
                    </div>
                </div>
            );
        }
    }
}

const mapToProps = (state) => {
    return {
        iduser: state.userReducer.id
    }
}
 
export default connect(mapToProps, {loginAction}) (LoginPage);