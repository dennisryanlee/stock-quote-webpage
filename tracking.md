Summary - ************************************************************************ this is 72 characters

52. 11/07/22:
 - Alpha Vantage API wasn't working so I replaced it with (indirect) Rapid API connection to Alpha Vantage API

51. 10/18/22:
 - look into problem with stock symbol lookup; difficult top replicate problem - closed issue on github

50. 10/14/22:
 - create new build; upload to replit server

49. 10/10/22:
 - finished tooltip!  also minor date/value formatting on tooltip; also closed some issues with switch to line chart instead of bar charts
 - for tomorrow - upload current working development version to replit as a working prototype
 - then - create production build and change server version build on github and replit - just override current replit build

48. 10/09/22:
 - making progress on mousemove tooltip
https://stackoverflow.com/questions/68813801/d3-bisect-dates-always-returns-0-or-30 --list needs to be in ascending order

47. 10/08/22:
 - keep working on tooltip mousemove function

46. 10/07/22:
 - keep working on mousemove function

45. 10/06/22:
 - keep working on mousemove function

44. 10/05/22:
 - changed data to incoming pair
 - data format changed correctly - still having same issue with charting for tooltip

43. 10/03/22:
 -  need to fix data coming in for charting so mousemove works correctly; reformating data structure

42. 10/02/22:
 - Added complex tooltip - not currently working due to mousemove issue
Re: new plan below - already switched to bar chart.  Add tooltip and then look into Hacktoberfest

https://bl.ocks.org/d3noob/40bfe16d0b344852df92d97510d2825e - great tooltip
https://sharkcoder.com/data-visualization/d3-line-chart - great walkthrough of chart step by step


New plan:
 - ~~Change bar chart to line chart~~
 - Add in default S&P 500 chart for same time period - different color
 - Add ability to compare different companies

41. 09/29/22:
 - Changed line breaks on stock symbol lookup page
 - Changed bar chart to line chart (still need to add new tooltip)


40. 09/25/22:
 - Setup dev environment on Ubuntu on desktop; edit dollar amount of output on stock quote and formatted to include comma for thousands and add line break in tooltip
 - Goal tomorrow - format date output

39. 09/09/22 #2:
 - Summary -
 - Details - remove some console.logs; create new build and post to server; update replit
 - Goal tomorrow - next steps:
    1. ~~Change frontend for server~~
    2. ~~Build frontend~~
    3. ~~Update server repository~~
    4. ~~Update replit version with new server build~~
    Then:
    5. Work on AWS certification
        - watch YouTube video
        - do practice tests
        - take exam and get certification
    6. Host website on AWS - move personal webpage away from GitHub Pages
    7. Setup github actions to run tests and then make build automatically when code is committed

38. 09/09/22:
 - Summary - chart tooltip formatting
 - Details - chart tooltip formatting
 - Goal tomorrow - keep working on tooltip - how to get date / price to be on separate lines; also how can it look better on mobile?

37. 09/08/22:
 - Summary - flexible x range; delete old chart on new search; tooltip tweaking
 - Details - change x range on chart to match data set time range; clear out chart before making new chart; adjusting tooltip date display and working on line break
 - Goal tomorrow - get line spacing on tooltip to work! also adjust display of fill to show properly with so many data points
Great resource on d3 charting - https://github.com/ag-grid/ag-grid-react-example/blob/ff55f75fcb27fbc6649932f0818fe7539608ede6/src-trader-dashboard/components/StockHistoricalChartPanel.jsx#L45

36. 09/07/22 #2:
 - Summary - put up new build for display tomorrow
 - Details - small fix on set-state on last close; create build and post to server
 - Goal tomorrow - fix issue with multiple searches causing problems

35. 09/07/22:
 - Summary - add css for d3 chart; finish charting
 - Details - add css for d3 chart; finish charting
 - Goal tomorrow - fix issue with chart adding on each time; also fix bar width on tooltip to display better
 AlphaVantage alternative: https://iexcloud.io/

