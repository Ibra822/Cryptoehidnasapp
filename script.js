document.addEventListener('DOMContentLoaded', function() {
    var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    initializeClock('countdown', deadline);
});

function copyAddress() {
    var copyText = document.getElementById("wallet-address");
    navigator.clipboard.writeText(copyText.textContent);
    alert("Wallet address copied: " + copyText.textContent);
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function() {
        var t = getTimeRemaining(endtime);
        clock.innerHTML = 'Time left: ' + t.days + ' days ' +
                          t.hours + ' hours ' + t.minutes + ' minutes ' + t.seconds + ' seconds.';
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}
