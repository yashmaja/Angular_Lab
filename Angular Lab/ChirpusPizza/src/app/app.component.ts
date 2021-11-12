import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';

  categories : string[] = ["Dinner", "Sides", "Salads", "Dessert"]

  menuList : MenuItem[] = [
    {item: "Chicken Fingers", category: this.categories[0], price: 11.99},
    {item: "Pizza", category: this.categories[0], price: 11.99},
    {item: "Wings", category: this.categories[1], price: 8.99},
    {item: "Breadsticks", category: this.categories[1], price: 4.99},
    {item: "Caesar Salad", category: this.categories[2], price: 5.99},
    {item: "Cinnamon Roll", category: this.categories[3], price: 8.99}
  ]

  GetByCategory(cat : string) : MenuItem[] {
    return this.menuList.filter((I:MenuItem) => I.category == cat);
  }
}
