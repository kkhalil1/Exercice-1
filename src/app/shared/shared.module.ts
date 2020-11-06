import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TranslationPipe } from './pipe/translation.pipe';
import { KanyeService } from './services/kanye.service';


@NgModule({
 
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [TranslationPipe],
  providers:[KanyeService],
  exports: [TranslationPipe]

})
export class SharedModule { }
