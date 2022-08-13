import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { ComputerComponent } from './computer/computer.component';
import { LoginComponent } from './computer/login/login.component';
import { FormsModule } from '@angular/forms';
import { DesktopComponent } from './desktop/desktop.component';
import { FolderComponent } from './desktop/folder/folder.component';
import { IndiceDirective } from './directives/indice.directive';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    ComputerComponent,
    LoginComponent,
    DesktopComponent,
    FolderComponent,
    IndiceDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
