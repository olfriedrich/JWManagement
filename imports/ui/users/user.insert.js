import Gender from '/imports/api/dropdowns/Gender.js';
import Pioneer from '/imports/api/dropdowns/Pioneer.js';
import Privilege from '/imports/api/dropdowns/Privilege.js';

Template['user.insert'].helpers({
    data() {
        return {
            backLink: 'user.search',
            entityKey: 'userId',
            fields: [{
                key: 'profile_firstname'
            }, {
                key: 'profile_lastname'
            }, {
                key: 'profile_email'
            }, {
                key: 'profile_telefon'
            }, {
                key: 'username'
            }, {
                key: 'profile_gender',
                type: 'dropdown',
                allowedValues: Gender.allowedValues
            }, {
                key: 'profile_bdate',
                type: 'date',
                format: 'YYYYDDD'
            }, {
                key: 'profile_pioneer',
                type: 'dropdown',
                allowedValues: Pioneer.allowedValues
            }, {
                key: 'profile_privilege',
                type: 'dropdown',
                allowedValues: Privilege.allowedValues
            }, {
                key: 'profile_languages'
            }]
        }
    }
});
