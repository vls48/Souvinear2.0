// Passing it page you want to jump too, location.href (best way to go to pages) works online and locally = page you want to go to 
function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}

$("#nav_button").click(function(event) {

    $("#nav_button").toggleClass("pull_up");
    $(".nav_contain").toggleClass("toggle_nav");

   if($(this).hasClass('pull_up')){
        $(this).removeClass('pull_down');
    } else {
    	$(this).addClass('pull_down');
    }

});



// Click function for swap animation

document.getElementById('swap_micro').addEventListener('click', function () {

  if (this.classList.contains('swap_btn')) {

   this.classList.add('swap_play');
  } else {

  }
});


// Click function for swap inbox animation

document.getElementById('swap_inbox_micro').addEventListener('mouseenter', function () {

  if (this.classList.contains('swap_inbox_btn')) {

   this.classList.add('swap_inbox_play');
  } else {

  }
});


// Click function for pinning songs 

document.getElementById('pin_micro').addEventListener('click', function () {

  if (this.classList.contains('add_pin')) {

   this.classList.add('pin_selected');
  } else {

  }
});










