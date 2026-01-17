/*------------------toggle button-----------------------*/
const navMenu=document.getElementById("nav-menu")
const navLink=document.querySelectorAll(".nav-link")
const mainmenu=document.getElementById("mainmenu")

mainmenu.addEventListener("click", ()=> {
navMenu.classList.toggle("left-[0]")
mainmenu.classList.toggle('ri-close-large-line')
})

navLink.forEach(link=>{
    link.addEventListener("click",()=>{
        navMenu.classList.toggle("left-[0]")
mainmenu.classList.toggle('ri-close-large-line')
    })
})

// Current language state
let isArabic = false;

// Dictionary for translations
const translations = {
  en: {
    home: "Home",
    products: "Products",
    about: "About us",
    contact: "Contact us",
    button: "عربي",
    dir: "ltr",
    lang: "en",
    h1:"Reliable Medical & Healthcare Supply Partner in Egypt",
    p1:"Your trusted distributor and importer of medical devices, pharmaceuticals, and healthcare supplies for hospitals, clinics, and laboratories."

  },
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    contact: "اتصل بنا",
    button: "English",
    dir: "rtl",
    lang: "ar",
    h1:"شريك موثوق لتوريد المستلزمات الطبية والرعاية الصحية في مصر",
    p1:"نحن شركة متخصصة في توزيع واستيراد الأجهزة الطبية والأدوية والمستلزمات الصحية للمستشفيات والعيادات والمراكز الطبية والمعامل."
  }
};

// Get elements
const home = document.getElementById("home");
const products = document.getElementById("products");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const langBtn = document.getElementById("langBtn");

// Toggle language function
langBtn.addEventListener("click", () => {
  isArabic = !isArabic;
  const t = isArabic ? translations.ar : translations.en;

  // Update text
  home.textContent = t.home;
  products.textContent = t.products;
  about.textContent = t.about;
  contact.textContent = t.contact;
  langBtn.textContent = t.button;
  h1.textContent = t.h1;
  p1.textContent=t.p1;


  // Update document direction & lang
  document.documentElement.dir = t.dir;
  document.documentElement.lang = t.lang;

  // Optional: handle RTL menu alignment
  const navMenu = document.getElementById("nav-menu");
  if (t.dir === "rtl") {
    navMenu.classList.add("text-right");
  } else {
    navMenu.classList.remove("text-right");
  }
});
