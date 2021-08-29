// lazy load for images usage 
// Author : Qasim Hussain 
// Email : compoxition@gmail.com 

/* 

USE IN CSS 
----------

img{opacity:1;transition:opacity 0.3s;}
img[data-src]{opacity: 0;}

===========================================

USE IN HTML 
-----------

<img data-src="image.jpg">

*/

[].forEach.call(document.querySelectorAll("img[data-src]"),function(t){t.setAttribute("src",t.getAttribute("data-src")),t.onload=function(){t.removeAttribute("data-src")}});