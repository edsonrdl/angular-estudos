import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-on-destroy',
  imports: [],
  templateUrl: './ng-on-destroy.component.html',
  styleUrl: './ng-on-destroy.component.scss'
})
export class NgOnDestroyComponent implements OnDestroy{
  
  ngOnDestroy(): void {
    console.log('Componente foi destruído');
  }

}
