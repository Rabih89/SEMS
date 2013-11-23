Ext.define('MyApp.store.DashboardGrid', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.DashboardGrid',

    autoLoad: true,
    autoSync: false,
	proxy: {
                type: 'ajax',
                api: {
                    create  : 'php/Events.php?action=insert',
                    read    : 'php/Events.php?action=fetchAll',
                    update  : 'php/usuarios.php?action=update',
                    destroy : 'php/usuarios.php?action=delete'
                },
                actionMethods: {
                    create  : 'POST',
                    read    : 'POST',
                    update  : 'POST',
                    destroy : 'POST'
                },
                reader: {
                        type: 'json',
                        root: 'data',
                        rootProperty: 'data',
                        successProperty: 'success',
                        messageProperty: 'message'
                },
                writer: {
                        type: 'json',
                        writeAllFields: true,
                        root: 'data',
                        encode: true
                }
        }  
});
