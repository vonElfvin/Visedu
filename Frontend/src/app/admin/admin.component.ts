import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  links = [
    {
      path: 'skapa-problem',
      label: 'Skapa Problem',
    },
    {
      path: 'problem-lista',
      label: 'Problemlista',
    },
    {
      path: 'konton',
      label: 'Användarkonton',
    }
  ];
}
