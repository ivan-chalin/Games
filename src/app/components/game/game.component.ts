import { Component, OnInit } from '@angular/core'; 

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
    
    ngOnInit(){
       
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
    }
    totalSum(){
    return  this.sum.reduce((a, b) => a + b)
     
    }
  }