/********************** 
 * Unsyncopated1 Test *
 **********************/


// store info about the experiment session:
let expName = 'Unsyncopated1';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'group': ["A", "B"],
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1,1,1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(Consent_2RoutineBegin());
flowScheduler.add(Consent_2RoutineEachFrame());
flowScheduler.add(Consent_2RoutineEnd());
flowScheduler.add(Initial_questionnaireRoutineBegin());
flowScheduler.add(Initial_questionnaireRoutineEachFrame());
flowScheduler.add(Initial_questionnaireRoutineEnd());
flowScheduler.add(ageRoutineBegin());
flowScheduler.add(ageRoutineEachFrame());
flowScheduler.add(ageRoutineEnd());
flowScheduler.add(residenceRoutineBegin());
flowScheduler.add(residenceRoutineEachFrame());
flowScheduler.add(residenceRoutineEnd());
flowScheduler.add(native_language_2RoutineBegin());
flowScheduler.add(native_language_2RoutineEachFrame());
flowScheduler.add(native_language_2RoutineEnd());
flowScheduler.add(sexRoutineBegin());
flowScheduler.add(sexRoutineEachFrame());
flowScheduler.add(sexRoutineEnd());
flowScheduler.add(level_of_educationRoutineBegin());
flowScheduler.add(level_of_educationRoutineEachFrame());
flowScheduler.add(level_of_educationRoutineEnd());
flowScheduler.add(handednessRoutineBegin());
flowScheduler.add(handednessRoutineEachFrame());
flowScheduler.add(handednessRoutineEnd());
flowScheduler.add(language_startRoutineBegin());
flowScheduler.add(language_startRoutineEachFrame());
flowScheduler.add(language_startRoutineEnd());
flowScheduler.add(language_nRoutineBegin());
flowScheduler.add(language_nRoutineEachFrame());
flowScheduler.add(language_nRoutineEnd());
flowScheduler.add(language_type_ageRoutineBegin());
flowScheduler.add(language_type_ageRoutineEachFrame());
flowScheduler.add(language_type_ageRoutineEnd());
flowScheduler.add(language_useRoutineBegin());
flowScheduler.add(language_useRoutineEachFrame());
flowScheduler.add(language_useRoutineEnd());
flowScheduler.add(ability_learn_languageRoutineBegin());
flowScheduler.add(ability_learn_languageRoutineEachFrame());
flowScheduler.add(ability_learn_languageRoutineEnd());
flowScheduler.add(tendence_mixlang_2RoutineBegin());
flowScheduler.add(tendence_mixlang_2RoutineEachFrame());
flowScheduler.add(tendence_mixlang_2RoutineEnd());
flowScheduler.add(trastorno_lenguajeRoutineBegin());
flowScheduler.add(trastorno_lenguajeRoutineEachFrame());
flowScheduler.add(trastorno_lenguajeRoutineEnd());
flowScheduler.add(trastorno_auditivoRoutineBegin());
flowScheduler.add(trastorno_auditivoRoutineEachFrame());
flowScheduler.add(trastorno_auditivoRoutineEnd());
flowScheduler.add(music_startRoutineBegin());
flowScheduler.add(music_startRoutineEachFrame());
flowScheduler.add(music_startRoutineEnd());
flowScheduler.add(practica_musicaRoutineBegin());
flowScheduler.add(practica_musicaRoutineEachFrame());
flowScheduler.add(practica_musicaRoutineEnd());
flowScheduler.add(instrument_ageRoutineBegin());
flowScheduler.add(instrument_ageRoutineEachFrame());
flowScheduler.add(instrument_ageRoutineEnd());
flowScheduler.add(instrument_useRoutineBegin());
flowScheduler.add(instrument_useRoutineEachFrame());
flowScheduler.add(instrument_useRoutineEnd());
flowScheduler.add(partituraRoutineBegin());
flowScheduler.add(partituraRoutineEachFrame());
flowScheduler.add(partituraRoutineEnd());
flowScheduler.add(intro_questionaire1RoutineBegin());
flowScheduler.add(intro_questionaire1RoutineEachFrame());
flowScheduler.add(intro_questionaire1RoutineEnd());
const BMRQLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BMRQLoopBegin(BMRQLoopScheduler));
flowScheduler.add(BMRQLoopScheduler);
flowScheduler.add(BMRQLoopEnd);
flowScheduler.add(welcome1RoutineBegin());
flowScheduler.add(welcome1RoutineEachFrame());
flowScheduler.add(welcome1RoutineEnd());
flowScheduler.add(welcomwRoutineBegin());
flowScheduler.add(welcomwRoutineEachFrame());
flowScheduler.add(welcomwRoutineEnd());
flowScheduler.add(volumeRoutineBegin());
flowScheduler.add(volumeRoutineEachFrame());
flowScheduler.add(volumeRoutineEnd());
flowScheduler.add(volume_settingRoutineBegin());
flowScheduler.add(volume_settingRoutineEachFrame());
flowScheduler.add(volume_settingRoutineEnd());
flowScheduler.add(instructions_2RoutineBegin());
flowScheduler.add(instructions_2RoutineEachFrame());
flowScheduler.add(instructions_2RoutineEnd());
flowScheduler.add(Instructions_0RoutineBegin());
flowScheduler.add(Instructions_0RoutineEachFrame());
flowScheduler.add(Instructions_0RoutineEnd());
flowScheduler.add(Instructions_task_1RoutineBegin());
flowScheduler.add(Instructions_task_1RoutineEachFrame());
flowScheduler.add(Instructions_task_1RoutineEnd());
flowScheduler.add(Intructions_task2RoutineBegin());
flowScheduler.add(Intructions_task2RoutineEachFrame());
flowScheduler.add(Intructions_task2RoutineEnd());
flowScheduler.add(ready_RoutineBegin());
flowScheduler.add(ready_RoutineEachFrame());
flowScheduler.add(ready_RoutineEnd());
flowScheduler.add(ready_2RoutineBegin());
flowScheduler.add(ready_2RoutineEachFrame());
flowScheduler.add(ready_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(preguntas_rhytmosRoutineBegin());
flowScheduler.add(preguntas_rhytmosRoutineEachFrame());
flowScheduler.add(preguntas_rhytmosRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(gracias_2RoutineBegin());
flowScheduler.add(gracias_2RoutineEachFrame());
flowScheduler.add(gracias_2RoutineEnd());
flowScheduler.add(comentarioRoutineBegin());
flowScheduler.add(comentarioRoutineEachFrame());
flowScheduler.add(comentarioRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Online_whenL3//a.mo1.888.wav', 'path': 'Online_whenL3//a.mo1.888.wav'},
    {'name': 'Online_whatL2//d.si.ñu20.none.none.wav', 'path': 'Online_whatL2//d.si.ñu20.none.none.wav'},
    {'name': 'Online_whenL3//c.gu24.1110.wav', 'path': 'Online_whenL3//c.gu24.1110.wav'},
    {'name': 'Online_whatL2//b.fe.ra0.0.1110.wav', 'path': 'Online_whatL2//b.fe.ra0.0.1110.wav'},
    {'name': 'Online_whenL3//c.gu20.none.wav', 'path': 'Online_whenL3//c.gu20.none.wav'},
    {'name': 'testConjL1Uns//dep_viol.r2.s2.0.wav', 'path': 'testConjL1Uns//dep_viol.r2.s2.0.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo13.1332.222.wav', 'path': 'Online_conjL1_un//c.ro.fo13.1332.222.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo11.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo11.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu19.1110.0.wav', 'path': 'Online_whatL2//d.si.ñu19.1110.0.wav'},
    {'name': 'Online_whatL2//a.go.du8.0.888.wav', 'path': 'Online_whatL2//a.go.du8.0.888.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po13.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po13.none.none.wav'},
    {'name': 'ConjL1_uns.csv', 'path': 'ConjL1_uns.csv'},
    {'name': 'Online_whatL2//b.fe.ra12.none.none.wav', 'path': 'Online_whatL2//b.fe.ra12.none.none.wav'},
    {'name': 'testWhenL3Uns//r1.s2.2.wav', 'path': 'testWhenL3Uns//r1.s2.2.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo4.0.1110.wav', 'path': 'Online_conjL1_un//c.ro.fo4.0.1110.wav'},
    {'name': 'Online_whatL2//d.si.ñu7.1332.0.wav', 'path': 'Online_whatL2//d.si.ñu7.1332.0.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu24.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu24.none.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da14.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da14.none.none.wav'},
    {'name': 'Online_whenL3//c.gu29.1110.wav', 'path': 'Online_whenL3//c.gu29.1110.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da5.222.1110.wav', 'path': 'Online_conjL4_syn//c.bu.da5.222.1110.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki30.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki30.none.none.wav'},
    {'name': 'testWhenL3Uns//r2.s2.0.wav', 'path': 'testWhenL3Uns//r2.s2.0.wav'},
    {'name': 'testConjL4Syn//cat_viol.r1.s2.0.wav', 'path': 'testConjL4Syn//cat_viol.r1.s2.0.wav'},
    {'name': 'Online_whatL2//c.cha.me2.none.none.wav', 'path': 'Online_whatL2//c.cha.me2.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du21.none.none.wav', 'path': 'Online_whatL2//a.go.du21.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu30.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu30.none.none.wav'},
    {'name': 'testWhatL2Uns//dep_viol.r2.s2.0.wav', 'path': 'testWhatL2Uns//dep_viol.r2.s2.0.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni2.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni2.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo1.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo1.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe15.none.wav', 'path': 'Online_whenL3//b.ñe15.none.wav'},
    {'name': 'Online_whenL3//b.ñe17.1998.wav', 'path': 'Online_whenL3//b.ñe17.1998.wav'},
    {'name': 'Online_whenL3//c.gu7.1776.wav', 'path': 'Online_whenL3//c.gu7.1776.wav'},
    {'name': 'Online_whatL2//d.si.ñu4.1776.1110.wav', 'path': 'Online_whatL2//d.si.ñu4.1776.1110.wav'},
    {'name': 'Online_whenL3//a.mo2.none.wav', 'path': 'Online_whenL3//a.mo2.none.wav'},
    {'name': 'Online_whenL3//c.gu21.none.wav', 'path': 'Online_whenL3//c.gu21.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo25.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo25.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe24.none.wav', 'path': 'Online_whenL3//b.ñe24.none.wav'},
    {'name': 'Online_whatL2//a.go.du27.none.none.wav', 'path': 'Online_whatL2//a.go.du27.none.none.wav'},
    {'name': 'testConjL4Syn//r2.s1.2.wav', 'path': 'testConjL4Syn//r2.s1.2.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo5.1110.222.wav', 'path': 'Online_conjL1_un//c.ro.fo5.1110.222.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo30.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo30.none.none.wav'},
    {'name': 'Online_whenL3//d.ji26.none.wav', 'path': 'Online_whenL3//d.ji26.none.wav'},
    {'name': 'Online_whenL3//b.ñe10.none.wav', 'path': 'Online_whenL3//b.ñe10.none.wav'},
    {'name': 'WhenL3_unsync.wav', 'path': 'WhenL3_unsync.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki6.0.888.wav', 'path': 'Online_conjL1_un//a.pu.ki6.0.888.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki15.888.1776.wav', 'path': 'Online_conjL1_un//a.pu.ki15.888.1776.wav'},
    {'name': 'Online_conjL1_un//b.ta.be18.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be18.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me14.none.none.wav', 'path': 'Online_whatL2//c.cha.me14.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo7.666.1554.wav', 'path': 'Online_conjL4_syn//a.zi.lo7.666.1554.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po25.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po25.none.none.wav'},
    {'name': 'testWhatL2Uns//r1.s1.1.wav', 'path': 'testWhatL2Uns//r1.s1.1.wav'},
    {'name': 'Online_whatL2//a.go.du5.none.none.wav', 'path': 'Online_whatL2//a.go.du5.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu5.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu5.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo11.666.1554.wav', 'path': 'Online_conjL4_syn//a.zi.lo11.666.1554.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo29.1110.1332.wav', 'path': 'Online_conjL1_un//c.ro.fo29.1110.1332.wav'},
    {'name': 'testConjL4Syn//r2.s1.0.wav', 'path': 'testConjL4Syn//r2.s1.0.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po29.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po29.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du7.none.none.wav', 'path': 'Online_whatL2//a.go.du7.none.none.wav'},
    {'name': 'Online_whenL3//c.gu31.none.wav', 'path': 'Online_whenL3//c.gu31.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu0.0.444.wav', 'path': 'Online_whatL2//d.si.ñu0.0.444.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo18.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo18.none.none.wav'},
    {'name': 'Online_whenL3//a.mo6.444.wav', 'path': 'Online_whenL3//a.mo6.444.wav'},
    {'name': 'WhenL3_uns.csv', 'path': 'WhenL3_uns.csv'},
    {'name': 'Online_conjL1_un//b.ta.be25.0.888.wav', 'path': 'Online_conjL1_un//b.ta.be25.0.888.wav'},
    {'name': 'Online_whenL3//b.ñe22.none.wav', 'path': 'Online_whenL3//b.ñe22.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra20.none.none.wav', 'path': 'Online_whatL2//b.fe.ra20.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo0.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo0.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu28.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu28.none.none.wav'},
    {'name': 'Online_whenL3//c.gu28.none.wav', 'path': 'Online_whenL3//c.gu28.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni29.0.444.wav', 'path': 'Online_conjL1_un//d.ne.ni29.0.444.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki7.0.888.wav', 'path': 'Online_conjL1_un//a.pu.ki7.0.888.wav'},
    {'name': 'Online_whenL3//d.ji14.1998.wav', 'path': 'Online_whenL3//d.ji14.1998.wav'},
    {'name': 'Online_whatL2//a.go.du11.1110.1998.wav', 'path': 'Online_whatL2//a.go.du11.1110.1998.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da22.0.222.wav', 'path': 'Online_conjL4_syn//c.bu.da22.0.222.wav'},
    {'name': 'Online_whenL3//b.ñe13.none.wav', 'path': 'Online_whenL3//b.ñe13.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo12.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo12.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu12.0.666.wav', 'path': 'Online_conjL4_syn//b.ja.nu12.0.666.wav'},
    {'name': 'testConjL4Syn//time_viol.r1.s2.0.wav', 'path': 'testConjL4Syn//time_viol.r1.s2.0.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu6.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu6.none.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo9.1332.444.wav', 'path': 'Online_conjL1_un//c.ro.fo9.1332.444.wav'},
    {'name': 'Online_whenL3//a.mo4.1776.wav', 'path': 'Online_whenL3//a.mo4.1776.wav'},
    {'name': 'Online_whenL3//b.ñe30.none.wav', 'path': 'Online_whenL3//b.ñe30.none.wav'},
    {'name': 'Online_whenL3//b.ñe27.none.wav', 'path': 'Online_whenL3//b.ñe27.none.wav'},
    {'name': 'Online_whenL3//a.mo31.1776.wav', 'path': 'Online_whenL3//a.mo31.1776.wav'},
    {'name': 'Online_whatL2//b.fe.ra14.none.none.wav', 'path': 'Online_whatL2//b.fe.ra14.none.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo28.444.1110.wav', 'path': 'Online_conjL1_un//c.ro.fo28.444.1110.wav'},
    {'name': 'Online_whenL3//d.ji11.none.wav', 'path': 'Online_whenL3//d.ji11.none.wav'},
    {'name': 'testConjL4Syn//r1.s1.2.wav', 'path': 'testConjL4Syn//r1.s1.2.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da18.1110.1332.wav', 'path': 'Online_conjL4_syn//c.bu.da18.1110.1332.wav'},
    {'name': 'Online_whatL2//c.cha.me28.0.1110.wav', 'path': 'Online_whatL2//c.cha.me28.0.1110.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo8.0.666.wav', 'path': 'Online_conjL4_syn//a.zi.lo8.0.666.wav'},
    {'name': 'Online_whenL3//a.mo13.1776.wav', 'path': 'Online_whenL3//a.mo13.1776.wav'},
    {'name': 'Online_whatL2//b.fe.ra5.888.1776.wav', 'path': 'Online_whatL2//b.fe.ra5.888.1776.wav'},
    {'name': 'Online_whenL3//b.ñe16.1110.wav', 'path': 'Online_whenL3//b.ñe16.1110.wav'},
    {'name': 'Online_conjL1_un//b.ta.be28.0.888.wav', 'path': 'Online_conjL1_un//b.ta.be28.0.888.wav'},
    {'name': 'Online_whatL2//a.go.du3.0.888.wav', 'path': 'Online_whatL2//a.go.du3.0.888.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu10.0.666.wav', 'path': 'Online_conjL4_syn//b.ja.nu10.0.666.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu25.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu25.none.none.wav'},
    {'name': 'Online_whenL3//d.ji16.none.wav', 'path': 'Online_whenL3//d.ji16.none.wav'},
    {'name': 'Online_whenL3//b.ñe0.222.wav', 'path': 'Online_whenL3//b.ñe0.222.wav'},
    {'name': 'Online_whatL2//b.fe.ra24.none.none.wav', 'path': 'Online_whatL2//b.fe.ra24.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po27.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po27.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu27.none.none.wav', 'path': 'Online_whatL2//d.si.ñu27.none.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo21.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo21.none.none.wav'},
    {'name': 'testConjL4Syn//r1.s1.1.wav', 'path': 'testConjL4Syn//r1.s1.1.wav'},
    {'name': 'Online_whenL3//d.ji22.1332.wav', 'path': 'Online_whenL3//d.ji22.1332.wav'},
    {'name': 'Online_whenL3//d.ji10.444.wav', 'path': 'Online_whenL3//d.ji10.444.wav'},
    {'name': 'Online_whenL3//c.gu23.none.wav', 'path': 'Online_whenL3//c.gu23.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni23.1110.222.wav', 'path': 'Online_conjL1_un//d.ne.ni23.1110.222.wav'},
    {'name': 'Online_whatL2//a.go.du1.none.none.wav', 'path': 'Online_whatL2//a.go.du1.none.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da15.222.444.wav', 'path': 'Online_conjL4_syn//c.bu.da15.222.444.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da24.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da24.none.none.wav'},
    {'name': 'Online_whenL3//c.gu0.none.wav', 'path': 'Online_whenL3//c.gu0.none.wav'},
    {'name': 'Online_whenL3//a.mo20.1776.wav', 'path': 'Online_whenL3//a.mo20.1776.wav'},
    {'name': 'testWhenL3Uns//r1.s2.0.wav', 'path': 'testWhenL3Uns//r1.s2.0.wav'},
    {'name': 'Online_conjL1_un//b.ta.be0.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be0.none.none.wav'},
    {'name': 'Online_whenL3//d.ji8.none.wav', 'path': 'Online_whenL3//d.ji8.none.wav'},
    {'name': 'testWhatL2Uns//dep_viol.r1.s1.0.wav', 'path': 'testWhatL2Uns//dep_viol.r1.s1.0.wav'},
    {'name': 'testConjL1Uns//time_viol.r2.s2.0.wav', 'path': 'testConjL1Uns//time_viol.r2.s2.0.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu0.666.1554.wav', 'path': 'Online_conjL4_syn//b.ja.nu0.666.1554.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po1.1332.222.wav', 'path': 'Online_conjL4_syn//d.pe.po1.1332.222.wav'},
    {'name': 'Online_whatL2//a.go.du22.888.1776.wav', 'path': 'Online_whatL2//a.go.du22.888.1776.wav'},
    {'name': 'testWhenL3Uns//r2.s2.2.wav', 'path': 'testWhenL3Uns//r2.s2.2.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo17.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo17.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du20.none.none.wav', 'path': 'Online_whatL2//a.go.du20.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du4.none.none.wav', 'path': 'Online_whatL2//a.go.du4.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki14.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki14.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni3.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni3.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po28.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po28.none.none.wav'},
    {'name': 'Online_whenL3//a.mo27.888.wav', 'path': 'Online_whenL3//a.mo27.888.wav'},
    {'name': 'sound_icon.png', 'path': 'sound_icon.png'},
    {'name': 'testWhenL3Uns//dep_viol.r2.s1.0.wav', 'path': 'testWhenL3Uns//dep_viol.r2.s1.0.wav'},
    {'name': 'Online_whenL3//c.gu2.1998.wav', 'path': 'Online_whenL3//c.gu2.1998.wav'},
    {'name': 'Online_whenL3//a.mo9.1332.wav', 'path': 'Online_whenL3//a.mo9.1332.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po9.1554.1110.wav', 'path': 'Online_conjL4_syn//d.pe.po9.1554.1110.wav'},
    {'name': 'testWhatL2Uns//r1.s1.2.wav', 'path': 'testWhatL2Uns//r1.s1.2.wav'},
    {'name': 'testWhatL2Uns//r1.s2.1.wav', 'path': 'testWhatL2Uns//r1.s2.1.wav'},
    {'name': 'Online_whenL3//a.mo23.none.wav', 'path': 'Online_whenL3//a.mo23.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da0.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da0.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu13.444.0.wav', 'path': 'Online_whatL2//d.si.ñu13.444.0.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni0.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni0.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu3.0.666.wav', 'path': 'Online_conjL4_syn//b.ja.nu3.0.666.wav'},
    {'name': 'testConjL1Uns//r2.s1.0.wav', 'path': 'testConjL1Uns//r2.s1.0.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da31.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da31.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po31.444.1332.wav', 'path': 'Online_conjL4_syn//d.pe.po31.444.1332.wav'},
    {'name': 'testConjL1Uns//r1.s1.0.wav', 'path': 'testConjL1Uns//r1.s1.0.wav'},
    {'name': 'Online_whenL3//a.mo34.222.wav', 'path': 'Online_whenL3//a.mo34.222.wav'},
    {'name': 'Online_whatL2//c.cha.me23.none.none.wav', 'path': 'Online_whatL2//c.cha.me23.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo3.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo3.none.none.wav'},
    {'name': 'Online_whenL3//a.mo33.0.wav', 'path': 'Online_whenL3//a.mo33.0.wav'},
    {'name': 'Online_whatL2//b.fe.ra27.none.none.wav', 'path': 'Online_whatL2//b.fe.ra27.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu19.0.666.wav', 'path': 'Online_conjL4_syn//b.ja.nu19.0.666.wav'},
    {'name': 'testConjL4Syn//r1.s2.1.wav', 'path': 'testConjL4Syn//r1.s2.1.wav'},
    {'name': 'Online_conjL1_un//b.ta.be15.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be15.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni19.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni19.none.none.wav'},
    {'name': 'testConjL1Uns//r1.s2.2.wav', 'path': 'testConjL1Uns//r1.s2.2.wav'},
    {'name': 'testWhenL3Uns//dep_viol.r1.s1.0.wav', 'path': 'testWhenL3Uns//dep_viol.r1.s1.0.wav'},
    {'name': 'Online_whenL3//b.ñe18.none.wav', 'path': 'Online_whenL3//b.ñe18.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da17.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da17.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki26.888.1776.wav', 'path': 'Online_conjL1_un//a.pu.ki26.888.1776.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni12.1332.444.wav', 'path': 'Online_conjL1_un//d.ne.ni12.1332.444.wav'},
    {'name': 'Online_whenL3//d.ji7.1776.wav', 'path': 'Online_whenL3//d.ji7.1776.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da13.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da13.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me13.none.none.wav', 'path': 'Online_whatL2//c.cha.me13.none.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be12.0.888.wav', 'path': 'Online_conjL1_un//b.ta.be12.0.888.wav'},
    {'name': 'Online_conjL1_un//b.ta.be1.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be1.none.none.wav'},
    {'name': 'testConjL1Uns//r1.s2.0.wav', 'path': 'testConjL1Uns//r1.s2.0.wav'},
    {'name': 'Online_whenL3//d.ji29.none.wav', 'path': 'Online_whenL3//d.ji29.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu29.222.1110.wav', 'path': 'Online_whatL2//d.si.ñu29.222.1110.wav'},
    {'name': 'testWhatL2Uns//r2.s2.1.wav', 'path': 'testWhatL2Uns//r2.s2.1.wav'},
    {'name': 'Online_whenL3//a.mo30.none.wav', 'path': 'Online_whenL3//a.mo30.none.wav'},
    {'name': 'Online_whenL3//b.ñe25.222.wav', 'path': 'Online_whenL3//b.ñe25.222.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo24.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo24.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu21.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu21.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki1.888.1776.wav', 'path': 'Online_conjL1_un//a.pu.ki1.888.1776.wav'},
    {'name': 'Online_whenL3//a.mo35.none.wav', 'path': 'Online_whenL3//a.mo35.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki20.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki20.none.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo12.222.1110.wav', 'path': 'Online_conjL1_un//c.ro.fo12.222.1110.wav'},
    {'name': 'testConjL1Uns//dep_viol.r1.s1.0.wav', 'path': 'testConjL1Uns//dep_viol.r1.s1.0.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo19.666.1554.wav', 'path': 'Online_conjL4_syn//a.zi.lo19.666.1554.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni9.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni9.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me24.0.444.wav', 'path': 'Online_whatL2//c.cha.me24.0.444.wav'},
    {'name': 'Online_whatL2//d.si.ñu30.1332.222.wav', 'path': 'Online_whatL2//d.si.ñu30.1332.222.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da9.444.1110.wav', 'path': 'Online_conjL4_syn//c.bu.da9.444.1110.wav'},
    {'name': 'Online_whenL3//d.ji0.1332.wav', 'path': 'Online_whenL3//d.ji0.1332.wav'},
    {'name': 'Online_whenL3//d.ji23.none.wav', 'path': 'Online_whenL3//d.ji23.none.wav'},
    {'name': 'Online_whatL2//a.go.du17.888.1776.wav', 'path': 'Online_whatL2//a.go.du17.888.1776.wav'},
    {'name': 'testConjL1Uns//cat_viol.r2.s1.0.wav', 'path': 'testConjL1Uns//cat_viol.r2.s1.0.wav'},
    {'name': 'testConjL4Syn//r1.s2.2.wav', 'path': 'testConjL4Syn//r1.s2.2.wav'},
    {'name': 'Online_conjL1_un//b.ta.be6.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be6.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu27.666.1554.wav', 'path': 'Online_conjL4_syn//b.ja.nu27.666.1554.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po5.222.1110.wav', 'path': 'Online_conjL4_syn//d.pe.po5.222.1110.wav'},
    {'name': 'Online_whenL3//c.gu5.0.wav', 'path': 'Online_whenL3//c.gu5.0.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po30.444.0.wav', 'path': 'Online_conjL4_syn//d.pe.po30.444.0.wav'},
    {'name': 'testWhatL2Uns//r2.s1.2.wav', 'path': 'testWhatL2Uns//r2.s1.2.wav'},
    {'name': 'Online_whenL3//a.mo25.none.wav', 'path': 'Online_whenL3//a.mo25.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo2.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo2.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu18.222.444.wav', 'path': 'Online_whatL2//d.si.ñu18.222.444.wav'},
    {'name': 'Online_whenL3//b.ñe19.1776.wav', 'path': 'Online_whenL3//b.ñe19.1776.wav'},
    {'name': 'testConjL1Uns//r2.s2.1.wav', 'path': 'testConjL1Uns//r2.s2.1.wav'},
    {'name': 'testConjL1Uns//cat_viol.r1.s2.0.wav', 'path': 'testConjL1Uns//cat_viol.r1.s2.0.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo18.1776.222.wav', 'path': 'Online_conjL1_un//c.ro.fo18.1776.222.wav'},
    {'name': 'Online_whenL3//c.gu18.444.wav', 'path': 'Online_whenL3//c.gu18.444.wav'},
    {'name': 'Online_conjL1_un//b.ta.be3.0.888.wav', 'path': 'Online_conjL1_un//b.ta.be3.0.888.wav'},
    {'name': 'Online_whenL3//c.gu19.1998.wav', 'path': 'Online_whenL3//c.gu19.1998.wav'},
    {'name': 'Online_whenL3//b.ñe20.none.wav', 'path': 'Online_whenL3//b.ñe20.none.wav'},
    {'name': 'Online_whenL3//a.mo7.none.wav', 'path': 'Online_whenL3//a.mo7.none.wav'},
    {'name': 'Online_whenL3//b.ñe6.444.wav', 'path': 'Online_whenL3//b.ñe6.444.wav'},
    {'name': 'Online_whatL2//b.fe.ra1.0.1110.wav', 'path': 'Online_whatL2//b.fe.ra1.0.1110.wav'},
    {'name': 'Online_whenL3//d.ji27.none.wav', 'path': 'Online_whenL3//d.ji27.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da26.1110.222.wav', 'path': 'Online_conjL4_syn//c.bu.da26.1110.222.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki22.888.1776.wav', 'path': 'Online_conjL1_un//a.pu.ki22.888.1776.wav'},
    {'name': 'Online_whatL2//c.cha.me5.none.none.wav', 'path': 'Online_whatL2//c.cha.me5.none.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra11.888.1776.wav', 'path': 'Online_whatL2//b.fe.ra11.888.1776.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu22.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu22.none.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da7.0.444.wav', 'path': 'Online_conjL4_syn//c.bu.da7.0.444.wav'},
    {'name': 'Online_whatL2//a.go.du10.0.888.wav', 'path': 'Online_whatL2//a.go.du10.0.888.wav'},
    {'name': 'Online_whatL2//c.cha.me8.1998.1332.wav', 'path': 'Online_whatL2//c.cha.me8.1998.1332.wav'},
    {'name': 'Online_whenL3//b.ñe9.1110.wav', 'path': 'Online_whenL3//b.ñe9.1110.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da28.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da28.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki19.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki19.none.none.wav'},
    {'name': 'Online_whenL3//d.ji1.888.wav', 'path': 'Online_whenL3//d.ji1.888.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni18.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni18.none.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra19.0.888.wav', 'path': 'Online_whatL2//b.fe.ra19.0.888.wav'},
    {'name': 'Online_whenL3//c.gu1.none.wav', 'path': 'Online_whenL3//c.gu1.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni7.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni7.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me17.0.444.wav', 'path': 'Online_whatL2//c.cha.me17.0.444.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu23.0.666.wav', 'path': 'Online_conjL4_syn//b.ja.nu23.0.666.wav'},
    {'name': 'Online_whatL2//b.fe.ra3.1110.1998.wav', 'path': 'Online_whatL2//b.fe.ra3.1110.1998.wav'},
    {'name': 'testWhenL3Uns//r1.s2.1.wav', 'path': 'testWhenL3Uns//r1.s2.1.wav'},
    {'name': 'testWhatL2Uns//cat_viol.r1.s1.0.wav', 'path': 'testWhatL2Uns//cat_viol.r1.s1.0.wav'},
    {'name': 'testWhatL2Uns//time_viol.r1.s2.0.wav', 'path': 'testWhatL2Uns//time_viol.r1.s2.0.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki0.888.1776.wav', 'path': 'Online_conjL1_un//a.pu.ki0.888.1776.wav'},
    {'name': 'Online_conjL1_un//b.ta.be17.888.1776.wav', 'path': 'Online_conjL1_un//b.ta.be17.888.1776.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da1.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da1.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki9.0.888.wav', 'path': 'Online_conjL1_un//a.pu.ki9.0.888.wav'},
    {'name': 'Online_whatL2//a.go.du6.888.1776.wav', 'path': 'Online_whatL2//a.go.du6.888.1776.wav'},
    {'name': 'Online_whenL3//a.mo19.none.wav', 'path': 'Online_whenL3//a.mo19.none.wav'},
    {'name': 'Online_whenL3//d.ji15.444.wav', 'path': 'Online_whenL3//d.ji15.444.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki11.0.888.wav', 'path': 'Online_conjL1_un//a.pu.ki11.0.888.wav'},
    {'name': 'Online_conjL1_un//b.ta.be11.0.888.wav', 'path': 'Online_conjL1_un//b.ta.be11.0.888.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo17.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo17.none.none.wav'},
    {'name': 'testWhenL3Uns//cat_viol.r2.s2.0.wav', 'path': 'testWhenL3Uns//cat_viol.r2.s2.0.wav'},
    {'name': 'Online_whatL2//a.go.du31.none.none.wav', 'path': 'Online_whatL2//a.go.du31.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe35.1776.wav', 'path': 'Online_whenL3//b.ñe35.1776.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu20.0.666.wav', 'path': 'Online_conjL4_syn//b.ja.nu20.0.666.wav'},
    {'name': 'Online_whenL3//c.gu27.none.wav', 'path': 'Online_whenL3//c.gu27.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni28.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni28.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po20.1332.444.wav', 'path': 'Online_conjL4_syn//d.pe.po20.1332.444.wav'},
    {'name': 'Online_whatL2//d.si.ñu21.none.none.wav', 'path': 'Online_whatL2//d.si.ñu21.none.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra10.none.none.wav', 'path': 'Online_whatL2//b.fe.ra10.none.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo31.0.1110.wav', 'path': 'Online_conjL1_un//c.ro.fo31.0.1110.wav'},
    {'name': 'Online_whenL3//b.ñe14.1776.wav', 'path': 'Online_whenL3//b.ñe14.1776.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu4.0.666.wav', 'path': 'Online_conjL4_syn//b.ja.nu4.0.666.wav'},
    {'name': 'Online_whenL3//c.gu13.none.wav', 'path': 'Online_whenL3//c.gu13.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra18.none.none.wav', 'path': 'Online_whatL2//b.fe.ra18.none.none.wav'},
    {'name': 'testConjL4Syn//r1.s1.0.wav', 'path': 'testConjL4Syn//r1.s1.0.wav'},
    {'name': 'Online_whatL2//b.fe.ra7.none.none.wav', 'path': 'Online_whatL2//b.fe.ra7.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe3.none.wav', 'path': 'Online_whenL3//b.ñe3.none.wav'},
    {'name': 'Online_whenL3//a.mo12.none.wav', 'path': 'Online_whenL3//a.mo12.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo23.444.1332.wav', 'path': 'Online_conjL1_un//c.ro.fo23.444.1332.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo24.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo24.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu8.666.1554.wav', 'path': 'Online_conjL4_syn//b.ja.nu8.666.1554.wav'},
    {'name': 'testConjL4Syn//cat_viol.r1.s1.0.wav', 'path': 'testConjL4Syn//cat_viol.r1.s1.0.wav'},
    {'name': 'Online_whatL2//b.fe.ra17.none.none.wav', 'path': 'Online_whatL2//b.fe.ra17.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me18.none.none.wav', 'path': 'Online_whatL2//c.cha.me18.none.none.wav'},
    {'name': 'Online_whenL3//a.mo22.none.wav', 'path': 'Online_whenL3//a.mo22.none.wav'},
    {'name': 'testWhenL3Uns//time_viol.r1.s1.0.wav', 'path': 'testWhenL3Uns//time_viol.r1.s1.0.wav'},
    {'name': 'Online_whenL3//a.mo32.none.wav', 'path': 'Online_whenL3//a.mo32.none.wav'},
    {'name': 'Online_whenL3//c.gu4.none.wav', 'path': 'Online_whenL3//c.gu4.none.wav'},
    {'name': 'testWhenL3Uns//r2.s2.1.wav', 'path': 'testWhenL3Uns//r2.s2.1.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu9.666.1554.wav', 'path': 'Online_conjL4_syn//b.ja.nu9.666.1554.wav'},
    {'name': 'Online_whatL2//a.go.du25.0.888.wav', 'path': 'Online_whatL2//a.go.du25.0.888.wav'},
    {'name': 'Online_whenL3//a.mo14.none.wav', 'path': 'Online_whenL3//a.mo14.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo26.0.666.wav', 'path': 'Online_conjL4_syn//a.zi.lo26.0.666.wav'},
    {'name': 'Online_whenL3//a.mo5.222.wav', 'path': 'Online_whenL3//a.mo5.222.wav'},
    {'name': 'Online_whatL2//a.go.du15.0.888.wav', 'path': 'Online_whatL2//a.go.du15.0.888.wav'},
    {'name': 'Online_whenL3//b.ñe33.none.wav', 'path': 'Online_whenL3//b.ñe33.none.wav'},
    {'name': 'Online_whatL2//c.cha.me12.1332.222.wav', 'path': 'Online_whatL2//c.cha.me12.1332.222.wav'},
    {'name': 'Online_whatL2//b.fe.ra25.0.888.wav', 'path': 'Online_whatL2//b.fe.ra25.0.888.wav'},
    {'name': 'Online_whatL2//d.si.ñu17.0.444.wav', 'path': 'Online_whatL2//d.si.ñu17.0.444.wav'},
    {'name': 'Online_whenL3//c.gu3.1110.wav', 'path': 'Online_whenL3//c.gu3.1110.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki5.0.888.wav', 'path': 'Online_conjL1_un//a.pu.ki5.0.888.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo0.0.222.wav', 'path': 'Online_conjL1_un//c.ro.fo0.0.222.wav'},
    {'name': 'Online_whenL3//d.ji18.none.wav', 'path': 'Online_whenL3//d.ji18.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da3.0.444.wav', 'path': 'Online_conjL4_syn//c.bu.da3.0.444.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki18.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki18.none.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be5.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be5.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni21.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni21.none.none.wav'},
    {'name': 'Online_whenL3//a.mo18.888.wav', 'path': 'Online_whenL3//a.mo18.888.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da6.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da6.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu15.none.none.wav', 'path': 'Online_whatL2//d.si.ñu15.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po22.444.1110.wav', 'path': 'Online_conjL4_syn//d.pe.po22.444.1110.wav'},
    {'name': 'Online_whatL2//a.go.du26.none.none.wav', 'path': 'Online_whatL2//a.go.du26.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki24.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki24.none.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra2.none.none.wav', 'path': 'Online_whatL2//b.fe.ra2.none.none.wav'},
    {'name': 'Online_whenL3//a.mo29.none.wav', 'path': 'Online_whenL3//a.mo29.none.wav'},
    {'name': 'testConjL1Uns//time_viol.r2.s1.0.wav', 'path': 'testConjL1Uns//time_viol.r2.s1.0.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo6.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo6.none.none.wav'},
    {'name': 'Online_whenL3//c.gu16.1332.wav', 'path': 'Online_whenL3//c.gu16.1332.wav'},
    {'name': 'testWhatL2Uns//r1.s2.2.wav', 'path': 'testWhatL2Uns//r1.s2.2.wav'},
    {'name': 'Online_whatL2//d.si.ñu1.none.none.wav', 'path': 'Online_whatL2//d.si.ñu1.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me10.222.1110.wav', 'path': 'Online_whatL2//c.cha.me10.222.1110.wav'},
    {'name': 'testConjL1Uns//time_viol.r1.s1.0.wav', 'path': 'testConjL1Uns//time_viol.r1.s1.0.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni10.1110.222.wav', 'path': 'Online_conjL1_un//d.ne.ni10.1110.222.wav'},
    {'name': 'testConjL1Uns//dep_viol.r1.s2.0.wav', 'path': 'testConjL1Uns//dep_viol.r1.s2.0.wav'},
    {'name': 'Online_whenL3//c.gu15.none.wav', 'path': 'Online_whenL3//c.gu15.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da8.222.444.wav', 'path': 'Online_conjL4_syn//c.bu.da8.222.444.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po16.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po16.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me9.none.none.wav', 'path': 'Online_whatL2//c.cha.me9.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni11.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni11.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu14.none.none.wav', 'path': 'Online_whatL2//d.si.ñu14.none.none.wav'},
    {'name': 'testWhenL3Uns//r2.s1.1.wav', 'path': 'testWhenL3Uns//r2.s1.1.wav'},
    {'name': 'Online_conjL1_un//b.ta.be31.888.1776.wav', 'path': 'Online_conjL1_un//b.ta.be31.888.1776.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo10.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo10.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po24.1332.222.wav', 'path': 'Online_conjL4_syn//d.pe.po24.1332.222.wav'},
    {'name': 'Online_conjL1_un//b.ta.be10.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be10.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po7.1110.0.wav', 'path': 'Online_conjL4_syn//d.pe.po7.1110.0.wav'},
    {'name': 'Online_whenL3//d.ji28.888.wav', 'path': 'Online_whenL3//d.ji28.888.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo8.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo8.none.none.wav'},
    {'name': 'question_music1.png', 'path': 'question_music1.png'},
    {'name': 'Online_conjL4_syn//c.bu.da21.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da21.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me6.222.1110.wav', 'path': 'Online_whatL2//c.cha.me6.222.1110.wav'},
    {'name': 'Online_whenL3//b.ñe21.1998.wav', 'path': 'Online_whenL3//b.ñe21.1998.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po23.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po23.none.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be16.888.1776.wav', 'path': 'Online_conjL1_un//b.ta.be16.888.1776.wav'},
    {'name': 'Online_conjL1_un//b.ta.be29.0.888.wav', 'path': 'Online_conjL1_un//b.ta.be29.0.888.wav'},
    {'name': 'Online_whatL2//d.si.ñu5.none.none.wav', 'path': 'Online_whatL2//d.si.ñu5.none.none.wav'},
    {'name': 'testConjL1Uns//r2.s2.2.wav', 'path': 'testConjL1Uns//r2.s2.2.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po26.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po26.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu23.none.none.wav', 'path': 'Online_whatL2//d.si.ñu23.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki17.888.1776.wav', 'path': 'Online_conjL1_un//a.pu.ki17.888.1776.wav'},
    {'name': 'testWhenL3Uns//cat_viol.r2.s1.0.wav', 'path': 'testWhenL3Uns//cat_viol.r2.s1.0.wav'},
    {'name': 'Online_conjL1_un//b.ta.be4.888.1776.wav', 'path': 'Online_conjL1_un//b.ta.be4.888.1776.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo15.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo15.none.none.wav'},
    {'name': 'Online_whenL3//c.gu12.0.wav', 'path': 'Online_whenL3//c.gu12.0.wav'},
    {'name': 'testConjL1Uns//r2.s2.0.wav', 'path': 'testConjL1Uns//r2.s2.0.wav'},
    {'name': 'Online_whatL2//b.fe.ra6.none.none.wav', 'path': 'Online_whatL2//b.fe.ra6.none.none.wav'},
    {'name': 'Online_whenL3//a.mo11.none.wav', 'path': 'Online_whenL3//a.mo11.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be8.0.888.wav', 'path': 'Online_conjL1_un//b.ta.be8.0.888.wav'},
    {'name': 'testWhatL2Uns//r1.s1.0.wav', 'path': 'testWhatL2Uns//r1.s1.0.wav'},
    {'name': 'Online_whenL3//b.ñe34.444.wav', 'path': 'Online_whenL3//b.ñe34.444.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po18.1554.1110.wav', 'path': 'Online_conjL4_syn//d.pe.po18.1554.1110.wav'},
    {'name': 'Online_whatL2//c.cha.me29.none.none.wav', 'path': 'Online_whatL2//c.cha.me29.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni16.444.1110.wav', 'path': 'Online_conjL1_un//d.ne.ni16.444.1110.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni24.1110.222.wav', 'path': 'Online_conjL1_un//d.ne.ni24.1110.222.wav'},
    {'name': 'Online_whatL2//b.fe.ra13.none.none.wav', 'path': 'Online_whatL2//b.fe.ra13.none.none.wav'},
    {'name': 'Online_whenL3//a.mo17.none.wav', 'path': 'Online_whenL3//a.mo17.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo16.666.1554.wav', 'path': 'Online_conjL4_syn//a.zi.lo16.666.1554.wav'},
    {'name': 'Online_whenL3//a.mo8.1776.wav', 'path': 'Online_whenL3//a.mo8.1776.wav'},
    {'name': 'Online_conjL1_un//b.ta.be7.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be7.none.none.wav'},
    {'name': 'testConjL4Syn//r1.s2.0.wav', 'path': 'testConjL4Syn//r1.s2.0.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu15.0.666.wav', 'path': 'Online_conjL4_syn//b.ja.nu15.0.666.wav'},
    {'name': 'testWhenL3Uns//r1.s1.2.wav', 'path': 'testWhenL3Uns//r1.s1.2.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu2.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu2.none.none.wav'},
    {'name': 'testConjL4Syn//cat_viol.r2.s2.0.wav', 'path': 'testConjL4Syn//cat_viol.r2.s2.0.wav'},
    {'name': 'testWhatL2Uns//time_viol.r1.s1.0.wav', 'path': 'testWhatL2Uns//time_viol.r1.s1.0.wav'},
    {'name': 'testWhatL2Uns//cat_viol.r2.s2.0.wav', 'path': 'testWhatL2Uns//cat_viol.r2.s2.0.wav'},
    {'name': 'Online_whenL3//b.ñe23.1776.wav', 'path': 'Online_whenL3//b.ñe23.1776.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da23.444.1110.wav', 'path': 'Online_conjL4_syn//c.bu.da23.444.1110.wav'},
    {'name': 'Online_whatL2//c.cha.me15.none.none.wav', 'path': 'Online_whatL2//c.cha.me15.none.none.wav'},
    {'name': 'testWhenL3Uns//r2.s1.2.wav', 'path': 'testWhenL3Uns//r2.s1.2.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po10.1332.444.wav', 'path': 'Online_conjL4_syn//d.pe.po10.1332.444.wav'},
    {'name': 'Online_conjL1_un//b.ta.be24.888.1776.wav', 'path': 'Online_conjL1_un//b.ta.be24.888.1776.wav'},
    {'name': 'testWhenL3Uns//cat_viol.r1.s2.0.wav', 'path': 'testWhenL3Uns//cat_viol.r1.s2.0.wav'},
    {'name': 'Online_whenL3//b.ñe29.0.wav', 'path': 'Online_whenL3//b.ñe29.0.wav'},
    {'name': 'Online_whenL3//d.ji6.1998.wav', 'path': 'Online_whenL3//d.ji6.1998.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da27.222.1110.wav', 'path': 'Online_conjL4_syn//c.bu.da27.222.1110.wav'},
    {'name': 'Online_whatL2//c.cha.me25.none.none.wav', 'path': 'Online_whatL2//c.cha.me25.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe1.1998.wav', 'path': 'Online_whenL3//b.ñe1.1998.wav'},
    {'name': 'Online_whatL2//d.si.ñu6.none.none.wav', 'path': 'Online_whatL2//d.si.ñu6.none.none.wav'},
    {'name': 'Online_whenL3//a.mo21.none.wav', 'path': 'Online_whenL3//a.mo21.none.wav'},
    {'name': 'Online_whatL2//c.cha.me11.1332.0.wav', 'path': 'Online_whatL2//c.cha.me11.1332.0.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki27.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki27.none.none.wav'},
    {'name': 'questions.csv', 'path': 'questions.csv'},
    {'name': 'Online_conjL4_syn//b.ja.nu17.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu17.none.none.wav'},
    {'name': 'Online_whenL3//c.gu9.none.wav', 'path': 'Online_whenL3//c.gu9.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu16.222.1332.wav', 'path': 'Online_whatL2//d.si.ñu16.222.1332.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki21.888.1776.wav', 'path': 'Online_conjL1_un//a.pu.ki21.888.1776.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po4.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po4.none.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be27.888.1776.wav', 'path': 'Online_conjL1_un//b.ta.be27.888.1776.wav'},
    {'name': 'Online_conjL1_un//b.ta.be21.0.888.wav', 'path': 'Online_conjL1_un//b.ta.be21.0.888.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po2.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po2.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe11.none.wav', 'path': 'Online_whenL3//b.ñe11.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra22.888.1776.wav', 'path': 'Online_whatL2//b.fe.ra22.888.1776.wav'},
    {'name': 'Online_whatL2//b.fe.ra21.0.888.wav', 'path': 'Online_whatL2//b.fe.ra21.0.888.wav'},
    {'name': 'Online_whenL3//a.mo10.none.wav', 'path': 'Online_whenL3//a.mo10.none.wav'},
    {'name': 'testWhatL2Uns//time_viol.r2.s2.0.wav', 'path': 'testWhatL2Uns//time_viol.r2.s2.0.wav'},
    {'name': 'Online_whatL2//b.fe.ra9.none.none.wav', 'path': 'Online_whatL2//b.fe.ra9.none.none.wav'},
    {'name': 'Online_whenL3//c.gu11.1110.wav', 'path': 'Online_whenL3//c.gu11.1110.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki31.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki31.none.none.wav'},
    {'name': 'Online_whenL3//c.gu30.0.wav', 'path': 'Online_whenL3//c.gu30.0.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo20.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo20.none.none.wav'},
    {'name': 'Online_whenL3//d.ji4.0.wav', 'path': 'Online_whenL3//d.ji4.0.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni14.222.1332.wav', 'path': 'Online_conjL1_un//d.ne.ni14.222.1332.wav'},
    {'name': 'Online_whatL2//d.si.ñu2.none.none.wav', 'path': 'Online_whatL2//d.si.ñu2.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du16.888.1776.wav', 'path': 'Online_whatL2//a.go.du16.888.1776.wav'},
    {'name': 'testConjL4Syn//dep_viol.r1.s1.0.wav', 'path': 'testConjL4Syn//dep_viol.r1.s1.0.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da4.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da4.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni27.1110.0.wav', 'path': 'Online_conjL1_un//d.ne.ni27.1110.0.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da11.1332.222.wav', 'path': 'Online_conjL4_syn//c.bu.da11.1332.222.wav'},
    {'name': 'WhatL2_uns.csv', 'path': 'WhatL2_uns.csv'},
    {'name': 'dir_Online_conjL1_uns.csv', 'path': 'dir_Online_conjL1_uns.csv'},
    {'name': 'Online_conjL1_un//a.pu.ki10.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki10.none.none.wav'},
    {'name': 'Online_whenL3//a.mo15.1110.wav', 'path': 'Online_whenL3//a.mo15.1110.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da20.444.1332.wav', 'path': 'Online_conjL4_syn//c.bu.da20.444.1332.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki12.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki12.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu14.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu14.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du12.0.888.wav', 'path': 'Online_whatL2//a.go.du12.0.888.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo7.444.1110.wav', 'path': 'Online_conjL1_un//c.ro.fo7.444.1110.wav'},
    {'name': 'Online_whenL3//b.ñe5.1110.wav', 'path': 'Online_whenL3//b.ñe5.1110.wav'},
    {'name': 'Online_whatL2//b.fe.ra26.1110.1998.wav', 'path': 'Online_whatL2//b.fe.ra26.1110.1998.wav'},
    {'name': 'Online_whatL2//c.cha.me4.none.none.wav', 'path': 'Online_whatL2//c.cha.me4.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo27.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo27.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni4.1110.1332.wav', 'path': 'Online_conjL1_un//d.ne.ni4.1110.1332.wav'},
    {'name': 'Online_whatL2//c.cha.me26.444.1110.wav', 'path': 'Online_whatL2//c.cha.me26.444.1110.wav'},
    {'name': 'Online_whenL3//c.gu22.1998.wav', 'path': 'Online_whenL3//c.gu22.1998.wav'},
    {'name': 'testWhenL3Uns//time_viol.r2.s2.0.wav', 'path': 'testWhenL3Uns//time_viol.r2.s2.0.wav'},
    {'name': 'Online_whatL2//c.cha.me7.222.444.wav', 'path': 'Online_whatL2//c.cha.me7.222.444.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu7.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu7.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po11.1332.222.wav', 'path': 'Online_conjL4_syn//d.pe.po11.1332.222.wav'},
    {'name': 'testConjL4Syn//dep_viol.r2.s2.0.wav', 'path': 'testConjL4Syn//dep_viol.r2.s2.0.wav'},
    {'name': 'testWhatL2Uns//r2.s2.2.wav', 'path': 'testWhatL2Uns//r2.s2.2.wav'},
    {'name': 'Online_conjL1_un//b.ta.be14.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be14.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du30.888.1776.wav', 'path': 'Online_whatL2//a.go.du30.888.1776.wav'},
    {'name': 'Online_whatL2//b.fe.ra30.none.none.wav', 'path': 'Online_whatL2//b.fe.ra30.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo13.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo13.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki8.0.888.wav', 'path': 'Online_conjL1_un//a.pu.ki8.0.888.wav'},
    {'name': 'Online_whenL3//d.ji30.none.wav', 'path': 'Online_whenL3//d.ji30.none.wav'},
    {'name': 'Online_whenL3//b.ñe12.none.wav', 'path': 'Online_whenL3//b.ñe12.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da30.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da30.none.none.wav'},
    {'name': 'testWhatL2Uns//time_viol.r2.s1.0.wav', 'path': 'testWhatL2Uns//time_viol.r2.s1.0.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po14.1110.1332.wav', 'path': 'Online_conjL4_syn//d.pe.po14.1110.1332.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu18.666.1554.wav', 'path': 'Online_conjL4_syn//b.ja.nu18.666.1554.wav'},
    {'name': 'Online_whenL3//d.ji21.888.wav', 'path': 'Online_whenL3//d.ji21.888.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo26.1332.0.wav', 'path': 'Online_conjL1_un//c.ro.fo26.1332.0.wav'},
    {'name': 'Online_whenL3//a.mo3.none.wav', 'path': 'Online_whenL3//a.mo3.none.wav'},
    {'name': 'Test_Conj_UnsyncL1.csv', 'path': 'Test_Conj_UnsyncL1.csv'},
    {'name': 'Online_conjL4_syn//a.zi.lo21.666.1554.wav', 'path': 'Online_conjL4_syn//a.zi.lo21.666.1554.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po15.222.1110.wav', 'path': 'Online_conjL4_syn//d.pe.po15.222.1110.wav'},
    {'name': 'volume.wav', 'path': 'volume.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da12.1110.1332.wav', 'path': 'Online_conjL4_syn//c.bu.da12.1110.1332.wav'},
    {'name': 'Online_whatL2//d.si.ñu26.none.none.wav', 'path': 'Online_whatL2//d.si.ñu26.none.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra4.none.none.wav', 'path': 'Online_whatL2//b.fe.ra4.none.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be2.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be2.none.none.wav'},
    {'name': 'ConjL4_sync.wav', 'path': 'ConjL4_sync.wav'},
    {'name': 'Online_whenL3//a.mo16.1998.wav', 'path': 'Online_whenL3//a.mo16.1998.wav'},
    {'name': 'Online_conjL1_un//b.ta.be9.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be9.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du0.none.none.wav', 'path': 'Online_whatL2//a.go.du0.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po19.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po19.none.none.wav'},
    {'name': 'Test_Conj_SyncL4.csv', 'path': 'Test_Conj_SyncL4.csv'},
    {'name': 'Online_conjL4_syn//a.zi.lo4.0.666.wav', 'path': 'Online_conjL4_syn//a.zi.lo4.0.666.wav'},
    {'name': 'question2.png', 'path': 'question2.png'},
    {'name': 'Online_whatL2//a.go.du2.1110.1998.wav', 'path': 'Online_whatL2//a.go.du2.1110.1998.wav'},
    {'name': 'dir_Online_conjL4_syn.csv', 'path': 'dir_Online_conjL4_syn.csv'},
    {'name': 'Online_whatL2//b.fe.ra31.0.888.wav', 'path': 'Online_whatL2//b.fe.ra31.0.888.wav'},
    {'name': 'Online_whatL2//c.cha.me27.none.none.wav', 'path': 'Online_whatL2//c.cha.me27.none.none.wav'},
    {'name': 'Online_whenL3//d.ji3.none.wav', 'path': 'Online_whenL3//d.ji3.none.wav'},
    {'name': 'testWhatL2Uns//r2.s1.0.wav', 'path': 'testWhatL2Uns//r2.s1.0.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu31.666.1554.wav', 'path': 'Online_conjL4_syn//b.ja.nu31.666.1554.wav'},
    {'name': 'testConjL4Syn//r2.s1.1.wav', 'path': 'testConjL4Syn//r2.s1.1.wav'},
    {'name': 'Online_whatL2//c.cha.me20.444.1332.wav', 'path': 'Online_whatL2//c.cha.me20.444.1332.wav'},
    {'name': 'testConjL1Uns//time_viol.r1.s2.0.wav', 'path': 'testConjL1Uns//time_viol.r1.s2.0.wav'},
    {'name': 'Online_whenL3//d.ji13.222.wav', 'path': 'Online_whenL3//d.ji13.222.wav'},
    {'name': 'Online_whenL3//c.gu10.none.wav', 'path': 'Online_whenL3//c.gu10.none.wav'},
    {'name': 'Online_whatL2//c.cha.me31.1110.222.wav', 'path': 'Online_whatL2//c.cha.me31.1110.222.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu13.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu13.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du18.0.1110.wav', 'path': 'Online_whatL2//a.go.du18.0.1110.wav'},
    {'name': 'testConjL1Uns//r1.s1.1.wav', 'path': 'testConjL1Uns//r1.s1.1.wav'},
    {'name': 'Online_whatL2//d.si.ñu12.222.444.wav', 'path': 'Online_whatL2//d.si.ñu12.222.444.wav'},
    {'name': 'testWhatL2Uns//dep_viol.r2.s1.0.wav', 'path': 'testWhatL2Uns//dep_viol.r2.s1.0.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da16.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da16.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu3.0.444.wav', 'path': 'Online_whatL2//d.si.ñu3.0.444.wav'},
    {'name': 'Online_whenL3//b.ñe4.1998.wav', 'path': 'Online_whenL3//b.ñe4.1998.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki4.888.1776.wav', 'path': 'Online_conjL1_un//a.pu.ki4.888.1776.wav'},
    {'name': 'Online_whenL3//c.gu25.222.wav', 'path': 'Online_whenL3//c.gu25.222.wav'},
    {'name': 'testWhenL3Uns//r1.s1.1.wav', 'path': 'testWhenL3Uns//r1.s1.1.wav'},
    {'name': 'Online_whenL3//c.gu8.1332.wav', 'path': 'Online_whenL3//c.gu8.1332.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki16.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki16.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po17.222.444.wav', 'path': 'Online_conjL4_syn//d.pe.po17.222.444.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo9.666.1554.wav', 'path': 'Online_conjL4_syn//a.zi.lo9.666.1554.wav'},
    {'name': 'Online_whenL3//a.mo24.1998.wav', 'path': 'Online_whenL3//a.mo24.1998.wav'},
    {'name': 'testWhenL3Uns//dep_viol.r2.s2.0.wav', 'path': 'testWhenL3Uns//dep_viol.r2.s2.0.wav'},
    {'name': 'Online_whatL2//c.cha.me22.0.1110.wav', 'path': 'Online_whatL2//c.cha.me22.0.1110.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki28.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki28.none.none.wav'},
    {'name': 'Online_whenL3//d.ji5.none.wav', 'path': 'Online_whenL3//d.ji5.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki25.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki25.none.none.wav'},
    {'name': 'testWhatL2Uns//r2.s2.0.wav', 'path': 'testWhatL2Uns//r2.s2.0.wav'},
    {'name': 'Online_whatL2//d.si.ñu11.none.none.wav', 'path': 'Online_whatL2//d.si.ñu11.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni6.0.1110.wav', 'path': 'Online_conjL1_un//d.ne.ni6.0.1110.wav'},
    {'name': 'Online_whenL3//d.ji17.none.wav', 'path': 'Online_whenL3//d.ji17.none.wav'},
    {'name': 'Online_whatL2//a.go.du9.none.none.wav', 'path': 'Online_whatL2//a.go.du9.none.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da10.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da10.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me19.none.none.wav', 'path': 'Online_whatL2//c.cha.me19.none.none.wav'},
    {'name': 'testWhatL2Uns//r2.s1.1.wav', 'path': 'testWhatL2Uns//r2.s1.1.wav'},
    {'name': 'Online_whenL3//a.mo0.222.wav', 'path': 'Online_whenL3//a.mo0.222.wav'},
    {'name': 'Online_whenL3//c.gu17.none.wav', 'path': 'Online_whenL3//c.gu17.none.wav'},
    {'name': 'What_UnsyncL2_testdirs.csv', 'path': 'What_UnsyncL2_testdirs.csv'},
    {'name': 'Online_conjL4_syn//b.ja.nu11.666.1554.wav', 'path': 'Online_conjL4_syn//b.ja.nu11.666.1554.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki29.0.888.wav', 'path': 'Online_conjL1_un//a.pu.ki29.0.888.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo15.0.666.wav', 'path': 'Online_conjL4_syn//a.zi.lo15.0.666.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po21.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po21.none.none.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki23.0.888.wav', 'path': 'Online_conjL1_un//a.pu.ki23.0.888.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo22.444.1332.wav', 'path': 'Online_conjL1_un//c.ro.fo22.444.1332.wav'},
    {'name': 'Online_whatL2//d.si.ñu9.444.1332.wav', 'path': 'Online_whatL2//d.si.ñu9.444.1332.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni20.1110.1332.wav', 'path': 'Online_conjL1_un//d.ne.ni20.1110.1332.wav'},
    {'name': 'testConjL1Uns//cat_viol.r1.s1.0.wav', 'path': 'testConjL1Uns//cat_viol.r1.s1.0.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni26.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni26.none.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo16.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo16.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo22.666.1554.wav', 'path': 'Online_conjL4_syn//a.zi.lo22.666.1554.wav'},
    {'name': 'Online_whatL2//d.si.ñu24.none.none.wav', 'path': 'Online_whatL2//d.si.ñu24.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du14.none.none.wav', 'path': 'Online_whatL2//a.go.du14.none.none.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po0.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po0.none.none.wav'},
    {'name': 'testConjL4Syn//time_viol.r2.s1.0.wav', 'path': 'testConjL4Syn//time_viol.r2.s1.0.wav'},
    {'name': 'condsA.csv', 'path': 'condsA.csv'},
    {'name': 'Online_whenL3//d.ji2.none.wav', 'path': 'Online_whenL3//d.ji2.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni30.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni30.none.none.wav'},
    {'name': 'When_UnsyncL3_testdirs.csv', 'path': 'When_UnsyncL3_testdirs.csv'},
    {'name': 'dir_Online_whatL2_uns.csv', 'path': 'dir_Online_whatL2_uns.csv'},
    {'name': 'Online_whatL2//d.si.ñu10.1554.222.wav', 'path': 'Online_whatL2//d.si.ñu10.1554.222.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po8.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po8.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo20.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo20.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe7.1998.wav', 'path': 'Online_whenL3//b.ñe7.1998.wav'},
    {'name': 'testConjL4Syn//dep_viol.r2.s1.0.wav', 'path': 'testConjL4Syn//dep_viol.r2.s1.0.wav'},
    {'name': 'Online_whatL2//c.cha.me1.1110.0.wav', 'path': 'Online_whatL2//c.cha.me1.1110.0.wav'},
    {'name': 'testConjL4Syn//cat_viol.r2.s1.0.wav', 'path': 'testConjL4Syn//cat_viol.r2.s1.0.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki13.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki13.none.none.wav'},
    {'name': 'testWhatL2Uns//r1.s2.0.wav', 'path': 'testWhatL2Uns//r1.s2.0.wav'},
    {'name': 'testConjL1Uns//r1.s2.1.wav', 'path': 'testConjL1Uns//r1.s2.1.wav'},
    {'name': 'Online_whatL2//a.go.du28.0.888.wav', 'path': 'Online_whatL2//a.go.du28.0.888.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo10.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo10.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu25.none.none.wav', 'path': 'Online_whatL2//d.si.ñu25.none.none.wav'},
    {'name': 'Online_whenL3//d.ji25.none.wav', 'path': 'Online_whenL3//d.ji25.none.wav'},
    {'name': 'Online_whenL3//c.gu6.none.wav', 'path': 'Online_whenL3//c.gu6.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu28.444.1554.wav', 'path': 'Online_whatL2//d.si.ñu28.444.1554.wav'},
    {'name': 'Questionnaire_music1.csv', 'path': 'Questionnaire_music1.csv'},
    {'name': 'Online_conjL1_un//b.ta.be30.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be30.none.none.wav'},
    {'name': 'dir_Online_whenL3_uns.csv', 'path': 'dir_Online_whenL3_uns.csv'},
    {'name': 'ConjL1_unsync.wav', 'path': 'ConjL1_unsync.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo27.1332.222.wav', 'path': 'Online_conjL1_un//c.ro.fo27.1332.222.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo14.666.1554.wav', 'path': 'Online_conjL4_syn//a.zi.lo14.666.1554.wav'},
    {'name': 'Online_whenL3//c.gu14.444.wav', 'path': 'Online_whenL3//c.gu14.444.wav'},
    {'name': 'Online_whenL3//d.ji24.1998.wav', 'path': 'Online_whenL3//d.ji24.1998.wav'},
    {'name': 'Online_conjL1_un//b.ta.be20.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be20.none.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra15.888.1998.wav', 'path': 'Online_whatL2//b.fe.ra15.888.1998.wav'},
    {'name': 'testWhatL2Uns//cat_viol.r1.s2.0.wav', 'path': 'testWhatL2Uns//cat_viol.r1.s2.0.wav'},
    {'name': 'testWhatL2Uns//cat_viol.r2.s1.0.wav', 'path': 'testWhatL2Uns//cat_viol.r2.s1.0.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo6.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo6.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me21.none.none.wav', 'path': 'Online_whatL2//c.cha.me21.none.none.wav'},
    {'name': 'testWhatL2Uns//dep_viol.r1.s2.0.wav', 'path': 'testWhatL2Uns//dep_viol.r1.s2.0.wav'},
    {'name': 'Online_whenL3//d.ji20.none.wav', 'path': 'Online_whenL3//d.ji20.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni5.1332.444.wav', 'path': 'Online_conjL1_un//d.ne.ni5.1332.444.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po3.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po3.none.none.wav'},
    {'name': 'testWhenL3Uns//r2.s1.0.wav', 'path': 'testWhenL3Uns//r2.s1.0.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni31.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni31.none.none.wav'},
    {'name': 'Online_whenL3//d.ji9.1776.wav', 'path': 'Online_whenL3//d.ji9.1776.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo29.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo29.none.none.wav'},
    {'name': 'testConjL4Syn//r2.s2.0.wav', 'path': 'testConjL4Syn//r2.s2.0.wav'},
    {'name': 'Online_whenL3//d.ji19.1776.wav', 'path': 'Online_whenL3//d.ji19.1776.wav'},
    {'name': 'Online_whatL2//d.si.ñu31.none.none.wav', 'path': 'Online_whatL2//d.si.ñu31.none.none.wav'},
    {'name': 'testConjL1Uns//r2.s1.2.wav', 'path': 'testConjL1Uns//r2.s1.2.wav'},
    {'name': 'Online_whatL2//b.fe.ra29.1110.1998.wav', 'path': 'Online_whatL2//b.fe.ra29.1110.1998.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni17.0.1110.wav', 'path': 'Online_conjL1_un//d.ne.ni17.0.1110.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da19.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da19.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo28.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo28.none.none.wav'},
    {'name': 'Online_whatL2//d.si.ñu22.444.1332.wav', 'path': 'Online_whatL2//d.si.ñu22.444.1332.wav'},
    {'name': 'Online_whenL3//b.ñe32.none.wav', 'path': 'Online_whenL3//b.ñe32.none.wav'},
    {'name': 'testWhenL3Uns//time_viol.r2.s1.0.wav', 'path': 'testWhenL3Uns//time_viol.r2.s1.0.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo30.0.666.wav', 'path': 'Online_conjL4_syn//a.zi.lo30.0.666.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo23.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo23.none.none.wav'},
    {'name': 'testConjL1Uns//dep_viol.r2.s1.0.wav', 'path': 'testConjL1Uns//dep_viol.r2.s1.0.wav'},
    {'name': 'Online_whenL3//a.mo28.0.wav', 'path': 'Online_whenL3//a.mo28.0.wav'},
    {'name': 'Online_whenL3//b.ñe2.888.wav', 'path': 'Online_whenL3//b.ñe2.888.wav'},
    {'name': 'Online_whatL2//d.si.ñu8.none.none.wav', 'path': 'Online_whatL2//d.si.ñu8.none.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be23.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be23.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe31.none.wav', 'path': 'Online_whenL3//b.ñe31.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be19.888.1776.wav', 'path': 'Online_conjL1_un//b.ta.be19.888.1776.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo3.222.1110.wav', 'path': 'Online_conjL1_un//c.ro.fo3.222.1110.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo19.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo19.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe8.none.wav', 'path': 'Online_whenL3//b.ñe8.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da29.none.none.wav', 'path': 'Online_conjL4_syn//c.bu.da29.none.none.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo14.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo14.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe26.none.wav', 'path': 'Online_whenL3//b.ñe26.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni25.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni25.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni15.222.1110.wav', 'path': 'Online_conjL1_un//d.ne.ni15.222.1110.wav'},
    {'name': 'Online_whatL2//a.go.du19.1110.1998.wav', 'path': 'Online_whatL2//a.go.du19.1110.1998.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo2.0.666.wav', 'path': 'Online_conjL4_syn//a.zi.lo2.0.666.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu29.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu29.none.none.wav'},
    {'name': 'Online_whenL3//c.gu26.none.wav', 'path': 'Online_whenL3//c.gu26.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni13.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni13.none.none.wav'},
    {'name': 'testWhenL3Uns//cat_viol.r1.s1.0.wav', 'path': 'testWhenL3Uns//cat_viol.r1.s1.0.wav'},
    {'name': 'ConjL4_syn.csv', 'path': 'ConjL4_syn.csv'},
    {'name': 'Online_conjL1_un//a.pu.ki3.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki3.none.none.wav'},
    {'name': 'WhatL2_unsync.wav', 'path': 'WhatL2_unsync.wav'},
    {'name': 'testConjL4Syn//time_viol.r1.s1.0.wav', 'path': 'testConjL4Syn//time_viol.r1.s1.0.wav'},
    {'name': 'Online_conjL1_un//b.ta.be22.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be22.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni8.1776.222.wav', 'path': 'Online_conjL1_un//d.ne.ni8.1776.222.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu26.666.1554.wav', 'path': 'Online_conjL4_syn//b.ja.nu26.666.1554.wav'},
    {'name': 'testConjL4Syn//r2.s2.2.wav', 'path': 'testConjL4Syn//r2.s2.2.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo31.none.none.wav', 'path': 'Online_conjL4_syn//a.zi.lo31.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du13.none.none.wav', 'path': 'Online_whatL2//a.go.du13.none.none.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo5.0.666.wav', 'path': 'Online_conjL4_syn//a.zi.lo5.0.666.wav'},
    {'name': 'Online_conjL1_un//c.ro.fo1.none.none.wav', 'path': 'Online_conjL1_un//c.ro.fo1.none.none.wav'},
    {'name': 'testWhenL3Uns//r1.s1.0.wav', 'path': 'testWhenL3Uns//r1.s1.0.wav'},
    {'name': 'Online_whatL2//c.cha.me3.1332.444.wav', 'path': 'Online_whatL2//c.cha.me3.1332.444.wav'},
    {'name': 'Online_whatL2//a.go.du23.none.none.wav', 'path': 'Online_whatL2//a.go.du23.none.none.wav'},
    {'name': 'Online_whatL2//c.cha.me0.1998.222.wav', 'path': 'Online_whatL2//c.cha.me0.1998.222.wav'},
    {'name': 'Online_whenL3//a.mo26.none.wav', 'path': 'Online_whenL3//a.mo26.none.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da25.1110.222.wav', 'path': 'Online_conjL4_syn//c.bu.da25.1110.222.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu1.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu1.none.none.wav'},
    {'name': 'Online_conjL4_syn//b.ja.nu16.none.none.wav', 'path': 'Online_conjL4_syn//b.ja.nu16.none.none.wav'},
    {'name': 'testConjL4Syn//dep_viol.r1.s2.0.wav', 'path': 'testConjL4Syn//dep_viol.r1.s2.0.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po12.none.none.wav', 'path': 'Online_conjL4_syn//d.pe.po12.none.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra28.0.888.wav', 'path': 'Online_whatL2//b.fe.ra28.0.888.wav'},
    {'name': 'testConjL1Uns//cat_viol.r2.s2.0.wav', 'path': 'testConjL1Uns//cat_viol.r2.s2.0.wav'},
    {'name': 'Online_whatL2//c.cha.me16.none.none.wav', 'path': 'Online_whatL2//c.cha.me16.none.none.wav'},
    {'name': 'Online_whatL2//a.go.du29.none.none.wav', 'path': 'Online_whatL2//a.go.du29.none.none.wav'},
    {'name': 'Online_whenL3//d.ji12.1332.wav', 'path': 'Online_whenL3//d.ji12.1332.wav'},
    {'name': 'testWhenL3Uns//dep_viol.r1.s2.0.wav', 'path': 'testWhenL3Uns//dep_viol.r1.s2.0.wav'},
    {'name': 'Online_conjL4_syn//d.pe.po6.1110.222.wav', 'path': 'Online_conjL4_syn//d.pe.po6.1110.222.wav'},
    {'name': 'Online_conjL4_syn//c.bu.da2.0.222.wav', 'path': 'Online_conjL4_syn//c.bu.da2.0.222.wav'},
    {'name': 'Online_whatL2//a.go.du24.none.none.wav', 'path': 'Online_whatL2//a.go.du24.none.none.wav'},
    {'name': 'Online_whenL3//b.ñe28.none.wav', 'path': 'Online_whenL3//b.ñe28.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni22.none.none.wav', 'path': 'Online_conjL1_un//d.ne.ni22.none.none.wav'},
    {'name': 'Online_conjL1_un//b.ta.be13.none.none.wav', 'path': 'Online_conjL1_un//b.ta.be13.none.none.wav'},
    {'name': 'Online_conjL1_un//d.ne.ni1.222.444.wav', 'path': 'Online_conjL1_un//d.ne.ni1.222.444.wav'},
    {'name': 'testConjL4Syn//time_viol.r2.s2.0.wav', 'path': 'testConjL4Syn//time_viol.r2.s2.0.wav'},
    {'name': 'Online_conjL1_un//b.ta.be26.888.1776.wav', 'path': 'Online_conjL1_un//b.ta.be26.888.1776.wav'},
    {'name': 'Online_whatL2//c.cha.me30.none.none.wav', 'path': 'Online_whatL2//c.cha.me30.none.none.wav'},
    {'name': 'testWhenL3Uns//time_viol.r1.s2.0.wav', 'path': 'testWhenL3Uns//time_viol.r1.s2.0.wav'},
    {'name': 'testConjL4Syn//r2.s2.1.wav', 'path': 'testConjL4Syn//r2.s2.1.wav'},
    {'name': 'Online_conjL1_un//a.pu.ki2.none.none.wav', 'path': 'Online_conjL1_un//a.pu.ki2.none.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra8.1110.1998.wav', 'path': 'Online_whatL2//b.fe.ra8.1110.1998.wav'},
    {'name': 'Online_whenL3//d.ji31.none.wav', 'path': 'Online_whenL3//d.ji31.none.wav'},
    {'name': 'Online_whatL2//b.fe.ra23.none.none.wav', 'path': 'Online_whatL2//b.fe.ra23.none.none.wav'},
    {'name': 'testConjL1Uns//r1.s1.2.wav', 'path': 'testConjL1Uns//r1.s1.2.wav'},
    {'name': 'testConjL1Uns//r2.s1.1.wav', 'path': 'testConjL1Uns//r2.s1.1.wav'},
    {'name': 'Online_conjL4_syn//a.zi.lo25.0.666.wav', 'path': 'Online_conjL4_syn//a.zi.lo25.0.666.wav'},
    {'name': 'Online_whatL2//b.fe.ra16.0.1110.wav', 'path': 'Online_whatL2//b.fe.ra16.0.1110.wav'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var ConsentClock;
var text_86;
var informed_consent_accepted;
var informed_consent_refused;
var consent1;
var thisExp;
var win;
var event;
var Consent_2Clock;
var text_85;
var treatment_data_accepted;
var treatment_data_refused;
var consent2;
var Initial_questionnaireClock;
var text_84;
var key_resp_20;
var ageClock;
var text_76;
var age_answer;
var text_77;
var mouse_8;
var residenceClock;
var text_75;
var residence_answer;
var text_78;
var mouse_2;
var native_language_2Clock;
var text_89;
var native_lang_answer;
var text_90;
var mouse_9;
var sexClock;
var text_71;
var text_72;
var sex_answer;
var level_of_educationClock;
var text_53;
var text_70;
var education_answer;
var handednessClock;
var text_54;
var text_55;
var hand_answer;
var language_startClock;
var text_56;
var key_resp_15;
var language_nClock;
var text_52;
var N_language_answer;
var text_80;
var mouse_4;
var language_type_ageClock;
var text_9;
var text_50;
var langtype_answer_1;
var text_51;
var langage_answer_1;
var text_81;
var langtype_answer_2;
var langage_answer_2;
var langtype_answer_3;
var langage_answer_3;
var langtype_answer_4;
var langage_answer_4;
var langtype_answer_5;
var langage_answer_5;
var langtype_answer_6;
var langage_answer_6;
var mouse_5;
var language_useClock;
var text_46;
var N_lang_use_answer;
var text_82;
var mouse_6;
var ability_learn_languageClock;
var text_57;
var text_58;
var ability_learnL2_answer;
var tendence_mixlang_2Clock;
var text_59;
var text_60;
var tendence_mixlang_answer;
var trastorno_lenguajeClock;
var text_61;
var text_62;
var lan_deficit_answer;
var trastorno_auditivoClock;
var text_63;
var text_64;
var aud_deficit_answer;
var music_startClock;
var text_65;
var key_resp_8;
var practica_musicaClock;
var text_66;
var text_67;
var music_expertise_answer;
var instrument_ageClock;
var text_20;
var text_35;
var instr_type_answer_1;
var text_41;
var instr_age_answer_1;
var text_83;
var instr_type_answer_2;
var instr_age_answer_2;
var instr_type_answer_3;
var instr_age_answer_3;
var instr_type_answer_4;
var instr_age_answer_4;
var instr_type_answer_5;
var instr_age_answer_5;
var mouse_7;
var instrument_useClock;
var text_87;
var text_88;
var instrument_use_answer;
var partituraClock;
var text_68;
var text_69;
var partiture_answer;
var intro_questionaire1Clock;
var text_49;
var key_resp_21;
var firs_questionaire_introClock;
var text_47;
var text_48;
var BMRQ_answer;
var image_6;
var welcome1Clock;
var text_23;
var key_resp_6;
var welcomwClock;
var text_21;
var key_resp1;
var volumeClock;
var text_26;
var key_resp_10;
var volume_settingClock;
var volume_set;
var key_ressp2;
var text_27;
var instructions_2Clock;
var text_24;
var key_resp_9;
var Instructions_0Clock;
var text_37;
var key_resp_3;
var Instructions_task_1Clock;
var text_22;
var key_resp1_2;
var Intructions_task2Clock;
var text_25;
var key_resp1_3;
var ready_Clock;
var text_28;
var key_resp_11;
var ready_2Clock;
var text_29;
var key_resp_12;
var ready_loopClock;
var text_36;
var key_resp_18;
var offline_listeningClock;
var learning;
var text_19;
var Task_1Clock;
var text_31;
var key_resp1_4;
var instructionsClock;
var text_2;
var sequencesClock;
var seqs;
var text_13;
var syllable_catch;
var test_instructionsClock;
var text_12;
var key_resp4;
var test_instructions2Clock;
var text_14;
var key_resp_4;
var audioClock;
var test_sounds;
var text_17;
var question1Clock;
var text_18;
var Partz_no_partm;
var question_2Clock;
var text_32;
var image_2;
var text_33;
var security_1_7;
var Next_langaugeClock;
var text_30;
var key_resp_13;
var preguntas_rhytmosClock;
var text_42;
var key_resp_19;
var questionClock;
var text_43;
var sound_5;
var sound_6;
var sound_7;
var image_4;
var textbox_2;
var sound_3;
var textbox_4;
var textbox_5;
var textbox_6;
var question_answerClock;
var text_44;
var complex_1_2_3_4;
var text_45;
var gracias_2Clock;
var text_40;
var key_resp6;
var comentarioClock;
var END_textbox;
var text_38;
var text_39;
var mouse;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  text_86 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_86',
    text: '¡Hola! Gracias por participar en el estudio: Predicciones temporales en el sistema motor y su relación con el aprendizaje del lenguaje (TEMPLA).\n\nContinuando por este estudio, declaras que:\n\n• Has leído la hoja de información que te se ha entregado.\n• Has podido hacer preguntas sobre el estudio.\n• Has recibido suficiente información sobre el estudio.\n• Comprendes que tu participación es voluntaria.\n• Comprendes que tus datos podrán ser compartidos y reutilizados por otras/os investigadoras/es, sin prejuicio del compromiso de confidencialidad.\n• Comprendes que puedes retirarte del estudio cuando quieras y sin tener que dar explicaciones.\n• Prestas libremente tu conformidad para participar en el estudio.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  informed_consent_accepted = new visual.TextStim({
    win: psychoJS.window,
    name: 'informed_consent_accepted',
    text: "Pulsando aquí declaras: 'Estoy de acuerdo con estas declaraciones y quiero seguir con el experimento'. \n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 0.0039, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  informed_consent_refused = new visual.TextStim({
    win: psychoJS.window,
    name: 'informed_consent_refused',
    text: "Pulsando aquí declaras: 'No estoy de acuerdo con estas declaraciones y quiero salir del experimento'. \n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  consent1 = new core.Mouse({
    win: psychoJS.window,
  });
  consent1.mouseClock = new util.Clock();
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  
  // Initialize components for Routine "Consent_2"
  Consent_2Clock = new util.Clock();
  text_85 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_85',
    text: 'La participación en el estudio es libre y voluntaria. En cualquier momento la persona podrá retirarse del estudio y siempre agradeceremos su participación. Los datos de este estudio podrán ser compartidos de manera libre y abierta, por lo que puede que se reutilicen en otros futuros proyectos de investigación. Los datos de las/os participantes serán anónimos en todo caso, siguiendo las recomendaciones generales de la Agencia Española de Protección de Datos (https://www.aepd.es/sites/default/files/2019-12/guia-orientaciones-procedimientos- anonimizacion.pdf). En aquellas situaciones en las que sea necesario retener la identidad de la persona, los archivos asociando su nombre con el código/clave de sus datos se mantendrán en ordenadores protegidos por contraseña de seguridad y/o en archivadores bajo llave custodiada por el/la investigador/ra principal, segregando totalmente la información. Los datos serán utilizados para su análisis y posterior estudio por el/la investigador/a principal y las/os miembros del grupo investigador.\n\nPrevia lectura de la información sobre el tratamiento de datos: \n\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.05], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  treatment_data_accepted = new visual.TextStim({
    win: psychoJS.window,
    name: 'treatment_data_accepted',
    text: 'Pulsando aquí declaras: "Doy mi consentimiento para el tratamiento de mis datos personales"',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 0.0039, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  treatment_data_refused = new visual.TextStim({
    win: psychoJS.window,
    name: 'treatment_data_refused',
    text: 'Pulsando aquí declaras: "No doy mi consentimiento para el tratamiento de mis datos personales, quiero salir del estudio’.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  consent2 = new core.Mouse({
    win: psychoJS.window,
  });
  consent2.mouseClock = new util.Clock();
  // Initialize components for Routine "Initial_questionnaire"
  Initial_questionnaireClock = new util.Clock();
  text_84 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_84',
    text: 'Antes de comenzar con el experimento, te pediremos que respondas algunas preguntas. Después de pedirte algunas informaciones demográficas, te solicitaremos que respondas a una serie de preguntas que nos ayudarán a obtener información sobre tus experiencias en los ámbitos lingüístico y musical.\n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "age"
  ageClock = new util.Clock();
  text_76 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_76',
    text: '¿Cuál es tu edad?  \n\n*Introduce en la casilla el número correspondiente a tu edad *',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: 0.0 
  });
  
  age_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'age_answer',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [0.35, 0.35],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_77 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_77',
    text: 'Pulsa aquí para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_8 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_8.mouseClock = new util.Clock();
  // Initialize components for Routine "residence"
  residenceClock = new util.Clock();
  text_75 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_75',
    text: '¿Cuál es tu país de residencia?  \n\n*Introduce en la casilla tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: 0.0 
  });
  
  residence_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'residence_answer',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [0.35, 0.35],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_78 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_78',
    text: 'Pulsa aquí para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "native_language_2"
  native_language_2Clock = new util.Clock();
  text_89 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_89',
    text: '¿Cuál és/son tu/s lengua/s materna/s? \n\n*Introduce en la casilla tu/s lengua/s materna/s *',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: 0.0 
  });
  
  native_lang_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'native_lang_answer',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [0.35, 0.35],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_90 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_90',
    text: 'Pulsa aquí para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_9 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_9.mouseClock = new util.Clock();
  // Initialize components for Routine "sex"
  sexClock = new util.Clock();
  text_71 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_71',
    text: '¿Cuál es tu sexo? \n\n*marca  la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_72 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_72',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  sex_answer = new visual.Slider({
    win: psychoJS.window, name: 'sex_answer',
    startValue: undefined,
    size: [0.03, 0.2], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["Intersexual", "Masculino", "Feminino"], fontSize: 0.04, ticks: [0, 1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "level_of_education"
  level_of_educationClock = new util.Clock();
  text_53 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_53',
    text: '¿Cuál es tu nivel máximo de formación académica?\n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_70 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_70',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  education_answer = new visual.Slider({
    win: psychoJS.window, name: 'education_answer',
    startValue: undefined,
    size: [0.03, 0.3], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: ["Secundaria", "Bachillerato", "Grado/Licenciatura", "M\u00e1ster", "Doctorado", "Otro"], fontSize: 0.04, ticks: [0, 1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "handedness"
  handednessClock = new util.Clock();
  text_54 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_54',
    text: '¿Cuál es tu mano dominante?\n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_55 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_55',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  hand_answer = new visual.Slider({
    win: psychoJS.window, name: 'hand_answer',
    startValue: undefined,
    size: [0.03, 0.2], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["Las dos (ambidestro)", "Izquierda", "Derecha"], fontSize: 0.04, ticks: [0, 1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "language_start"
  language_startClock = new util.Clock();
  text_56 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_56',
    text: '¡Gracias! Ahora seguiremos con algunas preguntas sobre tus hábitos y experiencias lingüísticas.\n\n*pulsa espacio continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "language_n"
  language_nClock = new util.Clock();
  text_52 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_52',
    text: '¿Cuántos idiomas hablas en total (incluyendo tu lengua materna)? \n\n*Introduce en la casilla el número correspondiente *',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: 0.0 
  });
  
  N_language_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'N_language_answer',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [0.35, 0.35],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_80 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_80',
    text: 'Pulsa aquí para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "language_type_age"
  language_type_ageClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Por favor, para cada casilla escribe uno de los idiomas que hablas. En la casilla correspondiente al lado, indica la edad a la cual empezaste a hablar/estudiar el idioma de interés. Para tu lengua materna pon ‘0’.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.5,
    depth: 0.0 
  });
  
  text_50 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_50',
    text: 'Idioma:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.25), 0.2], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: -1.0 
  });
  
  langtype_answer_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langtype_answer_1',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), 0.13], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  text_51 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_51',
    text: 'Edad en la cúal empezaste:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.25, 0.2], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: -3.0 
  });
  
  langage_answer_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langage_answer_1',
    text: '',
    font: 'Open Sans',
    pos: [0.25, 0.13], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  text_81 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_81',
    text: 'Pulsa aquí para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  langtype_answer_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langtype_answer_2',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), 0.06], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  langage_answer_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langage_answer_2',
    text: '',
    font: 'Open Sans',
    pos: [0.25, 0.06], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  langtype_answer_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langtype_answer_3',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), (- 0.01)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  langage_answer_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langage_answer_3',
    text: '',
    font: 'Open Sans',
    pos: [0.25, (- 0.01)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -9.0 
  });
  
  langtype_answer_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langtype_answer_4',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), (- 0.08)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -10.0 
  });
  
  langage_answer_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langage_answer_4',
    text: '',
    font: 'Open Sans',
    pos: [0.25, (- 0.08)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -11.0 
  });
  
  langtype_answer_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langtype_answer_5',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), (- 0.15)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -12.0 
  });
  
  langage_answer_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langage_answer_5',
    text: '',
    font: 'Open Sans',
    pos: [0.25, (- 0.15)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -13.0 
  });
  
  langtype_answer_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langtype_answer_6',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), (- 0.22)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -14.0 
  });
  
  langage_answer_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'langage_answer_6',
    text: '',
    font: 'Open Sans',
    pos: [0.25, (- 0.22)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -15.0 
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "language_use"
  language_useClock = new util.Clock();
  text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_46',
    text: '¿Actualmente, cuántos idiomas utilizas diariamente? \n\n*Introduce en la casilla el número correspondiente *',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: 0.0 
  });
  
  N_lang_use_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'N_lang_use_answer',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [0.35, 0.35],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  text_82 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_82',
    text: 'Pulsa aquí para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  // Initialize components for Routine "ability_learn_language"
  ability_learn_languageClock = new util.Clock();
  text_57 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_57',
    text: 'Evalúa tu habilidad para aprender idiomas. En otras palabras, ¿Cuán bueno/a sientes que eres aprendiendo nuevos idiomas comparado con tus amigos y otras personas que conoces?\n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_58 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_58',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  ability_learnL2_answer = new visual.Slider({
    win: psychoJS.window, name: 'ability_learnL2_answer',
    startValue: undefined,
    size: [0.03, 0.35], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: ["Muy mala", "Mala", "Limitada", "Funcional", "Buena", "Muy buena", "Como nativo"], fontSize: 0.04, ticks: [0, 1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "tendence_mixlang_2"
  tendence_mixlang_2Clock = new util.Clock();
  text_59 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_59',
    text: '¿Cuál es tu tendencia a mezclar palabras o oraciones de diferentes idiomas cuando hablas?\n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_60 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_60',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  tendence_mixlang_answer = new visual.Slider({
    win: psychoJS.window, name: 'tendence_mixlang_answer',
    startValue: undefined,
    size: [0.03, 0.35], pos: [0, (- 0.05)], ori: 0.0, units: 'height',
    labels: ["Absente", "Muy d\u00e9bil", "D\u00e9bil", "Moderado", "Fuerte", " Muy fuerte", "Extrema"], fontSize: 0.04, ticks: [0, 1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  // Initialize components for Routine "trastorno_lenguaje"
  trastorno_lenguajeClock = new util.Clock();
  text_61 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_61',
    text: '¿Tienes diagnosticado algún trastorno de lenguaje (e.g., Dislexia, Trastorno especifico del lenguaje)? \n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_62 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_62',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  lan_deficit_answer = new visual.Slider({
    win: psychoJS.window, name: 'lan_deficit_answer',
    startValue: undefined,
    size: [0.2, 0.03], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["No", "Si"], fontSize: 0.04, ticks: [0, 1],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: true,
  });
  
  // Initialize components for Routine "trastorno_auditivo"
  trastorno_auditivoClock = new util.Clock();
  text_63 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_63',
    text: '¿Tienes algún problema auditivo? \n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_64 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_64',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  aud_deficit_answer = new visual.Slider({
    win: psychoJS.window, name: 'aud_deficit_answer',
    startValue: undefined,
    size: [0.2, 0.03], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["No", "Si"], fontSize: 0.04, ticks: [0, 1],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: true,
  });
  
  // Initialize components for Routine "music_start"
  music_startClock = new util.Clock();
  text_65 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_65',
    text: '¡Gracias! Ahora seguiremos con algunas preguntas sobre tu experiencia y habitos en ambito musical.\n\n*pulsa espacio continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practica_musica"
  practica_musicaClock = new util.Clock();
  text_66 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_66',
    text: '¿Has practicado algún instrumento musical (o el canto)? \n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_67 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_67',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  music_expertise_answer = new visual.Slider({
    win: psychoJS.window, name: 'music_expertise_answer',
    startValue: undefined,
    size: [0.2, 0.03], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["No", "Si"], fontSize: 0.04, ticks: [0, 1],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: true,
  });
  
  // Initialize components for Routine "instrument_age"
  instrument_ageClock = new util.Clock();
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: "Por favor, para cada casilla escribe uno de los instrumentos que has tocado/tocas (incluyendo el canto). En la casilla correspondiente al lado, indica la edad a la cual empezaste a estudiar el instrumento de interés. Si no tocas/has tocado ningún instrumento simplemente escribe 'nada' en las dos primeras casillas.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.5,
    depth: 0.0 
  });
  
  text_35 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_35',
    text: 'Instrumento:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.25), 0.2], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: -1.0 
  });
  
  instr_type_answer_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_type_answer_1',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), 0.13], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  text_41 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_41',
    text: 'Edad a la que empezaste:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.25, 0.2], height: 0.04,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: -3.0 
  });
  
  instr_age_answer_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_age_answer_1',
    text: '',
    font: 'Open Sans',
    pos: [0.25, 0.13], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  text_83 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_83',
    text: 'Pulsa aquí para continuar.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  instr_type_answer_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_type_answer_2',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), 0.06], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  instr_age_answer_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_age_answer_2',
    text: '',
    font: 'Open Sans',
    pos: [0.25, 0.06], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  instr_type_answer_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_type_answer_3',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), (- 0.01)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  instr_age_answer_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_age_answer_3',
    text: '',
    font: 'Open Sans',
    pos: [0.25, (- 0.01)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -9.0 
  });
  
  instr_type_answer_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_type_answer_4',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), (- 0.08)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -10.0 
  });
  
  instr_age_answer_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_age_answer_4',
    text: '',
    font: 'Open Sans',
    pos: [0.25, (- 0.08)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -11.0 
  });
  
  instr_type_answer_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_type_answer_5',
    text: '',
    font: 'Open Sans',
    pos: [(- 0.25), (- 0.15)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -12.0 
  });
  
  instr_age_answer_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instr_age_answer_5',
    text: '',
    font: 'Open Sans',
    pos: [0.25, (- 0.15)], letterHeight: 0.03,
    size: [0.3, 0.05],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -13.0 
  });
  
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  // Initialize components for Routine "instrument_use"
  instrument_useClock = new util.Clock();
  text_87 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_87',
    text: '¿Actualmente practicas algún instrumento musical (o el canto)?\n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_88 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_88',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  instrument_use_answer = new visual.Slider({
    win: psychoJS.window, name: 'instrument_use_answer',
    startValue: undefined,
    size: [0.2, 0.03], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["No", "Si"], fontSize: 0.04, ticks: [0, 1],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: true,
  });
  
  // Initialize components for Routine "partitura"
  partituraClock = new util.Clock();
  text_68 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_68',
    text: '¿Sabes leer partitura musical? \n\n*marca la casilla correspondiente a tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_69 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_69',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  partiture_answer = new visual.Slider({
    win: psychoJS.window, name: 'partiture_answer',
    startValue: undefined,
    size: [0.2, 0.03], pos: [0, 0], ori: 0.0, units: 'height',
    labels: ["No", "Si"], fontSize: 0.04, ticks: [0, 1],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: true,
  });
  
  event.clearEvents();
  // Initialize components for Routine "intro_questionaire1"
  intro_questionaire1Clock = new util.Clock();
  text_49 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_49',
    text: '¡Gracias! Ahora seguirá un cuestionario que hace preguntas más específicas sobre tus actitudes en relación a la música.\n\nCada ítem de este cuestionario es una afirmación con la que se puede estar de acuerdo o en desacuerdo. Para cada ítem, indica en qué grado estás de acuerdo o en desacuerdo con lo que dice el ítem, desde una escala de 1 ( completamente en desacuerdo) hasta 5 (completamente de acuerdo)\n\n*pulsa espacio para al cuestionario*\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "firs_questionaire_intro"
  firs_questionaire_introClock = new util.Clock();
  text_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_47',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_48',
    text: '*pulsa espacio una vez que hayas seleccionado tu respuesta*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  BMRQ_answer = new visual.Slider({
    win: psychoJS.window, name: 'BMRQ_answer',
    startValue: undefined,
    size: [1.15, 0.03], pos: [0, 0], ori: 0.0, units: 'height',
    labels: [1, 2, 3, 4, 5], fontSize: 0.03, ticks: [0, 1, 2, 3, 4],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color([(- 1.0), 1.0, 1.0]), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: true,
  });
  
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'question_music1.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.1)], size : [1.4, 0.1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "welcome1"
  welcome1Clock = new util.Clock();
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: 'Gracias por tu paciencia! Ahora empezaremos con el experimento. \n\nEsta tarea te tomará aproximadamente 45 minutos, durante los cuales te pediremos que escuches atentamente cuatro lenguajes artificiales.\n\n*pulsa espacio para continuar*\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcomw"
  welcomwClock = new util.Clock();
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'Antes de empezar con el experimento, te pedimos por favor que:\n\n-Te pongas unos cascos o auriculares para escuchar mejor y evitar distracciones.\n-Te sitúes en una habitación silenciosa.\n-Estés concentrado y sin distracciones durante la tarea.\n-Te asegures de no tener interrupciones en los próximos 45 minutos.\n-Apagues tu móvil.\n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "volume"
  volumeClock = new util.Clock();
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: 'Antes de empezar, te pediremos que ajustes el volumen de tu ordenador a un nivel de escucha cómodo. Para hacerlo, deberás utilizar directamente las teclas del teclado de tu ordenador, ya que una vez dentro de esta interfaz no podrás manipular el volumen de forma externa. La voz que escucharás para ajustar el volumen será la misma que escucharás en los cuatro lenguajes siguentes.\n \n*pulsa espacio para continuar*\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "volume_setting"
  volume_settingClock = new util.Clock();
  volume_set = new sound.Sound({
    win: psychoJS.window,
    value: 'volume.wav',
    secs: (- 1),
    });
  volume_set.setVolume(1.0);
  key_ressp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '*pulsa espacio cuando acabes de regular el volumen al nivel correcto*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "instructions_2"
  instructions_2Clock = new util.Clock();
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: 'Gracias. Ahora, unas instrucciones generales:\nPara cada uno de los cuatro lenguajes, tendrás tres fases. \n\n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions_0"
  Instructions_0Clock = new util.Clock();
  text_37 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_37',
    text: 'Fase 1: Escucha atenta.\n\nLa primera fase consistirá en una tarea de escucha atenta. Aquí deberás escuchar con mucha atención el lenguaje, imaginando que se trata de un lenguaje real.\n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions_task_1"
  Instructions_task_1Clock = new util.Clock();
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'Fase 2: Detección de sílabas.\n\nEn la segunda fase tu tarea consistirá en responder lo más rápido posible cuando oigas una sílaba específica mientras escuchas el mismo lenguaje. La sílaba objetivo se presentará en el centro de la pantalla y tu tarea será pulsar la tecla "espacio" lo más rápido posible cada vez que creas escucharla. \n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp1_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Intructions_task2"
  Intructions_task2Clock = new util.Clock();
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: 'Fase 3: Reconocimiento del lenguaje.\n\nEn la tercera fase, tu tarea consistirá en escuchar diferentes fragmentos del lenguaje que has escuchado anteriormente. Algunos de estos fragmentos coincidirán con partes del lenguaje previamente escuchado, mientras que otros serán muy similares, pero presentarán algunas diferencias. Tu objetivo será intentar reconocer qué fragmentos coinciden con el lenguaje previamente escuchado y expresar tu nivel de seguridad respecto a tu respuesta.\n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp1_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ready_"
  ready_Clock = new util.Clock();
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: 'Resumen de las tres fases para cada uno de los cuatro lenguajes:\n\n- Fase 1: Escucha atenta.\n\n- Fase 2: Detección de sílabas durante la escucha del lenguaje.\n\n- Fase 3: Reconocimiento de fragmentos del lenguaje.\n\n*pulsa espacio para continuar*\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ready_2"
  ready_2Clock = new util.Clock();
  text_29 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_29',
    text: '¡Empezamos con el primer lenguaje!\n\n*pulsa espacio para continuar*\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ready_loop"
  ready_loopClock = new util.Clock();
  text_36 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_36',
    text: "Una vez pulses  'espacio', comenzará la Fase 1 (Escucha atenta) del próximo lenguaje.\n\nPor favor, intenta escuchar el lenguaje con la máxima atención, escuchando cada sílaba e imaginando que escuchas un lenguaje real.\n\n\n*pulsa espacio para continuar*\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: 0.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "offline_listening"
  offline_listeningClock = new util.Clock();
  learning = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  learning.setVolume(1.0);
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: '*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Task_1"
  Task_1Clock = new util.Clock();
  text_31 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_31',
    text: 'Ahora comenzará la Fase 2 (Detección de sílabas) de este lenguaje. \n\nLa sílaba objetivo se presentará en el centro de la pantalla y tu tarea será pulsar la tecla "espacio" lo más rápido posible cada vez que creas escucharla. \n\n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.3,
    depth: 0.0 
  });
  
  key_resp1_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "sequences"
  sequencesClock = new util.Clock();
  seqs = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  seqs.setVolume(1.0);
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  syllable_catch = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_instructions"
  test_instructionsClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Ahora empezará la Fase 3 (reconocimiento de fragmentos) de este lenguaje . \nEscucharás diferentes fragmentos del lenguaje que has escuchado anteriormente. Algunos de estos fragmentos coincidirán con partes del lenguaje previamente escuchado, mientras que otros serán muy similares pero presentarán algunas diferencias. \n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_instructions2"
  test_instructions2Clock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Tu tarea consiste en:\n\n1. Decir si el segmento escuchado es o no es parte del lenguaje escuchado, pulsando:\n\nBotón Z de tu teclado = Sí, es parte del lenguaje.\nBotón M de tu teclado = No, no es parte del lenguaje.\n\n2- Decirnos qué tan seguro estás de tu respuesta, en una escala del 1 (poco seguro) al 7 (muy seguro).\n\n*pulsa espacio para continuar*\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "audio"
  audioClock = new util.Clock();
  test_sounds = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  test_sounds.setVolume(1.0);
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: '*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "question1"
  question1Clock = new util.Clock();
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: '¿Es parte del lenguaje original?\n\nSI                                               NO\n(-z)                                           (-m)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Partz_no_partm = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "question_2"
  question_2Clock = new util.Clock();
  text_32 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_32',
    text: '¿Qué tan seguro estás de tu respuesta?  \n\n    ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'question2.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.8, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_33 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_33',
    text: 'Poco                  Bastante                 Mucho',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  security_1_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Next_langauge"
  Next_langaugeClock = new util.Clock();
  text_30 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_30',
    text: '¡Gracias! Has terminado con este lenguaje. \n\n*pulsa espacio para continuar*\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "preguntas_rhytmos"
  preguntas_rhytmosClock = new util.Clock();
  text_42 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_42',
    text: '¡Muchas gracias! Antes de terminar el experimento, te haremos dos preguntas sobre los cuatro lenguajes que acabas de escuchar.\n\n\n*pulsa espacio para continuar*',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "question"
  questionClock = new util.Clock();
  text_43 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_43',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_5 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_5.setVolume(1.0);
  sound_6 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_6.setVolume(1.0);
  sound_7 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_7.setVolume(1.0);
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'sound_icon.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.1)], size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: 'L 1',
    font: 'Open Sans',
    pos: [(- 0.21), (- 0.1)], letterHeight: 0.05,
    size: [1, 0.45],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  sound_3.setVolume(1.0);
  textbox_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_4',
    text: 'L 2',
    font: 'Open Sans',
    pos: [(- 0.21), (- 0.1)], letterHeight: 0.05,
    size: [1, 0.45],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  textbox_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_5',
    text: 'L 3',
    font: 'Open Sans',
    pos: [(- 0.21), (- 0.1)], letterHeight: 0.05,
    size: [1, 0.45],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  textbox_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_6',
    text: 'L 4',
    font: 'Open Sans',
    pos: [(- 0.21), (- 0.1)], letterHeight: 0.05,
    size: [1, 0.45],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -9.0 
  });
  
  // Initialize components for Routine "question_answer"
  question_answerClock = new util.Clock();
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  complex_1_2_3_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_45',
    text: "L 1            L 2            L3            L4\n('1')          ('2')          ('3')         ('4')\n\n\n*pulsa el numero correspondiente al lenguaje escogido para responder*",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.13)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "gracias_2"
  gracias_2Clock = new util.Clock();
  text_40 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_40',
    text: "¡Has acabado con el experimento!  ¡Gracias!\n\nAntes de acabar nos gustaría que nos digas cómo ha ido la tarea.  Si has tenido algún problema, interrupción, distracción o cualquier otra información que creas importante comentar, por favor, déjalo por escrito en la ventana siguiente. Si no ha ocurrido nada, simplemente escribe 'nada'. ¡Muchas gracias!\n\n*pulsa espacio para acceder a la ventana donde dejar tu comentario*\n",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.3, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "comentario"
  comentarioClock = new util.Clock();
  END_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'END_textbox',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.45],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  text_38 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_38',
    text: 'Dejas aquí tu comentario:\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_39 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_39',
    text: 'Pulsa aquí para terminar el experimento.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var ConsentComponents;
function ConsentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Consent' ---
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the consent1
    // current position of the mouse:
    consent1.x = [];
    consent1.y = [];
    consent1.leftButton = [];
    consent1.midButton = [];
    consent1.rightButton = [];
    consent1.time = [];
    consent1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(text_86);
    ConsentComponents.push(informed_consent_accepted);
    ConsentComponents.push(informed_consent_refused);
    ConsentComponents.push(consent1);
    
    ConsentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function ConsentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Consent' ---
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_86* updates
    if (t >= 0.0 && text_86.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_86.tStart = t;  // (not accounting for frame time here)
      text_86.frameNStart = frameN;  // exact frame index
      
      text_86.setAutoDraw(true);
    }

    
    // *informed_consent_accepted* updates
    if (t >= 0.0 && informed_consent_accepted.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      informed_consent_accepted.tStart = t;  // (not accounting for frame time here)
      informed_consent_accepted.frameNStart = frameN;  // exact frame index
      
      informed_consent_accepted.setAutoDraw(true);
    }

    
    // *informed_consent_refused* updates
    if (t >= 0.0 && informed_consent_refused.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      informed_consent_refused.tStart = t;  // (not accounting for frame time here)
      informed_consent_refused.frameNStart = frameN;  // exact frame index
      
      informed_consent_refused.setAutoDraw(true);
    }

    // *consent1* updates
    if (t >= 0.0 && consent1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent1.tStart = t;  // (not accounting for frame time here)
      consent1.frameNStart = frameN;  // exact frame index
      
      consent1.status = PsychoJS.Status.STARTED;
      consent1.mouseClock.reset();
      prevButtonState = consent1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (consent1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = consent1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [informed_consent_accepted, informed_consent_refused]) {
            if (obj.contains(consent1)) {
              gotValidClick = true;
              consent1.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = consent1.getPos();
          consent1.x.push(_mouseXYs[0]);
          consent1.y.push(_mouseXYs[1]);
          consent1.leftButton.push(_mouseButtons[0]);
          consent1.midButton.push(_mouseButtons[1]);
          consent1.rightButton.push(_mouseButtons[2]);
          consent1.time.push(consent1.mouseClock.getTime());
        }
      }
    }
    
    if (mouse.isPressedIn(informed_consent_accepted)) {
            continueRoutine = false;
    }
    
    if (mouse.isPressedIn(informed_consent_refused)) {
        psychoJS.quit("User declined informed consent"); 
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ConsentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ConsentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Consent' ---
    ConsentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('consent1.x', consent1.x);
    psychoJS.experiment.addData('consent1.y', consent1.y);
    psychoJS.experiment.addData('consent1.leftButton', consent1.leftButton);
    psychoJS.experiment.addData('consent1.midButton', consent1.midButton);
    psychoJS.experiment.addData('consent1.rightButton', consent1.rightButton);
    psychoJS.experiment.addData('consent1.time', consent1.time);
    psychoJS.experiment.addData('consent1.clicked_name', consent1.clicked_name);
    
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Consent_2Components;
function Consent_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Consent_2' ---
    t = 0;
    Consent_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the consent2
    // current position of the mouse:
    consent2.x = [];
    consent2.y = [];
    consent2.leftButton = [];
    consent2.midButton = [];
    consent2.rightButton = [];
    consent2.time = [];
    consent2.clicked_name = [];
    gotValidClick = false; // until a click is received
    
    
    // keep track of which components have finished
    Consent_2Components = [];
    Consent_2Components.push(text_85);
    Consent_2Components.push(treatment_data_accepted);
    Consent_2Components.push(treatment_data_refused);
    Consent_2Components.push(consent2);
    
    Consent_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Consent_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Consent_2' ---
    // get current time
    t = Consent_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_85* updates
    if (t >= 0.0 && text_85.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_85.tStart = t;  // (not accounting for frame time here)
      text_85.frameNStart = frameN;  // exact frame index
      
      text_85.setAutoDraw(true);
    }

    
    // *treatment_data_accepted* updates
    if (t >= 0.0 && treatment_data_accepted.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      treatment_data_accepted.tStart = t;  // (not accounting for frame time here)
      treatment_data_accepted.frameNStart = frameN;  // exact frame index
      
      treatment_data_accepted.setAutoDraw(true);
    }

    
    // *treatment_data_refused* updates
    if (t >= 0.0 && treatment_data_refused.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      treatment_data_refused.tStart = t;  // (not accounting for frame time here)
      treatment_data_refused.frameNStart = frameN;  // exact frame index
      
      treatment_data_refused.setAutoDraw(true);
    }

    // *consent2* updates
    if (t >= 0.0 && consent2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent2.tStart = t;  // (not accounting for frame time here)
      consent2.frameNStart = frameN;  // exact frame index
      
      consent2.status = PsychoJS.Status.STARTED;
      consent2.mouseClock.reset();
      prevButtonState = consent2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (consent2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = consent2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [treatment_data_accepted, treatment_data_refused]) {
            if (obj.contains(consent2)) {
              gotValidClick = true;
              consent2.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = consent2.getPos();
          consent2.x.push(_mouseXYs[0]);
          consent2.y.push(_mouseXYs[1]);
          consent2.leftButton.push(_mouseButtons[0]);
          consent2.midButton.push(_mouseButtons[1]);
          consent2.rightButton.push(_mouseButtons[2]);
          consent2.time.push(consent2.mouseClock.getTime());
        }
      }
    }
    if (mouse.isPressedIn(treatment_data_accepted)) {
            continueRoutine = false;
    }
    
    if (mouse.isPressedIn(treatment_data_refused)) {
        psychoJS.quit("User declined informed consent"); 
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Consent_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Consent_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Consent_2' ---
    Consent_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('consent2.x', consent2.x);
    psychoJS.experiment.addData('consent2.y', consent2.y);
    psychoJS.experiment.addData('consent2.leftButton', consent2.leftButton);
    psychoJS.experiment.addData('consent2.midButton', consent2.midButton);
    psychoJS.experiment.addData('consent2.rightButton', consent2.rightButton);
    psychoJS.experiment.addData('consent2.time', consent2.time);
    psychoJS.experiment.addData('consent2.clicked_name', consent2.clicked_name);
    
    // the Routine "Consent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_20_allKeys;
var Initial_questionnaireComponents;
function Initial_questionnaireRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Initial_questionnaire' ---
    t = 0;
    Initial_questionnaireClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_20.keys = undefined;
    key_resp_20.rt = undefined;
    _key_resp_20_allKeys = [];
    // keep track of which components have finished
    Initial_questionnaireComponents = [];
    Initial_questionnaireComponents.push(text_84);
    Initial_questionnaireComponents.push(key_resp_20);
    
    Initial_questionnaireComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Initial_questionnaireRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Initial_questionnaire' ---
    // get current time
    t = Initial_questionnaireClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_84* updates
    if (t >= 0.0 && text_84.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_84.tStart = t;  // (not accounting for frame time here)
      text_84.frameNStart = frameN;  // exact frame index
      
      text_84.setAutoDraw(true);
    }

    
    // *key_resp_20* updates
    if (t >= 0.0 && key_resp_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_20.tStart = t;  // (not accounting for frame time here)
      key_resp_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_20.clearEvents(); });
    }

    if (key_resp_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_20.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_20_allKeys = _key_resp_20_allKeys.concat(theseKeys);
      if (_key_resp_20_allKeys.length > 0) {
        key_resp_20.keys = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].name;  // just the last key pressed
        key_resp_20.rt = _key_resp_20_allKeys[_key_resp_20_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Initial_questionnaireComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Initial_questionnaireRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Initial_questionnaire' ---
    Initial_questionnaireComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_20.corr, level);
    }
    psychoJS.experiment.addData('key_resp_20.keys', key_resp_20.keys);
    if (typeof key_resp_20.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_20.rt', key_resp_20.rt);
        routineTimer.reset();
        }
    
    key_resp_20.stop();
    // the Routine "Initial_questionnaire" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ageComponents;
function ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'age' ---
    t = 0;
    ageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    age_answer.setText('');
    age_answer.refresh();
    // setup some python lists for storing info about the mouse_8
    // current position of the mouse:
    mouse_8.x = [];
    mouse_8.y = [];
    mouse_8.leftButton = [];
    mouse_8.midButton = [];
    mouse_8.rightButton = [];
    mouse_8.time = [];
    mouse_8.clicked_name = [];
    gotValidClick = false; // until a click is received
    event.clearEvents();
    // keep track of which components have finished
    ageComponents = [];
    ageComponents.push(text_76);
    ageComponents.push(age_answer);
    ageComponents.push(text_77);
    ageComponents.push(mouse_8);
    
    ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'age' ---
    // get current time
    t = ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_76* updates
    if (t >= 0.0 && text_76.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_76.tStart = t;  // (not accounting for frame time here)
      text_76.frameNStart = frameN;  // exact frame index
      
      text_76.setAutoDraw(true);
    }

    
    // *age_answer* updates
    if (t >= 0.0 && age_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_answer.tStart = t;  // (not accounting for frame time here)
      age_answer.frameNStart = frameN;  // exact frame index
      
      age_answer.setAutoDraw(true);
    }

    
    // *text_77* updates
    if (t >= 0.0 && text_77.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_77.tStart = t;  // (not accounting for frame time here)
      text_77.frameNStart = frameN;  // exact frame index
      
      text_77.setAutoDraw(true);
    }

    // *mouse_8* updates
    if (t >= 0.0 && mouse_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_8.tStart = t;  // (not accounting for frame time here)
      mouse_8.frameNStart = frameN;  // exact frame index
      
      mouse_8.status = PsychoJS.Status.STARTED;
      mouse_8.mouseClock.reset();
      prevButtonState = mouse_8.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_8.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_8.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [text_77]) {
            if (obj.contains(mouse_8)) {
              gotValidClick = true;
              mouse_8.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_8.getPos();
          mouse_8.x.push(_mouseXYs[0]);
          mouse_8.y.push(_mouseXYs[1]);
          mouse_8.leftButton.push(_mouseButtons[0]);
          mouse_8.midButton.push(_mouseButtons[1]);
          mouse_8.rightButton.push(_mouseButtons[2]);
          mouse_8.time.push(mouse_8.mouseClock.getTime());
        }
      }
    }
    
    if (age_answer.getText()!== '') {
        if (mouse.isPressedIn(text_77)) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'age' ---
    ageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('age_answer.text',age_answer.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_8.x', mouse_8.x);
    psychoJS.experiment.addData('mouse_8.y', mouse_8.y);
    psychoJS.experiment.addData('mouse_8.leftButton', mouse_8.leftButton);
    psychoJS.experiment.addData('mouse_8.midButton', mouse_8.midButton);
    psychoJS.experiment.addData('mouse_8.rightButton', mouse_8.rightButton);
    psychoJS.experiment.addData('mouse_8.time', mouse_8.time);
    psychoJS.experiment.addData('mouse_8.clicked_name', mouse_8.clicked_name);
    
    // the Routine "age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var residenceComponents;
function residenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'residence' ---
    t = 0;
    residenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    residence_answer.setText('');
    residence_answer.refresh();
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    event.clearEvents();
    // keep track of which components have finished
    residenceComponents = [];
    residenceComponents.push(text_75);
    residenceComponents.push(residence_answer);
    residenceComponents.push(text_78);
    residenceComponents.push(mouse_2);
    
    residenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function residenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'residence' ---
    // get current time
    t = residenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_75* updates
    if (t >= 0.0 && text_75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_75.tStart = t;  // (not accounting for frame time here)
      text_75.frameNStart = frameN;  // exact frame index
      
      text_75.setAutoDraw(true);
    }

    
    // *residence_answer* updates
    if (t >= 0.0 && residence_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      residence_answer.tStart = t;  // (not accounting for frame time here)
      residence_answer.frameNStart = frameN;  // exact frame index
      
      residence_answer.setAutoDraw(true);
    }

    
    // *text_78* updates
    if (t >= 0.0 && text_78.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_78.tStart = t;  // (not accounting for frame time here)
      text_78.frameNStart = frameN;  // exact frame index
      
      text_78.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [text_77]) {
            if (obj.contains(mouse_2)) {
              gotValidClick = true;
              mouse_2.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
        }
      }
    }
    
    if (residence_answer.getText()!== '') {
        if (mouse.isPressedIn(text_78)) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    residenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function residenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'residence' ---
    residenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('residence_answer.text',residence_answer.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "residence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var native_language_2Components;
function native_language_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'native_language_2' ---
    t = 0;
    native_language_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    native_lang_answer.setText('');
    native_lang_answer.refresh();
    // setup some python lists for storing info about the mouse_9
    // current position of the mouse:
    mouse_9.x = [];
    mouse_9.y = [];
    mouse_9.leftButton = [];
    mouse_9.midButton = [];
    mouse_9.rightButton = [];
    mouse_9.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    native_language_2Components = [];
    native_language_2Components.push(text_89);
    native_language_2Components.push(native_lang_answer);
    native_language_2Components.push(text_90);
    native_language_2Components.push(mouse_9);
    
    native_language_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function native_language_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'native_language_2' ---
    // get current time
    t = native_language_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_89* updates
    if (t >= 0.0 && text_89.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_89.tStart = t;  // (not accounting for frame time here)
      text_89.frameNStart = frameN;  // exact frame index
      
      text_89.setAutoDraw(true);
    }

    
    // *native_lang_answer* updates
    if (t >= 0.0 && native_lang_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      native_lang_answer.tStart = t;  // (not accounting for frame time here)
      native_lang_answer.frameNStart = frameN;  // exact frame index
      
      native_lang_answer.setAutoDraw(true);
    }

    
    // *text_90* updates
    if (t >= 0.0 && text_90.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_90.tStart = t;  // (not accounting for frame time here)
      text_90.frameNStart = frameN;  // exact frame index
      
      text_90.setAutoDraw(true);
    }

    // *mouse_9* updates
    if (t >= 0.0 && mouse_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_9.tStart = t;  // (not accounting for frame time here)
      mouse_9.frameNStart = frameN;  // exact frame index
      
      mouse_9.status = PsychoJS.Status.STARTED;
      mouse_9.mouseClock.reset();
      prevButtonState = mouse_9.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_9.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_9.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_9.getPos();
          mouse_9.x.push(_mouseXYs[0]);
          mouse_9.y.push(_mouseXYs[1]);
          mouse_9.leftButton.push(_mouseButtons[0]);
          mouse_9.midButton.push(_mouseButtons[1]);
          mouse_9.rightButton.push(_mouseButtons[2]);
          mouse_9.time.push(mouse_9.mouseClock.getTime());
        }
      }
    }
    
    if (native_lang_answer.getText()!== '') {
        if (mouse.isPressedIn(text_90)) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    native_language_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function native_language_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'native_language_2' ---
    native_language_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('native_lang_answer.text',native_lang_answer.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_9.x', mouse_9.x);
    psychoJS.experiment.addData('mouse_9.y', mouse_9.y);
    psychoJS.experiment.addData('mouse_9.leftButton', mouse_9.leftButton);
    psychoJS.experiment.addData('mouse_9.midButton', mouse_9.midButton);
    psychoJS.experiment.addData('mouse_9.rightButton', mouse_9.rightButton);
    psychoJS.experiment.addData('mouse_9.time', mouse_9.time);
    
    // the Routine "native_language_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sexComponents;
function sexRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sex' ---
    t = 0;
    sexClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sex_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    sexComponents = [];
    sexComponents.push(text_71);
    sexComponents.push(text_72);
    sexComponents.push(sex_answer);
    
    sexComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var keys;
function sexRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sex' ---
    // get current time
    t = sexClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_71* updates
    if (t >= 0.0 && text_71.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_71.tStart = t;  // (not accounting for frame time here)
      text_71.frameNStart = frameN;  // exact frame index
      
      text_71.setAutoDraw(true);
    }

    
    // *text_72* updates
    if (t >= 0.0 && text_72.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_72.tStart = t;  // (not accounting for frame time here)
      text_72.frameNStart = frameN;  // exact frame index
      
      text_72.setAutoDraw(true);
    }

    
    // *sex_answer* updates
    if (t >= 0.0 && sex_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sex_answer.tStart = t;  // (not accounting for frame time here)
      sex_answer.frameNStart = frameN;  // exact frame index
      
      sex_answer.setAutoDraw(true);
    }

    if (sex_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    sexComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sexRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sex' ---
    sexComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('sex_answer.response', sex_answer.getRating());
    psychoJS.experiment.addData('sex_answer.rt', sex_answer.getRT());
    // the Routine "sex" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var level_of_educationComponents;
function level_of_educationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'level_of_education' ---
    t = 0;
    level_of_educationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    education_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    level_of_educationComponents = [];
    level_of_educationComponents.push(text_53);
    level_of_educationComponents.push(text_70);
    level_of_educationComponents.push(education_answer);
    
    level_of_educationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function level_of_educationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'level_of_education' ---
    // get current time
    t = level_of_educationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_53* updates
    if (t >= 0.0 && text_53.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_53.tStart = t;  // (not accounting for frame time here)
      text_53.frameNStart = frameN;  // exact frame index
      
      text_53.setAutoDraw(true);
    }

    
    // *text_70* updates
    if (t >= 0.0 && text_70.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_70.tStart = t;  // (not accounting for frame time here)
      text_70.frameNStart = frameN;  // exact frame index
      
      text_70.setAutoDraw(true);
    }

    
    // *education_answer* updates
    if (t >= 0.0 && education_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      education_answer.tStart = t;  // (not accounting for frame time here)
      education_answer.frameNStart = frameN;  // exact frame index
      
      education_answer.setAutoDraw(true);
    }

    if (education_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    level_of_educationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function level_of_educationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'level_of_education' ---
    level_of_educationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('education_answer.response', education_answer.getRating());
    psychoJS.experiment.addData('education_answer.rt', education_answer.getRT());
    // the Routine "level_of_education" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var handednessComponents;
function handednessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'handedness' ---
    t = 0;
    handednessClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    hand_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    handednessComponents = [];
    handednessComponents.push(text_54);
    handednessComponents.push(text_55);
    handednessComponents.push(hand_answer);
    
    handednessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function handednessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'handedness' ---
    // get current time
    t = handednessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_54* updates
    if (t >= 0.0 && text_54.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_54.tStart = t;  // (not accounting for frame time here)
      text_54.frameNStart = frameN;  // exact frame index
      
      text_54.setAutoDraw(true);
    }

    
    // *text_55* updates
    if (t >= 0.0 && text_55.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_55.tStart = t;  // (not accounting for frame time here)
      text_55.frameNStart = frameN;  // exact frame index
      
      text_55.setAutoDraw(true);
    }

    
    // *hand_answer* updates
    if (t >= 0.0 && hand_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hand_answer.tStart = t;  // (not accounting for frame time here)
      hand_answer.frameNStart = frameN;  // exact frame index
      
      hand_answer.setAutoDraw(true);
    }

    if (hand_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    handednessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function handednessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'handedness' ---
    handednessComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('hand_answer.response', hand_answer.getRating());
    psychoJS.experiment.addData('hand_answer.rt', hand_answer.getRT());
    // the Routine "handedness" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_15_allKeys;
var language_startComponents;
function language_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'language_start' ---
    t = 0;
    language_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    language_startComponents = [];
    language_startComponents.push(text_56);
    language_startComponents.push(key_resp_15);
    
    language_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function language_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'language_start' ---
    // get current time
    t = language_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_56* updates
    if (t >= 0.0 && text_56.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_56.tStart = t;  // (not accounting for frame time here)
      text_56.frameNStart = frameN;  // exact frame index
      
      text_56.setAutoDraw(true);
    }

    
    // *key_resp_15* updates
    if (t >= 0.0 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    language_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function language_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'language_start' ---
    language_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_15.corr, level);
    }
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "language_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var language_nComponents;
function language_nRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'language_n' ---
    t = 0;
    language_nClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    N_language_answer.setText('');
    N_language_answer.refresh();
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    language_nComponents = [];
    language_nComponents.push(text_52);
    language_nComponents.push(N_language_answer);
    language_nComponents.push(text_80);
    language_nComponents.push(mouse_4);
    
    language_nComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function language_nRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'language_n' ---
    // get current time
    t = language_nClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_52* updates
    if (t >= 0.0 && text_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_52.tStart = t;  // (not accounting for frame time here)
      text_52.frameNStart = frameN;  // exact frame index
      
      text_52.setAutoDraw(true);
    }

    
    // *N_language_answer* updates
    if (t >= 0.0 && N_language_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      N_language_answer.tStart = t;  // (not accounting for frame time here)
      N_language_answer.frameNStart = frameN;  // exact frame index
      
      N_language_answer.setAutoDraw(true);
    }

    
    // *text_80* updates
    if (t >= 0.0 && text_80.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_80.tStart = t;  // (not accounting for frame time here)
      text_80.frameNStart = frameN;  // exact frame index
      
      text_80.setAutoDraw(true);
    }

    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
        }
      }
    }
    
    if (N_language_answer.getText()!== '') {
        if (mouse.isPressedIn(text_80)) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    language_nComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function language_nRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'language_n' ---
    language_nComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('N_language_answer.text',N_language_answer.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_4.x', mouse_4.x);
    psychoJS.experiment.addData('mouse_4.y', mouse_4.y);
    psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton);
    psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton);
    psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton);
    psychoJS.experiment.addData('mouse_4.time', mouse_4.time);
    
    // the Routine "language_n" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var language_type_ageComponents;
function language_type_ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'language_type_age' ---
    t = 0;
    language_type_ageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    langtype_answer_1.setText('');
    langtype_answer_1.refresh();
    langage_answer_1.setText('');
    langage_answer_1.refresh();
    langtype_answer_2.setText('');
    langtype_answer_2.refresh();
    langage_answer_2.setText('');
    langage_answer_2.refresh();
    langtype_answer_3.setText('');
    langtype_answer_3.refresh();
    langage_answer_3.setText('');
    langage_answer_3.refresh();
    langtype_answer_4.setText('');
    langtype_answer_4.refresh();
    langage_answer_4.setText('');
    langage_answer_4.refresh();
    langtype_answer_5.setText('');
    langtype_answer_5.refresh();
    langage_answer_5.setText('');
    langage_answer_5.refresh();
    langtype_answer_6.setText('');
    langtype_answer_6.refresh();
    langage_answer_6.setText('');
    langage_answer_6.refresh();
    // setup some python lists for storing info about the mouse_5
    // current position of the mouse:
    mouse_5.x = [];
    mouse_5.y = [];
    mouse_5.leftButton = [];
    mouse_5.midButton = [];
    mouse_5.rightButton = [];
    mouse_5.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    language_type_ageComponents = [];
    language_type_ageComponents.push(text_9);
    language_type_ageComponents.push(text_50);
    language_type_ageComponents.push(langtype_answer_1);
    language_type_ageComponents.push(text_51);
    language_type_ageComponents.push(langage_answer_1);
    language_type_ageComponents.push(text_81);
    language_type_ageComponents.push(langtype_answer_2);
    language_type_ageComponents.push(langage_answer_2);
    language_type_ageComponents.push(langtype_answer_3);
    language_type_ageComponents.push(langage_answer_3);
    language_type_ageComponents.push(langtype_answer_4);
    language_type_ageComponents.push(langage_answer_4);
    language_type_ageComponents.push(langtype_answer_5);
    language_type_ageComponents.push(langage_answer_5);
    language_type_ageComponents.push(langtype_answer_6);
    language_type_ageComponents.push(langage_answer_6);
    language_type_ageComponents.push(mouse_5);
    
    language_type_ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function language_type_ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'language_type_age' ---
    // get current time
    t = language_type_ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *text_50* updates
    if (t >= 0.0 && text_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_50.tStart = t;  // (not accounting for frame time here)
      text_50.frameNStart = frameN;  // exact frame index
      
      text_50.setAutoDraw(true);
    }

    
    // *langtype_answer_1* updates
    if (t >= 0.0 && langtype_answer_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langtype_answer_1.tStart = t;  // (not accounting for frame time here)
      langtype_answer_1.frameNStart = frameN;  // exact frame index
      
      langtype_answer_1.setAutoDraw(true);
    }

    
    // *text_51* updates
    if (t >= 0.0 && text_51.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_51.tStart = t;  // (not accounting for frame time here)
      text_51.frameNStart = frameN;  // exact frame index
      
      text_51.setAutoDraw(true);
    }

    
    // *langage_answer_1* updates
    if (t >= 0.0 && langage_answer_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langage_answer_1.tStart = t;  // (not accounting for frame time here)
      langage_answer_1.frameNStart = frameN;  // exact frame index
      
      langage_answer_1.setAutoDraw(true);
    }

    
    // *text_81* updates
    if (t >= 0.0 && text_81.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_81.tStart = t;  // (not accounting for frame time here)
      text_81.frameNStart = frameN;  // exact frame index
      
      text_81.setAutoDraw(true);
    }

    
    // *langtype_answer_2* updates
    if (t >= 0.0 && langtype_answer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langtype_answer_2.tStart = t;  // (not accounting for frame time here)
      langtype_answer_2.frameNStart = frameN;  // exact frame index
      
      langtype_answer_2.setAutoDraw(true);
    }

    
    // *langage_answer_2* updates
    if (t >= 0.0 && langage_answer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langage_answer_2.tStart = t;  // (not accounting for frame time here)
      langage_answer_2.frameNStart = frameN;  // exact frame index
      
      langage_answer_2.setAutoDraw(true);
    }

    
    // *langtype_answer_3* updates
    if (t >= 0.0 && langtype_answer_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langtype_answer_3.tStart = t;  // (not accounting for frame time here)
      langtype_answer_3.frameNStart = frameN;  // exact frame index
      
      langtype_answer_3.setAutoDraw(true);
    }

    
    // *langage_answer_3* updates
    if (t >= 0.0 && langage_answer_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langage_answer_3.tStart = t;  // (not accounting for frame time here)
      langage_answer_3.frameNStart = frameN;  // exact frame index
      
      langage_answer_3.setAutoDraw(true);
    }

    
    // *langtype_answer_4* updates
    if (t >= 0.0 && langtype_answer_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langtype_answer_4.tStart = t;  // (not accounting for frame time here)
      langtype_answer_4.frameNStart = frameN;  // exact frame index
      
      langtype_answer_4.setAutoDraw(true);
    }

    
    // *langage_answer_4* updates
    if (t >= 0.0 && langage_answer_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langage_answer_4.tStart = t;  // (not accounting for frame time here)
      langage_answer_4.frameNStart = frameN;  // exact frame index
      
      langage_answer_4.setAutoDraw(true);
    }

    
    // *langtype_answer_5* updates
    if (t >= 0.0 && langtype_answer_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langtype_answer_5.tStart = t;  // (not accounting for frame time here)
      langtype_answer_5.frameNStart = frameN;  // exact frame index
      
      langtype_answer_5.setAutoDraw(true);
    }

    
    // *langage_answer_5* updates
    if (t >= 0.0 && langage_answer_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langage_answer_5.tStart = t;  // (not accounting for frame time here)
      langage_answer_5.frameNStart = frameN;  // exact frame index
      
      langage_answer_5.setAutoDraw(true);
    }

    
    // *langtype_answer_6* updates
    if (t >= 0.0 && langtype_answer_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langtype_answer_6.tStart = t;  // (not accounting for frame time here)
      langtype_answer_6.frameNStart = frameN;  // exact frame index
      
      langtype_answer_6.setAutoDraw(true);
    }

    
    // *langage_answer_6* updates
    if (t >= 0.0 && langage_answer_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      langage_answer_6.tStart = t;  // (not accounting for frame time here)
      langage_answer_6.frameNStart = frameN;  // exact frame index
      
      langage_answer_6.setAutoDraw(true);
    }

    // *mouse_5* updates
    if (t >= 0.0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_5.getPos();
          mouse_5.x.push(_mouseXYs[0]);
          mouse_5.y.push(_mouseXYs[1]);
          mouse_5.leftButton.push(_mouseButtons[0]);
          mouse_5.midButton.push(_mouseButtons[1]);
          mouse_5.rightButton.push(_mouseButtons[2]);
          mouse_5.time.push(mouse_5.mouseClock.getTime());
        }
      }
    }
    
    if (langtype_answer_1.getText()!== '' && langage_answer_1.getText() !== '') {
        if (mouse.isPressedIn(text_81)) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    language_type_ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function language_type_ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'language_type_age' ---
    language_type_ageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('langtype_answer_1.text',langtype_answer_1.text)
    psychoJS.experiment.addData('langage_answer_1.text',langage_answer_1.text)
    psychoJS.experiment.addData('langtype_answer_2.text',langtype_answer_2.text)
    psychoJS.experiment.addData('langage_answer_2.text',langage_answer_2.text)
    psychoJS.experiment.addData('langtype_answer_3.text',langtype_answer_3.text)
    psychoJS.experiment.addData('langage_answer_3.text',langage_answer_3.text)
    psychoJS.experiment.addData('langtype_answer_4.text',langtype_answer_4.text)
    psychoJS.experiment.addData('langage_answer_4.text',langage_answer_4.text)
    psychoJS.experiment.addData('langtype_answer_5.text',langtype_answer_5.text)
    psychoJS.experiment.addData('langage_answer_5.text',langage_answer_5.text)
    psychoJS.experiment.addData('langtype_answer_6.text',langtype_answer_6.text)
    psychoJS.experiment.addData('langage_answer_6.text',langage_answer_6.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_5.x', mouse_5.x);
    psychoJS.experiment.addData('mouse_5.y', mouse_5.y);
    psychoJS.experiment.addData('mouse_5.leftButton', mouse_5.leftButton);
    psychoJS.experiment.addData('mouse_5.midButton', mouse_5.midButton);
    psychoJS.experiment.addData('mouse_5.rightButton', mouse_5.rightButton);
    psychoJS.experiment.addData('mouse_5.time', mouse_5.time);
    
    // the Routine "language_type_age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var language_useComponents;
function language_useRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'language_use' ---
    t = 0;
    language_useClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    N_lang_use_answer.setText('');
    N_lang_use_answer.refresh();
    // setup some python lists for storing info about the mouse_6
    // current position of the mouse:
    mouse_6.x = [];
    mouse_6.y = [];
    mouse_6.leftButton = [];
    mouse_6.midButton = [];
    mouse_6.rightButton = [];
    mouse_6.time = [];
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    language_useComponents = [];
    language_useComponents.push(text_46);
    language_useComponents.push(N_lang_use_answer);
    language_useComponents.push(text_82);
    language_useComponents.push(mouse_6);
    
    language_useComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function language_useRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'language_use' ---
    // get current time
    t = language_useClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_46* updates
    if (t >= 0.0 && text_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_46.tStart = t;  // (not accounting for frame time here)
      text_46.frameNStart = frameN;  // exact frame index
      
      text_46.setAutoDraw(true);
    }

    
    // *N_lang_use_answer* updates
    if (t >= 0.0 && N_lang_use_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      N_lang_use_answer.tStart = t;  // (not accounting for frame time here)
      N_lang_use_answer.frameNStart = frameN;  // exact frame index
      
      N_lang_use_answer.setAutoDraw(true);
    }

    
    // *text_82* updates
    if (t >= 0.0 && text_82.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_82.tStart = t;  // (not accounting for frame time here)
      text_82.frameNStart = frameN;  // exact frame index
      
      text_82.setAutoDraw(true);
    }

    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [text_77]) {
            if (obj.contains(mouse_6)) {
              gotValidClick = true;
              mouse_6.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_6.getPos();
          mouse_6.x.push(_mouseXYs[0]);
          mouse_6.y.push(_mouseXYs[1]);
          mouse_6.leftButton.push(_mouseButtons[0]);
          mouse_6.midButton.push(_mouseButtons[1]);
          mouse_6.rightButton.push(_mouseButtons[2]);
          mouse_6.time.push(mouse_6.mouseClock.getTime());
        }
      }
    }
    
    if (N_lang_use_answer.getText()!== '') {
        if (mouse.isPressedIn(text_82)) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    language_useComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function language_useRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'language_use' ---
    language_useComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('N_lang_use_answer.text',N_lang_use_answer.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_6.x', mouse_6.x);
    psychoJS.experiment.addData('mouse_6.y', mouse_6.y);
    psychoJS.experiment.addData('mouse_6.leftButton', mouse_6.leftButton);
    psychoJS.experiment.addData('mouse_6.midButton', mouse_6.midButton);
    psychoJS.experiment.addData('mouse_6.rightButton', mouse_6.rightButton);
    psychoJS.experiment.addData('mouse_6.time', mouse_6.time);
    psychoJS.experiment.addData('mouse_6.clicked_name', mouse_6.clicked_name);
    
    // the Routine "language_use" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ability_learn_languageComponents;
function ability_learn_languageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ability_learn_language' ---
    t = 0;
    ability_learn_languageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ability_learnL2_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    ability_learn_languageComponents = [];
    ability_learn_languageComponents.push(text_57);
    ability_learn_languageComponents.push(text_58);
    ability_learn_languageComponents.push(ability_learnL2_answer);
    
    ability_learn_languageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ability_learn_languageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ability_learn_language' ---
    // get current time
    t = ability_learn_languageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_57* updates
    if (t >= 0.0 && text_57.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_57.tStart = t;  // (not accounting for frame time here)
      text_57.frameNStart = frameN;  // exact frame index
      
      text_57.setAutoDraw(true);
    }

    
    // *text_58* updates
    if (t >= 0.0 && text_58.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_58.tStart = t;  // (not accounting for frame time here)
      text_58.frameNStart = frameN;  // exact frame index
      
      text_58.setAutoDraw(true);
    }

    
    // *ability_learnL2_answer* updates
    if (t >= 0.0 && ability_learnL2_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ability_learnL2_answer.tStart = t;  // (not accounting for frame time here)
      ability_learnL2_answer.frameNStart = frameN;  // exact frame index
      
      ability_learnL2_answer.setAutoDraw(true);
    }

    if (ability_learnL2_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ability_learn_languageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ability_learn_languageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ability_learn_language' ---
    ability_learn_languageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ability_learnL2_answer.response', ability_learnL2_answer.getRating());
    psychoJS.experiment.addData('ability_learnL2_answer.rt', ability_learnL2_answer.getRT());
    // the Routine "ability_learn_language" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tendence_mixlang_2Components;
function tendence_mixlang_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'tendence_mixlang_2' ---
    t = 0;
    tendence_mixlang_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    tendence_mixlang_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    tendence_mixlang_2Components = [];
    tendence_mixlang_2Components.push(text_59);
    tendence_mixlang_2Components.push(text_60);
    tendence_mixlang_2Components.push(tendence_mixlang_answer);
    
    tendence_mixlang_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tendence_mixlang_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'tendence_mixlang_2' ---
    // get current time
    t = tendence_mixlang_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_59* updates
    if (t >= 0.0 && text_59.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_59.tStart = t;  // (not accounting for frame time here)
      text_59.frameNStart = frameN;  // exact frame index
      
      text_59.setAutoDraw(true);
    }

    
    // *text_60* updates
    if (t >= 0.0 && text_60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_60.tStart = t;  // (not accounting for frame time here)
      text_60.frameNStart = frameN;  // exact frame index
      
      text_60.setAutoDraw(true);
    }

    
    // *tendence_mixlang_answer* updates
    if (t >= 0.0 && tendence_mixlang_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tendence_mixlang_answer.tStart = t;  // (not accounting for frame time here)
      tendence_mixlang_answer.frameNStart = frameN;  // exact frame index
      
      tendence_mixlang_answer.setAutoDraw(true);
    }

    if (tendence_mixlang_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    tendence_mixlang_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tendence_mixlang_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'tendence_mixlang_2' ---
    tendence_mixlang_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('tendence_mixlang_answer.response', tendence_mixlang_answer.getRating());
    psychoJS.experiment.addData('tendence_mixlang_answer.rt', tendence_mixlang_answer.getRT());
    // the Routine "tendence_mixlang_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trastorno_lenguajeComponents;
function trastorno_lenguajeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trastorno_lenguaje' ---
    t = 0;
    trastorno_lenguajeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    lan_deficit_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    trastorno_lenguajeComponents = [];
    trastorno_lenguajeComponents.push(text_61);
    trastorno_lenguajeComponents.push(text_62);
    trastorno_lenguajeComponents.push(lan_deficit_answer);
    
    trastorno_lenguajeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trastorno_lenguajeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trastorno_lenguaje' ---
    // get current time
    t = trastorno_lenguajeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_61* updates
    if (t >= 0.0 && text_61.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_61.tStart = t;  // (not accounting for frame time here)
      text_61.frameNStart = frameN;  // exact frame index
      
      text_61.setAutoDraw(true);
    }

    
    // *text_62* updates
    if (t >= 0.0 && text_62.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_62.tStart = t;  // (not accounting for frame time here)
      text_62.frameNStart = frameN;  // exact frame index
      
      text_62.setAutoDraw(true);
    }

    
    // *lan_deficit_answer* updates
    if (t >= 0.0 && lan_deficit_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      lan_deficit_answer.tStart = t;  // (not accounting for frame time here)
      lan_deficit_answer.frameNStart = frameN;  // exact frame index
      
      lan_deficit_answer.setAutoDraw(true);
    }

    if (lan_deficit_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trastorno_lenguajeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trastorno_lenguajeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trastorno_lenguaje' ---
    trastorno_lenguajeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('lan_deficit_answer.response', lan_deficit_answer.getRating());
    psychoJS.experiment.addData('lan_deficit_answer.rt', lan_deficit_answer.getRT());
    // the Routine "trastorno_lenguaje" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trastorno_auditivoComponents;
function trastorno_auditivoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trastorno_auditivo' ---
    t = 0;
    trastorno_auditivoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    aud_deficit_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    trastorno_auditivoComponents = [];
    trastorno_auditivoComponents.push(text_63);
    trastorno_auditivoComponents.push(text_64);
    trastorno_auditivoComponents.push(aud_deficit_answer);
    
    trastorno_auditivoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trastorno_auditivoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trastorno_auditivo' ---
    // get current time
    t = trastorno_auditivoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_63* updates
    if (t >= 0.0 && text_63.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_63.tStart = t;  // (not accounting for frame time here)
      text_63.frameNStart = frameN;  // exact frame index
      
      text_63.setAutoDraw(true);
    }

    
    // *text_64* updates
    if (t >= 0.0 && text_64.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_64.tStart = t;  // (not accounting for frame time here)
      text_64.frameNStart = frameN;  // exact frame index
      
      text_64.setAutoDraw(true);
    }

    
    // *aud_deficit_answer* updates
    if (t >= 0.0 && aud_deficit_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      aud_deficit_answer.tStart = t;  // (not accounting for frame time here)
      aud_deficit_answer.frameNStart = frameN;  // exact frame index
      
      aud_deficit_answer.setAutoDraw(true);
    }

    if (aud_deficit_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trastorno_auditivoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trastorno_auditivoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trastorno_auditivo' ---
    trastorno_auditivoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('aud_deficit_answer.response', aud_deficit_answer.getRating());
    psychoJS.experiment.addData('aud_deficit_answer.rt', aud_deficit_answer.getRT());
    // the Routine "trastorno_auditivo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var music_startComponents;
function music_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'music_start' ---
    t = 0;
    music_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    music_startComponents = [];
    music_startComponents.push(text_65);
    music_startComponents.push(key_resp_8);
    
    music_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function music_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'music_start' ---
    // get current time
    t = music_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_65* updates
    if (t >= 0.0 && text_65.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_65.tStart = t;  // (not accounting for frame time here)
      text_65.frameNStart = frameN;  // exact frame index
      
      text_65.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    music_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function music_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'music_start' ---
    music_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "music_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practica_musicaComponents;
function practica_musicaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practica_musica' ---
    t = 0;
    practica_musicaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    music_expertise_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    practica_musicaComponents = [];
    practica_musicaComponents.push(text_66);
    practica_musicaComponents.push(text_67);
    practica_musicaComponents.push(music_expertise_answer);
    
    practica_musicaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practica_musicaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practica_musica' ---
    // get current time
    t = practica_musicaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_66* updates
    if (t >= 0.0 && text_66.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_66.tStart = t;  // (not accounting for frame time here)
      text_66.frameNStart = frameN;  // exact frame index
      
      text_66.setAutoDraw(true);
    }

    
    // *text_67* updates
    if (t >= 0.0 && text_67.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_67.tStart = t;  // (not accounting for frame time here)
      text_67.frameNStart = frameN;  // exact frame index
      
      text_67.setAutoDraw(true);
    }

    
    // *music_expertise_answer* updates
    if (t >= 0.0 && music_expertise_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      music_expertise_answer.tStart = t;  // (not accounting for frame time here)
      music_expertise_answer.frameNStart = frameN;  // exact frame index
      
      music_expertise_answer.setAutoDraw(true);
    }

    if (music_expertise_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practica_musicaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practica_musicaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practica_musica' ---
    practica_musicaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('music_expertise_answer.response', music_expertise_answer.getRating());
    psychoJS.experiment.addData('music_expertise_answer.rt', music_expertise_answer.getRT());
    // the Routine "practica_musica" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instrument_ageComponents;
function instrument_ageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrument_age' ---
    t = 0;
    instrument_ageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instr_type_answer_1.setText('');
    instr_type_answer_1.refresh();
    instr_age_answer_1.setText('');
    instr_age_answer_1.refresh();
    instr_type_answer_2.setText('');
    instr_type_answer_2.refresh();
    instr_age_answer_2.setText('');
    instr_age_answer_2.refresh();
    instr_type_answer_3.setText('');
    instr_type_answer_3.refresh();
    instr_age_answer_3.setText('');
    instr_age_answer_3.refresh();
    instr_type_answer_4.setText('');
    instr_type_answer_4.refresh();
    instr_age_answer_4.setText('');
    instr_age_answer_4.refresh();
    instr_type_answer_5.setText('');
    instr_type_answer_5.refresh();
    instr_age_answer_5.setText('');
    instr_age_answer_5.refresh();
    // setup some python lists for storing info about the mouse_7
    // current position of the mouse:
    mouse_7.x = [];
    mouse_7.y = [];
    mouse_7.leftButton = [];
    mouse_7.midButton = [];
    mouse_7.rightButton = [];
    mouse_7.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instrument_ageComponents = [];
    instrument_ageComponents.push(text_20);
    instrument_ageComponents.push(text_35);
    instrument_ageComponents.push(instr_type_answer_1);
    instrument_ageComponents.push(text_41);
    instrument_ageComponents.push(instr_age_answer_1);
    instrument_ageComponents.push(text_83);
    instrument_ageComponents.push(instr_type_answer_2);
    instrument_ageComponents.push(instr_age_answer_2);
    instrument_ageComponents.push(instr_type_answer_3);
    instrument_ageComponents.push(instr_age_answer_3);
    instrument_ageComponents.push(instr_type_answer_4);
    instrument_ageComponents.push(instr_age_answer_4);
    instrument_ageComponents.push(instr_type_answer_5);
    instrument_ageComponents.push(instr_age_answer_5);
    instrument_ageComponents.push(mouse_7);
    
    instrument_ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrument_ageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrument_age' ---
    // get current time
    t = instrument_ageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }

    
    // *text_35* updates
    if (t >= 0.0 && text_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_35.tStart = t;  // (not accounting for frame time here)
      text_35.frameNStart = frameN;  // exact frame index
      
      text_35.setAutoDraw(true);
    }

    
    // *instr_type_answer_1* updates
    if (t >= 0.0 && instr_type_answer_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_type_answer_1.tStart = t;  // (not accounting for frame time here)
      instr_type_answer_1.frameNStart = frameN;  // exact frame index
      
      instr_type_answer_1.setAutoDraw(true);
    }

    
    // *text_41* updates
    if (t >= 0.0 && text_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_41.tStart = t;  // (not accounting for frame time here)
      text_41.frameNStart = frameN;  // exact frame index
      
      text_41.setAutoDraw(true);
    }

    
    // *instr_age_answer_1* updates
    if (t >= 0.0 && instr_age_answer_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_age_answer_1.tStart = t;  // (not accounting for frame time here)
      instr_age_answer_1.frameNStart = frameN;  // exact frame index
      
      instr_age_answer_1.setAutoDraw(true);
    }

    
    // *text_83* updates
    if (t >= 0.0 && text_83.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_83.tStart = t;  // (not accounting for frame time here)
      text_83.frameNStart = frameN;  // exact frame index
      
      text_83.setAutoDraw(true);
    }

    
    // *instr_type_answer_2* updates
    if (t >= 0.0 && instr_type_answer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_type_answer_2.tStart = t;  // (not accounting for frame time here)
      instr_type_answer_2.frameNStart = frameN;  // exact frame index
      
      instr_type_answer_2.setAutoDraw(true);
    }

    
    // *instr_age_answer_2* updates
    if (t >= 0.0 && instr_age_answer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_age_answer_2.tStart = t;  // (not accounting for frame time here)
      instr_age_answer_2.frameNStart = frameN;  // exact frame index
      
      instr_age_answer_2.setAutoDraw(true);
    }

    
    // *instr_type_answer_3* updates
    if (t >= 0.0 && instr_type_answer_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_type_answer_3.tStart = t;  // (not accounting for frame time here)
      instr_type_answer_3.frameNStart = frameN;  // exact frame index
      
      instr_type_answer_3.setAutoDraw(true);
    }

    
    // *instr_age_answer_3* updates
    if (t >= 0.0 && instr_age_answer_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_age_answer_3.tStart = t;  // (not accounting for frame time here)
      instr_age_answer_3.frameNStart = frameN;  // exact frame index
      
      instr_age_answer_3.setAutoDraw(true);
    }

    
    // *instr_type_answer_4* updates
    if (t >= 0.0 && instr_type_answer_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_type_answer_4.tStart = t;  // (not accounting for frame time here)
      instr_type_answer_4.frameNStart = frameN;  // exact frame index
      
      instr_type_answer_4.setAutoDraw(true);
    }

    
    // *instr_age_answer_4* updates
    if (t >= 0.0 && instr_age_answer_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_age_answer_4.tStart = t;  // (not accounting for frame time here)
      instr_age_answer_4.frameNStart = frameN;  // exact frame index
      
      instr_age_answer_4.setAutoDraw(true);
    }

    
    // *instr_type_answer_5* updates
    if (t >= 0.0 && instr_type_answer_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_type_answer_5.tStart = t;  // (not accounting for frame time here)
      instr_type_answer_5.frameNStart = frameN;  // exact frame index
      
      instr_type_answer_5.setAutoDraw(true);
    }

    
    // *instr_age_answer_5* updates
    if (t >= 0.0 && instr_age_answer_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_age_answer_5.tStart = t;  // (not accounting for frame time here)
      instr_age_answer_5.frameNStart = frameN;  // exact frame index
      
      instr_age_answer_5.setAutoDraw(true);
    }

    // *mouse_7* updates
    if (t >= 0.0 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_7.getPos();
          mouse_7.x.push(_mouseXYs[0]);
          mouse_7.y.push(_mouseXYs[1]);
          mouse_7.leftButton.push(_mouseButtons[0]);
          mouse_7.midButton.push(_mouseButtons[1]);
          mouse_7.rightButton.push(_mouseButtons[2]);
          mouse_7.time.push(mouse_7.mouseClock.getTime());
        }
      }
    }
    
    if (instr_type_answer_1.getText()!== '' && instr_age_answer_1.getText() !== '') {
        if (mouse.isPressedIn(text_81)) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrument_ageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrument_ageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrument_age' ---
    instrument_ageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_type_answer_1.text',instr_type_answer_1.text)
    psychoJS.experiment.addData('instr_age_answer_1.text',instr_age_answer_1.text)
    psychoJS.experiment.addData('instr_type_answer_2.text',instr_type_answer_2.text)
    psychoJS.experiment.addData('instr_age_answer_2.text',instr_age_answer_2.text)
    psychoJS.experiment.addData('instr_type_answer_3.text',instr_type_answer_3.text)
    psychoJS.experiment.addData('instr_age_answer_3.text',instr_age_answer_3.text)
    psychoJS.experiment.addData('instr_type_answer_4.text',instr_type_answer_4.text)
    psychoJS.experiment.addData('instr_age_answer_4.text',instr_age_answer_4.text)
    psychoJS.experiment.addData('instr_type_answer_5.text',instr_type_answer_5.text)
    psychoJS.experiment.addData('instr_age_answer_5.text',instr_age_answer_5.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_7.x', mouse_7.x);
    psychoJS.experiment.addData('mouse_7.y', mouse_7.y);
    psychoJS.experiment.addData('mouse_7.leftButton', mouse_7.leftButton);
    psychoJS.experiment.addData('mouse_7.midButton', mouse_7.midButton);
    psychoJS.experiment.addData('mouse_7.rightButton', mouse_7.rightButton);
    psychoJS.experiment.addData('mouse_7.time', mouse_7.time);
    
    // the Routine "instrument_age" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instrument_useComponents;
function instrument_useRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instrument_use' ---
    t = 0;
    instrument_useClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instrument_use_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    instrument_useComponents = [];
    instrument_useComponents.push(text_87);
    instrument_useComponents.push(text_88);
    instrument_useComponents.push(instrument_use_answer);
    
    instrument_useComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrument_useRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instrument_use' ---
    // get current time
    t = instrument_useClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_87* updates
    if (t >= 0.0 && text_87.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_87.tStart = t;  // (not accounting for frame time here)
      text_87.frameNStart = frameN;  // exact frame index
      
      text_87.setAutoDraw(true);
    }

    
    // *text_88* updates
    if (t >= 0.0 && text_88.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_88.tStart = t;  // (not accounting for frame time here)
      text_88.frameNStart = frameN;  // exact frame index
      
      text_88.setAutoDraw(true);
    }

    
    // *instrument_use_answer* updates
    if (t >= 0.0 && instrument_use_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrument_use_answer.tStart = t;  // (not accounting for frame time here)
      instrument_use_answer.frameNStart = frameN;  // exact frame index
      
      instrument_use_answer.setAutoDraw(true);
    }

    if (instrument_use_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrument_useComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrument_useRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instrument_use' ---
    instrument_useComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instrument_use_answer.response', instrument_use_answer.getRating());
    psychoJS.experiment.addData('instrument_use_answer.rt', instrument_use_answer.getRT());
    // the Routine "instrument_use" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var partituraComponents;
function partituraRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'partitura' ---
    t = 0;
    partituraClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    partiture_answer.reset()
    // keep track of which components have finished
    partituraComponents = [];
    partituraComponents.push(text_68);
    partituraComponents.push(text_69);
    partituraComponents.push(partiture_answer);
    
    partituraComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function partituraRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'partitura' ---
    // get current time
    t = partituraClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_68* updates
    if (t >= 0.0 && text_68.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_68.tStart = t;  // (not accounting for frame time here)
      text_68.frameNStart = frameN;  // exact frame index
      
      text_68.setAutoDraw(true);
    }

    
    // *text_69* updates
    if (t >= 0.0 && text_69.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_69.tStart = t;  // (not accounting for frame time here)
      text_69.frameNStart = frameN;  // exact frame index
      
      text_69.setAutoDraw(true);
    }

    
    // *partiture_answer* updates
    if (t >= 0.0 && partiture_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      partiture_answer.tStart = t;  // (not accounting for frame time here)
      partiture_answer.frameNStart = frameN;  // exact frame index
      
      partiture_answer.setAutoDraw(true);
    }

    if (partiture_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    partituraComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function partituraRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'partitura' ---
    partituraComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('partiture_answer.response', partiture_answer.getRating());
    psychoJS.experiment.addData('partiture_answer.rt', partiture_answer.getRT());
    // the Routine "partitura" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_21_allKeys;
var intro_questionaire1Components;
function intro_questionaire1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_questionaire1' ---
    t = 0;
    intro_questionaire1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_21.keys = undefined;
    key_resp_21.rt = undefined;
    _key_resp_21_allKeys = [];
    // keep track of which components have finished
    intro_questionaire1Components = [];
    intro_questionaire1Components.push(text_49);
    intro_questionaire1Components.push(key_resp_21);
    
    intro_questionaire1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function intro_questionaire1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_questionaire1' ---
    // get current time
    t = intro_questionaire1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_49* updates
    if (t >= 0.0 && text_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_49.tStart = t;  // (not accounting for frame time here)
      text_49.frameNStart = frameN;  // exact frame index
      
      text_49.setAutoDraw(true);
    }

    
    // *key_resp_21* updates
    if (t >= 0.0 && key_resp_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_21.tStart = t;  // (not accounting for frame time here)
      key_resp_21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_21.clearEvents(); });
    }

    if (key_resp_21.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_21.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_21_allKeys = _key_resp_21_allKeys.concat(theseKeys);
      if (_key_resp_21_allKeys.length > 0) {
        key_resp_21.keys = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].name;  // just the last key pressed
        key_resp_21.rt = _key_resp_21_allKeys[_key_resp_21_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    intro_questionaire1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_questionaire1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_questionaire1' ---
    intro_questionaire1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_21.corr, level);
    }
    psychoJS.experiment.addData('key_resp_21.keys', key_resp_21.keys);
    if (typeof key_resp_21.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_21.rt', key_resp_21.rt);
        routineTimer.reset();
        }
    
    key_resp_21.stop();
    // the Routine "intro_questionaire1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BMRQ;
function BMRQLoopBegin(BMRQLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    BMRQ = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Questionnaire_music1.csv',
      seed: undefined, name: 'BMRQ'
    });
    psychoJS.experiment.addLoop(BMRQ); // add the loop to the experiment
    currentLoop = BMRQ;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    BMRQ.forEach(function() {
      snapshot = BMRQ.getSnapshot();
    
      BMRQLoopScheduler.add(importConditions(snapshot));
      BMRQLoopScheduler.add(firs_questionaire_introRoutineBegin(snapshot));
      BMRQLoopScheduler.add(firs_questionaire_introRoutineEachFrame());
      BMRQLoopScheduler.add(firs_questionaire_introRoutineEnd(snapshot));
      BMRQLoopScheduler.add(BMRQLoopEndIteration(BMRQLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function BMRQLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(BMRQ);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function BMRQLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condsA.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(ready_loopRoutineBegin(snapshot));
      trialsLoopScheduler.add(ready_loopRoutineEachFrame());
      trialsLoopScheduler.add(ready_loopRoutineEnd(snapshot));
      trialsLoopScheduler.add(offline_listeningRoutineBegin(snapshot));
      trialsLoopScheduler.add(offline_listeningRoutineEachFrame());
      trialsLoopScheduler.add(offline_listeningRoutineEnd(snapshot));
      trialsLoopScheduler.add(Task_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(Task_1RoutineEachFrame());
      trialsLoopScheduler.add(Task_1RoutineEnd(snapshot));
      const Online_loopLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(Online_loopLoopBegin(Online_loopLoopScheduler, snapshot));
      trialsLoopScheduler.add(Online_loopLoopScheduler);
      trialsLoopScheduler.add(Online_loopLoopEnd);
      trialsLoopScheduler.add(test_instructionsRoutineBegin(snapshot));
      trialsLoopScheduler.add(test_instructionsRoutineEachFrame());
      trialsLoopScheduler.add(test_instructionsRoutineEnd(snapshot));
      trialsLoopScheduler.add(test_instructions2RoutineBegin(snapshot));
      trialsLoopScheduler.add(test_instructions2RoutineEachFrame());
      trialsLoopScheduler.add(test_instructions2RoutineEnd(snapshot));
      const Offline_testLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(Offline_testLoopBegin(Offline_testLoopScheduler, snapshot));
      trialsLoopScheduler.add(Offline_testLoopScheduler);
      trialsLoopScheduler.add(Offline_testLoopEnd);
      trialsLoopScheduler.add(Next_langaugeRoutineBegin(snapshot));
      trialsLoopScheduler.add(Next_langaugeRoutineEachFrame());
      trialsLoopScheduler.add(Next_langaugeRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var Online_loop;
function Online_loopLoopBegin(Online_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Online_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: seq,
      seed: undefined, name: 'Online_loop'
    });
    psychoJS.experiment.addLoop(Online_loop); // add the loop to the experiment
    currentLoop = Online_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Online_loop.forEach(function() {
      snapshot = Online_loop.getSnapshot();
    
      Online_loopLoopScheduler.add(importConditions(snapshot));
      Online_loopLoopScheduler.add(instructionsRoutineBegin(snapshot));
      Online_loopLoopScheduler.add(instructionsRoutineEachFrame());
      Online_loopLoopScheduler.add(instructionsRoutineEnd(snapshot));
      const audios_onlineLoopScheduler = new Scheduler(psychoJS);
      Online_loopLoopScheduler.add(audios_onlineLoopBegin(audios_onlineLoopScheduler, snapshot));
      Online_loopLoopScheduler.add(audios_onlineLoopScheduler);
      Online_loopLoopScheduler.add(audios_onlineLoopEnd);
      Online_loopLoopScheduler.add(Online_loopLoopEndIteration(Online_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var audios_online;
function audios_onlineLoopBegin(audios_onlineLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    audios_online = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, online_dir, ord),
      seed: undefined, name: 'audios_online'
    });
    psychoJS.experiment.addLoop(audios_online); // add the loop to the experiment
    currentLoop = audios_online;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    audios_online.forEach(function() {
      snapshot = audios_online.getSnapshot();
    
      audios_onlineLoopScheduler.add(importConditions(snapshot));
      audios_onlineLoopScheduler.add(sequencesRoutineBegin(snapshot));
      audios_onlineLoopScheduler.add(sequencesRoutineEachFrame());
      audios_onlineLoopScheduler.add(sequencesRoutineEnd(snapshot));
      audios_onlineLoopScheduler.add(audios_onlineLoopEndIteration(audios_onlineLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function audios_onlineLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(audios_online);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function audios_onlineLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function Online_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Online_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Online_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Offline_test;
function Offline_testLoopBegin(Offline_testLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Offline_test = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: test_dir,
      seed: undefined, name: 'Offline_test'
    });
    psychoJS.experiment.addLoop(Offline_test); // add the loop to the experiment
    currentLoop = Offline_test;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Offline_test.forEach(function() {
      snapshot = Offline_test.getSnapshot();
    
      Offline_testLoopScheduler.add(importConditions(snapshot));
      Offline_testLoopScheduler.add(audioRoutineBegin(snapshot));
      Offline_testLoopScheduler.add(audioRoutineEachFrame());
      Offline_testLoopScheduler.add(audioRoutineEnd(snapshot));
      Offline_testLoopScheduler.add(question1RoutineBegin(snapshot));
      Offline_testLoopScheduler.add(question1RoutineEachFrame());
      Offline_testLoopScheduler.add(question1RoutineEnd(snapshot));
      Offline_testLoopScheduler.add(question_2RoutineBegin(snapshot));
      Offline_testLoopScheduler.add(question_2RoutineEachFrame());
      Offline_testLoopScheduler.add(question_2RoutineEnd(snapshot));
      Offline_testLoopScheduler.add(Offline_testLoopEndIteration(Offline_testLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function Offline_testLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Offline_test);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Offline_testLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'questions.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(questionRoutineBegin(snapshot));
      trials_2LoopScheduler.add(questionRoutineEachFrame());
      trials_2LoopScheduler.add(questionRoutineEnd(snapshot));
      trials_2LoopScheduler.add(question_answerRoutineBegin(snapshot));
      trials_2LoopScheduler.add(question_answerRoutineEachFrame());
      trials_2LoopScheduler.add(question_answerRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var firs_questionaire_introComponents;
function firs_questionaire_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'firs_questionaire_intro' ---
    t = 0;
    firs_questionaire_introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_47.setText(preguntas_musica1);
    BMRQ_answer.reset()
    event.clearEvents();
    // keep track of which components have finished
    firs_questionaire_introComponents = [];
    firs_questionaire_introComponents.push(text_47);
    firs_questionaire_introComponents.push(text_48);
    firs_questionaire_introComponents.push(BMRQ_answer);
    firs_questionaire_introComponents.push(image_6);
    
    firs_questionaire_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function firs_questionaire_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'firs_questionaire_intro' ---
    // get current time
    t = firs_questionaire_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_47* updates
    if (t >= 0.0 && text_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_47.tStart = t;  // (not accounting for frame time here)
      text_47.frameNStart = frameN;  // exact frame index
      
      text_47.setAutoDraw(true);
    }

    
    // *text_48* updates
    if (t >= 0.0 && text_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_48.tStart = t;  // (not accounting for frame time here)
      text_48.frameNStart = frameN;  // exact frame index
      
      text_48.setAutoDraw(true);
    }

    
    // *BMRQ_answer* updates
    if (t >= 0.0 && BMRQ_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BMRQ_answer.tStart = t;  // (not accounting for frame time here)
      BMRQ_answer.frameNStart = frameN;  // exact frame index
      
      BMRQ_answer.setAutoDraw(true);
    }

    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }

    if (BMRQ_answer.getRating() !== undefined) {
        keys= psychoJS.eventManager.getKeys({keyList: ['space']});
        if (keys.length > 0) {
            continueRoutine= false;
        }
    }else{
        event.clearEvents();
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    firs_questionaire_introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function firs_questionaire_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'firs_questionaire_intro' ---
    firs_questionaire_introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('BMRQ_answer.response', BMRQ_answer.getRating());
    psychoJS.experiment.addData('BMRQ_answer.rt', BMRQ_answer.getRT());
    // the Routine "firs_questionaire_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var welcome1Components;
function welcome1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome1' ---
    t = 0;
    welcome1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    welcome1Components = [];
    welcome1Components.push(text_23);
    welcome1Components.push(key_resp_6);
    
    welcome1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome1' ---
    // get current time
    t = welcome1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_23* updates
    if (t >= 0.0 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome1' ---
    welcome1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "welcome1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp1_allKeys;
var welcomwComponents;
function welcomwRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcomw' ---
    t = 0;
    welcomwClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp1.keys = undefined;
    key_resp1.rt = undefined;
    _key_resp1_allKeys = [];
    // keep track of which components have finished
    welcomwComponents = [];
    welcomwComponents.push(text_21);
    welcomwComponents.push(key_resp1);
    
    welcomwComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomwRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcomw' ---
    // get current time
    t = welcomwClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_21* updates
    if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }

    
    // *key_resp1* updates
    if (t >= 0.0 && key_resp1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp1.tStart = t;  // (not accounting for frame time here)
      key_resp1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp1.clearEvents(); });
    }

    if (key_resp1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp1_allKeys = _key_resp1_allKeys.concat(theseKeys);
      if (_key_resp1_allKeys.length > 0) {
        key_resp1.keys = _key_resp1_allKeys[_key_resp1_allKeys.length - 1].name;  // just the last key pressed
        key_resp1.rt = _key_resp1_allKeys[_key_resp1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomwComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomwRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcomw' ---
    welcomwComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp1.corr, level);
    }
    psychoJS.experiment.addData('key_resp1.keys', key_resp1.keys);
    if (typeof key_resp1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp1.rt', key_resp1.rt);
        routineTimer.reset();
        }
    
    key_resp1.stop();
    // the Routine "welcomw" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_10_allKeys;
var volumeComponents;
function volumeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'volume' ---
    t = 0;
    volumeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    volumeComponents = [];
    volumeComponents.push(text_26);
    volumeComponents.push(key_resp_10);
    
    volumeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function volumeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'volume' ---
    // get current time
    t = volumeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_26* updates
    if (t >= 0.0 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    volumeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function volumeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'volume' ---
    volumeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "volume" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_ressp2_allKeys;
var volume_settingComponents;
function volume_settingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'volume_setting' ---
    t = 0;
    volume_settingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    volume_set.setVolume(1.0);
    key_ressp2.keys = undefined;
    key_ressp2.rt = undefined;
    _key_ressp2_allKeys = [];
    // keep track of which components have finished
    volume_settingComponents = [];
    volume_settingComponents.push(volume_set);
    volume_settingComponents.push(key_ressp2);
    volume_settingComponents.push(text_27);
    
    volume_settingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function volume_settingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'volume_setting' ---
    // get current time
    t = volume_settingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop volume_set
    if (t >= 0.0 && volume_set.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      volume_set.tStart = t;  // (not accounting for frame time here)
      volume_set.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ volume_set.play(); });  // screen flip
      volume_set.status = PsychoJS.Status.STARTED;
    }
    if (t >= (volume_set.getDuration() + volume_set.tStart)     && volume_set.status === PsychoJS.Status.STARTED) {
      volume_set.stop();  // stop the sound (if longer than duration)
      volume_set.status = PsychoJS.Status.FINISHED;
    }
    
    // *key_ressp2* updates
    if (t >= 0.0 && key_ressp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_ressp2.tStart = t;  // (not accounting for frame time here)
      key_ressp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_ressp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_ressp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_ressp2.clearEvents(); });
    }

    if (key_ressp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_ressp2.getKeys({keyList: ['space'], waitRelease: false});
      _key_ressp2_allKeys = _key_ressp2_allKeys.concat(theseKeys);
      if (_key_ressp2_allKeys.length > 0) {
        key_ressp2.keys = _key_ressp2_allKeys[_key_ressp2_allKeys.length - 1].name;  // just the last key pressed
        key_ressp2.rt = _key_ressp2_allKeys[_key_ressp2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    volume_settingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function volume_settingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'volume_setting' ---
    volume_settingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    volume_set.stop();  // ensure sound has stopped at end of routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_ressp2.corr, level);
    }
    psychoJS.experiment.addData('key_ressp2.keys', key_ressp2.keys);
    if (typeof key_ressp2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_ressp2.rt', key_ressp2.rt);
        routineTimer.reset();
        }
    
    key_ressp2.stop();
    // the Routine "volume_setting" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var instructions_2Components;
function instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_2' ---
    t = 0;
    instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    instructions_2Components = [];
    instructions_2Components.push(text_24);
    instructions_2Components.push(key_resp_9);
    
    instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_2' ---
    // get current time
    t = instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_2' ---
    instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var Instructions_0Components;
function Instructions_0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions_0' ---
    t = 0;
    Instructions_0Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Instructions_0Components = [];
    Instructions_0Components.push(text_37);
    Instructions_0Components.push(key_resp_3);
    
    Instructions_0Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions_0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_0' ---
    // get current time
    t = Instructions_0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_37* updates
    if (t >= 0.0 && text_37.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_37.tStart = t;  // (not accounting for frame time here)
      text_37.frameNStart = frameN;  // exact frame index
      
      text_37.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions_0Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_0' ---
    Instructions_0Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Instructions_0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp1_2_allKeys;
var Instructions_task_1Components;
function Instructions_task_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions_task_1' ---
    t = 0;
    Instructions_task_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp1_2.keys = undefined;
    key_resp1_2.rt = undefined;
    _key_resp1_2_allKeys = [];
    // keep track of which components have finished
    Instructions_task_1Components = [];
    Instructions_task_1Components.push(text_22);
    Instructions_task_1Components.push(key_resp1_2);
    
    Instructions_task_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions_task_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_task_1' ---
    // get current time
    t = Instructions_task_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }

    
    // *key_resp1_2* updates
    if (t >= 0.0 && key_resp1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp1_2.tStart = t;  // (not accounting for frame time here)
      key_resp1_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp1_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp1_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp1_2.clearEvents(); });
    }

    if (key_resp1_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp1_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp1_2_allKeys = _key_resp1_2_allKeys.concat(theseKeys);
      if (_key_resp1_2_allKeys.length > 0) {
        key_resp1_2.keys = _key_resp1_2_allKeys[_key_resp1_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp1_2.rt = _key_resp1_2_allKeys[_key_resp1_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions_task_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_task_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_task_1' ---
    Instructions_task_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp1_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp1_2.keys', key_resp1_2.keys);
    if (typeof key_resp1_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp1_2.rt', key_resp1_2.rt);
        routineTimer.reset();
        }
    
    key_resp1_2.stop();
    // the Routine "Instructions_task_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp1_3_allKeys;
var Intructions_task2Components;
function Intructions_task2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intructions_task2' ---
    t = 0;
    Intructions_task2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp1_3.keys = undefined;
    key_resp1_3.rt = undefined;
    _key_resp1_3_allKeys = [];
    // keep track of which components have finished
    Intructions_task2Components = [];
    Intructions_task2Components.push(text_25);
    Intructions_task2Components.push(key_resp1_3);
    
    Intructions_task2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Intructions_task2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intructions_task2' ---
    // get current time
    t = Intructions_task2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }

    
    // *key_resp1_3* updates
    if (t >= 0.0 && key_resp1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp1_3.tStart = t;  // (not accounting for frame time here)
      key_resp1_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp1_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp1_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp1_3.clearEvents(); });
    }

    if (key_resp1_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp1_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp1_3_allKeys = _key_resp1_3_allKeys.concat(theseKeys);
      if (_key_resp1_3_allKeys.length > 0) {
        key_resp1_3.keys = _key_resp1_3_allKeys[_key_resp1_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp1_3.rt = _key_resp1_3_allKeys[_key_resp1_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Intructions_task2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intructions_task2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intructions_task2' ---
    Intructions_task2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp1_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp1_3.keys', key_resp1_3.keys);
    if (typeof key_resp1_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp1_3.rt', key_resp1_3.rt);
        routineTimer.reset();
        }
    
    key_resp1_3.stop();
    // the Routine "Intructions_task2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_11_allKeys;
var ready_Components;
function ready_RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ready_' ---
    t = 0;
    ready_Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    ready_Components = [];
    ready_Components.push(text_28);
    ready_Components.push(key_resp_11);
    
    ready_Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ready_RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ready_' ---
    // get current time
    t = ready_Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_28* updates
    if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_28.tStart = t;  // (not accounting for frame time here)
      text_28.frameNStart = frameN;  // exact frame index
      
      text_28.setAutoDraw(true);
    }

    
    // *key_resp_11* updates
    if (t >= 0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ready_Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ready_RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ready_' ---
    ready_Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "ready_" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_12_allKeys;
var ready_2Components;
function ready_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ready_2' ---
    t = 0;
    ready_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    ready_2Components = [];
    ready_2Components.push(text_29);
    ready_2Components.push(key_resp_12);
    
    ready_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ready_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ready_2' ---
    // get current time
    t = ready_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_29* updates
    if (t >= 0.0 && text_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_29.tStart = t;  // (not accounting for frame time here)
      text_29.frameNStart = frameN;  // exact frame index
      
      text_29.setAutoDraw(true);
    }

    
    // *key_resp_12* updates
    if (t >= 0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ready_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ready_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ready_2' ---
    ready_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "ready_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_18_allKeys;
var ready_loopComponents;
function ready_loopRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ready_loop' ---
    t = 0;
    ready_loopClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    // keep track of which components have finished
    ready_loopComponents = [];
    ready_loopComponents.push(text_36);
    ready_loopComponents.push(key_resp_18);
    
    ready_loopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ready_loopRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ready_loop' ---
    // get current time
    t = ready_loopClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_36* updates
    if (t >= 0.0 && text_36.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_36.tStart = t;  // (not accounting for frame time here)
      text_36.frameNStart = frameN;  // exact frame index
      
      text_36.setAutoDraw(true);
    }

    
    // *key_resp_18* updates
    if (t >= 0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
    }

    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ready_loopComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ready_loopRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ready_loop' ---
    ready_loopComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_18.corr, level);
    }
    psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
    if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
        routineTimer.reset();
        }
    
    key_resp_18.stop();
    // the Routine "ready_loop" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var offline_listeningComponents;
function offline_listeningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'offline_listening' ---
    t = 0;
    offline_listeningClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(172.000000);
    // update component parameters for each repeat
    learning = new sound.Sound({
    win: psychoJS.window,
    value: audio_offline,
    secs: 172,
    });
    learning.secs=172;
    learning.setVolume(1.0);
    // keep track of which components have finished
    offline_listeningComponents = [];
    offline_listeningComponents.push(learning);
    offline_listeningComponents.push(text_19);
    
    offline_listeningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function offline_listeningRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'offline_listening' ---
    // get current time
    t = offline_listeningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop learning
    if (t >= 0 && learning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      learning.tStart = t;  // (not accounting for frame time here)
      learning.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ learning.play(); });  // screen flip
      learning.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0 + 172 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (learning.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (172 > 0.5) {
        learning.stop();  // stop the sound (if longer than duration)
      }
      learning.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }

    frameRemains = 0.0 + 172 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_19.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    offline_listeningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function offline_listeningRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'offline_listening' ---
    offline_listeningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    learning.stop();  // ensure sound has stopped at end of routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp1_4_allKeys;
var Task_1Components;
function Task_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Task_1' ---
    t = 0;
    Task_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp1_4.keys = undefined;
    key_resp1_4.rt = undefined;
    _key_resp1_4_allKeys = [];
    // keep track of which components have finished
    Task_1Components = [];
    Task_1Components.push(text_31);
    Task_1Components.push(key_resp1_4);
    
    Task_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Task_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Task_1' ---
    // get current time
    t = Task_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_31* updates
    if (t >= 0.0 && text_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_31.tStart = t;  // (not accounting for frame time here)
      text_31.frameNStart = frameN;  // exact frame index
      
      text_31.setAutoDraw(true);
    }

    
    // *key_resp1_4* updates
    if (t >= 0.0 && key_resp1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp1_4.tStart = t;  // (not accounting for frame time here)
      key_resp1_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp1_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp1_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp1_4.clearEvents(); });
    }

    if (key_resp1_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp1_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp1_4_allKeys = _key_resp1_4_allKeys.concat(theseKeys);
      if (_key_resp1_4_allKeys.length > 0) {
        key_resp1_4.keys = _key_resp1_4_allKeys[_key_resp1_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp1_4.rt = _key_resp1_4_allKeys[_key_resp1_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Task_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Task_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Task_1' ---
    Task_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp1_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp1_4.keys', key_resp1_4.keys);
    if (typeof key_resp1_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp1_4.rt', key_resp1_4.rt);
        routineTimer.reset();
        }
    
    key_resp1_4.stop();
    // the Routine "Task_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cond;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_2.setText(cond);
    // Run 'Begin Routine' code from code_2
    if (expInfo['group'] == "A") {
        cond = condA;
    } else { 
        cond = condB;
    }
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_2);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _syllable_catch_allKeys;
var time;
var sequencesComponents;
function sequencesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'sequences' ---
    t = 0;
    sequencesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.664000);
    // update component parameters for each repeat
    seqs = new sound.Sound({
    win: psychoJS.window,
    value: dirs,
    secs: 2.664,
    });
    seqs.secs=2.664;
    seqs.setVolume(1.0);
    syllable_catch.keys = undefined;
    syllable_catch.rt = undefined;
    _syllable_catch_allKeys = [];
    if (expInfo['group'] == "A") {
        time = timeA;
    } else { 
        time = timeB;
    }
    // keep track of which components have finished
    sequencesComponents = [];
    sequencesComponents.push(seqs);
    sequencesComponents.push(text_13);
    sequencesComponents.push(syllable_catch);
    
    sequencesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function sequencesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'sequences' ---
    // get current time
    t = sequencesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop seqs
    if (t >= 0.0 && seqs.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seqs.tStart = t;  // (not accounting for frame time here)
      seqs.frameNStart = frameN;  // exact frame index
      
      seqs.play();  // start the sound (it finishes automatically)
      seqs.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.0 + 2.664 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (seqs.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (2.664 > 0.5) {
        seqs.stop();  // stop the sound (if longer than duration)
      }
      seqs.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.664 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
    }
    
    if (text_13.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_13.setColor(new util.Color(colour), false);
      text_13.setText(cond, false);
    }
    
    // *syllable_catch* updates
    if (t >= 0.0 && syllable_catch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      syllable_catch.tStart = t;  // (not accounting for frame time here)
      syllable_catch.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      syllable_catch.clock.reset();
      syllable_catch.start();
      syllable_catch.clearEvents();
    }

    frameRemains = 0.0 + 2.664 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (syllable_catch.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      syllable_catch.status = PsychoJS.Status.FINISHED;
  }

    if (syllable_catch.status === PsychoJS.Status.STARTED) {
      let theseKeys = syllable_catch.getKeys({keyList: ['space'], waitRelease: false});
      _syllable_catch_allKeys = _syllable_catch_allKeys.concat(theseKeys);
      if (_syllable_catch_allKeys.length > 0) {
        syllable_catch.keys = _syllable_catch_allKeys.map((key) => key.name);  // storing all keys
        syllable_catch.rt = _syllable_catch_allKeys.map((key) => key.rt);
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    sequencesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function sequencesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'sequences' ---
    sequencesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    seqs.stop();  // ensure sound has stopped at end of routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(syllable_catch.corr, level);
    }
    psychoJS.experiment.addData('syllable_catch.keys', syllable_catch.keys);
    if (typeof syllable_catch.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('syllable_catch.rt', syllable_catch.rt);
        }
    
    syllable_catch.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp4_allKeys;
var test_instructionsComponents;
function test_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_instructions' ---
    t = 0;
    test_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp4.keys = undefined;
    key_resp4.rt = undefined;
    _key_resp4_allKeys = [];
    // keep track of which components have finished
    test_instructionsComponents = [];
    test_instructionsComponents.push(text_12);
    test_instructionsComponents.push(key_resp4);
    
    test_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function test_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_instructions' ---
    // get current time
    t = test_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    
    // *key_resp4* updates
    if (t >= 0.0 && key_resp4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp4.tStart = t;  // (not accounting for frame time here)
      key_resp4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp4.clearEvents(); });
    }

    if (key_resp4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp4_allKeys = _key_resp4_allKeys.concat(theseKeys);
      if (_key_resp4_allKeys.length > 0) {
        key_resp4.keys = _key_resp4_allKeys[_key_resp4_allKeys.length - 1].name;  // just the last key pressed
        key_resp4.rt = _key_resp4_allKeys[_key_resp4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    test_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_instructions' ---
    test_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp4.corr, level);
    }
    psychoJS.experiment.addData('key_resp4.keys', key_resp4.keys);
    if (typeof key_resp4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp4.rt', key_resp4.rt);
        routineTimer.reset();
        }
    
    key_resp4.stop();
    // the Routine "test_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var test_instructions2Components;
function test_instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_instructions2' ---
    t = 0;
    test_instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    test_instructions2Components = [];
    test_instructions2Components.push(text_14);
    test_instructions2Components.push(key_resp_4);
    
    test_instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function test_instructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_instructions2' ---
    // get current time
    t = test_instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    test_instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_instructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_instructions2' ---
    test_instructions2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "test_instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var audioComponents;
function audioRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'audio' ---
    t = 0;
    audioClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.900000);
    // update component parameters for each repeat
    test_sounds = new sound.Sound({
    win: psychoJS.window,
    value: test,
    secs: 2.664,
    });
    test_sounds.secs=2.664;
    test_sounds.setVolume(1.0);
    // keep track of which components have finished
    audioComponents = [];
    audioComponents.push(test_sounds);
    audioComponents.push(text_17);
    
    audioComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function audioRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'audio' ---
    // get current time
    t = audioClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop test_sounds
    if (t >= 0.2 && test_sounds.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_sounds.tStart = t;  // (not accounting for frame time here)
      test_sounds.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ test_sounds.play(); });  // screen flip
      test_sounds.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.2 + 2.664 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (test_sounds.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (2.664 > 0.5) {
        test_sounds.stop();  // stop the sound (if longer than duration)
      }
      test_sounds.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_17.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    audioComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function audioRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'audio' ---
    audioComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    test_sounds.stop();  // ensure sound has stopped at end of routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Partz_no_partm_allKeys;
var question1Components;
function question1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'question1' ---
    t = 0;
    question1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Partz_no_partm.keys = undefined;
    Partz_no_partm.rt = undefined;
    _Partz_no_partm_allKeys = [];
    // keep track of which components have finished
    question1Components = [];
    question1Components.push(text_18);
    question1Components.push(Partz_no_partm);
    
    question1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function question1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'question1' ---
    // get current time
    t = question1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }

    
    // *Partz_no_partm* updates
    if (t >= 0.0 && Partz_no_partm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Partz_no_partm.tStart = t;  // (not accounting for frame time here)
      Partz_no_partm.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Partz_no_partm.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Partz_no_partm.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Partz_no_partm.clearEvents(); });
    }

    if (Partz_no_partm.status === PsychoJS.Status.STARTED) {
      let theseKeys = Partz_no_partm.getKeys({keyList: ['z', 'm'], waitRelease: false});
      _Partz_no_partm_allKeys = _Partz_no_partm_allKeys.concat(theseKeys);
      if (_Partz_no_partm_allKeys.length > 0) {
        Partz_no_partm.keys = _Partz_no_partm_allKeys[_Partz_no_partm_allKeys.length - 1].name;  // just the last key pressed
        Partz_no_partm.rt = _Partz_no_partm_allKeys[_Partz_no_partm_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    question1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function question1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'question1' ---
    question1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Partz_no_partm.corr, level);
    }
    psychoJS.experiment.addData('Partz_no_partm.keys', Partz_no_partm.keys);
    if (typeof Partz_no_partm.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Partz_no_partm.rt', Partz_no_partm.rt);
        routineTimer.reset();
        }
    
    Partz_no_partm.stop();
    // the Routine "question1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _security_1_7_allKeys;
var question_2Components;
function question_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'question_2' ---
    t = 0;
    question_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    security_1_7.keys = undefined;
    security_1_7.rt = undefined;
    _security_1_7_allKeys = [];
    // keep track of which components have finished
    question_2Components = [];
    question_2Components.push(text_32);
    question_2Components.push(image_2);
    question_2Components.push(text_33);
    question_2Components.push(security_1_7);
    
    question_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function question_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'question_2' ---
    // get current time
    t = question_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_32* updates
    if (t >= 0.0 && text_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_32.tStart = t;  // (not accounting for frame time here)
      text_32.frameNStart = frameN;  // exact frame index
      
      text_32.setAutoDraw(true);
    }

    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    
    // *text_33* updates
    if (t >= 0.0 && text_33.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_33.tStart = t;  // (not accounting for frame time here)
      text_33.frameNStart = frameN;  // exact frame index
      
      text_33.setAutoDraw(true);
    }

    
    // *security_1_7* updates
    if (t >= 0.0 && security_1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      security_1_7.tStart = t;  // (not accounting for frame time here)
      security_1_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { security_1_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { security_1_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { security_1_7.clearEvents(); });
    }

    if (security_1_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = security_1_7.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7'], waitRelease: false});
      _security_1_7_allKeys = _security_1_7_allKeys.concat(theseKeys);
      if (_security_1_7_allKeys.length > 0) {
        security_1_7.keys = _security_1_7_allKeys[_security_1_7_allKeys.length - 1].name;  // just the last key pressed
        security_1_7.rt = _security_1_7_allKeys[_security_1_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    question_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function question_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'question_2' ---
    question_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(security_1_7.corr, level);
    }
    psychoJS.experiment.addData('security_1_7.keys', security_1_7.keys);
    if (typeof security_1_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('security_1_7.rt', security_1_7.rt);
        routineTimer.reset();
        }
    
    security_1_7.stop();
    // the Routine "question_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_13_allKeys;
var Next_langaugeComponents;
function Next_langaugeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Next_langauge' ---
    t = 0;
    Next_langaugeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    Next_langaugeComponents = [];
    Next_langaugeComponents.push(text_30);
    Next_langaugeComponents.push(key_resp_13);
    
    Next_langaugeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Next_langaugeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Next_langauge' ---
    // get current time
    t = Next_langaugeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_30* updates
    if (t >= 0.0 && text_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_30.tStart = t;  // (not accounting for frame time here)
      text_30.frameNStart = frameN;  // exact frame index
      
      text_30.setAutoDraw(true);
    }

    
    // *key_resp_13* updates
    if (t >= 0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Next_langaugeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Next_langaugeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Next_langauge' ---
    Next_langaugeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "Next_langauge" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_19_allKeys;
var preguntas_rhytmosComponents;
function preguntas_rhytmosRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'preguntas_rhytmos' ---
    t = 0;
    preguntas_rhytmosClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_19.keys = undefined;
    key_resp_19.rt = undefined;
    _key_resp_19_allKeys = [];
    // keep track of which components have finished
    preguntas_rhytmosComponents = [];
    preguntas_rhytmosComponents.push(text_42);
    preguntas_rhytmosComponents.push(key_resp_19);
    
    preguntas_rhytmosComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function preguntas_rhytmosRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'preguntas_rhytmos' ---
    // get current time
    t = preguntas_rhytmosClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_42* updates
    if (t >= 0.0 && text_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_42.tStart = t;  // (not accounting for frame time here)
      text_42.frameNStart = frameN;  // exact frame index
      
      text_42.setAutoDraw(true);
    }

    
    // *key_resp_19* updates
    if (t >= 0.0 && key_resp_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_19.tStart = t;  // (not accounting for frame time here)
      key_resp_19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_19.clearEvents(); });
    }

    if (key_resp_19.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_19.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_19_allKeys = _key_resp_19_allKeys.concat(theseKeys);
      if (_key_resp_19_allKeys.length > 0) {
        key_resp_19.keys = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].name;  // just the last key pressed
        key_resp_19.rt = _key_resp_19_allKeys[_key_resp_19_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    preguntas_rhytmosComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preguntas_rhytmosRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'preguntas_rhytmos' ---
    preguntas_rhytmosComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_19.corr, level);
    }
    psychoJS.experiment.addData('key_resp_19.keys', key_resp_19.keys);
    if (typeof key_resp_19.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_19.rt', key_resp_19.rt);
        routineTimer.reset();
        }
    
    key_resp_19.stop();
    // the Routine "preguntas_rhytmos" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var questionComponents;
function questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'question' ---
    t = 0;
    questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(51.000000);
    // update component parameters for each repeat
    text_43.setText(pregunta);
    sound_5 = new sound.Sound({
    win: psychoJS.window,
    value: L1,
    secs: 10.65,
    });
    sound_5.secs=10.65;
    sound_5.setVolume(1.0);
    sound_6 = new sound.Sound({
    win: psychoJS.window,
    value: L2,
    secs: 10.65,
    });
    sound_6.secs=10.65;
    sound_6.setVolume(1.0);
    sound_7 = new sound.Sound({
    win: psychoJS.window,
    value: L3,
    secs: 10.65,
    });
    sound_7.secs=10.65;
    sound_7.setVolume(1.0);
    sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: L4,
    secs: 10.65,
    });
    sound_3.secs=10.65;
    sound_3.setVolume(1.0);
    // keep track of which components have finished
    questionComponents = [];
    questionComponents.push(text_43);
    questionComponents.push(sound_5);
    questionComponents.push(sound_6);
    questionComponents.push(sound_7);
    questionComponents.push(image_4);
    questionComponents.push(textbox_2);
    questionComponents.push(sound_3);
    questionComponents.push(textbox_4);
    questionComponents.push(textbox_5);
    questionComponents.push(textbox_6);
    
    questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'question' ---
    // get current time
    t = questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_43* updates
    if (t >= 0 && text_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_43.tStart = t;  // (not accounting for frame time here)
      text_43.frameNStart = frameN;  // exact frame index
      
      text_43.setAutoDraw(true);
    }

    frameRemains = 0 + 51 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_43.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_43.setAutoDraw(false);
    }
    // start/stop sound_5
    if (t >= 4 && sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_5.tStart = t;  // (not accounting for frame time here)
      sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_5.play(); });  // screen flip
      sound_5.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 4 + 10.65 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (10.65 > 0.5) {
        sound_5.stop();  // stop the sound (if longer than duration)
      }
      sound_5.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_6
    if (t >= 16 && sound_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_6.tStart = t;  // (not accounting for frame time here)
      sound_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_6.play(); });  // screen flip
      sound_6.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 16 + 10.65 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (10.65 > 0.5) {
        sound_6.stop();  // stop the sound (if longer than duration)
      }
      sound_6.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_7
    if (t >= 28 && sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_7.tStart = t;  // (not accounting for frame time here)
      sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_7.play(); });  // screen flip
      sound_7.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 28 + 10.65 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (10.65 > 0.5) {
        sound_7.stop();  // stop the sound (if longer than duration)
      }
      sound_7.status = PsychoJS.Status.FINISHED;
    }
    
    // *image_4* updates
    if (t >= 4 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    frameRemains = 4 + 47 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    
    // *textbox_2* updates
    if (t >= 4 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }

    frameRemains = 4 + 10.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textbox_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textbox_2.setAutoDraw(false);
    }
    // start/stop sound_3
    if (t >= 40 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 40 + 10.65 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (10.65 > 0.5) {
        sound_3.stop();  // stop the sound (if longer than duration)
      }
      sound_3.status = PsychoJS.Status.FINISHED;
    }
    
    // *textbox_4* updates
    if (t >= 16 && textbox_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_4.tStart = t;  // (not accounting for frame time here)
      textbox_4.frameNStart = frameN;  // exact frame index
      
      textbox_4.setAutoDraw(true);
    }

    frameRemains = 16 + 10.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textbox_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textbox_4.setAutoDraw(false);
    }
    
    // *textbox_5* updates
    if (t >= 28 && textbox_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_5.tStart = t;  // (not accounting for frame time here)
      textbox_5.frameNStart = frameN;  // exact frame index
      
      textbox_5.setAutoDraw(true);
    }

    frameRemains = 28 + 10.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textbox_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textbox_5.setAutoDraw(false);
    }
    
    // *textbox_6* updates
    if (t >= 40 && textbox_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_6.tStart = t;  // (not accounting for frame time here)
      textbox_6.frameNStart = frameN;  // exact frame index
      
      textbox_6.setAutoDraw(true);
    }

    frameRemains = 40 + 10.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textbox_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textbox_6.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    questionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'question' ---
    questionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    sound_5.stop();  // ensure sound has stopped at end of routine
    sound_6.stop();  // ensure sound has stopped at end of routine
    sound_7.stop();  // ensure sound has stopped at end of routine
    sound_3.stop();  // ensure sound has stopped at end of routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _complex_1_2_3_4_allKeys;
var question_answerComponents;
function question_answerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'question_answer' ---
    t = 0;
    question_answerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_44.setText(pregunta);
    complex_1_2_3_4.keys = undefined;
    complex_1_2_3_4.rt = undefined;
    _complex_1_2_3_4_allKeys = [];
    // keep track of which components have finished
    question_answerComponents = [];
    question_answerComponents.push(text_44);
    question_answerComponents.push(complex_1_2_3_4);
    question_answerComponents.push(text_45);
    
    question_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function question_answerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'question_answer' ---
    // get current time
    t = question_answerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_44* updates
    if (t >= 0 && text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_44.tStart = t;  // (not accounting for frame time here)
      text_44.frameNStart = frameN;  // exact frame index
      
      text_44.setAutoDraw(true);
    }

    
    // *complex_1_2_3_4* updates
    if (t >= 0.0 && complex_1_2_3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      complex_1_2_3_4.tStart = t;  // (not accounting for frame time here)
      complex_1_2_3_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { complex_1_2_3_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { complex_1_2_3_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { complex_1_2_3_4.clearEvents(); });
    }

    if (complex_1_2_3_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = complex_1_2_3_4.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _complex_1_2_3_4_allKeys = _complex_1_2_3_4_allKeys.concat(theseKeys);
      if (_complex_1_2_3_4_allKeys.length > 0) {
        complex_1_2_3_4.keys = _complex_1_2_3_4_allKeys[_complex_1_2_3_4_allKeys.length - 1].name;  // just the last key pressed
        complex_1_2_3_4.rt = _complex_1_2_3_4_allKeys[_complex_1_2_3_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_45* updates
    if (t >= 0.0 && text_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_45.tStart = t;  // (not accounting for frame time here)
      text_45.frameNStart = frameN;  // exact frame index
      
      text_45.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    question_answerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function question_answerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'question_answer' ---
    question_answerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(complex_1_2_3_4.corr, level);
    }
    psychoJS.experiment.addData('complex_1_2_3_4.keys', complex_1_2_3_4.keys);
    if (typeof complex_1_2_3_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('complex_1_2_3_4.rt', complex_1_2_3_4.rt);
        routineTimer.reset();
        }
    
    complex_1_2_3_4.stop();
    // the Routine "question_answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp6_allKeys;
var gracias_2Components;
function gracias_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'gracias_2' ---
    t = 0;
    gracias_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp6.keys = undefined;
    key_resp6.rt = undefined;
    _key_resp6_allKeys = [];
    // keep track of which components have finished
    gracias_2Components = [];
    gracias_2Components.push(text_40);
    gracias_2Components.push(key_resp6);
    
    gracias_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function gracias_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'gracias_2' ---
    // get current time
    t = gracias_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_40* updates
    if (t >= 0.0 && text_40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_40.tStart = t;  // (not accounting for frame time here)
      text_40.frameNStart = frameN;  // exact frame index
      
      text_40.setAutoDraw(true);
    }

    
    // *key_resp6* updates
    if (t >= 0.0 && key_resp6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp6.tStart = t;  // (not accounting for frame time here)
      key_resp6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp6.clearEvents(); });
    }

    if (key_resp6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp6_allKeys = _key_resp6_allKeys.concat(theseKeys);
      if (_key_resp6_allKeys.length > 0) {
        key_resp6.keys = _key_resp6_allKeys[_key_resp6_allKeys.length - 1].name;  // just the last key pressed
        key_resp6.rt = _key_resp6_allKeys[_key_resp6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    gracias_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gracias_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'gracias_2' ---
    gracias_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp6.corr, level);
    }
    psychoJS.experiment.addData('key_resp6.keys', key_resp6.keys);
    if (typeof key_resp6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp6.rt', key_resp6.rt);
        routineTimer.reset();
        }
    
    key_resp6.stop();
    // the Routine "gracias_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var text_11;
var comentarioComponents;
function comentarioRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'comentario' ---
    t = 0;
    comentarioClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    END_textbox.setText('');
    END_textbox.refresh();
    END_textbox.setText('');
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from code
    text_11 = new visual.TextStim({"win": psychoJS.window, "name": "text_11", "text": "Pulsa acqu\u00ec para terminar el experimento", "font": "Open Sans", "pos": [0, (- 0.3)], "height": 0.05, "wrapWidth": null, "ori": 0.0, "color": "black", "colorSpace": "rgb", "opacity": null, "bold": true, "languageStyle": "LTR", "depth": (- 2.0)});
    
    // keep track of which components have finished
    comentarioComponents = [];
    comentarioComponents.push(END_textbox);
    comentarioComponents.push(text_38);
    comentarioComponents.push(text_39);
    comentarioComponents.push(mouse);
    
    comentarioComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function comentarioRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'comentario' ---
    // get current time
    t = comentarioClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *END_textbox* updates
    if (t >= 0.0 && END_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      END_textbox.tStart = t;  // (not accounting for frame time here)
      END_textbox.frameNStart = frameN;  // exact frame index
      
      END_textbox.setAutoDraw(true);
    }

    
    // *text_38* updates
    if (t >= 0.0 && text_38.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_38.tStart = t;  // (not accounting for frame time here)
      text_38.frameNStart = frameN;  // exact frame index
      
      text_38.setAutoDraw(true);
    }

    
    // *text_39* updates
    if (t >= 0.0 && text_39.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_39.tStart = t;  // (not accounting for frame time here)
      text_39.frameNStart = frameN;  // exact frame index
      
      text_39.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [text_11]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    comentarioComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function comentarioRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'comentario' ---
    comentarioComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('END_textbox.text',END_textbox.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "comentario" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
