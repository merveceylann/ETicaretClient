import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
// declare var alertify: any;
//bu komut sayesinde kutuphane icindeki ozellikleri kullanabiliyoruz (angular.jsonda eklenen)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private alertify: AlertifyService, spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void {
    // alertify.alert('alertify test');
    // alertify.success('Success message');
  
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }

  m(){
    // this.alertify.message("Test",MessageType.Success, Position.BottomLeft, 15, true)
    this.alertify.message("Test", {
      messageType: MessageType.Success,
      delay: 10,
      position: Position.TopRight
    })
  }

  d(){
    this.alertify.dismiss();
  }
}

