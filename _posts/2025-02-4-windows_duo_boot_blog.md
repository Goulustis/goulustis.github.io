---
layout: post
title: Dealing with Duo-booting when middle-fingered
date: 2025-02-04 21:01:00
description: Describes a way to duo boot when the hardware refuses to boot into grub
# tags: random
# categories: random
thumbnail: assets/img/middle_finger.png
---

Firstly, Microsoft is a piece of **SHIT**. I don't know how, but they somehow was able to make the hardware to not detect the grub.efi **DESPITE** every configuration installing duo-boot ubuntu normally. The fix is to **OVERWRITE THE WINDOWS EFI** with grub.efi. Here is how you do it:  
  
**Step 1:** Boot into Ubuntu through a USB stick  
**Step 2:** In the terminal, mount the efi partition
```bash
sudo mount /dev/sda1 /mnt
```
The efi partition should have a structure similar to:
```
/mnt/efi/EFI/
├── Boot/
│   └── bootx64.efi
├── Microsoft/
│   ├── Boot/
│   │   ├── bootmgfw.efi
│   │   ├── BCD
│   │   ├── memtest.efi
│   │   └── other boot-related files
```

**Step 3:** rename the bootmgfw.efi to ori_bootmgfw.efi. Copy grub.efi to the directory and rename it as the original windows efi, bootmgfw.efi. Reboot the PC should boot into grub.  

*Note: bootmgfw.efi is the windows efi.*

Finally, The computer should boot to grub when start. And **FREED FROM THE CLUTCHES OF WINDOWS!!!!!!!**