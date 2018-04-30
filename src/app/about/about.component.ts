import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /**prevously it was blank constructor. After activating route
   * we have added code.
   * argument is an instance of activatedroute
   */
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate(['']);
  }
}
