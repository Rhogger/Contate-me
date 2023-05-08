import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component'

@NgModule({
	declarations: [AppComponent, HomeComponent, CardsComponent, ContactComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