34. 09/06/22:
 - Summary - extract data for d3 chart; x axis and y axis for d3 chart
 - Details - extract data for d3 chart; x axis and y axis for d3 chart
 - Goal tomorrow - keep working on chart
looping through object values/keys: https://stackoverflow.com/questions/51176519/parsing-and-getting-data-from-json - answer by Nick Tomlin
d3 fetch is just an option: https://stackoverflow.com/questions/21639305/d3js-take-data-from-an-array-instead-of-a-file

33. 09/02/22:
 - Summary - start on d3 chart
 - Details - minor change to routing; install d3 packages; start to setup d3 visualization
 - Goal tomorrow - keep working on d3 - see resources below
 https://blog.griddynamics.com/using-d3-js-with-react-js-an-8-step-comprehensive-manual/
 my old d3 bar chart - https://codepen.io/justinmemphis/pen/VwpeWmy?editors=1011

32. 09/01/22:
 - Summary - fix routing
 - Details - update meta tag for replit routing; work on routing
 - Goal tomorrow - AWS

31. 08/31/22:
 - Summary - change parameters on API call for quote; update error message
 - Details - change parameters on API call for quote; update error message
 - Goal tomorrow - post on replit

30. 08/30/22:
 - Summary - switch API request to axios
 - Details - switch API request to axios
 - Goal tomorrow - get server API call working

29. 08/29/22:
 - Summary - resetting routing for development
 - Details - resetting routing for development
 - Goal tomorrow - switch request to axios for API call

28. 08/28/22:
 - Summary - move routing out to server for passing API key securely
 - Details - move routing out to server for passing API key securely
 - Goal tomorrow -

27. 08/27/22:
 - Summary - create new server repo; create todo list
 - Details - create new todo.md separate file from tracking.md; started server repo; moved process variable to server
 - Goal tomorrow - continue work on server repo

26. 08/26/22:
 - Summary - extracting close dates and closing values from API object
 - Details - extracting close dates and closing values from API object
 - Goal tomorrow - start on D3 charting
 https://stackoverflow.com/questions/51176519/parsing-and-getting-data-from-json

25. 08/25/22:
 - Summary - parse output from API into JSON object
 - Details - parse output from API into JSON object
 - Goal tomorrow - retrieve close data from JSON object
https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/

24. 08/24/22:
 - Summary - get API connection working; setup state variables
 - Details - get AlphaVantage API to work; setup state variables; start work on output
 - Goal tomorrow - get output working

23. 08/23/22:
 - Summary - build quote lookup basic html and logic
 - Details - adding quote lookup basic html; adding basic quote lookup logic; adding Alpha Vantage connection options; adding environmental variables in create-react-app
 - Goal tomorrow - get API key to work correctly - not secure long-term

22. 08/21/22:
 - Summary - create new version on replit; start quote_machine
 - Details - create version on replit; starting new quote_machine framework; running build on local; setting up cache-control
 - Goal tomorrow -
(use serve -s build to serve build)
https://create-react-app.dev/docs/production-build/

21. 08/20/22 #2:
 - Summary - switch reduce to filter in symbol lookup; update symbol list
 - Details - resolving reduce question posted to stack overflow; switching to filter for sorting through csv file array; update formatting on multiple results; update stock symbol list
 - Goal tomorrow - create new replit version for showing at meetup tomorrow; begin work on quote page

20. 08/20/22:
 - Summary -
 - Details - submitting question to Stack Overflow about reduce method
 - Goal tomorrow -

19. 08/19/22:
 - Summary - trying for loop in symbol lookup
 - Details - trying for loop in symbol lookup
 - Goal tomorrow -

18. 08/18/22 #2:
 - Summary - working on reduce function
 - Details - working on reduce function
 - Goal tomorrow - keep working on reduce function

17. 08/18/22:
 - Summary - implementing reduce function on symbol search
 - Details - implementing reduce function; putting in spread operator for deep copy of array; solving infinite loop problem; reduce function is working but still not outputting results correctly
 - Goal tomorrow -
https://stackoverflow.com/questions/34398279/map-and-filter-an-array-at-the-same-time

16. 08/17/22 #2:
 - Summary - reading on reduce
 - Details - reading on reduce
 - Goal tomorrow - reading on reduce - see stack overflow

15. 08/17/22:
 - Summary - working with filtering csv data
 - Details - using reduce instead of filter
 - Goal tomorrow - look at using reduce instead of filter - MDN docs on reduce

14. 08/16/22 #2:
 - Summary - reading on JavaScript filter method
 - Details - reading You Don't Know Javascript: Get Started - up through Chapter 2
 - Goal tomorrow - read link below - regarding filter for csv to get more than one value (find only returns one value)
 https://stackabuse.com/guide-to-javascripts-filter-method/

13. 08/16/22:
 - Summary - adjusting filter function of csv search
 - Details - adding filter function to csv search; error message if no returned value from filter
 - Goal tomorrow - look into hasOwn search of object
 https://stackoverflow.com/questions/44312924/filter-array-of-objects-whose-any-properties-contains-a-value - good description of filtering an array
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn

12. 08/14/22 #2:
 - Summary - add headers to symbol lookup; change styling; resolve search errors
 - Details - add headers to papaparse readRemoteFile search; correct searching of csv file now with header; change styling on output; correct output of stock symbol lookup
 - Goal tomorrow - try and find matching parameters (to see if there are duplicates returned from the search)
 https://css-tricks.com/old-timey-terminal-styling/ - terminal style in CSS
 https://stackoverflow.com/questions/51462062/loop-through-array-of-objects-check-for-a-matching-parameter-and-add-the-matchi - looking for matching parameter

11. 08/14/22:
 - Summary - consolidated functions; created form for symbol lookup
 - Details - consolidating stock symbol search function with csv parsing; reading up on form submission in react
 - Goal tomorrow - look at papaparse adding headers
 https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs - good answer by CloudWave below

10. 08/13/22 #2:
 - Summary - passing props with functional components
 - Details - reading about createContext in react; nesting quote_csv_parse within search_stock_symbol_database
 - Goal tomorrow - read pluralsight link below about passing props between child to parent; look into lifing up state in react (FCC link); react router passing props - see ui.dev link below
 https://reactjs.org/docs/composition-vs-inheritance.html
 https://reactjs.org/docs/components-and-props.html
 https://www.pluralsight.com/guides/how-to-pass-props-object-from-child-component-to-parent-component
 https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/
 https://reactjs.org/docs/lifting-state-up.html
 https://ui.dev/react-router-pass-props-to-components

9. 08/13/22:
 - Summary - working on passing state from one function to another
 - Details - reading about passing state and props from one function to another
 - Goal tomorrow - look at last link
https://codesandbox.io/s/flamboyant-chandrasekhar-fe7bt?file=/src/CompanyDetails.js
https://stackoverflow.com/questions/70058851/return-a-prop-inside-useeffect
https://stackoverflow.com/questions/66727049/exporting-a-state-from-hook-function-to-another-component

8. 08/12/22 #2:
 - Summary - updating lookup function
 - Details - reading about passing around props in react component; updating lookup function
 - Goal tomorrow - keep working on lookup function
 https://stackoverflow.com/questions/56372371/how-to-access-props-from-useeffect-hook-in-reactjs

7. 08/12/22:
 - Summary - resolve exhaustive-deps lint warning on quote_csv_parse
 - Details - reading on exhaustive-deps linting warning - solved!
 - Goal tomorrow -
 https://blog.logrocket.com/understanding-react-exhaustive-deps-linting-warning/

6. 08/11/22:
 - Summary - create new function stock symbol lookup
 - Details - creating new function for looking stock symbol in database; reading about moving values between React functions; reading about react hooks
 - Goal tomorrow -
 https://stackoverflow.com/questions/70716489/how-to-send-data-from-one-component-to-another-components-with-context-in-react
 https://reactjs.org/docs/hooks-reference.html
 https://reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often

