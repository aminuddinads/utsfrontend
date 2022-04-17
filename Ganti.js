import React, { Component } from 'react'


export default class Ganti extends Component {
  render() {
      const {Daftar, ubahDaftar} =this.props
    return (
      <div>
          <h1>Ganti "state" Menjadi "Props</h1>
          <h1>{Daftar[0]}</h1>
       <h2><ul>
         <li>{Daftar[1]}</li>
         <li>{Daftar[2]}</li>
         <li>{Daftar[3]}</li>
         
         </ul></h2>
         <button onClick={() => ubahDaftar(['Mahasiswi:','Amanda','Della','Monica'])}>Mahasiswi</button>

      </div>
    )
  }
}
