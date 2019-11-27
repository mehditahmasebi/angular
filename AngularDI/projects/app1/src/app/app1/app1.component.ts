import { Component, OnInit } from '@angular/core';
import {IServiceService} from '../IService.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css'],
  // providers: [Service1Service]
})
export class App1Component implements OnInit {
  public someVar = 0;

  constructor(private service1: IServiceService) { }

  ngOnInit() {
    this.someVar = this.service1.getSomeVar();
  }

}
