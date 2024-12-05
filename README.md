# Expo Linking.addEventListener Inconsistent Deep Link Handling

This repository demonstrates an inconsistent behavior in Expo's `Linking.addEventListener` when handling deep links. The issue is that the event listener sometimes fails to trigger even when correctly registered. This makes the app unresponsive to incoming URLs, leading to a broken deep linking experience.

## Problem

The `Linking.addEventListener` in Expo is supposed to reliably listen for incoming URLs. However, in this specific case, it often fails to fire the event despite being properly set up. This inconsistent behavior is difficult to track down and makes it unreliable for handling deep links, a crucial feature for many apps.

## Solution

The solution explores using an alternative approach, `Linking.getInitialURL` combined with a background task to monitor URLs periodically.  While less ideal, it provides a more reliable solution for handling deep links when `addEventListener` proves unreliable.