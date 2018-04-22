Template.InsertFormLink.helpers({
    getValue() {
        const value = 'placeholder';
        const data = Template.currentData().data;
        if (data.value != null) {
            value = data.value;
        }

        let messagePathParts = FlowRouter.getRouteName().split('.');
        messagePathParts.pop();
        messagePathParts.splice(1, 0, 'entity');
        messagePathParts = messagePathParts.concat(data.key.replace(/_/g, '.'));

        return TAPi18n.__(messagePathParts.join('.') + 'Values.' + value);
    }
});

Template.InsertFormLink.onCreated(() => {
    const template = Template.instance();
    const data = Template.currentData().data;

    template.key = data.key;
    template.insertForm = data.parentInstance;
});

Template.InsertFormLink.onRendered(() => {});

Template.InsertFormLink.onDestroyed(() => {});

Template.InsertFormLink.events({
    'click .link': (e, template) => {
        template.insertForm.activeField.set(template.key);
    }
});
