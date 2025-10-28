# -*- coding: utf-8 -*-
"""
Created on Wed Oct  5 11:24:25 2022

@author: Bianca
"""
import mymodule_R_L2 as mf

        
#1. Create the dictionary for the mapping syllables to audio files (the order corresponds the order in the folders)

    
D= {'du': NAD[0],
    'fe':NAD[1],
    'go': NAD[2],
    'ra': NAD[3],
    'sil':NAD[4],
    'sil1': NAD[5],
    'sil2':NAD[6],
    'ba':xsyll[0],
    'bi': xsyll[1],
    'cha':xsyll[2],
    'me':xsyll[3],
    'mi':xsyll[4],
    'si':xsyll[5],
    'su':xsyll[6],
    'te': xsyll[7],
    'to': xsyll[8],
    'ño':xsyll[9],
    'ñu':xsyll[10]}


#2. List of the 2 rules (AB and CD)
a= 'go'
b= 'du'
c='fe'
d= 'ra'

#3: Synthetize the sequences 


# # Rule 1 (16 times for each position)

    #str1  (A1xx.C1xx.xx..)
    
k1= mf.create(16, [a,b], [0,3], D)

    #str2 (xxx.A1xx.C1x..)
k2= mf.create(16, [a,b],[3,6], D)

#Rule 2 (16 times for each position)
    #str1  (A2xx.C2xx.xx..)

t1= mf.create(16, [c,d], [0,3], D)
    #str2 (xxx.A2xx.C2x..)

t2= mf.create(16, [c,d], [3,6], D)

#4. merge 

ALL= k1+k2+t1+t2

random.shuffle(ALL)

mf.fill_silenceprob(ALL,[22, 42])
#function to put the silences (1/3, 1/3 and 1/3)

random.shuffle(ALL)

#5. export sound

output= mf.create_sound(ALL)       
outfile = "R_L4.wav"
output.export(outPath+outfile, format='wav')


#5. export text
outtext= text(D,ALL,outPath+'R_L2.txt')
