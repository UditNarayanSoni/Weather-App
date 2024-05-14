// paste the json response interface converted to typescript

export interface WeatherData {
  current: CurrentData;
  location: Location;
}

export interface CurrentData {
  cloud: any;
  feelslike_c: any;
  feelslike_f: any;
  gust_kph: any;
  gust_mph: any;
  humidity: any;
  is_day: any;
  last_updated: string;
  last_updated_epoch: any;
  precip_in: any;
  precip_mm: any;
  pressure_in: any;
  pressure_mb: any;
  temp_c: any;
  temp_f: any;
  uv: any;
  vis_km: any;
  vis_miles: any;
  wind_degree: any;
  wind_dir: string;
  wind_kph: any;
  wind_mph: any;
}

export interface Location {
  country: string;
  lat: any;
  localtime: string;
  localtime_epoch: any;
  lon: any;
  name: string;
  region: string;
  tz_id: string;
}
