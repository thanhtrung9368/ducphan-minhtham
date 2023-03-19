$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dot: false,
    autoplaySpeed: 3000,
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
  });
  
  $(".option-1boxp").on('click',function(){
      $('.element-hide-rap').css('display','block');
      if(!$(this).hasClass('activep')){
          $(this).addClass('activep');
          $(".option-2boxp").removeClass('activep');
          $(".option-3boxp").removeClass('activep');
      }
  })
  
  $(".option-2boxp").on('click',function(){
      $('.element-hide-rap').css('display','none');
      if(!$(this).hasClass('activep')){
          $(this).addClass('activep');
          $(".option-1boxp").removeClass('activep');
          $(".option-3boxp").removeClass('activep');
      }
  })
  
  $(".option-3boxp").on('click',function(){
      $('.element-hide-rap').css('display','none');
      if(!$(this).hasClass('activep')){
          $(this).addClass('activep');
          $(".option-1boxp").removeClass('activep');
          $(".option-2boxp").removeClass('activep');
      }
  });
  
  $(".option-1").on('click',function(){
      if(!$(this).hasClass('activep')){
          $(this).addClass('activep');
          $(".option-2").removeClass('activep');
      }
  })
  
  $(".option-2").on('click',function(){
      if(!$(this).hasClass('activep')){
          $(this).addClass('activep');
          $(".option-1").removeClass('activep');
      }
  })
  
  $(document).on('change','#id_field_pt',function() {
      let pt_xe = $(this).val();
      console.log(pt_xe);
      if(parseInt(pt_xe) == 2){
          $(".box-pt-info").removeClass('hide-pt');
      }else{
          $(".box-pt-info").addClass('hide-pt');
      }
  });
  
    $('.gf_button1').on('click',function(){
          // check cookie
          // let check_alert = checkCookie();
          // if(check_alert == 1){
          //   alert("ThĂ´ng tin cá»§a báº¡n Ä‘Ă£ Ä‘Æ°á»£c gá»­i Ä‘i! Vui lĂ²ng thá»­ láº¡i sau 5 phĂºt");
          //   return false;
          // }
  
  
          // swal({
          //   title: "",
          //   text: "<div class='text-left'>Gá»­i lá»i nháº¯n hoáº·c lá»i chĂºc</div><textarea id='text-rsvp' class='form-control' rows='5'></textarea>",
          //   html: true,
          //   showCancelButton: true,
          //   closeOnConfirm: false,
          //   showLoaderOnConfirm: true,
          //   cancelButtonText: 'KhĂ´ng',   
          //   confirmButtonText: 'Gá»­i', 
          //   inputPlaceholder: "Nháº­p ná»™i dung hoáº·c Ä‘á»ƒ trá»‘ng"
          // }, function(inputValue) {
          //     if (inputValue === false) return false;
          //     // if (inputValue === "") {
          //     //     swal.showInputError("You need to write something!");
          //     //     return false
          //     // }
          //     // get value using textarea id
          //     //var val = document.getElementById('text').value;
              
  
          // });
  
          let note_rsvp_ct = $('#text-rsvp').val();
  
          let val_EM = $(this).attr('data-email');
          let val_E = $('.gf_textfield').val();
          let val_num = $('select[name="thamdusonguoi"]').val();
          let val_friend = 1;
          let val_in = 1;
          let val_pt = $('select[name="select_pt_pt"]').val();
          // get check friend
          if($(".option-2").hasClass('activep')){
              val_friend = 2;
          }
          if($(".option-2boxp").hasClass('activep')){
              val_in = 2;
              val_num = 0;
              val_pt = 0;
          }
          if($(".option-3boxp").hasClass('activep')){
              val_in = 3;
              val_num = 0;
              val_pt = 0;
          }
          if(empty(val_E)){
              let alert_pls_name = $('#main-page').attr('alert_pls_name');
              alert(alert_pls_name);
              return false;
          }
  
          let d = new Date();
  
          let day = d.getDate();
          let month = d.getMonth() + 1;
          if(parseInt(day) < 10){
            day = "0" + parseInt(day);
          }
  
          if(parseInt(month) < 10){
            month = "0" + parseInt(month);
          }
  
          let current_time = d.getHours()+"h"+d.getMinutes()+" - "+day+"/"+ month +"/"+d.getFullYear();
          let input_ptxe2 = $('input[name="input_ptxe2"]').val();
          let form_data = {
              email: val_EM,
              name: val_E,
              number: val_num,
              friend: val_friend,
              friend_in : val_in, 
              val_pt : val_pt,
              input_ptxe2 : input_ptxe2,
              note_rsvp_ct : note_rsvp_ct,
              currunt_href: window.location.href,
              current_time: current_time,
          };
          $('.gf_button1').attr('disabled','disabled');
          let text_alert = $('#main-page').attr('text_alert_rsvp');
          //alert(text_alert);
  
  
          // $.ajax({
          //     type: "GET",
          //     url: $(".rsvp-data").attr('data-link'),
          //     data: form_data,
          //     dataType: 'json',
          //     success: function (response) {
          //       setCookie('alert_time',1,5);
          //     }
          // });
  
  
          swal({
            title: "",
            text: "<div class='text-left'>Gá»­i lá»i nháº¯n hoáº·c lá»i chĂºc</div><textarea id='text-rsvp' class='form-control' rows='5'></textarea>",
            html: true,
            showCancelButton: false,
            confirmButtonText: 'Gá»­i Ä‘i', 
            closeOnConfirm: true,   
            closeOnCancel: true ,
          }, function(isConfirm) {
              let valxxx = document.getElementById('text-rsvp').value;
              form_data.note_rsvp_ct = valxxx;
              $.ajax({
                  type: "GET",
                  url: $(".rsvp-data").attr('data-link'),
                  data: form_data,
                  dataType: 'json',
                  success: function (response) {
                    setCookie('alert_time',1,5);
                    $(".sa-button-container").css('display','block');
                      setTimeout(function(){
                          swal("Success...",text_alert, "success");
                      },700);
                  }
              });
              
          });
  
          
        
    });
  
    $('.gf_buttonrsvpupdate').on('click',function(){
          // check cookie
          // let check_alert = checkCookie();
          // if(check_alert == 1){
          //   alert("ThĂ´ng tin cá»§a báº¡n Ä‘Ă£ Ä‘Æ°á»£c gá»­i Ä‘i! Vui lĂ²ng thá»­ láº¡i sau 5 phĂºt");
          //   return false;
          // }
  
          // swal({
          //   title: "",
          //   text: "<div class='text-left'>Gá»­i lá»i nháº¯n hoáº·c lá»i chĂºc</div><textarea id='text-rsvp' class='form-control' rows='5'></textarea>",
          //   html: true,
          //   showCancelButton: true,
          //   closeOnConfirm: false,
          //   showLoaderOnConfirm: true,
          //   cancelButtonText: 'KhĂ´ng',   
          //   confirmButtonText: 'Gá»­i', 
          //   inputPlaceholder: "Nháº­p ná»™i dung hoáº·c Ä‘á»ƒ trá»‘ng"
          // }, function(inputValue) {
          //     if (inputValue === false) return false;
          //     // if (inputValue === "") {
          //     //     swal.showInputError("You need to write something!");
          //     //     return false
          //     // }
          //     // get value using textarea id
          //     //var val = document.getElementById('text').value;
              
  
          // });
  
          let note_rsvp_ct = $('#text-rsvp').val();
  
          let val_EM = $(this).attr('data-email');
          let val_E = $('.gf_textfield').val();
          let val_num = $('select[name="thamdusonguoi"]').val();
          let val_friend = 1;
          let val_in = 1;
          let val_pt = $('select[name="select_pt_pt"]').val();
          let input_ptxe2 = $('input[name="input_ptxe2"]').val();
          // get check friend
          if($(".option-2").hasClass('activep')){
              val_friend = 2;
          }
          if($(".option-2boxp").hasClass('activep')){
              val_in = 2;
              val_num = 0;
              val_pt = 0;
          }
          if($(".option-3boxp").hasClass('activep')){
              val_in = 3;
              val_num = 0;
              val_pt = 0;
          }
          // if(empty(val_E)){
          //     let alert_pls_name = $('#main-page').attr('alert_pls_name');
          //     alert(alert_pls_name);
          //     return false;
          // }
  
          let d = new Date();
  
          let day = d.getDate();
          let month = d.getMonth() + 1;
          if(parseInt(day) < 10){
            day = "0" + parseInt(day);
          }
  
          if(parseInt(month) < 10){
            month = "0" + parseInt(month);
          }
  
          let current_time = d.getHours()+"h"+d.getMinutes()+" - "+day+"/"+ month +"/"+d.getFullYear();
  
          let form_data = {
              _token: $('meta[name="csrf-token"]').attr('content'),
              contact_id: $('.gf_buttonrsvpupdate').attr('data-id'),
              item_id: $('.gf_buttonrsvpupdate').attr('data-item-id'),
              email: val_EM,
              name: val_E,
              number: val_num,
              friend: val_friend,
              friend_in : val_in,
              val_pt : val_pt,
              input_ptxe2 : input_ptxe2,
              currunt_href: window.location.href,
              current_time: current_time,
          };
          $('.gf_buttonrsvpupdate').attr('disabled','disabled');
          let text_alert = $('#main-page').attr('text_alert_rsvp');
          //alert(text_alert);
  
          /*$.ajax({
              type: "GET",
              url: $(".rsvp-data").attr('data-link'),
              data: form_data,
              dataType: 'json',
              success: function (response) {
                setCookie('alert_time',1,5);
              }
          });*/
  
          var formData = new FormData();
  
          formData.append('_token', $('meta[name="csrf-token"]').attr('content'));
          formData.append('contact_id', $('.gf_buttonrsvpupdate').attr('data-id'));
          formData.append('item_id', $('.gf_buttonrsvpupdate').attr('data-item-id'));
          formData.append('email', val_EM);
          formData.append('name', val_E);
          formData.append('number', val_num);
          formData.append('friend', val_friend);
          formData.append('friend_in', val_in);
          formData.append('val_pt', val_pt);
          formData.append('input_ptxe2', input_ptxe2);
          formData.append('is_update', '1');
          formData.append('currunt_href', window.location.href);
          formData.append('current_time', current_time);
  
          // $.ajax({
          //    type: "POST",
          //    url: $(".gf_buttonrsvpupdate").attr('data-link'),
          //    data: formData,
          //    dataType:"json",
          //    crossDomain: true,
          //    cache : false,
          //     processData: false,
          //     contentType: false,
          //     headers: {
          //         "X-CSRFToken": $('meta[name="csrf-token"]').attr('content'),
          //     },
          //    success: function( msg ) {
          //         setCookie('alert_time',1,5);
          //    }
          // });
  
          swal({
            title: "",
            text: "<div class='text-left'>Gá»­i lá»i nháº¯n hoáº·c lá»i chĂºc</div><textarea id='text-rsvp' class='form-control' rows='5'></textarea>",
            html: true,
            showCancelButton: false,
            confirmButtonText: 'Gá»­i Ä‘i', 
            closeOnConfirm: true,   
            closeOnCancel: true ,
          }, function(isConfirm) {
              let valxxx = document.getElementById('text-rsvp').value;
              formData.append('note_rsvp_ct', valxxx);
              $.ajax({
                 type: "POST",
                 url: $(".gf_buttonrsvpupdate").attr('data-link'),
                 data: formData,
                 dataType:"json",
                 crossDomain: true,
                 cache : false,
                  processData: false,
                  contentType: false,
                  headers: {
                      "X-CSRFToken": $('meta[name="csrf-token"]').attr('content'),
                  },
                 success: function( msg ) {
                      setCookie('alert_time',1,5);
                      $(".sa-button-container").css('display','block');
                      setTimeout(function(){
                          swal("Success...",text_alert, "success");
                      },700);
                 }
             });
  
  
              //console.log(valxxx);
                  
             
          });
  
          
        
    });
  
    $('.gla_music_icon').on('click',function(){
            //   $('.gla_music_icon_cont').fadeToggle(); 
            window.scrollTo({ top: 0, behavior: "smooth" });
          
          }); 
  let audio = document.getElementById("audio");
  // $(document).ready(function(){
  //     let audio = document.getElementById("audio");
     
  //     if(audio){
  //         audio.play().then(()=>audio.pause());
  //         // now we can do whatever we want at any time with this MediaElement
  //         setTimeout(()=> audio.play(), 3000);
  //     }
      
  // });
  
  $(".btn-play-audio").on('click',function(){
      //let audio = document.getElementById("audio");
      //console.log(audio);
      if($(".btn-play-audio").find(".fa").hasClass('after-slash')){
          $(".btn-play-audio").find(".fa").removeClass('after-slash');
          audio.play()
          //console.log(audio.src)
      }else{
          $(".btn-play-audio").find(".fa").addClass('after-slash');
          audio.pause();
      }
  }); 
  
  
    $('.addevent').addToCalendar({
            filename: 'myicalendar',
            target: '_blank',
            providers: {
                google: 'Google Calendar',
                other: 'Other Calendar'
            }
          });
  
  
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ", " + expires;
  }
  
  
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length,c.length);
          }
      }
      return "";
  }
  
  function checkCookie() {
      let username=getCookie("alert_time");
      let return_check = 0;
      if (username!="") {
          return_check = 1;
      }
      return return_check;
  }
  
  function empty(str)
  {
      if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g,"") === "")
          return true;
      else
          return false;
  }

  

// Add
const sliderImages = document.querySelectorAll('.slider-container img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let intervalId;

function showImage(index) {
  sliderImages.forEach(image => {
    image.style.transform = `translateX(-${index * 100}%)`;
  });
}

function autoNextImage() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showImage(currentIndex);
  }, 5000);
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  showImage(currentIndex);
  autoNextImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  showImage(currentIndex);
  autoNextImage();
});

showImage(currentIndex);
autoNextImage();


