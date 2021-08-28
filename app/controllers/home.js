var uri=window.location.pathname.split('/');

console.log(uri[2])

if (uri[2] == "about"){ document.getElementById('pagename').innerHTML = 'About Us'; }
if (uri[2] == "home"){ document.getElementById('pagename').innerHTML = 'Home'; }