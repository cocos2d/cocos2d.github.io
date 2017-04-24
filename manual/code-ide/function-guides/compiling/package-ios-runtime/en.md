
#How to apply for a development certificate and use Code IDE to make an ipa that supports real machine debug

## 1. Steps

- **Add Development certificates**
- **Add Devices**
- **Add App ID**
- **Add development provisioning profile**
- **Use Code IDE to compile and package a development ipa**

## 2. Instruction of iOS real machine debug

#####1. Distribution Certificates: Apple authorized certification for developer
#####2. UDID(Devices): The Device's uniquely identifies
#####3. App ID: All Apps have to have an App ID before releasing. It's the one and only valid identification of Apple that usually requires of a Product name and Bundle ID.

#####Note that Bundle ID is a reverse DNS string. For example: com.company.name; it contains information of the developer and the application. The name section can be specified as the name of a single application or of multiple applications; if former, fill in the app name to the name section as the mentioned example; if latter, name section can be substituted with "*". However, Bundle IDs with "\*" would be unable to use a few features such as pushing.

#####4. Distribution Provisioning Profile: containing certificate and App ID. The difference between distribution provisioning profile and development provisioning profile is that the former does not contain the information such as UDID of the device.

## 3. Add Development Certificates

#####First, we need to enter [Apple Developer Center](http://developer.apple.com), click the MemberCenter and login(of course you'll need an iOS Developer account) into where shown in the picture
![image](res/certificate1.png)

#####Select the Certificates option
![image](res/certificate2.png)

#####Then, We will find a sub-option named "Development" under "Certificates，" please select it
![image](res/certificate3.png)

#####Click the small plus icon at the right side of the page; select iOS App Development and click continue
![image](res/certificate4.png)

#####It means that we must create a CSR file on our Mac to create the distribution certificate. Next we're conducting this series of operations.
![image](res/certificate5.png)

#####Under Applications/Utility，there is a keychain access tool that can help us create a CSR file with ease
![image](res/certificate6.png)

#####Open it，click the keychain access menu and select “Certificates Assistant/Request a Certificate From Authority”
![image](res/certificate7.png)

#####Then, we need to enter user's email address and common name. Note that there are two ways of saving, and under usual circumstance we'd save to the disk. Then click the continue button
![image](res/certificate8.png)

#####Leave at the default settings and keep going
![image](res/certificate9.png)

#####Now，the CSR file we need is created; next let's go back to the certificate creating.
![image](res/certificate10.png)

#####Back to developer center website and click continue, you'll see the screen as below. Click “Choose File” to select the CSR file we created just now. Then, click "Generate."
![image](res/certificate11.png)

#####Wait for seconds and you should be notified that certificate is created successfully. Click "Done" and download it.
![image](res/certificate12.png)

#####Double click the Certificate file and the secret key would automatically be added to the keychain; also, there would be a small triangular arrow at the certificate and if you click it, you'll see a subitem with a key-shaped icon. That means we've successfully created the certificate.  
![image](res/certificate13.png)

## 4. Add Devices

#####There are two ways to add devices; first and the easier way is to connect iOS devices to Mac, open Xcode and select Window/Organizer. Then at the left side of the pop-up window, select your device and click "Use for Development" at the shown device info. If you weren't logged in, you'd be notified to log in. 
![image](res/device1.png)


#####The second way is to go back to the "Certificates, Identifiers & Profiles" page at the Developer Center, select "Devices" at the left side, click the plus icon at the upper right corner and you are ready. Next select "Register Device" and enter the name you want for the device; UDID can be acquired through Xcode/Windows/Organizer.
![image](res/device2.png)

#####Click "Register" when you finish.
![image](res/device3.png)

## 5. Add App ID

#####We need to create an App ID for debugging purpose; by default we have an Xcode iOS Wildcard App ID that can be adapted as any application's Bundle Identifier, so that we can just use it for debugging; or you can create a new App ID of your own by clicking the plus icon at the upper right corner.
![image](res/appid1.png)

#####Enter its name
![image](res/appid2.png)

#####Next fill in its Bundle ID. Choose Wilcard App ID; the format usually goes like com.company.*, and you fill the middle with the company name. It is rather convenient but the thing is an App ID like this would not be able to use features like in-app purchase, pushing, Gamecenter, etc. Of course you can choose Explicit App ID，then you need to specify the Bundle ID without any usage of "\*." Choose what fits you the best.
![image](res/appid3.png)

