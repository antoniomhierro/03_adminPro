import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  // busco el jquery que toca el theme en el document. Está en el index.
  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>;

  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  // recibe una palabra clave desde el html al elegir un tema
  changeTheme(theme: string){
    // construyo la url dependiendo de la selección del usuario
    const url = `./assets/css/colors/${ theme }.css`;
    // ahora junto el url construido al href
    this.linkTheme.setAttribute('href', url);
    // le doy persistencia al cambio del theme
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){

    this.links.forEach( elem => {
    elem.classList.remove('working');
    const btnTheme = elem.getAttribute('data-theme');
    const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
    const currentTheme = this.linkTheme.getAttribute('href');

    if ( btnThemeUrl === currentTheme ){
      elem.classList.add('working');
    }
  });
  }

}