5. 08/09/22:
 - Summary -
 - Details - reading about useRef
 - Goal tomorrow -
https://mariosfakiolas.com/blog/use-useref-hook-to-store-values-you-want-to-keep-an-eye-on/

4. 08/08/22:
  - Summary -
  - Details - clearing exhaustive-deps problem; reading about useRef
  - Goal tomorrow -
  https://www.smashingmagazine.com/2020/11/react-useref-hook/

3. 08/07/22:
  - Summary - update quote_csv_lookup to load on start
  - Details - update quote_csv_lookup to load on start
  - Goal tomorrow - clear exhaustive-deps problems from quote_csv_lookup

2. 08/06/22:
  - Summary - got react-papaparse to load csv file correctly
  - Details - got react-papaparse to load csv file correctly
  - Goal tomorrow - have csv file load on start; reference in function

1. 08/05/2022:
  - Summary - setup dev environment on laptop
  - Details - setup dev environment on laptop
  - Goal tomorrow - keep implementing data fetching in react per two links below on 08/02

08/03/22:
Summary -
Details - reading up on react useEffect
Goal tomorrow -
https://overreacted.io/a-complete-guide-to-useeffect/ - got to "Don't Lie to React About Dependencies"

08/02/22:
Summary - react useEffect
Details - working on parsing csv file in react; reading up on react usEffect
Goal tomorrow -
https://overreacted.io/a-complete-guide-to-useeffect/
https://www.robinwieruch.de/react-hooks-fetch-data/

07/31/22 #3:
Summary - buildspace.so session; papaparse implementation in react
Details - buildspace.so building session; papaparse-react implementation - try using useEffect instead
Goal tomorrow - get papaparse csv parsing working
https://stackoverflow.com/questions/71046264/react-hook-make-infinite-loop

07/31/22 #2:
Summary - create fork for react router; start on csv parser for quote lookup
Details - create fork to test react router; routing looks good; started to create csv parser for stock quote lookup
Goal tomorrow - get csv parser working

07/31/22 #1:
Summary - adjust back to not breaking
Details - adjusting back to not breaking (removed company name search)
Goal tomorrow - implement react router on fork

07/30/22 #2:
Summary - tutorial of react router
Details - went through React Router tutorial - see separate repository; undid most changes from morning
Goal tomorrow - migrate codebase to React Router - start with fork and merge up when successful

07/30/22 #1:
Summary - problems with routing and react
Details - build broken; problems w/ subfolders and package.json modules; tried to redo .js files to get around 'require'
Goal tomorrow -

07/28/22:
Summary - changing folder structure for JSX
Details - changing folder structure for JSX
Goal tomorrow - look at first link to resolve?
https://stackoverflow.com/questions/54340240/create-react-app-build-uncaught-syntaxerror-unexpected-token
https://stackoverflow.com/questions/54703579/react-script-transpiling-third-party-jsx-files
https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory

07/27/22:
Summary - working on JSX issue for module
Details - JSX transpile issue in stock_symbol_lookup
Goal tomorrow -
https://stackoverflow.com/questions/55955499/babel-jsx-transpiler-error-on-build-when-importing-a-module-into-new-create-reac
https://create-react-app.dev/ - good source for create-react-app information
https://v5.reactrouter.com/web/guides/quick-start

07/26/22:
Summary - change caching; updating papaparse to react-papaparse
Details - cache was storing old files so installed nocache library; also disable fast-refresh; implementing react-papaparse; breaking in stock_symbol_lookup - remove link to get it working
Goal tomorrow - reroute stock symbol lookup to just be react function import (no api route?)
https://react-papaparse.js.org/
https://bobbyhadz.com/blog/react-export-component-function

07/23/22:
Summary - adding form submission
Details - adding form submission
Goal tomorrow - keep working on form submission - watch 2nd link
https://www.freecodecamp.org/news/add-form-validation-in-react-app-with-react-hook-form/
https://www.youtube.com/watch?v=LcAyJRlvh8Y

