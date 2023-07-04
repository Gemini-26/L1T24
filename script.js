$(document).ready(function() {
    let savedItems = [];
    $(document).ready(function(){
      fadeOut();
    })
  
    $(document).ready(function(){
        function animatePage(){
            $("body").animate({marginLeft: "-=50px"}, 1000)
            .animate({marginLeft: "+=50px"},1000)
            .animate({marginTop: "-=50px"},1000)
            .animate({marginTop: "+=50px"},1000),function(){
                animatePage();
            }
        }
            animatePage();
    })
    
  

    function updateAlert() {
      let count = savedItems.length;
      if (count === 1) {
        $('#alert').text('1 item in your Save for Later folder');
      } else {
        $('#alert').text(count + ' items in your Save for Later folder');
      }
      $('#alert').show();
    }
  
    function renderSavedItems() {
      $('#saved-items-list').empty();
      savedItems.forEach(function(item) {
        let listItem = $('<li></li>').text(item);
        $('#saved-items-list').append(listItem);
      });
    }
  
    $('#add-item-form').submit(function(event) {
      event.preventDefault();
      let item = $('#item-input').val();
      savedItems.push(item);
      $('#item-input').val('');
      updateAlert();
      renderSavedItems();
      let count = savedItems.length;
      if (count === 1) {
        alert('1 item in your Save for Later folder');
      } else {
        alert(count + ' items in your Save for Later folder');
      }
    });
  
    $('#comment-form').submit(function(event) {
      event.preventDefault();
      let comment = $('#comment-input').val();
      // Process the comment as needed
      $('#comment-input').val('');
      alert('Comment submitted: ' + comment);
    });
  
    $('.like-form').submit(function(event) {
      event.preventDefault();
      var button = $(this).find('button');
      button.toggleClass('liked');
      if (button.hasClass('liked')) {
        button.text('Liked');
      } else {
        button.text('Like');
      }
    });

    $('.like-form1').submit(function(event) {
        event.preventDefault();
        var button = $(this).find('button');
        button.toggleClass('liked');
        if (button.hasClass('liked')) {
          button.text('Liked');
        } else {
          button.text('Like');
        }
      });

      $('.like-form2').submit(function(event) {
        event.preventDefault();
        var button = $(this).find('button');
        button.toggleClass('liked');
        if (button.hasClass('liked')) {
          button.text('Liked');
        } else {
          button.text('Like');
        }
      });
      $('.like-form3').submit(function(event) {
        event.preventDefault();
        var button = $(this).find('button');
        button.toggleClass('liked');
        if (button.hasClass('liked')) {
          button.text('Liked');
        } else {
          button.text('Like');
        }
      });$('.like-form4').submit(function(event) {
        event.preventDefault();
        var button = $(this).find('button');
        button.toggleClass('liked');
        if (button.hasClass('liked')) {
          button.text('Liked');
        } else {
          button.text('Like');
        }
      });$('.like-form5').submit(function(event) {
        event.preventDefault();
        var button = $(this).find('button');
        button.toggleClass('liked');
        if (button.hasClass('liked')) {
          button.text('Liked');
        } else {
          button.text('Like');
        }
      });$('.like-form6').submit(function(event) {
        event.preventDefault();
        var button = $(this).find('button');
        button.toggleClass('liked');
        if (button.hasClass('liked')) {
          button.text('Liked');
        } else {
          button.text('Like');
        }
      });
  
    $('#contact-form').submit(function(event) {
      event.preventDefault();
      var name = $('#name-input').val();
      var email = $('#email-input').val();
      var message = $('#message-input').val();
      // Process the contact form submission as needed
      $('#name-input').val('');
      $('#email-input').val('');
      $('#message-input').val('');
      alert('Contact form submitted:\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    });

    //Changed effect
    $(document).ready(function(){
    function animatePage(){
        $("body").animate({marginLeft: "-=50px"}, 1000)
        .animate({marginLeft: "+=50px"},1000)
        .animate({marginTop: "-=50px"},1000)
        .animate({marginTop: "+=50px"},1000),function(){
            animatePage();
        }
    }
        animatePage();
})
//Hide Picture function for everytime you click an image
      function fadeOut(){
      $(".pics").on("click","*",function(){
        $(this).fadeOut();
      }) 
      } 
  //Dropdown btn
  $(document).ready(function(){
    $('#dropButton').click(function(){
      $('.dropdown').toggle()
    })
  })

  //AnimateButton
  $(document).ready(function(){
    $('#animateButton').click(function(){
      $('#animateButton').animate({
        width: '500px',
        height: '100px',
      },1000);
    })
  })

  $(document).ready(function(){
    $('#rlike').click(function(){
      alert("Thank you for sharing your happy experience :)")
    })
    $('#rdislike').click(function(){
      alert("Sorry to hear about your experienc :(")
    })
  })
    });
  