// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {
//   ingredients: string = '';
//   recipes: any[] = []; 

//   constructor() { }

//   ngOnInit(): void { }

//   searchRecipes() {
  
 

//    const allRecipes = [
//     { 
//       name: 'Pasta', 
//       description: 'Delicious pasta with tomatoes', 
//       ingredients: ['pasta', 'tomato'],
//       image: 'menu-item-1.png'
//     },
//     { 
//       name: 'Pizza', 
//       description: 'Delicious pasta with tomatoes', 
//       ingredients: ["Pizza"],
//       image: 'menu-item-2.png'
//     },
//     { 
//       name: 'Burger', 
//       description: 'Delicious pasta with tomatoes', 
//       ingredients: ["Burger"],
//       image: 'menu-item-3.png'
//     },
//     { 
//       name: 'Tacos', 
//       description: 'Delicious pasta with tomatoes', 
//       ingredients: ["Tacos"],
//       image: 'menu-item-4.png'
//     },
//     { 
//       name: 'Salad', 
//       description: 'Delicious pasta with tomatoes', 
//       ingredients: ["Salad"],
//       image: 'menu-item-5.png'
//     },
//     { 
//       name: 'Soup', 
//       description: 'Delicious pasta with tomatoes', 
//       ingredients: ["Soup"],
//       image: 'menu-item-6.png'
//     }
//   ];
  
  
//   const ingredientList = this.ingredients.split(',').map(ingredient => ingredient.trim().toLowerCase());
// console.log("ingredien",this.ingredients,ingredientList)
//   this.recipes = allRecipes.filter(recipe => {
//     return ingredientList.every(ingredient => 
//       recipe.ingredients.map(i => i.toLowerCase()).includes(ingredient));
//   });
// }

// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ingredients: string = '';
  recipes: any[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.recipes = this.getAllRecipes(); 
  }

  getAllRecipes() {
    return [
      { 
        name: 'Pasta', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illo eius, magni eos ipsum accusantium.', 
        ingredients: [ 'Pasta'],
        image: 'menu-item-1.png'
      },
      { 
        name: 'Pizza', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illo eius, magni eos ipsum accusantium.', 
        ingredients: [ 'Pizza'],
        image: 'menu-item-2.png'
      },
      { 
        name: 'Burger', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illo eius, magni eos ipsum accusantium.', 
        ingredients: ['Burger'],
        image: 'menu-item-3.png'
      },
      { 
        name: 'Tacos', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illo eius, magni eos ipsum accusantium.', 
        ingredients: [ 'Tacos'],
        image: 'menu-item-4.png'
      },
      { 
        name: 'Salad', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illo eius, magni eos ipsum accusantium.', 
        ingredients: ['Salad'],
        image: 'menu-item-5.png'
      },
      { 
        name: 'Soup',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illo eius, magni eos ipsum accusantium.', 
        ingredients: [ 'Soup'],
        image: 'menu-item-6.png'
      }
    ];
  }

  searchRecipes() {
    const allRecipes = this.getAllRecipes();
    const ingredientList = this.ingredients.split(',').map(ingredient => ingredient.trim().toLowerCase());
    this.recipes = allRecipes.filter(recipe => {
      return ingredientList.every(ingredient => 
        recipe.ingredients.map(i => i.toLowerCase()).includes(ingredient));
    });
  }
}
