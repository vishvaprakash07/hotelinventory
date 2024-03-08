import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { RoomList } from '../../interfaces/roomsinterface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss'
})
export class RoomsAddComponent implements OnInit, AfterViewInit{

  @ViewChild('roomsForm') ngForm!: NgForm;

  constructor(private roomsService: RoomsService) {}
  ngAfterViewInit(): void {
    this.ngForm.form.valueChanges.subscribe((data) => {
      console.log(data);
    })
  }
  ngOnInit(): void {
    
    }
  room: RoomList = {
    roomType : '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  };

  successMessage: string = "";

  addRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMessage = "Room Added Succesfully";
      roomsForm.reset();
    });
  }

}
