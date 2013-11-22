Ext.define('MyApp.store.TreeList', {
    extend: 'Ext.data.TreeStore',
    
    requires: [
        'MyApp.model.TreeList'
    ],
    
    model: 'MyApp.model.TreeList',
	root: {
            text: 'root',
            children: [{
                text: 'Guest',
                iconCls: 'x-user',
                expanded: true,
                children: [{
                    text: 'Papers',
                    leaf: true
                },{
                    text: 'Settings',
                    leaf: true
                }]
            }]
    },
    autoSync: true
});
    

