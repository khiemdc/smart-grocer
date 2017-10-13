Overall Concept: A meal planner that allows user to see possible meal ideas base on set preferences. Once desired meal are chosen the ingredients will be added to the shopping list app then shows you the the total calories for each meal added.  
Why we feel it’s valuable:
* Easily set preference for dietary needs 
* It allows user to plan the meal and create grocery list simultaneously 
* Give calories count to assist with controlling the user's daily calories intake 
Breakdown of Roles:

Claire & Terrence: Front-end (React.js)	
Khiem: Authentication (Google), database (Mongo)
Andrea: API calls, routing
New technologies: D3 &  ChartJS
Wireframe:

API: Recipe Puppy:
"title": "Recipe Puppy",
"version": 0.1,
"href": "http://www.recipepuppy.com/",
"results": [
{"
title": "Home Fried Chicken Recipe",
"href":"http://www.grouprecipes.com/11241/home-fried-chicken.html",
"ingredients": "milk, bacon grease, flour, potato, chicken",
"thumbnail": "http://img.recipepuppy.com/267093.jpg"
},
* We will use this API for the image, ingredients & recipe
* The user will be able to see the image and decide to add the recipe to there daily or weekly meal plan
* Once the meal is added, the ingredients will be uploaded to their grocery list  

API: NutritionIX
"hits": [
{
"_index": "f762ef22-e660-434f-9071-a10ea6691c27",
"_type": "item","_id": "513fceb775b8dbbc21002de8",
"_score": 12.69504,
"fields": {
"item_id": "513fceb775b8dbbc21002de8",
"item_name": "Flour - 1 cup",
"brand_name": "USDA",
"nf_calories": 455,
"nf_total_fat": 1.23,
"nf_serving_size_qty": 1,
"nf_serving_size_unit": "serving"
}

* We will use this API to get the calories for each item that is added to our grocery list
* We will give the user the total calories for the for the meal they adding to their email plan 
* This API also gives serving size so we can implement the 


User Stories:
As a working millennial, I want to simplify my meal planning  because of lack of time so that I adequately plan for the week. 
As a person who doesn’t know a lot about nutrition, I want a way to find out the meals I’m eating are healthy so that I can make conscious decision on what I eat.


