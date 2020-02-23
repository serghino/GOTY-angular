import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';
import { RouterModule } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ],
  exports: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
