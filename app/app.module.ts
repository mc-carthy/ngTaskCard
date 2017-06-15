import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { CardComponent } from './components/card/card.component';
import { WeatherComponent } from './weather/components/weather.component';

import { SpeedUnitPipe } from './weather/pipes/speed-unit.pipe';
import { TemperatureUnitPipe } from './weather/pipes/temperature-unit.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        JsonpModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CardComponent,
        WeatherComponent,
        SpeedUnitPipe,
        TemperatureUnitPipe
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule
{

}