import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { TAPi18n } from 'meteor/tap:i18n';
import objectAssignDeep from 'object-assign-deep';

import { checkPermissions } from '/imports/framework/Functions/Security';
import Permissions from '/imports/framework/Constants/Permissions';
import Users from '/imports/api/users/Users';

import { getExtendedPublisher } from './Functions';

function publisherSearch({ projectId, searchString, limit }) {
  checkPermissions(projectId);

  let rolesObject = {};
  let result = {
    total: 0,
    items: []
  };

  if (typeof searchString != 'string' || searchString == '') {
    return result;
  }

  const regEx = new RegExp(searchString, 'i');

  rolesObject['roles.' + projectId] = {
    $in: Permissions.member
  };

  const cursor = Users.find({
    $and: [
      {
        $or: [
          { _id: regEx },
          { 'profile.lastname': regEx },
          { 'profile.firstname': regEx },
          { 'profile.email': regEx },
          { 'profile.telefon': regEx },
          { username: regEx }
        ]
      },
      rolesObject,
      {
        username: {
          $ne: 'adm'
        }
      }
    ]
  }, {
    fields: {
      'profile.lastname': 1,
      'profile.firstname': 1,
      'profile.email': 1,
      'profile.telefon': 1,
      username: 1,
      roles: 1
    },
    sort: {
      'profile.lastname': 1,
      'profile.firstname': 1,
      username: 1
    },
    limit: limit
  });

  result.total = cursor.count();
  result.items = cursor.fetch();

  return result;
}

function publisherGet({ projectId, userId }) {
  checkPermissions(projectId, userId);

  const publisher = getExtendedPublisher(userId, projectId);
  const project = Projects.findOne(projectId, {
    fields: {
      'tags._id': 1,
      'tags.name': 1
    }
  });

  if (publisher != undefined) {
    publisher.profile.availability = {
      mondays: publisher.profile.availability.mondays.map((x) => { return x.timeslot; }).join(', '),
      tuesdays: publisher.profile.availability.tuesdays.map((x) => { return x.timeslot; }).join(', '),
      wednesdays: publisher.profile.availability.wednesdays.map((x) => { return x.timeslot; }).join(', '),
      thursdays: publisher.profile.availability.thursdays.map((x) => { return x.timeslot; }).join(', '),
      fridays: publisher.profile.availability.fridays.map((x) => { return x.timeslot; }).join(', '),
      saturdays: publisher.profile.availability.saturdays.map((x) => { return x.timeslot; }).join(', '),
      sundays: publisher.profile.availability.sundays.map((x) => { return x.timeslot; }).join(', ')
    };
  }

  const projectRole = Roles.getRolesForUser(publisher, projectId)[0];
  const language = Meteor.user().profile.language;

  publisher.permissions = {
    project: TAPi18n.__('role.' + projectRole, {}, language),
    tags: []
  };

  for (let tag of project.tags) {
    const tagRoles = Roles.getRolesForUser(publisher, tag._id);
    let tagRole = 'nothing';

    if (tagRoles.length > 0) {
      tagRole = tagRoles[0];
    }

    publisher.permissions.tags.push({
      _id: tag._id,
      tag: tag.name,
      role: TAPi18n.__('role.' + tagRole, {}, language)
    });
  }

  delete publisher.roles;

  return publisher;
}

function publisherGetField({ projectId, userId, key }) {
  checkPermissions(projectId, userId);

  let publisher = getExtendedPublisher(userId, projectId);

  if (key == 'permissions_project') {
    return Roles.getRolesForUser(userId, projectId)[0];
  } else if (key.indexOf('_') > -1) {
    for (let property of key.split('_')) {
      if (property in publisher) {
        publisher = publisher[property];
      } else {
        return '';
      }
    }

    return publisher;
  }

  return getExtendedPublisher(userId, projectId)[key];
}

function publisherInsert({ projectId }, publisher) {
  checkPermissions(projectId);

  try {
    let userObj = {};

    for (let property in publisher) {
      let propertyObj = publisher[property];

      for (let part of property.split('_').reverse().entries()) {
        propertyObj = {[part]: propertyObj};
      }

      userObj = objectAssignDeep(userObj, propertyObj);
    }

    userObj.roles = {
      [projectId]: ['member']
    };

    Users.persistence.insert(userObj);
    return publisher._id;
  } catch (e) {
    throw new Meteor.Error(e);
  }
}

function publisherUpdate({ projectId, userId }, key, value) {
  checkPermissions(projectId, userId);

  if (key == 'permissions_project') {
    if (Permissions.member.includes(value)) {
      Roles.removeUsersFromRoles(userId, Permissions.member, projectId);
      Roles.setUserRoles(userId, value, projectId);
      return true;
    }

    throw new Meteor.Error("Permission type not supported");
  }

  try {
    Users.persistence.update(userId, key.replace(/_/g, '.'), value);
  } catch (e) {
    throw new Meteor.Error(e);
  }
}

export {
  publisherSearch,
  publisherGet,
  publisherGetField,
  publisherInsert,
  publisherUpdate
};
