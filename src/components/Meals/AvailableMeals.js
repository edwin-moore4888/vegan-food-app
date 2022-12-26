import meals from '/Users/jiti/web/Projects/vegan-food-app/src/data/meals.json';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {
    const mealsList = meals.map((meal) => 
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price}
            image={meal.img}
        />
    )
    return (
            <section className={classes.meals}>
                <Card>
                    <ul>{mealsList}</ul>
                </Card>
            </section>
    )
}