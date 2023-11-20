import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import './hotel.css'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336582651.jpg?k=0fdfe51cc39d5b60ae98bb3b35fa23e029b21cbfa9d38a1de163d7915a0bda0f&o=&hp=1"
    },
    {
      src :"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985858.jpg?k=9d07336797a8e03c62832e9666892de67abb124f53e10c1ceee1fc4a61083bb6&o=&hp=1"
    },
    {
      src :"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985874.jpg?k=31a5cc4f6105dafecccc2bc60a804dc5e8b0360fd027e09ae3485e9a8944e49b&o=&hp=1"
    },
    {
      src :"https://cf.bstatic.com/xdata/images/hotel/max1024x768/340042987.jpg?k=352b2fa2a6128048a5e29cf17be0be918c1f5dde849e4fcb738e3d16e4a0afb0&o=&hp=1"
    },
    {
      src :"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985858.jpg?k=9d07336797a8e03c62832e9666892de67abb124f53e10c1ceee1fc4a61083bb6&o=&hp=1"
    },
    {
      src :"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985859.jpg?k=57573f2d62c70fff26480b81e074b7e1708153d365a31d7b6298f02c3a39e525&o=&hp=1"
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction ==='l'){
      newSlideNumber= slideNumber === 0 ? 5 : slideNumber-1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber);
  }

  
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
        <i className="fa-solid fa-circle-xmark close" onClick={() => setOpen(false)}></i>
        <i className="fa-solid fa-circle-chevron-left arrow" onClick={() => handleMove("l")}></i>
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <i className="fa-solid fa-circle-chevron-right arrow" onClick={() => handleMove("r")}></i>
        

        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
          <i className="fa-solid fa-location-dot"></i>
          <span> Gołębia 2, Old Town, 31-007 Krakow, Poland </span>
          </div>
          <span className="hotelDistance">Exellent location, 500m from center</span>
          <span className="hotelPriceHeightlight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {
              photos.map((photo,i) => (
                <div className="hotelImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))
            }
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">stay in the heart of Poland</h1>
              <p className="hotelDesc">
              Located in the heart of the Old Town, Aparthotel Stare Miasto offers meticulously designed, air-conditioned apartments with brick and wooden elements, as well as free WiFi, flat-screen TVs and fully equipped kitchenettes. All these features translate to a warm feel and a comfortable stay, appreciated by guests from all around the world.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-night stay!</h1>
              <span>Located in the heart of the Old Town, this property has an exellent location score of 9.8!</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel