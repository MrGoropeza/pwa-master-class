import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InputSwitchOnChangeEvent } from 'primeng/inputswitch';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { CheckAuths } from 'src/app/modules/auth/store/actions/check-auth.actions';
import { SignOuts } from 'src/app/modules/auth/store/actions/sign-out.actions';
import { State } from 'src/app/modules/auth/store/reducer/auth.reducer';
import { getAuthUser } from 'src/app/modules/auth/store/selector/auth.selectors';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: Observable<UserModel | null>;

  isOnDarkTheme: boolean;

  constructor(
    private themeService: ThemeService,
    private authStore: Store<State>
  ) { 
    themeService.setOSTheme();
    this.isOnDarkTheme = themeService.getTheme() === "dark";
  }

  ngOnInit(): void {
    this.authStore.dispatch(CheckAuths());
    this.user = this.authStore.select(getAuthUser);
  }
  
  themeSwitchClick(event: InputSwitchOnChangeEvent){
    if(event.checked){this.themeService.setDarkTheme()}
    else{this.themeService.setLightTheme()}
  }

  signout(){
    this.authStore.dispatch(SignOuts());
  }
  
}
