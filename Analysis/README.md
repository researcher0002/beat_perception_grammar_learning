## Analysis


### Codes:

- DATA_preparation_param_analysis.ipynb: Code used to organize the data and create the dataframes for modelling in R; clean the data based on 5th percentile threshold in hit accuracy in the implicit lerning task; perform parametric statistics (t-tests, anova) found in the manuscript; extract the Rule Predictability index for A and C (RPI).

- models_explicit.R : code for mixed effect models on Accuracy and Security level, as well as visualization plots that can be found in the paper (further modified in Figma)

- models_implict_RTs.R: code for mixed effect models on raw RTs, as well as plot found in the paper.

- models_implicit_RPI.R: code for mixed effect models and visualizations of Rule predictability indexes for both A and C syllables.

- Bayesian models.R: code for Bayesian model testing on Accuracy and RPIs.

### Folders:

- data_analysis_R: find the organized datasets for RTs, Accuracy and RPIs measures, obtained through DATA_preparation_param_analysis.ipynb and then used for model testing in R.

- output_analysis: Output .csv files with results of parametric statistics (obtained in DATA_preparation_param_analysis.ipynb), summary statistiscs and Bayesian models (obtained with .R scripts in this folder).
