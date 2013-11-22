Ext.define('MyApp.view.signup.Window', {
	extend: 'Ext.window.Window',
	alias: 'widget.signupwindow',
	
	requires: [
		'Ext.form.Panel'
	],
	
	title: 'SEMS Signup',
	iconCls: 'x-signup',
	
	closable: true,
    height: 400,
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
            },{
            	xtype: 'combo',
            	fieldLabel: 'Title',
            	queryMode: 'local',
            	store: Ext.create('Ext.data.Store', {
    				fields: ['name', 'value'],
    				data : [
        				{"name":"Mr.", "value":"Mr"},
        				{"name":"Mrs., "value":"Mrs"},
 				   ]
				})
            },{
                xtype: 'textfield',
                name : 'confirmpassword',
                fieldLabel: 'Confirm Password',
                inputType: 'confrimpassword',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'firstname',
                fieldLabel: 'First Name',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'middlename',
                fieldLabel: 'Middle Name',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'lastname',
                fieldLabel: 'LastName',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'department',
                fieldLabel: 'Department',
                enableKeyEvents: true,
                allowBlank: false
            }],
		buttons : [{
                    text: 'signup',
                    action: 'signupClicked',
                    disabled: true,
                    formBind: true
                }]
        }    
});
