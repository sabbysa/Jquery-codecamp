// $(documemt).ready(()=>{
//     alert("hi");
// });

// window.onload= function(){
//     this.alert("hi")
// };

//selector
//  $(document).ready(function(){
//      console.log($("div").html())
// });

 //add elems
//  $(document).ready(function(){
//      $("h1").prepend("<h1>Jquery</h1>")
//  });

//  $(document).ready(function(){
//    console.log($(".ch").parentsUntil("div.grandparents"))
// });
 

// $(document).ready(function(){
//     console.log($(".gp").find("div"))
//  });


// $(document).ready(function(){
//     console.log($(".pt").nextAll())
//  });


// $(document).ready(function(){
//    $("h1").css("fontSize", "200px")
//  });


// $(document).ready(function(){
//     $("h1").addClass("highlight")
//  });

//  $(document).ready(function(){
//     $("h1").removeClass("highlight")
//  });

//  $("h1").click(function(){
//     $("h1").toggleClass("highlight")
//  });
// $(document).ready(function(){
//     console.log($("h1").hasClass("highlight"))
//  });
// value for every index
//iterate over elemnts in array
//  $.each([1,2,3], function(idx, val){
//      console.log("now"+ idx +"is"+ val)
//  } )
// apply something for each property
// //iternate over sekection elements in array
//  $("ul").each(function(i,n){
//      $(n).css("background", "red")
//  })


//  var arr=[1,2,3]
//  if($.inArray(2, arr)!==-1){
// console.log("got it")
//  }
//extend
// var one ={a:"1", b:"2"}
// var two = {a:"3"}
// var three = $.extend({},one,two)
// console.log(three)
// console.log(one)
// $(document).ready(function(){
// $("h1").click(function(){
//     alert("clicked")
// })
// })

// $(document).ready(function(){
//     $("h1").mouseover(function(){
//         console.log("clicked")
//     })
// })
// $(document).ready(function(){
// $("#fn").change(function(){
//     console.log($("#fn").val())
// })
// })

// $(document).ready(function(){
//     $("#sub").click(function(){
//         alert($("#fn").val())
//     })
//     })
$(document).ready(function(){
      $("h1").on({
      mouseenter: function(){
         $("h1").addClass("highlight")
      },
      mouseleave: function(){
          alert("left")
      },
      })

// $("#sub").click(function(e){
//     e.preventDefault()
//     alert($("#fn").val())
// })
$("#ln").change((e)=>{
    alert(e.target.value)
})

})
