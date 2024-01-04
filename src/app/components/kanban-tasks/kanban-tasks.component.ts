import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.scss']
})
export class KanbanTasksComponent {
  todo = [
    'Aprender animaciones en Angular',
    'Aprender a gestionar Angular CLI',
    'Aprender a hacer una build en Angular',
    'Aprender a desplegar bundle de Angular',
  ];

  done = [
    'Aprender JS y ES',
    'Aprender Typescript',
    'Instalar Angular',
    'Configurar IDE',
    'Crear HolaMundo en Angular',
    'Aprender a gestionar Componentes en Angular',
    'Aprender a gestionar Servicios en Angular',
    'Aprender a gestionar Directivas en Angular',
    'Aprender a gestionar Pipes en Angular',
    'Aprender a gestionar peticiones HTTP en Angular',
    'Aprender a gestionar Angular Material y sus Schematics en Angular',
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
