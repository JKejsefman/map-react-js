import React from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  const itemList = [
    {
      id: 1,
      title: 'Habitacion Single',
      price: '$3000',
      imageUrl: 'https://www.whitehotel.com/files/hotel/hotel-b/hotel-white-rome-Camera-Standard.jpg'
    },
    {
      id: 2,
      title: 'Habitacion Doble<',
      price: '$5500',
      imageUrl: 'https://www.whitehotel.com/files/hotel/hotel-b/02-rooms/camera_standard_4.jpg'
    },
    {
      id: 3,
      title: 'Suite Junior',
      price: '$4500',
      imageUrl: 'https://www.whitehotel.com/files/hotel/hotel-b/junior_Suite.jpg'
    }
  ]

  return (
    <div className='list-item-container'>
        {itemList.map((item, i) => <Item item={item} key={item.id} />)}
    </div>
  )
}

export default ItemListContainer