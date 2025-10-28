

# -*- coding: utf-8 -*-
"""
Created on Wed Oct  5 11:24:25 2022

@author: Bianca
"""
import mymodule_imp_B_L3 as mf



#1 open NAD and silences

# In the B condition we keep the occurrence of freuent syllables in pairs (but randomaized in combinations and in order)
# therefore when the target is a frequent syllable 18 sequneces, instead of 16, are generaed to allow the full
# balancing of the target syllable with being paired with all others in all possible positions.
#This is the reason why in the implicit test of the B condition participants are exposed to 8 sequences more

#For the creation of the sequences where x-syllables are targets, the equences 
# are 16 in number, as here the pairing of the freqent syllables is less relavant to the task.
# I create the 12 possible pairs (4ysllables x 3 combinatins) and add
# 4 more as this: A-B, B-C, C-D, D-A, to allow, again higher balancing of pairs and order in the sequence. 


#1. Create the dictionary for the mapping syllables to audio files (the order corresponds the order in the folders)


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

#2. List of the 2 rules (AB and CD) and the 2 x target syllables (not counterbalanced in B condition as no need cause not rules)

a= 'chu'
b= 'mo'
c= 'ñe'
d= 'sa'
x1= 'gu'
x2= 'ji'

sylls= [b,c,x1,x2]

#=======================================================================
#3.  Synthesis of sequences where targets are FREQUENT syllablex (rules)
# =============================================================================


#3.1 Sequences for target Rule 1

#half with it , half without it (18/18)

mo_r= mf.tot_rule(18,[b,a,c,d], 3)

#half without it
mo_nr= mf.tot_norule(18,[a,c,d], 3)

MO= mo_r + mo_nr

random.shuffle(MO)

m= mf.save(MO, 'a.'+b, D, b)

mt= mf.get_time(MO, D, b)
mtx= text0(D,MO)


#3.2 Sequences for target Rule 2

# half with it

nu_r= mf.tot_rule(18,[c, b, a, d], 3) #18 sequences with the combinations repeated 3x6 times 

#half without it

nu_nr= mf.tot_norule(18,[b,a,d], 3)

NU= nu_r + nu_nr

random.shuffle(NU)

n= mf.save(NU, 'b.'+ c, D, c)

nt= mf.get_time(NU, D, c)

ntx= text0(D,NU)

# =============================================================================
# 4.  Synthesis of sequences where targets are XSYLLABLES
# =============================================================================

#4.1 Sequences for target X1

#half with it
fi_r= mf.tot_xsyll(16, [a,b,c,d], 1, x1)
#hald without it
fi_nr= mf.tot_noxsyll(16, [a,b,c,d], 1, x1)

FI= fi_r + fi_nr

random.shuffle(FI)

f= mf.save(FI, 'c.'+x1, D, x1)

ft= mf.get_time(FI, D, x1)
ftx= text0(D,FI)

# 4.2 Sequences for target X2


#half with it 
pe_r= mf.tot_xsyll(16, [a,b,c,d], 1, x2)
#hald without it
pe_nr= mf.tot_noxsyll(16, [a,b,c,d], 1, x2)

PE= pe_r + pe_nr

random.shuffle(PE)

p= mf.save(PE, 'd.'+x2, D, x2)

pt= mf.get_time(PE, D, x2)

ptx= text0(D,PE)


# =============================================================================
#CREATE THE CSV FILE WITH INFO FOR EACH SEQUENCE, this is used in the experiment
# to iterate over sequences and store RTs
# =============================================================================

files= m+n+f+p
order= mtx+ntx+ftx+ptx
audiodir=[]
for i in files:
    audio_dir= 'impB_L3//'+ i
    audiodir.append(audio_dir)

time= mt+nt+ft+pt

#create the directory for thw pilot
#create the csv with the dir name and the time

tot= np.column_stack((audiodir, time, time, order))


#create the dataframe and save the csv
sequence= pd.DataFrame(tot,  columns = ['dirs', 'timeA', 'timeB','s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11'])

sequence.to_csv('Task_impB_L3.csv', index=False)

# =============================================================================
#CREATE THE CSV file with info of trials (for each target 4 sequences were played then it changed)
# =============================================================================

#The csv presents the  target syllable, the range of order where these
#sequences are found in the other csv, from which are polayed, and colours 
#of the target text displayed

def syll_(syll):
    t=[]
    tot=[]
    for i in range(len(syll)):
        c=[]
        if syll[i]== syll[0]:
            for k in range(9): #number of syllables repeats
                x= syll[i]
                c.append(x)
            t.append(c)
        if syll[i]== syll[1]:
            for k in range(9): #number of syllables repeats
                x= syll[i]
                c.append(x)
            t.append(c)
# =============================================================================
#         else: 
#              for k in range(8): #number of syllables repeats
#                  x= syll[i]
#                  c.append(x)
#              t.append(c)
# =============================================================================
        if syll[i]== syll[2]:
             for k in range(8): #number of syllables repeats
                 x= syll[i]
                 c.append(x)
             t.append(c)
        if syll[i]== syll[3]:
             for k in range(8): #number of syllables repeats
                 x= syll[i]
                 c.append(x)
             t.append(c)
    for g in range(len(t)):
        line= t[g]
        for v in range(len(line)):
            k= line[v]
            tot.append(k)
    return tot


cond= syll_(sylls)

# in such a way we will create 8 conditions for each syllable to put in the directory


#create the ranges where sequence wav files are found in the folder for each target

t= list(range(0, 140, 4)) #the sequence gap structure

def order(list):
    pairs=[]
    for i in range(len(t)):
        if t[i]!=0:
            single= str(t[i-1])+':'+str(t[i])
            pairs.append(single)
    return pairs

orders= order(t)      
#put in NP array
tot= np.column_stack((cond, orders))


#Set a colour for each target syllable
def colour(cond, syll):
    c=[]
    for i in range(len(cond)):
        if syll[0] in cond[i]:
            cl= 'red'
            c.append(cl)
        if syll[1] in cond[i]:
            cl='blue'
            c.append(cl)
        if syll[2] in cond[i]:
             cl='green'
             c.append(cl)
        if syll[3] in cond[i]:
             cl='orange'
             c.append(cl)
    return c

colrs= colour(cond, sylls)      

tot= np.column_stack((cond,cond, orders, colrs))
np.random.shuffle(tot)

# Create the dataframe and save the csv
sequence= pd.DataFrame(tot,  columns = ['condA','condB', 'ord', 'colour'])
sequence.to_csv('impB_L3.csv', index=False)

#Check that all sequences measure 2664ms

T= mf.timing(outPath)
T
