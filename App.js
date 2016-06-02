Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	
	launch: function() {
		console.log('Our First App Woot!!');
		this._loadData();
	},
	
	// load data
	_loadData: function() {
		var mystore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(myStore, myData, success) {
					console.log('got data', myStore, myData, success);
					this._loadGrid(myStore);
				},
				scope: this
			},
			fetch: ['FormattedID', 'Name', 'ScheduleState']
		});
	},
	
	//create and show a grid of given stories
	_loadGrid: function (myStoryStore){
		var myGrid = Ext.create('Rally.ui.grid.Grid', {
			store: myStoryStore,
			columnCfgs: ['FormattedID', 'Name', 'ScheduleState']
		});
		
		this.add(myGrid);
		console.log("What is this? ", this);
	}
});
