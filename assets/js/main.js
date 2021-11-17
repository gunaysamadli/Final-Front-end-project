//Slider
$('.slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.single-items').slick({
    dots: true,
    arrows: false,
    infinite: false,
});

// barnd filter

const tabBrands = Array.from(document.querySelectorAll(" .tab-brand"));
const tabContents = Array.from(document.querySelectorAll(".content-brands .content-brand"));

const clearActives = function () {
    tabBrands.forEach(tabBrand => {
        tabBrand.classList.remove("active");
    });
    tabContents.forEach(tabContent => {
        tabContent.classList.remove("active");
    });
}



tabBrands.forEach(tabBrand => {
    tabBrand.onclick = function () {
        clearActives();
        const targetId = tabBrand.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        tabBrand.classList.add("active");
        targetContent.classList.add("active")
    }
})


//Sidebar


let opens = document.querySelector("header .openMenu");
opens.addEventListener("click", function (e) {
    e.preventDefault();
    let customResponsiveNav = document.querySelector(".custom-responsive-nav");
    let navbar = document.querySelector("header .custom-nav");
    if (customResponsiveNav.style.left == null || customResponsiveNav.style.height == "" || customResponsiveNav.style.height == "0px") {
        customResponsiveNav.style.height = "100%";
        customResponsiveNav.style.left = "0";
        navbar.style.display = "none";
    }


});
let element = document.querySelector(".close-btn");
element.addEventListener("click", function (e) {
    e.preventDefault();
    let customResponsiveNav = document.querySelector(".custom-responsive-nav");
    let navbar = document.querySelector("header .custom-nav");
    if (customResponsiveNav.style.height == "100%") {
        customResponsiveNav.style.height = "0";
        navbar.style.display = "block";

    }

});


// Review And Question


const tabReviews = Array.from(document.querySelectorAll(" .tab-review"));
const tabRewContents = Array.from(document.querySelectorAll(".content-reviewes .content-review"));

const clearRewActives = function () {
    tabReviews.forEach(tabREw => {
        tabREw.classList.remove("active");
    });
    tabRewContents.forEach(tabRewContent => {
        tabRewContent.classList.remove("active");
    });
}



tabReviews.forEach(tabREw => {
    tabREw.onclick = function () {
        clearRewActives();
        const targetId = tabREw.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        tabREw.classList.add("active");
        targetContent.classList.add("active")
    }
})
