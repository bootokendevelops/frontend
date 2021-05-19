import {useEffect, useState} from "react";

export default function useCountDown() {
    const [countData, setCountData] = useState({day:0, hour:0, minutes:0, second:0});
    useEffect(() => {
        let second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        let birthday = "May 30, 2021 00:00:00",
            countDown = new Date(birthday).getTime(),
            x = setInterval(function() {

                let now = new Date().getTime(),
                    distance = countDown - now;

                // eslint-disable-next-line no-unused-expressions
                    day = Math.floor(distance / (day)),
                    hour = Math.floor((distance % (day)) / (hour)),
                    minute = Math.floor((distance % (hour)) / (minute)),
                    second = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                    let headline = document.getElementById("headline"),
                        countdown = document.getElementById("countdown"),
                        content = document.getElementById("content");

                    headline.innerText = "It's Finished!";
                    countdown.style.display = "none";
                    content.style.display = "block";

                    clearInterval(x);
                }
                //seconds
            }, 0)
        setCountData({day: day, hour: hour, minutes: minute, second: second});
    }, []);
    return countData;
}
