alert('form server');
const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = {
  "test": "event"
}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://eobr7f81g93j2x7.m.pipedream.net", options)
