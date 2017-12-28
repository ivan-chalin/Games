import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
    selector: 'userform',
    templateUrl: './userform.component.html',
     styleUrls: ['./userform.component.css']
  })
  export class userformComponent implements OnInit{
    public userForm:FormGroup;
    public name:string;
    public password:string;
    public age:number 

    constructor(private rout:Router){

    }
    ngOnInit(){
      this.userForm = new FormGroup({
          name:new FormControl(),
          password:new FormControl(),
          age:new FormControl()
      })
    }

    userdata(){
        sessionStorage.setItem('password', this.userForm.value.password)
        sessionStorage.setItem('name',this.userForm.value.name)
        this.rout.navigate(['/home'])
        console.log(this.userForm.value)
    }
  }