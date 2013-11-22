Ext.define('MyApp.view.login.Window', {
	extend: 'Ext.window.Window',
	alias: 'widget.loginwindow',
	
	requires: [
		'Ext.form.Panel'
	],
	
	title: 'SEMS login',
	iconCls: 'x-user',
	
	closable: true,
    height: 200,
    width: 400,
    modal: true,
    autoShow: true,	
    layout: 'fit',
    items: {  
        xtype: 'form',
        defaults: {
	        anchor: '100%'
	    },
        bodyPadding: 15,
        items: [{
                xtype: 'textfield',
                name : 'username',
                fieldLabel: 'Username',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'password',
                fieldLabel: 'Password',
                inputType: 'password',
                enableKeyEvents: true,
                allowBlank: false
            }],
		buttons : [{
                    text: 'Login',
                    action: 'login',
                    disabled: true,
                    formBind: true
                }]
        }    
});
