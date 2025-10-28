# -*- coding: utf-8 -*-
"""
Created on Thu Jun 29 17:27:37 2023

@author: bianca.franzoia
"""

import os
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import mymodule_preprocess_new
import glob

directory = os.getcwd()
outP = directory+'\\single_participants_data\\'
files = glob.glob(directory+'\\raw_output_Pavlovia\\'+'*.csv')


#i need to transform all numbers into numebers
for file in files:
    name= os.path.split(file)
    name=name[1]
    df = pd.read_csv(file, delimiter=',', header=0)

    # ONLINE
    group = df.iloc[:520, [9, 10, 7, 8]]
    # or put the exact colkumns and rows the thing is I will have empty space
    trials_online = df.loc[53:777, ['dirs','s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11','timeA','timeB']]
    
    catchrt= df.loc[53:777,['syllable_catch.rt']]
    trials_online['syllable_catch.rt']= catchrt
    catchkeys= df.loc[53:777,['syllable_catch.keys']]
    trials_online['syllable_catch.keys']= catchkeys
    trials_online = trials_online.dropna(how='all')
    trials_online = trials_online.dropna(subset=['dirs'])
    
    
    trials_online = trials_online.reset_index(drop=True)
    trials_online = pd.concat([group, trials_online], axis=1)
    trials_online = drop_cond(trials_online, df)
    # Drop the timing of the syllable depending on the group
    trials_online = drop_time(trials_online, 'time_syll', 18)
    
    trials_online = rts(trials_online, 'rts_syll_catch', 17)
    # Insert the conditions of the syllables to catch
    conds_syllable_catch(trials_online, 'syll_to_catch', 20)
    
    
    # Insert rhythm
    rhythm(trials_online, 'rhythm', 4)
    
    # insert language
    language(trials_online, 'language', 4)
    
    # Insert column of the condition
    condition(trials_online, 'condition', 4)
    
    # block
    
    block(trials_online, 'block', 4)
    
    # insert the rule type of the online sequence
    rule_type(trials_online, 'rule type online', 8)
    
    #insert the ordinal index
    order(trials_online, 'order_trial_on',9)
    
    # insert the rule structure of the online sequence
    
    rule_str(trials_online, 'rule structure online', 8)
    
    #output of the online response
    
    miss(trials_online,'catch_syll_resp',23)
    
    #clean the rts up
    
    clean_rts(trials_online,'clean_rts', 25)
    #put the rts from 
    
    rtsmean(trials_online,'catch_rts', 27)
    
    rts_1200(trials_online, 'catch_rtsTR',27)
    
    trials_online.rename(columns={'dirs': 'trial_online'}, inplace = True)
    
    trials_online=beat_nobeat(trials_online, 'beat_no_beat', 27, [0, 0.888, 1.776])
    
    # OFFLINE
    
    # condition 1 offline
    trials_offline = df.loc[213:, ['test','Partz_no_partm.keys','Partz_no_partm.rt', 'security_1_7.keys', 'security_1_7.rt']] #187, 188, 189, 190]]
    trials_offline = trials_offline.dropna(how='all')
    trials_offline = trials_offline.reset_index(drop=True)
    
    
    language_off(trials_offline, 'language_off', 1)
    rhythm_off(trials_offline, 'rhythm_off', 1)
    condition_off(trials_offline, 'condition_off', 1)
    block_off(trials_offline, 'block_off', 1)
    
    viol(trials_offline, 'conds_offline', 4)
    cond_off(trials_offline, 'rule_norule', 4)
    str_off(trials_offline, 'rule_str_off', 4)
    rule_off(trials_offline, 'rule', 4)
    accuracy(trials_offline, 'accuracy', 12)
    
    trials_offline.rename(columns={"test": 'test_offline'}, inplace = True)
    
    # CONCATENATE THEM
    
    online_offline = pd.concat([trials_online, trials_offline], axis=1)
    
    
    # DEMOGRAPHIC DATA T BEGINNIG 
    
    # age
    isolate('age_answer.text', df, online_offline, 'age', 3)
    
    # gender
    
    isolate('sex_answer.response', df, online_offline, 'sex', 4)
    
    # handedness
    
    isolate('hand_answer.response', df, online_offline, 'hand', 5)
    
    # residence
    isolate('residence_answer.text', df, online_offline, 'residence', 6)
    
    # native language
    isolate('native_lang_answer.text', df, online_offline, 'native_lang', 7)
    # education
    
    isolate('education_answer.response', df, online_offline, 'education_level', 8)
    
    # language and auditory deficit
    isolate('aud_deficit_answer.response', df, online_offline, 'aud_deficit', 9)
    isolate('lan_deficit_answer.response', df, online_offline, 'lang_deficit', 9)
    
    # LANGUAGE data
    # spoken languages
    isolate('N_language_answer.text', df, online_offline, 'n_lang', len(online_offline.columns))
    
    # lang number used
    
    isolate('N_lang_use_answer.text', df, online_offline, 'n_lang_used', len(online_offline.columns))
    
    
   
    
    # lang types and age
    
    isolate('langtype_answer_1.text', df, online_offline, 'lang_1', len(online_offline.columns))
    isolate('langage_answer_1.text', df, online_offline, 'age_l1',len(online_offline.columns))
    isolate('langtype_answer_2.text', df, online_offline, 'lang_2', len(online_offline.columns))
    isolate('langage_answer_2.text', df, online_offline, 'age_l2', len(online_offline.columns))
    isolate('langtype_answer_3.text', df, online_offline, 'lang_3', len(online_offline.columns))
    isolate('langage_answer_3.text', df, online_offline, 'age_l3', len(online_offline.columns))
    isolate('langtype_answer_4.text', df, online_offline, 'lang_4', len(online_offline.columns))
    isolate('langage_answer_4.text', df, online_offline, 'age_l4', len(online_offline.columns))
    isolate('langtype_answer_5.text', df, online_offline, 'lang_5', len(online_offline.columns))
    isolate('langage_answer_5.text', df, online_offline, 'age_l5', len(online_offline.columns))
    isolate('langtype_answer_6.text', df, online_offline, 'lang_6', len(online_offline.columns))
    isolate('langage_answer_6.text', df, online_offline, 'age_l6', len(online_offline.columns))
    
    # ability_learn
    isolate('ability_learnL2_answer.response', df, online_offline, 'ability_learn_l2',len(online_offline.columns))
    
       
    # tendemcy mixing
    isolate('tendence_mixlang_answer.response', df, online_offline, 'tendence_mix_lan', len(online_offline.columns))
    
    
    
    # MUSIC
    
    isolate('music_expertise_answer.response', df, online_offline, 'music_experience', len(online_offline.columns))
    isolate('instrument_use_answer.response', df, online_offline, 'muisc_use',len(online_offline.columns))
    isolate('partiture_answer.response', df, online_offline, 'partiture',len(online_offline.columns))
    
    isolate('instr_type_answer_1.text',df,online_offline, 'instr_1',len(online_offline.columns))
    isolate('instr_age_answer_1.text', df, online_offline,'age_M1',len(online_offline.columns))
    isolate('instr_type_answer_2.text',df,online_offline, 'instr_2',len(online_offline.columns))
    isolate('instr_age_answer_2.text', df, online_offline,'age_M2',len(online_offline.columns))
    isolate('instr_type_answer_3.text',df,online_offline, 'instr_3',len(online_offline.columns))
    isolate('instr_age_answer_3.text', df, online_offline,'age_M3',len(online_offline.columns))
    isolate('instr_type_answer_4.text',df,online_offline, 'instr_4',len(online_offline.columns))
    isolate('instr_age_answer_4.text', df, online_offline,'age_M4',len(online_offline.columns))
    isolate('instr_type_answer_5.text',df,online_offline, 'instr_5',len(online_offline.columns))
    isolate('instr_age_answer_5.text', df, online_offline,'age_M5',len(online_offline.columns))
    
    
    #BMRQ
    
    t= df[['preguntas_musica1','BMRQ_answer.response' ]].dropna(how='all')
    t=t.reset_index(drop=True)
    online_offline=pd.concat([online_offline, t],axis=1)
    isolate('END_textbox.text',df, online_offline,'final comment',len(online_offline.columns))
    online_offline.to_csv(outP+'processed'+name)
    
    
    # now recode and add the questionnairs measures


