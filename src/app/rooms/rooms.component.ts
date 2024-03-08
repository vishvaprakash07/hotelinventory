import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from '../interfaces/roomsinterface';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {
  constructor(@SkipSelf() private roomsService: RoomsService,
  private configService: ConfigService) {}
  

  ngAfterViewInit(): void {
    // console.log(this.headerComponent.title);
    console.log(this.headerChildrenComponent);
  }
  
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  ngDoCheck(): void {
    console.log("Something is called");
  }


  hotelName: string = "MSD Hotel";
  numberOfRooms: number = 7;
  hideRooms: boolean = true;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };
  title: string = "Room List";
  totalBytes: number = 0;
  subscription!: Subscription;
  

  selectedRoom!: RoomList;
  roomList: RoomList[] = [];

  error$ = new Subject<string>;
  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message);
      return of([])
    })
  );

  priceFilter = new FormControl(0);

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  );

  ngOnInit(): void {
    // console.log(this.headerComponent);
    // this.roomList = this.roomsService.getRooms();
    this.roomsService.getPhotos().subscribe((event) => {
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log("Request has been made!");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("Request success");
          break;
        }
        case HttpEventType.DownloadProgress: {
          console.log(HttpEventType.DownloadProgress);
          this.totalBytes += event.loaded;
          break; 
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }

      }
    });

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });
    this.stream.subscribe((data) => console.log(data));
    // this.subscription = this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });
    
   }

  toggle(): boolean {
    this.title = "Rooms Catalogue";
    return this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room; 
  }

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.complete();
  });

  addRoom() {
    const room: RoomList = {
      // roomNumber: '3',
      roomType: "Disco Room",
      amenities: "Wifi, Air Conditioner, TV, Bathroom",
      price: 2000,
      photos: "https://photos.mandarinoriental.com/is/image/MandarinOriental/dmo-Seven-suites-04-Dubai",
      checkinTime: new Date('20-Jan-2024'),
      checkoutTime: new Date('23-Jan-2024'),
      rating: 4.4,
    };
    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
       this.roomList = data;
    });

  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: "Disco Room",
      amenities: "Wifi, Air Conditioner, TV, Bathroom",
      price: 2000,
      photos: "https://photos.mandarinoriental.com/is/image/MandarinOriental/dmo-Seven-suites-04-Dubai",
      checkinTime: new Date('20-Jan-2024'),
      checkoutTime: new Date('23-Jan-2024'),
      rating: 4.4,
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    });
  }
   
  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
   

  

}
