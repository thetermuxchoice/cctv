$(document).ready(function () {
        let e, i, o, t, n;
        var s, r, c;
          
        let u = window.innerWidth;
        function f() {
          if ((u = window.innerWidth) >= 992) {
            function e(e) {
              const i = e.getBoundingClientRect();
              return (
                i.top >= 0 &&
                i.left >= 0 &&
                i.bottom <=
                  (window.innerHeight ||
                    document.documentElement.clientHeight) &&
                i.right <=
                  (window.innerWidth || document.documentElement.clientWidth)
              );
            }
            if ("true" === $("body").attr("has-footer")) {
              const i = document.querySelector(".cta-visible");
              let o = !1,
                t = !1,
                n = !1;
              document.addEventListener(
                "scroll",
                function () {
                  e(i)
                    ? !1 === o &&
                      ($("body").css("overflow", "hidden"),
                      setTimeout(function () {
                        $(".footer-freeze-wrap").removeClass("is--hide"),
                          $("body").css("overflow", "visible");
                      }, 1200),
                      (o = !0))
                    : !0 === o &&
                      ($(".footer-freeze-wrap").addClass("is--hide"), (o = !1));
                },
                { passive: !0 }
              );
              const s = document.querySelector(".footer-freeze");
              document.addEventListener(
                "scroll",
                function () {
                  u >= 992 &&
                    (e(s)
                      ? !1 === n &&
                        ($(".footer-show-link").click(),
                        (n = !0),
                        (t = !0),
                        $(".main-wrapper").find("a").attr("tabindex", "-1"),
                        $(".skip-link").attr("tabindex", "-1"),
                        setTimeout(function () {
                          $(".footer-focus-reset").focus(),
                            $(".footer-focus-reset").blur(),
                            $(".footer-focus-reset").attr("tabindex", "-1");
                        }, 1500))
                      : !0 === n &&
                        ($("body").css("overflow", "hidden"),
                        $(".footer-show-link").click(),
                        (n = !1),
                        (t = !1),
                        $(".main-wrapper").find("a").attr("tabindex", "0"),
                        $(".skip-link").attr("tabindex", "0"),
                        setTimeout(function () {
                          $("body").css("overflow", "visible");
                        }, 1300)));
                },
                { passive: !0 }
              ),
                $(".show-footer-focusarea").focus(function () {
                  $(".footer-show-link").click(),
                    !1 === t
                      ? ($(".footer-freeze-wrap").removeClass("is--hide"),
                        $(".main-wrapper").find("a").attr("tabindex", "-1"),
                        $(".skip-link").attr("tabindex", "-1"),
                        setTimeout(function () {
                          $(".up-link").focus(),
                            window.scrollTo(0, document.body.scrollHeight);
                        }, 1500),
                        (t = !0),
                        (n = !0),
                        (o = !0))
                      : ($(".footer-freeze-wrap").addClass("is--hide"),
                        $(".main-wrapper").find("a").attr("tabindex", "0"),
                        $(".skip-link").attr("tabindex", "0"),
                        setTimeout(function () {
                          $(".cta-link").focus();
                        }, 1200),
                        (t = !1),
                        (n = !1),
                        (o = !1));
                });
            }
          }
          $(".up-link").click(function () {
            $(".transition-trigger").click(),
              setTimeout(function () {
                $(window).scrollTop(0);
              }, 510),
              setTimeout(function () {
                window.location.reload();
              }, 1e3);
          });
        }
        $(window).resize(function () {
          (u = window.innerWidth), f();
        }),
          f();
        let h = new Date().getFullYear();
        $(".year").html(h);
        let p = !1;
        $(".nav-menu-link").on("click", function () {
          !0 === p
            ? ($("body").css("overflow", "visible"),
              $(".nav-open").addClass("clickable-off"),
              $(".scroll-bar-wrap").removeClass("clickable-off"),
              $(".main-wrapper").find("a").attr("tabindex", "0"),
              $(".footer").find("a").attr("tabindex", "0"),
              $(".skip-link").attr("tabindex", "0"),
              $(".show-footer-focusarea").attr("tabindex", "0"),
              $(".nav-link.w--current").removeClass("is--current"),
              (p = !1))
            : ($("body").css("overflow", "hidden"),
              $(".nav-open").removeClass("clickable-off"),
              $(".scroll-bar-wrap").addClass("clickable-off"),
              $(".main-wrapper").find("a").attr("tabindex", "-1"),
              $(".footer").find("a").attr("tabindex", "-1"),
              $(".skip-link").attr("tabindex", "-1"),
              $(".show-footer-focusarea").attr("tabindex", "-1"),
              setTimeout(function () {
                $(".nav-link.w--current").addClass("is--current");
              }, 800),
              (p = !0));
        }),
          $(document).on("keydown", function (e) {
            ((e = e || window.event).ctrlKey || e.metaKey) &&
              82 === (e.which || e.keyCode) &&
              (e.preventDefault(), e.stopPropagation(), $(".up-link").click());
          }),
          window.history.scrollRestoration
            ? (window.history.scrollRestoration = "manual")
            : (window.onbeforeunload = function () {
                window.scrollTo(0, 0);
              });
        let w = $(".transition-trigger");
        w.length > 0 &&
          (w.click(),
          $("body").addClass("no-scroll-transition"),
          setTimeout(() => {
            $("body").removeClass("no-scroll-transition");
          }, 1400)),
          $("a").on("click", function (e) {
            if (
              $(this).prop("hostname") === window.location.host &&
              -1 === $(this).attr("href").indexOf("#") &&
              !$(this).hasClass("no-transition") &&
              "_blank" !== $(this).attr("target") &&
              w.length > 0
            ) {
              e.preventDefault(), $("body").addClass("no-scroll-transition");
              let i = $(this).attr("href");
              w.click(),
                setTimeout(function () {
                  window.location = i;
                }, 500);
            }
          }),
          (window.onpageshow = function (e) {
            e.persisted && window.location.reload();
          }),
          setTimeout(() => {
            $(window).on("resize", function () {
              setTimeout(() => {
                $(".transition").css("display", "none");
              }, 50);
            });
          }, 1400),
          $("#skip-link").on("click keydown", function (e) {
            if ("keydown" !== e.type || 13 === e.which) {
              e.preventDefault();
              var i = $("#main");
              i.attr("tabindex", "-1"), i.focus();
            }
          }),
          $("a").focus(function () {
            if (
              $(this).hasClass("featured-collection-link") ||
              $(this).hasClass("featured-link")
            )
              $(this).parent().click();
            else if ("off" !== $(this).attr("rd-focus-animate")) {
              var e = new MouseEvent("mouseover", {
                view: window,
                bubbles: !0,
                cancelable: !0,
              });
              this.dispatchEvent(e);
            }
          }),
          $("a").focusout(function () {
            if (
              $(this).hasClass("featured-collection-link") ||
              $(this).hasClass("featured-link")
            )
              $(this).parent().click();
            else if ("off" !== $(this).attr("rd-focus-animate")) {
              var e = new MouseEvent("mouseout", {
                view: window,
                bubbles: !0,
                cancelable: !0,
              });
              this.dispatchEvent(e);
            }
          }),
          $("[glitch=click], .checkbox-button-field").keydown(function (e) {
            13 === (e.keyCode || e.which) &&
              (e.preventDefault(), $(this).click());
          }),
          $(".radio-button-field").keydown(function (e) {
            var i = $(this);
            13 === (e.keyCode || e.which) &&
              (e.preventDefault(),
              $(this).find(".radio-button").click(),
              i.find("#website-yes").length &&
                (i.prop("checked", !0),
                !1 === a &&
                  ($(".show-hide-websites").click(),
                  (a = !0),
                  $(".websites-fields")
                    .find("input, textarea")
                    .prop("required", !0),
                  $("[rd-input-required=no]").prop("required", !1))),
              i.find("#website-no").length &&
                (i.prop("checked", !0),
                !0 === a &&
                  ($(".show-hide-websites").click(),
                  (a = !1),
                  $(".websites-fields")
                    .find("input, textarea")
                    .prop("required", !1))),
              i.find("#branding-yes").length &&
                (i.prop("checked", !0),
                !1 === d &&
                  ($(".show-hide-branding").click(),
                  (d = !0),
                  $(".branding-fields")
                    .find("input, textarea")
                    .prop("required", !0),
                  $("[rd-input-required=no]").prop("required", !1))),
              i.find("#branding-no").length &&
                (i.prop("checked", !0),
                !0 === d &&
                  ($(".show-hide-branding").click(),
                  (d = !1),
                  $(".branding-fields")
                    .find("input, textarea")
                    .prop("required", !1))),
              i.find("#social-yes").length &&
                (i.prop("checked", !0),
                !1 === l &&
                  ($(".show-hide-social").click(),
                  (l = !0),
                  $(".social-fields")
                    .find("input, textarea")
                    .prop("required", !0),
                  $("[rd-input-required=no]").prop("required", !1))),
              i.find("#social-no").length &&
                (i.prop("checked", !0),
                !0 === l &&
                  ($(".show-hide-social").click(),
                  (l = !1),
                  $(".social-fields")
                    .find("input, textarea")
                    .prop("required", !1))));
          }),
          $(
            "[fs-cc-checkbox=marketing], [fs-cc-checkbox=personalization], [fs-cc-checkbox=analytics]"
          ).keydown(function (e) {
            13 === (e.keyCode || e.which) &&
              (e.preventDefault(), $(this).parent().click());
          }),
          $(".fs-cc-prefs_checkbox-field").removeClass("is--focused"),
          $(
            "[fs-cc-checkbox=marketing], [fs-cc-checkbox=personalization], [fs-cc-checkbox=analytics]"
          ).focus(function () {
            $(this).parent().addClass("is--focused");
          }),
          $(
            "[fs-cc-checkbox=marketing], [fs-cc-checkbox=personalization], [fs-cc-checkbox=analytics]"
          ).focusout(function () {
            $(this).parent().removeClass("is--focused");
          });
      });