$(document).ready(() => {
  console.log("This worked!");
  $.ajax({
    method: "GET",
    url: "/api/stores",
  }).then((response) => {
    console.log(response.data);
    const newDiv = $("div");
    for (let i = 0; i < response.data.length; i++) {
      const h1El = $("<h1>" + response.data[i].name + "</h1>");
      const editButtonEl = $(
        `<a href="/edit/?id=${response.data[i]._id}"><button>Edit</button></a>`
      );
      newDiv.append(h1El);
      newDiv.append(editButtonEl);
      for (let j = 0; j < response.data[i].products.length; j++) {
        newDiv.append(
          $("<p>Product: " + response.data[i].products[j].itemId.name + "</p>")
        );
        newDiv.append(
          $("<p>UPC " + response.data[i].products[j].itemId.upc + "</p>")
        );
        newDiv.append(
          $(
            "<p>Current Stock: " +
              response.data[i].products[j].currentStock +
              "</p>"
          )
        );
      }
    }
    $("#main").append(newDiv);
  });
});
// console.log("Hello world");
