// Select the hands from the DOM
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
console.log(secondHand)

const setDate = () => {
  // Get the current date and time
  const now = new Date();

  // Get the number of seconds, minutes and hours from the now object
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Convert seconds to degrees
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 60) * 360) + 180;

  // transform rotate by that amoung of degrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

// get setDate to run every one second
setInterval(setDate, 1000);
