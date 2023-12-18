![Logo](admin/notificationforandroidtv.png)
# ioBroker.notificationforandroidtv - Benachrichtigungsintegration für Android TV/Fire TV

[![NPM](https://nodei.co/npm/iobroker.notificationforandroidtv.png?downloads=true)](https://nodei.co/npm/iobroker.notificationforandroidtv/)

Notification integration for IoBroker includes support for Notifications for [Android TV](https://play.google.com/store/apps/details?id=de.cyberdream.androidtv.notifications.google) and Notifications for [Fire TV](https://www.amazon.com/Christian-Fees-Notifications-for-Fire/dp/B00OESCXEK). With this integration, you can send notifications to your Android TV device. It enables an overlay displaying the message content for a customizable duration before disappearing. Additionally, it supports sending images, such as those from security cameras, and custom icons. Icons function similarly to images, appearing smaller and to the left of the notification, while images display larger and above the notification.

These notifications operate within the global scope of your Android TV device, appearing regardless of the active application.

During setup, note that there are two distinct apps: one for your smartphone (which isn't necessary for this platform) and another for your Android TV device to receive notifications. The app required for displaying notifications sent from IoBroker is available in the store of your Android TV device. Any in-app purchases are exclusive to the client for Android smartphones and do not restrict pushing notifications from IoBroker.


## Beschreibung
Die Benachrichtigungsintegration für IoBroker unterstützt das Senden von Benachrichtigungen an Android TV- und Fire TV-Geräte. Diese Integration ermöglicht die Anzeige anpassbarer Nachrichtenüberlagerungen für eine spezifizierte Dauer auf dem Bildschirm des TV-Geräts. Darüber hinaus kann sie Bilder, wie z. B. von Sicherheitskameras, und benutzerdefinierte Icons anzeigen.

## Schritte zur Einrichtung:

### 1. Adaptereinstellungen:
- Gehe zu den Adaptereinstellungen in der IoBroker-Oberfläche.
- Füge die IP-Adressen der Zielgeräte hinzu und gib ihnen Namen für die Identifizierung.

### 2. Lade die App auf deinem Android TV / Fire TV:
- Lade die App "Notifications for Android TV" für Android TV-Geräte von [Google Play](https://play.google.com/store/apps/details?id=de.cyberdream.androidtv.notifications.google) herunter.
- Lade die App "Notifications for Fire TV" für Fire TV-Geräte von [Amazon](https://www.amazon.com/Christian-Fees-Notifications-for-Fire/dp/B00OESCXEK) herunter.

### 3. Erstellung von Objekten mit den folgenden Einstellungen:

| Einstellung    | Beschreibung                                | Beispielwert              |
| -------------- | ------------------------------------------- | ------------------------- |
| duration       | Anzeigedauer in Sekunden                    | 10 s                       |
| ip             | IP-Adresse des TV-Geräts                    | 192.168.0.100             |
| message        | Nachricht, die gesendet werden soll         | "Testnachricht"           |
| position       | Position auf dem TV-Bildschirm              | 0 = "BOTTOM_RIGHT"            |
| title          | Titel der Nachricht                         | "Wichtige Benachrichtigung"|
| transparency   | Transparenz des Overlays                    | 25                       |
| type           | Anzeigetyp des Overlays                     | 0,1,2,3,4,5,6,7,8         |

### 4. Senden von Nachrichten:
- Sobald im Objekt "message" eine Nachricht eingetragen wird, wird diese an das TV-Gerät gesendet.


## Changelog

### **WORK IN PROGRESS**
* (DNAngel) Ui Button fixed

### 2.0.1 (2023-12-18)
* (DNAngel) Design changes & description

### 2.0.0 (2023-12-18)
* (DNAngel) initial release

## License
MIT License

Copyright (c) 2023 DNAngel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.