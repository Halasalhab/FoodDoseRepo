import React ,{Component} from 'react';
import './header.css'
import { styled, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Login = styled(Button)({
    background: '#F69624',
    border: 0,
    borderRadius: 30,
    color: 'white',
    height: 48,
    padding: '20px 30px',
});
// const show=true;
console.log(window.location.href);
// function showw(){

//     if(pathname!==('/login')){
//         return {
            
//         }
//     }
// }
class Header extends Component() {
    constructor(){
    super()
    this.state={
    show:true,
    classes = useStyles()
    }
    }
    showfun(){
        if(window.location.href==="http://localhost:3000/signup"){
            this.setState({show:!this.state.show})

        }
    }
    // const classes = useStyles();
    render(){
    return (
        <div className={classes.root}>
            <AppBar position="static" class="appbar">
                <Toolbar>

                    <Typography variant="h6" className={classes.title} id="fooddose" onClick={() => {
                        window.location.href = '/'
                    }} >
                        FoodDose
                        </Typography>
                    {/* if(pathname!==('/login')){
                        return {
                            
                        }
                    } */}
                   
                       {/* this.show ? */}
                    
                   {/* { 
                   this.state.show ?
                   return  */}
                   <Login this.state.show={true} onClick={() => {
                        window.location.href = '/login'
                    }} id="login">LogIn</Login>
                   {/* } */}
                
                    
                
                </Toolbar>
            </AppBar>
        </div>
    );
                }
}

export default Header;