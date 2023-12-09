import { Component } from '@angular/core';


type MenuItem = {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public ractiveMenu: MenuItem[] = [
    { title:'Basics', route:'./reactive/basic'},
    { title:'Dynamics', route:'./reactive/dynamic'},
    { title:'Switches', route:'./reactive/switches'},
  ];

  public authMenu: MenuItem[] = [
    { title:'Register', route:'./auth'},
  ]



}
