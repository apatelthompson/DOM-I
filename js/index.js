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


// const nav = document.createElement("nav");
// nav.style.color = 'gray';
// const navtext = document.createTextNode("Services");
// nav.appendChild(navtext);
// document.getElementById("nav").appendChild(node);



const headlineText = document.querySelector('h1');
headlineText.textContent = "DOM is Awesome";

const buttonText = document.querySelector('button');
buttonText.textContent = "Get Started";

const buttontext = document.createTextNode("Get Started");
button.appendChild(buttontext);
document.getElementByTagName("button").appendChild(node);






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
