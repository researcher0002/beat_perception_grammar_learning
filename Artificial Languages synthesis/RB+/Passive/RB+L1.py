# -*- coding: utf-8 -*-
"""
Created on Wed Oct  5 11:24:25 2022

@author: Bianca
"""
import mymodule_RB_pl_L1 as mf


    
#1. Create the dictionary for the mapping syllables to audio files (the order corresponds the order in the folders)

D= {'be': NAD[0],
    'ki':NAD[1],
    'pu': NAD[2],
    'sil': NAD[3],
    'sil1':NAD[4],
    'sil2': NAD[5],
    'ta':NAD[6],
    'cho':xsyll[0],
    'fa': xsyll[1],
    'fo':xsyll[2],
    'la':xsyll[3],
    'lu':xsyll[4],
    'ne':xsyll[5],
    'ni':xsyll[6],
    'ri': xsyll[7],
    'ro': xsyll[8],
    'ze':xsyll[9],
    'zu':xsyll[10]}

#2. List of the 2 rules (AB and CD)
a= 'pu'
b= 'ki'
c='ta'
d= 'be'

#3: Synthetize the sequences 

# Rule 1 (16 times for each position)

    #str1 (A1xx.C1xx.xx..)
k1= mf.create(16, [a,b], [0,3], D)

    #str2 (xxx.A1xx.C1x..)
k2= mf.create(16, [a,b],[3,6], D)

#Rule 2 (16 times for each position)

    #str1 (A2xx.C2xx.xx..)

t1= mf.create(16, [c,d], [0,3], D)
    #str2 (xxx.A2xx.C2x..)

t2= mf.create(16, [c,d], [3,6], D)

#4. merge 

ALL= k1+k2+t1+t2

random.shuffle(ALL)
random.shuffle(ALL)

#5. export sound

output= mf.create_sound(ALL)
       
outfile = "RB+L1.wav"
output.export(outPath+outfile, format='wav')

# =============================================================================
#6. export text

outtext=mf.text(D,ALL,outPath+'RB+L1.txt')