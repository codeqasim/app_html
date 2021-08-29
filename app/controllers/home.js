var uri=window.location.pathname.split('/');

console.log(uri[2])

if (uri[2] == "about"){ document.getElementById('render').innerHTML = 'About Us'; }
if (uri[2] == "home"){ document.getElementById('render').innerHTML = 'Home'; }

if (uri[2] == ""){ document.getElementById('render').innerHTML = '<style>.categories{display:block!important}</style>'; }
