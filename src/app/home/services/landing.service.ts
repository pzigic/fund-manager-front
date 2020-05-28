import { Injectable } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class LandingService extends RestService {

    public getClients() {
      return this.getRequest("client");
    }

}
