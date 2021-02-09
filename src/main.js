
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoMaker from './dino-maker.js';

function clearFields(){
  $("#dinoNumbers").val("");
}

$(document).ready(function(){
  $("#dinoForm").submit(function(event){
    event.preventDefault();
    let numDinos = $("#dinoNumbers").val();
    clearFields();
    let promise = DinoMaker.getDino(numDinos);
    promise.then(function(response){
      const body = JSON.parse(response);
      $(".results").html(`Your dinosaur names are, ${body.join(" ,")}. Use them wisely.`);
    }, function(error){
      $(".results").html(`Your dinosaurs did not respond. Error from Jurassic Park: ${error}`);
    });
  });
});