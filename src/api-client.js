const URL = 'http://348a4546.ngrok.io/api'

export function getEmployees() {
  return fetch(`${URL}/employees/`)
    .then(response => response.json());
}

export function saveEmployee(emp) {
  return fetch(`${URL}/employees/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(emp)
  })
    .then(response => response.json())
}

export function getLiquidations (employeeId) {
  return fetch(`${URL}/paysheets/${employeeId}/`)
    .then(response =>  response.json())
}

export function liquidateEmployee (data) {
  return fetch(`${URL}/paysheets/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
}

export function getCurrentSetting() {
  return fetch(`${URL}/settings/`)
    .then(response => response.json());
}
