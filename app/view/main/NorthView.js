/*
 * North view
 */
Ext.define('MyApp.view.main.NorthView' ,{
	extend:'Ext.panel.Panel',
	alias: 'widget.northview',

	requires:[
	'Ext.form.field.Text',
	'Ext.toolbar.TextItem',
	'Ext.form.field.Display'
	],

	frame: true,
	height: 50,
	
	
    initComponent: function(){
        this.tbar = [{
            xtype: 'tbtext',
            text:'<div style="height:18px;width:120px;background: url(\'images/icons/logo.png\')" align="center"></div>'
        }, {
            xtype: 'displayfield',
            labelSeparator: '',
            labelWidth: 250,
            style:'font-weight:bold;font-size:16px important!;'
        }, '->',{
            xtype: 'textfield',
            emptyText: 'Global Search',
            itemId: 'search',
            width: '22%',
            height: 25,
            hideLabel: true,
            iconCls: 'x-search',
            enableKeyEvents: true,
            onTriggerClick: function() {
                this.fireEvent('click',this);	
            }
        }, '->',{
            xtype: 'button',
            text: 'Guest',
            //text: Helix.data.proxy.resource.name,
            iconCls: 'x-user',
            menu: [{
                text: 'Sign-in',
                action: 'login',
                iconCls: 'x-logout'		
            }, {
                text: 'Sign-up',
                action: 'signup',
                iconCls: 'x-signup'		
            }, {		
                text: 'Settings',
                itemId: 'settings',
                iconCls: 'x-settings',
                menu:[{
                        text: 'E-mail',
                        action: 'email',
                        iconCls: 'x-email'
                },{
                        text: 'Change password',
                        itemdId:'changepassword',
                        action: 'changepassword',
                        iconCls: 'x-password'
                },{
                        text: 'Invite a new user',
                        itemdId:'invitenewuser',
                        action: 'invitenewuserwindow',
                        iconCls: 'x-invite'
                }
               ]
            }]
        }];       
        this.callParent(arguments);        
    }  
});
