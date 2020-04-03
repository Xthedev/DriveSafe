var conversation = new Framework7();



var $$ = Dom7;

var mainview = conversation.addView('.view-main',{
    dynamicNavbar: true
});


$$('#GoToReg').click(function(){
    
    location.assign("register.html");
})
$$('#GoToLogin').click(function(){
    location.assign("login.html");
})

$$('#register').on("click",function(){
    var name = $$('#name').val();
    var phone = $$('#phone').val();
    var password = $$('#password').val();
    
    localStorage.setItem("UserName",name);
    localStorage.setItem("UserPhone",phone);
    localStorage.setItem("UserPassword",password);
    
    var username = localStorage.getItem('UserName');
    
    if(name=="" || password==""){
        conversation.alert('Username and Password Field Should not be empty.','drive<span style="color: rgb(11, 11, 131);">safe</span>',function(){
        location.assign("register.html");
        });
    }else{
        conversation.alert('<b style="font-size:20px;">'+username+'</b>'+', you have successfully registered.<br/>Click Ok and login your account','drive<span style="color: rgb(11, 11, 131);">safe</span>',function(){
        location.assign("login.html");
        });
    }    
    
})

$$('#login').on("click",function(){
    
    var loginname = $$('#loginname').val();
    var loginpass = $$('#loginpass').val();

    
    var username = localStorage.getItem('UserName'); //not a global variable
    var userpassword = localStorage.getItem('UserPassword'); // not a global variable
    if(loginname==username && loginpass==userpassword){
        conversation.alert('<b style="font-size:20px;">'+loginname+'</b>, Welcome to drivesafe','drive<span style="color: rgb(11, 11, 131);">safe</span>',function(){
            location.assign("home.html");
        });
    }else{
        conversation.alert('Name / Password not correct<br>Please input correct Name / Password or<br/>Register again to exit every saved account','drive<span style="    color: rgb(11, 11, 131);">safe</span>');
   
    }
})


$$('#logout').on("click",function(){
    location.assign("login.html");
})

$$('.homepage').on("click",function(){
    location.assign("home.html");
})

$$('.menulist1').on("click",function(){
    location.assign("menulist1.html");
})

$$('.road-rules').on("click",function(){
    location.assign("roadrules.html");
})

$$('.drivingtips').on("click",function(){
    location.assign("drivingtips.html");
})

$$('.traficsigns').on("click",function(){
    location.assign("trafficsigns.html");
})

$$('.interactivetest').on("click",function(){
    location.assign("interactivetest.html");
})

$$('.hover-button').on("click",function(){
    location.assign("quest1.html");
//    $$('.question-content1').css({
//        'display':'block'
//    })
})

$$('#exit-quiz').on("click",function(){
    location.assign("interactivetest.html");
})

$$('#next1').on("click",function(){
    $$('.question-content2').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})


$$('#next2').on("click",function(){
    $$('.question-content3').css({
        'display':'block'
    })
    $$('.question-content1,.question-content2,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next3').on("click",function(){
    $$('.question-content4').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content2,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next4').on("click",function(){
    $$('.question-content5').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content2,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next5').on("click",function(){
    $$('.question-content6').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content2,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next6').on("click",function(){
    $$('.question-content7').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content2,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next7').on("click",function(){
    $$('.question-content8').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content2,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next8').on("click",function(){
    $$('.question-content9').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content2,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next9').on("click",function(){
    $$('.question-content10').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content2,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next10').on("click",function(){
    $$('.question-content11').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content2,.question-content12,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next11').on("click",function(){
    $$('.question-content12').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content2,.question-content13,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next12').on("click",function(){
    $$('.question-content13').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content2,.question-content14,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next13').on("click",function(){
    $$('.question-content14').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content2,.question-content15,.question-content16').css({
        'display':'none'
    })
})

$$('#next14').on("click",function(){
    $$('.question-content15').css({
        'display':'block'
    })
    $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content2,.question-content16').css({
        'display':'none'
    })
})

$$('#next15').on("click",function(){
    conversation.alert('End of Quiz','drive<span style="color: rgb(11, 11, 131);">safe</span>',function(){
        
        $$('.question-content16').css({
        'display':'block'
        })
        $$('.question-container>h2>small').css({
        'display':'none'
        })
        $$('.question-content1,.question-content3,.question-content4,.question-content5,.question-content6,.question-content7,.question-content8,.question-content9,.question-content10,.question-content11,.question-content12,.question-content13,.question-content14,.question-content15,.question-content2').css({
            'display':'none'
        })
        
        });
})



/*********** JUMP TO QUESTION SECTION ****************/
$$('.jump1').on("click",function(){
    location.assign("jump1.html");
})

//$$('#jump2').on("click",function(){
//    $$('#interactivetest').hide();
//    $$('.question-container').show();
//})


