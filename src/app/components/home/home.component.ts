import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

  export class homeComponent implements OnInit{
   vertikal = [200, 170, 160, 190, 210, 130]
   horizontal:Number = 10
   

    ngOnInit(){

     this.drow() 
    } 
  
  drow(){
    let text = ()=>{ 
      ctx.strokeStyle = 'red'
      ctx.font = "35px Arial";
      ctx.strokeText("BEST GAME !!!",130, 70) 
    }
    let  masiv = [ 200, 200, 200, 150, 130, 130, 100, 100, 100, 70, 40, 40, 20, 40, 40, 70, 100, 100, 100, 130,
                  130, 150, 200, 200, 200]  
    
    let counterX = 20
    let counterY = 1
    let prevcountX = 0
    let prevcountY = 0
    let canvas:any = document.getElementById('canva') 
    let ctx = canvas.getContext('2d')
    let interval = setInterval(function(){
      
       let point = 300 - (masiv[counterY])
       let prevpoint = 300 - (masiv[prevcountY])
      ctx.beginPath()
      ctx.strokeStyle = 'green'
      ctx.moveTo(prevcountX, prevpoint) 
      ctx.lineTo( counterX, point) 
      ctx.stroke()
      counterX +=20
      counterY ++
      prevcountX +=20
      prevcountY ++
            if(counterY >= masiv.length){clearInterval(interval); text()} 
    },80)
  }
   
     edit(num){
      this.vertikal.push(Number(num)) 
      this.ngOnInit()
    }
     
      }


   
  