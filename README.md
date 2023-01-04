## Test 1: Add env var in PWSH
($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)

## Test 2: Add env var in PWSH
($env:REACT_APP_NOT_SECRET_CODE = "12345") -and (npm start)
