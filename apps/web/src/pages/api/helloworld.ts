export default function handler(req, res) {

  fetch("https://api.covidtracking.com/v1/us/current.json")
    .then(response => response.json())
    .then(data => res.status(200).json(data))

  // if (req.method === 'POST') {
  //   // Process a POST request
  // } else {
  //   // Handle any other HTTP method
  //   res.status(200).json({
  //     name: 'John Doe',
  //     id: "3249237-49028374"
  //   })
  // }
}

// Access Database
// https://api.covidtracking.com/v1/us/current.json