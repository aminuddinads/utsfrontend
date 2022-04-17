
import React, {Component } from 'react'
import Ganti from './Ganti'

export default class App extends Component {
  constructor(prop){
    super(prop)
    this.state ={
      Daftar: ['Mahasiswa:', 'Randi','Dendi', 'Alex']
    }
  }
  
  ubahDaftar = (Mahaswi) => {
    this.setState({
      Daftar: Mahaswi
    })
  }
  render(){
    return(
      <div className="App"> 
      <h1>{this.state.Daftar[0]}</h1>
       <h2><ul>
         <li>{this.state.Daftar[1]}</li>
         <li>{this.state.Daftar[2]}</li>
         <li>{this.state.Daftar[3]}</li>
         
         </ul></h2>
         <button onClick={() => this.ubahDaftar(['Mahasiswi:','Amanda','Della','Monica'])}>Mahasiswi</button>
         <hr/>
         <Ganti Daftar={this.state.Daftar} ubahDaftar={this.ubahDaftar}/>
    

        <li>Nama : AMINUDDIN</li>
        <li>NIM : 1120101847</li>
     </div>

    )
  }
}

