Template.reports.helpers

	getProjectId: -> FlowRouter.getParam('projectId')

	getMonth: -> FlowRouter.getQueryParam('month')

	readyOrDisabled: -> unless ShiftSubs.ready() then 'disabled'

Template.reports.onRendered ->

	$('.animated').removeClass('animated').addClass('skipping')

Template.reports.onCreated ->

	self = this
	projectId = FlowRouter.getParam('projectId')
	month = FlowRouter.getQueryParam('month')

	if !month?
		wrs -> FlowRouter.setQueryParams month: moment().format('YYYY[M]MM')
		month = moment().format('YYYY[M]MM')

	Session.set 'subscribe', month
	@autorun ->
		if Session.get 'subscribe'
			ShiftSubs.subscribe 'reports', projectId, Session.get 'subscribe'
			Session.set 'subscribe', false

Template.reports.events

	'click #prevMonth': ->
		prevMonth = moment(FlowRouter.getQueryParam('month'), 'YYYY[M]MM').subtract(1, 'M').format('YYYY[M]MM')
		wrs -> FlowRouter.setQueryParams month: prevMonth
		Session.set 'subscribe', prevMonth

	'click #nextMonth': ->
		nextMonth = moment(FlowRouter.getQueryParam('month'), 'YYYY[M]MM').add(1, 'M').format('YYYY[M]MM')
		wrs -> FlowRouter.setQueryParams month: nextMonth
		Session.set 'subscribe', nextMonth

	'click #showMissing': -> false

	'click #showExperiences': (e) ->
		type = $(e.target).attr('type')

	'click #exportReports': ->
		projectId = FlowRouter.getParam('projectId')
		month = FlowRouter.getQueryParam('month')

		if month?
			csvContent = 'data:text/csv;charset=utf-8,' + '\uFEFF'
			head = []
			[
				'modal.shiftReport.date'
				'shifts.start'
				'shifts.end'
				'modal.editShift.team'
				'reports.meetingStart'
				'reports.meetingEnd'
				'reports.place'
				'modal.shiftReport.teamleader'
				'reports.participants'
				'modal.shiftReport.texts'
				'modal.shiftReport.speaks'
				'modal.shiftReport.videos'
				'modal.shiftReport.returnVisits'
				'modal.shiftReport.bibleStudies'
				'modal.shiftReport.time'
				'modal.shiftReport.trolleysFilled'
				'modal.shiftReport.neatnessLast'
				'modal.shiftReport.expRoute'
				'modal.shiftReport.expGood'
				'modal.shiftReport.expProblems'
				'modal.shiftReport.publications'
			].map (c) -> head.push TAPi18n.__(c)

			csvContent += head.join(';') + '\r\n'

			firstDay = parseInt moment(month, 'YYYY[M]MM').format('YYYYDDDD')
			lastDay = parseInt moment(month, 'YYYY[M]MM').endOf('month').format('YYYYDDDD')

			shifts = Shifts.find
				projectId: projectId
				$and: [
					date: $gte: firstDay
				,
					date: $lte: lastDay
				]
			,
				sort: date: 1, start: 1, end: 1

			for shift in shifts.fetch()
				for team in shift.teams
					row = []
					row.push moment(shift.date, 'YYYYDDDD').format('YYYY-MM-DD')
					row.push moment(shift.start, 'Hmm').format('HH:mm')
					row.push moment(shift.end, 'Hmm').format('HH:mm')
					row.push team.name
					row.push team.meetingStart?.name
					row.push team.meetingEnd?.name
					row.push team.place?.name
					row.push team.participants.filter((p) -> p.thisTeamleader)[0]?.name.trim()
					row.push team.participants.filter((p) -> !p.thisTeamleader).map((p) ->
						if p.state in ['sick', 'missing']
							p.name.trim() + ' (' + TAPi18n.__('modal.shiftReport.' + p.state) + ')'
						else
							p.name.trim()
					).join(', ')

					if team.report? && team.report.items?
						row.push team.report.texts, team.report.speaks, team.report.videos, team.report.returnVisits, team.report.bibleStudies, team.report.hours, team.report.filled, team.report.neatness

						route = team.report.experiences.route || ''
						good = team.report.experiences.good || ''
						problems = team.report.experiences.problems || ''

						row.push route.replace(/(?:\\[rn]|[\r\n]+)+/g, ' ')
						row.push good.replace(/(?:\\[rn]|[\r\n]+)+/g, ' ')
						row.push problems.replace(/(?:\\[rn]|[\r\n]+)+/g, ' ')

						for item in team.report.items
							row.push item.count + ' ' + item.short + '-' + item.language

					csvContent += row.join(';') + '\r\n'

			encodedUri = encodeURI(csvContent)
			link = document.createElement('a')
			link.setAttribute('href', encodedUri)
			link.setAttribute('target', 'blank')
			link.setAttribute('download', 'reports.csv')
			document.body.appendChild(link)
			link.click()
