import Item from "../Item/Item"

const ItemDetail = ({data}) => {
  return (
    <>
        {data.map((producto) => {
            return (
                <Item
                    image={producto.image}
                    description={producto.description}
                    price={producto.price}
                />    
                    
                   
            )
        })}
      </>
    
  )
}

export default ItemDetail