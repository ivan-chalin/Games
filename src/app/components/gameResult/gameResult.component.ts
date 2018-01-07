import { Component, OnInit } from '@angular/core'; 

@Component({
    selector: 'gameResult',
    templateUrl: './gameResult.component.html',
    styleUrls: ['./gameResult.component.css']
  })

  export class gameResultComponent implements OnInit{ 
    endRezult ='' 
    
      ngOnInit(){
          this.getrezult()
      }


      getrezult(){
          let rezult = sessionStorage.getItem('rezult')
          if(Number(rezult) >= 50){this.endRezult = 'super ...! you are the winner'}
          else{this.endRezult = 'oops ...! you lose, try again'}
               
      }
  }