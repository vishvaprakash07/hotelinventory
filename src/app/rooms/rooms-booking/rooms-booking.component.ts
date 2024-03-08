import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit{
  constructor(private router: ActivatedRoute) { }

  id$: Observable<string | null> = this.router.paramMap.pipe(
    map(params => params.get('roomid'))
  );

  ngOnInit(): void {
    // this.router.params.subscribe((params) => { console.log(params) });
    // this.id$ = this.router.snapshot.params['roomid'];
  }

  
}
