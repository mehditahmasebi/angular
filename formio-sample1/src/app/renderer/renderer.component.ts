import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormioComponent} from 'angular-formio';
import {tryCatch} from 'rxjs/internal/util/tryCatch';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {
  @ViewChild('json') jsonElement?: ElementRef;
  @ViewChild(FormioComponent) formio: FormioComponent;
  dataOutput: any;
  title = 'app';
  formJson: string;
  refreshForm = new EventEmitter();
  constructor(private http: HttpClient) {
    console.log('... Renderer component');
    this.getJSON().subscribe(data => {
      this.formJson = data;
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./../assets/frm2.json');
  }
  onChange(submission: any) {
    //console.log('onChange : isValid : ' + submission['isValid']);
    if (submission !== undefined)
      if (submission['data'] !== undefined)
        this.dataOutput = submission['data'];

  }
  ngOnInit() {
  }

  beforeSubmit() {
    //console.log('before submit');
  }

  onSubmit(submission: any) {
    //console.log('OnSubmit : isValid : ' + submission['isValid']);
  }

  angularButton() {
    try {
      //this.formio.submitExecute(this.dataOutput);
      this.formio.formio.executeSubmit({state: "submitted"})
      //console.log(this.formio);
      setTimeout(() => {
        let isValid: boolean= (this.formio.alerts.alerts[0]['type'] == 'success');
        if (isValid == true)
          console.log('Form is valid');
        else
          console.log('Form is not valid');
        },200);
    }
    catch (e) {
    }
  }

}
