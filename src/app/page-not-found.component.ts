import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { style } from '@angular/animations';

@Component({
  selector: 'app-not-found',
  template: `
    <h2>
      404 - Page not found
    </h2>
    <p *ngIf="path">You might want to go to the <a [routerLink]="path">"{{ path }}" page</a></p>
  `,
  styles: [`
    h2 {
      text-align:center;
      font-size: 4rem;
    }
    p {
      text-align:center;
      font-size: 3rem;
    }
  `]
})
export class NotFoundComponent implements OnInit {
  path: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.pipe(take(1))
      .subscribe((data: { path: string }) => {
        this.path = data.path;
      });
  }
}
