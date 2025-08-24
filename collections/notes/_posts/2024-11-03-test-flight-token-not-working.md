TLDR; Try deleting all of the users at TestFlight > Testers > All at AppStore Connect for the App in question. You maybe able to be more specific about which users to delete, read on for that.

# The Symptoms

I couldn't get a valid TestFlight redeem token, not just that the token was expired but that it worked and then told me I needed to resend the invite as it had been revoked by the developer (which was odd because I'm the developer and I didn't revoke it!). Previously I had found advice that removing the user from the Internal Testing group was not enough, that you needed to remove it from the Testers > All section and then use the plus sign under Internal Testing > Testers to re-add the user back. This allowed me to get invitation links again and to resend them but it still said the redeem code had been revoked

# How I got here (In hindsight after figuring the fix)

I had not wanted to use my personal phone for testing, we have a Dev phone running with a Dev AppleID, but I used my personal account as the tester in App Store Connect Test Flight Internal Testing, I used the redeem code on the Dev phone (which was signed in with it's Dev AppleID). I can only guess that this somehow linked my personal AppleID with the Dev Account AppleID. Later I decided I did want the Test Flight app on my personal phone so I added the Dev Phones AppleID to our list of testers, but I still couldn't get my account on my phone to use the redeem code for it. I tried deleting my account many times with no difference to before.

# The fix

In the end I had to delete the Dev AppleID from the Test Flight > Testers > All as well as my personal AppleID (in hindsight I'm not so sure if I had to delete my personal one so YMMV), After deleting both the Dev account and my Personal account from the Test Flight App and then re-adding them to the App Testers in Test Flight and following the appropriate TestFlight invitations on each phone under their appropriate accounts all was well.

# In summary

I think this only applies when you've tried to use a redeem token on a device that's signed in with a user who is not in the testers and then is later added as such. You may only need to add and delete and then re-add this user but I haven't tested that. I think going forward if I have any issues like this I'll delete all users in the testers and then add them back to save the hassled of figuring out who can access what and who might be blocking who from accessing TestFlight apps.
