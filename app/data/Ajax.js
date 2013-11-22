/* 
 *  @author landriot
 *  
 *  @class Helix.data.Ajax
 *  @singleton
 *  @markdown
 *  @extends Ext.data.Connection
 *  
 *  A singleton instance of an {@link Ext.data.Connection}. This class
 *  is used to communicate with the server.
 *  
 *  His behavior can be updated like below at Viewport creation:
 *  
 *      Helix.data.Ajax.defaultHeaders = {
 *          'Content-Type': 'application/json', 
 *          'Authorization' : 'Basic ' + Helix.tools.Base64.encode(Helix.data.proxy.username + ':' + Helix.data.proxy.password)
 *      };
 *      
 */
Ext.define('Myapp.data.Ajax', {
    extend: 'Ext.data.Connection',
    singleton: true,
       
    /**
     * @property {Boolean} autoAbort
     * Whether a new request should abort any pending requests.
     */
    autoAbort : false
});