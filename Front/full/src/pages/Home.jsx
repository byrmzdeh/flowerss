import React, { useContext, useEffect, useState } from 'react'
import '../sass/home.scss'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'

const Home = () => {
    const [data, setData] = useState([])
    const {addBasket}= useContext(BasketContext)

    function getAll() {
        fetch('http://localhost:7000/')
            .then((res) => res.json())
            .then((api) => setData(api))

    }
    useEffect(() => {
        getAll()
    }, [])

    function deletById(id) {
        fetch('http://localhost:7000/' + id, { method: 'DELETE' })
            .then((res) => res.json)
            .then((api) =>
                getAll())
    }

    return (
        <div className='home'>
            <div className="one"></div>
            <div className="two">
                <div className='write'>
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet, pri <br /> omnium verterem id, sit labore dicunt <br /> an, ea civibus.</p>
                    <button>Read More</button>
                </div>
                <img width={600} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="err" />
            </div>
            <div className="three">
                <p>Devoted to wonderful beauty</p>
                <h1>Our Portfolio</h1>
                <div className="cards">
                    {data.map(item => (
                     
                            <div className="card">
                                <div className='eye'><Link to={`/${item._id}`}> <i class="fa-solid fa-eye"></i> </Link></div>
                                <div className='heart'><i class="fa-regular fa-heart"></i></div>
                                <div className='trash'  onClick={() => deletById(item._id)}><i class="fa-solid fa-trash-can"></i></div>
                                <img width={380} src={item.img} alt="" />
                                <h2>{item.name}</h2>
                                <p>$ {item.price}</p>
                                <button onClick={()=>addBasket(item)}>Add To Cart</button>
                            </div>
                
                    ))}
                </div>
            </div>

            <div className="four">
                <p>Devoted to wonderful beauty</p>
                <h1>Events Pricing</h1>
                <div className="cards">

                    <div className="card">
                        <p><span>$16 per</span> table</p>
                        <h2>Birthday Events</h2>
                        <p className='lorem'>Lorem ipsum dolor sit amet <br /> laudem partem perfecto per</p>
                        <button>Shop Now</button>
                    </div>

                    <div className="card">
                        <p><span>$16 per</span> table</p>
                        <h2>Birthday Events</h2>
                        <p className='lorem'>Lorem ipsum dolor sit amet <br /> laudem partem perfecto per</p>
                        <button>Shop Now</button>
                    </div>

                    <div className="card">
                        <p><span>$16 per</span> table</p>
                        <h2>Birthday Events</h2>
                        <p className='lorem'>Lorem ipsum dolor sit amet <br /> laudem partem perfecto per</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>

            <div className="five">
                <p>Contacts</p>
                <h1>Our Team</h1>
                <div className="cards">

                    <div className="card">
                        <img width={370} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
                        <h2>Velva Kopfs</h2>
                        <p>Biologist</p>
                    </div>

                    <div className="card">
                        <img width={370} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
                        <h2>Sarah Palmer</h2>
                        <p>Florist</p>
                    </div>

                    <div className="card">
                        <img width={370} src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
                        <h2>Jessica Swift</h2>
                        <p>Photographer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home