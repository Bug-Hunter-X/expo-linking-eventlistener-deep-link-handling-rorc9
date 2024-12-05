This solution uses `Linking.getInitialURL` on app startup to catch initial deep links and also employs a background task to regularly check for new incoming URLs. This approach avoids the inconsistent behavior observed with `Linking.addEventListener`.

```javascript
import * as Linking from 'expo-linking';
import * as TaskManager from 'expo-task-manager';

const TASK_NAME = 'CHECK_DEEP_LINKS';

TaskManager.defineTask(TASK_NAME, async () => {
  try {
    const url = await Linking.getInitialURL();
    if (url) {
      // Handle the URL
      console.log('Deep link from background task:', url);
    }
  } catch (error) {
    console.error('Error checking for deep links:', error);
  }
});

// Start the background task
TaskManager.startTaskAsync(TASK_NAME);

// ... rest of your app code ...
```

Ensure background permissions are enabled in your app's configuration for the background task to function correctly.