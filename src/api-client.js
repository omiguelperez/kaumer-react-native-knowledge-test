const URL = 'http://7d790087.ngrok.io/api/employees/'

export function getEmployees () {
  return fetch(URL)
    .then(response => response.json())
}