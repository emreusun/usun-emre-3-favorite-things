let things = {
    tv: {
        "name":"tv",
        "Platform":"Netflix",
        "nickname":"i don't know",
        "biopic":"tv.jpg"
    },
    workout: {
        "name":"workout",
        "Platform":"Netflix",
        "nickname":"i don't know",
        "biopic":"workout.jpg"
    },
    music: {
        "name":"music",
        "Platform":"Netflix",
        "nickname":"i don't know",
        "biopic":"music.jpg"
    }
  }
  let buttons = document.querySelectorAll("button"),
     //things ={};

  function showData {
      let key = this.dataset.key;
      let headline = document.querySelector("h1");

      headline.textContent = things[key].name;  }

     // function getData() {
      //    fetch(url)
      //    .then(res =>res.json())
      //    .then(data => {
       //       things =data;

        //      buildControls(data);

         // })
     // }
//getData();
buttons.forEach(button2 => button2.addEventListener("click", showData));