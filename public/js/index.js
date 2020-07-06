/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : RYAN
Author          : mital_04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - mital_04
========================================================================*/

(function ($) {
  'use strict';
  var RYAN = {};

  /*--------------------
    * Pre Load
  ----------------------*/
  RYAN.WebLoad = function () {
    document.getElementById('loading').style.display = 'none';
  };

  /*--------------------
      * Header Class
  ----------------------*/
  RYAN.HeaderSticky = function () {
    $('.navbar-toggler').on('click', function (a) {
      a.preventDefault(), $('.navbar').addClass('fixed-header');
    });
  };

  /*--------------------
      * Menu Close
  ----------------------*/
  RYAN.MenuClose = function () {
    $('.navbar-nav .nav-link').on('click', function () {
      var toggle = $('.navbar-toggler').is(':visible');
      if (toggle) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  };

  /*--------------------
      * Smooth Scroll
  ----------------------*/
  RYAN.HeaderScroll = function () {
    $('a[href*="#"]:not([href="#"])').on('click', function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top - 65,
            },
            1000
          );
          return false;
        }
      }
    });
  };

  /*--------------------
      * Header Fixed
  ----------------------*/
  RYAN.HeaderFixed = function () {
    if ($(window).scrollTop() >= 60) {
      $('.navbar').addClass('fixed-header');
    } else {
      $('.navbar').removeClass('fixed-header');
    }
  };

  /*--------------------
      * Progress Bar 
  ----------------------*/
  RYAN.ProgressBar = function () {
    $('.progress .progress-bar').each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr('aria-valuenow') + '%';
      if (bottom_window > bottom_object) {
        $(this).css({
          width: progressWidth,
        });
      }
    });
  };

  // Window on Load
  $(window).on('load', function () {
    RYAN.WebLoad();
  });

  $(document).on('ready', function () {
    RYAN.MasoNry(),
      RYAN.ClientSlider(),
      RYAN.MenuClose(),
      RYAN.BlogSlider(),
      RYAN.Counter(),
      RYAN.ProgressBar(),
      RYAN.HeaderScroll(),
      RYAN.PopupVideo(),
      RYAN.LightboxGallery(),
      RYAN.HeaderSticky();
  });

  $(window).on('scroll', function () {
    RYAN.Counter(), RYAN.ProgressBar(), RYAN.HeaderFixed();
  });
})(jQuery);
