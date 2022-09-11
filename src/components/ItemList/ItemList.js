import Item from '../Item/Item'

export const ItemList = ({ itemsList}) => {
  return (
      <>
        {itemsList.map((producto) => {
            return (
                <Item
                    name={producto.name}
                    description={producto.description}
                    price={producto.price}
                    image={producto.image}
                />    
            )
        })}
      </>
  )
}

export default ItemList