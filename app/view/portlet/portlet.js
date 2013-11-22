Ext.define('MyApp.view.portlet.portlet' ,{
    extend: 'Ext.panel.Panel',
	alias: 'widget.homePortlet',
	
	requires: [
	//add requirements 
	],	
	
	title: 'Timeline',
	//iconCls:'x-icon-information',
	closable:false,
	height: 250,
	initComponent: function() {
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
            }]
        });
        
        this.items.add(chart);
	}
});
