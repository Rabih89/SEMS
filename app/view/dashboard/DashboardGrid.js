Ext.define('MyApp.view.dashboard.DashboardGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.dashboardgrid',
    
    requires: [
      'MyApp.store.DashboardGrid'
    ],
    
	title: 'Dashboard',

    //store: Ext.StoreMgr.lookup('DashboardGrid'),//store: 'DashboardGrid',
    initComponent: function(){ 
		this.dockedItems = [{
        	xtype: 'toolbar',
    		dock: 'top',
    		items: [{	xtype: 'button', 
        		  	  	text: 'Add Event', 
        		  	  	iconCls: 'x-add',
        		  	  	disabled: true
        			}, {
        		  	  	xtype: 'button', 
        		  	  	text: 'Delete Event', 
        		  	  	iconCls: 'x-delete',
        		  	  	disabled: true	
        			}]
        }];
 		this.store = 'DashboardGrid';
 		this.columns = [{ 
        	text: 'Event', 
            dataIndex: 'event',
            flex: 1
            },{ 
            text: 'Start Date',  
            dataIndex: 'startDate'
            },{ 
            text: 'End Date', 
            dataIndex: 'endDate'
        }];
		this.callParent(arguments);
    }
});
