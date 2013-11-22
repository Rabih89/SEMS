/*
 * South view
 * Toolbar that contains the PLM version and the Error counter
 */
Ext.define('MyApp.view.main.SouthView',{
    extend:'Ext.panel.Panel',
    alias: 'widget.southview',
	
    height: 35,
    frame: true,
    
    initComponent: function(){
        this.tbar = ['->',{
            xtype: 'tbtext',
            text:'<center>Copy Right Rabih G. El-Zahr '+'@2012-2013</center>',
            style:'top:0!important'
        },'->',{
            xtype: 'button',
            iconCls: 'x-icon-error',
            itemId: 'counts',
            text: '',
            hidden:true
        }];
    
        this.callParent(arguments); 
    }
});
