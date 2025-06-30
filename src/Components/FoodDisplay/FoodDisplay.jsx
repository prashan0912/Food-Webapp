import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import { FoodItem } from '../FoodItem/FoodItem'
export const FoodDisplay = ({ category }) => {

    const { foodList } = useContext(StoreContext)

    return (
        <div>
            <div className="food-display" id="food-display">
                <h2>Top Dishes near you</h2>
                <div className="food-display-list">
                    {foodList.map((item, index) => {
                        if (category === 'All' || category === item.category) {
                            return (
                                <>
                                    <FoodItem key={index}
                                        id={item.id}
                                        name={item.name}
                                        image={item.image}
                                        price={item.price}
                                        description={item.description}
                                        category={item.category} />
                                </>
                            )
                        }
                    })}
                </div>
            </div>

        </div>
    )
}
export default FoodDisplay
