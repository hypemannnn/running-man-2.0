AFRAME.registerComponent("counter", {


    init: function(){
        this.increment=0
        this.intervalId=setInterval(()=>{
            this.increment++;
            var timer_ID=document.getElementById("timer")
            timer_ID.setAttribute('text',{value: this.increment});
        }, 1000); //miliseconds
        
        var x=document.getElementById("timer")
        console.log("4321");
        this.el.addEventListener('animationcomplete', this.clock__stopTimer);
        console.log("1234");


        //     position = this.model.object3D.position;
        //     this.xPosition = position.x;
        //     console.log(this.xPosition)
        //   if (this.xPosition<30){
        //     //     num++;
        //     //     var text=document.getElementById("timer");
        //     //     text.setAttribute("text", {value: String(num)});
        //         } // 
        // while (posX>30){
        //     timer++
        //     console.log("gg")
        // }
    },
    
    clock__stopTimer: function(){  
        var scene=document.querySelector("a-scene");
        var gltf=document.getElementById("man_model");
        
        //gltf.setAttribute("position", "-30 -9.6 -50");
        // var x=document.getElementById("timer")
        // x.setAttribute("text", {value: String(this.increment)});

    },

    tick: function(){
        var x=this.el.sceneEl.querySelector("#man_model");
        if  (x.object3D.position.x>=30){
            this.stopTimer()
        }

    },

    stopTimer: function(){
        clearInterval(this.intervalId);
        var scene=document.querySelector("a-scene");
        var gltf=document.getElementById("man_model");
        gltf.setAttribute("position", "-30 -9.6 -50");
        var last_msg=document.getElementById("end")
        last_msg.setAttribute("text", {value: ("You have completed the race")})
        var timer_ID=document.getElementById("timer")
        timer_ID.setAttribute("text",{value:(" ")})
        

    }
});
