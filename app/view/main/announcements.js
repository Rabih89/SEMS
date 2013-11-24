//announcements
Ext.define('MyApp.view.main.announcements', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.announcements',
    
    requires: [
    	'MyApp.store.announcements'
    ],
    
	title: 'Announcements',
	iconCls: 'x-announcement',
    width: 350,
    height: 150,
    store: 'announcements',
    initComponent: function(){
    	this.dockedItems = [{ 
        	xtype: 'pagingtoolbar',
            store: 'announcements',
            dock: 'bottom',
            displayInfo: true
        }];
    	this.columns = [{
    	    text: 'User', 
            dataIndex: 'User_idUser'
    	},{
    	    text: 'Announcement', 
            dataIndex: 'Description',
        	flex: 1
    	}];
		this.callParent(arguments);
    }
    
});
