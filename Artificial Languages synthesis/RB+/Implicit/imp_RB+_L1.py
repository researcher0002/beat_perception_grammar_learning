# -*- coding: utf-8 -*-
"""
Created on Fri Mar 31 11:26:59 2023

@author: bianca.franzoia
"""

import mymodule_imp_RB_pl_L1 as mf

#1. Create the dictionary for the mapping syllables to audio files (the order corresponds the order in the folders)


# Silences
SIL=[AudioSegment.silent(duration=239),AudioSegment.silent(duration=238), AudioSegment.silent(duration=476)]    

D= {'be': NAD[0],
    'ki': NAD[1],
    'pu': NAD[2],
    'sil': SIL[0],
    'sil1':SIL[1],
    'sil2': SIL[2],
    'ta':NAD[3],
    'cho':xsyll[0],
    'fa': xsyll[1],
    'fo':xsyll[2],
    'la':xsyll[3],
    'lu':xsyll[4],
    'ne':xsyll[5],
    'ni':xsyll[6],
    'ri': xsyll[7],
    'ro': xsyll[8],
    'ze':xsyll[9],
    'zu':xsyll[10]}


#2. List of the 2 rules (AB and CD) and the 4 x target syllables 

# Half of the participants were detecting A and D; half B and C. This was done to prevent biases towards a specific rule
# In the same way depending on group assignemnt we also made x tragets different across the groups, that's why they are 4.


a= 'pu'
b= 'ki'
c='ta'
d= 'be'
x1= 'ro'
x2= 'ne'
x3 = 'fo'
x4='ni'


sylls1= [b,c, x1,x2]
sylls2= [a,d,x3,x4]


#=======================================================================
#3.  Synthesis of sequences where targets are RULES
# =============================================================================

#3.1 Sequences for target Rule 1

#Rule 1

#str1 A1xx.C1xx.xx..
  
k1= mf.create(8, [a,b], [0,3], D)

#str2 xxx.A1xx.C1x..

k2= mf.create(8, [a,b],[3,6], D)

#Rule 2

#str1 A2xx.C2xx.xx..

t1= mf.create(8, [c,d], [0,3], D)

#str2 xxx.A2xx.C2x..

t2= mf.create(8, [c,d], [3,6], D)

K= k1+k2+t1+t2

#shuffle them 

random.shuffle(K)
random.shuffle(K)

#Save them as single wav files
k= mf.save(K, 'a.'+a+'.'+b, D, [a,b])

#store the time onset in the sequence and store the text

kt0= mf.get_time(K,D,a)
kt= mf.get_time(K, D,b)
ktx= text0(D,K)

#3.2 Sequences for target Rule 2

#Rule 1

#str1 A1xx.C1xx.xx..
k11= mf.create(8, [a,b], [0,3], D)
#str2 xxx.A1xx.C1x..

k22= mf.create(8, [a,b],[3,6], D)

#Rule 2

#str1 A2xx.C2xx.xx..

ta1= mf.create(8, [c,d], [0,3], D)
#str2 xxx.A2xx.C2x..

ta2= mf.create(8, [c,d], [3,6], D)

T= k11+k22+ta1+ta2

#shuffle them 

random.shuffle(T)
random.shuffle(T)

#Save them as single wav files

t= mf.save(T, 'b.'+ c +'.'+ d, D, [c,d])

#store the time onset in the sequence and store the text

tt0= mf.get_time(T,D,d)
tt= mf.get_time(T, D,c)
ttx= text0(D,T)


# =============================================================================
# 4.  Synthesis of sequences where targets are XSYLLABLES
# =============================================================================

#4.1 Sequences for target X1

#Half with X1 in Rule 1 and both structures

r1= mf.createx(4, [a,b,x1,x3], [0,3], D)

r2= mf.createx(4, [a,b,x1,x3],[3,6], D)

# Half with x1 in Rule 2 and both structures
ro1= mf.createx(4, [c,d,x1,x3], [0,3], D)
ro2= mf.createx(4, [c,d,x1,x3], [3,6], D)


#Half without X1 in Rule 1 and both structures
nr1= mf.createxx(4, [a,b,x1,x3], [0,3], D)

