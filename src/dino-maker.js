export default class DinoMaker {
  static getDino(number){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&words=${number}&paragraphs=1`;
      request.onload = function(){
        if (this.status === 200){
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}