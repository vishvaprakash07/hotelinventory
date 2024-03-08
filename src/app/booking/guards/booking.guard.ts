import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivateFn } from '@angular/router';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

export const bookingGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  const dialog = inject(MatDialog);
  if( component?.bookingForm?.pristine) {
    return true;
  }

  let dialogRef = dialog.open(ConfirmationDialogComponent, {
      height: '200px',
      width: '600px',
  });
  
  return new Promise<boolean>((resolve) => {
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result == true) {
        // User confirmed navigation
        resolve(true); // Allow navigation
      } else {
        // User cancelled
        resolve(false); // Prevent navigation
        // Optionally, call event.preventDefault() here for clarity
      }
    });
  });
};


