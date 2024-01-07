import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from "./AvailableMeals.module.css"
import MealItem from './MealItem/MealItem';
const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const getMeals = async () => {
        try {
            const response = await fetch("https://react-food-app-bcfae-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
            const data = await response.json();

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            let mealsData = [];
            for (const key in data) {
                mealsData.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(mealsData)
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setHttpError(error.message);
        }
    }
    useEffect(() => {
        getMeals()
    }, []);
    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }
    const mealsList = meals.map((meal) => {
        return <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            itemPrice={meal.price} />
    });

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
