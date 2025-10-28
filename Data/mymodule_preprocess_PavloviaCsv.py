# -*- coding: utf-8 -*-
"""
Created on Thu Jun 29 18:00:39 2023

@author: bianca.franzoia
"""
import os
import math
import json
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from scipy import stats
os.chdir('D:\\OneDrive - Universitat de Barcelona\\Project\\Behavioral_study\\ALL_data\\data')   

def isolate_non_empty_rows(column_name, df): #if I want to isolate my dirs variable as a starting point for the dataset.
    return df[df[column_name].notnull()] 

#demographic data

#isolate single answers and create a whole column to insert in the DF

def isolate(var,df, newdf,newname, pos):
    t= df[var].dropna(how='all')
    if t.empty:
        return newdf 
#    t=t[var]
    l=t.iloc[0,]
    if var== 'lan_deficit_answer.response' or var=='aud_deficit_answer.response' or var== 'music_expertise_answer.response' or var== 'partiture_answer.response' or var=='instrument_use_answer.response':
        if l==0:
            l='no'
        if l==1:
            l='yes'
    if var == 'sex_answer.response':
        if l== 0:
            l = 'intersexual'
        if l== 1:
            l= 'masculino'
        if l == 2:
            l= 'feminino'
    if var== 'hand_answer.response':
        if l== 0:
            l = 'both'
        if l== 1:
            l= 'left'
        if l == 2:
            l= 'right'
    newdf.insert(pos, newname, l)
    return newdf

def isolate2(var,df):
    t=df[~df[var].isnull()]
    t=t[var]
    l=t.iloc[0,]
    return l
#FUNCTIONS FOR ONLINE

#drop the time column time depending on the group OK

def drop_time(dataframe,namecol,pos):
    if dataframe.group.iloc[2,] == 'A':
        dataframe= dataframe.drop(['timeB'], axis=1)
        dataframe.rename(columns = {'timeA':'time'}, inplace = True)
    if dataframe.group.iloc[2,]=='B':
        dataframe=dataframe.drop(['timeA'], axis=1)
        dataframe.rename(columns = {'timeB':'time'}, inplace = True)
    timenew=[]
    for i in range(len(dataframe)): #set the time into a proper number
        p= dataframe.time.iloc[i,]
        if p == 'none':
            timenew.append(p)
        if p != 'none':
            p=json.loads(p)
            p= p/1000
            timenew.append(p)
    dataframe.insert(pos,namecol,timenew)
    dataframe=dataframe.drop(['time'], axis=1)
    return dataframe

#make the RTs into number

def rts(dataframe,namecol,pos):
    syll_catch=[]
    for i in range(len(dataframe)): #set the time into a proper number
        p= dataframe['syllable_catch.rt'].iloc[i,]
        if not isinstance(p, str):
            syll_catch.append(p)
        if isinstance(p, str):
            p=json.loads(p)
            syll_catch.append(p)
    dataframe.insert(pos,namecol, syll_catch)
    dataframe=dataframe.drop(['syllable_catch.rt'], axis=1)
    return dataframe
    
#drop the syllable cond 

def drop_cond(dataframe,df):
    cond= df.iloc[53:778,[179,180]]
    cond=cond.dropna(how='all')
    shape=cond.shape
    cols=[]
    for k in range(shape[1]): #for each column
        c=[]
        for i in range(shape[0]): #for each row
            for g in range(4):
                t= cond.iloc[i,k]
                c.append(t)
        cols.append(c)
    cols2=pd.DataFrame(cols).transpose()
    cols2.columns=['condA','condB']
    dataframe=pd.concat([dataframe, cols2], axis=1)
    if dataframe.group.iloc[2,] == 'A':
        dataframe= dataframe.drop(['condB'], axis=1)
        dataframe.rename(columns = {'condA':'cond_syll'}, inplace = True)
    if dataframe.group.iloc[2,]=='B':
        dataframe=dataframe.drop(['condA'], axis=1)
        dataframe.rename(columns = {'condB':'cond_syll'}, inplace = True)
    return dataframe

