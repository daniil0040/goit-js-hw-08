import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

        const onCurrentTime = function(data) {
            const currentTime = data.seconds
            localStorage.setItem("videoplayer-current-time",currentTime)
        }
player.on('timeupdate', throttle(onCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log("uncorrect time");
            break;

        default:
            console.log("error 404");
            break;
    }
});