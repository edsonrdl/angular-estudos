import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgOnDestroyComponent } from "../ng-on-destroy/ng-on-destroy.component";

@Component({
  selector: 'app-parent',
  imports: [CommonModule, NgOnDestroyComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  stateComponente: boolean = true;

  destroyComponente() {
    this.stateComponente = false;
  }

}
