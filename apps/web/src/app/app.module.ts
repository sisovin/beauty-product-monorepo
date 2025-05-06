import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from '@beauty-product-monorepo/ui';
import { ButtonComponent } from '@beauty-product-monorepo/ui';
import { CardComponent } from '@beauty-product-monorepo/ui';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
