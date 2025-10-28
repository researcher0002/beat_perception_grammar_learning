# -*- coding: utf-8 -*-
"""
Created on Tue Oct 18 15:24:47 2022

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
os.chdir('D:\\OneDrive - Universitat de Barcelona\\GitHub\\beat-perception-speech\\Material\\R\\Implicit')   
inpPath = os.getcwd()+'\\'
outPath=inpPath+'impR_L2\\'
NADpath = 'NADsil/'
xsyllpath='xsyll/'


## cancel output files from the folder
cancel= [k for k in os.listdir(outPath) if k.endswith('.wav')]
for j in range(len(cancel)):
    os.remove(outPath+ cancel[j])
    
    
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
    
    
    
#I need the silences to insert them already in a more easy way

SIL=[AudioSegment.silent(duration=239),AudioSegment.silent(duration=238), AudioSegment.silent(duration=476)]    


D= {'du': NAD[0],
    'fe':NAD[1],
    'go': NAD[2],
    'ra': NAD[3],
    'sil':SIL[0],
    'sil1': SIL[1],
    'sil2':SIL[2],
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



#FUNCTIONS

# 1. Functions for creating sequences where targets are rules

#Creates the skeleton of the single sequences, putting in the desired place the rule syllables and the silences
def structure(times, rule, position, D): #number of sequences i want, thee rule i want, the position and the dictionary of stored omes
    X=[]
    for i in range(times):
        chunk= ['','','','','','']
        one= [v for k, v in D.items() if k == rule[0]]
        chunk.insert(position[0], one[0])
        two= [v for k, v in D.items() if k == rule[1]]
        chunk.insert(position[1], (two[0]))
# =============================================================================
#         chunk.insert(3, 'S')
#         chunk.insert(7, 'S')
#         chunk.insert(10, 'S')
# =============================================================================
        X.append(chunk)
    return X
   


#function to insert silence positions 
#put the long silence at semirandom positions: 1/3 first position, 1/3 second and 1/3 last: i created three to counterbalance the gaps order
       
def fill_silenceprob(X, gaps):
    for row in range(len(X)):
        if row < gaps[0]:
            X[row].insert(3, SIL[0])
            X[row].insert(7,  SIL[1])
            X[row].insert(10, SIL[2])
        if gaps[0] <= row <= gaps[1]:
           X[row].insert(3, SIL[2])
           X[row].insert(7,  SIL[0])
           X[row].insert(10, SIL[1])
        if row > gaps[1]:
           X[row].insert(3, SIL[0])
           X[row].insert(7,  SIL[2])
           X[row].insert(10, SIL[1])
    return X

def fill_silenceprob1(X, gaps):
    for row in range(len(X)):
        if row < gaps[0]:
            X[row].insert(3, SIL[2])
            X[row].insert(7, SIL[0])
            X[row].insert(10, SIL[1])
        if gaps[0] <= row <= gaps[1]:
            X[row].insert(3, SIL[0])
            X[row].insert(7, SIL[2])
            X[row].insert(10, SIL[1])
        if row > gaps[1]:
            X[row].insert(3, SIL[0])
            X[row].insert(7, SIL[1])
            X[row].insert(10, SIL[2])
    return X


def fill_silenceprob2(X,gaps):
    for row in range(len(X)):
        if row < gaps[0]:
            X[row].insert(3, SIL[0])
            X[row].insert(7, SIL[2])
            X[row].insert(10, SIL[1])
        if gaps[0] <= row <= gaps[1]:
            X[row].insert(3, SIL[0])
            X[row].insert(7, SIL[1])
            X[row].insert(10, SIL[2])
        if row > gaps[1]:
           X[row].insert(3, SIL[2])
           X[row].insert(7, SIL[0])
           X[row].insert(10, SIL[1])
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


# 2. Functions for creating sequences where targets are xsyllables


def structurex(times, rule, position, D): #third rule will be the xsyllable selected #modified due to the other xsyllable paors
    X=[]
    for i in range(times):
        chunk= ['','','','']
        pos_syl= random.sample(range(len(chunk)),2) #here two beacause the random xsylls are 2
        xsl= [v for k, v in D.items() if k == rule[2]]
        xsl2= [v for k, v in D.items() if k == rule[3]]
        chunk.insert(pos_syl[0], (xsl[0]))
        chunk.insert(pos_syl[1], (xsl2[0]))
        one= [v for k, v in D.items() if k == rule[0]]
        chunk.insert(position[0], one[0])
        two= [v for k, v in D.items() if k == rule[1]]
        chunk.insert(position[1], (two[0]))
# =============================================================================
#         chunk.insert(3, AudioSegment.silent(duration=239))
#         chunk.insert(7, AudioSegment.silent(duration=238))
#         chunk.insert(10,AudioSegment.silent(duration=476))
# =============================================================================
        X.append(chunk)
    return X

#Inserts the filler X syllables in the sequence  excluding the target xsyllable

def fill_syllx(X, sylout): #put the extension of the syllable  I will have to put both 
   xs= [f for f in os.listdir(xsyllpath) if f not in sylout]
   n = len(xs)
   xsyll2= list(AudioSegment.empty())
   for e in range(0,n):
       xsyll2.append(AudioSegment.from_wav(xsyllpath+xs[e],'wav'))
   for row in range(len(X)):
        for col in range(len(X[row])):
            if X[row][col] =='':
                 numero = random.randint(0, len(xsyll2)-1)
                 X[row][col]= xsyll2[numero]
   return X

#Cleans the sequence from any repeatition of the filler x-syllables excluding from the pool of syllables the target xsyllable. 
#Within each sequence each syllable must be unique
   
def checkaudiox(X, sylout): #remember to put the wav extension of the syllable
   xs= [f for f in os.listdir(xsyllpath) if f not in sylout]
   n = len(xs)
   xsyll2= list(AudioSegment.empty())
   for e in range(0,n):
       xsyll2.append(AudioSegment.from_wav(xsyllpath+xs[e],'wav'))
   for row in range (len(X)):
            string= list(X[row]) #isolate the 12 events
            for sill in range(len(string)): #isolate the single element in the row
               while string.count(string[sill]) > 1:
                   numero = random.randint(0, len(xsyll2)-1)
                   string[sill]= xsyll2[numero]
                   row2=string
                   X[row]= row2
   return X

##Functions that merge the commands


#Create the sequences where target is rule

def create(times, rule, position, Dic):
    X= structure(times, rule, position, Dic)
    X=fill_syll(X)
    X=checkaudio(X)
    return X

#Create sequences where tarhet are xsyllable 


def createx(times, rule, position, Dic): #the third must be the wav extension
    X= structurex(times, rule, position, Dic)
    xsyl= rule[2]+'.wav'
    xsyl1= rule[3]+'.wav'
    X=fill_syllx(X, [xsyl,xsyl1])
    X=checkaudiox(X, [xsyl,xsyl1])
    return X

#Create sequences without the xsyllable to balance the number of exposure times 

def createxx(times, rule, position, Dic):
    X= structure(times, rule, position, Dic)
    xsyl= rule[2]+'.wav'
    xsyl1= rule[3]+'.wav'
    X=fill_syllx(X, [xsyl,xsyl1])
    X=checkaudiox(X, [xsyl,xsyl1])
    return X

#Functions for all the created sequences

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
#        output= AudioSegment.normalize(combined_sound)
    return  combined_sound
  

#Export the audio file with a specific name in .wav format

def sound(x,name):
    for row in range(len(x)):
        v= create_sound(x[row])
        outfile = name
        v.export(outPath+outfile, format='wav')
        
        
        
# Given sequence and name of wav file save the single sequence as an audio

def save(X,name, D, syll):
    #X= create(sequence)
    if len(syll)>1:
        c= get_time(X, D, syll[0])
        g= get_time(X,D, syll[1])
        d=[]
        for row in range(len(X)):
            l= c[row]
            f= g[row]
            v= create_sound(X[row])
            number= str(row)+'.'+str(l)+ '.'+ str(f)+'.wav'
            outfile = name+number
            v.export(outPath+outfile, format='wav')
            d.append(outfile)
    if len(syll)==1:
        c= get_time(X, D, syll[0])
        d=[]
        for row in range(len(X)):
            l= c[row]
            v= create_sound(X[row])
            number= str(row)+'.'+str(l)+'.wav'
            outfile = name+number
            v.export(outPath+outfile, format='wav')
            d.append(outfile)    
    return d

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

#For each sequence extract the correpsonent syllable letters 

def text0(dictionary, seq):
    c=[]
    for i in range(len(seq)):
        riga= seq[i]
        l=[]
        for sill in range(len(riga)):
            key= [k for k, v in dictionary.items() if v == riga[sill]]
            l.append(key[0])
        c.append(l)
    return c

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

