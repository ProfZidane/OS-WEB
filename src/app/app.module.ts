import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DialogModule } from 'primeng/dialog';
import { TerminalModule } from 'primeng/terminal';
import { TerminalService } from 'primeng/terminal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DockModule,
    MenubarModule,
    DialogModule, 
    TerminalModule
  ],
  providers: [TerminalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
