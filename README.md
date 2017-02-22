# Run the app

* Install dependencies `yarn`
* Check NativeScript environment `tns doctor`
* Set up the `ANDROID_HOME` environment variable
  * `export ANDROID_HOME=/usr/local/Cellar/android-sdk/{version}}` (you can get the version number by running `android` in terminal)
  * `export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform_tools`
  * `source ~/.bash_profile`
  * Check variable with `$ANDROID_HOME`
* `tns doctor` should install Android SDK. Once SDK is fully installed, navigate to the SDK directory and install the Intel HAXM `dmg` file for hardware acceleration
* Run the emulator `tns run android` or `tns run ios`
* Leave emulator running while making changes to the Angular app and the emulator will watch for changes