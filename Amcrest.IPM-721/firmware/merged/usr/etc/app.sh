#! /bin/sh
#for profile.txt

#���ԵĿ��Ź����ʱʱ��ֻ��65�룬������sonia����ǰ��ιһ�ι�
echo f > /proc/osa_root/pdc/pdcWdt

oldDBFile="/mnt/mtd/Config/intell/numstathour.db"
if [ -e "$oldDBFile" ]
then
    echo "numstathour.db exist"
    mv /mnt/mtd/Config/intell/numstathour.db /mnt/mtd/Config/intell/intelli.db
fi



sonia_para=""
if [ -f /var/tmp/sonia_para ];then
sonia_para=`cat /var/tmp/sonia_para`
fi
/usr/bin/sonia $sonia_para
#cd /usr/bin
#unlzma sonia.lzma -d /var/tmp
#/var/tmp/sonia $sonia_para

state=$?
echo "####application exit:${state}, system will reboot!"
/usr/sbin/upgraded

#reboot
