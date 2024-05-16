import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Mapo Tofu', 'Mapo Tofu is a famous Sichuan dish known for its spicy, numbing flavors. It features soft tofu and minced pork in a sauce made from fermented black beans, chili paste, and Sichuan peppercorns. Often served over rice, this dish offers a bold and satisfying taste, making it a beloved staple in Chinese cuisine.', 'https://bing.com/th?id=OSK.4f6a7a199cc2dd73a5cb974dec7071e5')
  ];
}
