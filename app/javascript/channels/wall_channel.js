import consumer from "./consumer"

consumer.subscriptions.create("WallChannel", {
  connected() {
    console.log("Connected to WallChannel");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    let wall = document.getElementById('wall');

    wall.innerHTML +=
      "<h2>" + data.title + "</h2>";
  
    wall.innerHTML +=
      "<p>" + data.content + "</p>"; 
  }

});