07/22/22:
Summary - work on form submission for companyname
Details - axios form submission with useeffect; work on form submission
Goal tomorrow - look into form submission
https://stackoverflow.com/questions/62248741/how-to-apply-useeffect-based-on-form-submission-in-react
https://stackoverflow.com/questions/38262148/react-handle-form-submit

07/21/22:
Summary - resolving manifest.json issue
Details - deleting old icons for create-react-app; cleaning up manifest.json route; clean up index.js; learned this is just an issue in Chrome vanilla - not an issue in Firefox or Chrome incognito mode - passing on resolving further
Goal tomorrow -
error with manifest.json in create-react-app: https://stackoverflow.com/questions/72415961/manifest-json-error-in-line-1-in-react-js
manifest guide: https://web.dev/add-manifest/
 See Marc's answer: https://stackoverflow.com/questions/53527972/cant-get-rid-of-missing-manifest-json-error

07/19/22:
Summary - redo test API route with axios instead of fetch
Details - setting axios route; got basic API test route working
Goal tomorrow - work on company name lookup function; change res.json to res.send where necessary
https://www.robinwieruch.de/react-hooks-fetch-data/

07/18/22:
Summary - configuring axios
Details - setup axios for routes; changing routes
Goal tomorrow - keep working on axios and proxy issues
axios usage examples: https://zetcode.com/javascript/axios/
fetch vs. axios: https://meticulous.ai/blog/fetch-vs-axios/

07/17/22:
Summary - update papaparse; react function for parsing stock symbol csv file
Details - read more about React hooks; install react-papaparse and remove old papaparse; setup new react function for parsing csv file
Goal tomorrow - need to complete function to parse csv file and return results, etc. - look at official react docs

07/16/22:
Summary - route for company name search; proxy issues
Details - minor destructuring; routing for stock-symbol-lookup; building additional useEffect; troubleshooting routing issue with proxy
Goal tomorrow - get papaparse to parse the csv file on request; get res.json to return dynamic result (change the form input?)
useEffect with promises vs. async/await: https://javascript.plainenglish.io/fetching-data-with-useeffect-in-react-604ed53edffe
usEffect docs: https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns

07/13/22:
Summary - working on route for stock-symbol-lookup
Details - keep adding route for stock-symbol-lookup; add react-router-dom
Goal tomorrow - implement axios or fetch request to handle form submission
start with react-router-dom - https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
fetch in react - https://www.robinwieruch.de/react-hooks-fetch-data/
https://axios-http.com/docs/example
https://blog.logrocket.com/axios-vs-fetch-best-http-requests/

07/12/22:
Summary - routing in react; starting route for stock-symbol-lookup
Details - got node server working and results displaying on react page!; install cors; add back routes.js file; install npm-run-all; making routes in react; adding route for stock-symbol-lookup - had to leave while not finished
Goal tomorrow - finish adding route for stock-symbol-lookup
changes to package.json scripts - https://medium.com/nerd-for-tech/react-frontend-nodejs-backend-167e2904e5c9https://
routing in React - https://www.pragimtech.com/blog/reactjs/routing-in-react/

07/11/22:
Summary - setting up node server to work with react
Details - setting up node server to work with react
Goal tomorrow - keep working on same
https://medium.com/nerd-for-tech/react-frontend-nodejs-backend-167e2904e5c9
https://dev.to/_s_w_a_y_a_m_/how-to-integrate-react-frontend-with-node-backend-36a4

07/09/22:
Summary - implementing express with react
Details - look at form submission in react; problems with webpack within create-react-app; downgrade react-scripts version and delete/reinstall all packages; starting to implement routes - problems with interaction of create-react-app and node
Goal tomorrow - get node express working with routes
https://www.pluralsight.com/guides/form-submission-in-reactjs
https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs
https://blog.testdouble.com/posts/2019-11-04-react-mvc/
https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5

