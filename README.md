#  typescript-serverless-monorepo

### top-level directory layout explanation 
    .
    ├── libs                   # Common code that will be shared between services ex. DB Models, DB connection etc.
    ├── resources              # Shared resources
    ├── services               # Service directory                  
          ├── user             # User service related code 
              ├── package.json  # uses script defined in root package.json
          ├── paper            # Paper service related code 
              ├── package.json  # uses script defined in root package.json
    ├── package.json           # Project level package.json
    ├── tsconfig.json          # Project level tsconfig.json
    
    
    
  This directory follows [Nested use of plugin](https://github.com/AnomalyInnovations/serverless-bundle#nested-services)  whereve possible.
  
 Note: We need to add tsconfig file to each service as described [here](https://github.com/AnomalyInnovations/serverless-bundle/pull/51#issuecomment-582086181)


 ### How to use it?
 - Clone this repo.
 - inside root directory run `npm install`
 - go to any service. for ex. `cd services/user`
 - Start serving using sls offline. `npm run start`
 
 
 Commands shown below should run inside specific service directory.. ex. `cd services/SERVICE_NAME`
 
 To run service offline
 > npm run start
 
  To build serverlss package
 > npm run build
 
 to deploy serverless service
 > npm run deploy
 
 to run test cases
 > npm run test
 
 
 `NOTE:  I know this can be optimized in many ways. but this is just the basic repo to show how we can use typescript support provided by serverless-bundle`
 
