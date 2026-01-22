/*------------------toggle button-----------------------*/
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const mainmenu = document.getElementById("mainmenu")

mainmenu.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]")
  mainmenu.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    mainmenu.classList.toggle('ri-close-large-line')
  })
})

// Current language state
let isArabic = false;

// Dictionary for translations
const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    about: "About us",
    contact: "Contact us",
    button: "عربي",
    dir: "ltr",
    lang: "en",
    
    // Hero Section
    h1: "Reliable Medical & Healthcare Supply Partner in Egypt",
    p1: "Your trusted distributor and importer of medical devices, pharmaceuticals, and healthcare supplies for hospitals, clinics, and laboratories.",
    
    // Who We Are Section
    whoWeAreTitle: "Who We Are",
    whoWeAreText: "is a professional medical supplies distributor and importer serving the Egyptian healthcare sector. We provide high-quality medical devices, disposables, pharmaceuticals, herbal and cosmetic healthcare products, sourced from trusted international manufacturers and compliant with Egyptian regulations.",
    
    // Products Section
    ourProductsTitle: "Our Products",
    ourProductsSubtitle: "Explore our comprehensive range of medical supplies and healthcare products",
    allProducts: "All Products",
    disposables: "Disposables",
    pharmaceuticals: "Pharmaceuticals",
    herbal: "Herbal",
    cosmetic: "Cosmetic",
    showAllProducts: "Show All Products",
    
    // Call to Action
    callToActionTitle: "Call To Action",
    callToActionText: "Looking for a reliable medical supply partner in Egypt? Contact Novo Medical today and let us support your healthcare facility.",
    contactUsBtn: "Contact Us",
    ourProductsBtn: "Our Products",
    
    // Why Choose Section
    whyChooseTitle: "Why Choose Novo Medical",
    whyPoint1Title: "Trusted Distributor & Importer",
    whyPoint1Text: "Reliable source for certified medical and healthcare products.",
    whyPoint2Title: "International Quality Standards",
    whyPoint2Text: "All products meet global safety and performance standards.",
    whyPoint3Title: "MOH Compliance",
    whyPoint3Text: "Fully compliant with Egyptian Ministry of Health regulations.",
    whyPoint4Title: "Fast & Reliable Logistics",
    whyPoint4Text: "Efficient supply chain ensuring on-time delivery.",
    whyPoint5Title: "Long-term Partnerships",
    whyPoint5Text: "Building trusted relationships with hospitals and clinics.",
    
    // Footer
    footerAbout: "Your trusted partner in medical supplies and healthcare solutions across Egypt.",
    quickLinks: "Quick Links",
    contactUsTitle: "Contact Us",
    followUs: "Follow Us",
    followUsText: "Stay connected for the latest updates and products",
    email: "Email:",
    phone: "Phone:",
    address: "Address:",
    addressText: "Cairo, Egypt",
    copyright: "© 2024 Novo Medical. All rights reserved. | Professional Medical Supplies Distribution"
  },
  
  ar: {
    // Navigation
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    contact: "اتصل بنا",
    button: "English",
    dir: "rtl",
    lang: "ar",
    
    // Hero Section
    h1: "شريك موثوق لتوريد المستلزمات الطبية والرعاية الصحية في مصر",
    p1: "نحن شركة متخصصة في توزيع واستيراد الأجهزة الطبية والأدوية والمستلزمات الصحية للمستشفيات والعيادات والمراكز الطبية والمعامل.",
    
    // Who We Are Section
    whoWeAreTitle: "من نحن",
    whoWeAreText: "هي شركة متخصصة في توزيع واستيراد المستلزمات الطبية، وتخدم القطاع الصحي المصري. نوفر أجهزة طبية عالية الجودة، ومستلزمات طبية، وأدوية، ومنتجات عشبية وتجميلية صحية، من مصنعين دوليين موثوقين ومتوافقة مع اللوائح المصرية.",
    
    // Products Section
    ourProductsTitle: "منتجاتنا",
    ourProductsSubtitle: "استكشف مجموعتنا الشاملة من المستلزمات الطبية ومنتجات الرعاية الصحية",
    allProducts: "جميع المنتجات",
    disposables: "المستلزمات الطبية",
    pharmaceuticals: "الأدوية",
    herbal: "المنتجات العشبية",
    cosmetic: "مستحضرات التجميل",
    showAllProducts: "عرض جميع المنتجات",
    
    // Call to Action
    callToActionTitle: "دعوة للتواصل",
    callToActionText: "هل تبحث عن شريك موثوق لتوريد المستلزمات الطبية في مصر؟ اتصل بشركة نوفو ميديكال اليوم ودعنا ندعم منشأتك الصحية.",
    contactUsBtn: "اتصل بنا",
    ourProductsBtn: "منتجاتنا",
    
    // Why Choose Section
    whyChooseTitle: "لماذا تختار نوفو ميديكال",
    whyPoint1Title: "موزع ومستورد معتمد",
    whyPoint1Text: "مصدر موثوق للمنتجات الطبية والصحية المعتمدة.",
    whyPoint2Title: "معايير جودة عالمية",
    whyPoint2Text: "جميع المنتجات تلبي معايير السلامة والأداء العالمية.",
    whyPoint3Title: "الالتزام بلوائح وزارة الصحة",
    whyPoint3Text: "متوافقة تماماً مع لوائح وزارة الصحة المصرية.",
    whyPoint4Title: "خدمات لوجستية سريعة وموثوقة",
    whyPoint4Text: "سلسلة توريد فعالة تضمن التسليم في الوقت المحدد.",
    whyPoint5Title: "شراكات طويلة الأمد",
    whyPoint5Text: "بناء علاقات موثوقة مع المستشفيات والعيادات.",
    
    // Footer
    footerAbout: "شريكك الموثوق في توريد المستلزمات الطبية وحلول الرعاية الصحية في جميع أنحاء مصر.",
    quickLinks: "روابط سريعة",
    contactUsTitle: "اتصل بنا",
    followUs: "تابعنا",
    followUsText: "ابق على اتصال للحصول على أحدث التحديثات والمنتجات",
    email: "البريد الإلكتروني:",
    phone: "الهاتف:",
    address: "العنوان:",
    addressText: "القاهرة، مصر",
    copyright: "© 2024 نوفو ميديكال. جميع الحقوق محفوظة. | التوزيع المهني للمستلزمات الطبية"
  }
};

