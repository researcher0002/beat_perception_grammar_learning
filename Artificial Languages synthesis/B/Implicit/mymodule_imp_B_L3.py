# -*- coding: utf-8 -*-
"""
Created on Tue Oct 18 15:24:47 2022

@author: Bianca
"""

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
os.chdir('D:\\OneDrive - Universitat de Barcelona\\GitHub\\beat-perception-speech\\Material\\B\\Implicit')   
inpPath = os.getcwd()
inpPath= inpPath+'\\'
outPath=inpPath+'impB_L3\\'
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
    
    
#I need the silences to insert them already in a more easy way

SIL=[AudioSegment.silent(duration=239),AudioSegment.silent(duration=238), AudioSegment.silent(duration=476)]    

D= {'chu': NAD[0],
    'mo':NAD[1],
    'sa': NAD[2],
    'sil':SIL[0],
    'sil1': SIL[1],
    'sil2':SIL[2],
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

# 1. Functions for creating sequences where targets are rules (frequent syllables )

#for the B condition we control also for the fact of at least two frequent syllables occcurring
#within each sequence (to match the other conditions with rules)
# Here we assign for each sequence a random position for where to put the randomized pair of frequent syllables

def insert_r(num):
    tot=[]
    for k in range(num):
        string= ['','','','','','','','']
        positions= random.sample(range(len(string)),2)
        string[max(positions)]='R2' #we want to keep the order
        string[min(positions)]= 'R1'
        tot.append(string)
    return tot


# Create all the possible combinations of the frequent syllables

def combinations_rule(syl, num): 
    pairs=[]
    comb= [s for s in syl if s != syl[0]]
    for f in range(len(comb)):#exclude the frequent syllable of iteration to avoid the pair is created with the same syllable
        for k in range(num):
            c= [syl[0], comb[f]]
            pairs.append(c)
        for j in range(num):
            d= [comb[f], syl[0]]
            pairs.append(d)
    np.random.shuffle(pairs)
    return pairs

# This is to create the sequences so that the target frequent syllable is not there (to counterbalance the presentation)

def combinations_norule(syl,num):  #Simply enter the three syllables without the frequent target
    pairs=[]
    for i in range(len(syl)):
        comb= [s for s in syl if s != syl[i]]
        for f in range(len(comb)):
            for k in range(num):
                c= [syl[i], comb[f]]
                pairs.append(c)
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


# 2. Functions for creating sequences where targets are xsyllables

# Insert a marker for the position in the sequence of the frequent syllables (R1 and R2) and of the x target syllable (Syll)
def insert_rx(num):
    tot=[]
    for k in range(num):
        string= ['','','','','','','','']
        positions= random.sample(range(len(string)),3)
        f= random.sample((positions),1)
        string[f[0]]= 'Syll'
        posrule= [i for i in positions if i != f[0]]
        string[max(posrule)]='R2'
        string[min(posrule)]= 'R1'
        tot.append(string)
    return tot


#. Fill the positions with the text of the corresponding syllables 

def fill_strx(positions, pairs, xsyllable): 
    for i in range(len(positions)):
        pair= pairs[i]
        for g in range(len(positions[i])):
            if positions[i][g]== 'R1':
                positions[i][g]=pair[0]
            if positions[i][g]=='R2':
                positions[i][g]= pair[1]  
            if positions[i][g]=='Syll':
                positions[i][g]= xsyllable  
    return positions


# Create the combinations of the frequent syllables in the case the target is the X syllable
# (see B_L3.py)

def combinations_xsyll(syl, num): # it will be 16 sequences
    pairs=[]
    for i in range(len(syl)):
        comb= [s for s in syl if s != syl[i]]
        for f in range(len(comb)):
            for k in range(num):
                c= [syl[i], comb[f]]
                pairs.append(c)
    pairs.append([syl[0],syl[1]])
    pairs.append([syl[1],syl[2]])
    pairs.append([syl[2],syl[3]])
    pairs.append([syl[3],syl[0]])
    np.random.shuffle(pairs)
    return pairs

#Inserts the filler X syllables in the sequence  excluding the target xsyllable
    
def fill_syllx(X, sylout): #fill with all syllables minus the x one
   xs= [f for f in os.listdir(xsyllpath) if f!= sylout]
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
   
def checkaudiox(X, sylout):
   xs= [f for f in os.listdir(xsyllpath) if f!= sylout]
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
 
##Common functions across all sequences

def audio(order, dictionary):
    for i in range(len(order)):
        for g in range(len(order[i])):
            if order[i][g]!= '':
                audio = [v for k, v in dictionary.items() if k == order[i][g]]
                audio= audio[0]
                order[i][g]= audio
    return order

        

#insert silences 

def sil(X):
    for i in range(len(X)):
        chunk=X[i]
        chunk.insert(3, SIL[0])
        chunk.insert(7, SIL[1])
        chunk.insert(10,SIL[2])
        X[i]= chunk 
    return X
   
#fill syll

def fill_syll(X):
    for row in range(len(X)):
        for col in range(len(X[row])):
            if X[row][col] =='':
                 numero = random.randint(0, len(xsyll)-1)
                 X[row][col]= xsyll[numero]
    return X

#clean repetitions

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


##Functions that merge the commands


#Create the sequences where target is frequent syllables (rules) and target is there
    
def tot_rule(num_seq, syll_rule, num_pairs):
    text= insert_r(num_seq)
    pairs= combinations_rule(syll_rule, num_pairs)
    Y= fill_str(text, pairs)
    Y=audio(Y,D)
    Y=sil(Y)
    Y=fill_syll(Y)
    Y=checkaudio(Y)
    return Y

# Create the sequences where target is frequent syllable and target not there

def tot_norule(num_seq, syll_rule, num_pairs):
    text= insert_r(num_seq)
    pairs= combinations_norule(syll_rule, num_pairs)
    Y= fill_str(text, pairs)
    Y=audio(Y,D)
    Y=sil(Y)
    Y=fill_syll(Y)
    Y=checkaudio(Y)
    return Y

# Create sequences where target is the xsyllable and target is there

def tot_xsyll(num_seq, syll_rule, num_pairs, xsyllable):
    text= insert_rx(num_seq)
    pairs= combinations_xsyll(syll_rule, num_pairs) #will be all four xsyllables, in 16 
    Y= fill_strx(text, pairs, xsyllable)
    Y=audio(Y,D)
    Y=sil(Y)
    wav= xsyllable+'.wav'
    Y=fill_syllx(Y,wav) #fill with other syllables minus the x one
    Y=checkaudiox(Y,wav) #check and change excuding the xsll
    return Y

# Create sequences where target is Xsyllable and target not there

def tot_noxsyll(num_seq, syll_rule, num_pairs, xsyllable):
    text= insert_r(num_seq)
    pairs= combinations_xsyll(syll_rule, num_pairs)
    Y= fill_str(text, pairs)
    Y=audio(Y,D)
    Y=sil(Y)
    wav= xsyllable+'.wav'
    Y=fill_syllx(Y,wav)
    Y=checkaudiox(Y,wav)
    return Y

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
    return combined_sound

#Export the audio file with a specific name in .wav format

def sound(x,name):
    for row in range(len(x)):
        v= create_sound(x[row])
        outfile = name
        v.export(outPath+outfile, format='wav')
        
        
        
# Given sequence and name of wav file save the single sequence as an audio

def save(X,name, D, syll):
    #X= create(sequence)
    c= get_time(X, D, syll)
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


