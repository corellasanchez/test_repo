class testService {
  constructor(serviceUrl) {
    this.url = serviceUrl;
  }

  get() {
    fetch(this.url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        document.getElementById("id").innerHTML = myJson.id;
        console.log(myJson);
      });
  }

}

var service = new testService('https://jsonplaceholder.typicode.com/todos/2');

