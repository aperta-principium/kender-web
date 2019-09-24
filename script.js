
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems);
});

// Or with jQuery

$(document).ready(function () {
	$('.modal').modal();
	$('.sidenav').sidenav();

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('.logo').on('click', function() {
	    $('.logo').css({'transform' : 'rotate('+ 180 +'deg)'});
			$('.logo').css({'opacity' : '0'});
 			setTimeout(function(){ $('.logo').css({'display' : 'none'}); }, 1700);
});
function beforeAfter() {
  document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}