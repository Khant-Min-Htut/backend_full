const express = require("express");

const app = express();

const PORT = 3000;

//http verbs or the routes(paths)

let data = ["keo"];

app.use(express.json());

app.get("/", (req, res) => {
  // this is the endpoint number1 - /

  res.send(
    `<body style ="background:pink"><h1>DATA</h1>
    <p>${JSON.stringify(data)}</p>
    <a href="/dashboard"><button>Dashboard</button></a>
    </body>
    <script>
    console.log("This is my script");
    </script>`
  );
});
app.get("/dashboard", (req, res) => {
  res.send(`<body>
    <h1>Dashboard</h1>
    <a href="/"><button>Home</button></a>
    </body>`);
});
app.get("/api/data", (req, res) => {
  console.log("This one was for data");
  res.status(333).send(data);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("We delete the element off the end of eh array");
  res.sendStatus(203);
});

//CRUD - create-post-read-get-update-put-delete-delete
