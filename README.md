# QuickfuseApps UI automation
UI automation suite for quickfuse apps using protractor and jasmine


Follow the below steps to setup your local machine to run the tests locally.
As a pre-requisite, make sure you have the below installations completed.


- Install latest version of `Chrome browser` (if not already installed)
	 
- `npm install` in terminal from root folder where package.json is present

- `npm run webdriver-update` in terminal from root folder where package.json is present


 How to run tests on a local machine?

  Open terminal at the project root and run the below command
   
   - `npm run e2e`

  Tests under `tests` folder will run. Currently there is only one spec `sendEmailspec.js` that runs.
  
  TestReports will get generated under e2e/test-results/E2ETestResults

