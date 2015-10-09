Meteor.publish('showPanels', () => { return Panels.find({}) });
Meteor.publish('showTopBarFilters', () => { return TopBarFilters.find({}) });