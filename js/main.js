(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Screenshot carousel
  $(".screenshot-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    dots: true,
    items: 1,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// Definisikan opsi Darkmode
// const options = {
//   bottom: "64px", // default: '32px'
//   right: "unset", // default: '32px'
//   left: "32px", // default: 'unset'
//   time: "0.7s", // default: '0.3s'
//   mixColor: "#fff", // default: '#fff'
//   backgroundColor: "#fff", // default: '#fff'
//   buttonColorDark: "#100f2c", // default: '#100f2c'
//   buttonColorLight: "#fff", // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: "🌓", // default: ''
// };

const options = {
  bottom: "64px",
  right: "unset",
  left: "32px",
  time: "0.7s",
  mixColor: "#fff",
  backgroundColor: "#fff",
  buttonColorDark: "#100f2c",
  buttonColorLight: "#fff",
  saveInCookies: false,
  label: "🌓",
};

const darkmode = new Darkmode(options); // Inisialisasi Darkmode dengan opsi
document.addEventListener("DOMContentLoaded", () => {
  darkmode.showWidget(); // Tampilkan widget Darkmode setelah DOM dimuat
});
// Periksa apakah darkmode.toggleButton sudah tersedia sebelum menambahkan event listener
if (darkmode.toggleButton) {
  darkmode.toggleButton.addEventListener('click', (e) => {
    const isDarkMode = darkmode.isActivated(); // Periksa status tema (gelap atau terang)
    localStorage.setItem('preferredTheme', isDarkMode ? 'dark' : 'light'); // Simpan preferensi tema
  });
}



