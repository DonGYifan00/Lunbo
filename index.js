var content = 
    '<div class="slider" id="slider">'+
        '<div class="slide"><img src="img/b5.png" alt=""></div>'+
        '<div class="slide"><img src="img/b1.png" alt=""></div>'+
        '<div class="slide"><img src="img/b2.png" alt=""></div>'+
        '<div class="slide"><img src="img/b3.png" alt=""></div>'+
        '<div class="slide"><img src="img/b4.png" alt=""></div>'+
        '<div class="slide"><img src="img/b5.png" alt=""></div>'+
        '<div class="slide"><img src="img/b1.png" alt=""></div>'+
    "</div>"+
    '<span id="left"><</span>'+
    '<span id="right">></span>'+
    '<ul class="nav" id="navs">'+
        '<li>1</li>'+
        '<li>2</li>'+
        '<li>3</li>'+
        '<li>4</li>'+
        '<li>5</li>'+
	'</ul>'
    $('#box').append(content);
    var slider=$('#slider');
        left=document.getElementById("left");
        right=document.getElementById("right");
        img = document.getElementById('slider').children;
        imgNum = img.length - 2;                         
        btn = document.getElementById('navs').children; 
        btnNum = btn.length;                           
        index = 0;           
        timer = setInterval(next,3000);   
        btn[0].className = "active";            
    
    $('#box').mouseover(function(){
        left.style.opacity="0.6";
        right.style.opacity="0.6";
        clearInterval(timer);
    })
    $('#box').mouseout(function(){
        left.style.opacity="0";
        right.style.opacity="0";
        timer = setInterval(next,3000);
    })

    function last(){
        if(index == 0){
            slider.animate({
                left:'+=' + 1200
            },'slow',function(){
                slider.css('left',-1200*imgNum);
            })
            btnmove(imgNum-1);
            index = imgNum - 1;
        }
        else{
            slider.animate({
                left:'+=' + 1200
            },'slow');
            btnmove(index - 1);
            index--;
        }
    }

    function next(){
        if(index == imgNum - 1){
            slider.animate({
                left:'-=' + 1200
            },'slow',function(){
                slider.css('left',-1200);
            });
            index = 0;
            btnmove(0);
        }
        else{
            slider.animate({
                left:'-=' + 1200
            },'slow');
            btnmove(index + 1);
            index++;
        }
    }

    function btnmove(n){
        for(var i = 0; i < btnNum; i++){
            btn[i].removeAttribute("class","active");
        }
        btn[n].setAttribute("class","active");
    }

    for(var i = 0; i < imgNum; i++){
        (function(time){
            btn[time].onclick = function(){
                var ti = time - index;
                if(ti > 0){
                    slider.animate({
                        left:'-=' + 1200*ti
                    },'slow');                   
                }
                else if(ti < 0){
                    slider.animate({
                        left:'+=' + 1200*-ti
                    },'slow');
                }
                else{
                    return 0
                }
                btnmove(time);
                index = time;
            }
        })(i);
    }

    left.onclick = last;
    right.onclick = next;
    