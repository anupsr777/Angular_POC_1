import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  users:any;
  public isUser:boolean = true;
  name:string = "";
  age:number = 0;
  test = "sss"
  ngOnInit(): void {
    this.users = [
      {'name':'BA','age':28},
      {'name':'QA','age':28},
      {'name':'Manager','age':35},
      {'name':'Developer','age':28}
    ];
  }

  userData(user:any):void{
      this.name = user.name;
      this.age = user.age;
  }
  toggle(status:boolean):void{
    this.isUser = !status;
  }
}
