import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../../interfaces/roomsinterface';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{
  ngOnDestroy(): void {
    console.log("on destroy is called");
   }
   
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
       this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  @Input() rooms: RoomList[]  = []; 
  @Input() title: string = '';
  @Input() price: any;
  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  ngOnInit(): void { }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

}
