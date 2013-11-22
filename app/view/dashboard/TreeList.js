Ext.define('MyApp.view.dashboard.TreeList', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.treelist',
    
    requires: [
     'MyApp.model.TreeList',
     'MyApp.store.TreeList'
    ],
    
	title: 'Account',
	iconCls: 'x-account',
    width: 200,
    height: 150,
    store: this.store,
    rootVisible: false,
    renderTo: Ext.getBody(),
 	initComponent: function(){ 
 		this.store = 'TreeList';
		this.callParent(arguments);
    }
    
});
