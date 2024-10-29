import { ISiderbar } from '../interfaces/sidebar.interface';

export const SideBarConst: ISiderbar[] = [ 
    {
        name: "HOME",
        routerLink: "/home",
        tagHTML: "<app-contacts></app-contacts>"
        
    },
    {
        name: "TUTORIAL",
        routerLink: "/tutorial",
        tagHTML: "<app-contacts></app-contacts>"
        
    },
    {
        name: "CONTATOS",
        routerLink: "/contacts",
        tagHTML: '<app-contacts></app-contacts>'
    }
]