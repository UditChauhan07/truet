let lastScrollY = window.scrollY;
let productDropdown = $(this).find("#product_dropdown");
let menuContainEl = $(this).find(".menu_container");
let flipItemEl = $(this).find(".nav_dropdown_base");
let menuWrapEl = $(this).find(".menu_wrap");
let menuBaseEl = $(this).find(".menu_base");
let menuLinkEl = $(this).find(".menu_product_items_grid > *");

gsap.registerPlugin(ScrollTrigger);

// Navigation hide on Scroll
let previousScrollPosition = window.scrollY;
const navbar = document.querySelector(".nav_wrap");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > previousScrollPosition) {
    // Scrolling down
    // navbar.classList.add("hidden");
    gsap.to(".nav_wrap", {
      y: -20,
      opacity: 0,
    });
  } else {
    // Scrolling up
    // navbar.classList.remove("hidden");
    gsap.to(".nav_wrap", {
      y: 0,
      opacity: 1,
    });
  }

  previousScrollPosition = currentScrollPosition;
});

// For Reps Tab Number Animates in
let repNumber = gsap.utils.toArray([".rep_tab_card_number_container"]);

gsap.from(repNumber, {
  opacity: 0,
  scale: 1.5,
  y: -20,
  stagger: { amount: 0.3 },
  ease: "power2.inOut",
});

// Hero Animation Timeline
let heroTL = gsap.timeline();

heroTL.from(
  ".hero_ui_rep_left, .hero_ui_rep_right, .hero_ui_rep_right_top, .hero_ui_rep_right_bottom",
  {
    opacity: 0,
    y: -20,
    duration: 1.6,
    stagger: { amount: 0.3 },
    ease: "power3.inOut",
  }
);

heroTL.from(".feature_callout_item", {
  opacity: 0,
  x: 20,
  stagger: { amount: 0.8 },
  duration: 0.4,
  ease: "power1.inOut",
});

let heroImage = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero_ui_rep_container",
    pin: false,
    start: "top 0%",
    end: "+=700",
    scrub: 2,
  },
});

heroImage.to(".hero_ui_rep_image, .rep_image_2", {
  scale: 1.1,
  y: "200px",
  duration: 5,
});

heroImage.to(
  ".hero_ui_rep_left_bg_shape",
  {
    height: 0,
    duration: 5,
  },
  "<"
);

// Spekit AI Assist Scroll into view animation

gsap.from(".section_spekit_ai_container > *", {
  opacity: 0,
  y: 20,
});

//////
// Mobile Navigation Menu Expand //
/////
// Simplified Mobile Navigation Menu Expand
const menuContainer = $(".mobile_menu_icon_container");
const menuIcon = $("#menu_icon_default");
const closeIcon = $("#menu_icon_close");
const menuBase = $(".menu_base_mobile");
const navWrapMobile = $(".menu_wrap_mobile");

let menuState = false; // false = closed, true = expanded

// GSAP timeline for menu animation
const menuExpand = gsap
  .timeline({ paused: true })
  .to(".nav_wrap_mobile", { height: "100%", duration: 0 }, "<")
  .to(".nav_wrap_links_primary", { display: "block" }, "<")
  .to(
    ".menu_base_mobile",
    {
      display: "block",
      opacity: 1,
      duration: 0,
    },
    "<"
  )
  .to(
    ".nav_wrap_mobile_link_container",
    { display: "block", height: "100%", duration: 0 },
    "<"
  );

// Button Click Event
menuContainer.click(() => {
  menuState = !menuState;

  if (menuState) {
    menuIcon.hide();
    closeIcon.show();
    menuExpand.play();
  } else {
    closeIcon.hide();
    menuIcon.show();
    menuExpand.reverse();
  }
});

// // Homepage Video Player Scroll Animation
// let videoPlayer = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#hero_section_video",
//     pin: false,
//     start: "top 0%",
//     end: "+=700",
//     scrub: 2,
//   },
// });

// videoPlayer.from(".video_container", {
//   duration: 6,
//   y: 150,
//   ease: "power1.inOut",
//   opacity: 0,
// });

