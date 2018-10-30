# BORA Explorer

BORA Explorer\(브랜드 명이 필요?\)는 BORA Point를 위한 Smart Contract를 통한 거래 내역에 대한 정보를 취합하고, 모니터링 할 수 있도록 도와 주는 도구 입니다.

## BORA Explorer의 구성

BORA Explorer는 다음과 같은 모듈로 구성 되어 있습니다.

1. Front-End를 제공하는 [explorer-front](https://github.com/BoraEcosystem/explorer-front)
2. Front-End를 위한 API를 제공하는 Back-end 모듈 [explorer-api](https://github.com/BoraEcosystem/explorer-api)
3. Blockchain에서 데이터를 가져와 index database를 구성하는 [explorer-crawler](https://github.com/BoraEcosystem/explorer-crawler)
  본 프로젝트는 API에 해당하는 Front-end 모듈입니다. 본 Front 모듈을 구성하고자 한다면 위의 링크를 통해 API Back-end 모듈 및 Crawler에 대한 내용을 확인하세요

## BORA Explorer Front

Bora Explorer Front는 BORA Point를 위한 Smart Contract를 통한 거래 내역에 대한 정보를 취합하고 모니터링 할 수 있도록 도와 주는 프론트 소스입니다.

## 필요 개발 환경 및 실행

BORA Explorer Front는 Angular6 기반으로 개발되어 있습니다.  
하여 Angular가 프로젝트가 돌아갈 수 있는 기본 세팅이 필요합니다.

1. Typescript 설치 ->  
  `npm install -g typescript`
2. Angular/Cli 설치 ->  
  `npm install -g @angular/cli`
3. Clone 된 프로젝트의 root에서 명령어를 통해 필요한 플러그인 및 종속된 소스들을 설치합니다.  
  `project root>npm install`
4. Install이 완료된 이 후, hosts 파일에 127.0.0.1 bora-explorer.way2bit.net 을 설정하세요 그리고  로컬 서버를 실행시킵니다. 기본 로컬 도메인은 bora-explorer.way2bit.net 으로 설정\(angular.json\)되어 있습니다.  
  `ng serve --port=8080 (기본 4200)`
5. 온라인 서비스를 위한 Build  
- angular.json에 “outputPath”에 설정되어 있는 디렉토리에 컴파일된 소스가 생성됩니다.  
- 생성된 파일을 본인의 서버에서 가동시킵니다.  
  `ng build 프로젝트폴더명 --prod -output-hashing=all`
