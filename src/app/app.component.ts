import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';

  // constructor(private toastr: ToastrService){
  //     toastr.success("Burak","Test")
  // }

  constructor(private toastrService: CustomToastrService){
    // toastrService.message("Burak","Test",ToastrMessageType.Info, ToastrPosition.BottomCenter);
    toastrService.message("Burak","Test",{
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.BottomCenter
    });
    toastrService.message("Burak","Test",{
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopFullWidth
    });
    toastrService.message("Burak","Test",{
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomLeft
    });
    toastrService.message("Burak","Test",{
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.BottomRight
    });
}

}

// $(document).ready(()=>{
//   alert("jquery test")
// }
// )