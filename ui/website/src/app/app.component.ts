import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GenericComponent } from './components/generic/generic.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent extends GenericComponent{
  title = 'website';
  isHeaderToolBar = false;

  }