#condition syllable to catch (if the condition is A, the a letter will be number 1, if B the a letter will be directory b, the x syllables same )

def conds_syllable_catch(dataframe, namecol, pos):#i will have to put the dirs variable and the COND varible
    conds_syll=[]
    for i in range(len(dataframe)):
        p= dataframe.dirs.iloc[i,]
        if '//a.' in p:
            if dataframe.group.iloc[i,] == 'A':
                t= 2
                conds_syll.append(t)
            if dataframe.group.iloc[i,] == 'B':
                t= 1
                conds_syll.append(t)
        if '//b.' in p:
            if dataframe.group.iloc[i,] == 'A':
                t= 1
                conds_syll.append(t)
            if dataframe.group.iloc[i,] == 'B':
                t= 2
                conds_syll.append(t)
        if '//c.' in p:
            t= 3
            conds_syll.append(t)
        if '//d.' in p:
            t= 4
            conds_syll.append(t)
    dataframe.insert(pos, namecol,conds_syll)
    return dataframe
  

#insert the what whrame.drop(['condA'], axis=1)
   # return dataframeen and conj condition:

def condition(dataframe,namecol,pos):
    cond=[]
    for i in range(len(dataframe)):
        p= dataframe.dirs.iloc[i,]
        g=dataframe.rhythm.iloc[i,] 
        if 'conj' in p:
            if g== 'syncopated':
                t= 'conjunction_syn'
                cond.append(t)
            elif g=='unsyncopated':
                t= 'conjunction_un'
                cond.append(t)
        if 'what' in p:
            t= 'what'
            cond.append(t)
        if 'when' in p:
            t= 'when'
            cond.append(t)
    dataframe.insert(pos,namecol,cond)
    return dataframe
#block

def block(dataframe, namecol, pos):
    cond = []
    block_counter = 0
    current_block = None
    for i in range(len(dataframe)):
        p = dataframe.dirs.iloc[i]
        if 'what' in p:
            if current_block != 'what':
                block_counter += 1
                current_block = 'what'
        elif 'when' in p:
            if current_block != 'when':
                block_counter += 1
                current_block = 'when'
        elif 'conj' in p and 'un' in p:
            if current_block != 'conj_un':
                block_counter += 1
                current_block = 'conj_un'
        elif 'conj' in p and 'syn' in p:
            if current_block != 'conj_syn':
                block_counter += 1
                current_block = 'conj_syn'
        cond.append(block_counter)
    dataframe.insert(pos, namecol, cond)
    return dataframe

#create the ordinal of trials in online

def order(dataframe, namecol, pos):
   cond = []
   order=[]
#   block_counter = 0
   current_block = None
   for i in range(len(dataframe)):
       p = dataframe.dirs.iloc[i]
       if 'what' in p:
           if current_block != 'what':
               l = [x for x in range(128)]
               cond.append(l)
               current_block = 'what'
       elif 'when' in p:
           if current_block != 'when':
               l = [x for x in range(136)]
               cond.append(l)
               current_block = 'when'
       elif 'conj' in p and 'un' in p:
           if current_block != 'conj_un':
               l = [x for x in range(128)]
               cond.append(l)
               current_block = 'conj_un'
       elif 'conj' in p and 'syn' in p:
           if current_block != 'conj_syn':
               l = [x for x in range(128)]
               cond.append(l)
               current_block = 'conj_syn'
   for o in range(len(cond)):
       f=cond[o]
       for h in range(len(f)):
           order.append(f[h])
   dataframe.insert(pos, namecol, order)
   return dataframe
# create the rhythm variable

def rhythm(dataframe,namecol,pos):
    cond=[]
    for i in range(len(dataframe)):
        p= dataframe.dirs.iloc[i,]
        if 'syn' in p:
            t= 'syncopated'
            cond.append(t)
        else:
            t= 'unsyncopated'
            cond.append(t)
    dataframe.insert(pos,namecol,cond)
    return cond

#language:

