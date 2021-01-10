        //Write a javascript function that is called onLoad (Put this function inside <script> in the HTML document).
        //Generate a random number from 0 - 3 and store it in a variable.
        function randoBackground() {
            //Define an array of background image paths inside the function.
            var backgroundImage = new Array({
                background: "./images/polarBear.jpg",
                logo: "./images/logo-white.png",
                scroll: "./images/scroll.png",
                responsiveImage: "./images/motmot.jpg",
                responsiveScroll: "./images/scroll3.png",
                responsiveLogo: "./images/logo-white.png"
            }, {
                background: "./images/sifaka.jpg",
                logo: "./images/logo-white.png",
                scroll: "./images/scrollWhite.png",
                responsiveImage: "./images/sifaka2.jpg",
                responsiveScroll: "./images/scrollWhite.png",
                responsiveLogo: "./images/logo-white.png"
            }, {
                background: "./images/sealions.jpg",
                logo: "./images/logo.png",
                scroll: "./images/scroll.png",
                responsiveImage: "./images/penguin.jpg",
                responsiveScroll: "./images/scrollWhite.png",
                responsiveLogo: "./images/logo.png"
            }, {
                background: "./images/notreDame.jpg",
                logo: "./images/logo-white.png",
                scroll: "./images/scrollWhite.png",
                responsiveImage: "./images/polarBear2.jpg",
                responsiveScroll: "./images/scroll3.png",
                responsiveLogo: "./images/logo.png"

            });
            var randomNum = Math.floor(Math.random() * backgroundImage.length);
            //Use getElementById to set the background image value to the randomly selected image from the array.*/
            //Use that variable to select an item from an array of background image paths. (Arrays are indexed starting at zero).

            /* if the screen is smaller than 600 px, use responsiveImage*/

            if (window.innerWidth < 600) {
                document.getElementById('randomImage').style.backgroundImage = "url( " + backgroundImage[randomNum].responsiveImage + ") ";
                document.getElementById('scrolling').src = backgroundImage[randomNum].responsiveScroll;
                document.getElementById('logo').src = backgroundImage[randomNum].responsiveLogo;
                changeHamburgerColor(backgroundImage[randomNum])
            }

            /* if the screen is 600 px or larger, use background*/
            else {
                document.getElementById('randomImage').style.backgroundImage = "url( " + backgroundImage[randomNum].background + ") ";
                document.getElementById('scrolling').src = backgroundImage[randomNum].scroll;
                document.getElementById('logo').src = backgroundImage[randomNum].logo;
            }
            //console.log(document.getElementById('randomImage').style.backgroundImage);
        }

        /*when a certin photo is pulled up randomly in mobile view, change the hamburger color*/
        function changeHamburgerColor(backgroundImageItem) {
            /*when background is sifaka2.jpg, change the hamburger color to white*/
            if (backgroundImageItem.responsiveImage === "./images/sifaka2.jpg" || backgroundImageItem.responsiveImage === "./images/motmot.jpg") {
                document.getElementById('hamburger').style.color = "white";
            }
        }

        function responsiveNav() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }