import React, { useState, useEffect } from 'react';
import Item from "./Item"

export default function ItemList(props) {
    const [Productos, setProductos] = useState([]);    
    console.log(props);
    <div>
            {Productos.map((props) => (
                <di>
                    <h1>{props.name}</h1>
                    <p>{props.id}</p>
                    <p>{props.price}</p>
                </di>
            ))}
        </div>
            


}