def language(dataframe,namecol,pos):
    cond=[]
    for i in range(len(dataframe)):
        p= dataframe.dirs.iloc[i,]
        if 'L1' in p:
            t= 'L1'
            cond.append(t)
        if 'L2' in p:
            t= 'L2'
            cond.append(t)
        if 'L3' in p:
            t= 'L3'
            cond.append(t)
        if 'L4' in p:
            t= 'L4'
            cond.append(t)
    dataframe.insert(pos,namecol,cond)
    return dataframe

#for the offline it is useful also that for each segment we isolate the rule type

def rule_type(dataframe,namecol,pos):
    cond=[]
    rule1= ['pu','go', 'chu', 'zi']
    for i in range(len(dataframe)):
        if 'when' in dataframe.dirs.iloc[i,]:
            t= 'when'
            cond.append(t)
        else:
            first= dataframe.s1.iloc[i,]
            second=dataframe.s5.iloc[i,]
            first2= dataframe.s4.iloc[i,]
            if first in rule1 or second in rule1 or first2 in rule1:
                t= 'r1'
                cond.append(t)
            else:
                t='r2'
                cond.append(t)
    dataframe.insert(pos,namecol,cond)
    return dataframe
      
#structure and the rule type

def rule_str(dataframe,namecol,pos):
    cond=[]
    rule= ['pu','go', 'chu', 'zi', 'ta', 'fe','ñe','ja']
    for i in range(len(dataframe)):
        if 'when' in dataframe.dirs.iloc[i,]:
            t= 'when'
            cond.append(t)
        else:
            first= dataframe.s1.iloc[i,]
            if first in rule:
                t= 's1'
                cond.append(t)
            else:
                t='s2'
                cond.append(t)
    dataframe.insert(pos,namecol,cond)
    return dataframe

#create a function that puts the target syllable

#def exact_syllable(dataframe):
    
#FUNCTIONS FOR OFFLINE
#block offline

def block_off(dataframe, namecol, pos):
    cond = []
    block_counter = 0
    current_block = None
    for i in range(len(dataframe)):
        p = dataframe.test.iloc[i]
        if 'What' in p:
            if current_block != 'what':
                block_counter += 1
                current_block = 'what'
        elif 'When' in p:
            if current_block != 'when':
                block_counter += 1
                current_block = 'when'
        elif 'Conj' in p and 'Un' in p:
            if current_block != 'conj_un':
                block_counter += 1
                current_block = 'conj_un'
        elif 'Conj' in p and 'Syn' in p:
            if current_block != 'conj_syn':
                block_counter += 1
                current_block = 'conj_syn'
        cond.append(block_counter)
    dataframe.insert(pos, namecol, cond)
    return dataframe

    
#insert the what when and conj condition:
    

def condition_off(dataframe,namecol,pos):
    cond=[]
    for i in range(len(dataframe)):
        p= dataframe.test.iloc[i,]
        g=dataframe.rhythm_off.iloc[i,] 
        if 'Conj' in p:
            if g== 'syncopated':
                t= 'conjunction_syn'
                cond.append(t)
            elif g=='unsyncopated':
                t= 'conjunction_un'
                cond.append(t)
        if 'What' in p:
            t= 'what'
            cond.append(t)
        if 'When' in p:
            t= 'when'
            cond.append(t)
    dataframe.insert(pos,namecol,cond)
    return dataframe


# create the rhythm variable

def rhythm_off(dataframe,namecol,pos):
    cond=[]
    for i in range(len(dataframe)):
        p= dataframe.test.iloc[i,]
        if 'Syn' in p:
            t= 'syncopated'
            cond.append(t)
        else:
            t= 'unsyncopated'
            cond.append(t)
    dataframe.insert(pos,namecol,cond)
    return cond

#language:

def language_off(dataframe,namecol,pos):
    cond=[]
    for i in range(len(dataframe)):
        p= dataframe['test'].iloc[i,]
        if 'L1' in p:
            t= 'L1'
            cond.append(t)
        if 'L2' in p:
            t= 'L2'
            cond.append(t)
        if 'L3' in p:
            t= 'L3'
            cond.append(t)
        if 'L4' in p:
            t= 'L4'
            cond.append(t)
    dataframe.insert(pos,namecol,cond)
    return dataframe

