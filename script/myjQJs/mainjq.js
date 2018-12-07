//Scroll to top button
jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#myBtn').fadeIn('slow');
        } else {
            $('#myBtn').fadeOut('slow');
        }
    });
    $('#myBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    //Index strana, toggle content
        $('#main_info_showonclick').hide();
        $("#learn_moreBtn").click(function(e){
            e.stopPropagation();
            $('#main_info_showonclick').toggle(500);
        });

        $('#survival_guide_showonclick').hide();
        $("#survival_guideBtn").click(function(e){
            e.stopPropagation();
            $('#survival_guide_showonclick').toggle(500);
        });

        $('#legion_app_showonclick').hide();
        $("#legion_appBtn").click(function(e){
            e.stopPropagation();
            $('#legion_app_showonclick').toggle(500);
        });
    
        //About expanding
        $('.par_about_wow').hide();
        $("header .header_about_wow").click(function(e){
            e.stopPropagation();
            $('.par_about_wow').toggle(500);
        });
   
});


// Dinamicki nav meni
window.onload = function(){

    //meni dinamicki
    var navigacija = document.getElementsByClassName("main-nav-wrapper");
    var meni = ["Home", "Galery", "About", "Contact", "Author"];
    var hMeni = ["index.html", "galery.html", "about.html", "contact.html", "author.html"];

    var ispis = "<ul id='main-nav'>";
    for(var i=0;i<meni.length;i++){
        ispis += "<li><a href='" + hMeni[i] + "'>" + meni[i] + "</a></li>"
    }
    ispis += "</ul>";

    navigacija[0].innerHTML = ispis;
    navigacija[1].innerHTML = ispis;

    //contact forma -button
    var getButton = document.getElementById('btnSend');
    if(getButton){
        getButton.addEventListener('click', provera);
    }
}

//funkcija za validaciju contact forme - on click
function provera(){

    //Name provera
    var validate = /^[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    var get = document.querySelector('#cName');

    var getParrent = get.parentElement.parentElement;
    var getGreska = getParrent.nextElementSibling;
    if(!validate.test(get.value)){
        getGreska.classList.remove('invisible');
        document.getElementById('resultName').style.color = "red";
    }else{
        getGreska.classList.add('invisible');
    }



    //E-mail provera
        var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var getEmail = document.querySelector('#cEmail');

        var getParrentEmail = getEmail.parentElement.parentElement;
        var getGreskaEmail = getParrentEmail.nextElementSibling;

        if(!validateEmail.test(getEmail.value)){
            getGreskaEmail.classList.remove('invisible');
            document.getElementById('resultEmail').style.color = "red";
        }else{
            getGreskaEmail.classList.add('invisible');
        }


    //Comment provera

    var validateComment = /^([A-z][0-9])+$/;
    var getComment = document.querySelector('#cComment');

    var getParrentComment = getComment.parentElement.parentElement;
    var getGreskaComment = getParrentComment.nextElementSibling;

    if(!validateComment.test(getComment)){
        getGreskaComment.classList.remove('invisible');
        document.getElementById('resultComment').style.color = "red";
    }else{
        getGreskaComment.classList.add('invisible');
    }


}



