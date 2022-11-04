import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  adherents = [];
  tmp = [
    {
      name: 'Arthur'
    },
    {
      name: 'Fouda'
    },
    {
      name: 'Jean'
    },
    {
      name: 'Christelle'
    },
    {
      name: 'Brenda'
    },
    {
      name: 'Nina'
    },
    {
      name: 'Danielle Cynthia'
    },
    {
      name: 'Patrick'
    },
  ]
  constructor() { }

  ngOnInit() {
    this.getAdherentsList();
  }

  getAdherentsList() {
    this.adherents = this.tmp;
  }

}
