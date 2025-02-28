import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-oinit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ng-oinit.component.html',
  styleUrl: './ng-oinit.component.scss'
})
export class NgOInitComponent implements OnInit {
  constructor() {

   }

ngOnInit(): void {
    console.log('Iniciado ngOnInit');

}
}
