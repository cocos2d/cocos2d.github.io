#.isLoggedIn()

Check the user's authorization status. _false_ if the user has not logged into Facebook, or hasn't authorized your app; _true_ otherwise. Most often, this will be in the logic that determines whether to show a login control.

##Example

```javascript
var facebook = plugin.FacebookAgent.getInstance();
if (facebook.isLoggedIn()) {
    // Get data from Facebook to personalize the player's experience
} else {
    // Prompt the user to log in, or offer a "guest" experience
}
```
