import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando o RouterModule


@Component({
  selector: 'app-big-card',
  imports: [RouterModule], // Incluindo RouterModule para habilitar o routerLink
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

    @Input() 
    photoCover: string = ""
    @Input()
    cardTitle: string = ""
    @Input()
    cardDescription: string = ""
    @Input()
    Id: string= "0"

    constructor(){}



  ngOnInit(): void {
  }
    
}
