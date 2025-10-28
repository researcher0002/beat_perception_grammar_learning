# -*- coding: utf-8 -*-
"""
Created on Wed Oct  5 11:24:25 2022

@author: Bianca
"""

import mymodule_B_L3 as mf



D= {'chu': NAD[0],
    'mo':NAD[1],
    'sa': NAD[2],
    'sil':NAD[3],
    'sil1': NAD[4],
    'sil2':NAD[5],
    'ñe': NAD[6],
    'di':xsyll[0],
    'do': xsyll[1],
    'fu':xsyll[2],
    'ga':xsyll[3],
    'gu':xsyll[4],
    'je':xsyll[5],
    'ji':xsyll[6],
    'ka': xsyll[7],
    'ko': xsyll[8],
    'le':xsyll[9],
    'li':xsyll[10]}

a= 'chu'
b= 'mo'
c= 'ñe'
d= 'sa'
#create it
text= mf.insert_r()
pairs= mf.combinations([a,b,c,d])
ALL= mf.create(text, pairs)
d=ALL

#synthetize the sound
output= mf.create_sound(ALL)       
outfile = "B_L3.wav"
output.export(outPath+outfile, format='wav')

#export text
mf.text(D,d,outPath+'B_L3.txt')

