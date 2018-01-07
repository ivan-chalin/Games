import { Injectable } from '@angular/core'; 
import {HttpClient, HttpHeaders} from '@angular/common/http'; 

let baseurl = 'https://baas.kinvey.com/appdata/kid_BkgSXtK-z/cars' 

@Injectable()
export class DataService { 
  constructor(
    private http:HttpClient
  ) { } 

  hedcreate(){
    return new HttpHeaders({ 
           'Authorization':'Basic a2lkX0JrZ1NYdEstejo5NTRlYzA4M2NhYzQ0YjE1YjI1ODg3MTg1YmVmYjZhYg== ', 
            'Content-Type': 'aplication/json', 
            'X-Kinvey-API-Version' :'3' 
    })
       
   }

   getcars(){
       return this.http.get(baseurl, {headers:this.hedcreate()})
   }

    increas(){
      let r = 0
    return  setInterval(function(){
        r +=1  
      }, 1000)
    }
  }

   