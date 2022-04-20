import React from 'react'

const ItemListContainer = () =>{
    const estiloLista = {
        border: "solid black 2px"
    }
    
    return (
    <ul class="menu bg-base-100 w-56" style={estiloLista}>
        <li><a>Combustibles</a></li>
        <li><a>Lubricantes</a></li>
        <li><a>Agroinsumos</a></li>
        <li><a>Servicios</a></li>       
    </ul>
    )
}


export default ItemListContainer