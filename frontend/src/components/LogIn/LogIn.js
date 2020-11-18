import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import './LogIn.css'
class Login extends Component {
    
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changePassword(e) {
        this.setState({ Password: e.target.value })
    }

    changeEmail(e) {
        this.setState({ Email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const registered = {
            Password: this.state.Password,
            Email: this.state.Email
        }
        axios.post('http://localhost:5000/fooddose/login', registered)
            .then(response => console.log(response.data))
        this.setState({
            Password: '',
            Email: ''
        })
    }

    render() {
        return (
        
            <div >
            <Typography component="h1" variant="h3" align="center" id="title"> Login</Typography><br />
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">

                <form onSubmit={this.onSubmit} >
                <FormControl margin="normal" required >
                        <TextField 
                            id="email"
                            name="email"
                            type="email"
                            value={this.state.Email}
                            onChange={this.changeEmail}
                            label="Email" variant="outlined"
                        />
                    </FormControl><br />
                    <FormControl margin="normal" required>
                        <TextField
                            id="password"
                            name="password"
                            type="Password"
                            value={this.state.Password}
                            onChange={this.changePassword}
                            label="Password" variant="outlined"
                        />
                    </FormControl><br /><br />
                   
                    <Button 
                        onClick={this.handleSubmit}
                        type="submit"
                        size="large"
                        variant="contained"
                        justifyContent="center"
                        id="btn"
                    >
                       Login
          </Button>
                </form>

            </Box>
        </div >
        );
    }
}


export default Login;