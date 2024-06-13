import { Component, EventEmitter, Output } from '@angular/core';
import { GenericComponent } from '../generic/generic.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { ISiderbar } from 'src/app/shared/interfaces/sidebar.interface';
import { SideBarConst } from 'src/app/shared/constants/sidebar.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends GenericComponent{
  
  @Output()
  isToolbar = new EventEmitter<boolean>();
  sidebarList: string[] = ["TUTORIAIS", "CONTATOS"];
  //toolBarList: ISiderbar[] = SideBarConst;
  currentRoute: string = "default";
  
  // sidebarExpan: boolean = true;
   
  //  menuSidebar(){
  //    if(this.currentScreenSize.type_screen != 0){
  //      return;
  //    }
  //    this.sidebarExpan = !this.sidebarExpan; 
  //  }
  //  pageOnChange(routerLink:string) {
  //    this.currentRoute = routerLink;
  //    this.router.navigate([routerLink]), {relativeTo:this.route};
  //  }
   menuSidebar(){
    if(this.currentScreenSize.type_screen != 0){
      return;
    }
    this.sidebarExpan = !this.sidebarExpan; 
    this.isToolbar.emit(this.sidebarExpan);
  }
 }
