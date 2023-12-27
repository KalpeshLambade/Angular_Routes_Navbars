import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription = new Subscription;
  constructor(private router:Router, private route:ActivatedRoute){

  }
  ngOnInit(){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['key'])

    this.routerSubscription = this.route.queryParams.subscribe(
      (params)=> {
        console.log(params);
      }
    )
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