def addnans(dataframe):
    dataframe = dataframe.reset_index(drop=True)
    p= dataframe['test'].iloc[3,]
    if 'When' in p:
        dummyarray = np.empty((112,5))
        dummyarray[:] = np.nan
        nans = pd.DataFrame(dummyarray)
        dataframe=pd.concat([dataframe,nans], axis=0)
    else:
        dummyarray = np.empty((104,5))
        dummyarray[:] = np.nan
        nans = pd.DataFrame(dummyarray)
        dataframe=pd.concat([dataframe,nans], axis=0)
    return dataframe

#3. rule a,b
def rule_off(dataframe,namecol,pos):
    val=[]
    for i in range(len(dataframe)):
        p= dataframe.test.iloc[i,]
        if 'r1.'in p:
            t= 'a'
            val.append(t)
        if 'r2.' in p:
           t='b'
           val.append(t)
    dataframe.insert(pos,namecol,val)
    return dataframe

#4. condition rule vs violation

def cond_off(dataframe,namecol,pos):
    val=[]
    for i in range(len(dataframe)):
        p= dataframe.test.iloc[i,]
        if 'viol'in p:
            t= 'no_rule'
            val.append(t)
        else:
           t='rule'
           val.append(t)
    dataframe.insert(pos,namecol,val)
    return dataframe

#violation type

def viol(dataframe,namecol,pos):
    val=[]
    for i in range(len(dataframe)):
        p= dataframe.test.iloc[i,]
        if '//cat_viol.' in p:
            t= 'cat'
            val.append(t)
        if '//dep_viol.'in p:
            c= 'dep'
            val.append(c)
        if '//time_viol.'in p:
            k= 'time'
            val.append(k) 
        if 'viol' not in p:
            g='rule'
            val.append(g)
    dataframe.insert(pos,namecol,val)
    return dataframe

  
#it doesn't wotk, for each dep viol it also adds a rule column
#5.language rule structure

def str_off(dataframe,namecol,pos):
    val=[]
    for i in range(len(dataframe.test)):
        p= dataframe.test.iloc[i,]
        if 's1'in p:
            t= 's1'
            val.append(t)
        if 's2'in p:
           t='s2'
           val.append(t)
    dataframe.insert(pos,namecol,val)
    return dataframe



#ACCURACY

def accuracy(dataframe,namecol,pos):
    accry=[]
    for i in range(len(dataframe)):
        p= dataframe.test.iloc[i,]
        if 'When' not in p:
            if 'viol' not in p:
                if dataframe['Partz_no_partm.keys'].iloc[i,]=='z':
                    l=1
                    accry.append(l)
                if dataframe['Partz_no_partm.keys'].iloc[i,]=='m':
                    k=0
                    accry.append(k)
            if 'viol' in p:
                if dataframe['Partz_no_partm.keys'].iloc[i,]=='z':
                    u=0
                    accry.append(u)
                if dataframe['Partz_no_partm.keys'].iloc[i,]=='m':
                    t=1
                    accry.append(t)
        if 'When' in p:
            if dataframe['Partz_no_partm.keys'].iloc[i,]=='z':
                u=1
                accry.append(u)
            if dataframe['Partz_no_partm.keys'].iloc[i,]=='m':
                t=0
                accry.append(t)
    dataframe.insert(pos,namecol,accry)
    return dataframe

           

#need to create a function that goes through the double responses and assigns the right response and misses
                        
#I also have to put the conditioni for the 'none' time when we have the delayed response, in that case if the time is none the rt will be nan                        
#in the same function we also want to put the cases where we have 2 answees
#it still makes sense to consider if we deal with a switch of the syllable or not?
                        
