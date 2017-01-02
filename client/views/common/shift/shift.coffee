Template.shift.helpers

	view: (a) ->
		if a?
			if FlowRouter.getQueryParam('weekId')?
				a == 'editShifts'
			else
				a == FlowRouter.getQueryParam('view')
		else if FlowRouter.getQueryParam('weekId')?
			'editShifts'
		else
			FlowRouter.getQueryParam('view') || 'showNames'

	getShift: ->
		shift = {}

		if FlowRouter.getQueryParam('weekId')? || FlowRouter.getQueryParam('view') == 'editShifts'
			shift = Shifts.findOne this + '', fields:
				tagId: 1
				tag: 1
				start: 1
				end: 1
				status: 1
				scheduling: 1
				'teams._id': 1
				'teams.name': 1
				'teams.min': 1
				'teams.max': 1
				'teams.meetingStart': 1
				'teams.meetingEnd': 1
				'teams.participants': 1
				'teams.pending': 1
		else
			shift = Shifts.findOne this + '', fields:
				tagId: 1
				tag: 1
				start: 1
				end: 1
				status: 1
				'teams._id': 1
				'teams.name': 1
				'teams.status': 1
				'teams.participants': 1
				'teams.pending': 1

		if shift?
			shift.isWrongTag = false
			tags = FlowRouter.getQueryParam('showTags')
			tagId = FlowRouter.getQueryParam('tagId')

			if tags
				if shift.tagId not in tags.split('_')
					shift.isWrongTag = true
			else if tagId?
				if shift.tagId != tagId
					shift.isWrongTag = true
			else
				shift.isWrongTag = true

		shift

	multipleTags: ->
		tags = FlowRouter.getQueryParam('showTags')
		tags && tags.indexOf('_') > -1

	getScheduling: ->
		if @scheduling?
			schedulings =
				direct: TAPi18n.__('scheduling.direct')
				manual: TAPi18n.__('scheduling.manual')
			schedulings[@scheduling]

	shiftClass: ->
		try
			if @teams
				for team in @teams
					for participant in team.participants when participant._id == Meteor.userId()
						return 'accepted'
					for pending in team.pending when pending._id == Meteor.userId()
						return 'pending'
			@status

	adminClass: ->
		if Roles.userIsInRole Meteor.userId(), Permissions.shiftAdmin, FlowRouter.getParam('projectId')
			'isAdmin'
		else
			'noAdmin'

	sortUsers: (participants) ->
		participants.sort (a, b) ->
			if a.thisTeamleader then -1
			else if b.thisTeamleader then 1
			else
				aSplit = a.name.split(' ')
				bSplit = b.name.split(' ')

				if aSplit[aSplit.length-1] < bSplit[bSplit.length-1] then -1
				else if aSplit[aSplit.length-1] > bSplit[bSplit.length-1] then 1
				else 0

Template.shift.onCreated ->

	self = this

	@autorun -> ShiftSubs.subscribe 'shift', self.data

Template.shift.events

	'click .shift': ->
		unless $('.wrapper-content').hasClass('editShifts')
			shiftId = @_id
			wrs -> FlowRouter.setQueryParams showShift: shiftId

	'click #editShift': ->
		shiftId = @_id
		wrs -> FlowRouter.setQueryParams editShift: shiftId
