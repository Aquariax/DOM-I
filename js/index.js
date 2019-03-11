const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//images added here
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//nav added here
let navi = document.querySelectorAll('header nav a');
for (let i = 0; i < navi.length; i++){
  navi[i].textContent = siteContent['nav'][Object.keys(siteContent['nav'])[i]]
}
navi.forEach( function(attribute){
  attribute.style.color = 'green';
});
const nav2 = document.createElement('a')
nav2.textContent = ['Page', 'Page2']
navi.prepend(nav2)
//cta added here
const ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"].split(' ').join(`<br>`);

 const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

//main content added here
let mainContent = document.querySelector('.main-content')
const contentHeaders = document.querySelectorAll("h4");

 const mainH4Keys = Object.keys(siteContent["main-content"]).filter((key) => key.includes("h4"));

 contentHeaders.forEach((index, i) => contentHeaders[i].textContent = siteContent["main-content"][`${mainH4Keys[i]}`]);


 const contentParas = document.querySelectorAll("p");

 const mainParaKeys = Object.keys(siteContent["main-content"]).filter((key) => key.includes("content"));

 contentParas.forEach((index, i) => contentParas[i].textContent = siteContent["main-content"][`${mainParaKeys[i]}`]);


// contact added here
let contact = document.querySelector('.contact')
contentHeaders[5].textContent = siteContent["contact"]["contact-h4"];
contentParas[5].innerHTML = siteContent["contact"]["address"].split('Street ').join(`Street <br>`);
contentParas[6].textContent = siteContent["contact"]["phone"];
contentParas[7].textContent = siteContent["contact"]["email"];

//footer added here
let footer = document.querySelector('footer')
contentParas[8].textContent = siteContent["footer"]["copyright"];
