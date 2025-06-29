import React from 'react'
import { foodtype } from '../../assets/foodType/foodtype'
import './ExploreMenu.css'
export const ExploreMenu = () => {
    return (
        <div>
            <div className='exploreMenu'>
                <h1 className='explore-menu-title'>Explore our Menu</h1>
                <p className='explore-menu-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolores unde minima enim asperiores cupiditate explicabo repellendus suscipit quisquam nobis nesciunt ipsam consequatur omnis eos laudantium cumque, temporibus fugit delectus!</p>
                <div className="exploreMenu-list">
                    {
                        foodtype.map((item, index) => {

                            return(
                                <div key={index} className="explore-menu-list-item">
                                    <img className='foodTypeImage' src={item.food_img} alt=""  style={{height:200, width:200}}/>
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