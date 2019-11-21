# Description

Setup and implement a simple status page project. 

The status page should allow Myra Security to communicate the status of the infrastructure to the customers. 

The candidate should take the provided screenshots (screenshots folder) as reference for the look and feel. 
The screenshots are taken from [the official Myra Security status page](https://status.myracloud.com). 

The project should be implemented using one of the main Javascript frameworks (e.g. Vue.js, Angular, React), preferably Vue.js. 

## Data

The frontend communicates with the backend via REST API (you can use a mock for the task, also static JSON pages will do).

There objects transferred to / from the frontend are 

* messages (see messages.json) 
* categories (see categories.json). 

## Expected features

The expected feature for the project are:
 
* List existing messages 
* Filter existing messages by category 
* Add / edit / delete messages
* Add updates to existing messages

## Bonus 

The following features are not required, but can be implemented as bonus: 

* Lazy loading or pagination on the list view 
* Detail view for a single message
* Add / edit / delete categories
* Support for multiple languages