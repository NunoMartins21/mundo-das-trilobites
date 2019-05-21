$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        scrollHorizontally: true,
		dragAndMove: true,
		verticalCentered: false,
        licenseKey: `p]yaoTk')T<GZKU6N;'i H|8p[L0C)kT]T~Gf+vVt53|e-jq`
	});

	// Adicionar classe às setas
	$(".fp-controlArrow.fp-prev").addClass("fas fa-arrow-alt-circle-left");
	$(".fp-controlArrow.fp-next").addClass("fas fa-arrow-alt-circle-right");

	// Ao clicar na seta da primeira section, mover p/ baixo
	$("#btn").click(function (e) { 
		e.preventDefault();
		$.fn.fullpage.moveTo(2);
	});
});