import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';

  token: string | null = null;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }
}



//Paso de información entre componentes
// 1. A través de @Inputs y @Outputs
// 2. A través de inyección de constructores de componentes hijos @ViewChild, @ContentChild o  @ContentChildren
// 3. A través de Servicios (Promesas, Observables) --> NGRX(Gestión del estado de la app)
// 4. A través de parámetros de rutas
