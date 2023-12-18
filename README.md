![Logo](admin/notificationforandroidtv.png)
# ioBroker.notificationforandroidtv

[![NPM](https://nodei.co/npm/iobroker.notificationforandroidtv.png?downloads=true)](https://nodei.co/npm/iobroker.notificationforandroidtv/)

Notification integration for IoBroker includes support for Notifications for [Android TV](https://play.google.com/store/apps/details?id=de.cyberdream.androidtv.notifications.google) and Notifications for [Fire TV](https://www.amazon.com/Christian-Fees-Notifications-for-Fire/dp/B00OESCXEK). With this integration, you can send notifications to your Android TV device. It enables an overlay displaying the message content for a customizable duration before disappearing. Additionally, it supports sending images, such as those from security cameras, and custom icons. Icons function similarly to images, appearing smaller and to the left of the notification, while images display larger and above the notification.

These notifications operate within the global scope of your Android TV device, appearing regardless of the active application.

During setup, note that there are two distinct apps: one for your smartphone (which isn't necessary for this platform) and another for your Android TV device to receive notifications. The app required for displaying notifications sent from IoBroker is available in the store of your Android TV device. Any in-app purchases are exclusive to the client for Android smartphones and do not restrict pushing notifications from IoBroker.

## Changelog
* 1.0.0 (DNAngel) Initial Release
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