def miss(dataframe, namecol, pos):
    catch=[]
    for i in range(len(dataframe)):
        p=dataframe['rts_syll_catch'].iloc[i,] #remeber that p is in a list to save the double repsomses
        t= dataframe['time_syll'].iloc[i,] #this is a single number
        #first if no answer is there but the time has something, it will be miss unless the following answer is happens before the following answer and the time gap is within threshold
        if np.isnan(p).any(): #if the value is null (nan)
            if t == 'none':
                resp= ['-']#I want it to be mantained as it is so it is going to be easier to analyze the answers (dropna)
                catch.append(resp)
            if t!= 'none': #here i should open to 2 possbilities: the t is something and the following response occurs before the target there so it shoukd be inserted here BUT the second part should be able to do this
                resp= ['miss'] #if the twp are different... 
                catch.append(resp) #maybe the no answer was referred to the syllable before, but this is data I will anyways loose. I am not able to know if the no answer may be do to the absence of the previous or of the actual one now I undestand the response to abence paradigm design 
#        if not np.isnan(p).any():
        if not np.isnan(p).any():
            if len(p)>=1:
                to_catch=[]
                for k in range(len(p)):
                    answer= p[k]
                    if t== 'none':
                        if i > 0:
                            if dataframe['time_syll'].iloc[i-1,] != 'none': #if in the previous response there was the syllable to cacth
                                difference= 2.664- dataframe['time_syll'].iloc[i-1,] + answer 
                                if difference <= 1.200:#If the distnace between previous target and actual response is within 5 syllabic time
                                    #at this point I should insert the catch to the previous response not in the actual
                                    if catch[-1]!= 'catch': #this to include the cases in which we may have a false alarm not related to the previous answer (that was catched)
                                        resp= ['catch_delay']
                                        catch[-1]=resp #I directly change the catch variable.
                                        dataframe.loc[i-1,'rts_syll_catch']= [[difference]]
                                        if len(p)==1:
                                            resp1='-'
                                            to_catch.append(resp1)
                                    if catch[-1]== 'catch':
                                        resp1= 'false alarm' #this means that if the answer was of the previous one, and it was only one (as in the condition above), the current one will be 0
                                        to_catch.append(resp1) #in this case the answer will be false alarm for the current and will be added as a list in to_catch that will be then appended to catch
                                if difference > 1.200: #this ideally would correspond to the second answer
                                    resp= 'false alarm' #maybe i could start assiging this to misses and then clean it if 
                                    to_catch.append(resp) #I could put if the previous
                            if dataframe['time_syll'].iloc[i-1,] == 'none': #if the target was instead absent in the one before, we can assign the miss
                                resp= 'false alarm' #maybe i could start assiging this to misses and then clean it if 
                                to_catch.append(resp)  
                    if t!= 'none': #if answer and syllable to detect
                        if  answer > t: #with this I assume that every answer that happens after the target is related tp the target within a threshold of 1s
                            if 'catch' in to_catch: #if it is the first one
                                resp= 'false alarm'  #this means it's a catch
                                to_catch.append(resp)
                            if 'catch' not in to_catch: #if there is already a catch response the other, although greater than the target time, it will be a false alarm
                                resp= 'catch'
                                to_catch.append(resp)
                        if  answer <t: #if the answer is minor to the the time of the syllable regardelss same or different syllable if the distace from the previous target is minor of 1 catch
                            #if dataframe['cond_syll'].iloc[i,] == dataframe['cond_syll'].iloc[i-1,]: #if the trial before the syllable to catch is the same+
                            if i > 0:
                                if dataframe['time_syll'].iloc[i-1,] != 'none': #if in the previous response there was the syllable to cacth
                                    difference= 2.664- dataframe['time_syll'].iloc[i-1,] + answer
                                    if difference <= 1.200:#I am taking a thresshold of 5 syllabic time
                                        #at this point I should insert the catch to the previous response not in the actual
                                        if catch[-1]!= 'catch': #this to include the cases in which we may have a false alarm not related to the previous answer (that was catched)
                                            resp= ['catch_delay']
                                            catch[-1]=resp 
                                            dataframe.loc[i-1,'rts_syll_catch']= [[difference]]
                                            if len(p)==1:
                                                resp1='miss'
                                                to_catch.append(resp1)
                                        if catch[-1]== 'catch':
                                            resp1= 'false alarm' #this means that if the answer was of the previous one, and it was only one (as in the condition above), the current one will be 0
                                            to_catch.append(resp1) 
                                    if difference > 1.200:
                                        resp= 'false alarm' #maybe i could start assiging this to misses and then clean it if 
                                        to_catch.append(resp) #
                                if dataframe['time_syll'].iloc[i-1,] == 'none':
                                    resp='false alarm'
                                    to_catch.append(resp) 
                catch.append(to_catch)
    dataframe.insert(pos,namecol,catch)
    return dataframe

