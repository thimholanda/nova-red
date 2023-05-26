import $ from "jquery";

import "./assets/sass/index.scss";
import "@fortawesome/fontawesome-free/js/all";
import "bootstrap";
import "jquery-mask-plugin";

$(document).on("click", "a[href='#']", (e) => {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

const forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();

        $.ajax;
        $(".nr-form-fields").fadeOut("fast", () => {
          $(".nr-form-response").fadeIn("fast");
        });
      }

      form.classList.add("was-validated");
    },
    false
  );
});

$(".mask-telefone")
  .mask("(00) 0000-00009")
  .focusout(function (event) {
    var target, phone, element;
    target = event.currentTarget ? event.currentTarget : event.srcElement;
    phone = target.value.replace(/\D/g, "");
    element = $(target);
    element.unmask();
    console.log(phone.length);
    if (phone.length > 10) {
      element.mask("(00) 00000-0009");
    } else if (phone.length == 10) {
      element.mask("(00) 0000-00009");
    } else {
      element.val("");
      element.mask("(00) 00000-0009");
    }
  });