// videoPlayer.to(
//   ".video_player_blur_bg",
//   {
//     width: "10%",
//     height: "10%",
//     duration: 0.8,
//     opacity: 1,
//   },
//   ">"
// );

// Centralize Content Section #1 Homepage Scroll Timeline

gsap.set([".mouse_container_1"], {
  opacity: 0,
});

let centralizeContentTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_centralize_content",
    start: "100% bottom", // 10% of trigger enters the bottom of the viewport
    end: "+=1300",
    scrub: 1,
    // toggleActions: "play none none none",
    // markers: true,
    repeat: -1,
    pin: true,
  },
});

// Animates in the main device
centralizeContentTL.from(".centralize_content_device", {
  // x: 50,
});

// Animate the mouse to move to click and then click
centralizeContentTL.to(".mouse_container_1", {
  y: -250,
  x: -210,
  opacity: 1,
});

centralizeContentTL.to(".ui_spekit_app_mouse_select_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.5,
  ease: "bounce.out",
});

centralizeContentTL.to(
  ".ui_spekit_app_mouse_select_circle_1",
  {
    opacity: 0,
    duration: 0.1,
  },
  "<"
);

// Animates and moves in the floating logos to the center
centralizeContentTL.from(".floating_sharepoint", {
  y: 250,
  x: 200,
});

centralizeContentTL.from(
  ".floating_drive",
  {
    y: 250,
  },
  "<"
);

centralizeContentTL.from(
  ".floating_powerpoint",
  {
    y: 250,
    x: -200,
  },
  "<"
);

centralizeContentTL.from(
  ".floating_word",
  {
    y: -250,
  },
  "<"
);

centralizeContentTL.from(
  ".floating_slides",
  {
    y: -250,
    x: 200,
  },
  "<"
);

centralizeContentTL.from(
  ".floating_pdf",
  {
    y: -250,
    x: -200,
  },
  "<"
);

// Animate away the mouse
centralizeContentTL.to(".mouse_container_1", {
  opacity: 0,
});

// Fade out logos and sync Animation

let targetFloatingLogos = gsap.utils.toArray([
  ".floating_sharepoint",
  ".floating_drive",
  ".floating_powerpoint",
  ".floating_word",
  ".floating_slides",
  ".floating_pdf",
  ".ui_spekit_sync",
]);

centralizeContentTL.to(targetFloatingLogos, {
  y: 20,
  opacity: 0,
  duration: 0,
});

// Trasition in the columns of topic cards
centralizeContentTL.to(".ui_spekit_app_topic_grid > *", {
  stagger: (index) => {
    return gsap.utils.random(0.1, 0.5); // Random delay between 0.1s and 0.5s
  },
  opacity: 1,
  y: 0,
});

// Transition to the new analtyics dashboard

centralizeContentTL.to(".centralize_content_device", {
  duration: 1,
  delay: 0.5,
  ease: "power2.out", // Smooth animation
});

// Animate away the topic columns
centralizeContentTL.to(
  ".ui_spekit_app_topic_grid",
  {
    y: 40,
    opacity: 0,
  },
  "<"
);

// Animate in the new analytics dashboard
centralizeContentTL.to(".ui_spekit_analytics_placeholder", {
  y: 0,
  scale: 0.9,
  opacity: 1,
});

// Automagically Push Content Animation Timeline

gsap.set(
  [
    ".ui_spekit_viewport_container_salesforce",
    ".ui_spekit_app_viewport_overlay",
    ".salesforce_viewport_overlay",
    ".chat_1",
    ".chat_2",
    ".ui_spekit_app_recommendation_sources",
    ".mouse_container_2",
    ".ui_spekit_app_recommendation_pdf_placeholder",
  ],
  {
    opacity: 0,
  }
);

let pushContentTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_push_content",
    start: "100% bottom", // 10% of trigger enters the bottom of the viewport
    end: "+=1300",
    toggleActions: "play none none none",
    scrub: 1,
    // markers: true,
    pin: true,
    repeat: -1,
  },
});

// Entire Section comes into view
pushContentTL.from(".push_content_device", {
  // x: 20,
});

// AI highlight CRO
pushContentTL.to(".gong_highlight", {
  width: 32,
});

