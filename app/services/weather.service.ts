import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../modules/weather.module';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(city_name: string): Observable<WeatherData> {

    return this.http.get<WeatherData>(environment.weatherAPIBaseUrl + city_name)
  }
}