07/08/22:
Summary - restoring index.html and style.css input to app.js and index.css
Details - updating index.html; updating index.css; finished putting in both former index.html and style.css (in app.js and index.css, respectively)
Goal tomorrow - I guess I don't need nodemon now with create-react-app? - keep for now; now need to get routes and both functions working again; then can change and make results dynamic with react

07/07/22:
Summary - getting create-react-app to work
Details - try to get create-react-app to work; uninstall some dependencies no longer needed; after much trial got create-react-app to work; next connecting branch up
Goal tomorrow - build old website into create-react-app structure - slowly move old file structure in

07/06/22:
Summary - fix replit version bug; started create-react-app
Details - REPLIT - replit version of stock quote webpage isn't loading correctly - tested on mobile; troubleshooting package problem; RESOLVED - it was the .replit file kept referencing nodemon, which apparently is installed globally with replit, which was causing weird issues; LOCAL/BRANCH - installed create-react-app dependencies; started to configure local files to match create-react-app; ran into too many errors so started rebuilding create-react-app in the same git project
Goal tomorrow - get create-react-app to load with no errors

07/05/22:
Summary - planning notes changes
Details - talked to Douglas and made some planning notes changes - see details below
Goal tomorrow - continue to test create-react-app

07/04/22:
Summary - testing create-react-app on other repo
Details - started new branch to test create-react-app; started new repo to test create-react-app
Goal tomorrow - look at Nico Diz's post on stackoverflow - install/save dependencies (step 2)
https://stackoverflow.com/questions/56281479/switch-over-to-create-react-app-on-existing-project

07/03/22:
Summary - configuring babel
Details - finish react component setup; configure babel; review babel options
Goal tomorrow - I think I'll need to reset to create-react-app - per link below
https://stackoverflow.com/questions/56281479/switch-over-to-create-react-app-on-existing-project

07/02/22 #2:
Summary - configuring react component
Details - ON REPLIT - upload to replit; configuring nodemon; removing react component; LOCAL - configuring react component; install react-scripts
Goal tomorrow - need to finish react component - see last link on company_name_button.js - put in code from index.js on link

07/02/22 #1:
Summary - remove create-react-app
Details - remove create-react-app; change server port
Goal tomorrow -

06/28/22:
Summary - continue work on react on company_name_button.js
Details - read more on react; re-install react and react-dom libraries on main webpage; revert button.js to prior settings and read react documentation to understand forms coming through
Goal tomorrow - keep working on react - see react documentation on forms

06/27/22:
Summary - link create-react-app to initial files
Details - made http request from react to node
Goal tomorrow - keep working on react

06/26/22:
Summary - started create-react-app
Details - working on implementing react; undid react modules so far and started create-react-app
Goal tomorrow - finish create-react-app - see webpage here: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/ - on step 4

06/24/22:
Summary - more work on form submission in react
Details - reading about react interface with APIs; working on implementing react; working on form submission with react
Goal tomorrow - look at last link in company_name_button.js and try to get that working

06/23/22:
Summary - worked on react component for stock quote lookup
Details - added more complex React component; renamed files for react; worked on getting react input to work
Goal tomorrow - keep working on react

06/22/22:
Summary - setup JSX
Details - playing around with react and converting to JSX; installed react and react-dom libraries; got JSX working; started to reformat React like_button.js
Goal tomorrow - keep working with React - get output of company lookup to work and display results in output

06/21/22:
Summary - changed some CSS styling; got demo React component working
Details - changed CSS styling; changed width to match mobile size; added static folder and reformated folder structure; got React demo component working - like button component
Goal tomorrow - get JSX to work correctly?

06/20/22:
Summary - changed API call; started to form first React component
Details - clean up some console.logs; change index.html to show correct data source; rename stock_symbol_lookup to be more clear; rename alpha_vantage_stock_quote to be more clear; play around with AlphaVantage apis; update index.html to clarify US companies only; changed API call to TIME_SERIES_DAILY; start to setup React front-end for response; install babel library so React can use JSX
Goal tomorrow - get React working! - need to finish getting JSX to work correctly

