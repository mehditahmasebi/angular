import { Injectable } from '@angular/core';
import {IServiceService} from './IService.service';

// @Injectable()
export class Service1Service extends IServiceService {
  getSomeVar(): number {
    return 1;
  }
}
