# Official web page
Link: https://github.com/facebook/react-native-fbsdk

# Facebook developer account link
Link: https://developers.facebook.com/

# Video tutorial link
Link: Video tutorial link
# Change to string.xml
``<resources>
    ....
    <string name="facebook_app_id">{app_id}</string>
<string name="fb_login_protocol_scheme">fb{app_id}</string>
</resources>``

# Changes in androidManifest.xml
``<application>
    .....
    . 
    <meta-data android:name="com.facebook.sdk.ApplicationId" 
        android:value="@string/facebook_app_id"/>
    
    <activity android:name="com.facebook.FacebookActivity"
        android:configChanges=
                "keyboard|keyboardHidden|screenLayout|screenSize|orientation"
        android:label="@string/app_name" />
    <activity
        android:name="com.facebook.CustomTabActivity"
        android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="@string/fb_login_protocol_scheme" />
        </intent-filter>
    </activity>

</application>``

# changes in build.gradle (android/app)
`` implementation 'com.facebook.android:facebook-login:[5,6)' // for facebook login ``

# Creating debug key hash
`` keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64 ``

# Creating release key hash
`` keytool -exportcert -alias <RELEASE_KEY_ALIAS> -keystore <RELEASE_KEY_PATH> | openssl sha1 -binary | openssl base64 ``
`` keytool -exportcert -alias my-key-alias -keystore my-upload-key.keystore | openssl sha1 -binary | openssl base64 ``
