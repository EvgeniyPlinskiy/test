let onVisible = false;
let block_outside = document.querySelector("#block-outside");
let block_circle = document.querySelector("#block-circle");
let block_footer_link = document.querySelector("#block-footer-link");
let block_footer_text = document.querySelector("#block-footer-text");
let block_footer_text_invis = document.querySelector("#block-footer-link-invis");
let block_description_vis = document.querySelector("#block-description-vis");
let block_description_invis = document.querySelector("#block-description-invis");
let block_disabled = document.querySelector("#block-disabled");
let block_footer_disabled = document.querySelector("#block-footer-disabled");


function changeColorHover() {

  if (!onVisible) {
    block_outside.classList.add("block-outside-hover");
    block_circle.classList.add("block-circle-hover");
    block_footer_link.classList.add("block-footer-link-hover")
  } else {
    block.classList.add("block-click-hover");
    block_circle.classList.add("block-circle-click-hover");
    block_description_vis.classList.add("block-description-vis-click-hover")
    block_description_invis.classList.add("block-description-invis-click-hover")
  }
}

function rechangeColorHover() {
  if (!onVisible) {
    block_outside.classList.remove("block-outside-hover");
    block_circle.classList.remove("block-circle-hover");
    block_footer_link.classList.add("block-footer-link-hover")
    block_description_vis.classList.remove("block-description-vis-click-hover");
    block_description_invis.classList.remove("block-description-invis-click-hover");
    block_outside.classList.remove("block-outside-click-hover");
    block_circle.classList.remove("block-circle-click-hover");

  } else {
    block_outside.classList.remove("block-outside-click-hover");
    block_circle.classList.remove("block-circle-click-hover");
    block_description_vis.classList.remove("block-description-vis-click-hover");
    block_description_invis.classList.remove("block-description-invis-click-hover");
  }
}

function changeColorClick() {
  onVisible = !onVisible;
  rechangeColorHover();
  changeColorHover();
  block_outside.classList.toggle("block-outside-click");
  block_circle.classList.toggle("block-circle-click");
  block_footer_text.classList.toggle("block-footer-text-click");
  block_footer_text_invis.classList.toggle("block-footer-link-invis-click");
}

function onDisabled() {
  block_disabled.classList.toggle("block-disabled");
  block_outside.classList.toggle("block-outside-disabled");
  block_circle.classList.toggle("block-circle-disabled");
  block_footer_text.classList.toggle("block-footer-link-invis")
  block_footer_disabled.classList.toggle("block-footer-disabled");
  block_footer_disabled.classList.toggle(".block-footer-disabled-on");
  
}