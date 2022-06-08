$(document).ready(function(){
    
    // .tabBtn을 클릭했을때 이러한일이벌어질것이다.
        // 방금클릭한그것은 형제들중 몇번째인가? 그것을 idx라고하자.
        // 모든 .tabCont를 숨긴다.
        // .tabCont중에 idx번째는 보여준다.
        // 모든 .tabBtn들로부터 "tactive"라는 클래스를 뺏는다.
        // 방금클릭한그것에게 "tactive"라는 클래스를 준다.
    $(".tabBtn").click(function(){
        var idx = $(this).index();
        $(".tabCont").hide();
        $(".tabCont").eq(idx).show();
        $(".tabBtn").removeClass("tactive");
        $(this).addClass("tactive");
    });
    
    
    
    // .acctab을 클릭했을때 이런일이벌어질것이다.
        // 만약 방금누른그것의 자식 .acctabCont가 '보여지고있는상태'인가?
        // 그렇다면
            // 방금누른그것의 자식 .acctabCont를 접는다.
            // 방금누른그것의 자손 중 .caret에게서 ".rev"를 뺏는다.
        // 아니라면
            // 방금누른그것의 자식 .acctabCont를 펼친다.
            // 방금누른그것의 자손 중 .caret에게 ".rev"를 준다.
            // 방금누른그것의 형제자매의 자식 .acctabCont를 접는다.
            // 방금누른그것의 형제자매의 자손 .caret에게서 ".rev"를 뺏는다.
    $(".acctab").click(function(){
        if( $(this).children(".acctabCont").is(":visible") ){
            $(this).children(".acctabCont").slideUp();
            $(this).find(".caret").removeClass("rev");
        }else{
            $(this).children(".acctabCont").slideDown();
            $(this).find(".caret").addClass("rev");
            $(this).siblings().children(".acctabCont").slideUp();
            $(this).siblings().find(".caret").removeClass("rev");
        }
    });
    
    
    
    $(".modalbtn").click(function(){
        var title = $(this).attr("modal-title");
        var cont = $(this).attr("modal-cont");
        var img = $(this).attr("modal-image");
        
        $("#modaltitle").text(title);
        $("#modalcont").text(cont);
        if(img != undefined){
            $("#modalcont").prepend("<img id='modalimage' src='"+img+"' alt='"+title+"' />");
        }
        
        $("#modal").fadeIn(200,function(){
            $("#modalwin").animate({
                opacity: 1,
                marginTop: "20px"
            },200);
        });
    });
    
    $(".modalclose").click(function(){
        $("#modalwin").animate({
            opacity: 0,
            marginTop: "30px"
        },200,function(){
            $("#modal").fadeOut(200);
        });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});


























