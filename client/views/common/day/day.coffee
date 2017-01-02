Template.day.helpers

	today: -> 'today' if @date == parseInt(moment(new Date).format('YYYYDDDD'))

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

Template.day.events

	'click #addShift': (e) ->
		projectId = FlowRouter.getParam('projectId')
		tagId = FlowRouter.getQueryParam('tagId') || FlowRouter.getQueryParam('showTags').split(',')[0]
		tagName = ''
		date = $(e.target).closest('.day-wrapper').attr('date')
		day = $(e.target).closest('.day-wrapper').attr('day')
		start = $(e.target).closest('.add-shift').prev('.separator').prev('.shift').attr('end') || 1000
		weekId = FlowRouter.getQueryParam('weekId')
		project = Projects.findOne projectId, fields: tags: 1

		if project?
			for tag in project.tags
				if tag._id == tagId
					tagName = tag.name

			if date?
				Meteor.call 'addShift', projectId, tagId, tagName, parseInt(date), parseInt(start), (e, shiftId) ->
					if !e && shiftId
						wrs -> FlowRouter.setQueryParams editShift: shiftId
			else if weekId?
				Meteor.call 'addTemplateShift', projectId, weekId, tagId, tagName, day, (e, shiftId) ->
					if !e && shiftId
						wrs -> FlowRouter.setQueryParams editShift: shiftId
			else
				throw new Meteor.Error 500, 'Not enough data provided'

	'click #removeAll': (e) ->
		shifts = @shifts

		swalYesNo
			swal: 'delete.allShifts'
			doConfirm: ->
				for shift in shifts
					Meteor.call 'removeShift', shift, handleError
