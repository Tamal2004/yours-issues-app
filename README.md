# Yours Issues App

This is a sample project of a Github Issues retrieval system. The application uses the Github REST API
and retrieves issues of public repositories.

## Technologies used

-   React
-   Next JS
-   Typescript
-   Styled Components (Used for custom components)
-   Unit Testing
-   Integration testing
-   Redux with Redux-toolkit
-   Octokit for the github API
-   Formik used for form validation


## Assumptions 
-   An error is shown when a repository is not found with the inputs given. There is 
also an error for searching for a repository with no issues in it.
-   The total issues tallied and shown next to the title in the Issues page will show the number
of open issues, not the total number. This behaviour is mimicking Github and the given design.
-   The Tabs for Open & Closed issues should both show their respective counts. This behaviour is 
included in the application but was not in the design.
-   The pagination system uses displays 5 pages in a range & 3 pages in the margins. The design was 
quite ambiguous but this is also mimicking Github's implementation.

## Notes
-   The Issues page is also Server-side rendered. So a URl of /[owner]/[repository] should
also do the same work as going through the form. Errors however as launched back to the page.
-   Even though there has only been 1 contributor, proper Git protocols have been followed; the project
has spanned [4 pull requests](https://github.com/Tamal2004/yours-issues-app/pulls?q=is%3Apr+is%3Aclosed). They 
have been split up according to system setup, search page, issues page, and integration testing (& final touches).

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.

### `npm run start` or `yarn start`

Starts up a production version of the server after a `npm run build` has been completed

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.
