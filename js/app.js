$(document).ready(() => {
  $(".back-arrow").click(() => {
    if ($(window).width() > 920) {
    } else {
      $(".personal-chat--container").css("display", "none");
      $(".all-chat").css("display", "block");
    }
  });

  //single-chat
  $(".single-chat").click(() => {
    if ($(window).width() > 920) {
      $(".personal-chat--container").css("display", "block");
      $(".profile-view").css("display", "none");
    } else {
      $(".personal-chat--container").css("display", "block");
      $(".all-chat").css("display", "none");
    }
  });

  //   profile view
  $(".profile--back-arrow").click(() => {
    $(".personal-chat--container").css("display", "none");
    $(".profile-view").css("display", "block");
  });

  $(".header--top--text").click(() => {
    if ($(window).width() > 920) {
      $(".personal-chat--container").css("display", "none");
      $(".profile-view").css("display", "block");
    } else {
      $(".personal-chat--container").css("display", "none");
      $(".profile-view").css("display", "block");
      $(".all-chat").css("display", "none");
    }
  });
});
