## Slack Pipeline tool

A Free-range Friday project

Deploy pipeline queue management using slack commands. Creates a queue on a per-channel basis.

Use the following commands in your squads channel:

	/pipe help ---- See this help message
	/pipe status ---- See the current queue for the pipe
	/pipe take ---- Add yourself to the production pipe queue
	/pipe release ---- Release the pipe

## Todo

* Introduce bot `@pipe` scope for publicly visible interactions
* Push notification direct to user when its their turn in the queue
* Allow releases to be tagged with a description, commit SHA or jira issue

## Feature requests (please feel free to add to this)
* `/pipe deploy` command: trigger CI actions
* `/pipe history` show the last X deploys for this channel
* `/pipe nudge` direct message the current pipe holder, with hundreds of "ship it" gifs

## Bug list
*