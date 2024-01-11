import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import '../sass/basket.scss'

const Basket = () => {
  const { basket ,  increase , decrease , remove} = useContext(BasketContext)
  return (
    <div className='basket'>
      <table border={1}>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Delete</th>
        </tr>
        {basket.map(item => (
          <tr>
            <td><img width={150} src={item.img} alt="" /></td>
            <td>{item.name}</td>
            <td>{item.price * item.count}</td>
            <td>
              <div className="buttons">
                <button className='minus' onClick={()=>decrease(item)}>-</button>
                <h2>{item.count}</h2>
                <button className='plus' onClick={()=>increase(item)}>+</button>
              </div>
            </td>
            <td><i onClick={()=>remove(item)}  class="fa-solid fa-trash-can"></i></td>

          </tr>

        ))}

      </table>


    </div>
  )
}

export default Basket