$$('#AnswerH1').on("click",function(){
    $$('.AnswerV1').css({
        'display': 'block'
    })
    $$('.question-contentjump').css({
        'height':'921px'
    })
    $$('.jump-top').css({
        'display':'block'
    })
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH2').on("click",function(){
    $$('.AnswerV2').css({
        'display': 'block'
    })
    $$('.jump2ques2').css({
        'height':'951px'
    })
    $$('.jump-top').css({
        'display':'block'
    })
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH3').on("click",function(){
    $$('.AnswerV3').css({
        'display': 'block'
    })
    $$('.jump2ques3').css({
        'height':'951px'
    })
    $$('.jump-top').css({
        'display':'block'
    })
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH4').on("click",function(){
    $$('.AnswerV4').show();
    $$('.jump2ques4').css({
        'height':'1100px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH5').on("click",function(){
    $$('.AnswerV5').show();
    $$('.jump2ques5').css({
        'height':'900px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH6').on("click",function(){
    $$('.AnswerV6').show();
    $$('.jump2ques6').css({
        'height':'1320px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH7').on("click",function(){
    $$('.AnswerV7').show();
    $$('.jump2ques7').css({
        'height':'1320px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH8').on("click",function(){
    $$('.AnswerV8').show();
    $$('.jump2ques8').css({
        'height':'850px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH9').on("click",function(){
    $$('.AnswerV9').show();
    $$('.jump2ques9').css({
        'height':'900px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH10').on("click",function(){
    $$('.AnswerV10').show();
    $$('.jump2ques10').css({
        'height':'1100px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH11').on("click",function(){
    $$('.AnswerV11').show();
    $$('.jump2ques11').css({
        'height':'1100px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH12').on("click",function(){
    $$('.AnswerV12').show();
    $$('.jump2ques12').css({
        'height':'1100px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH13').on("click",function(){
    $$('.AnswerV13').show();
    $$('.jump2ques13').css({
        'height':'1100px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH14').on("click",function(){
    $$('.AnswerV14').show();
    $$('.jump2ques14').css({
        'height':'1100px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})

$$('#AnswerH15').on("click",function(){
    $$('.AnswerV15').show();
    $$('.jump2ques15').css({
        'height':'1100px'
    })
    $$('.jump-top').show();
    $$('.nextques').css({
        'marginLeft':'45px'
    })
})



$$('.nextques1').on("click",function(){
    $$('.jump2ques1,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').css({
        'display':'none'
    })
    $$('.jump2ques2').css({
        'display':'block'
    })
})

$$('.nextques2').on("click",function(){
//    $$('.jump2ques1,.jump2ques2,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14.jump2ques15').css({
//        'display':'none'
//    })
    $$('.jump2ques1,.jump2ques2,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').hide()
    $$('.jump2ques3').css({
        'display':'block'
    })
    $$('.AnswerV2').css({
        'display': 'none'
    })
})

$$('.nextques3').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').css({
        'display':'none'
    })
    $$('.jump2ques4').css({
        'display':'block'
    })
    $$('.AnswerV2').css({
        'display': 'none'
    })
})

$$('.nextques4').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').css({
        'display':'none'
    })
    $$('.jump2ques5').css({
        'display':'block'
    })
    $$('.AnswerV2').css({
        'display': 'none'
    })
})

$$('.nextques5').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').hide();
    $$('.jump2ques6').show();
    $$('.AnswerV2').hide();
})

$$('.nextques6').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').hide();
    $$('.jump2ques7').show();
    $$('.AnswerV2').hide();
})

$$('.nextques7').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').hide();
    $$('.jump2ques8').show();
    $$('.AnswerV2').hide();
})

$$('.nextques8').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').hide();
    $$('.jump2ques9').show();
    $$('.AnswerV2').hide();
})

$$('.nextques9').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').hide();
    $$('.jump2ques10').show();
    $$('.AnswerV2').hide();
})

$$('.nextques10').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques12,.jump2ques13,.jump2ques14,.jump2ques15').hide();
    $$('.jump2ques11').show();
    $$('.AnswerV2').hide();
})

$$('.nextques11').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques13,.jump2ques14,.jump2ques15').hide();
    $$('.jump2ques12').show();
    $$('.AnswerV2').hide();
})

$$('.nextques12').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques14,.jump2ques15').hide();
    $$('.jump2ques13').show();
    $$('.AnswerV2').hide();
})

$$('.nextques13').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques15').hide();
    $$('.jump2ques14').show();
    $$('.AnswerV2').hide();
})

$$('.nextques14').on("click",function(){
    $$('.jump2ques1,.jump2ques2,.jump2ques3,.jump2ques4,.jump2ques5,.jump2ques6,.jump2ques7,.jump2ques8,.jump2ques9,.jump2ques10,.jump2ques11,.jump2ques12,.jump2ques13,.jump2ques14').hide();
    $$('.jump2ques15').show();
    $$('.AnswerV2').hide();
})

$$('.jump-top').on("click",function(){
//    $$('.nav-back2top,.nav-back2top-arrow').animate({
//        'scrollTop':'0'
//    })
      $$('.page-content').scrollTop($$('#h2top').offset().top - 100,300);
})








