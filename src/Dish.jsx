import React from 'react'

export const Dish = ({name, types}) => {
  return (
    <div className='dish'>
      <p className='dish-name'>{name}</p>
      <img className='dish-img' src='https://firebasestorage.googleapis.com/v0/b/elfamosotexcoco-c1801.appspot.com/o/dish.png?alt=media&token=20e7f9c5-60df-4d31-814e-7c07c75e8a28' title='' alt='' />
      {
        types.map(type => {
          return <p className='dish-type' key={type}>{type}</p>
        })
      }
    </div>
  )
}
