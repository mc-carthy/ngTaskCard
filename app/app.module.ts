import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        CardComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule
{

}