nr2= mf.createxx(4, [a,b,x1,x3],[3,6], D)

#Half without X1 in Rule 2 and both structures

nro1= mf.createxx(4, [c,d,x1,x3], [0,3], D)
nro2= mf.createxx(4, [c,d,x1,x3], [3,6], D)

Y= r1+r2+ro1+ro2+nr1+nr2+nro1+nro2
#shuffle them 

random.shuffle(Y)
random.shuffle(Y)

#Save them as single wav files

r= mf.save(Y, 'c.'+x1+'.'+x3, D, [x1,x3])

#store the time onset in the sequence and store the text

rt= mf.get_time(Y, D, x1)
rt0= mf.get_time(Y, D, x3)
rtx= text0(D,Y)

#4.1 Sequences for target X2

#Half with X2 in Rule 1 and both structures


r1= mf.createx(4, [a,b,x2,x4], [0,3], D)

r2= mf.createx(4, [a,b,x2,x4],[3,6], D)

# Half with x2 in Rule 2 and both structures

ro1= mf.createx(4, [c,d,x2,x4], [0,3], D)
ro2= mf.createx(4, [c,d,x2,x4], [3,6], D)


#Half without X2 in Rule 1 and both structures

nr1= mf.createxx(4, [a,b,x2,x4], [0,3], D)

nr2= mf.createxx(4, [a,b,x2,x4],[3,6], D)

#Half without X2 in Rule 1 and both structures
nro1= mf.createxx(4, [c,d,x2,x4], [0,3], D)
nro2= mf.createxx(4, [c,d,x2,x4], [3,6], D)


Q= r1+r2+ro1+ro2+nr1+nr2+nro1+nro2

#shuffle them 


random.shuffle(Q)
random.shuffle(Q)

#Save them as single wav files

l= mf.save(Q, 'd.'+ x2+'.'+x4, D, [x2,x4])

#store the time onset in the sequence and store the text

lt= mf.get_time(Q, D, x2)
lt0= mf.get_time(Q, D, x4)
ltx= text0(D,Q)


#I will insert for each one the time of the syllable and if it's absent then concatenate them and save to csv to put with dirs as correct answer


# =============================================================================
#CREATE THE CSV FILE WITH INFO FOR EACH SEQUENCE, this is used in the experiment
# to iterate over sequences and store RTs
# =============================================================================

files= k+t+r+l
order= ktx+ttx+rtx+ltx
audiodir=[]
for i in files:
    audio_dir= 'impRB_pl_L1//'+ i
    audiodir.append(audio_dir)

time_A= kt+tt+rt+lt
time_B=kt0+tt0+rt0+lt0


tot= np.column_stack((audiodir, time_A,time_B, order))


#Dataframe creation and save 
sequence= pd.DataFrame(tot,  columns = ['dirs', 'timeA', 'timeB','s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11'])

sequence.to_csv('Task_impRB_pl_L1.csv', index=False)
# =============================================================================
#CREATE THE CSV file with info of trials (for each target 4 sequences were played then it changed)
# =============================================================================

#The csv presents the  target syllable, the range of order where these
#sequences are found in the other csv, from which are polayed, and colours 
#of the target text displayed

#set the target syllables
def syll_(syll):
    t=[]
    tot=[]
    for i in range(len(syll)):
        c=[]
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

cond= syll_(sylls1)
cond1= syll_(sylls2)


#create the ranges where sequence wav files are found in the folder for each target

t= list(range(0, 132, 4)) #the sequence gap structure

def order(list):
    pairs=[]
    for i in range(len(t)):
        if t[i]!=0:
            single= str(t[i-1])+':'+str(t[i])
            pairs.append(single)
    return pairs

orders= order(t)      

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

colrs= colour(cond, sylls1)      

tot= np.column_stack((cond,cond1, orders, colrs))
np.random.shuffle(tot)

# Create the dataframe and save the csv
sequence= pd.DataFrame(tot,  columns = ['condA','condB', 'ord', 'colour'])
sequence.to_csv('impRB_pl_L1.csv', index=False)

#Check that all sequences measure 2664ms

T= mf.timing(outPath)
T