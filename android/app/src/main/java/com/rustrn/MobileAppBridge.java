package com.rustrn;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by marek on 17/08/2017.
 */

public class MobileAppBridge extends ReactContextBaseJavaModule {
    static {
        System.out.println("loadLibrary tadaaaaaaaaaaaaaaaaaaaaaaa");
        System.loadLibrary("mobile_app");
        System.out.println("System.loadLibrary success");
    }

    @Override
    public String getName() {
        return "MobileAppBridge";
    }

    public MobileAppBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void sayHelloWorld(String name, Promise promise) {
        System.out.println("tadaaaaaaaaaaaaaaaaaaaaaaa");
        promise.resolve(helloWorld(name));
        System.out.println("vadaaaaaaaaaaaaaaaaaaaaaaa");
    }

    private static native String helloWorld(String seed);
}