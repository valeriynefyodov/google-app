# google-app

Initialize app via `npm install`

You should start a HTTP-server to handle app's requests. It uses node's `http-server` module.<br>
In `SimpleHTTPService/`\:
```sh
http-server --cors
```



Then in `src/script` you should change `HOST` variable in files below according to your server's IP-address and port:

- `Actions/MailActions.js`
- `Actions/BrandNameActions.js`
- `Actions/PortfolioStores.js`
- `Components/Google/Tab.js`
- `Components/Google/Recent.js`

After all in root directory run
```sh
npm run dev
```
to start the project.