import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css']
})
export class NewRunComponent implements OnInit {
  weapons = [
    {name: "Stygian Blade", img: "./assets/StygianBlade.png", aspect1: "Aspect of Zagreus", aspect2: "Aspect of Nemesis", aspect3: "Aspect of Poseidon", aspect4: "Aspect of Arthur"},
    {name: "Eternal Spear", img: "./assets/EternalSpear.png", aspect1: "Aspect of Zagreus", aspect2: "Aspect of Achilles", aspect3: "Aspect of Hades", aspect4: "Aspect of Guan Yu"},
    {name: "Shield of Chaos", img: "./assets/ShieldOfChaos.png", aspect1: "Aspect of Zagreus", aspect2: "Aspect of Chaos", aspect3: "Aspect of Zeus", aspect4: "Aspect of Beowulf"},
    {name: "Heart-Seeking Bow", img: "./assets/HeartSeekingBow.png", aspect1: "Aspect of Zagreus", aspect2: "Aspect of Chiron", aspect3: "Aspect of Hera", aspect4: "Aspect of Rama"},
    {name: "Twin Fists of Malphon", img: "./assets/TwinFistsOfMalphon.png", aspect1: "Aspect of Zagreus", aspect2: "Aspect of Talos", aspect3: "Aspect of Demeter", aspect4: "Aspect of Gilgamesh"},
    {name: "Adamant Rail", img: "./assets/AdamantRail.png", aspect1: "Aspect of Zagreus", aspect2: "Aspect of Eris", aspect3: "Aspect of Hestia", aspect4: "Aspect of Lucifer"}
  ]

  e = document.getElementById("aspect")
  //selectedWeapon = e.options[e.selectedIndex].value;

  constructor() { }

  ngOnInit(): void {
  }

}
