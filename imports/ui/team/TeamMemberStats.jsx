import React, { Component } from 'react'
import i18next from 'i18next'

export default class TeamMemberStats extends Component {
  render () {
    const stats = UserStatistics.findOne(this.props.userId)

    if (!stats) {
      return <i className='fa fa-spinner fa-pulse' />
    }

    const dayStats = `${i18next.t('period.d')}:${stats.countDayApproved}/${stats.countDayOverall}`
    const weekStats = `${i18next.t('period.w')}:${stats.countWeekApproved}/${stats.countWeekOverall}`
    const fourWeeksStats = `${i18next.t('period.4w')}:${stats.countWeeksApproved}/${stats.countWeeksOverall}`

    return ` (${stats.congregation}/${stats.privileges}) ${dayStats} ${weekStats} ${fourWeeksStats}`
  }
}