06/19/22:
Summary - setup AlphaVantage API connection
Details - weekly task planning; review AWS hosting; comments on routes api.js; add .env file locally; install request library; setup of .env file; install dotenv library; got AlphaVantage API working!
Goal tomorrow - play around with AlphaVantage requests to get more specific data response I can work with

Sunday - weekly goals, next steps, etc.:
- ~~get Alpha Vantage API connected~~
- ~~research API with more calls per hour than Alpha AlphaVantage - OK as is w/ every 20 seconds~~
- ~~setup website to load up in React instead of raw HTML (i.e. move it to web 2.0)~~
- ~~Have stock symbol results pop through via React~~
- ~~Have stock data results pop through via React~~
- cloud resume challenge
  - AWS certification
  - hosting w/ dynamic integration
  - rewrite code in Python, etc.

06/16/22:
Summary - research finance APIs
Details - researched defunct status of Yahoo Finance API and Google Finance API; read documentation and created account for Alpha Vantage API
Goal tomorrow - get Alpha Vantage API connected

06/15/22:
Summary - finished symbol lookup route; started quote lookup route
Details - changed string output of error (really catch block) of stock quote lookup; moved stock quote lookup function to a separate 'quote_lookup' file under controllers folder; moved csv parsing etc. to same file to clean up routes/api.js; created 'stock_quote' file and matching route in api.js - put in filler res.json to verify it works
Goal tomorrow - research api to connect to for financial data

06/14/22 - got stock symbol lookup through csv file to work; included search for substring; included convert to lowercase string and substring so search is case sensitive
Goal tomorrow - research stock data api?

06/13/22 - got route to button working correctly; added NASDAQ dataset of 8,438 companies and tickers ready (in CSV format); got csv file parsed via papaparse
Goal to work on next - do search through csv file for stock symbol lookup

06/12/22 - started to program submit button form for stock symbol lookup - didn't have time to get very far as cut short

06/11/22 - created package.json file; got node running correctly; got index.html displaying correctly; also added gitignore so node modules don't go to github; had to redo 1/2 an hour of work because I messed up github commits
Goal for tomorrow - start to create stock symbol lookup - use controller js file

06/10/22 - created basic file structure; created basic server.js file; created basic index.html file; created basic style.css file
Goal for tomorrow - prepare package.json; get Node running correctly; get index.html displaying correctly

Plan of action:
- ~~Create basic HTML webpage~~
- ~~Create basic CSS~~
- ~~Create basic javascript file for server~~
- ~~Create basic javascript routes file~~
- ~~Create basic javascript controller file~~

Implementation:
- ~~Link up Yahoo Finance API (or equivalent) - AlphaVantage?~~
- Get ability to select certain financial variables (free cash flow, net income, etc.)
- Compare companies?
- ~~Graphing results? - using D3?~~
- ~~React front-end to check stock quote etc.?~~

Later options:
- Create MongoDB database of user logins - to store saved companies, etc.
- Create login / password input forms
- Hash password with bcrypt library
- Important - Have login through Auth0? Or google? -- yes, need some sort of login to a dashboard, etc. (07/05/22)
- ~~foreign company stock symbol lookup?  AlphaVantage can do foreign searches~~
- Important - host on AWS
- Important - testing - Jest included w/ create-react-app
- Important - CI/CD with GitHub Actions

How to run npm/node:
1. In project folder, "npm init"
2. Install packages with npm - "npm i -s express" etc.
3. Run "node server.js" or "nodemon server.js"
4. When starting a new dev environment, remember to type "npm install" to download all node packages from package.json (08/05/22)

https://levelup.gitconnected.com/set-up-and-run-a-simple-node-server-project-38b403a3dc09
how to find objects in array: https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
how to use papaparse csv parsing: https://stackoverflow.com/questions/49752889/how-can-i-read-a-local-file-with-papa-parse

how to start up react - "cd client" to change to client directory - then "npm start"
