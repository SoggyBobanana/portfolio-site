# Portfolio

This portfolio links to two local projects: `prototype-japanese-restaurant` and `subscription-management-system`.

Setup
- Clone both project repositories as sibling folders of this portfolio directory, for example:

```
git clone <url-for-prototype> prototype-japanese-restaurant
git clone <url-for-subscription> subscription-management-system
```

- Start each project following its README. Common commands:

```
cd prototype-japanese-restaurant
# install dependencies (example)
npm install
npm start

cd ../subscription-management-system
# install and run according to that repo's README
```

Running the portfolio
- Serve this folder with a simple static server. Example using Python 3:

```
python3 -m http.server 8000

# then open http://localhost:8000
```

Editing links
- The project pages in `projects/` contain a placeholder link; update the `href` on the page to the project's running URL (localhost and port) or a deployed URL.

- To set repository and live URLs centrally, edit `projects/projects.json`. Example:

```
{
	"prototype-japanese-restaurant": { "repoUrl": "https://github.com/you/prototype-japanese-restaurant", "liveUrl": "http://localhost:3000" },
	"subscription-management-system": { "repoUrl": "https://github.com/you/subscription-management-system", "liveUrl": "http://localhost:3001" }
}
```

After updating the file, reload the project page in the browser to see updated links and the embedded live preview (iframe) if `liveUrl` is set.