#dprime
def dprime(df, signal, sval, resp):
    # This function takes in a dataframe, the signal variable name, the signal present value, and the "yes" responses value
    # Outputs a dataframe with cols: hit (rate), miss, false alarm, correct rejection, dprime, criterion
    n = len(df)
    d = {}
    signal = df[signal] == sval #I need to assign to the rule no rule the 0/1
    response = df["Partz_no_partm.keys"] == resp
   
    hits =response[signal].mean()
    if hits == 1:
        hit = (n-0.5)/n 
    elif hits == 0:
        hit = 0.5/n
    else:
        hit = hits;
    d["hit"] = hit
   
    miss = ~response[signal] ; d["miss"] = miss.mean()
   
    fas = response[~signal].mean()
    if fas == 1:
        fa = (n-0.5)/n 
    elif fas == 0:
        fa = 0.5/n
    else: fa = fas 
    d["fa"] = fa
   
    cr = ~response[~signal] ; d["cr"] = cr.mean()
   
    d["dprime"] = stats.norm.ppf(hit) - stats.norm.ppf(fa)
    d["c"] = -(stats.norm.ppf(hit) + stats.norm.ppf(fa))/2.0

    return pd.Series(d, index = ["hit", "miss", "fa", "cr", "dprime", "c"])
#I need a function that cleans the RTs, this function simply selects one rt for each trial doesn0t deal with correctness
def clean_rts(dataframe,namecol, pos):
    cleanrts=[]
    for i in range(len(dataframe)):
        rt=dataframe['rts_syll_catch'].iloc[i,] #remeber that p is in a list to save the double repsomses
        t= dataframe['time_syll'].iloc[i,]
        if np.isnan(rt).any():
            rtn=rt
            cleanrts.append(rtn)
        if not np.isnan(rt).any():
            if len(rt)== 1: #if I have only one answer rt put that one
                rtn= rt
                cleanrts.append(rtn)
            if len(rt)==2: # if I ave two answeres and a respo#there is a problem here some numbers are not in lists. 
                if t != 'none':
                    if rt[0] >= t and rt[1] >= t: #catch catch take the smaller rt
                        rtn= [rt[0]]
                        cleanrts.append(rtn)
                    if rt[0] <= t and rt[1]>= t: #fa, catch, take the catch
                        rtn= [rt[1]]
                        cleanrts.append(rtn)
        # =============================================================================
        #             if rt[0] >=t and rt[1] <= t: #impossible
        #                 rtn=rt[0]
        #                 cleanrts.append(rtn)
        # =============================================================================
                    if rt[0] <= t and rt[1] <= t: #if both rts are smaller than the answer, just put the first one?
                        cleanrts.append(rtn)
                        rtn= [rt[0]]
                if t== 'none':
                     rtn= rt[1] #this may be the case where to a none I have two responses (maybe tge first is a catch delay) so I only take the second
                     cleanrts.append(rtn)
            if len(rt)>2: 
                if t != 'none':
                    alls=[]
                    for k in range(len(rt)):
                        if rt[k] >= t:
                            alls.append(rt[k])
                    rtn= [min(alls)]
                    cleanrts.append(rtn)
                if t == 'none':
                    rtn= [min(rt)] #maybe is a a way to rethink about a more shallow threshold
                    cleanrts.append(rtn)
    dataframe.insert(pos,namecol,cleanrts)
    return dataframe
        
