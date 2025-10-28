# -*- coding: utf-8 -*-
"""
Created on Wed Oct  5 11:24:25 2022

@author: Bianca
"""
import mymodule_RB_min_L4 as mf

#1. Create the dictionary for the mapping syllables to audio files (the order corresponds the order in the folders)

D= {'ja': NAD[0],
    'lo':NAD[1],
    'nu': NAD[2],
    'sil': NAD[3],
    'sil1':NAD[4],
    'sil2': NAD[5],
    'zi':NAD[6],
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


#3: Synthetize the sequences 

# Rule 1 (16 times for each position)

    #str1: (A1xxC1.xxx.x..)
k1= mf.create(16, [a,b ], [0,3], D)

    #str2: (xxxA1.xxC1.x..)
k2= mf.create(16, [a,b],[3,6], D)

#Rule 2 (16 times for each position)

    #str1: (A2xxC2.xxx.x..)
t1= mf.create(16, [c,d], [0,3], D)

    #str2: (xxxA2.xxC2.x..)
t2= mf.create(16, [c,d], [3,6], D)


#4. merge 


ALL= k1+k2+t1+t2

random.shuffle(ALL)
random.shuffle(ALL)

#5. export sound

output= mf.create_sound(ALL)
       
outfile = "RB-L4.wav"
output.export(outPath+outfile, format='wav')


#6. export text
outtext=mf.text(D,ALL,outPath+'RB-L4.txt')