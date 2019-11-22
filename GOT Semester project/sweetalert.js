document.querySelector(".third").addEventListener("click", function() {
    swal({
      title: "Are you sure?",
      imageUrl: "images/starkbackground.png",
      imageWidth: 550,
      imageHeight: 225,
      imageAlt: "Eagle Image",
      confirmButtonText: "Lock in",
      confirmButtonColor: "#43464B",
      reverseButtons: true,
      background: "#000",
      
    });
  });