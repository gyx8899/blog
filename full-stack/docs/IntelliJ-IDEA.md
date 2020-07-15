# IntelliJ IDEA

## Using problems

##### Github
- "Invalid authentication data. Connection reset" When trying to log in to github within IntelliJ IDEA
> 1. Set server value with "https://";
> 2. Close the net proxy of your network; (Your company or some VPNs)
> 3. *Switch to different network, such as your personal hotspot*; (Fixed in my case)

##### [IntelliJ does not show project folders](https://stackoverflow.com/questions/5816419/intellij-does-not-show-project-folders)
> 1. In File > Project Structure > Modules, click the "+" button;
> 2. Press Enter (because weirdly it won't let me click on **"New Module"**);
> 3. In the window that pops up, click on the "..." next button which takes you to the Content root. Find your root folder and select it;
> 4. Click the "ok" button;
> 5. Ignore any warning that says the name is already in use;

