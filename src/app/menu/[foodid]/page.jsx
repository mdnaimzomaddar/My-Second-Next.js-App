import React from 'react';

const FoodDetails = async({params}) => {
    const {foodid} = await params

    const ref = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodid}`)
    const data = await ref.json()
    const {dish_name, image_link, origin_and_popularity} = data.data
    return (
        <div>
            <h2>Food Details : {foodid} </h2>
            <div>
                <h2>Food Name : {dish_name}</h2>
                <p>Food details: {origin_and_popularity}</p>
            </div>
        </div>
    );
};

export default FoodDetails;