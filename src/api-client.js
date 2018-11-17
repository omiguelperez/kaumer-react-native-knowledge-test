const URL = 'http://29be9c93.ngrok.io/api/employees/'

export function getEmployees () {
  return fetch(URL)
    .then(response => response.json())
}