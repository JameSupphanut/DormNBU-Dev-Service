import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './project/core/footer/footer.component';
import { HeaderComponent } from './project/core/header/header.component';
import { MenuComponent } from './project/core/menu/menu.component';
import { SettingComponent } from './project/core/setting/setting.component';
import { LoginComponent } from './project/core/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './project/components/profile/profile.component';
import { AddComponent } from './project/components/add/add.component';
import { AddPromotionComponent } from './project/components/add-promotion/add-promotion.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'addDorm', component:AddComponent},
  {path: 'addPro', component:AddPromotionComponent},
  {path: '**', redirectTo:'/login'}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SettingComponent,
    LoginComponent,
    ProfileComponent,
    AddComponent,
    AddPromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
