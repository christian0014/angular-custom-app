import { Component } from '@angular/core';
import { ModalService } from './services/modal/modal.service';
import { GenericMessageComponent } from './components/generic-message/generic-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.open(GenericMessageComponent);
  }
}
