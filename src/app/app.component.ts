import { Component } from '@angular/core';
import { WeatherMapComponent } from './components/weather-map/weather-map.component';
import { WeatherService } from './services/weather.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    imports: [WeatherMapComponent,CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  city = '';
  weatherData: any; 

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    if (!this.city) return;
    this.weatherService.getWeatherByCity(this.city).subscribe(
      (data) => this.weatherData = data,
      (error) => alert('City not found!')
    );
  }
}
