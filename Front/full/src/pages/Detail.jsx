import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../sass/detail.scss'

const Detail = () => {
    const {id} = useParams()
    const [detail , setDetail] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/')
        .then((res) => res.json())
        .then((api) =>{
            const itemDetail= api.find((x)=>x._id === id)
            setDetail(itemDetail)
        })
      
    
  
    }, [])
    
  return (
    <div className='detail'>
        <img width={400} height={400} src={detail.img} alt="" />
        <div className='write'>
            <h2>Name : {detail.name}</h2>
            <h3>Price : ${detail.price}</h3>

        </div>
    </div>
  )
}

export default Detail