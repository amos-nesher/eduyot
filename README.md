# Eduyot

## About project
Provide summary of testemonies from Greece related to the Hollacost


## Get Started

### Prerequisites
This project is based on Ionic framework which depend on NodeJS platform. 

- NodeJS 
- NPM 
- Ionic

Install Ionic
```
npm install -g ionic
```

### for run on mobile device, make sure you have the 'native-run' installed globally
```
npm i -g native-run
```

### Clone the project from github
```
git clone https://github.com/amos-nesher/eduyot.git

cd eduyot

npm install
```

### Run project in local browser (development mode)

```
cd c:\eduyot\eduyot
ionic serve
```

### Build project for deploy on Android device in debug mode

- rename platforms\android folder to _android
- run below command
- output is at c:\eduyot\eduyot\platforms\android\app\build\outputs\apk\debug\app-debug.apk

```
cd c:\eduyot\eduyot
ionic build
ionic cordova run android --device
```

### Build release AAB

This is bundle file for google store.

```
ionic cordova build android --prod --release
```

### Reduce image size of each added image

https://www.reduceimages.com/


## Build Release APK
keystore pass - 'eduyot'

```
ionic cordova build android --prod --release
```
### sign
```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore eduyot-release-key.keystore <ROOT>\eduyot\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk alias_name
```

### zip align
```
zipalign -v 4 <ROOT>\eduyot\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk <ROOT>\eduyot\platforms\android\app\build\outputs\apk\release\eduyot.apk
```