// Get all elements that need translation
const elements = {
  // Navigation
  home: document.getElementById("home"),
  products: document.getElementById("products"),
  about: document.getElementById("about"),
  contact: document.getElementById("contact"),
  langBtn: document.getElementById("langBtn"),
  
  // Hero Section
  h1: document.getElementById("h1"),
  p1: document.getElementById("p1"),
  
  // Who We Are Section
  whoWeAreTitle: document.getElementById("who are we title"),
  whoWeAreText: document.getElementById("who are we p"),
  
  // Products Section
  ourProductsTitle: document.querySelector('#products h2'),
  ourProductsSubtitle: document.querySelector('#products p.text-slate-600'),
  
  // Call to Action
  callToActionTitle: document.getElementById("call to action"),
  callToActionText: document.getElementById("pcall"),
  contactUsBtn: document.querySelector('a[href="#contact"]'),
  ourProductsBtn: document.querySelector('a[href="#products"]'),
  
  // Why Choose Section
  whyChooseTitle: document.querySelector('section.bg-white h2'),
  
  // Footer
  footerAbout: document.querySelector('footer p.leading-relaxed'),
  quickLinks: document.querySelector('footer h4:nth-of-type(1)'),
  contactUsTitle: document.querySelector('footer h4:nth-of-type(2)'),
  followUs: document.querySelector('footer h4:nth-of-type(3)'),
  followUsText: document.querySelector('footer p.text-sm'),
  copyright: document.querySelector('footer p.text-teal-200')
};

// Get Why Choose section items
const whyChooseItems = document.querySelectorAll('section.bg-white .grid > div');

