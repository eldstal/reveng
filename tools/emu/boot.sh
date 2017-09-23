#!/bin/bash
#qemu-system-arm -m 64 -M versatilepb -initrd initrd.img.gz -kernel vmlinuz-3.2.0-4-versatile -append "root=/dev/ram rdinit=/bin/sh" # -netdev type=tap,id=net0 -device virtio-net-device,netdev=net0
#qemu-system-arm -M versatilepb -kernel vmlinuz-3.2.0-4-versatile -initrd initrd.img-3.2.0-4-versatile -hda debian_squeeze_armel_standard.qcow2 -append "root=/dev/sda1"

# Raspbian jessie (works, but isn't armv7)
#qemu-system-arm -kernel kernel-qemu-4.4.34-jessie -cpu arm1176 -m 256 -M versatilepb -serial stdio -append "root=/dev/sda2 rootfstype=ext4 rw" -hda raspbian-jessie.img -hdb target.img -no-reboot

# Debian armhf
#qemu-system-arm -M vexpress-a9 \
#                -kernel vmlinuz-3.2.0-4-vexpress \
#                -append "root=/dev/mmcblk0p2 console=ttyAMA0" \
#                -nographic \
#                -initrd initrd.img-3.2.0-4-vexpress \
#                -drive if=sd,file=debian_wheezy_armhf_standard.qcow2


# Debian kernel, target filesystem as initrd. Works OK, but not quite clean.
#qemu-system-arm -M vexpress-a9 \
#                -kernel vmlinuz-3.2.0-4-vexpress \
#                -initrd target.initrd.gz \
#                -append "root=/dev/ram0 rw console=ttyAMA0 init=/bin/bash rdinit=/sbin/init keepinitrd" \
#                -nographic
#                #-drive if=sd,file=target.img
#                #-initrd initrd.img-3.2.0-4-vexpress \

# Debian kernel, target filesystem as initrd. Works OK, but not quite clean.
qemu-system-arm -M vexpress-a9 \
                -kernel zImage-Install \
                -append "root=/dev/ram0 rw init=/bin/bash rdinit=/sbin/init keepinitrd" \
                -nographic
                #-initrd target.initrd.gz \
                #-drive if=sd,file=target.img
                #-initrd initrd.img-3.2.0-4-vexpress \
