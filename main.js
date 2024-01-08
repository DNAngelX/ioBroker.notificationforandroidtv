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
            await this.setObjectNotExistsAsync(channelParentPath + '.' + id, {
                type: 'state',
                common: {
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
                    name: channelName,
                    type: channelType,
                    role: channelRole,
                    read: true,
                    write: readOnly ? false : true,
                    
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
	            const deviceName = androidTv.name;

				

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
	                0:"neutral blue",
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

	            await this.setObjectNotExistsAsync(deviceFolder, {
	                type: 'channel',
	                common: {
	                    name: deviceName,
	                    
	                },
	                native: {},
	            });

	            await this.writeChannelDataToIoBroker(deviceFolder, 'message', {
																			  "en": "Message",
																			  "de": "Nachricht",
																			  "ru": "Сообщение",
																			  "pt": "Mensagem",
																			  "nl": "Bericht",
																			  "fr": "Message",
																			  "it": "Messaggio",
																			  "es": "Mensaje",
																			  "pl": "Message",
																			  "uk": "Новини",
																			  "zh-cn": "导 言"
																			}, '','string','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'title', {
																			  "en": "Message Title",
																			  "de": "Nachricht Titel",
																			  "ru": "Название сообщения",
																			  "pt": "Título da Mensagem",
																			  "nl": "Bericht Tit",
																			  "fr": "Titre du message",
																			  "it": "Titolo del messaggio",
																			  "es": "Título del mensaje",
																			  "pl": "Tytuł",
																			  "uk": "Назва повідомлення",
																			  "zh-cn": "标题"
																			},'ioBroker Message','string','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'duration',{
																			  "en": "Display duration",
																			  "de": "Anzeigedauer",
																			  "ru": "Продолжительность дисплея",
																			  "pt": "Duração da exposição",
																			  "nl": "Vertaling:",
																			  "fr": "Durée d ' affichage",
																			  "it": "Durata dell'esposizione",
																			  "es": "Duración de la pantalla",
																			  "pl": "Czas trwania gry",
																			  "uk": "Тривалість відображення",
																			  "zh-cn": "A. 期限"
																			},15, 'number', 'indicator',initialCreate,'s');
		        await this.writeChannelDataToIoBroker(deviceFolder, 'color', {
																			  "en": "Color",
																			  "de": "Farbe",
																			  "ru": "Цвет",
																			  "pt": "Cor",
																			  "nl": "Color",
																			  "fr": "Couleur",
																			  "it": "Colore",
																			  "es": "Color",
																			  "pl": "Color",
																			  "uk": "Колір",
																			  "zh-cn": "科 法 律"
																			},'8','string','indicator',initialCreate,null,bkgcolor);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'ip', {
																			  "en": "IP Address",
																			  "de": "IP-Adresse",
																			  "ru": "IP адрес",
																			  "pt": "Endereço IP",
																			  "nl": "IP Addres",
																			  "fr": "Adresse IP",
																			  "it": "Indirizzo IP",
																			  "es": "Dirección IP",
																			  "pl": "IP Address",
																			  "uk": "IP-адреса",
																			  "zh-cn": "IP地址"
																			},androidTv.ip,'string','indicator',initialCreate,null,null,true);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'icon', {
																			  "en": "Icon if iconurl empty",
																			  "de": "Icon, wenn iconurl leer ist",
																			  "ru": "Икона, если iconurl пуст",
																			  "pt": "Ícone se iconurl vazio",
																			  "nl": "Icon als iconurle leeg",
																			  "fr": "Icon si iconurl vide",
																			  "it": "Icona se iconurl vuoto",
																			  "es": "Icono si iconoruro vacío",
																			  "pl": "Icon jeśli ikonur pusty",
																			  "uk": "Ікона під час іконопису",
																			  "zh-cn": "Iconurl空"
																			},0,'number','indicator',initialCreate,null,icon);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'transparency', {
																			  "en": "Transparency",
																			  "de": "Transparenz",
																			  "ru": "Прозрачность",
																			  "pt": "Transparência",
																			  "nl": "Vertaling:",
																			  "fr": "Transparence",
																			  "it": "Trasparenza",
																			  "es": "Transparencia",
																			  "pl": "Przejrzystość",
																			  "uk": "Прозорість",
																			  "zh-cn": "透明度"
																			},0,'number','indicator',initialCreate,null,transparencies);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'position',{
																			  "en": "Overlay Position",
																			  "de": "Overlay Position",
																			  "ru": "Overlay позиция",
																			  "pt": "Posição de sobreposição",
																			  "nl": "Overlay Position",
																			  "fr": "Position surmontée",
																			  "it": "Posizione di sovrapposizione",
																			  "es": "Posición de superposición",
																			  "pl": "Overlay",
																			  "uk": "Позиція",
																			  "zh-cn": "增加职位"
																			},0, 'number', 'indicator',initialCreate,null,positions);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'type', 'Overlay Type',0,'number', 'indicator',initialCreate,null,types);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'width', {
																			  "en": "Overlay Size",
																			  "de": "Overlay Größe",
																			  "ru": "Overlay Размер",
																			  "pt": "Tamanho de sobreposição",
																			  "nl": "Vertaling:",
																			  "fr": "Overlay Taille",
																			  "it": "Dimensione del sovrapposizione",
																			  "es": "Superposición tamaño",
																			  "pl": "Overlay",
																			  "uk": "Розмір реле",
																			  "zh-cn": "A. 超支"
																			},0,'number', 'indicator',initialCreate,null,width);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'imageurl', {
																			  "en": "image URL",
																			  "de": "bild URL",
																			  "ru": "изображение URL",
																			  "pt": "imagem URL",
																			  "nl": "beeld URL",
																			  "fr": "image URL",
																			  "it": "immagine URL",
																			  "es": "imagen URL",
																			  "pl": "obraz URL",
																			  "uk": "зображення URL",
																			  "zh-cn": "图像"
																			},'','string','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'iconurl','icon URL','','string','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'delete_image',{
																			  "en": "Delete image after sending",
																			  "de": "Bild nach Senden löschen",
																			  "ru": "Удалить изображение после отправки",
																			  "pt": "Excluir imagem após o envio",
																			  "nl": "Verwijder beeld na het sturen",
																			  "fr": "Supprimer l'image après l'envoi",
																			  "it": "Eliminare l'immagine dopo l'invio",
																			  "es": "Eliminar imagen después de enviar",
																			  "pl": "Zdjęcie Delete po wysłaniu",
																			  "uk": "Видалити зображення після відправлення",
																			  "zh-cn": "在发送后删去图像"
																			},false,'boolean','indicator',initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, 'delete_icon',{
																			  "en": "Delete icon after sending",
																			  "de": "Icon nach Senden löschen",
																			  "ru": "Удалить иконку после отправки",
																			  "pt": "Excluir ícone após o envio",
																			  "nl": "Verwijder icon na het sturen",
																			  "fr": "Supprimer l'icône après l'envoi",
																			  "it": "Elimina icona dopo l'invio",
																			  "es": "Eliminar icono después de enviar",
																			  "pl": "Ikona Delete po wysłaniu",
																			  "uk": "Видалити іконку після відправлення",
																			  "zh-cn": "发货后删去一章"
																			},false,'boolean','indicator',initialCreate);
		        this.writeChannelDataToIoBroker(deviceFolder, 'payload', '','','json','indicator',initialCreate);

		        await this.subscribeStates(deviceFolder+'.message');
		        await this.subscribeStates(deviceFolder+'.payload');

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
			const triggeredEvent = id.split(".", 4);
			const event = triggeredEvent.slice(-1);

			if (event == 'payload')
			{
				let data = JSON.parse(state.val);
				var payloadvalue = '';
				for (const [key, value] of Object.entries(data)) {
					
					if (payloadvalue)
					{
						payloadvalue = payloadvalue + '&' + `${key}=${value}`;
					} else {
						payloadvalue = '?' + `${key}=${value}`;
						
					}
				}
				this.notifyPayload(id, payloadvalue);
			} else {
				this.notify(id, state);
			}
			

			adapter.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			adapter.log.info(`state ${id} deleted`);
		}
	}

	async notifyPayload(id, payload) {

		console.info('Payload Notify fired!');
		
		const myObjectArray = id.split(".", 3);
		let device = myObjectArray.join('.');
		let ip = await adapter.getStateAsync(device + '.ip');
		let url = `http://${ip.val}:7676${payload}`;

		// send the request
		axios.put(url, payload)		
	    .then(response => {

	        console.log(`Notify successful! (${response.status})`);
	    })
	    .catch(error => {
	        console.error(`Notify failed for :${ip}`, error.message);
	    });

	}

	async notify(id, msg) {

		console.info('Notify fired!');

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


