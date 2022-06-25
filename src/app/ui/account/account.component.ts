import { Component, OnInit, Input } from '@angular/core';
import { GraphQLModule } from '../../graphql.module'
import { gql } from '@apollo/client'

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
  }

}
