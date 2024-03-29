import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig.interface';
import { RouteConfigToken } from './routeConfig.service';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log("ConfigService is initialized");
    console.log(this.configToken);
  }
}
