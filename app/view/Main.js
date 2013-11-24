Ext.define('MyApp.view.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainviewport',
    
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
		'MyApp.view.dashboard.TreeList',
		'MyApp.view.dashboard.DashboardGrid',
        'MyApp.view.main.NorthView',
        'MyApp.view.main.SouthView',
        'MyApp.view.main.announcements'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
    	region: 'north',
    	xtype: 'northview'
    },{
    	region: 'south',
    	xtype: 'southview'
    },{
        region: 'west',
        xtype: 'treelist'
            
    },{
        region: 'east',
        xtype: 'announcements'
            
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
        	xtype: 'dashboardgrid',
        	iconCls: 'x-home'
        }]
    }]
});
