Ext.define('MyApp.store.announcements', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.announcements',

    autoLoad: true,
    autoSync: false,
	proxy: {
                type: 'ajax',
                api: {
                    create  : 'php/Announcements.php?action=insert',
                    read    : 'php/Announcements.php?action=fetchAll',
                    update  : 'php/Announcements.php?action=update',
                    destroy : 'php/Announcements.php?action=delete'
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
