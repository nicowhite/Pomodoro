let countdownInterval;
        const countdown = document.getElementById("countdown");
        const controlButton = document.getElementById("controlButton");

        let targetTime;
        let remainingTime;
        let isCountdownRunning = false;

        function updateCountdown() {
            const currentTime = new Date();
            remainingTime = targetTime - currentTime;

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                countdown.innerHTML = "Time's up!";
                controlButton.innerText = "Start Countdown";
                isCountdownRunning = false;
            } else {
                const minutes = String(Math.floor(remainingTime / 60000)).padStart(2, '0');
                const seconds = String(Math.floor((remainingTime % 60000) / 1000)).padStart(2, '0');
                countdown.innerHTML = `${minutes}:${seconds}`;
            }
        }

        // Initialize targetTime to the current time plus 25 minutes
        targetTime = new Date();
        targetTime.setMinutes(targetTime.getMinutes() + 25);

        function startCountdown() {
            if (!isCountdownRunning) {
                // Update the countdown every second
                countdownInterval = setInterval(updateCountdown, 1000);

                controlButton.innerText = "Pause";
                isCountdownRunning = true;
            } else {
                clearInterval(countdownInterval);
                controlButton.innerText = "Resume";
                isCountdownRunning = false;
            }
        }

        controlButton.addEventListener("click", startCountdown);

        // Call updateCountdown() to set the initial countdown when the page loads
        updateCountdown();
