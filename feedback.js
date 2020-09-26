$(document).ready(function(){

    var text = "SL Axiata Enterprise";
    
      $.each(text.split(""), function(key,val){
    
        $('.animation-text').append('<div class = "split-text">'+val+'</div>')
    
    });
    
      var each_text = $('.split-text');
    
      $.each(each_text ,function(){
    
        var rand = Math.floor(Math.random()*1000);
    

        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);

    $(this).css({
    
    'color':'rgb('+g+','+g+','+g+')',
    'margin-top' : -rand
    
    }).animate({
    
    marginTop : '0px'
    
    }, 1000);
    
      });
    
    
 

    var text2 = "Send Us Your Feedback";
    
    $.each(text2.split(""), function(key,val){
  
      $('.animation-text2').append('<div class = "split-text2">'+val+'</div>')
  
  });
  
    var each_text2 = $('.split-text2');
  
    $.each(each_text2 ,function(){
  
      var rand2 = Math.floor(Math.random()*1000);
  

      var r2 = Math.floor(Math.random()*255);
      var g2= Math.floor(Math.random()*255);
      var b2 = Math.floor(Math.random()*255);

  $(this).css({
  
  'color':'r2g2b2('+g2+','+g2+','+g2+')',
  'margin-top' : -rand2
  
  }).animate({
  
  marginTop : '0px'
  
  }, 2000);
  
    });
  
  
  });
  


    


    // Audio Animaton 

$("#hide-audio").click(function(){

    $("#feedback-audio").hide();

})

$("#show-audio").click(function(){

    $("#feedback-audio").show();

})

// Validation

function checkAdd (email){
        let counterAdd = 0;
        let counterDots = 0;
        if (email.startsWith('@') == true){
          return false;
        }
        else if (email.startsWith('.') == true){
             return false;
           }else{
             for (let i =0; i<email.length; i++){
               if (email[i] =='@' ){
                 counterAdd++;
               }if (email[i] == '.'){
                 counterDots++;
               }if (email[i] == '.' &&(email[i+1] == '.' || email[i]=='@')){
               return false;
             }
           }
           if(counterAdd == 1){
             if (counterDots >= 1){
               return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      
      }
}

// function checkFeedback(){
  window.addEventListener('load', function(){

    // var name;
    // var email;
    // var feedback;
    var form = document.getElementById('feedback1');
    form.addEventListener('submit', function(event){
      var name = document.getElementById('input-name').value;
      var email = document.getElementById('input-email').value;
      var feedback = document.getElementById('input-feedback').value;
      
      console.log (name.length);
      if (name.length >= 5 && name.length <= 25){
        if (email.length != 0){
          if (checkAdd (email) == true){
            if (feedback.length > 0){
              
              alert ("Thank you for the feedback 😊");
              $('#input-name').val('');
              $('#input-email').val('');
              $('#input-feedback').val('');
              return false;
            }else{
              
              alert ("feedback cannot be empty");
            }
          }else{
            
            alert ("email format wrong");
          }
        }else{
          
          alert ("email must be filled");
        }
      }else {
        
        alert ("Name must be filled with 5 to 25 characters");
      }

      
    })
    
  })