import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import { AboutPage } from '../pages/about/about';
import { MainPage } from '../pages/main/main';

@NgModule({
  declarations: [
    App,
    MainPage,
    AboutPage,
  ],
  imports: [
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    MainPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
