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
os.chdir('D:\\OneDrive - Universitat de Barcelona\\GitHub\\beat-perception-speech\\Material\\B\\Passive')
inpPath = os.getcwd()+'\\'
outPath=inpPath+'output\\'
NADpath = 'NADsil/'
xsyllpath='xsyll/'

#Import the audio files of the x-syllables
xsyllpath='xsyll/'

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

#open each one as a audiosegment
NAD= list(AudioSegment.empty())
for e in range(0,nNAD):
    NAD.append(AudioSegment.from_wav(NADpath+NADs[e],'wav'))
        

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


#FUNCTIONS

#Create the structure and insert at random the position of 'frequent syllables'


def insert_r():
    tot=[]
    for k in range(64):
        string= ['','','','','','','','']
        positions= random.sample(range(len(string)),2)
        string[max(positions)]='R2'
        string[min(positions)]= 'R1'
        tot.append(string)
    return tot

#Create all the possible combinations in pairs of frequent syllables

def combinations(syl):
    pairs=[]
    for i in range(len(syl)):
        comb= [s for s in syl if s != syl[i]] #exclude the frequent syllable of iteration to avoid the pair is created with the same syllable
        for f in range(len(comb)):
            for k in range(5):
                c= [syl[i], comb[f]]
                pairs.append(c)
    pairs.append([syl[0],syl[1]]) #this is to allow the counterbalancing of the pairs and the order in them 
    pairs.append([syl[1],syl[2]])
    pairs.append([syl[2],syl[3]])
    pairs.append([syl[3],syl[0]])
    np.random.shuffle(pairs)
    return pairs


#Insert in the random R positions the pairs of frequent syllables

def fill_str(positions, pairs):
    for i in range(len(positions)):
        pair= pairs[i]
        for g in range(len(positions[i])):
            if positions[i][g]== 'R1':
                positions[i][g]=pair[0]
            if positions[i][g]=='R2':
                positions[i][g]= pair[1]            
    return positions
                
#Insert the corrsponding audiosegment in the dictionary to the text of the syllables

def audio(order, dictionary):
    for i in range(len(order)):
        for g in range(len(order[i])):
            if order[i][g]!= '':
                audio = [v for k, v in dictionary.items() if k == order[i][g]]
                audio= audio[0]
                order[i][g]= audio
    return order
              
#Insert silences at specific positions

def sil(X):
    for i in range(len(X)):
        chunk=X[i]
        chunk.insert(3, NAD[3])
        chunk.insert(7, NAD[4])
        chunk.insert(10,NAD[5])
        X[i]= chunk 
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

#Merges the commands and creates the matrix with the sequences
def create(text, pairs):
    Y= fill_str(text,pairs)
    Y= audio(Y,D)
    Y=sil(Y)
    Y=fill_syll(Y)
    Y=checkaudio(Y)
    return Y

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
