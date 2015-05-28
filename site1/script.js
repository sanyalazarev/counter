function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

var URL = 'http://site2.com/counter.php';
var ID = getCookie("ID");
var xhr = ("onload" in new XMLHttpRequest()) ? new XMLHttpRequest() : new XDomainRequest();

if(ID != undefined) {
	var time = Math.round((new Date().getTime()) / 1000);
	
	xhr.open('POST', URL, true);
	xhr.onload = function() {
		console.log( this.responseText );
	}
	xhr.onerror = function() {
		console.log( 'Ошибка ' + this.status );
	}
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send("act=update&ID="+ID+"&lastTimeActivity="+time);
} else {
	var time = Math.round((new Date().getTime()) / 1000);
	
	xhr.open('POST', URL, true);
	xhr.onload = function() {
		document.cookie = "ID="+xhr.responseText;
	}
	xhr.onerror = function() {
		console.log( 'Ошибка ' + this.status );
	}
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send("act=new_user&lastTimeActivity="+time);
}