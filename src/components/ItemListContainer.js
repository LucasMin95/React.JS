import React from 'react'

const ItemListContainer = ({productos}) =>{
    const estiloLista = {
        border: "solid black 2px"
    }
    
    return (
    <ul class="menu bg-base-100 w-56" style={estiloLista}>
        <li><a>{productos}</a></li> 
    </ul>
    )
}


export default ItemListContainer