import { Component, OnInit } from '@angular/core';
/**we need to import animations classes here as well*/
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations'
import {DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[

    trigger('goals',[
      transition('*=>*',[
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform:'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform:'translateY(35px)', offset: .3}),
            style({opacity: 1, transform:'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform:'translateY(0)', offset: 0}),
              style({opacity: .5, transform:'translateY(35px)', offset: .3}),
              style({opacity: 0, transform:'translateY(-75%)', offset: 1}),
            ]))]), {optional: true})
      ])
    ])
  

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number=4; /* property to show interpolation */
  btnText: string ='Add an Item'; /*property to show property binding */
  goalText: string='My first goal';
  goals=[];/* Array to hold the goals*/
  
  constructor(private _data:DataService) { }

  /**This is a LifeCycle Hook that is called after data-bound properties of a directive is called */
  ngOnInit() {
    this.itemCount=this.goals.length;
    this._data.goal.subscribe(res => this.goals=res);
    this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText); /**adding to goals array */
    this.goalText='';/**resetting the goal text */
    this.itemCount=this.goals.length;/**setting the item count for update */
    this._data.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i, 1); /**Removing item */
    this.itemCount=this.goals.length;/**Updating the item count to show on UI */
    this._data.changeGoal(this.goals);
  }
}
