import React from "react"

export default function producto({item, saludar }) {
 saludar();
  return (

    <div class="">
      <div className="card">
        <h1>{item.nombre}</h1>
        <div className="card-title">
          <p>{item.id}</p>
        </div>
        <div className="card-content">
          <span className="card-title">{item.simbolo}</span>
          <div>

          </div>
        </div>
        <div className="card-data">
          <p>electronegatividad</p>
          <p>{item.electroNegatividad}</p>
        </div>
        <div>
          <form />
          <button className="btnAdd" id="{producto.simbolo}">Agregar al carrito</button>

      </div>
    </div>
                    </div >
         
      
  )
}
