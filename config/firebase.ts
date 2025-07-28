// src/config/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyjhZUYiOnxHLhiOSaGzsb22eXxPhQjUY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "cds-attendance-deb66",
  storageBucket: "cds-attendance-deb66.firebasestorage.app",
  messagingSenderId: "YOUR_MSG_SENDER_ID",
  appId: "1:841063388691:ios:eee17c2730a5a23ecc51e6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>API_KEY</key>
	<string>AIzaSyDyjhZUYiOnxHLhiOSaGzsb22eXxPhQjUY</string>
	<key>GCM_SENDER_ID</key>
	<string>841063388691</string>
	<key>PLIST_VERSION</key>
	<string>1</string>
	<key>BUNDLE_ID</key>
	<string>com.compang.cds-attendance</string>
	<key>PROJECT_ID</key>
	<string>cds-attendance-deb66</string>
	<key>STORAGE_BUCKET</key>
	<string>cds-attendance-deb66.firebasestorage.app</string>
	<key>IS_ADS_ENABLED</key>
	<false></false>
	<key>IS_ANALYTICS_ENABLED</key>
	<false></false>
	<key>IS_APPINVITE_ENABLED</key>
	<true></true>
	<key>IS_GCM_ENABLED</key>
	<true></true>
	<key>IS_SIGNIN_ENABLED</key>
	<true></true>
	<key>GOOGLE_APP_ID</key>
	<string>1:841063388691:ios:eee17c2730a5a23ecc51e6</string>
</dict>
</plist>