#get the rts for the catch:


def rtsmean(dataframe, namecol, pos): #works        
    meanRT=[]
    for u in range(len(dataframe)):
        resp = dataframe['catch_syll_resp'].iloc[u,]
        if 'catch' in resp:
            rt = dataframe['clean_rts'].iloc[u,][0]
            t = dataframe['time_syll'].iloc[u,]
            out = rt-t
            meanRT.append(out)
        if 'catch_delay' in resp: #this should be very wrong check it and correct. if the catch delay I need to put the rt
# =============================================================================
#             out=np.nan
#             meanRT.append(out)
# =============================================================================
            rt = dataframe['clean_rts'].iloc[u,][0]
            meanRT.append(rt)
        if 'catch' not in resp and 'catch_delay' not in resp:
            out=np.nan
            meanRT.append(out)
    dataframe.insert(pos,namecol,meanRT)
    return dataframe

#function to only include rts in threshold

def rts_1200(dataframe, namecol, pos):
    crt=[]
    for u in range(len(dataframe)):
        resp = dataframe['catch_rts'].iloc[u,]
        if np.isnan(resp).any():
            out=resp
            crt.append(out)
        if not np.isnan(resp).any(): 
            if resp < 1.200:
                out = resp
                crt.append(out)
            if resp >= 1.200:
                out=np.nan
                crt.append(out)
    dataframe.insert(pos,namecol,crt)
    return dataframe
#function that detects the catches and misses
        

def catch_count_all(dataframe):
    catch=0
    misses= 0
    false_all=0
    for i in range(len(dataframe)):
        p=dataframe['catch_syll_resp'].iloc[i,]
        for k in range(len(p)):
            if p[k]!= '-':
                if 'catch' in p[k]:
                    catch += 1
                if 'miss' in p[k]:
                    misses += 1 
                if 'false alarm' in p[k]:
                    false_all+=1 
    return catch, misses, false_all


def catch_count_group(dataframe):
    out=[0,0,0]
    for _, row in dataframe.iterrows():
        p = row['catch_syll_resp']
        if p != '-':
            if 'catch' in p:
                out[0] += 1
            if 'miss' in p:
                out[1] += 1
            if 'false alarm' in p:
               out[2] += 1 
    out=np.array(out)
    out= out.reshape(1,3)
    catch= pd.DataFrame(out, columns=['catch', 'miss', 'fa'])
    return catch

#mean RTs

def meanRTs(dataframe):
    meanRT=[]
    rts=[]
    ts=[]
    for keys, group in dataframe: #I access each group
        for _, row in group.iterrows(): #I acces the specific df
            resp= (row['catch_syll_resp']) #I access the row till here it works
#            resp= ast.literal_eval(resp)
            #meanRT.append(resp)
            print(type(resp))
            print(resp)
# =============================================================================
#             for i in range(len(resp)):
#                 rr= resp[i][0]
#                 print(rr)
# =============================================================================
            if 'catch' in resp: #it works
                    rt= row['clean_rts']
                    rt=json.loads(rt)
                    rt=rt[0]
                    rts.append(rt)
                    t= row['time_syll']
                    t=json.loads(t)
                    ts.append(t)
                    out= rt-t
                    meanRT.append(out)
            totalsum= 0
            count=0
            for k in meanRT:
                totalsum += k
                count += 1
            mean=totalsum/count
    return mean

#Beat_nobeat syllable

def beat_nobeat(dataframe, namecol, pos, beattimes):
    beat=[]
    for i in range(len(dataframe)):
        time= dataframe['time_syll'].iloc[i,]
        if time == 'none':
            mom= time
            beat.append(mom)
        elif time == beattimes[0] or time==beattimes[1] or time == beattimes[2]:
            mom= 'beat'
            beat.append(mom)
        else: 
             mom= 'no_beat'
             beat.append(mom)
    dataframe.insert(pos,namecol,beat)
    return dataframe
# # =============================================================================
# =============================================================================
