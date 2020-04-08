export default function fetchData() {
  return Promise.all([
    fetch("https://api.coronastatistics.live/all"),
    fetch("https://api.coronastatistics.live/timeline/global"),
    fetch("https://api.coronastatistics.live/countries?sort=cases")
  ]).then(responses => {
    return Promise.all(responses.map(response => {
      return response.json();
    }))
  }).then(data => {
    return data;
  }).catch(err => {
    console.log(err);
  })
}