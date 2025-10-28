# -*- coding: utf-8 -*-
"""
Created on Mon Oct 10 10:42:30 2022

@author: Bianca
"""


#TESTING

import mymodule_exp_RB_min_L4 as mf


#1. Create the dictionary for the mapping syllables to audio files (the order corresponds the order in the folders)

D= {'ja': NAD[0],
    'lo':NAD[1],
    'nu': NAD[2],
    'zi':NAD[3],
    'bo':xsyll[0],
    'bu': xsyll[1],
    'ci':xsyll[2],
    'da':xsyll[3],
    'de':xsyll[4],
    'pe':xsyll[5],
    'po':xsyll[6],
    're': xsyll[7],
    'ru': xsyll[8],
    'ña':xsyll[9],
    'ñi':xsyll[10]}

#2. List of the 2 rules (AB and CD)


a= 'zi'
b= 'lo'
c='ja'
d='nu'

#3. Create RULES sequences
# =============================================================================
# #create 12 rule conditions to counterbalance the others
# =============================================================================

#Rule 1

#str1 A1xx.C1xx.xx..
  
k1= mf.create(3, [a,b], [0,3], D)
mf.save(k1, 'r1.s1.')

#str2 xxx.A1xx.C1x..

k2= mf.create(3, [a,b],[3,6], D)

mf.save(k2, 'r1.s2.')

#Rule 2

#str1 A2xx.C2xx.xx..

t1= mf.create(3, [c,d], [0,3], D)
mf.save(t1, 'r2.s1.')

#str2 xxx.A2xx.C2x..

t2= mf.create(3, [c,d], [3,6], D)

mf.save(t2, 'r2.s2.')

# =============================================================================
# 4. CREATE VIOLATIONS
# =============================================================================
# 4.1 DEPENDENCY VIOLATIONS  


#Rule 1

#str1 (A1xx.xxx.xx): 
   

dv1= mf.create(1, [a],[0], D)
mf.save(dv1, 'dep_viol.r1.s1.')

#str2 xxx.A1xx.xx..


dv2= mf.create(1, [a],[3], D)
mf.save(dv2, 'dep_viol.r1.s2.')

#Rule 2

#str1 A2xx.xxx.xx..

dv3= mf.create(1, [c],[0], D)
mf.save(dv3, 'dep_viol.r2.s1.')

#str2 xxx.A2xx.xx..

dv4= mf.create(1, [c],[3], D)
mf.save(dv4, 'dep_viol.r2.s2.')

#4.2 CATEGORY VIOLATIONS (C1A1)

#Rule 1

#str1 (C1xx.A1xx.xx):

cv1= mf.create(1, [b,a],[0,3], D)
mf.save(cv1, 'cat_viol.r1.s1.')

#str2 xxx.C1xx.A1x..

cv2= mf.create(1, [b,a],[3,6], D)
mf.save(cv2, 'cat_viol.r1.s2.')

#Rule 2

#str1 (C2xx.A2xx.xx):
    
cv3= mf.create(1, [d,c],[0,3], D)
mf.save(cv3, 'cat_viol.r2.s1.')

#str2 xxx.C2xx.A2x..

cv4= mf.create(1, [d,c],[3,6], D)
mf.save(cv4, 'cat_viol.r2.s2.')

#4.3 TIMING VIOLATIONS 

#Rule 1

#str1 xA1x.xC1x.xx: 

tv1= mf.create(1, [a,b],[1,4], D)
mf.save(tv1, 'time_viol.r1.s1.')

#str2 xxx.xA1x.xC1..

tv2= mf.create(1, [a,b],[4,7], D)
mf.save(tv2, 'time_viol.r1.s2.')

#Rule 2

#str1 xA2x.xC2x.xx: 

tv3= mf.create(1, [c,d],[1,4], D)
mf.save(tv3, 'time_viol.r2.s1.')

#str2 xxx.xA2x.xC2..

tv4= mf.create(1, [c,d],[4,7], D)
mf.save(tv4, 'time_viol.r2.s2.')

#Create the .csv for the experiment script

sourcePath = inpPath+'testRB_min_L4'

#store data with corresponding participant
#subject_info, filepath, exp_date = rsp.subject_info()

#audio_names:
    
audionames = [f for f in os.listdir(sourcePath) if f.endswith('.wav')]

print(audionames)
audiodir=[]
for i in audionames:
    audio_dir= 'testRB-L4//'+ i
    audiodir.append(audio_dir)

header=['test']
names = pd.DataFrame(data=audiodir,columns=header)
output=names.to_csv('testRB-L4.csv', index= False)

t= timing (outPath)
t