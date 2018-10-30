# BORA Explorer
The BORA Explorer is a tool which helps you to collect and monitor information on transaction details through the Smart Contract for the BORA Shell.


### Components of BORA Explorer
The BORA Explorer consists of the following modules.
1. Front-End module providing UI, [explorer-front](https://github.com/BoraEcosystem/explorer-front) 
2. The Back-End module providing API for the Front-End, [explorer-api](https://github.com/BoraEcosystem/explorer-api)
3. The Crawler to fetch data from the Blockchain and configure index database, [explorer-crawler](https://github.com/BoraEcosystem/explorer-crawler)

It is a Front-End module.If you want to configure this front module, please check the Back-End API module and Crawler through the link above.


## BORA Explorer Front

The BORA Explorer Front-End is source for UI which display data from APIs and blockchain.

## Required development environment and install guide

The BORA Explorer Front is developed based on the Angular6, so the Angular needs the basic settings which the project can run.

1. Install Typescript  
```
npm install -g typescript
```
2. Install Angular/Cli  
```
npm install -g @angular/cli
```
3. Install the necessary plugins and dependent sources via the command at the root of the project cloned.
```
project root>npm install
```
4. After completing Install, put "127.0.0.1 bora-explorer.way2bit.net" into your host file. Then run the local server. The default local domain is set to bora-explorer.way2bit.net\(angular.json\).  
```
ng serve --port=8080 (default 4200)
```
5. Build for online service  
- The compiled source is created in the directory set to "outputPath" in angular.json
- Run the created file on your server. 
```
ng build {project-dir} --prod -output-hashing=all
```
