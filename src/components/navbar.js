import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAction } from '../actions'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() { 
        return (  
            <div>
            <Navbar style={{backgroundColor:"#333b3f"}} light expand="md">
                <Link to="/" className="navbar-brand" style={{color: 'white', fontWeight: '900', fontSize: '2em'}}>Shutter</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar >
                    <NavItem>
                    <NavLink style={{color: 'white', fontSize: '1em', marginTop: '5px'}} href="/components/">Authentication</NavLink>
                    </NavItem>
                </Nav>
                {
                    this.props.uname ?
                    <UncontrolledDropdown>
                        <DropdownToggle outline color="info" style={{fontWeight:'bold'}} caret>
                            Welcome, {this.props.uname}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={this.props.logoutAction}>
                                Sign Out
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> :
                    <>
                    <Link to="/signin" className="btn btn-primary">Sign In</Link>
                    <Link to="/signup" className="btn btn-outline-light" style={{marginLeft: '10px'}}>Register</Link>
                    </>
                }
                
                </Collapse>
            </Navbar>
        </div>
        );
    }
}

const mapToProps = (state) => {
    return {
        uname: state.userReducer.uname
    }
}
 
export default connect(mapToProps, {logoutAction}) (NavbarComponent);