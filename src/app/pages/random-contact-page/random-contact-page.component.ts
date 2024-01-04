import { Component, Input, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {

  contact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) { }

  async ngOnInit(): Promise<void> {
    await this.randomUserService.obtenerRandomContact().subscribe((response: Results) => {
      this.contact = response.results[0];//Se lo pasamos a RandomUserComponent
    });
  }

  obtenerNuevoContacto() {
    this.randomUserService.obtenerRandomContact().subscribe(
      {
        next: (response: Results) => {
          this.contact = response.results[0];//Se lo pasamos a RandomUserComponent
        },
        error: (error) => console.error(`${error}`),
        complete: () => console.info('Peticion de contacto finalizada')
      }
    );
  }

  obtenerListaContactos(m: number) {

    this.randomUserService.obtenerRandomContacts(m).subscribe(
      {
        next: (response: Results) => {
          console.log(response);
        },
        error: (error) => console.error(`${error}`),
        complete: () => console.info('Peticion de random contacts terminada')
      }
    );

  }

}
