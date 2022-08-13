import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomComponent } from './room/room.component';
import { ComputerComponent } from './computer/computer.component';
import { DesktopComponent } from './desktop/desktop.component';

const routes: Routes = [
  { path: '', component: RoomComponent },
  { path: 'computer/login', component: ComputerComponent },
  { path: 'computer/desktop', component: DesktopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
