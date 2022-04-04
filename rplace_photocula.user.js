// ==UserScript==
// @name         Dynamic r/place Overlay Script Photocula
// @namespace    https://www.reddit.com/r/place/
// @version      0.6
// @description  try to take over r/place!
// @author       OnyX_, edited by: TheMightyPleb#2799
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://github.com/Orekk12/rplace_overlay/raw/main/chicks%20of%20vengeance.png
// @grant        none
// ==/UserScript==

//This script adds an overlay for the given image url on the given image coordinates with a configurable slide for opacity.

//Example image links:
//CHAD Greek Turk: https://github.com/Orekk12/rplace_overlay/raw/main/greekgod_pperfect2.jpg , 1201,701
//Fil Necati: https://github.com/Orekk12/rplace_overlay/raw/main/fil-necati.png , 1599,330
//CHAD Turk: https://github.com/Orekk12/rplace_overlay/raw/main/pperfectzade.png
//https://github.com/Orekk12/rplace_overlay/blob/main/player4.png, 12,8
//Images should be pixel perfect for r/place

//var img_url = "https://github.com/Orekk12/rplace_overlay/raw/main/greekgod_pperfect2.jpg";
//var x_coord = 1201;//tr: placedeki resmin en sol üst koordinatını giriniz ve resim linkini yukarıya giriniz.
//var y_coord = 701;//default hali: "chad greek turk" koordinatları

//Enter the image url here then Enter x and y coordinates on the place
var img_url = "https://github.com/Orekk12/rplace_overlay/raw/main/pixelart/photcula1.png";
var x_coord = 1024;//tr: placedeki resmin en sol üst koordinatını giriniz ve resim linkini yukarıya giriniz.
var y_coord = 1742;//default hali: "chad greek turk" koordinatları

var img_height = 100;//default values, it will update itself with given image link above
var img_width = 92;

var img = new Image();
    img.onload = function() {
        img_height = this.height;
        img_width = this.width;
        //alert( this.width +" "+ this.height );
    };
    img.src = img_url;

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(
        (function () {
            const div = document.createElement("div");
            div.id = "Overlay";
            div.style = "height:" + (img_height*50) + "px; width:" + (img_width*50) + "px; position: absolute; inset: 0px; transform: translateX(" + (x_coord*50) + "px) translateY(" + (y_coord*50)
                + "px); background-size: cover; image-rendering: pixelated; background-image: url(" + img_url +"); opacity: 0.3;";
            return div;
        })())

        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByClassName("bottom-controls")[0].appendChild(
        (function () {
            const slider = document.createElement("div");
            slider.style = "height: 36px; width: 200px; position: absolute;  right: 100px; top: 0;  background-color: #FFF;pointer-events: all;border-radius: 26px;";
            const input = document.createElement("input");
            input.type = 'range';
            input.min = '0';
            input.max = '1';
            input.step = '0.1';
            input.value = '0.3';
            input.style = "margin: 10px;left: 0;right: 0;top: 0;bottom: 0;box-sizing: border-box;position: absolute;";
            input.addEventListener('input', (event) => {
                document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].querySelector("#Overlay").style.opacity = event.currentTarget.value;
            });
            slider.appendChild(input);
            return slider;
        })()
        );

    }, false);
}
