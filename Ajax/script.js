$(document).ready(()=>{
    // $("#result").load("text.html", (response, status, xhr)=>{
    //     if(status="Success"){
    //         console.log("success")
    //     }
    //     else if(status==="error"){
    //         console.log(xhr.statusText)
    //     }
    // })

//Get
// $.get("text.html", (data)=>{
//     //console.log(data)
//     $("#result").html(data)
// })

//get Json
// $.getJSON("user.json", (data)=>{
//     $.each(data,(i,val)=>{
//         $("ul#user").append("<li>"+val.name+"</li>")
//     })
// })
//Ajax
// $.ajax({
//     method:"GET",
//     url:"https://jsonplaceholder.typicode.com/users",
//     datatype:'json'
// }).done((data)=>{
//     $.each(data,(i,val)=>{
//     $("ul#user").append("<li>"+val.email+"</li>")
// })
// })
//post
$("#postForm").submit((e)=>{
    e.preventDefault()
    let title=$("#title").val()
    let body=$("#body").val()
    let url=$(this).attr("action")
    $.post(url,{title:title,body:body}).done((data)=>{
        console.log("post.saved")
        console.log(data)
    }).fail((xhr,status)=>{
        alert("sorry post failed")
        console.log(xhr.statusText)
    })
})
})