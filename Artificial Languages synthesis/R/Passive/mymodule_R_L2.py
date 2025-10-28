# -*- coding: utf-8 -*-
"""
Created on Tue Oct  4 10:27:18 2022

@author: Bianca
"""
import os
import pydub
from pydub import AudioSegment
from pydub import effects
import glob
import random
import time
import numpy as np
from pydub.playback import play

system_random = random.SystemRandom()
seed_value = system_random.randint(0, 2**32 - 1)
# Set the random seed
random.seed(seed_value)

#Working paths
os.chdir('D:\\OneDrive - Universitat de Barcelona\\GitHub\\beat-perception-speech\\Material\\R\\Passive')   
inpPath = os.getcwd()+'\\'
outPath=inpPath+'output\\'
NADpath = 'NADsil/'
xsyllpath='xsyll/'

#Import the audio files of the x-syllables
xsyllpath='xsyll//'

xsylls = [f for f in os.listdir(xsyllpath) if f.endswith('.wav')]

nxsylls = len(xsylls)

print(xsylls)

xsyll= list(AudioSegment.empty())
for e in range(0,nxsylls):
    xsyll.append(AudioSegment.from_wav(xsyllpath+xsylls[e],'wav'))


#Import the audiofiles of the NAD rules

NADs = [f for f in os.listdir(NADpath) if f.endswith('.wav')]

nNAD = len(NADs)

print(nNAD)

#2. open each RULE one as a audiosegment
NAD= list(AudioSegment.empty())
for e in range(0,nNAD):
    NAD.append(AudioSegment.from_wav(NADpath+NADs[e],'wav'))
    

SIL= [NAD[4], NAD[5],NAD[6]]


# =============================================================================
#FUNCTIONS: 
    
#For the R condition first i create the structure of the sequence without silences and then i put them in
def structure(times, rule, position, D): #number of sequences i want, thee rule i want, the position and the dictionary of stored names
    X=[]
    for i in range(times):
        chunk= ['','','','','','']
        one= [v for k, v in D.items() if k == rule[0]]
        chunk.insert(position[0], one[0])
        two= [v for k, v in D.items() if k == rule[1]]
        chunk.insert(position[1], (two[0]))
        X.append(chunk)
    return X



#Inserts the filler X syllables in the sequence

def fill_syll(X):
    for row in range(len(X)):
        for col in range(len(X[row])):
            if X[row][col] =='':
                 numero = random.randint(0, len(xsyll)-1)
                 X[row][col]= xsyll[numero]
    return X

#Cleans the sequence from any repeatition of the filler x-syllables. Within each sequence each syllable must be unique

def checkaudio(X):
    for row in range (len(X)):
        string= list(X[row]) #isolate the 12 events
        for sill in range(len(string)): #isolate the single element in the row
           while string.count(string[sill]) > 1:
               numero = random.randint(0, len(xsyll)-1)
               string[sill]= xsyll[numero]
               row2=string
               X[row]= row2
    return X

#Function that merges the commands
def create(times, rule, position, Dic):
    X= structure(times, rule, position, Dic)
    X=fill_syll(X)
    X=checkaudio(X)
    return X

#Insertion of the silence at quasi-random: 1/3 first position, 1/3 second and 1/3 last

def fill_silenceprob(X, gaps): #insert the ratios of 1/3 silence in first, second and third positions
    for row in range(len(X)):
        if row < gaps[0]:
            X[row].insert(3, NAD[4])
            X[row].insert(7, NAD[5])
            X[row].insert(10, NAD[6])
        if gaps[0] <= row <= gaps[1]:
            X[row].insert(3, NAD[6])
            X[row].insert(7, NAD[4])
            X[row].insert(10, NAD[5])
        if row > gaps[1]:
            X[row].insert(3, NAD[4])
            X[row].insert(7, NAD[6])
            X[row].insert(10, NAD[5])
    return X

#From the single audio files this function creates a unique audio file

def create_sound(ALL):
    combined_sound = AudioSegment.empty()
    for i in range(len(ALL)):
        v=ALL[i]
        for l in range(len(v)):
            combined_sound +=v[l]
    return combined_sound

#Create and save the text file with the written syllables constituting the Language
def text(dictionary, seq, namefile):
    c=[]
    lista=[]
    for row in range(len(seq)):
        line= list(seq[row])
        lista.append(line)
    for i in range(len(lista)):
        riga= lista[i]
        for sill in range(len(riga)):
            key= [k for k, v in dictionary.items() if v == riga[sill]]
            c.append(key)
    with open(namefile, "w") as output:
        output.write(str(c))
    return c