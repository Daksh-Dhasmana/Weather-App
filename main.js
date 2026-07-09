/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nasync function getWeatherData(cityName, dt) {\n  // 1. Define your API URL (usually with your API key and search parameters)\n  const apiKey = \"KT7C4B64AEUX3QEARFF3S277K\";\n  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/${dt}?key=${apiKey}`;\n\n  try {\n    // 2. Await the initial network request\n    const response = await fetch(url);\n    // 4. Await parsing the response body into usable JSON data\n    const data = await response.json();\n    \n    // 5. Return the final data object\n    return data;\n\n  } catch (error) {\n    // Handle network errors, typos in URL, or issues thrown above\n    console.error(\"Failed to fetch weather data:\", error);\n  }\n}\nconst buto=document.querySelector(\"#submit\");\nconst cont=document.querySelector(\"#content\");\nfunction weatherEmojis(weth) {\n  const we = (weth && weth.days && weth.days[0] && weth.days[0].icon) || '';\n  const desc = String(we).toLowerCase();\n\n  if (desc.includes('partly')) return '⛅';\n  if (desc.includes('rain')) return '🌧️';\n  if (desc.includes('snow')) return '❄️';\n  if (desc.includes('cloud')) return '☁️';\n  if (desc.includes('clear') || desc.includes('sunny')) return '☀️';\n\n  return '🌤️';\n}\nfunction weatherDesc(weth) {\n  const we=weth.days[0].description;\n  const descr=String(we).toLowerCase();\n  return descr;\n}\n\n\nbuto.addEventListener(\"click\",async (e)=>{\n    e.preventDefault();\n    const cityName=document.querySelector(\"#locId\").value;\n    const dt=document.querySelector(\"#dt\").value;\n    const weth=await getWeatherData(cityName,dt)\n    const emote=weatherEmojis(weth);\n    const descr=weatherDesc(weth);\n    cont.append(emote);\n    cont.append(descr);\n    const minTemp=weth.days[0].tempmin;\n    // cont.append(minTemp);\n    // console.log(typeof(minTemp));\n    console.log(weth);\n    \n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBLHFHQUFxRyxTQUFTLEdBQUcsR0FBRyxPQUFPLE9BQU87O0FBRWxJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzPzZiZjQiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY2l0eU5hbWUsIGR0KSB7XG4gIC8vIDEuIERlZmluZSB5b3VyIEFQSSBVUkwgKHVzdWFsbHkgd2l0aCB5b3VyIEFQSSBrZXkgYW5kIHNlYXJjaCBwYXJhbWV0ZXJzKVxuICBjb25zdCBhcGlLZXkgPSBcIktUN0M0QjY0QUVVWDNRRUFSRkYzUzI3N0tcIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7Y2l0eU5hbWV9LyR7ZHR9P2tleT0ke2FwaUtleX1gO1xuXG4gIHRyeSB7XG4gICAgLy8gMi4gQXdhaXQgdGhlIGluaXRpYWwgbmV0d29yayByZXF1ZXN0XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIC8vIDQuIEF3YWl0IHBhcnNpbmcgdGhlIHJlc3BvbnNlIGJvZHkgaW50byB1c2FibGUgSlNPTiBkYXRhXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICAvLyA1LiBSZXR1cm4gdGhlIGZpbmFsIGRhdGEgb2JqZWN0XG4gICAgcmV0dXJuIGRhdGE7XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBIYW5kbGUgbmV0d29yayBlcnJvcnMsIHR5cG9zIGluIFVSTCwgb3IgaXNzdWVzIHRocm93biBhYm92ZVxuICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggd2VhdGhlciBkYXRhOlwiLCBlcnJvcik7XG4gIH1cbn1cbmNvbnN0IGJ1dG89ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG5jb25zdCBjb250PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmZ1bmN0aW9uIHdlYXRoZXJFbW9qaXMod2V0aCkge1xuICBjb25zdCB3ZSA9ICh3ZXRoICYmIHdldGguZGF5cyAmJiB3ZXRoLmRheXNbMF0gJiYgd2V0aC5kYXlzWzBdLmljb24pIHx8ICcnO1xuICBjb25zdCBkZXNjID0gU3RyaW5nKHdlKS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChkZXNjLmluY2x1ZGVzKCdwYXJ0bHknKSkgcmV0dXJuICfim4UnO1xuICBpZiAoZGVzYy5pbmNsdWRlcygncmFpbicpKSByZXR1cm4gJ/CfjKfvuI8nO1xuICBpZiAoZGVzYy5pbmNsdWRlcygnc25vdycpKSByZXR1cm4gJ+KdhO+4jyc7XG4gIGlmIChkZXNjLmluY2x1ZGVzKCdjbG91ZCcpKSByZXR1cm4gJ+KYge+4jyc7XG4gIGlmIChkZXNjLmluY2x1ZGVzKCdjbGVhcicpIHx8IGRlc2MuaW5jbHVkZXMoJ3N1bm55JykpIHJldHVybiAn4piA77iPJztcblxuICByZXR1cm4gJ/CfjKTvuI8nO1xufVxuZnVuY3Rpb24gd2VhdGhlckRlc2Mod2V0aCkge1xuICBjb25zdCB3ZT13ZXRoLmRheXNbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IGRlc2NyPVN0cmluZyh3ZSkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIGRlc2NyO1xufVxuXG5cbmJ1dG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYXN5bmMgKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNpdHlOYW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9jSWRcIikudmFsdWU7XG4gICAgY29uc3QgZHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdFwiKS52YWx1ZTtcbiAgICBjb25zdCB3ZXRoPWF3YWl0IGdldFdlYXRoZXJEYXRhKGNpdHlOYW1lLGR0KVxuICAgIGNvbnN0IGVtb3RlPXdlYXRoZXJFbW9qaXMod2V0aCk7XG4gICAgY29uc3QgZGVzY3I9d2VhdGhlckRlc2Mod2V0aCk7XG4gICAgY29udC5hcHBlbmQoZW1vdGUpO1xuICAgIGNvbnQuYXBwZW5kKGRlc2NyKTtcbiAgICBjb25zdCBtaW5UZW1wPXdldGguZGF5c1swXS50ZW1wbWluO1xuICAgIC8vIGNvbnQuYXBwZW5kKG1pblRlbXApO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZihtaW5UZW1wKSk7XG4gICAgY29uc29sZS5sb2cod2V0aCk7XG4gICAgXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;