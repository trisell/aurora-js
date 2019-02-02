let time = 1;

function renderSystem(ch, cw, ctx) {


    

    
  function circle(radius,color,x,y){
    /*set default*/
    x = typeof x !== "undefined" ? x : cw/2;
    y = typeof y !== "undefined" ? y : ch/2;
    
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x,y,radius,0,2*Math.PI,true);   //true = clockwise, false = counterclock
    ctx.fill();
    ctx.closePath();
  }
  
  function circleStroke(radius,strokeColor,x,y,lineWidth){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI,true);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    ctx.closePath();
  }
  
  function line(ax,ay,bx,by){
    ctx.beginPath();
    ctx.moveTo(ax*2,ay);
    ctx.lineTo(bx,by);
    ctx.strokeStyle = "rgba(255, 255, 255,0.12)";
    ctx.stroke();
    ctx.closePath();
  }
  
  function text(text,color,font,x,y){
    ctx.beginPath();
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text,x + 25,y + 7);
    ctx.closePath();
    //console.log(text);
  }
    
  function animate(){
    
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,cw,ch);
    ctx.closePath();
    
        
    //Sun - center
    ctx.translate(cw/2,ch/2);
    circle(25,"yellow",0,0);
    
    text("Sun", "red","15pt arial", 0,0);
    
    //Mercury white line
    circleStroke(40,"#1c1c1c",0,0,"1");
    
    //Mercury
    ctx.rotate(time / 30);  /*.restore and .save doesn't work on rotate()*/
    ctx.translate(40,0);
    circle(3.8,"#898989",0,0);
    
    line(-40,0,0,0);
    
    
    //Venus white line                
    ctx.translate(-40,0);   //reset translate
    circleStroke(60,"#1c1c1c",0,0,"1");
    
    //Venus
    ctx.rotate(time / 100 - (time / 90));  /*.restore and .save doesn't work on rotate()*/    ctx.translate(60,0);
    circle(9,"#b9955b",0,0);
    
    line(-60,0,0,0);
    
    //Earth white line
    ctx.translate(-60,0);
    circleStroke(90,"#1c1c1c",0,0,"2");
    
    //Earth -   This is Where i live 
    ctx.rotate(time / 100 - (time / 80));
    ctx.translate(90,0);
    circle(10,"#2f2fc1",0,0);
    
    line(-90,0,0,0);
    
    //Moon.. nobody likes the moon anyway :P
    //  ctx.rotate(time/120);
    //  ctx.translate(20,0);
    //   circle(4,"white",0,0);
    
    //Mars white line
    ctx.translate(-90,0);
    circleStroke(120,"#1c1c1c",0,0,"2");
    
    //Mars
    ctx.rotate(time / 120 - (time / 50));
    ctx.translate(120,0);
    circle(15,"#9f5e13",0,0);
    
    line(-120,0,0,0);
    
    
    //asteroid belt 
    ctx.translate(-120,0);
    circleStroke(160,"#151515",0,0,"35");
    
    
    //jupiter white line
    ctx.translate(0,0);
    circleStroke(220,"#1c1c1c",0,0,"2");
    
    //jupiter
    ctx.rotate(time / 120 - (time / 50));
    ctx.translate(220,0);
    circle(45,"#ef602c",0,0);
    
    line(-220,0,0,0);
    
    //saturn white line
    ctx.translate(-220,0);
    circleStroke(300,"#1c1c1c",0,0,"2");
    
    //saturn
    ctx.rotate(time / 120 - (time / 90));
    ctx.translate(300,0);
    circle(35,"#c76743",0,0);
    
    line(-300,0,0,0);
    
    //saturn asteroid belt 
    ctx.translate(0,0);
    circleStroke(50,"#747474",0,0,"3");
    
    //uranus white line
    ctx.translate(-300,0);
    circleStroke(340,"#1c1c1c",0,0,"2");
    
    //uranus
    ctx.rotate(time / 120 - (time / 90));
    ctx.translate(-340,0);
    circle(23,"#b843c7",0,0);
    
    line(340,0,0,0);
    
    //neptune white line
    ctx.translate(340,0);
    circleStroke(380,"#1c1c1c",0,0,"2");
    
    //neptune
    ctx.rotate(time / 120 - (time / 140));
    ctx.translate(-380,0);
    circle(20,"#43aec7",0,0);
    
    line(380,0,0,0);
    
    ctx.restore();
    time++;
    console.log(time);

  }
  animate();
}




export default renderSystem;
