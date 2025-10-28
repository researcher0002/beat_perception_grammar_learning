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
os.chdir('D:\\OneDrive - Universitat de Barcelona\\GitHub\\beat-perception-speech\\Material\\RB-\\Passive')   
inpPath = os.getcwd()+'\\'
outPath=inpPath+'output\\'
NADpath = 'NADsil/'
xsyllpath='xsyll/'

#Import the audio files of the x-syllables

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

NAD= list(AudioSegment.empty())
for e in range(0,nNAD):
    NAD.append(AudioSegment.from_wav(NADpath+NADs[e],'wav'))


#FUNCTIONS


#Create the structure with silences and rules at specific positions for a certain number of times

def structure(times, rule, position, D): #number of sequences i want, thee rule i want, the position and the dictionary of stored omes
    X=[]
    for i in range(times):
        chunk= ['','','','','','']
        one= [v for k, v in D.items() if k == rule[0]]
        chunk.insert(position[0], one[0])
        two= [v for k, v in D.items() if k == rule[1]]
        chunk.insert(position[1], (two[0]))
        sil= [v for k, v in D.items() if k == 'sil']
        chunk.insert(4, sil[0])
        sil1= [v for k, v in D.items() if k == 'sil1']
        chunk.insert(8, sil1[0])
        sil2= [v for k, v in D.items() if k == 'sil2']
        chunk.insert(10, sil2[0])
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

#To detect the moment of when a specific syllable happen in the sequence for each syllable stored in the Dictionary

def get_time(X,dictionary,syll):
    T=[]
    for row in range(len(X)):
        seq= X[row]
        c=0
        for i in range(len(seq)):
            key= [k for k, v in dictionary.items() if v == seq[i]]
            if key[0] == syll:
                break  
            if key[0] != syll:
                t= len(seq[i])
                if key[0]== 'sil':
                    t= 222
                if key[0] == 'sil1':
                    t= 222
                if key[0] == 'sil2':
                    t=444
                c=c+t
        T.append(c)
    for k in range(len(T)):
        if T[k]> 2200:
            T[k]= 'none'
    return T
    
#From the single audio files this function creates a unique audio file

def create_sound(X):
    combined_sound = AudioSegment.empty()
    for row in range(len(X)):
        for col in range(len(X[row])):
            v= X[row][col] 
            combined_sound +=v
    return combined_sound

#Export the audio file with a specific name in .wav format
def sound(x,name):
    for row in range(len(x)):
        v= create_sound(x[row])
        outfile = name
        v.export(outPath+outfile, format='wav')
        
              
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

#Check the whole length of the synthetized audio in milliseconds

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
