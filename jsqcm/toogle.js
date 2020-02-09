function toggle(obj_id) {
	var el = document.getElementById(obj_id);
	if ( el.style.display != 'none' ) {
		el.style.display = 'none';
	} else {
		el.style.display = '';
	}
}