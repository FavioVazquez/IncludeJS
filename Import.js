var apply = eval;

var include = function (path) {
	var xml = new XMLHttpRequest();

	xml.open("GET", path, false);
	xml.send();

	return apply(xml.responseText);
};