folder_path = os.getcwd()
input_path = directory+'\\single_participants_data\\'
output_path = glob.glob(directory+'\\single_participants_data\\'+'*.csv')


# List all CSV files in the specified folder
csv_files = [file for file in os.listdir(input_path) if file.endswith('.csv')]

participant_id_counts = {}

# Process each CSV file
for participant_id, csv_file in enumerate(csv_files, start=1):
    # Read the CSV file
 
    df = pd.read_csv(os.path.join(input_path, csv_file))
    # Check if 'BMRQ_answer.response' column exists in the DataFrame      
    if 'BMRQ_answer.response' in df.columns:
        # Apply the specified coding to values in the 2nd and 5th rows of the 'BMRQ_answer.response' column
        df.loc[1, 'BMRQ_answer.response'] = 5 - df.loc[1, 'BMRQ_answer.response']
        df.loc[4, 'BMRQ_answer.response'] = 5 - df.loc[4, 'BMRQ_answer.response']
    
        # Calculate the sum of the modified 'BMRQ_answer.response' column
        sum_response = df['BMRQ_answer.response'].sum()
    else:
        # Handle the case where 'BMRQ_answer.response' column doesn't exist
        sum_response = 0  # or any other appropriate default value
    
    #the number of language spoken and used are there as well the self report ability to learn a new language

    # Add values from 'n_lang' and 'n_lang_used' 
    if 'n_lang' in df.columns:
        # Extract the first numeral from 'n_lang'
        n_lang = pd.to_numeric(re.findall(r'\d+', str(df['n_lang'][0]))[0], errors='coerce')

    if n_lang >= 2:
        biling = 'yes'
    elif n_lang < 2:
        biling = 'no'
    else:
        biling = np.nan
 

    if 'education_level' in df.columns:
        ed_lev = pd.to_numeric(re.findall(r'\d+', str(df['education_level' ][0]))[0], errors='coerce')
        dict_ed={'Secondary':0 ,
                 'Upper secondary': 1,
                 'Bachelor degree': 2,
                 'Master degree':3,
                 'Doctorate': 4,
                 'Other': 5}
        ed_label = [k for k, v in dict_ed.items() if v == ed_lev][0]
                
            
    # Add the scores to the original CSV file
    df['BMRQ_Score'] = sum_response
    df['bilingual']= biling
    #replace the old coding with new
    df['education_level'] = ed_label
    
    #convert the age of start playing M1 into digits

    # Check if 'age_M1' column exists and add score based on age
    if 'age_M1' in df.columns and not df['age_M1'].empty:
        # Convert 'age_M1' values to numeric
       match = re.findall(r'\d+', str(df['age_M1'][0]))
       if match:
           age_M1_value = int(match[0])  # or use float(match[0]) if decimals are expected
       else:
           age_M1_value = np.nan  
           
       df['age_M1']= age_M1_value
           

            
    # Check if 'age_M2' column exists and add score based on age
    if 'age_M2' in df.columns and not df['age_M2'].empty:
        match2 = re.findall(r'\d+', str(df['age_M2'][0]))
        if match:
            age_M2_value = int(match[0])  # or use float(match[0]) if decimals are expected
        else:
            age_M2_value = np.nan  
            
        df['age_M2']= age_M2_value
        
    

    # Check if 'age_M3' column exists and add score based on age
    if 'age_M3' in df.columns and not df['age_M3'].empty:
        match3 = re.findall(r'\d+', str(df['age_M3'][0]))
        if match:
            age_M3_value = int(match[0])  # or use float(match[0]) if decimals are expected
        else:
            age_M3_value = np.nan  
            
        df['age_M3']= age_M2_value
    
    
    participant_id_from_column = df['participant'][0]
    
    # Count occurrences
    participant_id_counts[participant_id_from_column] = participant_id_counts.get(participant_id_from_column, 0) + 1
    
    # If it's the second occurrence of a known problematic ID, correct it
    if participant_id_from_column == 's101' and participant_id_counts['s101'] == 1:
       participant_id_from_column = 's103'
    if participant_id_from_column == 's191' and participant_id_counts['s191'] == 2:
        participant_id_from_column = 's193'
        


        
    # Save the modified DataFrame back to the CSV file with the participant ID from the column
    df.to_csv(os.path.join(folder_path, f'part_{participant_id_from_column}.csv'), index=False)



csv_files_out = [file for file in os.listdir(output_path) if file.endswith('.csv')]

    
