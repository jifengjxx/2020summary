import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import {SafetyfireModule} from './safetyfire/safety.module';


import { AppComponent } from './app.component'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: 'safety',
    pathMatch: 'full'
  },
    // 当前版本有两种写法
  {
    path: 'safety',
    loadChildren: './safetyfire/safety.module#SafetyfireModule'
    // loadChildren: () => import('@app/safetyfire/safety.modules#SafetyfireModule').then( m => m.SafetyfireModule)
  }, 
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    SafetyfireModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
