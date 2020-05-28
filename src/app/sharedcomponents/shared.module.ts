import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    }
  }

}
