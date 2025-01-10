
var target = document.querySelectorAll('.bar-elem');

target.forEach((t) => t.addEventListener("click", function(event){
    target.forEach(function(t){
        document.getElementById(t.id).classList.remove("selected");
    });
    document.getElementById(event.target.id).classList.add("selected");
    movePage();
}));


function movePage(){
    console.log(document.getElementsByClassName("selected")[0].getAttribute('id'))
    var clicked = document.getElementsByClassName("selected")[0].getAttribute('id');
    //location.href = "/board/" + clicked;

    
    $.ajax({
        url: "/board/" + clicked,
        type: "POST",
        async: true, // true(비동기), false(동기)
        dataType: "http", //서버로부터 넘겨받을 데이터 타입
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success : function(arg) {
            alert("통신성공시에만 실행");
        },
    });
}