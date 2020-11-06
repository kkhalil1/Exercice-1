import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@env';
import { Idle, DocumentInterruptSource, StorageInterruptSource } from '@ng-idle/core'
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Leonteq';
  constructor(
    public translate: TranslateService,
    private matDialog: MatDialog) {

    translate.addLangs(environment.supportedLanguages);
    translate.use(environment.defaultLanguage)
    translate.setDefaultLang(environment.defaultLanguage);
  }
}
