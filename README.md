# aurelia-nw
[NW.js](https://github.com/nwjs/nw.js/) (nodewebkit) app with [Aurelia](http://aurelia.io/)


##Requirements

Node must be installed. [jspm](http://jspm.io/) must be installed (`npm install -g jspm`).

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
6. To run the app, execute the following command:

  ```shell
  gulp
  ```
  
  Changes inside the `src` folder will be watched and recompiled - use the reload button in the NW.js toolbar to refresh the app afterwards.

## Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Install Aurelia libs for test visibility:

```shell
jspm install aurelia-framework
jspm install aurelia-http-client
jspm install aurelia-router
```
3. You can now run the tests with this command:

  ```shell
  karma start
  ```
  
  or via gulp with this command:
  
  ```shell
  gulp test
  ```
  
  
## Building for Production

1. Verify the target platforms on the `nwBuilderConfig.platforms` property in **gulp\config.js**
2. Build a release version of all specified platforms with this command:

  ```shell
  gulp build-release --release --bump minor
  ```
  
  Where the value of `bump` can be *major*, *minor*, *patch*, or *prerelease* (defaults to *patch*)
