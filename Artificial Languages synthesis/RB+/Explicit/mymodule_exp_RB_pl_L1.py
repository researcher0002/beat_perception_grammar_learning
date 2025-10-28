# -*- coding: utf-8 -*-
"""
Created on Mon Oct 10 10:45:17 2022

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
import pandas as pd

system_random = random.SystemRandom()
seed_value = system_random.randint(0, 2**32 - 1)
# Set the random seed
random.seed(seed_value)


#Working paths
os.chdir('D:\\OneDrive - Universitat de Barcelona\\GitHub\\beat-perception-speech\\Material\\RB+\\Explicit')   
inpPath = os.getcwd()+'\\'
outPath=inpPath+'testRB_pl_L1\\'
NADpath = 'NADsil/'
xsyllpath='xsyll/'

# Open the xsyllables used in the functions 
xsyllpath='xsyll//'

xsylls = [f for f in os.listdir(xsyllpath) if f.endswith('.wav')]

nxsylls = len(xsylls)

print(xsylls)

xsyll= list(AudioSegment.empty())
for e in range(0,nxsylls):
    xsyll.append(AudioSegment.from_wav(xsyllpath+xsylls[e],'wav'))
    
    
# Open NADs

NADs = [f for f in os.listdir(NADpath) if f.endswith('.wav')]

nNAD = len(NADs)

print(nNAD)

#open each one as a audiosegment
NAD= list(AudioSegment.empty())
for e in range(0,nNAD):
    NAD.append(AudioSegment.from_wav(NADpath+NADs[e],'wav'))
    


#FUNCTIONS

#Creates the skeleton of the single sequences, putting in the desired place the rule syllables and the silences (in this case synthetized within pydub see README)
def structure(times, rule, position, D):
    X=[]
    for i in range(times):
        if len(rule)==2:
            chunk= ['','','','','','']
            one= [v for k, v in D.items() if k == rule[0]]
            chunk.insert(position[0], one[0])
            two= [v for k, v in D.items() if k == rule[1]]
            chunk.insert(position[1], (two[0]))
            chunk.insert(3, AudioSegment.silent(duration=239))
            chunk.insert(7, AudioSegment.silent(duration=238))
            chunk.insert(10,AudioSegment.silent(duration=476))
        if len(rule)== 1:
            chunk= ['','','','','','','']
            one= [v for k, v in D.items() if k == rule[0]]
            chunk.insert(position[0], one[0])
            chunk.insert(3, AudioSegment.silent(duration=239))
            chunk.insert(7, AudioSegment.silent(duration=238))
            chunk.insert(10,AudioSegment.silent(duration=476))
        X.append(chunk)
    return X
   
   

#Inserts the filler X syllables in the sequence

def fill_syll(X):
    #X the result of function structure
    for row in range(len(X)):
        for col in range(len(X[row])):
            if X[row][col] =='':
                 numero = random.randint(0, len(xsyll)-1)
                 X[row][col]= xsyll[numero]
    return X


#Cleans the sequence from any repeatition of the filler x-syllables. Within each sequence each syllable must be unique
def checkaudio(X):
    #X the result of function structure
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


#From the single audio files this function creates a unique audio file

def create_sound(ALL):
    combined_sound = AudioSegment.empty()
    for i in range(len(ALL)):
        v=ALL[i]
        for l in range(len(v)):
            combined_sound +=v[l]
#        output= AudioSegment.normalize(combined_sound)
    return combined_sound

def create_sound_fromlist(ALL):
    combined_sound = AudioSegment.empty()
    for i in range(len(ALL)):
        v=ALL[i]
        combined_sound +=v
    return combined_sound


# Given sequence and name save the single string

def save(X,name):
    #X= create(sequence)
    d=[]
    for row in range(len(X)):
        v= create_sound(X[row])
        number= str(row)+'.wav'
        outfile = name+number
        v.export(outPath+outfile, format='wav')
        d.append(outfile)
    return d


#CHECKLENGTH of each single synthgetized sequence in ms

def timing (outPath):
    t=[]
    test = [f for f in os.listdir(outPath) if f.endswith('.wav')]
    tests= list(AudioSegment.empty())
    for e in range(len(test)):
        tests.append(AudioSegment.from_wav(outPath+test[e],'wav'))
    for k in range(len(tests)):
        dur = len(tests[k])
        t.append(dur)
    return t


