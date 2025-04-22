# Shaper React Embedding Demo

Embed a [Shaper](https://taleshape.com/shaper/) dashboard into a React Router app using the [Shaper React SDK](https://github.com/taleshape-com/shaper-react)

---

See the [index route](./app/routes/home.tsx) for how to use the `ShaperDashboard` component.

The demo uses a [fetcher](https://reactrouter.com/how-to/fetchers) load a JWT.

See the [/jwt route](./app/routes/jwt.tsx) for how to create a JWT using the Shaper API.

Make sure to never expose the `API_KEY` in the client code.

In a real application, you would need to make sure the user is allowed to see the specified dashboard and set variables based on the user's permissions.


## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Run Shaper

Make sure you have Docker installed and running. Then, start the Shaper server:

```bash
npm run shaper
```

The demo database is included in the Git repository and it should work automatically.

You can visit the Shaper UI at http://localhost:5454


### Run the React app

Start the development server:

```bash
npm run dev
```

Then open http://localhost:5173

