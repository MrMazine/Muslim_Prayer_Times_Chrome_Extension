

async function fetchData_ip() {
    // Get Ip of Client :
    const result = await fetch ("https://api.db-ip.com/v2/free/self");
    const Data = await result.json();
    // Get prayer times for location of ip client :
    const res = await fetch ("https://api.pray.zone/v2/times/today.json?ip="+Data.ipAddress);
    const record = await res.json();
    // Fill Table times From Data Json :
    document.getElementById("FAJR").innerHTML=record.results.datetime[0].times.Fajr;
    document.getElementById("DHUHR").innerHTML=record.results.datetime[0].times.Dhuhr;
    document.getElementById("ASR").innerHTML=record.results.datetime[0].times.Asr;
    document.getElementById("MAGHRIB").innerHTML=record.results.datetime[0].times.Maghrib;
    document.getElementById("ISHA").innerHTML=record.results.datetime[0].times.Isha;
    document.getElementById("Location").innerHTML=record.results.location.city +", " + record.results.location.country;
    document.getElementById("date").innerHTML=record.results.datetime[0].date.gregorian;
}
fetchData_ip();
