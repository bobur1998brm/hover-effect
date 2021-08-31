
const boxs = document.querySelectorAll('.box');
const shadows = document.querySelectorAll('.shadow');
const covers = document.querySelectorAll('.cover');

boxs.forEach((box,inx)=>{
    box.addEventListener('mouseenter',(e)=>{
        let x = e.offsetX
        let y = e.offsetY
      
        if(x < 20 ){
            shadows[inx].style.setProperty('--x', '0px')
        }else if(y < 20 ){
            shadows[inx].style.setProperty('--y', '0px')
        }else if( x > 20 && y > 20 ){
            shadows[inx].style.setProperty('--x', '0px')
            shadows[inx].style.setProperty('--y', '0px')
        }
        // console.log(y);
    })
})
boxs.forEach((box,inx)=>{
    box.addEventListener('mouseleave',(e)=>{
        let x = e.offsetX
        let y = e.offsetY

        if(x < 20 ){
            shadows[inx].style.setProperty('--x', '-100%')
        }else if(y < 20){
            shadows[inx].style.setProperty('--y', '-100%')
        }else if(x > 20 && y < covers[0].clientHeight - covers[0].clientHeight/10){
            shadows[inx].style.setProperty('--x', '100%')
        }else if(y >  covers[0].clientHeight - covers[0].clientHeight/10){
            shadows[inx].style.setProperty('--y', '100%')
        }
    
    })
})
covers.forEach((cover,inx)=>{
    cover.addEventListener('mouseenter',(e)=>{
        let x = e.offsetX
        let y = e.offsetY

        if(x < 20 ){
            shadows[inx].style.setProperty('--x', '-100%')
            shadows[inx].style.setProperty('--y', '0px')
        }else if(y < 20){
            shadows[inx].style.setProperty('--y', '-100%')
            shadows[inx].style.setProperty('--x', '0px')
        }else if(x > 20 && y < cover.clientHeight- 3.3 * (cover.clientHeight / 100)){
            shadows[inx].style.setProperty('--x', '100%')
            shadows[inx].style.setProperty('--y', '0px')
        }else if(y >  cover.clientHeight- 3.3 * (cover.clientHeight / 100)){
            shadows[inx].style.setProperty('--y', '110%')
            shadows[inx].style.setProperty('--x', '0%')
        }
    })
})



// covers.forEach((cover,inx)=>{
//     cover.addEventListener('mouseleave',(e)=>{
//         let x = e.offsetX
//         let y = e.offsetY
//         shadows[inx].style.setProperty('--x', "none")
//         shadows[inx].style.setProperty('--y', "none")
//     })
// })



