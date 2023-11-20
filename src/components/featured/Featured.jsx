import './Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
     <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/579739.jpg?k=210a39c70f4d63a2cde9b2cf09cadbf5b9abfebf992fa2efa4f107ccf3cfd815&o=" alt="city" className='featuredImg' />
          <div className="featuredTitles">
               <h1>Marrakech</h1>
               <h2>123 properties</h2>
          </div>
     </div>

     <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/635834.jpg?k=82039a0e3523727b23edccb4d456c311ef82c15c9ba31db89627c8fa0083e937&o=" alt="city" className='featuredImg' />
          <div className="featuredTitles">
               <h1>Essaouira</h1>
               <h2>117 properties</h2>
          </div>
     </div>

     <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/600x600/635812.jpg?k=8bfcb1ba7e1292927454d1719c7cfcca4e149dd89d2ade4edcf2c61e536696f6&o=" alt="city" className='featuredImg'/>
          <div className="featuredTitles">
               <h1>Casablanca</h1>
               <h2>96 properties</h2>
          </div>
     </div>

    </div>
  )
}

export default Featured