import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

// commonjs
const flatpickr = require("flatpickr");
let timerId = null;

const datetime= document.querySelector("#datetime-picker");
const buttonstar = document.querySelector("[data-start]");
const day =document.querySelector("[data-days]");
const hour =document.querySelector("[data-hours]");
const minute =document.querySelector("[data-minutes]");
const second =document.querySelector("[data-seconds]");



buttonstar.disabled =true;


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}




function count(){
  Notiflix.Notify.info('Presiona Escape para resetear');
  // muestra al usuario el tiempo restante 
  
  timerId = setInterval(() => {
    const dif =  new Date(datetime.value) - new Date(); // hace la difencia de dias
    console.log(dif);
    const { days, hours, minutes, seconds } = convertMs(dif); // convierte la diferencia en dias, horas, minu, seco 
    console.log(days , hours, minutes, seconds);

    if (seconds == 0){
      clearInterval(timerId);
      /* datetime.innerText = new Date; */
    }

    day.innerText = addLeadingZero(days);
    hour.innerText = addLeadingZero(hours);
    minute.innerText =addLeadingZero(minutes);
    second.innerHTML= addLeadingZero(seconds);
    
    // si oprimo escape se para. 
   

  }, 1000);

  // 
}



function addLeadingZero(value){
  return value <= 9 ? `0${value}` :value;
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
     
      if(selectedDates[0] > new Date()){
        /* let resul = selectedDates[0]- new Date(); */
       /*  console.log(selectedDates[0]- new Date()); */
        buttonstar.disabled=false;
        
      }else{
        console.log("no entro");
        Notiflix.Notify.failure('Please choose a date in the future');
        
      }
    },
    
  };


flatpickr(datetime, options);


buttonstar.addEventListener("click", count);
document.addEventListener("keydown", evet =>{
  if(evet.key == "Escape"){
    clearInterval(timerId);
    console.log("paro ? ");
    datetime.innerHTML = new Date();
    day.innerText =0;
    hour.innerText = 0;
    minute.innerText =0;
    second.innerHTML= 0;
  }
})

