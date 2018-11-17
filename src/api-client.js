const URL = 'http://29be9c93.ngrok.io/api'

export function getEmployees () {
  return fetch(`${URL}/employees/`)
    .then(response => response.json());
}

export function getCurrentSetting () {
  return fetch(`${URL}/settings/`)
    .then(response => response.json());
}