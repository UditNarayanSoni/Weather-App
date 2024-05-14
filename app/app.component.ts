import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './modules/weather.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    
    constructor(private weatherService: WeatherService) {}

    city_name: string = "India";
    weather_data?: WeatherData;
    min_temp: any;
    max_temp: any;

    ngOnInit(): void {
        // this.weatherService.getWeatherData('Varanasi').subscribe({
        //     next: (response) => {
        //         this.weather_data = response;
        //         console.log("API Response ",response);
                
        //         if (this.min_temp == undefined) {
        //             let temp = response.data.expected_temp.split(" • ");
        //             this.max_temp = temp[0];
        //             this.min_temp = temp[1];
        //         }
        //     }
        // });
        // this.getWeather(this.city_name);
        this.city_name = '';
    }

    onSubmit() {
        this.getWeather(this.city_name);
        this.city_name = '';
    }

    private getWeather(cityName: string){
        this.weatherService.getWeatherData(cityName).subscribe({
            next: (response) => {
                this.weather_data = response;
                console.log("API Response ",response);
                
                // if (this.min_temp == undefined) {
                //     let temp = response.data.expected_temp.split(" • ");
                //     this.max_temp = temp[0];
                //     this.min_temp = temp[1];
                // }
            }
        });
    }
}
