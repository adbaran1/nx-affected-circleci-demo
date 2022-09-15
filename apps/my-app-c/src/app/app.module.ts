import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { MyLibAModule } from '@nx-affected-circleci-demo/my-lib-a';
import { MyLibBModule } from '@nx-affected-circleci-demo/my-lib-b';
import { MyLibCModule } from '@nx-affected-circleci-demo/my-lib-c';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    MyLibAModule,
    MyLibBModule,
    MyLibCModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
