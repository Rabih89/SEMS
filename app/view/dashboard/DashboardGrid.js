Ext.define('MyApp.view.dashboard.DashboardGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.dashboardgrid',
    
    requires: [
      'MyApp.store.DashboardGrid',
      'Ext.toolbar.Paging'
    ],
    
	title: 'Dashboard',
	store: 'DashboardGrid',

    initComponent: function(){ 
	this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{	xtype: 'button', 
       	  	  	text: 'Add Event', 
     	  	  	iconCls: 'x-add',
      	  	  	itemId: 'addEvent',
     		    	disabled: false
                    }, {
        		xtype: 'button', 
        		text: 'Edit Event', 
        		iconCls: 'x-edit',
        		itemId: 'editEvent',
        		disabled: true	
                    }, {
        		xtype: 'button', 
        		text: 'Delete Event', 
        		iconCls: 'x-delete',
        		itemId: 'deleteEvent',
        		disabled: true	
            }]
        }, {
        	xtype: 'pagingtoolbar',
            store: 'DashboardGrid',
            dock: 'bottom',
            displayInfo: true
        }];

 		this.columns = [{ 
        	text: 'Event', 
            dataIndex: 'Name',
            flex: 1
            }, { 
        	text: 'News', 
            dataIndex: 'News',
            flex: 1
            },{ 
        	text: 'id', 
            dataIndex: 'idEvent'
            },{
            text: 'location',
            dataIndex: 'Location'
            },{ 
            text: 'Start Date',  
            dataIndex: 'StartDate'
            },{ 
            text: 'End Date', 
            dataIndex: 'EndDate'
        }];
		this.callParent(arguments);
    }
});
