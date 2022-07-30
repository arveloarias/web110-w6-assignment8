show = document.querySelector("header");
caption1 = document.querySelector("#carousel-caption1");
caption2 = document.querySelector("#carousel-caption2");
caption3 = document.querySelector("#carousel-caption3");
caption4 = document.querySelector("#carousel-caption4");
caption5 = document.querySelector("#carousel-caption5");
caption6 = document.querySelector("#carousel-caption6");

indicators = document.querySelector(".carousel-indicators")

        document.querySelector(".btn-show").addEventListener("click", ()=>{
                if(document.querySelector(".btn-show").innerHTML === 'Hide'){
                        show.classList.add("hide");
                        caption1.classList.add("hide");
                        caption2.classList.add("hide");
                        caption3.classList.add("hide");
                        caption4.classList.add("hide");
                        caption5.classList.add("hide");
                        caption6.classList.add("hide");
                        indicators.classList.add("hide");
                        document.querySelector(".btn-show").innerHTML = "Show";
                        if (window.innerWidth <500){
                        document.querySelector(".btn-show").style.bottom = "7vh";
                        document.querySelector(".btn-show").style.padding = "20px 40px"
                        document.querySelector(".btn-show").style.left = "35%";
                        document.querySelector(".btn-show").style.position = "absolute";
                        }
                }else{
                        show.classList.remove("hide");
                        caption1.classList.remove("hide");
                        caption2.classList.remove("hide");
                        caption3.classList.remove("hide");
                        caption4.classList.remove("hide");
                        caption5.classList.remove("hide");
                        caption6.classList.remove("hide");
                        indicators.classList.remove("hide");
                        document.querySelector(".btn-show").innerHTML = "Hide";

                        if (window.innerWidth <500){
                        document.querySelector(".btn-show").style.bottom = "36vh";
                        document.querySelector(".btn-show").style.padding = "10px";  
                        document.querySelector(".btn-show").style.left = "40%";
                        document.querySelector(".btn-show").style.position = "absolute";
                }
                }
        
})



        







    
