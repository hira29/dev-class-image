import axios from 'axios';
import React from 'react';
import { API } from '../helper';
import { Jumbotron, Button, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label, Input, Form } from 'reactstrap';


class RegisterPage extends React.Component {
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
                textType: "Show"
            })
        } else {
            this.setState({
                passType: "text",
                textType: "Hide"
            })
        }
    }

    onBtnSignup = ()=>{
        let uname = this.uname.value
        let email = this.email.value
        let password = this.password.value
        let cpassword = this.cpassword.value
        let data = {
            "uname" : uname,
            "email" : email,
            "password" : password,
            "role" : "user",
        }
        console.log('Input Regist : ', uname, email, password, cpassword)

        if(uname == "" || email ==  "" || password == "" || cpassword == ""){
            alert(`Required!`)
        } else {
            if (email.includes('@')){
                if (password === cpassword){
                    axios.post(API + 'users', data).then(x=>{
                        console.log("Success", x.data)
                    }).catch(err=>{
                        console.log("onBtnSignupErr", err)
                    })
                } else alert(`Password not Same!`)
            } else alert(`Email Wrong!`)
        }
    }

    render() { 
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
                            <Input type="text" name="uname" id="exampleUname" placeholder="your username..." innerRef={x => this.uname = x}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="text" name="email" id="exampleEmail" placeholder="your email..." innerRef={x => this.email = x}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                                <InputGroup>
                                <Input type={this.state.passType} name="password" id="examplePassword" placeholder="your password..." innerRef={x => this.password = x}/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText onClick={this.onBtnShow}>{this.state.textType}</InputGroupText>
                                </InputGroupAddon>
                                </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Confirmation Password</Label>
                                <InputGroup>
                                <Input type={this.state.passType} name="confirmpassword" id="exampleConfirmPassword" placeholder="your password confirmation..." innerRef={x => this.cpassword = x}/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText onClick={this.onBtnShow}>{this.state.textType}</InputGroupText>
                                </InputGroupAddon>
                                </InputGroup>
                        </FormGroup>
                    </Form>
                    <Button type="button" onClick={this.onBtnSignup} >Sign Up</Button>
                </div>
            </div>
          );
    }
}
 
export default RegisterPage;