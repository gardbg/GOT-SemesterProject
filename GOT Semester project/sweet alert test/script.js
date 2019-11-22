document.querySelector(".first").addEventListener("click", function() {
    swal({
      title: "Show Two Buttons Inside the Alert",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#00ff99",
      cancelButtonColor: "#ff0099"
    });
  });
  
  document.querySelector(".second").addEventListener("click", function() {
    swal({
      title: "Are you sure about deleting this file?",
      type: "info",
      showCancelButton: true,
      confirmButtonText: "Delete It",
      confirmButtonColor: "#ff0055",
      cancelButtonColor: "#999999",
      reverseButtons: true,
      focusConfirm: false,
      focusCancel: true
    });
  });
  
  document.querySelector(".third").addEventListener("click", function() {
    swal({
      title: "Profile Picture",
      text: "Do you want to make the above image your profile picture?",
      imageUrl: "https://images3.imgbox.com/4f/e6/wOhuryw6_o.jpg",
      imageWidth: 550,
      imageHeight: 225,
      imageAlt: "Eagle Image",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "#00ff55",
      cancelButtonColor: "#999999",
      reverseButtons: true,
    });
  });
  
  document.querySelector(".fourth").addEventListener("click", function() {
    swal({
      title: "Alert Set on Timer",
      text: "This alert will disappear after 3 seconds.",
      position: "bottom",
      backdrop: "linear-gradient(yellow, orange)",
      background: "white",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCancelButton: false,
      timer: 3000
    });
  });