import React from 'react'
import { foodtype } from '../../assets/foodType/foodtype'
import './ExploreMenu.css'
export const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div>
            <div className='exploreMenu'>
                <h1 className='explore-menu-title'>Explore our Menu</h1>
                <p className='explore-menu-title'>This restaurant is the best restaurant and very famous and very delicious food we delivery to the user</p>
                <div className="exploreMenu-list">
                    {
                        foodtype.map((item, index) => {

                            return (
                                <div key={index} className="explore-menu-list-item"
                                    onClick={() => { setCategory(prev => prev === item.food_name ? "All" : item.food_name) }}>

                                    <img className='foodTypeImage'
                                        src={item.food_img} alt=""
                                        style={{ height: 200, width: 200 }} />

                                    <p>{item.food_name}</p>
                                </div>
                            )

                        })
                    }

                </div>
            </div>


        </div>
    )
}
export default ExploreMenu