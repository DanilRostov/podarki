var imgBoxes = $('.products__img-box');

for (i = 0; i < imgBoxes.length; i++) {
	var img = $(imgBoxes[i]).find('img');
	var imgWidth = img.width();
	var imgHeight = img.height();
	var imgBoxHeight = $(imgBoxes[i]).height();

	if (imgWidth > imgHeight) {
		img.css('height', '100%');
	} else {
		img.css('width', '100%');
	}

	// if (imgHeight > imgBoxHeight) {
	// 	var m = - ((imgHeight - imgBoxHeight) / 2);
	// 	img.css('margin-top', m);
	// }
}