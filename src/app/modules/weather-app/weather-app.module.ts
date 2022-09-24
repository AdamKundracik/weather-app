import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./pages/main/main/main.component";
import {WeatherAppRoutingModule} from "./weather-app-routing.module";
import {MainPage} from "./pages/main/main.page";
import { ContentPage } from './pages/content/content.page';
import { ContentComponent } from './pages/content/content/content.component';
import { NavComponent } from './components/nav/nav.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DaysComponent } from './components/days/days.component';
import {RouterModule} from "@angular/router";
import { SearchPage } from './pages/search/search.page';
import { SearchComponent } from './pages/search/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AutocompleteComponent} from "./components/autocomplete/autocomplete.component";
import {AutocompleteLibModule} from "angular-ng-autocomplete";



@NgModule({
  declarations: [
    MainPage,
    MainComponent,
    ContentPage,
    ContentComponent,
    NavComponent,
    WeatherComponent,
    DaysComponent,
    SearchPage,
    SearchComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    WeatherAppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AutocompleteLibModule

  ]
})
export class WeatherAppModule { }