import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Comments } from '../comment.interface';
import { CommentService } from '../comment.service';
import { inject } from '@angular/core';


export const commentGuard: ResolveFn<Comments[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
   const commentService = inject(CommentService);
   return commentService.getComments();
};
