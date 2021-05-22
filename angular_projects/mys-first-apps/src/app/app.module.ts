import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from '@angular/forms';
import { DirectivesDeeComponent } from './directives-dee/directives-dee.component'
import { BasicHighlightDirective } from './basic-highlight/basic-highlight-directive';
import { BetterHighlightDirective } from './better-directive/better-highlight.directive';
import { UnlessDirective } from './unless-directive/unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectivesDeeComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
