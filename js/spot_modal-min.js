$(".modal_open").click(function(){$(".modal").css({visibility:"visible",opacity:"1"}),$(".overlay").css({visibility:"visible",opacity:"1"})}),$(document).mouseup(function(i){var s=$(".modal");s.is(i.target)||0!==s.has(i.target).length||($(".modal").css({visibility:"hidden",opacity:"0"}),$(".overlay").css({visibility:"hidden",opacity:"0"}))});