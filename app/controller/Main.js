Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'MyApp.view.login.Window',
        'MyApp.view.signup.Window',
        'MyApp.view.Viewport',
        'MyApp.view.Main',
        'MyApp.view.dashboard.TreeList',
        'MyApp.view.dashboard.DashboardGrid',
        'Ext.data.JsonStore',
        'Ext.chart.Chart',
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.ux.GroupTabPanel',
        'Ext.layout.container.Form',
        'MyApp.view.main.NorthView'
    ],
    
    views: [
    	'login.Window',
        'Viewport',
        'Main',
        'dashboard.TreeList',
        'dashboard.DashboardGrid'
    ],
    
    stores: [
    	'TreeList',
    	'DashboardGrid'
    ],
    
    models: [
    	'TreeList',
    	'DashboardGrid'
    ],
    
    refs: [
    {
      ref: "loginWindow",
      selector: "loginwindow"
    }, {
      ref: "tabPanel",
      selector: "tabpanel"
    }, {
      ref: "treeList",
      selector: "treelist"
    }, {
      ref: "dashboardGrid",
      selector: "dashboardgrid"
    }
    
    ],
    
    init: function(){
        //console.log('Initialized Users! This happens before the Application launch function is called');
        this.control({
    		 'mainviewport': {
    		 	render: this.onShowViewport
    		 },
    		 'dashboardGrid': {
    		 	cellclick: this.onDashboardGridClick
    		 },
    		 'loginwindow button[action=login]': {
                click: this.onLoginClick
            },
             'button[itemId=newUserForm]': {
             	click: this.onNewUserForm
             }, 
             'northview [action=login]': {
             	click: this.onLogin
             },
             'northview [action=signup]': {
             	click: this.onSignup
             }
        }); 
    },
    onShowViewport: function(){
    	/*console.log(dashboardStore);
    	var myData = {'items':[
                   { 'user': 'Lisa',  "item":"MacBook Pro 13", "bid":"732.11$"  },
                   { 'user': 'Bart',  "item":"Galaxy S4",  "bid":"510.33$" },
                   { 'user': 'Homer', "item":"PlayStation 3",  "bid":"203.25$"  },
                   { 'user': 'Marge', "item":"GoPro HD Camera", "bid":"49.33"  }
            ]};
    	dashboardStore.loadData(myData);*/
    	    	    	
    	/*var myStore = Ext.create('Ext.data.Store', {
            storeId:'simpsonsStore',
            fields:['name', 'email', 'phone'],
            data:{'items':[
                   { 'user': 'Lisa',  "item":"MacBook Pro 13", "bid":"732.11$"  },
                   { 'user': 'Bart',  "item":"Galaxy S4",  "bid":"510.33$" },
                   { 'user': 'Homer', "item":"PlayStation 3",  "bid":"203.25$"  },
                   { 'user': 'Marge', "item":"GoPro HD Camera", "bid":"49.33"  }
            ]},
            proxy: {
             type: 'memory',
             reader: {
             type: 'json',
             root: 'items'
            }
          }
        }); */

    	//Ext.widget('loginwindow');
    	var chart = Ext.create('Ext.chart.Chart', {
            animate: true,
            shadow: true,
            store: Ext.create('Ext.data.JsonStore', {
            		fields: ['name', 'data'], 
                    data: [{
                        'name': 'project one',
                        'data': 30
                    }, {
                        'name': 'project two',
                        'data': 77
                    }, {
                        'name': 'project three',
                        'data': 55
                    }, {
                        'name': 'project four',
                        'data': 20
                    }, {
                        'name': 'project five',
                        'data': 100
                    }]
                }),
            axes: [{
                type: 'Numeric',
                position: 'bottom',
                fields: ['data'],
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: 'Progress',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'left',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            background: {
              gradient: {
                id: 'backgroundGradient',
                angle: 45,
                stops: {
                  0: {
                    color: '#ffffff'
                  },
                  100: {
                    color: '#eaf1f8'
                  }
                }
              }
            },
            series: [{
                type: 'bar',
                axis: 'bottom',
                highlight: true,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data') + ' views');
                  }
                },
                label: {
                  display: 'insideEnd',
                    field: 'data',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                  'text-anchor': 'middle'
                },
                xField: 'name',
                yField: ['data']
            }],
            tbar: [{
            text: 'Save Chart',
            handler: function() {
                Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice){
                    if(choice == 'yes'){
                        chart.save({
                            type: 'image/png'
                        });
                    }
                });
            }
          }]
        });
        /*
        console.log(chart);
        
        var win = Ext.create('Ext.window.Window', {
        width: 600,
        height: 400,
        minHeight: 400,
        minWidth: 550,
        hidden: false,
        maximizable: true,
        title: 'Bar Chart',
        autoShow: true,
        layout: 'fit',
        tbar: [{
            text: 'Save Chart',
            handler: function() {
                Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice){
                    if(choice == 'yes'){
                        chart.save({
                            type: 'image/png'
                        });
                    }
                });
            }
        }, {
            text: 'Reload Data',
            handler: function() {
                // Add a short delay to prevent fast sequential clicks
                console.log('reloading...');
            }
        }],
        items: chart
    });*/
    var Tabs = this.getTabPanel();//Ext.create('Ext.ux.GroupTabPanel');
    var newTab = Ext.create('Ext.panel.Panel', {
    	title:'Chart',
     	items: chart,
     	closable: true,
    	layout: 'fit'
    	
    });
    Tabs.add(newTab);
    //Tabs.setActiveTab(newTab);
    var form = Ext.create('Ext.form.Panel',{
    	title: 'User Profile',
    	layout: 'form',
    	renderTo: Ext.getBody(),
    	bodyPadding: 5,
    	items: [{
    		fieldLabel: 'Username',
    		xtype: 'textfield',
    		defaultValue: 'Username'
    	},{
    		fieldLabel: 'Password',
    		xtype: 'textfield'
    	},{
    		fieldLabel: 'E-mail Address',
    		xtype: 'textfield'
    	},{
    		fieldLabel: 'Phone',
    		xtype: 'textfield'
    	},{
    		fieldLabel: 'Postal Code',
    		xtype: 'textfield'
    	}, {
    		text: 'Update Profile',
    		xtype: 'button',
    		itemId: 'newUserForm'
    	}]
    });
    
    var addNewTab = Ext.create('Ext.panel.Panel', {
    	title: 'Profile',
    	closable: true,
    	items: form
    });
    Tabs.add(addNewTab);
	this.addNewTab();    	
    },
    
    addNewTab: function () {
    	
    },
    onLogin: function() {
    	Ext.widget('loginwindow');
    },
    onSignup: function() {
    	Ext.widget('signupwindow');
    },
    onLoginClick: function(){
		var loginwindow = this.getLoginWindow();
        var username = loginwindow.down('textfield[name=username]').getValue();
        var password = loginwindow.down('textfield[name=password]').getValue();
		console.log(username);
		console.log(password);
		Ext.Ajax.request({
			url: 'http://localhost:8888/IMSystem/'+'?'+username+'+'+password,
			success: function(response, opts) {
		       console.log('success');
		       loginwindow.close();
			},	
			failure: function(response, opts) {
			       			Ext.MessageBox.show({
					           title: 'Not authorized',
					           msg: 'Your not authorized to access the application with this login/password',
					           buttons: Ext.MessageBox.OK,
					           scope : this,
					           fn: this.resetPassword,
					           icon: Ext.MessageBox.ERROR
					       });
		    }
	       });  
    },
    onNewUserForm: function () {
    	console.log('New user updated!');
    },
    
    onDashboardGridClick: function () {
    	console.log('Grid click');
    }
     
});
