Ext.define('MyApp.view.signup.Window', {
	extend: 'Ext.window.Window',
	alias: 'widget.signupwindow',
	
	requires: [
		'Ext.form.Panel'
	],
	
	title: 'SEMS Signup',
	iconCls: 'x-signup',
	closable: true,
    height: 550,
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
                xtype: 'textfield',
                name : 'confirmpassword',
                fieldLabel: 'Confirm Password',
                inputType: 'password',
                enableKeyEvents: true,
                allowBlank: false
            },{
            	xtype: 'combo',
            	fieldLabel: 'Title',
            	queryMode: 'local',
            	store: ['Dr.','Prof.','Mr.','Mrs'],
            	autoSelect:true,
       			forceSelection:true
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
            	xtype: 'combo',
            	fieldLabel: 'Country',
            	queryMode: 'local',
            	store: ['United States','Canada','Brasil','France','Germany','China']
            },{
            	xtype: 'combo',
            	fieldLabel: 'Organization',
            	queryMode: 'local',
            	store: ['Concordia University','McGill University','ETS','Uqam']
            },{
                xtype: 'textfield',
                name : 'department',
                fieldLabel: 'Department',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'address',
                fieldLabel: 'Address',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'city',
                fieldLabel: 'City',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'provencestate',
                fieldLabel: 'Provence/State',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'postalcode',
                fieldLabel: 'Postal Code',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'email',
                fieldLabel: 'E-mail',
                enableKeyEvents: true,
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'confirmemail',
                fieldLabel: 'Confirm E-mail',
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
