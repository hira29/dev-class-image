import axios from 'axios';
import React from 'react';
import { FormGroup, Jumbotron, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { API } from '../helper';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onSubmitClick =()=>{
        let data = {
            "title" : this.title.value,
            "desc"  : this.desc.value,
            "image" : this.image.value
        }

        if(data.title == "" || data.desc == "" || data.image == "") alert (`Required!`)
        else {
            axios.post(API + 'image', data)
                .then(x=>{
                    console.log("Success")
                    alert (`Data ${data.title} added!`)
                    this.title.value = ""
                    this.desc.value = ""
                    this.image.value = ""
                }).catch(err=>{
                    console.log("onSubmitClick", err)
                    alert (`Error!`)
                })
        }
    }

    render() { 
        return (  
            <div className="container m-auto row" style={{paddingTop : '10vh'}}>
                <div className="col-12 col-md-8 text-md-center">
                    <h1 style={{fontWeight:'300'}}>Album Example</h1>
                    <p style={{fontWeight:'450'}}>Something short and leading about the collection below--its contents, the creator, etc. 
                        Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                    </p>
                    <Link to="/youralbum" className="btn btn-primary">Your Album</Link>
                    <Link to="/theiralbum" className="btn btn-outline-dark" style={{marginLeft: '10px'}}>Their Album</Link>
                </div>
                <div className="col-12 col-md-4">
                    <Jumbotron style={{backgroundColor:"#333b3f", padding: "20px"}}>
                        <FormGroup>
                            <Label for="title" style={{color: "white"}}>Title</Label>
                            <Input type="text" name="title" id="Title" innerRef={x => this.title = x}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description" style={{color: "white"}}>Description</Label>
                            <Input type="textarea" name="desc" id="Desc" innerRef={x => this.desc = x}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="image" style={{color: "white"}}>Image</Label>
                            <Input type="text" name="image" id="Image" placeholder="Place your Image link here..." innerRef={x => this.image = x}/>
                        </FormGroup>
                        <div style={{overflow:'hidden'}}>
                            <Button type="Submit" color="primary" style={{float: 'right'}} onClick={this.onSubmitClick}>Submit</Button>
                        </div>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}
 
export default LandingPage;