// Toggle language function
langBtn.addEventListener("click", () => {
  isArabic = !isArabic;
  const t = isArabic ? translations.ar : translations.en;

  // Update navigation
  elements.home.textContent = t.home;
  elements.products.textContent = t.products;
  elements.about.textContent = t.about;
  elements.contact.textContent = t.contact;
  elements.langBtn.textContent = t.button;
  
  // Update hero section
  elements.h1.textContent = t.h1;
  elements.p1.textContent = t.p1;
  
  // Update Who We Are section
  if (elements.whoWeAreTitle) {
    elements.whoWeAreTitle.textContent = t.whoWeAreTitle;
  }
  if (elements.whoWeAreText) {
    // Keep "Novo Medical" in bold
    elements.whoWeAreText.innerHTML = `
      <span class="text-teal-800 font-bold">Novo Medical</span> ${t.whoWeAreText}
    `;
  }
  
  // Update Products section
  if (elements.ourProductsTitle) {
    elements.ourProductsTitle.textContent = t.ourProductsTitle;
  }
  if (elements.ourProductsSubtitle) {
    elements.ourProductsSubtitle.textContent = t.ourProductsSubtitle;
  }
  
  // Update filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length >= 5) {
    filterButtons[0].textContent = t.allProducts;
    filterButtons[1].textContent = t.disposables;
    filterButtons[2].textContent = t.pharmaceuticals;
    filterButtons[3].textContent = t.herbal;
    filterButtons[4].textContent = t.cosmetic;
  }
  
  // Update show more button
  const showMoreBtn = document.getElementById('showMoreBtn');
  
    showMoreBtn.textContent = t.showAllProducts;
  
  
  // Update Call to Action section
  if (elements.callToActionTitle) {
    elements.callToActionTitle.textContent = t.callToActionTitle;
  }
  if (elements.callToActionText) {
    elements.callToActionText.textContent = t.callToActionText;
  }
  if (elements.contactUsBtn) {
    elements.contactUsBtn.textContent = t.contactUsBtn;
  }
  if (elements.ourProductsBtn) {
    elements.ourProductsBtn.textContent = t.ourProductsBtn;
  }
  
  // Update Why Choose section
  if (elements.whyChooseTitle) {
    elements.whyChooseTitle.textContent = t.whyChooseTitle;
  }
  
  // Update Why Choose items
  if (whyChooseItems.length >= 5) {
    whyChooseItems[0].querySelector('h3').textContent = t.whyPoint1Title;
    whyChooseItems[0].querySelector('p').textContent = t.whyPoint1Text;
    
    whyChooseItems[1].querySelector('h3').textContent = t.whyPoint2Title;
    whyChooseItems[1].querySelector('p').textContent = t.whyPoint2Text;
    
    whyChooseItems[2].querySelector('h3').textContent = t.whyPoint3Title;
    whyChooseItems[2].querySelector('p').textContent = t.whyPoint3Text;
    
    whyChooseItems[3].querySelector('h3').textContent = t.whyPoint4Title;
    whyChooseItems[3].querySelector('p').textContent = t.whyPoint4Text;
    
    whyChooseItems[4].querySelector('h3').textContent = t.whyPoint5Title;
    whyChooseItems[4].querySelector('p').textContent = t.whyPoint5Text;
  }
  
  // Update Footer
  if (elements.footerAbout) {
    elements.footerAbout.textContent = t.footerAbout;
  }
  if (elements.quickLinks) {
    elements.quickLinks.textContent = t.quickLinks;
  }
  if (elements.contactUsTitle) {
    elements.contactUsTitle.textContent = t.contactUsTitle;
  }
  if (elements.followUs) {
    elements.followUs.textContent = t.followUs;
  }
  if (elements.followUsText) {
    elements.followUsText.textContent = t.followUsText;
  }
  if (elements.copyright) {
    elements.copyright.textContent = t.copyright;
  }
  
  // Update footer contact labels
  const footerLabels = document.querySelectorAll('footer .text-teal-100');
  if (footerLabels.length >= 3) {
    footerLabels[0].textContent = t.email;
    footerLabels[1].textContent = t.phone;
    footerLabels[2].textContent = t.address;
  }

  // Update document direction & lang
  document.documentElement.dir = t.dir;
  document.documentElement.lang = t.lang;

  // Handle RTL menu alignment
  const navMenu = document.getElementById("nav-menu");
  if (t.dir === "rtl") {
    navMenu.classList.add("text-right");
  } else {
    navMenu.classList.remove("text-right");
  }
});