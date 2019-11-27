import { Injectable } from '@angular/core';
import {IServiceService} from '../../../app1/src/app/IService.service';

// @Injectable()
export class Service2Service extends IServiceService {
  getSomeVar(): number {
    return 2;
  }
}
