import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IonButton, IonImg, IonText, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonImg, IonText, IonInput, FormsModule],
})
export class HomePage {

edad:number = 0;
resultado:string = '';

  constructor() {}

  calcular() {
    let edadCanina: number= this.edad * 7;
    this.resultado = 'La edad Canina de su mascota es: '+ edadCanina + ' años';

  }



}