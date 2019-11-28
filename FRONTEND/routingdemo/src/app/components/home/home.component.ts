import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frase: string = undefined;

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.frase = this.demoService.getRefran();
  }

}
