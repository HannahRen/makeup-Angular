import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private rating: number = 0
  private stars = []
  constructor() { }

  ngOnInit() {
    const full: number = Math.floor(this.rating)
    const empty: number = 5 - full
    for (let i = 0; i < 5; i ++ ){
      if (i < full) {
        this.stars.push('full')
      } else {
        this.stars.push('empty')
      }
    }
  }
}
