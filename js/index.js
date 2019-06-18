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
const logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = "img/logo.png";
logo.alt = 'logo';

const header = document.querySelector('#cta-img');
header.src = "img/header-img.png";
header.alt = 'image of bits and bytes';


const midpage = document.querySelector('#middle-img');
midpage.src = "img/mid-page-accent.jpg";
midpage.alt = 'long image of bits and bytes';
midpage.style.display = 'flex';
midpage.style.width = '100%';


const mainPage = document.querySelector('.container');
mainPage.style.backgroundColor = '#F5F5F5';
mainPage.style.padding = '40px';



//nav
const navItems = Array.from(document.querySelectorAll('header nav a'));
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];


const navBar = document.querySelector('nav');
const navItemNew1 = document.createElement('a');
navItemNew1.textContent = "Blog";
navBar.appendChild(navItemNew1);

const navItemNew2 = document.createElement('a');
navItemNew2.textContent = "Our Story";
navBar.prepend(navItemNew2);


let navColor = Array.from(document.querySelectorAll('a'));
navColor.forEach( function(elem){
  elem.style.color = 'green';
});


//hero section
const headlineText = document.querySelector('h1');
headlineText.textContent = "DOM is Awesome";
const buttonText = document.querySelector('button');
buttonText.textContent = "Get Started";

//main container
let topContent1 = document.querySelector('.main-content .top-content div:nth-child(1) h4');
topContent1.textContent = siteContent["main-content"]["features-h4"];
let topContentText1 = document.querySelector('.main-content .top-content div:nth-child(1) p');
topContentText1.textContent = siteContent["main-content"]["features-content"];

let topContent2 = document.querySelector('.main-content .top-content div:nth-child(2) h4');
topContent2.textContent = siteContent["main-content"]["about-h4"];
let topContentText2 = document.querySelector('.main-content .top-content div:nth-child(2) p');
topContentText2.textContent = siteContent["main-content"]["about-content"];

//bottom container
let bottomContent1 = document.querySelector('.main-content .bottom-content div:nth-child(1) h4');
bottomContent1.textContent = siteContent["main-content"]["services-h4"];
let bottomContentText1 = document.querySelector('.main-content .bottom-content div:nth-child(1) p');
bottomContentText1.textContent = siteContent["main-content"]["services-content"];

let bottomContent2 = document.querySelector('.main-content .bottom-content div:nth-child(2) h4');
bottomContent2.textContent = siteContent["main-content"]["product-h4"];
let bottomContentText2 = document.querySelector('.main-content .bottom-content div:nth-child(2) p');
bottomContentText2.textContent = siteContent["main-content"]["product-content"];

let bottomContent3 = document.querySelector('.main-content .bottom-content div:nth-child(3) h4');
bottomContent3.textContent = siteContent["main-content"]["vision-h4"];
let bottomContentText3 = document.querySelector('.main-content .bottom-content div:nth-child(3) p');
bottomContentText3.textContent = siteContent["main-content"]["vision-content"];

// contact
let contactInfo = document.querySelector('.contact h4');
contactInfo.textContent = siteContent["contact"]["contact-h4"];

let contactInfoAddress = document.querySelector('.contact p:nth-child(2)');
contactInfoAddress.textContent = siteContent["contact"]["address"];

let contactInfoPhone = document.querySelector('.contact p:nth-child(3)');
contactInfoPhone.textContent = siteContent["contact"]["phone"];

let contactInfoEmail = document.querySelector('.contact p:nth-child(4)');
contactInfoEmail.textContent = siteContent["contact"]["email"];


// footer
let footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];
footer.style.fontSize = '20px';


// document.createElement()
// Example:
// const img = document.createElement("img");
// img.src = "https://adorbs-as-a-service.herokuapp.com/api/v1/400w/300h/";
// servicesHeader.appendChild(img)

// CSS:
//const someClass = document.querySelector('.some-class');
// someClass.style.backgroundColor = "gray";

// const mainHeader = document.querySelector('.main-header');
// mainHeader.style.color = 'red';


// const logo = document.querySelector('#logo-img');
// logo.setAttribute('src', siteContent["nav"]["img-src"])
// logo.src = "img/logo.png";
