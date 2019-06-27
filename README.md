# EthClassic.Dev

This is an open source website for the Ethereum Classic development communtiy. Contributors may simply submit a pull request.

## Development

### Unix/Mac
```
# In the root folder:
yarn global add vuepress
yarn
vuepress dev docs
```

### Windows
- Download [node.js & npm](https://nodejs.org/en/download/)
- Download [Yarn](https://yarnpkg.com/en/docs/install#windows-stable)
- Download [Git Bash](https://git-scm.com/downloads)
- Download the `master` branch
- Navigate to the `/.dev` folder
- Right click and select `Git Bash Here`

Run the following commands:
```
npm install -g yarn
npm install -g vuepress
yarn
vuepress dev docs
```

## Build
```
# In the root folder:
vuepress build docs
```

The build should be exported to `/docs/.vuepress/dist` which can be deployed to a static host. We are hosting the site on github pages via the deploy script below.


## Deployment
```
# In the root folder:
./deploy.sh
```

## Structure
Site content is in `/docs` folder. Everything else in `/docs/.vuepress`
