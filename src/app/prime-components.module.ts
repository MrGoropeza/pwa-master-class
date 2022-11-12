import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ImageModule} from 'primeng/image';

@NgModule({
  exports: [
    ButtonModule, 
    InputSwitchModule,
    ScrollPanelModule,
    ImageModule
  ]
})
export class PrimeComponentsModule { }
