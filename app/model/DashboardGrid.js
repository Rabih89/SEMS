Ext.define('MyApp.model.DashboardGrid', {
    extend: 'Ext.data.Model',
    
    requires: [
    	'MyApp.data.proxy.OData'
    ],
    fields:['event', 'startDate', 'endDate']
});
