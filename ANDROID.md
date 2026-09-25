# Hora Studio — Android Install / APK Guide

Hora Studio is a **Next.js Progressive Web App (PWA)**.

## 1. Instant install on Android (no APK needed)

1. Deploy or run the app (HTTPS required for install prompt).
2. Open in Chrome on Android.
3. Menu → **Install app** / **Add to Home screen**.
4. It launches fullscreen like a native app (burgundy-gold theme, offline shell).

This is the fastest “installable” experience and matches how many production astrology tools ship.

## 2. Real signed APK (Trusted Web Activity / Bubblewrap)

Best quality for Play Store with minimal native code:

```bash
# Prerequisites: Node, Java JDK 17+, Android SDK
npm install -g @bubblewrap/cli

# After your site is live on HTTPS (e.g. https://hora.example.com)
bubblewrap init --manifest https://hora.example.com/manifest.json
bubblewrap build
```

Output: `app-release-signed.apk` (and AAB for Play Store).

## 3. Capacitor (full native shell)

```bash
cd hora-studio
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
# Then Build → Generate Signed Bundle / APK in Android Studio
```

## 4. What this repository delivers today

- Complete themed web app (all major modules)
- PWA manifest + service worker
- Installable on Android/iOS as web app
- Ready for Bubblewrap or Capacitor packaging

A pre-built binary APK is **not** included because:

- Native signing keys must be yours
- App must be hosted on HTTPS for TWA
- This environment cannot run the Android SDK / Gradle build

Use section 1 for immediate install, or section 2/3 for a store-ready APK.
