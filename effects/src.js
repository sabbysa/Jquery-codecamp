$(document).ready(()=>{
//     $("#btnFadeOut").click(()=>{
//         $("#box").fadeOut(3000)
//     })
//     $("#btnFadeIn").click(()=>{
//         $("#box").fadeIn(3000)
//     })
//     $("#btnFadeTog").click(()=>{
//         $("#box").fadeToggle(3000)
//     })
//     $("#btnSlideUp").click(()=>{
//         $("#box").slideUp(3000)
//     })

//     $("#btnSlideDown").click(()=>{
//         $("#box").slideDown()
//     })
//      $("#btnSlideTog").click(()=>{
//         $("#box").slideToggle()
//     })
// $("#btn").click(()=>{
//     $("#box").stop()
// })
$("#MoveL").click(function(){
    $("#box2").animate({left: '20px'}, 5000)
})
$("#MoveR").click(function(){
    $("#box2").animate({left: '250px'},5000)
       
   
})

$("#MoveA").click(function(){
    $("#box2").animate({
        left: '200px'
    });
    $("#box2").animate({
      top: '100px'
    }, "slow")
    $("#box2").animate({
        left: '0px',
        top:'100px'
    })
    $("#box2").animate({
       left:0,
       top:0
    },5000)
})

$("#btn1").click(function(){
    $("#box2").stop()
})
})
