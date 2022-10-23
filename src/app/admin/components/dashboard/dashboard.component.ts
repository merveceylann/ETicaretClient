import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
// declare var alertify: any;
//bu komut sayesinde kutuphane icindeki ozellikleri kullanabiliyoruz (angular.jsonda eklenen)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
    // alertify.alert('alertify test');
    // alertify.success('Success message');
  
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

