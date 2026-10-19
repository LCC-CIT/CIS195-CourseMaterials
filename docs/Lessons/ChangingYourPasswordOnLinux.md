# Changing Your Password on Linux

To change your password on citstudent, you connect to it using the SSH protocol from a terminal application, then type the `passwd` command. Windows, macOS, and Linux all come with an SSH client, so you don't need to install anything.

## Open a Terminal

### Windows

Open **Terminal** from the Start menu. It's built into Windows 11. On Windows 10 you can use **PowerShell** or <a href="https://learn.microsoft.com/en-us/windows/terminal/" target="_blank">Windows Terminal</a>.

If you type `ssh` and get a message saying it is "not recognized", add the SSH client: go to **Settings** → **System** → **Optional features**, select **View features** (or **Add a feature**), then find and add **OpenSSH Client**.

#### Alternative: PuTTY

<a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/" target="_blank">PuTTY</a> is a free SSH client with a graphical interface. You don't need it, but if you prefer it, get it from one of these places:

- The **Microsoft Store**: search for "PuTTY".
- The <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">official PuTTY download page</a>: choose the 64-bit x86 installer (`.msi`), or the Arm64 installer if your laptop has an Arm processor.

Don't download it from *putty.org*. That site is not run by the PuTTY developers.

In PuTTY, enter `citstudent.lanecc.edu` as the Host Name, choose SSH, and select **Open**. Enter your user name when it asks for `login as:`.

### macOS

Open **Terminal**. It's in **Applications** → **Utilities**, or you can press Cmd+Space and type "Terminal".

### ChromeOS

Turn on the Linux development environment in **Settings** → **About ChromeOS** → **Developers**, then open its **Terminal** app.

## Connect to citstudent

Type this command, replacing *username* with your user name, and press Enter:

`ssh username@citstudent.lanecc.edu`

The first time you connect, you will see a message like this:

```
The authenticity of host 'citstudent.lanecc.edu' can't be established.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Type `yes` and press Enter. You won't be asked again on this computer.

Next, enter your password. **Nothing appears on the screen while you type a password**, not even dots. That's normal. Just type it and press Enter.

## Change Your Password

When you're logged in, you will see a prompt ending with a `$`. Type `passwd` and press Enter, then:

1. Enter your current password.
2. Enter your new password.
3. Enter your new password again.

If it worked, you'll see a message saying all authentication tokens were updated successfully. For more details, see the citstudent instructions for <a href="http://citstudent.lanecc.edu/info.shtml" target="_blank">changing passwords</a>.

## Log Out

Type `exit` and press Enter to log out before you close the terminal window.

------

<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Creative Commons License"></a> Web Authoring Lecture Notes by <a href="https://profbird.dev" target="_blank">Brian Bird</a>, revised <time>2026</time>, are licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

------------
