import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() user: any;
  public loading: boolean = true
  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
  }

}
