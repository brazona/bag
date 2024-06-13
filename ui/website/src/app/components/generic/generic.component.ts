import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { EventEmitter, Injectable, Input, OnDestroy, OnInit, Output, ViewChild} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ScreenSizeConst } from "src/app/shared/constants/screensize.const";
import { SideBarConst } from "src/app/shared/constants/sidebar.const";
import { IScreenSize } from "src/app/shared/interfaces/screensize.interface";
import { ISiderbar } from "src/app/shared/interfaces/sidebar.interface";
import { environment } from "src/environments/environment";
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute, Router } from "@angular/router";




@Injectable({
    providedIn: 'root'
  })

export abstract class GenericComponent implements OnInit, OnDestroy{
    toolBarList: ISiderbar[] = SideBarConst;
    sidebarExpan: boolean = false;

    @Output()
    isToolbarActive = new EventEmitter<boolean>();

    destroyed = new Subject<void>();
    currentScreenSize: IScreenSize = {id: '', size: '', type_screen: 0};
    currentBreakpoints: string = "";
    isHandPortrait: boolean = false;
    url_github: string = "https://github.com/session";
    url_linkedin: string = "https://br.linkedin.com";
    url_youtube: string = "https://www.youtube.com/";
    url_ui_app: string = "https://www.youtube.com/";
    protected env = environment;
    // Create a map to display breakpoint names for demonstration purposes.
    displayNameMap = new Map([
        [Breakpoints.XSmall, 'XSmall'],
        [Breakpoints.Small, 'Small'],
        [Breakpoints.Medium, 'Medium'],
        [Breakpoints.Large, 'Large'],
        [Breakpoints.XLarge, 'XLarge'],
    ]);
    constructor(public responsive: BreakpointObserver, public router: Router, public route: ActivatedRoute) {    
    }
    ngOnInit() {
        
        this.responsive
        .observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge,
        ])
        .pipe(takeUntil(this.destroyed))
        .subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
                if (result.breakpoints[query]) {
                    this.currentBreakpoints = query.toString();
                }
            }
            console.log(this.currentScreenSize);
            Array.from(ScreenSizeConst.entries()).forEach(
                
                entry =>  { 
                    if (entry[1].id.includes(this.currentBreakpoints)){
                            this.currentScreenSize = entry[1];
                        }
                    }
            );    
        });
           
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    pageOnChange(routerLink:string) {
        this.router.navigate([routerLink]), {relativeTo:this.route};
    }
}