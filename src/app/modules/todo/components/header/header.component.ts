import { Component, OnInit } from '@angular/core';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOnDarkTheme: boolean;

  constructor(
    private themeService: ThemeService
  ) { 
    themeService.setOSTheme();
    this.isOnDarkTheme = themeService.getTheme() === "dark";
  }

  ngOnInit(): void {
  }
  
  themeSwitchClick(event: InputSwitchOnChangeEvent){
    if(event.checked){this.themeService.setDarkTheme()}
    else{this.themeService.setLightTheme()}
  }
  
}
