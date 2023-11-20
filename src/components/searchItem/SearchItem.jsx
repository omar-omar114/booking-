import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
     <img src="https://cf.bstatic.com/xdata/images/hotel/square200/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="siImg" />
     <div className="siDesc">
          <h1 className="siTitle">Tower street apartement</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="subTitle">Studio apartement with air conditioning</span>
          <span className='siFeatures'>Entire studio • 1 bathroom • 21m²</span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>
     </div>
     <div className="siDetails">
          <div className="siRating">
               <span>Exellent</span>
               <button>8.9</button>
          </div>
          <div className="siDetailTexts">
               <span className="siPrice">$123</span>
               <div className="siTaxtOp">Includes taxes and fees</div>
               <button className='siCheckButton'>See Availability</button>
          </div>
     </div>
    </div>
    
  )
}

export default SearchItem