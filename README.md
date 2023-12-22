![Logo](admin/notificationforandroidtv.png)
# ioBroker.notificationforandroidtv - Benachrichtigungsintegration für Android TV/Fire TV

[![NPM](https://nodei.co/npm/iobroker.notificationforandroidtv.png?downloads=true)](https://nodei.co/npm/iobroker.notificationforandroidtv/)

# ENGLISH

Notification integration for IoBroker includes support for Notifications for [Android TV](https://play.google.com/store/apps/details?id=de.cyberdream.androidtv.notifications.google) and Notifications for [Fire TV](https://www.amazon.com/Christian-Fees-Notifications-for-Fire/dp/B00OESCXEK). With this integration, you can send notifications to your Android TV device. It enables an overlay displaying the message content for a customizable duration before disappearing. Additionally, it supports sending images, such as those from security cameras, and custom icons. Icons function similarly to images, appearing smaller and to the left of the notification, while images display larger and above the notification.

These notifications operate within the global scope of your Android TV device, appearing regardless of the active application.

During setup, note that there are two distinct apps: one for your smartphone (which isn't necessary for this platform) and another for your Android TV device to receive notifications. The app required for displaying notifications sent from IoBroker is available in the store of your Android TV device. Any in-app purchases are exclusive to the client for Android smartphones and do not restrict pushing notifications from IoBroker.

## Description
The notification integration for IoBroker supports sending notifications to Android TV and Fire TV devices. This integration allows customizable message overlays to be displayed on the TV screen for a specified duration. Additionally, it can display images, such as those from security cameras, and custom icons.

## Setup Steps:

### 1. Adapter Settings:
- Go to the adapter settings in the IoBroker interface.
- Add the IP addresses of the target devices and give them names for identification.

### 2. Download the App on Your Android TV / Fire TV:
- Download the "Notifications for Android TV" app for Android TV devices from [Google Play](https://play.google.com/store/apps/details?id=de.cyberdream.androidtv.notifications.google).
- Download the "Notifications for Fire TV" app for Fire TV devices from [Amazon](https://www.amazon.com/Christian-Fees-Notifications-for-Fire/dp/B00OESCXEK).

### 3. Creation of Objects with the Following Settings:

| Setting        | Description                                 | Example Value            |
| -------------- | ------------------------------------------- | ------------------------- |
| duration       | Display duration in seconds                  | 10 s                      |
| ip             | IP address of the TV device                  | 192.168.0.100             |
| message        | Message to be sent                           | "Test message"            |
| position       | Position on the TV screen                    | 0 = "BOTTOM_RIGHT"            |
| title          | Title of the message                         | "Important Notification"  |
| transparency   | Transparency of the overlay                  | 25                        |
| type           | Display type of the overlay                  | Standard, ONLY_TITLE, ONLY_ICON         |
| color          | Color                   | blue, green,...           |
| width          | Overlay size                   | small, xxl,...            |
| icon           | Icon selection                   | ! ? :-)                  |
| iconurl        | Icon URL                   | http://192.168.20.111/myIcon.png |
| delete_icon    | Clear icon URL after sending                | true / false              |
| imageurl       | Image URL                   | http://192.168.20.111/myImage.png |
| delete_image   | Clear image URL after sending               | true / false              |


### 4. Sending Messages:
- Once a message is entered in the "message" object, it will be sent to the TV device.


# GERMAN

Notification integration für IoBroker umfasst Unterstützung für Benachrichtigungen für [Android TV](https://play.google.com/store/apps/details?id=de.cyberdream.androidtv.notifications.google) und Benachrichtigungen für [Fire TV](https://www.amazon.de/Christian-Fees-Benachrichtigungen-für-Fire/dp/B00OESCXEK). Mit dieser Integration kannst du Benachrichtigungen an dein Android TV-Gerät senden. Es ermöglicht ein Overlay, das den Nachrichteninhalt für eine anpassbare Dauer anzeigt, bevor er verschwindet. Zusätzlich unterstützt es das Senden von Bildern, wie z. B. von Sicherheitskameras, und benutzerdefinierten Symbolen. Symbole funktionieren ähnlich wie Bilder, sie erscheinen kleiner und links von der Benachrichtigung, während Bilder größer angezeigt werden und über der Benachrichtigung erscheinen.

Diese Benachrichtigungen funktionieren im globalen Bereich deines Android TV-Geräts und erscheinen unabhängig von der aktiven Anwendung.

Bei der Einrichtung ist zu beachten, dass es zwei verschiedene Apps gibt: eine für dein Smartphone (die für diese Plattform nicht erforderlich ist) und eine andere für dein Android TV-Gerät, um Benachrichtigungen zu erhalten. Die App, die für die Anzeige von Benachrichtigungen gesendet von IoBroker erforderlich ist, ist im Store deines Android TV-Geräts verfügbar. Alle In-App-Käufe sind ausschließlich für den Client für Android-Smartphones und schränken das Versenden von Benachrichtigungen von IoBroker nicht ein.

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
| type           | Anzeigetyp des Overlays                     | Standard, ONLY_TITLE, ONLY_ICON         |
| color           | Farbe                   | blue, green,...|
| width           | Overlay Größe                   | small,xxl,... |
| icon           | Icon Auswahl                   | ! ? :-) |
| iconurl           | URL Icon                   | http://192.168.20.111/myIcon.png |
| delete_icon           | Icon URL nach senden leeren                   | true / false |
| imageurl           | URL Bild                   | http://192.168.20.111/myImage.png |
| delete_image           | Bild URL nach senden leeren                   | true / false |




### 4. Senden von Nachrichten:
- Sobald im Objekt "message" eine Nachricht eingetragen wird, wird diese an das TV-Gerät gesendet.


## Changelog
### 2.2.0 (2023-12-22)
* (DNAngel) translations for official release

### 2.1.2 (2023-12-21)
* (DNAngel) small small translation issues

### 2.1.1 (2023-12-21)
* (DNAngel) device name added

### 2.1.0 (2023-12-21)
* (DNAngel) color added
* (DNAngel) icon & icon_url added
* (DNAngel) image & image_url added

### 2.0.3 (2023-12-18)
* (ldittmar81) Typo fix

### 2.0.2 (2023-12-18)
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