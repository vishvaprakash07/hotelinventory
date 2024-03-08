import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
// import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    @Optional() private loggerService: LoggerService,
    private initService: InitService,
    private configService: ConfigService, 
    private router: Router) {
      console.log(initService.config);
    }
  
  
  title = 'hotelinventoryapp';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.loggerService?.log("AppComponent.ngOnInit()");
    // this.name.nativeElement.innerText = "MSD Hotels" ;
    // this.localStorage.setItem('name', 'Vishva Hotel');
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log("Navigation Started",event);
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log("Navigation Ended",event);
    });
  }

}
// @Inject(localStorageToken) private localStorage: any,