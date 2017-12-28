import {Directive, ElementRef, Input, HostListener} from '@angular/core'

@Directive({
    selector:'[size]'
})
export class imgsize{
    @Input('size') 
     width:string
     heigth:string
    @HostListener('click') onclick(){
         this.changecolor(this.width, this.heigth)
    }
    constructor(private el :ElementRef){ 
        this.el.nativeElement.style.width = '50px'
        this.el.nativeElement.style.heigth = '60px'
    } 
     
    step  =  55
    stepheigth = 65

    changecolor(width, heigth){
        this.step +=20 
        this.stepheigth +=20 
        this.el.nativeElement.style.width = width += this.step+'px'
        this.el.nativeElement.style.heigth = heigth + this.stepheigth+'px'
        console.log(this.step)
    }
}