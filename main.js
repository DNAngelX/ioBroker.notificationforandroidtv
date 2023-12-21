"use strict";

/*
 * Created with @iobroker/create-adapter v2.5.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");
var adapter = utils.adapter('notificationforandroidtv');
const axios = require('axios');
let dev  = [];

// Load your modules here, e.g.:
//const fs = require("fs");

class Notificationforandroidtv extends utils.Adapter {

	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: "notificationforandroidtv",
		});
		this.on("ready", this.onReady.bind(this));
		this.on("stateChange", this.onStateChange.bind(this));
		// this.on("objectChange", this.onObjectChange.bind(this));
		// this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));
	}

	async writeChannelDataToIoBroker(channelParentPath, id ,channelName, value, channelType, channelRole, createObjectInitally,createObjectInitallyUnit,createObjectInitallyStates,readOnly) {
        if(channelParentPath != null){
            channelParentPath = channelParentPath;
        }
        if(createObjectInitally && createObjectInitallyUnit){
            await this.setObjectNotExistsAsync(channelParentPath + '.' + id, {
                type: 'state',
                common: {
                    name: channelName,
                    type: channelType,
                    role: channelRole,
                    unit: createObjectInitallyUnit,
                    read: true,
                    write: readOnly ? false : true,
                    
                },
                native: {},
            });
        } else if(createObjectInitally && createObjectInitallyStates){
            //createObjectInitallyStates =  {"2": "Entladen", "1": "BLA"}
            await this.setObjectNotExistsAsync(channelParentPath + '.' + id, {
                type: 'state',
                common: {
                    id: id,
                    name: channelName,
                    type: channelType,
                    role: channelRole,
                    states: createObjectInitallyStates,
                    read: true,
                    write: readOnly ? false : true,
                    
                },
                native: {},
            });
        } else if(createObjectInitally){
            await this.setObjectNotExistsAsync(channelParentPath + '.' + id, {
                type: 'state',
                common: {
                	id: id,
                    name: channelName,
                    type: channelType,
                    role: channelRole,
                    read: true,
                    write: readOnly ? false : true,
                    
                },
                native: {},
            });
            await this.setObjectNotExistsAsync(channelParentPath, {
                type: 'channel',
                common: {
                    name: channelParentPath,
                    
                },
                native: {},
            });
        }
        let stateVal = await adapter.getStateAsync(`${channelParentPath}.${id}`);
        stateVal ? stateVal = stateVal.val : '';

        
        if((value != undefined || value != null) && stateVal === null){
        	
    		await this.setStateAsync(channelParentPath + '.' + id, value, true);
        	
        }
    }

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */

	async onReady() {
		// Initialize your adapter here

		const dev = adapter.config.keys;

		if (dev) {
	        for (const key in dev) {

	        	let androidTv = dev[key];
	            
	            
	            
	            //const deviceFolder = 'IP: '+ androidTv;
	            const deviceFolder = androidTv.ip.replaceAll('.', '_');

				

				//let initialCreate =  await adapter.getStatesAsync(deviceFolder) != undefined ? false : true;
				let initialCreate =  true;

				const positions = {
	                0:"BOTTOM_RIGHT",
	                1:"BOTTOM_LEFT",
	                2:"TOP_RIGHT",
	                3:"TOP_LEFT",
	                4:"CENTER"
	            };
	            const transparencies = {
	                0:"Standard",
	                1:"0 %",
	                2:"25 %",
	                3:"50 %",
	                4:"75 %",
	                5:"100 %"
	            };
	            const types = {
	                0:"Standard",
	                1:"ONLY_TITLE",
	                2:"ONLY_ICON"
	            };
	            const bkgcolor = {
	                0:"dirt blue",
	                1:"black",
	                2:"blue",
	                3:"green",
	                4:"red",
	                5:"light blue",
	                6:"turquoise",
	                7:"orange",
	                8:"purple"
	            };
	            const icon = {
	                0:"( i )",
	                1:"/ ! \\",
	                2:"( ! )",
	                3:"( x )",
	                4:"( ? )",
	                5:":-)"
	            };

	            const width = {
	                0:"Standard",
	                1:"very small",
	                2:"small",
	                3:"large",
	                4:"extra large"
	            };

	            await this.writeChannelDataToIoBroker(deviceFolder, 'message', 'Nachricht', '','string','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'title', 'Titel der Nachricht','ioBroker Message','string','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'duration','Anzeigedauer',15, 'number', 'indicator',initialCreate,'s');
		        await this.writeChannelDataToIoBroker(deviceFolder, 'color', 'Farbe','0','string','indicator',initialCreate,null,bkgcolor);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'ip', 'IP Adresse',androidTv.ip,'string','indicator',initialCreate,null,null,true);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'icon', 'Icon wenn iconurl leer',0,'number','indicator',initialCreate,null,icon);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'transparency', 'Transparenz',0,'number','indicator',initialCreate,null,transparencies);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'position','Overlay Position',0, 'number', 'indicator',initialCreate,null,positions);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'type', 'Overlay Type',0,'number', 'indicator',initialCreate,null,types);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'width', 'Image Größe',0,'number', 'indicator',initialCreate,null,width);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'imageurl', 'Bild URL','','string','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'iconurl','Icon URL','','string','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'delete_image','Bild nach senden löschen',false,'boolean','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'delete_icon','Icon nach senden löschen',false,'boolean','indicator',initialCreate);

		        await this.subscribeStates(deviceFolder+'.message');

	        }
	    } else {
	        adapter.log.error('No AndroidTV`s configurated, please add a device');
	    }
	
		// In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
		//this.subscribeStates("testVariable");
		// You can also add a subscription for multiple states. The following line watches all states starting with "lights."
		// this.subscribeStates("lights.*");
		// Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
		// this.subscribeStates("*");

	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...
			// clearInterval(interval1);

			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		
		
		if (state) {
			// The state was changed
			this.notify(id, state);

			adapter.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			adapter.log.info(`state ${id} deleted`);
		}
	}

	
	async notify(id, msg) {

		console.error('Notify fired!');

		const myObjectArray = id.split(".", 3);

		let device = myObjectArray.join('.');

		let title = await adapter.getStateAsync(device + '.title');
		let duration = await adapter.getStateAsync(device + '.duration');
		let position = await adapter.getStateAsync(device + '.position');
		let width = await adapter.getStateAsync(device + '.width');
		let transparency = await adapter.getStateAsync(device + '.transparency');
		let type = await adapter.getStateAsync(device + '.type');
		let color = await adapter.getStateAsync(device + '.color');
		let ip = await adapter.getStateAsync(device + '.ip');
		let icon = await adapter.getStateAsync(device + '.icon');
		let iconurl = await adapter.getStateAsync(device + '.iconurl');
		let imageurl = await adapter.getStateAsync(device + '.imageurl');
		let delete_image = await adapter.getStateAsync(device + '.delete_image');
		let delete_icon = await adapter.getStateAsync(device + '.delete_icon');
		
		
		
		axios.post(`http://${ip.val}:7676
			?msg=`+msg.val.replace(/\n/gi,'<br>')+
			'&title='+title.val+
			'&duration='+duration.val+
			'&position='+position.val+
			'&width='+width.val+
			'&transparency='+transparency.val+
			'&type='+type.val+
			'&bkgcolor='+color.val+
			'&icon='+icon.val+
			'&iconurl='+iconurl.val+
			'&imageurl='+imageurl.val
			,msg
	    )
	    .then(response => {
	    	delete_image.val == true ? this.setStateAsync(device + '.imageurl', '', true) : '';
	    	delete_icon.val == true ? this.setStateAsync(device + '.iconurl', '', true) : '';
	    	
	        console.log(`Notify successful! (${response.status})`);
	    })
	    .catch(error => {
	        console.error(`Notify failed for :${ip}`, error.message);
	    });
	}


}



if (require.main !== module) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<utils.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new Notificationforandroidtv(options);
} else {
	// otherwise start the instance directly
	new Notificationforandroidtv();
}


