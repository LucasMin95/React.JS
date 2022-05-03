import { useEffect, useState } from "react"
import { itemData } from "../../data/itemData"
import ItemCard from "./ItemCard"

const ItemDetails = () => {
     const [item, setItem] = useState ([])

        useEffect(() => {
          getItem()
        }, [])
        
        const getItem = () => {
            const getItemPromise = new Promise((resolve)=>{
                setTimeout(() =>{
                    resolve (itemData)
                }, 2000)
            })

            getItemPromise.then ( data => {
                setItem(data);
            })
        }
    return (
        <div>
            {item.map( m => <ItemCard key={m.id} item={m}/>)}
        </div>
    )
}

export default ItemDetails