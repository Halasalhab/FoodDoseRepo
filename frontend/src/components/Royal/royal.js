import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import royalres from "./royalres.png"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './royal.css'

function Royal() {
    return (
        <div className='royal'>
            <div className='royalimg'>
                <img src={royalres} alt="img" class="royalimg" />
                <div class="royalinfo">
                    <h1>Contact Details</h1>
                    <h2>Address: Hebron - AlHaras</h2>
                    <h3>Phone: 022227210</h3>
                </div>

                <div class="royalsocial">
                    <a href="https://www.facebook.com/" ><FacebookIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                    <a href="https://www.instagram.com/" ><InstagramIcon style={{ color: "black", fontSize: "xx-large" }} /></a>
                    <a href="https://www.twitter.com/" ><TwitterIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                </div>
            </div>
        </div >
    )
}

export default Royal;