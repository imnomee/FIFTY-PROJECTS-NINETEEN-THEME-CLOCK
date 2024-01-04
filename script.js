const hourEl = document.querySelector('.needle.hour');
const minuteEl = document.querySelector('.needle.minute');
const secondsEl = document.querySelector('.needle.seconds');

const timeDig = document.querySelector('.time');
const dateDig = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
});

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function setTime() {
    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        hours,
        0,
        11,
        0,
        360
    )}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        59,
        0,
        360
    )}deg)`;
    secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        59,
        0,
        360
    )}deg)`;
    timeDig.innerHTML = `${hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
    dateDig.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;
}

setInterval(setTime, 1000);
setTime();
