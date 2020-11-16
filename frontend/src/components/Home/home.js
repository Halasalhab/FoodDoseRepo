import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fastfood from "./fastfood.png"
import healthyfood from "./healthyfood.png"
import bakries from "./bakries.png"
import barbecue from "./barbecue.png"
import desert from "./desert.png"
import drinks from "./drinks.png"
import pasta from "./pasta.png"
import salad from "./salad.png"
import seafood from "./seafood.png"
import traditional from "./traditional.png"
import './home.css'

function Home() {
    return (
        <div class='container'>

            {/* <Router>
                    <Route path="/fastfoodres" exact component={() => <Fastresturant />} />
                </Router> */}
            <table align="center">
                <tr>
                    <td><img src={fastfood} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={healthyfood} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={barbecue} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={salad} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={drinks} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>
                </tr>
                <tr>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Fast Food</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Healthy Food</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Barbecue</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Salad</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Drinks</th>
                </tr>
                <tr></tr>
                <tr>
                    <td><img src={bakries} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={traditional} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={pasta} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={desert} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={seafood} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>
                </tr>
                <tr>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Bakeries</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Traditional Food</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Pasta</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Dessert</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Sea Food </th>
                </tr>
            </table>

        </div>
    );
}


export default Home;