// Animate mouse to click on chrome extension
pushContentTL.to(".mouse_container_2", {
  y: -305,
  x: 100,
  // yPercent: -155,
  // xPercent: 70,
  opacity: 1,
  ease: "power2.out",
});

pushContentTL.to(".push_content_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  opacity: 0,
});

// Slide in chrome extension for AI recommendations and show overlay on gong ui
pushContentTL.to(".ui_spekit_app_ext_rec_container", {
  x: 0,
});

pushContentTL.to(
  ".gong_viewport_overlay",
  {
    opacity: 1,
  },
  "<"
);

// Animate in the first ai chat message
pushContentTL.to(".chat_1", {
  opacity: 1,
  y: -10,
});

// Animate mouse to click on one-pager example
pushContentTL.to(".mouse_container_2", {
  x: 0,
  y: -350,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  opacity: 0,
});

// ANimate in the onepager example
pushContentTL.to(".ui_spekit_app_recommendation_pdf_placeholder", {
  opacity: 1,
  y: 10,
});

let recChatElements = gsap.utils.toArray([
  ".ui_spekit_app_recommendation_headline",
  ".chat_1",
  ".chat_2",
  ".ui_spekit_app_recommendation_pdf_placeholder",
  ".ui_spekit_app_recommendation_sources",
]);

pushContentTL.to(recChatElements, {
  y: -300,
  duration: 3,
});

// Move mouse to chat input and click
pushContentTL.to(".mouse_container_2", {
  opacity: 1,
  x: 0,
  y: -50,
});

pushContentTL.to(".mouse_container_2", {
  x: -20,
  y: -130,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  opacity: 0,
});

// Type question "How do I Sell ACME to a CRO" TO UPDATE WITH TYPING ANIMATION
pushContentTL.to(
  ".ui_spekit_search_text_askaquestion",
  {
    opacity: 0,
    autoAlpha: 0,
    display: "none",
    duration: 0,
  },
  "<"
);

pushContentTL.to(
  ".ui_spekit_search_text_howtosell",
  {
    autoAlpha: 1,
    display: "block",
    duration: 0,
  },
  "<"
);

// Move Mouse and Click enter in the chat to submit question
pushContentTL.to(".mouse_container_2", {
  x: 80,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  opacity: 0,
});

// Animate in AI answer
pushContentTL.to(".chat_2", {
  opacity: 1,
});

// Animate in Sources and move up chat

pushContentTL.to(".ui_spekit_app_recommendation_sources", {
  opacity: 1,
});

pushContentTL.to(
  recChatElements,
  {
    y: -520,
    duration: 2,
  },
  "<"
);

// Animate out the GONG ui
pushContentTL.to(".gong_viewport_overlay", {
  opacity: 0,
});

pushContentTL.to(".ui_spekit_app_ext_rec_container", {
  delay: 1.5,
  x: 250,
  duration: 1,
});

// AI highlight CRO
pushContentTL.to(".gong_highlight", {
  width: 0,
});

// Animate Click on Tab to Salesforce
pushContentTL.to(".mouse_container_2", {
  y: -550,
  x: -300,
  duration: 2,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  opacity: 0,
});

// Toggle to new salesforce tab and change gong tab to inactive
pushContentTL.to(".salesforce_tab", {
  backgroundColor: "#ffffff",
  duration: 0,
});

pushContentTL.to(".gong_tab", {
  backgroundColor: "transparent",
  duration: 0,
});

// Animate Out Gong UI
pushContentTL.to(".ui_spekit_viewport_container_gong", {
  y: 50,
  opacity: 0,
  delay: 1,
});

// Animate in Salesforce UI
pushContentTL.to(".ui_spekit_viewport_container_salesforce", {
  y: 20,
  opacity: 1,
});

// Animate mouse to click on Spek

