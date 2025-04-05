import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myfirst',
  imports: [MatButtonModule, CommonModule, FormsModule],
  templateUrl: './myfirst.component.html',
  styleUrl: './myfirst.component.css'
})
export class MyfirstComponent {
  number:number = 0;
  username = this.number < 5 ? "tejas" : "anu"
  imagesource = "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"

  constructor(private router:Router){}
  routing(){
    this.router.navigate(["second"])
  }

  show() {
    this.number++
  }
}
