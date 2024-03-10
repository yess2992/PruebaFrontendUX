import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
 declarations: [
    AppComponent,
    MenuComponent,
    MainContentComponent,
    FooterComponent
 ],
 imports: [
    BrowserModule,
    // Otros módulos que necesites importar
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }

