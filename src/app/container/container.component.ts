import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
// import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  // providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {

  constructor() {}

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "Carter";
  }

}

// @Host() private roomsService: RoomsService
