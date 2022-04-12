import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Forma 1 - Instalando Bootstrap con Angular';

  ngOnInit(): void {
    $(()=> {
      console.log('ready!');

      $('#my-button').on('click', () => {
        alert('Hola desde un evento manejado con Jquery');
      });
    });
  }
}