pushContentTL.to(".mouse_container_2", {
  y: -250,
  x: -420,
  duration: 2,
  delay: 1.5,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

pushContentTL.to(".push_content_mouse_circle_1", {
  opacity: 0,
});

// Animate in CRO business template Spek PLACEHOLDER
pushContentTL.from(".ui_spekit_spek_placeholder", {
  opacity: 0,
  y: -100,
});

pushContentTL.to(
  ".salesforce_viewport_overlay",
  {
    opacity: 1,
  },
  "<"
);

// Manage Change Animation Timeline

gsap.set(
  [
    ".manage_change_overlay",
    ".manage_change_salesforce_wrapper",
    ".ui_spekit_app_create_spek_modal",
    ".ui_spekit_app_spek_notifyusers_container",
    ".mouse_container_3",
    ".ui_spekit_app_spek_ai_input_container",
    ".ui_spekit_app_ai_generated_text_headline",
    ".ui_spekit_app_ai_generated_text_list",
    // ".celebration_confetti",
    // ".ui_spekit_alert_list",
  ],
  {
    opacity: 0,
  }
);

let manageChangeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_manage_change",
    start: "100% bottom", // 10% of trigger enters the bottom of the viewport
    end: "+=1300",
    toggleActions: "play none none none",
    scrub: true,
    // markers: true,
    pin: true,
    repeat: -1,
  },
});

// Entire Section comes into view
manageChangeTL.from(".manage_change_device", {
  // x: 20,
});

// Change button background before button comes under overlay
manageChangeTL.to(
  ".ui_device_spekit_app_button_new",
  {
    padding: "4px",
    duration: 0.5,
  },
  "<"
);

// Animate overlay background in
manageChangeTL.to(
  ".manage_change_overlay",
  {
    opacity: 1,
  },
  "<"
);

// Animate in the spek
manageChangeTL.to(".ui_spekit_app_create_spek_modal", {
  y: -240,
  opacity: 1,
  delay: 0.2,
});

// Move mouse to click on AI suggestion
manageChangeTL.to(".mouse_container_3", {
  y: -300,
  x: -400,
  duration: 2,
  opacity: 1,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  opacity: 0,
});

// Animate in AI input
manageChangeTL.to(".ui_spekit_app_spek_ai_input_container", {
  opacity: 1,
  y: 10,
});

// Move and click mouse on open AI text input and animate input border
manageChangeTL.to(".mouse_container_3", {
  y: -250,
  x: -200,
  duration: 2,
  opacity: 1,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  opacity: 0,
});

manageChangeTL.to(
  ".ui_spekit_app_spek_ai_input",
  {
    border: "1px solid #653FE6",
    duration: 0,
  },
  "<"
);

// Type in content for AI assist
manageChangeTL.to(
  ".ui_spekit_app_spek_ai_input_text_1",
  {
    opacity: 0,
    autoAlpha: 0,
    display: "none",
    duration: 0,
  },
  "<"
);

manageChangeTL.to(
  ".ui_spekit_app_spek_ai_input_text_2",
  {
    autoAlpha: 1,
    display: "block",
    duration: 0,
  },
  "<"
);

// Move Mouse to click Generate
manageChangeTL.to(".mouse_container_3", {
  x: -50,
  duration: 2,
  opacity: 1,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  opacity: 0,
});

// Animate confett and fade away

// manageChangeTL.to(
//   ".celebration_confetti",
//   {
//     display: "block",
//     duration: 0,
//   },
//   "<"
// );

// manageChangeTL.to(".celebration_confetti", {
//   display: "none",
// });

// const AIanimation = lottie.loadAnimation({
//   container: document.querySelector(".celebration_confetti"),
//   renderer: "svg",
//   loop: false,
//   autoplay: false,
//   path: "https://lottie.host/ab3ee386-6509-4362-99f9-9b8215cdbcf9/pvIXtZqrkZ.json",
// });
// AIanimation.setSpeed(3);

// manageChangeTL.add(() => {
//   AIanimation.play();
// });

// if (AIanimation) {
//   console.log("animation container");
// } else {
//   console.log("animation didnt load");
// }

// Animate size of the AI icon in the title input

manageChangeTL.to(
  ".ui_spekit_app_spek_ai_title_icon",
  {
    scale: 2,
    borderWidth: 1,
    borderColor: "#653FE6",
    borderStyle: "solid",
  },
  "<"
);

manageChangeTL.to(
  ".ui_spekit_app_ai_icon",
  {
    rotationY: 180,
  },
  "<"
);
// ANimate typing of content from AI generation
manageChangeTL.to(".ui_spekit_app_ai_generated_text_headline", {
  opacity: 1,
  background: "rgba(101, 63, 230, .1)",
});

