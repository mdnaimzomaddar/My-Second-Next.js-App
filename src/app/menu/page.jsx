import React from 'react';
import FoodCard from '../components/FoodCard';

const MenuPage = async() => {

    const ref = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const menu = await ref.json()
    const foods = menu.data
    return (
        <div>
            <h2>Manu page</h2>
            <div className='grid grid-cols-3 gap-4'>
                {foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)}
            </div>
        </div>
    );
};

export default MenuPage;