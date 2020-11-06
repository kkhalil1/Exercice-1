
import {Routes} from '@angular/router'
import { MasterLayoutComponent } from './master-layout.component'
export class MasterRoute {

  static withMaster(routes:Routes):Routes{
    return [{
      path:'',
      component:MasterLayoutComponent,
      children:routes
    }]
  }
}
