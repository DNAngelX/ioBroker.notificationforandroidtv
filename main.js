"use strict";

/*
 * Created with @iobroker/create-adapter v2.5.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");
const adapter = utils.adapter("notificationforandroidtv");
const axios = require("axios");

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
            await this.setObjectNotExistsAsync(channelParentPath + "." + id, {
                type: "state",
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
            await this.setObjectNotExistsAsync(channelParentPath + "." + id, {
                type: "state",
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
            await this.setObjectNotExistsAsync(channelParentPath + "." + id, {
                type: "state",
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
        stateVal ? stateVal = stateVal.val : "";

        
        if((value != undefined || value != null) && stateVal === null){
        	
    		await this.setStateAsync(channelParentPath + "." + id, value, true);
        	
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

	        	const androidTv = dev[key];
	            
	            
	            
	            //const deviceFolder = 'IP: '+ androidTv;
	            const deviceFolder = this.name2id(androidTv.ip.replaceAll(".", "_"));
	            const deviceName = androidTv.name;

				

				//let initialCreate =  await adapter.getStatesAsync(deviceFolder) != undefined ? false : true;
				const initialCreate =  true;

				const positions = {
	                0:"BOTTOM_RIGHT",
	                1:"BOTTOM_LEFT",
	                2:"TOP_RIGHT",
	                3:"TOP_LEFT",
	                4:"CENTER"
	            };
	            const positionsPiPup = {
	                0:"TopRight",
	                1:"TopLeft",
	                2:"BottomRight",
	                3:"BottomLeft",
	                4:"Center"
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
	            const typesUrl = {
	                0:"video",
	                1:"image",
	                2:"web"
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
	                type: "channel",
	                common: {
	                    name: deviceName,
	                },
	                native: {},
	            });

	            await this.writeChannelDataToIoBroker(deviceFolder, "message", {
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
																			}, "","string","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, "title", {
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
																			},"ioBroker Message","string","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, "duration",{
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
																			},15, "number", "state",initialCreate,'s');
		        await this.writeChannelDataToIoBroker(deviceFolder, "color", {
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
																			},"8","string","state",initialCreate,null,bkgcolor);
		        await this.writeChannelDataToIoBroker(deviceFolder, "ip", {
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
																			},androidTv.ip,"string","state",initialCreate,null,null,true);
		        await this.writeChannelDataToIoBroker(deviceFolder, "icon", {
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
																			},0,"number","state",initialCreate,null,icon);
		        await this.writeChannelDataToIoBroker(deviceFolder, "transparency", {
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
																			},0,"number","state",initialCreate,null,transparencies);
		        await this.writeChannelDataToIoBroker(deviceFolder, "position",{
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
																			},0, "number", "state",initialCreate,null,positions);
		        await this.writeChannelDataToIoBroker(deviceFolder, "type", "Overlay Type",0,"number", "state",initialCreate,null,types);
		        await this.writeChannelDataToIoBroker(deviceFolder, "width", {
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
																			},0,"number", "state",initialCreate,null,width);
		        await this.writeChannelDataToIoBroker(deviceFolder, "imageurl", {
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
																			},"","string","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, "iconurl","icon URL","","string","text.url",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, "delete_image",{
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
																			},false,"boolean","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder, "delete_icon",{
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
																			},false,"boolean","state",initialCreate);
		        this.writeChannelDataToIoBroker(deviceFolder, "payload", "","","json","json",initialCreate);

				// Update support for PiPup
		        const subfolderPiPup = ".PiPup";
				await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "message", {
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
																			}, "","string","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "title", {
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
																			},"ioBroker Message","string","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "duration",{
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
																			},15, "number", "state",initialCreate,'s');
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "messageColor", {
																			  "en": "message Color",
																			  "de": "nachricht Farbe",
																			  "ru": "сообщение",
																			  "pt": "mensagem Cor",
																			  "nl": "berichtkleur",
																			  "fr": "couleur du message",
																			  "it": "messaggio",
																			  "es": "mensaje Color",
																			  "pl": "wiadomość Kolor",
																			  "uk": "повідомлення Колір",
																			  "zh-cn": "信件颜色"
																			},"8","string","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "titleColor", {
																			  "en": "title Color",
																			  "de": "titel Farbe",
																			  "ru": "название",
																			  "pt": "título Cor",
																			  "nl": "titel kleur",
																			  "fr": "titre Couleur",
																			  "it": "titolo",
																			  "es": "título Color",
																			  "pl": "tytuł Kolor",
																			  "uk": "колір",
																			  "zh-cn": "标题颜色"
																			},"#FFFFFF","string","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "backgroundColor", {
																			  "en": "background Color",
																			  "de": "hintergrundfarbe",
																			  "ru": "цвет",
																			  "pt": "cor de fundo",
																			  "nl": "achtergrondkleur",
																			  "fr": "couleur de fond",
																			  "it": "sfondo colore",
																			  "es": "fondo Color",
																			  "pl": "tło Kolor",
																			  "uk": "фон Колір",
																			  "zh-cn": "背景颜色"
																			},"#CC000000","string","state",initialCreate);
		        
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "position",{
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
																			},0, "number", "state",initialCreate,null,positionsPiPup);
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "titleSize",{
																			  "en": "title Size",
																			  "de": "titel Größe",
																			  "ru": "название",
																			  "pt": "tamanho do título",
																			  "nl": "titel Grootte",
																			  "fr": "titre Taille",
																			  "it": "titolo Dimensione",
																			  "es": "título Tamaño",
																			  "pl": "tytuł Rozmiar",
																			  "uk": "розмір титулу",
																			  "zh-cn": "标题大小"
																			},16, "number", "state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "messageSize",{
																			  "en": "message Size",
																			  "de": "nachricht Größe",
																			  "ru": "размер сообщения",
																			  "pt": "tamanho da mensagem",
																			  "nl": "berichtgrootte",
																			  "fr": "taille du message",
																			  "it": "dimensione del messaggio",
																			  "es": "mensaje Tamaño",
																			  "pl": "rozmiar wiadomości",
																			  "uk": "розмір повідомлення",
																			  "zh-cn": "信件大小"
																			},12, "number", "state",initialCreate);
		        
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "width", {
																			  "en": "width",
																			  "de": "breite",
																			  "ru": "ширина",
																			  "pt": "largura de largura",
																			  "nl": "breedte",
																			  "fr": "largeur",
																			  "it": "larghezza",
																			  "es": "ancho",
																			  "pl": "szerokość",
																			  "uk": "ширина",
																			  "zh-cn": "宽度"
																			},640,"number", "state",initialCreate,'px');
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "height", {
																			  "en": "height",
																			  "de": "höhe",
																			  "ru": "высота",
																			  "pt": "altura",
																			  "nl": "hoogte",
																			  "fr": "hauteur",
																			  "it": "altezza",
																			  "es": "altura",
																			  "pl": "wysokość",
																			  "uk": "висота",
																			  "zh-cn": "高度"
																			},480,"number", "state",initialCreate,'px');
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "url", {
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
																			},"","string","state",initialCreate);
		        await this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "type", {
																			  "en": "URL Type",
																			  "de": "URL Typ",
																			  "ru": "URL Тип",
																			  "pt": "URL Tipo",
																			  "nl": "URL Type",
																			  "fr": "URL Type",
																			  "it": "URL pagina Tipo",
																			  "es": "URL Tipo",
																			  "pl": "URL Rodzaj",
																			  "uk": "Контакти Тип",
																			  "zh-cn": "網址 类型"
																			},0,"number", "state",initialCreate,null,typesUrl);
		        
		        this.writeChannelDataToIoBroker(deviceFolder + subfolderPiPup, "payload", "","","json","json",initialCreate);
				// Update support for PiPup
		        
		         
		        await this.subscribeStates(deviceFolder+subfolderPiPup+".message");
		        await this.subscribeStates(deviceFolder+subfolderPiPup+".payload");

		        await this.subscribeStates(deviceFolder+".message");
		        await this.subscribeStates(deviceFolder+".payload");

		        

		        

	        }
	    } else {
	        adapter.log.error("No AndroidTV`s configurated, please add a device");
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

		if (state && state.ack == false) {
			// The state was changed
			const triggeredEvent = id.split(".", 4);
			const event = triggeredEvent.slice(-1);

			if (event == "payload")
			{
				const isJson = this.isJsonString(state.val);
				if (isJson)
				{
					const data = JSON.parse(state.val);
					let payloadvalue = "";
					for (const [key, value] of Object.entries(data)) {
					
						if (payloadvalue)
						{
							payloadvalue = payloadvalue + "&" + `${key}=${value}`;
						} else {
							payloadvalue = "?" + `${key}=${value}`;
							
						}
					}
					this.notifyPayload(id, payloadvalue);
				} else {
					if (state.val != '')
					{
						adapter.log.error(`state ${id} is not a json string`);
					}
					
				}
			} else if (event == "message") {
				this.notify(id, state);
			} else if (event == "PiPup") {
				const triggeredEvent = id.split(".", 5);
				const event2 = triggeredEvent.slice(-1);
				
				if (event2 == "message") {
					this.PiPup(id, state);
				} else if (event2 == "payload") {

					const isJson = this.isJsonString(state.val);
					if (isJson)
					{
						this.PiPupPayload(id, state.val);
					} else {
						if (state.val != '')
						{
							adapter.log.error(`state ${id} is not a json string`);
						}
						
					}
					
				}
				
			}
			

			adapter.log.debug(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			adapter.log.debug(`state ${id} deleted`);
		}
	}

	name2id(pName) {
	    return (pName || "").replace(adapter.FORBIDDEN_CHARS, "_");
	}
	isJsonString(str) {
	    try {
	        JSON.parse(str);
	    } catch (e) {
	        return false;
	    }
	    return true;
	}

	async notifyPayload(id, payload) {

		console.debug('Payload Notify fired!');
		
		const myObjectArray = id.split(".", 3);
		const device = myObjectArray.join(".");
		const ip = await adapter.getStateAsync(device + ".ip");
		const url = `http://${ip.val}:7676${payload}`;

		// send the request
		axios.put(url, {
			timeout: 2000
		})		
	    .then(response => {

	        adapter.log.debug(`Notify successful! (${response.status})`);
	    })
	    .catch(error => {
	        adapter.log.error(`Notify failed for :${ip}`, error.message);
	    });

	    return true;

	}

	async notify(id, msg) {

		adapter.log.debug("Notify fired!");

		const myObjectArray = id.split(".", 3);
		
		const device = myObjectArray.join(".");
		

		const title = await adapter.getStateAsync(device + ".title");
		const duration = await adapter.getStateAsync(device + ".duration");
		const position = await adapter.getStateAsync(device + ".position");
		const width = await adapter.getStateAsync(device + ".width");
		const transparency = await adapter.getStateAsync(device + ".transparency");
		const type = await adapter.getStateAsync(device + ".type");
		const color = await adapter.getStateAsync(device + ".color");
		const ip = await adapter.getStateAsync(device + ".ip");
		const icon = await adapter.getStateAsync(device + ".icon");
		const iconurl = await adapter.getStateAsync(device + ".iconurl");
		const imageurl = await adapter.getStateAsync(device + ".imageurl");
		const delete_image = await adapter.getStateAsync(device + ".delete_image");
		const delete_icon = await adapter.getStateAsync(device + ".delete_icon");
		
		axios.post(`http://${ip.val}:7676
			?msg=`+msg.val.replace(/\n/gi,"<br>")+
			"&title="+title.val+
			"&duration="+duration.val+
			"&position="+position.val+
			"&width="+width.val+
			"&transparency="+transparency.val+
			"&type="+type.val+
			"&bkgcolor="+color.val+
			"&icon="+icon.val+
			"&iconurl="+iconurl.val+
			"&imageurl="+imageurl.val
			,
			{
				timeout: 2000
			}
	    )
	    .then(response => {
	    	delete_image.val == true ? this.setStateAsync(device + ".imageurl", "", true) : "";
	    	delete_icon.val == true ? this.setStateAsync(device + ".iconurl", "", true) : "";
	    	
	        adapter.log.debug(`Notify successful! (${response.status})`);
	    })
	    .catch(error => {
	        adapter.log.error(`Notify failed for :${ip.val}`, error.message);
	    });

	    return true;
	}
	async PiPupPayload(id, payload) {

		adapter.log.debug("PiPup payload fired!");
		const myObjectArray = id.split(".", 3);
		const device = myObjectArray.join(".");
		const ip = await adapter.getStateAsync(device + ".ip");
		
		axios({
	        method: "post",
	        baseURL: `http://${ip.val}:7979/notify`,
	        headers: {"Content-Type":"application/json"},    
	       	data : payload,
	       	timeout: 4500,
         	responseType: "json"
	     })
	    .then(response => {
	        adapter.log.debug(`PiPup payload successful! (${response.status})`);
	    })
	    .catch(error => {
	        adapter.log.error(`PiPup payload failed for :${ip.val}`, error.message);
	    });

	    return true;

	}
	async PiPup(id, msg) {

		adapter.log.debug("PiPup fired!");

		const myObjectArray = id.split(".", 3);
		const device = myObjectArray.join(".");

		const title = await adapter.getStateAsync(device + ".PiPup.title");
		const duration = await adapter.getStateAsync(device + ".PiPup.duration");
		const position = await adapter.getStateAsync(device + ".PiPup.position");
		const width = await adapter.getStateAsync(device + ".PiPup.width");
		const height = await adapter.getStateAsync(device + ".PiPup.height");
		const type = await adapter.getStateAsync(device + ".PiPup.type");
		const titleColor = await adapter.getStateAsync(device + ".PiPup.titleColor");
		const titleSize = await adapter.getStateAsync(device + ".PiPup.titleSize");
		const messageColor = await adapter.getStateAsync(device + ".PiPup.messageColor");
		const messageSize = await adapter.getStateAsync(device + ".PiPup.messageSize");
		const backgroundColor = await adapter.getStateAsync(device + ".PiPup.backgroundColor");
		const ip = await adapter.getStateAsync(device + ".ip");
		const url = await adapter.getStateAsync(device + ".PiPup.url");
		const typeClear = type.val == 0 ? "video" : type.val == 1 ? "image" : type.val == 2 ? "web" : '';
		const media = { [typeClear] : { "url": url.val, "width": width.val, "height": typeClear == "image" ? height.val : '' }};
		
		const data = {
			"message":msg.val.replace(/\n/gi,"<br>"),
			"title":title.val,
			"duration":duration.val,
			"position":position.val,
			"type":type.val,
			"titleColor":titleColor.val,
			"titleSize":titleSize.val,
			"messageColor":messageColor.val,
			"messageSize":messageSize.val,
			"backgroundColor":backgroundColor.val,
			"media":media
		};

	    axios({
	        method: "post",
	        baseURL: `http://${ip.val}:7979/notify`,
	        headers: {"Content-Type":"multipart/form-data"},    
	       	data : data,
	       	timeout: 4500,
         	responseType: "json"
	     })
	    .then(response => {
	        adapter.log.debug(`PiPup successful! (${response.status})`);
	    })
	    .catch(error => {
	        adapter.log.error(`PiPup failed for :${ip.val}`, error.message);
	    });

	    return true;
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