manageChangeTL.to(
  ".ui_spekit_app_ai_generated_text_headline",
  {
    background: "none",
    delay: 0.4,
  },
  "<"
);

manageChangeTL.to(
  ".ui_spekit_app_ai_generated_text_list",
  {
    opacity: 1,
    background: "rgba(101, 63, 230, .1)",
  },
  "<"
);

manageChangeTL.to(
  ".ui_spekit_app_ai_generated_text_list",
  {
    background: "none",
    delay: 0.4,
  },
  "<"
);

manageChangeTL.to(
  ".ui_spekit_app_spek_ai_input_text_container",
  {
    background: "rgba(101, 63, 230, .1)",
  },
  "<"
);

manageChangeTL.to(
  ".ui_spekit_app_spek_ai_title_text_2",
  {
    display: "block",
    opacity: 1,
    duration: 0,
  },
  "<"
);

manageChangeTL.to(
  ".ui_spekit_app_spek_ai_title_text",
  {
    display: "none",
    opacity: 0,
    duration: 0,
  },
  "<"
);

manageChangeTL.to(
  ".ui_spekit_app_spek_ai_input_text_container",
  {
    background: "rgba(101, 63, 230, 0)",
    delay: 0.3,
  },
  "<"
);

// Animate up ai generated content
manageChangeTL.to(
  ".ui_spekit_app_ai_generated_text_headline, .ui_spekit_app_ai_generated_text_list, .ui_spekit_app_spek_ai_input_container",
  {
    y: -380,
    duration: 2,
  }
);

// Move mouse to click on publish
manageChangeTL.to(
  ".mouse_container_3",
  {
    y: -420,
    duration: 2,
    opacity: 1,
  },
  "<"
);

manageChangeTL.to(".manage_change_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  opacity: 0,
});

// Animate in Publish Modal
manageChangeTL.to(".ui_spekit_app_create_spek_modal", {
  scale: 0.9,
  ease: "power1.inOut",
});

manageChangeTL.to(
  ".ui_spekit_app_spek_notifyusers_container",
  {
    scale: 1.2,
    opacity: 1,
    y: 80,
    x: 30,
    ease: "power3.inOut",
  },
  "<"
);

// Move mouse to click on creat spotlight

manageChangeTL.to(
  ".mouse_container_3",
  {
    y: -260,
    x: -100,
    duration: 2,
    opacity: 1,
  },
  "<"
);

manageChangeTL.to(".manage_change_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  opacity: 0,
});

// Animate click of create spotlight

manageChangeTL.to(".ui_spekit_app_create_spotlight_input_click", {
  background: "blue",
});

// Move mouse and click on publish and notify users
manageChangeTL.to(
  ".mouse_container_3",
  {
    y: -220,
    x: -100,
    duration: 2,
    opacity: 1,
  },
  "<"
);

manageChangeTL.to(".manage_change_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  opacity: 0,
});

// Move mouse to click browser tab
manageChangeTL.to(
  ".mouse_container_3",
  {
    y: -530,
    x: -285,
    duration: 2,
    opacity: 1,
  },
  "<"
);

manageChangeTL.to(".manage_change_mouse_circle_1", {
  width: 150,
  height: 150,
  delay: 0.3,
  duration: 0.1,
  opacity: 0.3,
});

manageChangeTL.to(".manage_change_mouse_circle_1", {
  opacity: 0,
});

// Animate out Spek creation UI

manageChangeTL.to(".ui_spekit_viewport_container_createspek", {
  opacity: 0,
});

// ANimate in Salesforce Rep UI
manageChangeTL.to(".manage_change_salesforce_wrapper", {
  opacity: 1,
});

manageChangeTL.from(
  ".ui_spekit_app_salesforce_rep",
  {
    scale: 0.3,
    y: 20,
    opacity: 0,
  },
  "<"
);

// Animate in rep notifications
manageChangeTL.from(".ui_spekit_alert_list > *", {
  scale: 1.6,
  opacity: 0,
  x: -10,
  stagger: { amount: 0.3 },
});