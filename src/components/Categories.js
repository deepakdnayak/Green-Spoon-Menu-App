import React from 'react'
import BreakFast from '../images/breakfast.png'
import Lunch from '../images/lunch.png'
import Dinner from '../images/dinner.png'
import Starters from '../images/starter.png'
import AllFood from '../images/allfood.png'
import Drinks from '../images/drinks.png'
import Desserts from '../images/desserts.png'
import Snacks from '../images/snacks.png'

const Categories = () => {
  return (
    <div className="container">
      <div className="row mt-2">

        <div className="col-3 px-2 text-center ">
          <button type="button" className="btn border border-success border-2 rounded-3 w-100">
            <img className="mb-2" src={AllFood} alt="All Food" width={50} /><br/>
            <span>All Food</span>
          </button>
        </div>

        <div className="col-3 px-2 text-center ">
          <button type="button" className="btn border border-success border-2 rounded-3 w-100">
            <img className="mb-2" src={Starters} alt="Starters" width={50} /><br/>
            <span>Starters</span>
          </button>
        </div>

        <div className="col-3 px-2 text-center ">
          <button type="button" className="btn border border-success border-2 rounded-3 w-100">
            <img className="mb-2" src={BreakFast} alt="Breakfast" width={50} /><br/>
            <span>Breakfast</span>
          </button>
        </div>

        <div className="col-3 px-2 text-center ">
          <button type="button" className="btn border border-success border-2 rounded-3 w-100">
            <img className="mb-2" src={Lunch} alt="Lunch" width={50} /><br/>
            <span>Lunch</span>
          </button>
        </div>

      </div>

      <div className="row mt-2">

        <div className="col-3 px-2 text-center ">
          <button type="button" className="btn border border-success border-2 rounded-3 w-100">
            <img className="mb-2" src={Dinner} alt="Dinner" width={50} /><br/>
            <span>Dinner</span>
          </button>
        </div>

        <div className="col-3 px-2 text-center ">
          <button type="button" className="btn border border-success border-2 rounded-3 w-100">
            <img className="mb-2" src={Snacks} alt="Snacks" width={50} /><br/>
            <span>Snacks</span>
          </button>
        </div>

        <div className="col-3 px-2 text-center ">
          <button type="button" className="btn border border-success border-2 rounded-3 w-100">
            <img className="mb-2" src={Drinks} alt="Drinks" width={50} /><br/>
            <span>Drinks</span>
          </button>
        </div>

        <div className="col-3 px-2 text-center ">
          <button type="button" className="btn border border-success border-2 rounded-3 w-100">
            <img className="mb-2" src={Desserts} alt="Desserts" width={50} /><br/>
            <span>Desserts</span>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Categories
