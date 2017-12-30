import { Component, OnInit, Output, EventEmitter} from '@angular/core'; 
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs/Observable' 

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
  })

  export class questionComponent implements OnInit{

    @Output() sendnumber = new EventEmitter<Number>()

    point:number = 20
    carsData; 
    randum;
    showpik:boolean = true
    chois:string[]
    gamerez:string =''
    constructor( private data:DataService){ 
       this.chois = ['Audi','BMV','mercedes', 'mazda', 'RENALT', 'porsche', 'NISSAN']
    }

    ngOnInit(){ 
      this.getdata()
      this.randumgen()
    }

   rezult(){ 
     this.point -=10;
     if(this.point === -20) {this.showpik = false; this.gamerez = 'Nooo'; 
     this.sendnumber.emit(this.point)
    } 
   }

   getdata(){
     this.data.getcars()
     .subscribe(res =>{  
      this.carsData = res})
   }

  randumgen(){
   let r =  Math.floor((Math.random() * 15) + 1)
   this.randum = r
  }

  next(){
    this.point =20
    this.randumgen()
    this.showpik = true
    this.gamerez = '' 
  }

  hit(st){
    
   if(st === this.carsData[this.randum].model){
     this.gamerez = 'yessss';this.showpik = false
   }else{this.gamerez = 'noooo';this.showpik = false; this.point = -10}
     this.sendnumber.emit(this.point)
  }
 
 
  }