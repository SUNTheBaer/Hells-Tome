import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boons',
  templateUrl: './boons.component.html',
  styleUrls: ['./boons.component.css']
})
export class BoonsComponent implements OnInit {
  
  weapons = [
    {name: "Aphrodite", img: "./assets/Aphrodite.png"},
    {name: "Ares", img: "./assets/Ares.png"},
    {name: "Artemis", img: "./assets/Artemis.png"},
    {name: "Athena", img: "./assets/Athena.png"},
    {name: "Demeter", img: "./assets/Demeter.png"},
    {name: "Dionysus", img: "./assets/Dionysus.png"},
    {name: "Hermes", img: "./assets/Hermes.png"},
    {name: "Poseidon", img: "./assets/Poseidon.png"},
    {name: "Zeus", img: "./assets/Zeus.png"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
