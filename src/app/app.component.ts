import { Component } from '@angular/core';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isOnDarkTheme: boolean;

  constructor(
    private themeService: ThemeService
  ){
    themeService.setOSTheme();
    this.isOnDarkTheme = themeService.getTheme() === "dark";
  }

  themeSwitchClick(event: InputSwitchOnChangeEvent){
    if(event.checked){this.themeService.setDarkTheme()}
    else{this.themeService.setLightTheme()}
  }

}
