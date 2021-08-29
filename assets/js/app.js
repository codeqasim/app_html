    import ('../../app/controllers/home.js');

    // VENDORS - LIBS
    import ('../../vendor/include_html.js');      // HTML including file 
    import ('../../vendor/lazy_img.js');          // Lazy load with fade effect 

    var config = {
    api_url: "https://api.kharidar.co/api/v1/", /* make sure the url should end with slash " / " */
    appname: "Kharidar", 
    language: "en", 
    currency: "PKR",
    logo: "http://api.kharidar.co/public/assets/img/logo.png",
    img_path: "https://api.kharidar.co/public/"
    }

    // trigger async function
    // log response or catch error of fetch promise

    // document.getElementById('app').innerHTML = data.app.appname;
    // document.getElementById("logo").src = config.logo;

    // appname = sessionStorage.app.appname;
    // sessionStorage.setItem('app', JSON.stringify(response))


    // function for loaded categories
    function show_categories() {

    // categories loop
    const app = document.querySelector('#categories');

    categories.forEach((item) => {

    app.innerHTML += `

    <div class="c2" ontouchstart="this.classList.toggle('hover');">
    <div class="containers">
    <div class="front" style="background-image: url(https://api.kharidar.co/public/${item.banner})">
    <div class="inner">
    <p>${item.name}</p>
    <span></span>
    </div>
    </div>
    <div class="back">
    <div class="inner">
    <p>Category ID ${item.id}.</p>
    </div>
    </div>
    </div>
    </div>

    `;
    });

    }

    const categories = JSON.parse(sessionStorage.getItem("categories"));

    // variable is undefined or null
    if (typeof categories === 'undefined' || categories === null) {

    // Rainbow Giant Styled Text
    const style = 'font-weight: bold; font-size: 14px;';
    console.log('%c Loading Categories', style);

    async function fetchAsync () {

    // await response of fetch call
    let response = await fetch(config.api_url+'categories');

    // only proceed once promise is resolved

    let data = await response.json();
    // only proceed once second promise is resolved

    // store to session
    sessionStorage.setItem('categories', JSON.stringify(data.data))

    return data;

    }

    fetchAsync()
    .then(data => console.log(data.data))

    } else {

    // Rainbow Giant Styled Text
    const style = 'font-weight: bold; font-size: 14px;';
    console.log('%c Categories Cached', style);
    console.log(categories);

    show_categories();

    }

    // =========================================================== //

    // fadein page load
    function fade() {  document.body.style.opacity='1' };