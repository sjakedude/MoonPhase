function hello() {
    const httpGetRequest = new XMLHttpRequest();
    httpGetRequest.open("GET", "https://weather.visualcrossing.com/VisualCrossingWebServices/" +
        "rest/services/weatherdata/forecast?aggregateHours=24&includeAstronomy=true&" +
        "combinationMethod=aggregate&contentType=csv&unitGroup=us&locationMode=single&" +
        "key=1PYNQ6AWUDJE9AFERDCHJHSXK&locations=Columbia%2C%20CT%2C%20US", true);
    httpGetRequest.send();
    httpGetRequest.onreadystatechange = function () {
        if (httpGetRequest.readyState === 4 && httpGetRequest.status === 200) {

            // Adding the form moon_phase_num to the put response
            const response = httpGetRequest.responseText;
            const moon_phase_num = response.split("\n")[1].replaceAll("\"", "").replaceAll(" ", "").split(",")[29];

            var moon_phase = '';
            if (moon_phase_num == 1) {
                moon_phase = 'New Moon';
            }
            else if (0 < moon_phase_num < 0.25) {
                moon_phase = 'Waxing Crescent';
            }
            else if (moon_phase_num == 0.25) {
                moon_phase = 'First Quarter';
            }
            else if (0.25 < moon_phase_num < 0.5) {
                moon_phase = 'Waxing Gibbous';
            }
            else if (moon_phase_num == 0.5) {
                moon_phase = 'Full Moon';
            }
            else if (0.5 < moon_phase_num < 0.75) {
                moon_phase = 'Waning Gibbous';
            }
            else if (moon_phase_num == 0.75) {
                moon_phase = 'Last Quarter';
            }
            else if (0.75 < moon_phase_num < 1) {
                moon_phase = 'Waning Crescent';
            }
            else {
                moon_phase = "Error";
            }
            console.log(moon_phase);
        }
    }
}
