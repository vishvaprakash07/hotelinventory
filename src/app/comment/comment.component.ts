import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {

  comment$ = this.activatedRoute.data.pipe(map((data) => data?.['comments']));
  comments$ = this.commentService.getComments();
  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activatedRoute.data.subscribe(data => console.log(data['comments']));
  }
}
