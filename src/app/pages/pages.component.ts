import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

    // busco el jquery que toca el theme en el document. Está en el index.
    public linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    // busco en localstorage un theme, si no lo hay le pongo uno por defecto.
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    // aplico el theme al document
    this.linkTheme.setAttribute('href', url);
  }

}
