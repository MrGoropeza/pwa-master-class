import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  exports: [
    ButtonModule, 
    InputSwitchModule,
    ScrollPanelModule,
    ImageModule,
    InputTextModule,
    RippleModule
  ]
})
export class PrimeComponentsModule { }
