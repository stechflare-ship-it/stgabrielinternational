import logo from "../assets/images/gabriellogo.jpeg"

export { logo };

// SITE CONFIG - canonicalised phone formats and WhatsApp
export const SITE_CONFIG = Object.freeze({
  name : "ST. GABRIEL INTERNATIONAL SCHOOL",
  subName : "INTERNATIONAL SCHOOL",
  subNameHope: "Hope to the World",
  // Primary contact (display and tel link)
  primaryPhoneDisplay: "+254 724 694 554",
  primaryPhoneTel: "tel:+254724694554",
  // Enquiry / helpline
  enquiryPhoneDisplay: "+254 720 349 748",
  enquiryPhoneTel: "tel:+254720349748",
  // WhatsApp (opens chat)
  whatsapp: "https://wa.me/254724694554",
  email : "stgabrielmissionsecsch@gmail.com",
  announcement :"Admission Open for 2026/2027 Academic Year",

});


export const NAV_LINKS = Object.freeze([
  {name: "Home", path:"/"},
  {name: "About Us" , path: "/about"},
  {name: "Academics" , path: "/academics"},
  {name: "Student Life" , path: "/student-life"},
  {name: "Boarding" , path: "/boarding"},
  {name: "Admissions" , path: "/admissions"},
  {name: "Fees & Requirements" , path: "/fees-and-requirements"},
  {name: "Gallery" , path: "/gallery"},
  {name: "News & Events" , path: "/news"},
  {name: "Staff" , path: "/staff"},
  {name: "Downloads" , path: "/downloads"},
  {name: "Contact" , path: "/contact"},
]);

//Perfomance optimization
/*
instead of looping through all links to find one , we are finding it using the path as key for O(1) lookups 
 e.g NAV_PATH_MAP['/about'] returns {name: "About Us", path: "/abouut"}
*/

export const NAV_PATH_MAP = Object.freeze(
  Object.fromEntries(NAV_LINKS.map(link => [link.path,link]))
);


//Analytics and Tracking

// export const ANALYTICS_CONFIG =Object.freeze({
//   googleAnalyticsIUd: process.env.REACT_APP_GA_ID || 'UA-XXXXX-X',
//   facebookPixelId: process.env.REACT_APP_FB_PIXEL_ID || '',
//});


//Social Media
export const SOCIAL_MEDIA= Object.freeze({
  facebook: "https://www.facebook.com/share/1Keh3Dv62e/",
  twitter: "https://twitter.com/",
  youtube: "https://youtube.com/",
  instagram: "https://www.instagram.com/stgabrielgroupofschools",
  tiktok: "https://tiktok.com/"
});


//  Helper to get link by path
export const getLinkByPath = (path) => NAV_PATH_MAP[path] || null;

// Helper to check if path exists
export const isValidPath = (path) => !!NAV_PATH_MAP[path];
