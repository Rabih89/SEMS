//announcements
Ext.define('MyApp.view.main.announcements', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.announcements',
    
    requires: [
     //'MyApp.model.announcements',
     //'MyApp.store.announcements'
    ],
    
	title: 'Announcements',
	iconCls: 'x-announcement',
    width: 200,
    height: 150,
    //store: this.store,
    initComponent: function(){ 
    	this.columns = [{
    	    text: 'Announcement', 
            dataIndex: 'announcement' ,
            flex: 1
    	},{
    	    text: 'User', 
            dataIndex: 'user' 
    	}]
 		//this.store = 'TreeList';
		this.callParent(arguments);
    }
    
});
