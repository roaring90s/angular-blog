import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando o RouterModule

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
    @Input() 
    photoCover: string = ""
    @Input()
    cardTitle: string = ""
    @Input()
    cardDescription: string = ""
    @Input()
    Id: string= ""

  constructor() {}
  ngOnInit(): void {

  }

}
