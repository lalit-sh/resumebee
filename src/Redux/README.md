# Redux dir

This dir holds all the logic that goes for redux to work.

1. actions:
    actions dir will contain all the actions for a module

2. constants:
    constants dir will contain all the constants for redux use.

3. dispatchers:
    Normally dispatchers for actions should be contained in dispatchers folder but as code progresses this get hectic to seprate dispatcher from action. So this is optional to put dispatcher seperatly.
    Currently dispatcher are only used to store common dispatchers.

    a. common dispatcher:
        Common dispatchers are those which can be used by any action module. Like start and end of loading.

4. reducers:
    All reducers for redux goes here in a seperate file. Further on all reducers are included in index.jx file in reducers to combineReducers.

5. services:
    Any additional task which we want to seperate from action but is essential to complete the action goes into services dir. For example: HTTP APIs
    (All service should be in a seperate files which will relate to individual action module)

6. store:
    Redux store goes in store

