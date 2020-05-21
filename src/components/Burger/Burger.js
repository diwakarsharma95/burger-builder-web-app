import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	let trasnformedIngredient = Object.keys(props.ingredients)
		.map((ingredientKey) => {
			return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
				return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}></BurgerIngredient>;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	if (trasnformedIngredient.length === 0) {
		trasnformedIngredient = <p>Please start adding ingredients</p>;
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type='bread-top'></BurgerIngredient>
			{trasnformedIngredient}
			<BurgerIngredient type='bread-bottom'></BurgerIngredient>
		</div>
	);
};

export default burger;