#####Click Submit button and finish the App ID creating process.
![image](res/appid4.png)


## 6. Add Development Provisioning Profile

#####Select The Provisioning Profiles/Development. Click the plus item.
![image](res/profile1.png)

#####Select the iOS App Development and Continue
![image](res/profile2.png)

#####Choose the App ID we just created
![image](res/profile3.png)

#####All available Developer Certificates would be listed; you can select the one we just created or multiple or even all of them, depending on your needs.
![image](res/profile4.png)

#####All the added devices would be listed; samely, select the one or multiple ones that you need.
![image](res/profile5.png)

#####Fill in the configuration file name and click "Generate"
![image](res/profile6.png)

#####Wait for seconds and you'll be notified that the provisioning profile is created
![image](res/profile7.png)

#####Now we need to import the provisioning file into Mac, so that we can run the packed App on the test device and conduct debugging.

#####There are two ways of importing; first is to use the account system that comes with Xcode and Organizer to import provisioning files to Mac and test devices

#####Open Xcode, click the "preference" option in the Xcode drop-down menu and choose "Accounts" in the pop-up page. If you are not logged in with your developer account, click the plus button at the left and right bottom, choose Add App ID , and then log into your developer account. After the login, click “View Details” at the right bottom.
![image](res/profile8.png)

#####After you click View Details, detailed information about this account's certificate and description file will pop up; if the Provisioning Profiles list is empty or does not contain the description file that we created earlier, click on the refresh button at the left bottom and automatically the description file that matches current certificate would be automatically imported.
![image](res/profile9.png)

#####Click Xcode Window-> Organizer option and in the pop-up page, select the "Provisioning Profiles" option under the target debugging device and drag the provisioning file into the Organizer; or you can click the Add button to add
![image](res/profile10.png)

#####The second is to use the [iPhone configuration utility tool] (http://support.apple.com/kb/DL1465?viewlocale=zh_CN&locale=zh_CN): we just need to manually download the generated description files onto Mac, then open the iPhone configuration utility tool and drag the description file into it, so it's imported into Mac now.
![image](res/profile11.png)

#####At The iPhone Configuration Utility tool, select the device you want to debug with and in its detailed info. page select provisioning profile in the details page for the device. and then click the Install button
![image](res/profile12.png)

#####So far we are done with generating and importing the provisioning file.

## 7. Use the Runtime Builder of Code IDE to compile and pack a development ipa

#####In Code IDE, right click the iOS Runtime project you want to pack and select Build Custom Runtimes option in the Cocos Tools menu item.
![image](res/pakcage1.png)

#####If the current project has never added an additional source yet, you will be prompted to add one, click Yes to do so (if the project has one already, skip this step)
![image](res/pakcage2.png)

#####In the pop-up “additional native source wizard” page, make sure that the iOS Bundle Identifier at the bottom matches the App ID we created; click Generate to generate source and be patient till it is done.
![image](res/pakcage3.png)

#####Native code added successfully. Click close.
![image](res/pakcage4.png)

#####It will switch to the generation Wizard page; click next
![image](res/pakcage5.png)

#####Check the Build iOS Device Runtime option and select certificate and Target.Then, click Generate to start generating ipa.
![image](res/pakcage6.png)

#####The ipa generating process would take 5-15 minutes, depending on the machine; please be patient.
![image](res/pakcage7.png)


#####If generated successfully, the log under Console will notify where the ipa is saved; if fails, please refer to the log Console output and check for errors
![image](res/pakcage8.png)

## 8. Install and run

#####Connect the iOS device, open iTunes, select the Apps in library
![image](res/install1.png)
![image](res/install2.png)

#####Drag the packed ipa into iTunes
![image](res/install3.png)

#####Select and login the connected ios Device
![image](res/install4.png)

#####Select Apps
![image](res/install5.png)

#####Now we can see the ipa at the column of left side of iTunes; click "Install," and its status would change to "Will Install," and then click Sync at the bottom
![image](res/install6.png)
![image](res/install7.png)
![image](res/install8.png)

#####iTunes will display the current installing progress, which may take some time
![image](res/install9.png)

#####When installation completed, open your iOS device, find and run the installed app. If you see the screen as shown below, congrats! your ipa is successfully installed.
![image](res/install10.png)

