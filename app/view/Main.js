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
        	iconCls: 'x-home',
            /*title: 'Dashboard',
            xtype: 'grid',
            columns: [
                { text: 'User', dataIndex: 'user' },
                { text: 'Item',  dataIndex: 'item', flex: 1 },
                { text: 'Current Bid', dataIndex: 'bid'},
            ],*/
            //store: 'TreeList',
            /*store: Ext.create('Ext.data.Store', {
            storeId:'simpsonsStore',
            fields:['user', 'item', 'bid'],
            data:{'items':[
                   { 'user': 'Lisa',  "item":"MacBook Pro 13", "bid":"732.11$"  },
                   { 'user': 'Bart',  "item":"Galaxy S4",  "bid":"510.33$" },
                   { 'user': 'Homer', "item":"PlayStation 3",  "bid":"203.25$"  },
                   { 'user': 'Marge', "item":"GoPro HD Camera", "bid":"49.33"  }
            ]},
            proxy: {
             type: 'memory',
             reader: {
             type: 'json',
             root: 'items'
            }
          }
        })*/
        }]
    }]
});
