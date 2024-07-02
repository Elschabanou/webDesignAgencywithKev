import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {HeaderComponent} from "./components/common/header/header.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "test",
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
