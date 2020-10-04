import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css']
})
export class NewRunComponent implements OnInit {
  weapons = [
    {name: "Stygian Blade", img: "./assets/StygianBlade.png"},
    {name: "Eternal Spear", img: "./assets/EternalSpear.png"},
    {name: "Shield of Chaos", img: "./assets/ShieldOfChaos.png"},
    {name: "Heart-Seeking Bow", img: "./assets/HeartSeekingBow.png"},
    {name: "Twin Fists of Malphon", img: "./assets/TwinFistsOfMalphon.png"},
    {name: "Adamant Rail", img: "./assets/AdamantRail.png"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
