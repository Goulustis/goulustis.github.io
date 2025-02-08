---
layout: post
title: Adding a grub entry
date: 2025-02-07 00:51:00
description: How to add a grub entry
# tags: random
# categories: random
thumbnail: assets/img/1.jpg
---

Add the below to `/etc/grub.d/40_custom`:

```
menuentry "Windows Boot Manager 2" {
    insmod part_gpt
    insmod fat
    set root=(hd1,gpt1)
    chainloader /EFI/Microsoft/Boot/ori_bootmgfw.efi
}
```
For the root thing... If it ain't `hd0,gpt1` or `hd1,gpt1`:
- reboot to grub menue
- press `c`
- ls and you should see something like: `(hd0), (hd1,gpt1) ....`
- you can `ls (hd1,gpt1)/`. If you see a `$BOOT`, thats the thing you should set