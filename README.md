# json2dis-embed
Webhook Client written in Node.js

# Install
\* Install yourself, or you can use pre-build files placed in Release tab.
1. Clone this repository
```bash
git clone https://github.com/mtripg6666tdr/json2dis-embed.git
```
2. Install required packages
```bash
npm install
```
3. Build
```bash
npm run build
```
# How to use
1. Write request.json
A sample json file is [here](request.json)
```json
{
    "url": "https://~~~",
    "content": { // here's the json you want to post. Like:
        "content": "Content :)",
        "embed": {
            ...// You can write embed like this
        }
    }
}
```
2. Run
```bash
npm start
```