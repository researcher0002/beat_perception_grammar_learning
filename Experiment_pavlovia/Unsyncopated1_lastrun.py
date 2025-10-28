#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.5),
    on giugno 06, 2023, at 15:54
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.5'
expName = 'Pilot_online_tryings'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\OneDrive - Universitat de Barcelona\\Escritorio\\PILOTS\\Unsyncopated\\Uns1_C1Wt2Wh3Cs4\\Unsyncopated1_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "welcomw" ---
text_21 = visual.TextStim(win=win, name='text_21',
    text='Hola, gracias por participar en este estudio. Esta tarea te tomará aproximadamente 45 minutos, durante los cuales te pediremos que escuches atentamente cuatro lenguajes artificiales.\n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp1 = keyboard.Keyboard()

# --- Initialize components for Routine "welcome1" ---
text_23 = visual.TextStim(win=win, name='text_23',
    text='Por esta razón, te pedimos por favor que antes de empezar:\n-Te pongas unos cascos o auriculares para escuchar mejor y evitar distracciones.\n-Te sitúes en una habitación silenciosa.\n-Estés concentrado y sin distracciones durante la tarea.\n-Te asegures de no tener interrupciones en los próximos 45 minutos.\n-Apagues tu móvil.\n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_6 = keyboard.Keyboard()

# --- Initialize components for Routine "volume" ---
text_26 = visual.TextStim(win=win, name='text_26',
    text='Antes de empezar, te pediremos que ajustes el volumen de tu ordenador a un nivel de escucha cómodo. Para hacerlo, deberás utilizar directamente las teclas del teclado de tu ordenador, ya que una vez dentro de esta interfaz no podrás manipular el volumen de forma externa. La voz que escucharás para ajustar el volumen será la misma que escucharás en los cuatro lenguajes siguentes.\n \n*pulsa espacio para continuar*\n',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_10 = keyboard.Keyboard()

# --- Initialize components for Routine "volume_setting" ---
volume_set = sound.Sound('volume.wav', secs=-1, stereo=True, hamming=True,
    name='volume_set')
volume_set.setVolume(1.0)
key_ressp2 = keyboard.Keyboard()
text_27 = visual.TextStim(win=win, name='text_27',
    text='*pulsa espacio cuando acabes de regular el volumen al nivel correcto*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# --- Initialize components for Routine "instructions_2" ---
text_24 = visual.TextStim(win=win, name='text_24',
    text='Gracias. Ahora, unas instrucciones generales:\nPara cada uno de los cuatro lenguajes, tendrás tres fases. \n\n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_9 = keyboard.Keyboard()

# --- Initialize components for Routine "Instructions_0" ---
text_37 = visual.TextStim(win=win, name='text_37',
    text='Fase 1: Escucha atenta.\n\nLa primera fase consistirá en una tarea de escucha atenta. Aquí deberás escuchar con mucha atencion el lenguaje específico, imaginando que se trata de un lenguaje real.\n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# --- Initialize components for Routine "Instructions_task_1" ---
text_22 = visual.TextStim(win=win, name='text_22',
    text='Fase 2: Detección de sílabas.\n\nEn la segunda fase tu tarea consistirá en detectar sílabas específicas mientras se escucha el mismo lenguaje. La sílaba objetivo se presentará en el centro de la pantalla y tu tarea será pulsar la tecla "espacio" lo más rápido posible cada vez que creas escucharla. \n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp1_2 = keyboard.Keyboard()

# --- Initialize components for Routine "Intructions_task2" ---
text_25 = visual.TextStim(win=win, name='text_25',
    text='Fase 3: Reconocimiento del lenguaje.\n\nEn la tercera fase, tu tarea consistirá en escuchar diferentes fragmentos del lenguaje que has escuchado anteriormente. Algunos de estos fragmentos coincidirán con partes del lenguaje previamente escuchado, mientras que otros serán muy similares pero presentarán algunas diferencias. Tu objetivo será intentar reconocer cuáles de los fragmentos presentados coinciden con el lenguaje previamente escuchado y expresar tu nivel de seguridad respecto a tu respuesta.\n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp1_3 = keyboard.Keyboard()

# --- Initialize components for Routine "ready_" ---
text_28 = visual.TextStim(win=win, name='text_28',
    text='Resumen de las tres fases para cada uno de los cuatro lenguajes:\n\n- Fase 1: Escucha atenta.\n\n- Fase 2: Detección de sílabas durante la escucha del lenguaje.\n\n- Fase 3: Reconocimiento de fragmentos del lenguaje.\n\n*pulsa espacio para continuar*\n',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_11 = keyboard.Keyboard()

# --- Initialize components for Routine "ready_2" ---
text_29 = visual.TextStim(win=win, name='text_29',
    text='Empezamos con el primer lenguaje!\n\n*pulsa espacio para continuar*\n',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_12 = keyboard.Keyboard()

# --- Initialize components for Routine "ready_loop" ---
text_36 = visual.TextStim(win=win, name='text_36',
    text="Una vez que pulses  'espacio', comenzará la Fase 1 (Escucha atenta) del próximo lenguaje.\n\nPor favor, intenta escuchar el lenguaje con la máxima atención, tratando de seguir cada sílaba  y imaginando de escuchar un lenguaje real.\n\n\n*pulsa espacio para continuar*\n",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=1.3, 
    languageStyle='LTR',
    depth=0.0);
key_resp_18 = keyboard.Keyboard()

# --- Initialize components for Routine "offline_conj_unsync" ---
learning = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='learning')
learning.setVolume(1.0)
text_19 = visual.TextStim(win=win, name='text_19',
    text='*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_7 = keyboard.Keyboard()

# --- Initialize components for Routine "Task_1" ---
text_31 = visual.TextStim(win=win, name='text_31',
    text='Ahora comenzará la Fase 2 (Detección de sílabas) de este lenguaje. \n\nLa sílaba objetivo se presentará en el centro de la pantalla y tu tarea será pulsar la tecla "espacio" lo más rápido posible cada vez que creas escucharla. \n\n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=1.3, 
    languageStyle='LTR',
    depth=0.0);
key_resp1_4 = keyboard.Keyboard()

# --- Initialize components for Routine "instructions" ---
text_2 = visual.TextStim(win=win, name='text_2',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# --- Initialize components for Routine "sequences" ---
seqs = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='seqs')
seqs.setVolume(1.0)
text_13 = visual.TextStim(win=win, name='text_13',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
syllable_catch = keyboard.Keyboard()
key_resp_16 = keyboard.Keyboard()

# --- Initialize components for Routine "test_instructions" ---
text_12 = visual.TextStim(win=win, name='text_12',
    text='Ahora empezará la Fase 3 (reconocimiento de fragmentos) de este lenguaje . \nEscucharás diferentes fragmentos del lenguaje que has escuchado anteriormente. Algunos de estos fragmentos coincidirán con partes del lenguaje previamente escuchado, mientras que otros serán muy similares pero presentarán algunas diferencias. \n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp4 = keyboard.Keyboard()

# --- Initialize components for Routine "test_instructions2" ---
text_14 = visual.TextStim(win=win, name='text_14',
    text='Tu tarea consiste en:\n\n1- Decir si el segmento escuchado es o no es parte del lenguaje escuchado, pulsando:\n\nBotón Z de tu teclado = Sí, parte del lenguaje.\nBotón M de tu teclado = No, no es parte del lengueje.\n\n2- Dar tu opinión sobre cuánto estás seguro de tu respuesta, en una escala del 1 (poco seguro) al 7 (muy seguro).\n\n*pulsa espacio para continuar*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# --- Initialize components for Routine "audio" ---
test_sounds = sound.Sound('A', secs=-1, stereo=True, hamming=True,
    name='test_sounds')
test_sounds.setVolume(1.0)
text_17 = visual.TextStim(win=win, name='text_17',
    text='*',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_17 = keyboard.Keyboard()

# --- Initialize components for Routine "question1" ---
text_18 = visual.TextStim(win=win, name='text_18',
    text='Es parte de el lenguaje original?\n\nSI                                               NO\n(-z)                                           (-m)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Partz_no_partm = keyboard.Keyboard()

# --- Initialize components for Routine "question_2" ---
text_32 = visual.TextStim(win=win, name='text_32',
    text='Cuánto estás seguro de tu respuesta?  \n\n    ',
    font='Open Sans',
    pos=(0, 0.10), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
image_2 = visual.ImageStim(
    win=win,
    name='image_2', 
    image='question2.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(0.8, 0.15),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
text_33 = visual.TextStim(win=win, name='text_33',
    text='Poco                  Bastante                 Mucho',
    font='Open Sans',
    pos=(0, -0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
security_1_7 = keyboard.Keyboard()

# --- Initialize components for Routine "Next_langauge" ---
text_30 = visual.TextStim(win=win, name='text_30',
    text='Gracias! Has terminado con este lenguaje. Ahora continuaremos con el próximo.\n\n*pulsa espacio para continuar*\n',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_13 = keyboard.Keyboard()

# --- Initialize components for Routine "gracias_2" ---
text_40 = visual.TextStim(win=win, name='text_40',
    text="Has acabado con todos los lenguajes! Gracias!\n\nAntes de acabar nos gustaria que nos digas cómo ha ido la tarea.  Si has tenido algún problema, interrupción, distracción o cualquier otra información que creas importante comentar, por favor, déjalo por escrito en la ventana siguiente. Si no ha ocurrido nada, simplemente escribe 'nada'. Muchas gracias!\n\n*pulsa espacio para acceder a la ventana donde dejar tu comentario*\n",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp6 = keyboard.Keyboard()

# --- Initialize components for Routine "comentario" ---
textbox = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.45), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0, alignment='top-left',
     anchor='center',
     fillColor=None, borderColor='black',
     flipHoriz=False, flipVert=False, languageStyle='LTR',
     editable=True,
     name='textbox',
     autoLog=True,
)
text_38 = visual.TextStim(win=win, name='text_38',
    text='Dejas aquí tu comentario:\n',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text_39 = visual.TextStim(win=win, name='text_39',
    text='Pulsa aquí para terminar el experimento.',
    font='Open Sans',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "welcomw" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp1.keys = []
key_resp1.rt = []
_key_resp1_allKeys = []
# keep track of which components have finished
welcomwComponents = [text_21, key_resp1]
for thisComponent in welcomwComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "welcomw" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_21* updates
    if text_21.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_21.frameNStart = frameN  # exact frame index
        text_21.tStart = t  # local t and not account for scr refresh
        text_21.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_21, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_21.started')
        text_21.setAutoDraw(True)
    
    # *key_resp1* updates
    waitOnFlip = False
    if key_resp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp1.frameNStart = frameN  # exact frame index
        key_resp1.tStart = t  # local t and not account for scr refresh
        key_resp1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp1.started')
        key_resp1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp1.status == STARTED and not waitOnFlip:
        theseKeys = key_resp1.getKeys(keyList=['space'], waitRelease=False)
        _key_resp1_allKeys.extend(theseKeys)
        if len(_key_resp1_allKeys):
            key_resp1.keys = _key_resp1_allKeys[-1].name  # just the last key pressed
            key_resp1.rt = _key_resp1_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomwComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "welcomw" ---
for thisComponent in welcomwComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp1.keys in ['', [], None]:  # No response was made
    key_resp1.keys = None
thisExp.addData('key_resp1.keys',key_resp1.keys)
if key_resp1.keys != None:  # we had a response
    thisExp.addData('key_resp1.rt', key_resp1.rt)
thisExp.nextEntry()
# the Routine "welcomw" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "welcome1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
welcome1Components = [text_23, key_resp_6]
for thisComponent in welcome1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "welcome1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_23* updates
    if text_23.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_23.frameNStart = frameN  # exact frame index
        text_23.tStart = t  # local t and not account for scr refresh
        text_23.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_23, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_23.started')
        text_23.setAutoDraw(True)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_6.started')
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcome1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "welcome1" ---
for thisComponent in welcome1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_6.keys in ['', [], None]:  # No response was made
    key_resp_6.keys = None
thisExp.addData('key_resp_6.keys',key_resp_6.keys)
if key_resp_6.keys != None:  # we had a response
    thisExp.addData('key_resp_6.rt', key_resp_6.rt)
thisExp.nextEntry()
# the Routine "welcome1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "volume" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
volumeComponents = [text_26, key_resp_10]
for thisComponent in volumeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "volume" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_26* updates
    if text_26.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_26.frameNStart = frameN  # exact frame index
        text_26.tStart = t  # local t and not account for scr refresh
        text_26.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_26, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_26.started')
        text_26.setAutoDraw(True)
    
    # *key_resp_10* updates
    waitOnFlip = False
    if key_resp_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_10.started')
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_10.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_10.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in volumeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "volume" ---
for thisComponent in volumeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.nextEntry()
# the Routine "volume" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "volume_setting" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
volume_set.setSound('volume.wav', hamming=True)
volume_set.setVolume(1.0, log=False)
key_ressp2.keys = []
key_ressp2.rt = []
_key_ressp2_allKeys = []
# keep track of which components have finished
volume_settingComponents = [volume_set, key_ressp2, text_27]
for thisComponent in volume_settingComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "volume_setting" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # start/stop volume_set
    if volume_set.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        volume_set.frameNStart = frameN  # exact frame index
        volume_set.tStart = t  # local t and not account for scr refresh
        volume_set.tStartRefresh = tThisFlipGlobal  # on global time
        # add timestamp to datafile
        thisExp.addData('volume_set.started', tThisFlipGlobal)
        volume_set.play(when=win)  # sync with win flip
    
    # *key_ressp2* updates
    waitOnFlip = False
    if key_ressp2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_ressp2.frameNStart = frameN  # exact frame index
        key_ressp2.tStart = t  # local t and not account for scr refresh
        key_ressp2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_ressp2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_ressp2.started')
        key_ressp2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_ressp2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_ressp2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_ressp2.status == STARTED and not waitOnFlip:
        theseKeys = key_ressp2.getKeys(keyList=['space'], waitRelease=False)
        _key_ressp2_allKeys.extend(theseKeys)
        if len(_key_ressp2_allKeys):
            key_ressp2.keys = _key_ressp2_allKeys[-1].name  # just the last key pressed
            key_ressp2.rt = _key_ressp2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_27* updates
    if text_27.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_27.frameNStart = frameN  # exact frame index
        text_27.tStart = t  # local t and not account for scr refresh
        text_27.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_27, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_27.started')
        text_27.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in volume_settingComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "volume_setting" ---
for thisComponent in volume_settingComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
volume_set.stop()  # ensure sound has stopped at end of routine
# check responses
if key_ressp2.keys in ['', [], None]:  # No response was made
    key_ressp2.keys = None
thisExp.addData('key_ressp2.keys',key_ressp2.keys)
if key_ressp2.keys != None:  # we had a response
    thisExp.addData('key_ressp2.rt', key_ressp2.rt)
thisExp.nextEntry()
# the Routine "volume_setting" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instructions_2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
instructions_2Components = [text_24, key_resp_9]
for thisComponent in instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instructions_2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_24* updates
    if text_24.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_24.frameNStart = frameN  # exact frame index
        text_24.tStart = t  # local t and not account for scr refresh
        text_24.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_24, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_24.started')
        text_24.setAutoDraw(True)
    
    # *key_resp_9* updates
    waitOnFlip = False
    if key_resp_9.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_9.started')
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_9.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_9.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instructions_2" ---
for thisComponent in instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_9.keys in ['', [], None]:  # No response was made
    key_resp_9.keys = None
thisExp.addData('key_resp_9.keys',key_resp_9.keys)
if key_resp_9.keys != None:  # we had a response
    thisExp.addData('key_resp_9.rt', key_resp_9.rt)
thisExp.nextEntry()
# the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "Instructions_0" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
Instructions_0Components = [text_37, key_resp_3]
for thisComponent in Instructions_0Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Instructions_0" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_37* updates
    if text_37.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_37.frameNStart = frameN  # exact frame index
        text_37.tStart = t  # local t and not account for scr refresh
        text_37.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_37, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_37.started')
        text_37.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_3.started')
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instructions_0Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Instructions_0" ---
for thisComponent in Instructions_0Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.nextEntry()
# the Routine "Instructions_0" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "Instructions_task_1" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp1_2.keys = []
key_resp1_2.rt = []
_key_resp1_2_allKeys = []
# keep track of which components have finished
Instructions_task_1Components = [text_22, key_resp1_2]
for thisComponent in Instructions_task_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Instructions_task_1" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_22* updates
    if text_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_22.frameNStart = frameN  # exact frame index
        text_22.tStart = t  # local t and not account for scr refresh
        text_22.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_22, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_22.started')
        text_22.setAutoDraw(True)
    
    # *key_resp1_2* updates
    waitOnFlip = False
    if key_resp1_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp1_2.frameNStart = frameN  # exact frame index
        key_resp1_2.tStart = t  # local t and not account for scr refresh
        key_resp1_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp1_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp1_2.started')
        key_resp1_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp1_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp1_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp1_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp1_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp1_2_allKeys.extend(theseKeys)
        if len(_key_resp1_2_allKeys):
            key_resp1_2.keys = _key_resp1_2_allKeys[-1].name  # just the last key pressed
            key_resp1_2.rt = _key_resp1_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Instructions_task_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Instructions_task_1" ---
for thisComponent in Instructions_task_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp1_2.keys in ['', [], None]:  # No response was made
    key_resp1_2.keys = None
thisExp.addData('key_resp1_2.keys',key_resp1_2.keys)
if key_resp1_2.keys != None:  # we had a response
    thisExp.addData('key_resp1_2.rt', key_resp1_2.rt)
thisExp.nextEntry()
# the Routine "Instructions_task_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "Intructions_task2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp1_3.keys = []
key_resp1_3.rt = []
_key_resp1_3_allKeys = []
# keep track of which components have finished
Intructions_task2Components = [text_25, key_resp1_3]
for thisComponent in Intructions_task2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Intructions_task2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_25* updates
    if text_25.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_25.frameNStart = frameN  # exact frame index
        text_25.tStart = t  # local t and not account for scr refresh
        text_25.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_25, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_25.started')
        text_25.setAutoDraw(True)
    
    # *key_resp1_3* updates
    waitOnFlip = False
    if key_resp1_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp1_3.frameNStart = frameN  # exact frame index
        key_resp1_3.tStart = t  # local t and not account for scr refresh
        key_resp1_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp1_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp1_3.started')
        key_resp1_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp1_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp1_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp1_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp1_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp1_3_allKeys.extend(theseKeys)
        if len(_key_resp1_3_allKeys):
            key_resp1_3.keys = _key_resp1_3_allKeys[-1].name  # just the last key pressed
            key_resp1_3.rt = _key_resp1_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Intructions_task2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Intructions_task2" ---
for thisComponent in Intructions_task2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp1_3.keys in ['', [], None]:  # No response was made
    key_resp1_3.keys = None
thisExp.addData('key_resp1_3.keys',key_resp1_3.keys)
if key_resp1_3.keys != None:  # we had a response
    thisExp.addData('key_resp1_3.rt', key_resp1_3.rt)
thisExp.nextEntry()
# the Routine "Intructions_task2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ready_" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_11.keys = []
key_resp_11.rt = []
_key_resp_11_allKeys = []
# keep track of which components have finished
ready_Components = [text_28, key_resp_11]
for thisComponent in ready_Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ready_" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_28* updates
    if text_28.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_28.frameNStart = frameN  # exact frame index
        text_28.tStart = t  # local t and not account for scr refresh
        text_28.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_28, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_28.started')
        text_28.setAutoDraw(True)
    
    # *key_resp_11* updates
    waitOnFlip = False
    if key_resp_11.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_11.frameNStart = frameN  # exact frame index
        key_resp_11.tStart = t  # local t and not account for scr refresh
        key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_11.started')
        key_resp_11.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_11.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_11.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_11.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_11_allKeys.extend(theseKeys)
        if len(_key_resp_11_allKeys):
            key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
            key_resp_11.rt = _key_resp_11_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ready_Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ready_" ---
for thisComponent in ready_Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_11.keys in ['', [], None]:  # No response was made
    key_resp_11.keys = None
thisExp.addData('key_resp_11.keys',key_resp_11.keys)
if key_resp_11.keys != None:  # we had a response
    thisExp.addData('key_resp_11.rt', key_resp_11.rt)
thisExp.nextEntry()
# the Routine "ready_" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ready_2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp_12.keys = []
key_resp_12.rt = []
_key_resp_12_allKeys = []
# keep track of which components have finished
ready_2Components = [text_29, key_resp_12]
for thisComponent in ready_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ready_2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_29* updates
    if text_29.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_29.frameNStart = frameN  # exact frame index
        text_29.tStart = t  # local t and not account for scr refresh
        text_29.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_29, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_29.started')
        text_29.setAutoDraw(True)
    
    # *key_resp_12* updates
    waitOnFlip = False
    if key_resp_12.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_12.frameNStart = frameN  # exact frame index
        key_resp_12.tStart = t  # local t and not account for scr refresh
        key_resp_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_12, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp_12.started')
        key_resp_12.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_12.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_12.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_12.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_12.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_12_allKeys.extend(theseKeys)
        if len(_key_resp_12_allKeys):
            key_resp_12.keys = _key_resp_12_allKeys[-1].name  # just the last key pressed
            key_resp_12.rt = _key_resp_12_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ready_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ready_2" ---
for thisComponent in ready_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_12.keys in ['', [], None]:  # No response was made
    key_resp_12.keys = None
thisExp.addData('key_resp_12.keys',key_resp_12.keys)
if key_resp_12.keys != None:  # we had a response
    thisExp.addData('key_resp_12.rt', key_resp_12.rt)
thisExp.nextEntry()
# the Routine "ready_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('condsA.csv'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "ready_loop" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    key_resp_18.keys = []
    key_resp_18.rt = []
    _key_resp_18_allKeys = []
    # keep track of which components have finished
    ready_loopComponents = [text_36, key_resp_18]
    for thisComponent in ready_loopComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "ready_loop" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_36* updates
        if text_36.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_36.frameNStart = frameN  # exact frame index
            text_36.tStart = t  # local t and not account for scr refresh
            text_36.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_36, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_36.started')
            text_36.setAutoDraw(True)
        
        # *key_resp_18* updates
        waitOnFlip = False
        if key_resp_18.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_18.frameNStart = frameN  # exact frame index
            key_resp_18.tStart = t  # local t and not account for scr refresh
            key_resp_18.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_18, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_18.started')
            key_resp_18.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_18.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_18.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_18.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_18.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_18_allKeys.extend(theseKeys)
            if len(_key_resp_18_allKeys):
                key_resp_18.keys = _key_resp_18_allKeys[-1].name  # just the last key pressed
                key_resp_18.rt = _key_resp_18_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ready_loopComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ready_loop" ---
    for thisComponent in ready_loopComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_18.keys in ['', [], None]:  # No response was made
        key_resp_18.keys = None
    trials.addData('key_resp_18.keys',key_resp_18.keys)
    if key_resp_18.keys != None:  # we had a response
        trials.addData('key_resp_18.rt', key_resp_18.rt)
    # the Routine "ready_loop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "offline_conj_unsync" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    learning.setSound(audio_offline, secs=172, hamming=True)
    learning.setVolume(1.0, log=False)
    key_resp_7.keys = []
    key_resp_7.rt = []
    _key_resp_7_allKeys = []
    # keep track of which components have finished
    offline_conj_unsyncComponents = [learning, text_19, key_resp_7]
    for thisComponent in offline_conj_unsyncComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "offline_conj_unsync" ---
    while continueRoutine and routineTimer.getTime() < 172.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # start/stop learning
        if learning.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            learning.frameNStart = frameN  # exact frame index
            learning.tStart = t  # local t and not account for scr refresh
            learning.tStartRefresh = tThisFlipGlobal  # on global time
            # add timestamp to datafile
            thisExp.addData('learning.started', tThisFlipGlobal)
            learning.play(when=win)  # sync with win flip
        if learning.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > learning.tStartRefresh + 172-frameTolerance:
                # keep track of stop time/frame for later
                learning.tStop = t  # not accounting for scr refresh
                learning.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'learning.stopped')
                learning.stop()
        
        # *text_19* updates
        if text_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_19.frameNStart = frameN  # exact frame index
            text_19.tStart = t  # local t and not account for scr refresh
            text_19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_19, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_19.started')
            text_19.setAutoDraw(True)
        if text_19.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_19.tStartRefresh + 170-frameTolerance:
                # keep track of stop time/frame for later
                text_19.tStop = t  # not accounting for scr refresh
                text_19.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_19.stopped')
                text_19.setAutoDraw(False)
        
        # *key_resp_7* updates
        waitOnFlip = False
        if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_7.frameNStart = frameN  # exact frame index
            key_resp_7.tStart = t  # local t and not account for scr refresh
            key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_7.started')
            key_resp_7.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_7.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_7.tStartRefresh + 150-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_7.tStop = t  # not accounting for scr refresh
                key_resp_7.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_7.stopped')
                key_resp_7.status = FINISHED
        if key_resp_7.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_7.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_7_allKeys.extend(theseKeys)
            if len(_key_resp_7_allKeys):
                key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
                key_resp_7.rt = _key_resp_7_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in offline_conj_unsyncComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "offline_conj_unsync" ---
    for thisComponent in offline_conj_unsyncComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    learning.stop()  # ensure sound has stopped at end of routine
    # check responses
    if key_resp_7.keys in ['', [], None]:  # No response was made
        key_resp_7.keys = None
    trials.addData('key_resp_7.keys',key_resp_7.keys)
    if key_resp_7.keys != None:  # we had a response
        trials.addData('key_resp_7.rt', key_resp_7.rt)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-172.000000)
    
    # --- Prepare to start Routine "Task_1" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    key_resp1_4.keys = []
    key_resp1_4.rt = []
    _key_resp1_4_allKeys = []
    # keep track of which components have finished
    Task_1Components = [text_31, key_resp1_4]
    for thisComponent in Task_1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Task_1" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_31* updates
        if text_31.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_31.frameNStart = frameN  # exact frame index
            text_31.tStart = t  # local t and not account for scr refresh
            text_31.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_31, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_31.started')
            text_31.setAutoDraw(True)
        
        # *key_resp1_4* updates
        waitOnFlip = False
        if key_resp1_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp1_4.frameNStart = frameN  # exact frame index
            key_resp1_4.tStart = t  # local t and not account for scr refresh
            key_resp1_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp1_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp1_4.started')
            key_resp1_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp1_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp1_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp1_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp1_4.getKeys(keyList=['space'], waitRelease=False)
            _key_resp1_4_allKeys.extend(theseKeys)
            if len(_key_resp1_4_allKeys):
                key_resp1_4.keys = _key_resp1_4_allKeys[-1].name  # just the last key pressed
                key_resp1_4.rt = _key_resp1_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Task_1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Task_1" ---
    for thisComponent in Task_1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp1_4.keys in ['', [], None]:  # No response was made
        key_resp1_4.keys = None
    trials.addData('key_resp1_4.keys',key_resp1_4.keys)
    if key_resp1_4.keys != None:  # we had a response
        trials.addData('key_resp1_4.rt', key_resp1_4.rt)
    # the Routine "Task_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    Conj_unsync_online = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(seq),
        seed=None, name='Conj_unsync_online')
    thisExp.addLoop(Conj_unsync_online)  # add the loop to the experiment
    thisConj_unsync_online = Conj_unsync_online.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisConj_unsync_online.rgb)
    if thisConj_unsync_online != None:
        for paramName in thisConj_unsync_online:
            exec('{} = thisConj_unsync_online[paramName]'.format(paramName))
    
    for thisConj_unsync_online in Conj_unsync_online:
        currentLoop = Conj_unsync_online
        # abbreviate parameter names if possible (e.g. rgb = thisConj_unsync_online.rgb)
        if thisConj_unsync_online != None:
            for paramName in thisConj_unsync_online:
                exec('{} = thisConj_unsync_online[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "instructions" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        text_2.setText(cond)
        # keep track of which components have finished
        instructionsComponents = [text_2]
        for thisComponent in instructionsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "instructions" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_2* updates
            if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_2.frameNStart = frameN  # exact frame index
                text_2.tStart = t  # local t and not account for scr refresh
                text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2.started')
                text_2.setAutoDraw(True)
            if text_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_2.tStartRefresh + 0-frameTolerance:
                    # keep track of stop time/frame for later
                    text_2.tStop = t  # not accounting for scr refresh
                    text_2.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_2.stopped')
                    text_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in instructionsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "instructions" ---
        for thisComponent in instructionsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        audio1 = data.TrialHandler(nReps=1.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(online_dir, selection=ord),
            seed=None, name='audio1')
        thisExp.addLoop(audio1)  # add the loop to the experiment
        thisAudio1 = audio1.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisAudio1.rgb)
        if thisAudio1 != None:
            for paramName in thisAudio1:
                exec('{} = thisAudio1[paramName]'.format(paramName))
        
        for thisAudio1 in audio1:
            currentLoop = audio1
            # abbreviate parameter names if possible (e.g. rgb = thisAudio1.rgb)
            if thisAudio1 != None:
                for paramName in thisAudio1:
                    exec('{} = thisAudio1[paramName]'.format(paramName))
            
            # --- Prepare to start Routine "sequences" ---
            continueRoutine = True
            routineForceEnded = False
            # update component parameters for each repeat
            seqs.setSound(dirs, secs=2.665, hamming=True)
            seqs.setVolume(1.0, log=False)
            syllable_catch.keys = []
            syllable_catch.rt = []
            _syllable_catch_allKeys = []
            key_resp_16.keys = []
            key_resp_16.rt = []
            _key_resp_16_allKeys = []
            # keep track of which components have finished
            sequencesComponents = [seqs, text_13, syllable_catch, key_resp_16]
            for thisComponent in sequencesComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "sequences" ---
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                # start/stop seqs
                if seqs.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    seqs.frameNStart = frameN  # exact frame index
                    seqs.tStart = t  # local t and not account for scr refresh
                    seqs.tStartRefresh = tThisFlipGlobal  # on global time
                    # add timestamp to datafile
                    thisExp.addData('seqs.started', t)
                    seqs.play()  # start the sound (it finishes automatically)
                if seqs.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > seqs.tStartRefresh + 2.665-frameTolerance:
                        # keep track of stop time/frame for later
                        seqs.tStop = t  # not accounting for scr refresh
                        seqs.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.addData('seqs.stopped', t)
                        seqs.stop()
                
                # *text_13* updates
                if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_13.frameNStart = frameN  # exact frame index
                    text_13.tStart = t  # local t and not account for scr refresh
                    text_13.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_13.started')
                    text_13.setAutoDraw(True)
                if text_13.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_13.tStartRefresh + 2.7-frameTolerance:
                        # keep track of stop time/frame for later
                        text_13.tStop = t  # not accounting for scr refresh
                        text_13.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_13.stopped')
                        text_13.setAutoDraw(False)
                if text_13.status == STARTED:  # only update if drawing
                    text_13.setColor(colour, colorSpace='rgb', log=False)
                    text_13.setText(cond, log=False)
                
                # *syllable_catch* updates
                waitOnFlip = False
                if syllable_catch.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    syllable_catch.frameNStart = frameN  # exact frame index
                    syllable_catch.tStart = t  # local t and not account for scr refresh
                    syllable_catch.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(syllable_catch, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'syllable_catch.started')
                    syllable_catch.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(syllable_catch.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(syllable_catch.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if syllable_catch.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > syllable_catch.tStartRefresh + 2.7-frameTolerance:
                        # keep track of stop time/frame for later
                        syllable_catch.tStop = t  # not accounting for scr refresh
                        syllable_catch.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'syllable_catch.stopped')
                        syllable_catch.status = FINISHED
                if syllable_catch.status == STARTED and not waitOnFlip:
                    theseKeys = syllable_catch.getKeys(keyList=['space'], waitRelease=False)
                    _syllable_catch_allKeys.extend(theseKeys)
                    if len(_syllable_catch_allKeys):
                        syllable_catch.keys = _syllable_catch_allKeys[-1].name  # just the last key pressed
                        syllable_catch.rt = _syllable_catch_allKeys[-1].rt
                
                # *key_resp_16* updates
                waitOnFlip = False
                if key_resp_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_16.frameNStart = frameN  # exact frame index
                    key_resp_16.tStart = t  # local t and not account for scr refresh
                    key_resp_16.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_16, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_16.started')
                    key_resp_16.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_16.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_16.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_16.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_16.getKeys(keyList=['y'], waitRelease=False)
                    _key_resp_16_allKeys.extend(theseKeys)
                    if len(_key_resp_16_allKeys):
                        key_resp_16.keys = _key_resp_16_allKeys[-1].name  # just the last key pressed
                        key_resp_16.rt = _key_resp_16_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in sequencesComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "sequences" ---
            for thisComponent in sequencesComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            seqs.stop()  # ensure sound has stopped at end of routine
            # check responses
            if syllable_catch.keys in ['', [], None]:  # No response was made
                syllable_catch.keys = None
            audio1.addData('syllable_catch.keys',syllable_catch.keys)
            if syllable_catch.keys != None:  # we had a response
                audio1.addData('syllable_catch.rt', syllable_catch.rt)
            # check responses
            if key_resp_16.keys in ['', [], None]:  # No response was made
                key_resp_16.keys = None
            audio1.addData('key_resp_16.keys',key_resp_16.keys)
            if key_resp_16.keys != None:  # we had a response
                audio1.addData('key_resp_16.rt', key_resp_16.rt)
            # the Routine "sequences" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'audio1'
        
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'Conj_unsync_online'
    
    
    # --- Prepare to start Routine "test_instructions" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    key_resp4.keys = []
    key_resp4.rt = []
    _key_resp4_allKeys = []
    # keep track of which components have finished
    test_instructionsComponents = [text_12, key_resp4]
    for thisComponent in test_instructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "test_instructions" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_12* updates
        if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_12.frameNStart = frameN  # exact frame index
            text_12.tStart = t  # local t and not account for scr refresh
            text_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_12.started')
            text_12.setAutoDraw(True)
        
        # *key_resp4* updates
        waitOnFlip = False
        if key_resp4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp4.frameNStart = frameN  # exact frame index
            key_resp4.tStart = t  # local t and not account for scr refresh
            key_resp4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp4.started')
            key_resp4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp4.getKeys(keyList=['space'], waitRelease=False)
            _key_resp4_allKeys.extend(theseKeys)
            if len(_key_resp4_allKeys):
                key_resp4.keys = _key_resp4_allKeys[-1].name  # just the last key pressed
                key_resp4.rt = _key_resp4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in test_instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "test_instructions" ---
    for thisComponent in test_instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp4.keys in ['', [], None]:  # No response was made
        key_resp4.keys = None
    trials.addData('key_resp4.keys',key_resp4.keys)
    if key_resp4.keys != None:  # we had a response
        trials.addData('key_resp4.rt', key_resp4.rt)
    # the Routine "test_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "test_instructions2" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    test_instructions2Components = [text_14, key_resp_4]
    for thisComponent in test_instructions2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "test_instructions2" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_14* updates
        if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_14.frameNStart = frameN  # exact frame index
            text_14.tStart = t  # local t and not account for scr refresh
            text_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_14.started')
            text_14.setAutoDraw(True)
        
        # *key_resp_4* updates
        waitOnFlip = False
        if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_4.frameNStart = frameN  # exact frame index
            key_resp_4.tStart = t  # local t and not account for scr refresh
            key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_4.started')
            key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_4_allKeys.extend(theseKeys)
            if len(_key_resp_4_allKeys):
                key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in test_instructions2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "test_instructions2" ---
    for thisComponent in test_instructions2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_4.keys in ['', [], None]:  # No response was made
        key_resp_4.keys = None
    trials.addData('key_resp_4.keys',key_resp_4.keys)
    if key_resp_4.keys != None:  # we had a response
        trials.addData('key_resp_4.rt', key_resp_4.rt)
    # the Routine "test_instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    Conj_unsync_test = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(test_dir),
        seed=None, name='Conj_unsync_test')
    thisExp.addLoop(Conj_unsync_test)  # add the loop to the experiment
    thisConj_unsync_test = Conj_unsync_test.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisConj_unsync_test.rgb)
    if thisConj_unsync_test != None:
        for paramName in thisConj_unsync_test:
            exec('{} = thisConj_unsync_test[paramName]'.format(paramName))
    
    for thisConj_unsync_test in Conj_unsync_test:
        currentLoop = Conj_unsync_test
        # abbreviate parameter names if possible (e.g. rgb = thisConj_unsync_test.rgb)
        if thisConj_unsync_test != None:
            for paramName in thisConj_unsync_test:
                exec('{} = thisConj_unsync_test[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "audio" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        test_sounds.setSound(test, secs=2.664, hamming=True)
        test_sounds.setVolume(1.0, log=False)
        key_resp_17.keys = []
        key_resp_17.rt = []
        _key_resp_17_allKeys = []
        # keep track of which components have finished
        audioComponents = [test_sounds, text_17, key_resp_17]
        for thisComponent in audioComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "audio" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            # start/stop test_sounds
            if test_sounds.status == NOT_STARTED and tThisFlip >= 0.2-frameTolerance:
                # keep track of start time/frame for later
                test_sounds.frameNStart = frameN  # exact frame index
                test_sounds.tStart = t  # local t and not account for scr refresh
                test_sounds.tStartRefresh = tThisFlipGlobal  # on global time
                # add timestamp to datafile
                thisExp.addData('test_sounds.started', tThisFlipGlobal)
                test_sounds.play(when=win)  # sync with win flip
            if test_sounds.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > test_sounds.tStartRefresh + 2.664-frameTolerance:
                    # keep track of stop time/frame for later
                    test_sounds.tStop = t  # not accounting for scr refresh
                    test_sounds.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'test_sounds.stopped')
                    test_sounds.stop()
            
            # *text_17* updates
            if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_17.frameNStart = frameN  # exact frame index
                text_17.tStart = t  # local t and not account for scr refresh
                text_17.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_17.started')
                text_17.setAutoDraw(True)
            if text_17.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > text_17.tStartRefresh + 2.9-frameTolerance:
                    # keep track of stop time/frame for later
                    text_17.tStop = t  # not accounting for scr refresh
                    text_17.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_17.stopped')
                    text_17.setAutoDraw(False)
            
            # *key_resp_17* updates
            waitOnFlip = False
            if key_resp_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_17.frameNStart = frameN  # exact frame index
                key_resp_17.tStart = t  # local t and not account for scr refresh
                key_resp_17.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_17, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_17.started')
                key_resp_17.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_17.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp_17.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp_17.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_17.getKeys(keyList=['y'], waitRelease=False)
                _key_resp_17_allKeys.extend(theseKeys)
                if len(_key_resp_17_allKeys):
                    key_resp_17.keys = _key_resp_17_allKeys[-1].name  # just the last key pressed
                    key_resp_17.rt = _key_resp_17_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in audioComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "audio" ---
        for thisComponent in audioComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        test_sounds.stop()  # ensure sound has stopped at end of routine
        # check responses
        if key_resp_17.keys in ['', [], None]:  # No response was made
            key_resp_17.keys = None
        Conj_unsync_test.addData('key_resp_17.keys',key_resp_17.keys)
        if key_resp_17.keys != None:  # we had a response
            Conj_unsync_test.addData('key_resp_17.rt', key_resp_17.rt)
        # the Routine "audio" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "question1" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        Partz_no_partm.keys = []
        Partz_no_partm.rt = []
        _Partz_no_partm_allKeys = []
        # keep track of which components have finished
        question1Components = [text_18, Partz_no_partm]
        for thisComponent in question1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "question1" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_18* updates
            if text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_18.frameNStart = frameN  # exact frame index
                text_18.tStart = t  # local t and not account for scr refresh
                text_18.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_18.started')
                text_18.setAutoDraw(True)
            
            # *Partz_no_partm* updates
            waitOnFlip = False
            if Partz_no_partm.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Partz_no_partm.frameNStart = frameN  # exact frame index
                Partz_no_partm.tStart = t  # local t and not account for scr refresh
                Partz_no_partm.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Partz_no_partm, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Partz_no_partm.started')
                Partz_no_partm.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(Partz_no_partm.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(Partz_no_partm.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if Partz_no_partm.status == STARTED and not waitOnFlip:
                theseKeys = Partz_no_partm.getKeys(keyList=['z','m'], waitRelease=False)
                _Partz_no_partm_allKeys.extend(theseKeys)
                if len(_Partz_no_partm_allKeys):
                    Partz_no_partm.keys = _Partz_no_partm_allKeys[-1].name  # just the last key pressed
                    Partz_no_partm.rt = _Partz_no_partm_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in question1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "question1" ---
        for thisComponent in question1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if Partz_no_partm.keys in ['', [], None]:  # No response was made
            Partz_no_partm.keys = None
        Conj_unsync_test.addData('Partz_no_partm.keys',Partz_no_partm.keys)
        if Partz_no_partm.keys != None:  # we had a response
            Conj_unsync_test.addData('Partz_no_partm.rt', Partz_no_partm.rt)
        # the Routine "question1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "question_2" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        security_1_7.keys = []
        security_1_7.rt = []
        _security_1_7_allKeys = []
        # keep track of which components have finished
        question_2Components = [text_32, image_2, text_33, security_1_7]
        for thisComponent in question_2Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "question_2" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_32* updates
            if text_32.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_32.frameNStart = frameN  # exact frame index
                text_32.tStart = t  # local t and not account for scr refresh
                text_32.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_32, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_32.started')
                text_32.setAutoDraw(True)
            
            # *image_2* updates
            if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_2.frameNStart = frameN  # exact frame index
                image_2.tStart = t  # local t and not account for scr refresh
                image_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_2.started')
                image_2.setAutoDraw(True)
            
            # *text_33* updates
            if text_33.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_33.frameNStart = frameN  # exact frame index
                text_33.tStart = t  # local t and not account for scr refresh
                text_33.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_33, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_33.started')
                text_33.setAutoDraw(True)
            
            # *security_1_7* updates
            waitOnFlip = False
            if security_1_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                security_1_7.frameNStart = frameN  # exact frame index
                security_1_7.tStart = t  # local t and not account for scr refresh
                security_1_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(security_1_7, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'security_1_7.started')
                security_1_7.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(security_1_7.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(security_1_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if security_1_7.status == STARTED and not waitOnFlip:
                theseKeys = security_1_7.getKeys(keyList=['1','2','3','4','5','6','7'], waitRelease=False)
                _security_1_7_allKeys.extend(theseKeys)
                if len(_security_1_7_allKeys):
                    security_1_7.keys = _security_1_7_allKeys[-1].name  # just the last key pressed
                    security_1_7.rt = _security_1_7_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in question_2Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "question_2" ---
        for thisComponent in question_2Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if security_1_7.keys in ['', [], None]:  # No response was made
            security_1_7.keys = None
        Conj_unsync_test.addData('security_1_7.keys',security_1_7.keys)
        if security_1_7.keys != None:  # we had a response
            Conj_unsync_test.addData('security_1_7.rt', security_1_7.rt)
        # the Routine "question_2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'Conj_unsync_test'
    
    
    # --- Prepare to start Routine "Next_langauge" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    key_resp_13.keys = []
    key_resp_13.rt = []
    _key_resp_13_allKeys = []
    # keep track of which components have finished
    Next_langaugeComponents = [text_30, key_resp_13]
    for thisComponent in Next_langaugeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Next_langauge" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_30* updates
        if text_30.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_30.frameNStart = frameN  # exact frame index
            text_30.tStart = t  # local t and not account for scr refresh
            text_30.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_30, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_30.started')
            text_30.setAutoDraw(True)
        
        # *key_resp_13* updates
        waitOnFlip = False
        if key_resp_13.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_13.frameNStart = frameN  # exact frame index
            key_resp_13.tStart = t  # local t and not account for scr refresh
            key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_13.started')
            key_resp_13.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_13.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_13.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_13.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_13_allKeys.extend(theseKeys)
            if len(_key_resp_13_allKeys):
                key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
                key_resp_13.rt = _key_resp_13_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Next_langaugeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Next_langauge" ---
    for thisComponent in Next_langaugeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_resp_13.keys in ['', [], None]:  # No response was made
        key_resp_13.keys = None
    trials.addData('key_resp_13.keys',key_resp_13.keys)
    if key_resp_13.keys != None:  # we had a response
        trials.addData('key_resp_13.rt', key_resp_13.rt)
    # the Routine "Next_langauge" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- Prepare to start Routine "gracias_2" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
key_resp6.keys = []
key_resp6.rt = []
_key_resp6_allKeys = []
# keep track of which components have finished
gracias_2Components = [text_40, key_resp6]
for thisComponent in gracias_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "gracias_2" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_40* updates
    if text_40.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_40.frameNStart = frameN  # exact frame index
        text_40.tStart = t  # local t and not account for scr refresh
        text_40.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_40, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_40.started')
        text_40.setAutoDraw(True)
    
    # *key_resp6* updates
    waitOnFlip = False
    if key_resp6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp6.frameNStart = frameN  # exact frame index
        key_resp6.tStart = t  # local t and not account for scr refresh
        key_resp6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp6, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp6.started')
        key_resp6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp6.getKeys(keyList=['space'], waitRelease=False)
        _key_resp6_allKeys.extend(theseKeys)
        if len(_key_resp6_allKeys):
            key_resp6.keys = _key_resp6_allKeys[-1].name  # just the last key pressed
            key_resp6.rt = _key_resp6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in gracias_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "gracias_2" ---
for thisComponent in gracias_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp6.keys in ['', [], None]:  # No response was made
    key_resp6.keys = None
thisExp.addData('key_resp6.keys',key_resp6.keys)
if key_resp6.keys != None:  # we had a response
    thisExp.addData('key_resp6.rt', key_resp6.rt)
thisExp.nextEntry()
# the Routine "gracias_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "comentario" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
textbox.reset()
textbox.setText('')
# setup some python lists for storing info about the mouse
mouse.x = []
mouse.y = []
mouse.leftButton = []
mouse.midButton = []
mouse.rightButton = []
mouse.time = []
mouse.clicked_name = []
gotValidClick = False  # until a click is received
# Run 'Begin Routine' code from code
text_11 = visual.TextStim(win=win, name='text_11',
    text='Pulsa acquì para terminar el experimento',
    font='Open Sans',
    pos=(0, -0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, bold= True,
    languageStyle='LTR',
    depth=-2.0);
# keep track of which components have finished
comentarioComponents = [textbox, text_38, text_39, mouse]
for thisComponent in comentarioComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "comentario" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *textbox* updates
    if textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox.frameNStart = frameN  # exact frame index
        textbox.tStart = t  # local t and not account for scr refresh
        textbox.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'textbox.started')
        textbox.setAutoDraw(True)
    
    # *text_38* updates
    if text_38.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_38.frameNStart = frameN  # exact frame index
        text_38.tStart = t  # local t and not account for scr refresh
        text_38.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_38, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_38.started')
        text_38.setAutoDraw(True)
    
    # *text_39* updates
    if text_39.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_39.frameNStart = frameN  # exact frame index
        text_39.tStart = t  # local t and not account for scr refresh
        text_39.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_39, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_39.started')
        text_39.setAutoDraw(True)
    # *mouse* updates
    if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        mouse.frameNStart = frameN  # exact frame index
        mouse.tStart = t  # local t and not account for scr refresh
        mouse.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('mouse.started', t)
        mouse.status = STARTED
        mouse.mouseClock.reset()
        prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
    if mouse.status == STARTED:  # only update if started and not finished!
        buttons = mouse.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                # check if the mouse was inside our 'clickable' objects
                gotValidClick = False
                try:
                    iter(text_11)
                    clickableList = text_11
                except:
                    clickableList = [text_11]
                for obj in clickableList:
                    if obj.contains(mouse):
                        gotValidClick = True
                        mouse.clicked_name.append(obj.name)
                x, y = mouse.getPos()
                mouse.x.append(x)
                mouse.y.append(y)
                buttons = mouse.getPressed()
                mouse.leftButton.append(buttons[0])
                mouse.midButton.append(buttons[1])
                mouse.rightButton.append(buttons[2])
                mouse.time.append(mouse.mouseClock.getTime())
                if gotValidClick:
                    continueRoutine = False  # abort routine on response
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in comentarioComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "comentario" ---
for thisComponent in comentarioComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox.text',textbox.text)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse.x', mouse.x)
thisExp.addData('mouse.y', mouse.y)
thisExp.addData('mouse.leftButton', mouse.leftButton)
thisExp.addData('mouse.midButton', mouse.midButton)
thisExp.addData('mouse.rightButton', mouse.rightButton)
thisExp.addData('mouse.time', mouse.time)
thisExp.addData('mouse.clicked_name', mouse.clicked_name)
thisExp.nextEntry()
# the Routine "comentario" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
