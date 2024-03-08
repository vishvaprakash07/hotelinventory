import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { requestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
// import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';
import { RouteConfigToken } from './services/routeConfig.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { GlobalErrorHandler } from './errorhandler.service';

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    NavigationComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    // RoomsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    FormsModule,
    HeaderModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    },
    {
      provide: RouteConfigToken,
      useValue: { title: "Home" },
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useValue: requestInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
