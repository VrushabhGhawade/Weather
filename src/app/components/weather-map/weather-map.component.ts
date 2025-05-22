import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
    selector: 'app-weather-map',
    imports: [MatCardModule,CommonModule],
    templateUrl: './weather-map.component.html',
    styleUrl: './weather-map.component.scss'
})
export class WeatherMapComponent {
 @Input() weatherData: any;
}
