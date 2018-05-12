import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  links = [
    {
      path: 'problem-lista',
      label: 'Problemlista',
    },
    {
      path: 'skapa-problem',
      label: 'Skapa Problem',
    },
    {
      path: 'konton',
      label: 'Användarkonton',
    }
  ];
}
