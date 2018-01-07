import { Component, OnInit } from '@angular/core'; 
import {Router} from '@angular/router'; 
import {Observable} from 'rxjs/Rx';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
  })

  export class gameComponent implements OnInit{ 
    sum = [0, 0]
    curentX = 20
    curentY = 1 
    prevX = 0
    prevY = 0  
    tics

    constructor(private rout:Router, private data: DataService){

      
    }
    
    ngOnInit(){  
       let timer =  Observable.timer(5, 1000).take(25)
       timer.subscribe(t=>{this.tics = 20 - t; if(t>20){ this.rout.navigate(['/gameresult'])}}) 
    }
 

    chart(){
     let newpoint = this.sum.reduce((a, b) => a + b)

    let point = 100 - newpoint
    let prevpoint = 100 -  (newpoint - this.sum[this.sum.length -1]) 
      let canvas:any = document.getElementById('canvas') 
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.strokeStyle = 'green'
      ctx.moveTo(this.prevX, prevpoint) 
      ctx.lineTo( this.curentX, point) 
      
      ctx.stroke() 
    }
 

    testdata(data){ 
      this.curentX +=20
      this.curentY ++
      this.prevX +=20
      this.prevY ++
      this.sum.push(data)
      this.chart()
      this.endGame ()
    }
    totalSum(){
    return  this.sum.reduce((a, b) => a + b)
     
    }

    endGame(){
      if(this.totalSum() >=50 || this.totalSum() <= -50){
        sessionStorage.setItem('rezult',JSON.stringify(this.totalSum()))
        this.rout.navigate(['/gameresult'])
      }
    }  
   
 
     
  }