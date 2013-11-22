Ext.define('MyApp.data.proxy.OData', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.odata',

    pageParam: undefined,
    startParam: '$skip',
    limitParam: '$top',
    sortParam: '$orderby',
    
    requires: [
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],
    
    listeners: {
        exception: function(proxy, response, operation, eOpts){
            //Send an event 'communicationerror' that will be handled by the error handler
            Helix.tools.GlobalEventManager.fireEvent('communicationerror', response);
        }
    },

    /* Allow to add the username/password after login in al headers */
    doRequest: function(operation, callback, scope) {
        this.headers = 	{
            'Accept': 'application/json',
            'Authorization' : 'Basic ' + Helix.tools.Base64.encode(Helix.data.proxy.username + ':' + Helix.data.proxy.password)
       };
       return this.callParent(arguments);
    },

 	    
    actionMethods: {
        create: 'POST',
        read: 'GET',
        update: 'PUT',
        destroy: 'DELETE'
    },
    reader: {
        type: 'json',
        root: 'Items',
        totalProperty: 'Count'
    },
    headers: {
    	'Accept': 'application/json'
    },    
    noCache: false,
        
    /* Builds URL in the form Entity(Id), for example http://localhost/Service.svc/Customers(5) */
    buildUrl: function (request) {

        var me = this,
            operation = request.operation,
            records = operation.records || [],
            record = records[0],
            url = me.getUrl(request),
            id = record ? record.data.id : operation.id;
        if (id) {
            if (url.match(/\/$/)) {
                url = url.substring(0, url.length - 1);
            }
            
            url = url + '/' + id ;
        }

        request.url = url ;
        if (request.action == 'read') {
            request.params = Ext.apply(request.params, {'$inlinecount': 'allpages'});
        }		
        else if(request.action == 'create' && record.data.parentId){
            request.params = Ext.apply(request.params, {'parentId':record.data.parentId});
        }
		   
        return me.callParent(arguments);
    },        
        
    /* Returns a string of comma-separated fields from sortes with optional 'desc' directive */
    encodeSorters: function (sorters) {
        var min = [],
            length = sorters.length,
            i = 0;

        for (; i < length; i++) {
            min[i] = sorters[i].property;
            if (sorters[i].direction.toLowerCase() == 'desc') {
                min[i] += ' desc';
            }
        }

        return min.join(',');
    }
});