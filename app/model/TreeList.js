Ext.define('MyApp.model.TreeList', {
    extend: 'Ext.data.TreeModel',
    
    requires: [
    	'MyApp.data.proxy.OData'
    ],
	fields: ['text'],
});
