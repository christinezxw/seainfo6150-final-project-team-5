import React from 'react'
import dishes from "./data/dishes.json";
import DishDetail from "./DishDetail.jsx"

const DishDetailPage = () => {
    
    return (
        <DishDetail dish={Object.values(dishes)[0]}/>
    )
}

export default DishDetailPage
