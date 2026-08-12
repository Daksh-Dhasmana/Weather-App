async function getWeatherData(cityName, dt) 
  const apiKey = "KT7C4B64AEUX3QEARFF3S277K";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/${dt}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}
const buto=document.querySelector("#submit");
const cont=document.querySelector("#content");
function weatherEmojis(weth) {
  const we = (weth && weth.days && weth.days[0] && weth.days[0].icon) || '';
  const desc = String(we).toLowerCase();

  if (desc.includes('partly')) return '⛅';
  if (desc.includes('rain')) return '🌧️';
  if (desc.includes('snow')) return '❄️';
  if (desc.includes('cloud')) return '☁️';
  if (desc.includes('clear') || desc.includes('sunny')) return '☀️';

  return '🌤️';
}
function weatherDesc(weth) {
  const we=weth.days[0].description;
  const descr=String(we).toLowerCase();
  return descr;
}


buto.addEventListener("click",async (e)=>{
    e.preventDefault();
    const cityName=document.querySelector("#locId").value;
    const dt=document.querySelector("#dt").value;
    const weth=await getWeatherData(cityName,dt)
    const emote=weatherEmojis(weth);
    const descr=weatherDesc(weth);
    cont.append(emote);
    cont.append(descr);
    const minTemp=weth.days[0].tempmin;
    // cont.append(minTemp);
    // console.log(typeof(minTemp));
    console.log(weth);
    
})
