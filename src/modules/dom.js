import { getWeatherRequest, processWeatherRequest } from './api.js';
import { displayCurrentWeatherIcon, displayCurrentTemp } from './utils.js';

function render() {
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', handleSearch);
}

async function handleSearch(event) {
  event.preventDefault();
  const location = event.target[0].value;

  const data = await processWeatherRequest(getWeatherRequest(location));
  displayCurrentWeatherIcon(data);
  displayCurrentTemp(data);
  event.target[0].value = '';
}

export default render;
