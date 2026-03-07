/**
 * firebase-config.js — Shared Firebase initialisation for DAxEmpowerApps
 *
 * ─── API KEY SAFETY NOTE ────────────────────────────────────────────────────
 * Firebase client-side API keys are NOT secret — they identify your project,
 * not authenticate an admin. Real security comes from:
 *   1. Firestore Security Rules  (firestore.rules)
 *   2. Firebase Auth (only signed-in users can read/write)
 *   3. Restricting the API key to your domain in the Google Cloud Console:
 *      https://console.cloud.google.com/apis/credentials
 *      → Edit API key → "Application restrictions" → HTTP referrers
 *      → Add:  yourdomain.com/*  and  *.vercel.app/*
 * ────────────────────────────────────────────────────────────────────────────
 */

(function () {
  // Prevent double-initialisation if multiple pages load this script
  if (firebase.apps.length > 0) return;

  firebase.initializeApp({
    apiKey:            "AIzaSyDWVRF0UcX8XwsgP0RHTHaTABo4CCCzdT0",
    authDomain:        "daxempowerapps.firebaseapp.com",
    projectId:         "daxempowerapps",
    storageBucket:     "daxempowerapps.appspot.com",
    messagingSenderId: "1012837693001",
    appId:             "1:1012837693001:web:e4b8f0b5ec22b106b83198"
  });
})();
