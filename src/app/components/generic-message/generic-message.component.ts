import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  imports: [NgFor],
  standalone: true,
  selector: 'generic-message',
  templateUrl: './generic-message.component.html',
  styleUrl: './generic-message.component.scss'
})
export class GenericMessageComponent {

  constructor(public modalService: ModalService) {}

}
