var nav_id=document.getElementsByTagName("nav")
var nav_item=nav_id[0].querySelectorAll('.nav_items .item')

var search_id=nav_id[0].querySelectorAll('.search_icon')
var time_id=document.querySelector('.current_t')

var hamburger_id=document.querySelector('.hamburger')
var close_id=document.querySelector('.close')
var nav_items=nav_id[0].querySelector('.nav_items')



hamburger_id.addEventListener('click',()=>{
    nav_items.classList.add('active')
    hamburger_id.style.display='none'
    close_id.style.display='block'
})

close_id.addEventListener('click',()=>{
    nav_items.classList.remove('active')
    hamburger_id.style.display='block'
    close_id.style.display='none'
})

// Top Nav Function

current_time=()=>{
    var time=new Date()
    var t_1=time.toLocaleTimeString()
    time_id.innerHTML=t_1
    console.log(t_1)
}
current_time()



setInterval(current_time, 1000);



// Nav Section 

var scroll_effect=()=>{
    window.addEventListener('scroll',()=>{
        if (window.scrollY>20){
            nav_item.forEach((element,id)=>{
                element.classList.add('active')
                close_id.classList.add('color_active')
                
            })
            nav_id[0].classList.add('active')
            hamburger_id.classList.add('active')
        }
        else{
            nav_item.forEach((element,id)=>{
                element.classList.remove('active')
                close_id.classList.remove('color_active')

            })
            
            nav_id[0].classList.remove('active')
            hamburger_id.classList.remove('active')
        }
    })
}


scroll_effect()


// Header Image Scroll Section

var car_img_id=document.querySelectorAll('.car_img')
var header_id=document.querySelector('.index_header')
var header_left_btn_id=header_id.querySelector('.left_btn')
var header_right_btn_id=header_id.querySelector('.right_btn')

var header_move_right_fun=()=>{
    console.log("asdas")
    header_right_btn_id.addEventListener('click',()=>{
        for(var i=0; i<=car_img_id.length; i++){
            console.log(i)
            if (car_img_id[i].className.search('active')!=-1){
                var next_id=i+1
                var pre_id=i
                try{
                console.log(next_id,pre_id)
                car_img_id[next_id].classList.add('active')
                car_img_id[pre_id].classList.remove('active');}
                catch{
                    car_img_id[0].classList.add('active')
                    car_img_id[car_img_id.length-1].classList.remove('active');
                }
                break
                
            }
        }
    })
    

}

var header_move_left_fun=()=>{

    header_left_btn_id.addEventListener('click',()=>{

        var move_header_img_fun=()=>{
            for(var i=0; i<=car_img_id.length; i++){
                console.log(i)
                if (car_img_id[i].className.search('active')!=-1){
        
                    
                    var next_id=i-1
                    var pre_id=i
                    console.log(next_id,pre_id)
                    try{
                        car_img_id[next_id].classList.add('active')
                        car_img_id[pre_id].classList.remove('active');
                    }
                    catch{
                        car_img_id[car_img_id.length-1].classList.add('active')
                        car_img_id[0].classList.remove('active');
                    }
                    break
                    
                }
            }
        }
        move_header_img_fun()

    })
}

header_move_left_fun()
header_move_right_fun()

var move_header_img_fun=()=>{
    for(var i=0; i<=car_img_id.length; i++){
        console.log(i)
        if (car_img_id[i].className.search('active')!=-1){
            var next_id=i+1
            var pre_id=i
            try{
            console.log(next_id,pre_id)
            car_img_id[next_id].classList.add('active')
            car_img_id[pre_id].classList.remove('active');}
            catch{
                car_img_id[0].classList.add('active')
                car_img_id[car_img_id.length-1].classList.remove('active');
            }
            break
            
        }
    }
}


setInterval(move_header_img_fun , 4000);

// Footer


