Meteor.methods

	sendWeekSummary: ->
		if !@connection?
			# TODO: loop through users
			# TODO: 	get users applications for next week
			# TODO: 	loop through his/her projects
			# TODO: 		get marked shifts
			# TODO: 	get news if changed in this week
			# TODO: 	send all investiged information

			console.log 'called server-side'
