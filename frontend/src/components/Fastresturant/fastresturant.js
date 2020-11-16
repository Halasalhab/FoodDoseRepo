import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import alrayan from "./alrayan.png"
import chilliHouse from "./chiliHouse.png"
import dayia from "./dayia.png"
import dollar from "./dollar.png"
import kfc from "./kfc.png"
import Mrbaker from "./Mrbaker.png"
import royal from "./royal.png"
import segafredo from "./segafredo.png"
import uburger from "./uburger.png"
import yummy from "./yummy.png"
import './fastresturant.css'

function Fastresturant() {
    return (
        <div class='container'>

            <table align="center">
                <tr>
                    <td><img src={kfc} alt="img" class="img" /></td>
                    <td><img src={alrayan} alt="img" class="img" /></td>
                    <td><img src={dollar} alt="img" class="img" /></td>
                    <td><img src={dayia} alt="img" class="img" /></td>
                    <td><img src={chilliHouse} alt="img" class="img" /></td>
                </tr>
                <tr>
                    <th class="text-center">KFC</th>
                    <th class="text-center">Shawerma Al-Rayan</th>
                    <th class="text-center">Dollar resturant</th>
                    <th class="text-center">Al-Daiaa</th>
                    <th class="text-center">Chilli House</th>
                </tr>
                <tr></tr>
                <tr>
                    <td><img src={Mrbaker} alt="img" class="img" /></td>
                    <td><img src={yummy} alt="img" class="img" /></td>
                    <td><img src={segafredo} alt="img" class="img" /></td>
                    <td><img src={royal} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres/royal'
                    }} /></td>
                    <td><img src={uburger} alt="img" class="img" /></td>
                </tr>
                <tr>
                    <th class="text-center">Mr.Baker</th>
                    <th class="text-center">Yummy</th>
                    <th class="text-center">Segafredo</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal' }}>Royal resturant</th>
                    <th class="text-center">U Burger</th>
                </tr>
            </table>

        </div>
    );
}


export default Fastresturant;