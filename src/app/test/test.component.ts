import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Anita Baidhya"
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;

  public greeting = "";
  constructor() { }

  ngOnInit() {

  }
  sayHello(){
    return "Hello " + this.name;
  }

  onClick(){
    this.greeting = "Welcome to Anita's Page";
  }
}
