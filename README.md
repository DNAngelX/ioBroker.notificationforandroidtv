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
| payload           | json object                   |{"msg":"my Message","bkgcolor": "7","title": "my Title"} ,... duration,position,width,transparency,type,icon,iconurl,imageurl |


### 4. Sending Messages:
- Sobald im Objekt "message" eine Nachricht eingetragen wird oder unter "payload", wird diese an das TV-Gerät gesendet. 
Payload nutzt nur die IP-Adresse aus den Objekten, der rest muss über day **payload** Objekt übergeben werden.


## Changelog
### 2.4.0 (2024-01-25)
* (DNAngel) change requests for official release by @mcm1957 & @Apollon77

### 2.3.1 (2024-01-12)
* (DNAngel) payload bugfix

### 2.3.0 (2024-01-08)
* (DNAngel) extended payload possibility as message object

### 2.2.2 (2024-01-01)
* (DNAngel) Stable release

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

Copyright (c) 2024 DNAngel

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