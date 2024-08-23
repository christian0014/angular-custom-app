import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, Injectable, Type } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  newModalComponent!: ComponentRef<ModalComponent>

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) { }


  open(component: Type<unknown>) {
    const newComponent = createComponent(component, {
      environmentInjector: this.injector
    });

    this.newModalComponent = createComponent(ModalComponent, {
      environmentInjector: this.injector,
      projectableNodes: [[newComponent.location.nativeElement]],
    });

    document.body.appendChild(this.newModalComponent.location.nativeElement);
    this.appRef.attachView(newComponent.hostView);
    this.appRef.attachView(this.newModalComponent.hostView);
  }

  
  close() {
    this.newModalComponent.destroy();
  }
}
