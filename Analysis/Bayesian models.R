#Bayesian models for infromativeness index for accuracy and RPIs data

rm(list = ls())

setwd("D:/OneDrive - Universitat de Barcelona/GitHub/beat-perception-speech/Analysis/data_analysis_R")
output_dir <- "D:/OneDrive - Universitat de Barcelona/GitHub/beat-perception-speech/Analysis/output_analysis"

library(lme4)
library(readr)
library(ggplot2)
library(lmerTest)
library(car)
library(interactions)
library(dplyr)
library(MuMIn)
library(effectsize)
library(lsr)
library(tidyverse)
library(ggpubr)
library(rstatix)
library(ggpubr)
library(MASS)
library(fitdistrplus)
library(emmeans)
library(writexl)
library(brms)
library(loo)


# 1. RPI


RPI<- read.csv("RPIs.csv", header = TRUE, sep = ",")

RPI$info_index<- as.numeric(RPI$info_index)
RPI$participant <- as.factor(RPI$participant)
RPI$syllable<-as.factor(RPI$syllable)



# Get the different formalizations of RII (reference B=1; R=2; RB-= 3; RB+=4)

# RII_m1 1 vs. 2+3+4 : rule effect
RPI$info_1_234 <- ifelse(RPI$info_index == 1, 1, 2)

#RII_m2 : beat effect

RPI$info_134_2 <- ifelse(RPI$info_index == 2, 1, 2)


# RII_m3: rule and beat convergence only effect
RPI$info_123_4 <- ifelse(RPI$info_index == 4, 2, 1)


#RII_m4 : rule and beat only effect


RPI$info_12_34 <- ifelse(RPI$info_index <= 2, 1, 2)


#RII_m5: effect of rule and beat+ alignment


RPI$info_12_3_4<- ifelse(RPI$info_index <= 2, 1,
                         ifelse(RPI$info_index == 3, 2, 3))

#RII_m6: scaling of rule and beat, irrespective of alignment

RPI$info_1_2_34 <- ifelse(RPI$info_index == 1, 1,
                          ifelse(RPI$info_index == 2, 2, 3))
#RII_m7: misalignment as disrupting

RPI$info_1_23_4  <- ifelse(RPI$info_index == 1, 1,
                           ifelse(RPI$info_index %in% c(2, 3), 2, 3))

# RII_m8: misalignment as facilitating in comparison to R: info_index

RPI$info_index<- as.numeric(RPI$info_index)

#look at the Pareto-K 

#1.1 Models for all RPIs


# Baseline model (no informativeness)

model_baseline <- brm(meanRTs ~ 1 + (1 | participant),data = RPI, family = gaussian(link = "identity"))

model1 <- brm(meanRTs ~ info_1_234 + (1 | participant), data = RPI,family = gaussian(link = "identity"))

model2 <- brm(meanRTs ~ info_134_2 + (1 | participant), data = RPI,family = gaussian(link = "identity"))

model3 <- brm(meanRTs ~ info_123_4 + (1 | participant), data = RPI,family = gaussian(link = "identity"))

model4 <- brm(meanRTs ~ info_12_34 + (1 | participant), data = RPI,family = gaussian(link = "identity"))

model5<- brm(meanRTs ~ info_12_3_4 + (1 | participant), data = RPI,family = gaussian(link = "identity"))

model6<- brm(meanRTs ~ info_1_2_34 + (1 | participant), data = RPI,family = gaussian(link = "identity"))

model7<- brm(meanRTs ~ info_1_23_4 + (1 | participant), data = RPI,family = gaussian(link = "identity"))

model8<- brm(meanRTs ~ info_index + (1 | participant), data = RPI,family = gaussian(link = "identity"))


plot(model8)
pp_check(model7, ndraws = 50)

#warning aabout divergences check rhat

rhat_values <- rhat(model4)
summary(rhat_values) 

#all good

# Compute LOO for each model
loo_baseline <- loo(model_baseline)
loo1 <- loo(model1)
loo2 <- loo(model2)
loo3 <- loo(model3)
loo4 <- loo(model4)
loo5<-loo(model5)
loo6<- loo(model6)
loo7<-loo(model7)
loo8<-loo(model8)

# look here Pareto-k

plot(loo8)
plot(loo7)
plot(loo6)

summary(model8)


loos <- list(
  M8_BvsRvsRBminusvsRBplus=loo8,
  M7_BvsR_RBminusvsRBplus = loo7,
  M6_BvsRvsRBplus_RBminus = loo6,
  M5_B_R_vsRBminvsRBplus=loo5,
  M4_B_R_vsRBminus_RBplus=loo4,
  M3_B_R_RBminusvsRBplus=loo3,
  M2_R_vsB_RBplus_RBminus = loo2,
  M1_B_vs_R_RBplus_RBminus = loo1,
  model_baseline = loo_baseline
)


#extract the model weigths

model_weights_vec <- loo_model_weights(loos, method = "stacking")

#extract the max k as diagnostic of model

max_k <- sapply(loos, function(x) max(x$diagnostics$pareto_k))


# Perform model comparison
loo_comparison <- loo_compare(loos)

elpd_values <- data.frame(
  model = c("model_baseline", "M1_B_vs_R_RBplus_RBminus","M2_R_vsB_RBplus_RBminus","M3_B_R_RBminusvsRBplus", "M4_B_R_vsRBminus_RBplus","M5_B_R_vsRBminvsRBplus","M6_BvsRvsRBplus_RBminus", "M7_BvsR_RBminusvsRBplus", "M8_BvsRvsRBminusvsRBplus"),
  elpd_loo = c(loo_baseline$estimates["elpd_loo", "Estimate"],
               loo1$estimates["elpd_loo", "Estimate"],
               loo2$estimates["elpd_loo", "Estimate"],
               loo3$estimates["elpd_loo", "Estimate"],
               loo4$estimates["elpd_loo", "Estimate"],
               loo5$estimates["elpd_loo", "Estimate"],
               loo6$estimates["elpd_loo", "Estimate"],
               loo7$estimates["elpd_loo", "Estimate"],
               loo8$estimates["elpd_loo", "Estimate"]),
  
  se_loo = c(loo_baseline$estimates["elpd_loo", "SE"],
             loo1$estimates["elpd_loo","SE"],
             loo2$estimates["elpd_loo", "SE"],
             loo3$estimates["elpd_loo", "SE"],
             loo4$estimates["elpd_loo", "SE"],
             loo5$estimates["elpd_loo", "SE"],
             loo6$estimates["elpd_loo", "SE"],
             loo7$estimates["elpd_loo", "SE"],
             loo8$estimates["elpd_loo", "SE"])
)




delta_df <- as.data.frame(loo_comparison)
delta_df$model <- rownames(delta_df)

delta_df <- delta_df[, c("model", "elpd_diff", "se_diff")]
colnames(delta_df) <- c("model", "delta_elpd", "se_delta")

delta_df <- as.data.frame(loo_comparison)
delta_df$model <- rownames(delta_df)
delta_df <- delta_df[, c("model", "elpd_diff", "se_diff")]
colnames(delta_df) <- c("model", "delta_elpd", "se_delta")

# Merge by model name
elpd_values_final <- merge(elpd_values, delta_df, by = "model")

#add max k and weirghts
elpd_values_final$model_weight <- as.numeric(model_weights_vec[match(elpd_values_final$model, names(model_weights_vec))])
elpd_values_final$max_k <- as.numeric(max_k[match(elpd_values_final$model, names(max_k))])

elpd_values_final <- elpd_values_final[order(elpd_values_final$elpd_loo, decreasing = TRUE), ]
# Print result
print(elpd_values_final)

elpd_values_final <- elpd_values_final %>%
  mutate(across(where(is.numeric), ~ round(.x, 2)))

output_file <- file.path(output_dir, "LOO_RPI_ALL_info_index.xlsx")

# Save the file
write_xlsx(elpd_values_final, output_file)


#1.2 RPI-c

RPI_c<-RPI[(RPI$syllable == "C"),]

# check normality

# Fit a normal distribution to the data
fit_normal <- fitdistr(RPI_c$meanRTs, "normal")

# Print the fit results
print(fit_normal)

# Plot histogram with fitted normal density
hist(RPI_c$meanRTs, breaks = 10, probability = TRUE, main = "Histogram of RTs with Normal Fit")
curve(dnorm(x, mean = fit_normal$estimate["mean"], sd = fit_normal$estimate["sd"]), col = "blue", lwd = 2, add = TRUE)

# Q-Q plot for normal distribution
qqnorm(RPI_c$meanRTs, main = "Q-Q Plot of RTs vs. Normal Distribution")
qqline(RPI_c$meanRTs, col = "red")

# Shapiro-Wilk test for normality
shapiro_test <- shapiro.test(RPI_c$meanRTs)
print(shapiro_test)

# Kolmogorov-Smirnov test for normal distribution
ks_test_normal <- ks.test(RPI_c$meanRTs, "pnorm", mean = fit_normal$estimate["mean"], sd = fit_normal$estimate["sd"])
print(ks_test_normal)



model_baseline <- brm(meanRTs ~ 1 + (1 | participant),data = RPI_c, family = gaussian(link = "identity"))

model1 <- brm(meanRTs ~ info_1_234 + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

model2 <- brm(meanRTs ~ info_134_2 + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

model3 <- brm(meanRTs ~ info_123_4 + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

model4 <- brm(meanRTs ~ info_12_34 + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

model5<- brm(meanRTs ~ info_12_3_4 + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

model6<- brm(meanRTs ~ info_1_2_34 + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

model7<- brm(meanRTs ~ info_1_23_4 + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

model8<- brm(meanRTs ~ info_index + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

saveRDS(model8, file = file.path(output_dir_mod, "model8_RPI_c.rds"))

plot(model8)
pp_check(model8, ndraws = 50)
prior_summary(model8)


model8<- brm(meanRTs ~ info_index + (1 | participant), data = RPI_c,family = gaussian(link = "identity"))

model8 <- readRDS(file.path(output_dir_mod, "model8_RPI_c.rds"))

prior_summary(model8)
#warning aabout divergences check rhat

rhat_values <- rhat(model4)
summary(rhat_values) 

#all good


# Compute LOO for each model
loo_baseline <- loo(model_baseline)
loo1 <- loo(model1)
loo2 <- loo(model2)
loo3 <- loo(model3)
loo4 <- loo(model4)
loo5<-loo(model5)
loo6<- loo(model6)
loo7<-loo(model7)
loo8<-loo(model8)



loos <- list(
  M8_BvsRvsRBminusvsRBplus=loo8,
  M7_BvsR_RBminusvsRBplus = loo7,
  M6_BvsRvsRBplus_RBminus = loo6,
  M5_B_R_vsRBminvsRBplus=loo5,
  M4_B_R_vsRBminus_RBplus=loo4,
  M3_B_R_RBminusvsRBplus=loo3,
  M2_R_vsB_RBplus_RBminus = loo2,
  M1_B_vs_R_RBplus_RBminus = loo1,
  model_baseline = loo_baseline
)


#extract the model weigths

model_weights_vec <- loo_model_weights(loos, method = "stacking")

#extract the max k as diagnostic of model

max_k <- sapply(loos, function(x) max(x$diagnostics$pareto_k))


# Perform model comparison
loo_comparison <- loo_compare(loos)

elpd_values <- data.frame(
  model = c("model_baseline", "M1_B_vs_R_RBplus_RBminus","M2_R_vsB_RBplus_RBminus","M3_B_R_RBminusvsRBplus", "M4_B_R_vsRBminus_RBplus","M5_B_R_vsRBminvsRBplus","M6_BvsRvsRBplus_RBminus", "M7_BvsR_RBminusvsRBplus", "M8_BvsRvsRBminusvsRBplus"),
  elpd_loo = c(loo_baseline$estimates["elpd_loo", "Estimate"],
               loo1$estimates["elpd_loo", "Estimate"],
               loo2$estimates["elpd_loo", "Estimate"],
               loo3$estimates["elpd_loo", "Estimate"],
               loo4$estimates["elpd_loo", "Estimate"],
               loo5$estimates["elpd_loo", "Estimate"],
               loo6$estimates["elpd_loo", "Estimate"],
               loo7$estimates["elpd_loo", "Estimate"],
               loo8$estimates["elpd_loo", "Estimate"]),
  
  se_loo = c(loo_baseline$estimates["elpd_loo", "SE"],
             loo1$estimates["elpd_loo","SE"],
             loo2$estimates["elpd_loo", "SE"],
             loo3$estimates["elpd_loo", "SE"],
             loo4$estimates["elpd_loo", "SE"],
             loo5$estimates["elpd_loo", "SE"],
             loo6$estimates["elpd_loo", "SE"],
             loo7$estimates["elpd_loo", "SE"],
             loo8$estimates["elpd_loo", "SE"])
)




delta_df <- as.data.frame(loo_comparison)
delta_df$model <- rownames(delta_df)

delta_df <- delta_df[, c("model", "elpd_diff", "se_diff")]
colnames(delta_df) <- c("model", "delta_elpd", "se_delta")

delta_df <- as.data.frame(loo_comparison)
delta_df$model <- rownames(delta_df)
delta_df <- delta_df[, c("model", "elpd_diff", "se_diff")]
colnames(delta_df) <- c("model", "delta_elpd", "se_delta")

# Merge by model name
elpd_values_final <- merge(elpd_values, delta_df, by = "model")

#add max k and weirghts
elpd_values_final$model_weight <- as.numeric(model_weights_vec[match(elpd_values_final$model, names(model_weights_vec))])
elpd_values_final$max_k <- as.numeric(max_k[match(elpd_values_final$model, names(max_k))])

elpd_values_final <- elpd_values_final[order(elpd_values_final$elpd_loo, decreasing = TRUE), ]
# Print result
print(elpd_values_final)

elpd_values_final <- elpd_values_final %>%
  mutate(across(where(is.numeric), ~ round(.x, 2)))

output_file <- file.path(output_dir, "LOO_RPI_C_info_index.xlsx")

# Save the file
write_xlsx(elpd_values_final, output_file)


#1.3 RPI-a


RPI_a<-RPI[(RPI$syllable == "A"),]

# Fit a normal distribution to the data
fit_normal <- fitdistr(RPI_a$meanRTs, "normal")

# Print the fit results
print(fit_normal)

# Plot histogram with fitted normal density
hist(RPI_a$meanRTs, breaks = 10, probability = TRUE, main = "Histogram of RTs with Normal Fit")
curve(dnorm(x, mean = fit_normal$estimate["mean"], sd = fit_normal$estimate["sd"]), col = "blue", lwd = 2, add = TRUE)

# Q-Q plot for normal distribution
qqnorm(RPI_a$meanRTs, main = "Q-Q Plot of RTs vs. Normal Distribution")
qqline(RPI_a$meanRTs, col = "red")

# Shapiro-Wilk test for normality
shapiro_test <- shapiro.test(RPI_a$meanRTs)
print(shapiro_test)

# Kolmogorov-Smirnov test for normal distribution
ks_test_normal <- ks.test(RPI_a$meanRTs, "pnorm", mean = fit_normal$estimate["mean"], sd = fit_normal$estimate["sd"])
print(ks_test_normal)




model_baseline <- brm(meanRTs ~ 1 + (1 | participant),data = RPI_a, family = gaussian(link = "identity"))

model1 <- brm(meanRTs ~ info_1_234 + (1 | participant), data = RPI_a,family = gaussian(link = "identity"))

model2 <- brm(meanRTs ~ info_134_2 + (1 | participant), data = RPI_a,family = gaussian(link = "identity"))

model3 <- brm(meanRTs ~ info_123_4 + (1 | participant), data = RPI_a,family = gaussian(link = "identity"))

model4 <- brm(meanRTs ~ info_12_34 + (1 | participant), data = RPI_a,family = gaussian(link = "identity"))

model5<- brm(meanRTs ~ info_12_3_4 + (1 | participant), data = RPI_a,family = gaussian(link = "identity"))

model6<- brm(meanRTs ~ info_1_2_34 + (1 | participant), data = RPI_a,family = gaussian(link = "identity"))

model7<- brm(meanRTs ~ info_1_23_4 + (1 | participant), data = RPI_a,family = gaussian(link = "identity"))

model8<- brm(meanRTs ~ info_index + (1 | participant), data = RPI_a,family = gaussian(link = "identity"))

#warning aabout divergences check rhat

rhat_values <- rhat(model4)
summary(rhat_values) 

#all good

# Compute LOO for each model
loo_baseline <- loo(model_baseline)
loo1 <- loo(model1)
loo2 <- loo(model2)
loo3 <- loo(model3)
loo4 <- loo(model4)
loo5<-loo(model5)
loo6<- loo(model6)
loo7<-loo(model7)
loo8<-loo(model8)


loos <- list(
  M8_BvsRvsRBminusvsRBplus=loo8,
  M7_BvsR_RBminusvsRBplus = loo7,
  M6_BvsRvsRBplus_RBminus = loo6,
  M5_B_R_vsRBplusvsRBminus=loo5,
  M4_B_R_vsRBplus_RBminus=loo4,
  M3_B_R_RBminusvsRBplus=loo3,
  M2_R_vsB_RBplus_RBminus = loo2,
  M1_B_vs_R_RBplus_RBminus = loo1,
  model_baseline = loo_baseline
)

#extract the model weigths

model_weights_vec <- loo_model_weights(loos, method = "stacking")

#extract the max k as diagnostic of model

max_k <- sapply(loos, function(x) max(x$diagnostics$pareto_k))

# Perform model comparison
loo_comparison <- loo_compare(loos)

elpd_values <- data.frame(
  model = c("model_baseline", "M1_B_vs_R_RBplus_RBminus","M2_R_vsB_RBplus_RBminus","M3_B_R_RBminusvsRBplus", "M4_B_R_vsRBplus_RBminus","M5_B_R_vsRBplusvsRBminus","M6_BvsRvsRBplus_RBminus", "M7_BvsR_RBminusvsRBplus", "M8_BvsRvsRBminusvsRBplus"),
  elpd_loo = c(loo_baseline$estimates["elpd_loo", "Estimate"],
               loo1$estimates["elpd_loo", "Estimate"],
               loo2$estimates["elpd_loo", "Estimate"],
               loo3$estimates["elpd_loo", "Estimate"],
               loo4$estimates["elpd_loo", "Estimate"],
               loo5$estimates["elpd_loo", "Estimate"],
               loo6$estimates["elpd_loo", "Estimate"],
               loo7$estimates["elpd_loo", "Estimate"],
               loo8$estimates["elpd_loo", "Estimate"]),
  
  se_loo = c(loo_baseline$estimates["elpd_loo", "SE"],
             loo1$estimates["elpd_loo","SE"],
             loo2$estimates["elpd_loo", "SE"],
             loo3$estimates["elpd_loo", "SE"],
             loo4$estimates["elpd_loo", "SE"],
             loo5$estimates["elpd_loo", "SE"],
             loo6$estimates["elpd_loo", "SE"],
             loo7$estimates["elpd_loo", "SE"],
             loo8$estimates["elpd_loo", "SE"])
)


delta_df <- as.data.frame(loo_comparison)
delta_df$model <- rownames(delta_df)

delta_df <- delta_df[, c("model", "elpd_diff", "se_diff")]
colnames(delta_df) <- c("model", "delta_elpd", "se_delta")

delta_df <- as.data.frame(loo_comparison)
delta_df$model <- rownames(delta_df)
delta_df <- delta_df[, c("model", "elpd_diff", "se_diff")]
colnames(delta_df) <- c("model", "delta_elpd", "se_delta")

# Merge by model name
elpd_values_final <- merge(elpd_values, delta_df, by = "model")

#add max k and weirghts
elpd_values_final$model_weight <- as.numeric(model_weights_vec[match(elpd_values_final$model, names(model_weights_vec))])
elpd_values_final$max_k <- as.numeric(max_k[match(elpd_values_final$model, names(max_k))])

elpd_values_final <- elpd_values_final[order(elpd_values_final$elpd_loo, decreasing = TRUE), ]
# Print result
print(elpd_values_final)

elpd_values_final <- elpd_values_final %>%
  mutate(across(where(is.numeric), ~ round(.x, 2)))


output_file <- file.path(output_dir, "LOO_RPI_A_info_index.xlsx")

# Save the file
write_xlsx(elpd_values_final, output_file)



#2. ACCURACY

explicit<- read.csv("ExplicitTestData.csv", header = TRUE, sep = ",")

#prepare the variables
explicit$condition_off<- as.factor(explicit$condition_off)
explicit$conds_offline <- as.factor(explicit$conds_offline)
explicit$rule_norule<-as.factor(explicit$rule_norule)
explicit$language_off<- as.factor(explicit$language_off)
explicit$BMRQ_score<- as.numeric(explicit$BMRQ_score)
explicit$info_index<- as.numeric(explicit$info_index)

#ensure info:index in correct order

explicit$info_index <- factor(explicit$info_index, levels = 1:4)
explicit$info_index <- as.numeric(as.character(explicit$info_index))



explicit$info_1_234 <- ifelse(explicit$info_index == 1, 1, 2)

#RII_m2 : beat effect

explicit$info_134_2 <- ifelse(explicit$info_index == 2, 1, 2)


# RII_m3: rule and beat convergence only effect
explicit$info_123_4 <- ifelse(explicit$info_index == 4, 2, 1)


#RII_m4 : rule and beat only effect


explicit$info_12_34 <- ifelse(explicit$info_index <= 2, 1, 2)


#RII_m5: effect of rule and beat+ alignment


explicit$info_12_3_4<- ifelse(explicit$info_index <= 2, 1,
                         ifelse(explicit$info_index == 3, 2, 3))

#RII_m6: scaling of rule and beat, irrespective of alignment

explicit$info_1_2_34 <- ifelse(explicit$info_index == 1, 1,
                          ifelse(explicit$info_index == 2, 2, 3))
#RII_m7: misalignment as disrupting

explicit$info_1_23_4  <- ifelse(explicit$info_index == 1, 1,
                           ifelse(explicit$info_index %in% c(2, 3), 2, 3))

# RII_m8: misalignment as facilitating in comparison to R: info_index

explicit$info_index<- as.numeric(explicit$info_index)


# MODLES


# Baseline model (no informativeness)
model_baseline <- brm(accuracy ~ 1 + (1 | participant),
                      data = explicit, 
                      family = bernoulli(link = "logit"))

model1 <- brm(accuracy ~ info_1_234 + (1 | participant),
              data = explicit, 
              family = bernoulli(link = "logit"))

# Model for low (1, 2) vs. high (3, 4)
model2 <- brm(accuracy ~ info_134_2 + (1 | participant),
              data = explicit, 
              family = bernoulli(link = "logit"))

# Model for 1, 2 vs.3 vs. 4

model3 <- brm(accuracy ~ info_123_4  + (1 | participant),
              data = explicit, 
              family = bernoulli(link = "logit"))

model4<-  brm(accuracy ~ info_12_34  + (1 | participant),
              data = explicit, 
              family = bernoulli(link = "logit"))

model5<- brm(accuracy ~ info_12_3_4  + (1 | participant),
             data = explicit, 
             family = bernoulli(link = "logit"))

model6<-brm(accuracy ~ info_1_2_34  + (1 | participant),
            data = explicit, 
            family = bernoulli(link = "logit"))

model7<-brm(accuracy ~ info_1_23_4  + (1 | participant),
            data = explicit, 
            family = bernoulli(link = "logit"))

model8<-brm(accuracy ~ info_index  + (1 | participant),
            data = explicit, 
            family = bernoulli(link = "logit"))

#gae warnig of one divergent transition, check of rhat

rhat_values <- rhat(model3)
summary(rhat_values)  

#all good

# Compute LOO for each model
loo_baseline <- loo(model_baseline)
loo1 <- loo(model1)
loo2 <- loo(model2)
loo3 <- loo(model3)
loo4 <- loo(model4)
loo5<-loo(model5)
loo6<- loo(model6)
loo7<-loo(model7)
loo8<-loo(model8)



loos <- list(
  M8_BvsRvsRBminusvsRBplus=loo8,
  M7_BvsR_RBminusvsRBplus = loo7,
  M6_BvsRvsRBplus_RBminus = loo6,
  M5_B_R_vsRBminvsRBplus=loo5,
  M4_B_R_vsRBminus_RBplus=loo4,
  M3_B_R_RBminusvsRBplus=loo3,
  M2_R_vsB_RBplus_RBminus = loo2,
  M1_B_vs_R_RBplus_RBminus = loo1,
  model_baseline = loo_baseline
)


#extract the model weigths

model_weights_vec <- loo_model_weights(loos, method = "stacking")

#extract the max k as diagnostic of model

max_k <- sapply(loos, function(x) max(x$diagnostics$pareto_k))


# Perform model comparison
loo_comparison <- loo_compare(loos)

elpd_values <- data.frame(
  model = c("model_baseline", "M1_B_vs_R_RBplus_RBminus","M2_R_vsB_RBplus_RBminus","M3_B_R_RBminusvsRBplus", "M4_B_R_vsRBminus_RBplus","M5_B_R_vsRBminvsRBplus","M6_BvsRvsRBplus_RBminus", "M7_BvsR_RBminusvsRBplus", "M8_BvsRvsRBminusvsRBplus"),
  elpd_loo = c(loo_baseline$estimates["elpd_loo", "Estimate"],
               loo1$estimates["elpd_loo", "Estimate"],
               loo2$estimates["elpd_loo", "Estimate"],
               loo3$estimates["elpd_loo", "Estimate"],
               loo4$estimates["elpd_loo", "Estimate"],
               loo5$estimates["elpd_loo", "Estimate"],
               loo6$estimates["elpd_loo", "Estimate"],
               loo7$estimates["elpd_loo", "Estimate"],
               loo8$estimates["elpd_loo", "Estimate"]),
  
  se_loo = c(loo_baseline$estimates["elpd_loo", "SE"],
             loo1$estimates["elpd_loo","SE"],
             loo2$estimates["elpd_loo", "SE"],
             loo3$estimates["elpd_loo", "SE"],
             loo4$estimates["elpd_loo", "SE"],
             loo5$estimates["elpd_loo", "SE"],
             loo6$estimates["elpd_loo", "SE"],
             loo7$estimates["elpd_loo", "SE"],
             loo8$estimates["elpd_loo", "SE"])
)




delta_df <- as.data.frame(loo_comparison)
delta_df$model <- rownames(delta_df)

delta_df <- delta_df[, c("model", "elpd_diff", "se_diff")]
colnames(delta_df) <- c("model", "delta_elpd", "se_delta")

delta_df <- as.data.frame(loo_comparison)
delta_df$model <- rownames(delta_df)
delta_df <- delta_df[, c("model", "elpd_diff", "se_diff")]
colnames(delta_df) <- c("model", "delta_elpd", "se_delta")

# Merge by model name
elpd_values_final <- merge(elpd_values, delta_df, by = "model")

#add max k and weirghts
elpd_values_final$model_weight <- as.numeric(model_weights_vec[match(elpd_values_final$model, names(model_weights_vec))])
elpd_values_final$max_k <- as.numeric(max_k[match(elpd_values_final$model, names(max_k))])

elpd_values_final <- elpd_values_final[order(elpd_values_final$elpd_loo, decreasing = TRUE), ]
# Print result
print(elpd_values_final)

elpd_values_final <- elpd_values_final %>%
  mutate(across(where(is.numeric), ~ round(.x, 2)))

output_file <- file.path(output_dir, "LOO_ACCURACY_info_index.xlsx")

# Save the file
write_xlsx(elpd_values_final, output_file)

## visualize modls

cond_map <- c("B" = 1, "R" = 2, "RB-" = 3, "RB+" = 4)
conditions <- enframe(cond_map, name = "condition", value = "cond_code")

# ----- Build tidy grid of Model × Condition -----
models <- tibble(
  model = factor(paste0("M", 8:1), levels = paste0("M", 8:1))
)

design <- tidyr::crossing(models, conditions)
# ----- Map each model to its level -----
assign_level <- function(model, code){
  if (model == "M1") { ifelse(code == 1, 1, 2)
  } else if (model == "M2") { ifelse(code == 2, 1, 2)
  } else if (model == "M3") { ifelse(code == 4, 2, 1)
  } else if (model == "M4") { ifelse(code <= 2, 1, 2)
  } else if (model == "M5") { ifelse(code <= 2, 1, ifelse(code == 3, 2, 3))
  } else if (model == "M6") { ifelse(code == 1, 1, ifelse(code == 2, 2, 3))
  } else if (model == "M7") { ifelse(code == 1, 1, ifelse(code %in% c(2, 3), 2, 3))
  } else if (model == "M8") { code
  } else { NA_integer_ }
}

plot_df <- design %>%
  mutate(level = purrr::map2_int(as.character(model), cond_code, assign_level)) %>%
  mutate(condition = factor(condition, levels = names(cond_map)))

model_cols <- setNames(
  viridisLite::viridis(8, option = "C"),   # option "C" gives distinct bright tones
  levels(plot_df$model)
)

ggplot(plot_df, aes(x = condition, y = level, group = 1, color = model)) +
  geom_vline(xintercept = c(1.5, 2.5, 3.5), color = "grey70", linewidth = 0.4) +
  geom_line(linewidth = 1) +
  geom_point(size = 3, stroke = 0.9) +
  facet_grid(rows = vars(model), switch = "y") +
  scale_y_continuous(
    breaks = 1:4,
    limits = c(0.8, 4.2),
    expand = expansion(mult = c(0.08, 0.12)),
    position = "right"   # move y-axis ticks/labels to the right
  ) +
  scale_x_discrete(labels = c("B","R","RB-","RB+")) +
  scale_color_manual(values = model_cols, guide = "none") +
  labs(x = NULL, y = NULL) +
  theme_minimal(base_size = 14) +
  theme(
    strip.placement    = "outside",
    strip.text.y.left  = element_text(angle = 0, size = 18),
    panel.grid         = element_blank(),
    panel.spacing.y    = unit(0, "pt"),
    panel.border       = element_rect(color = "grey70", fill = NA, linewidth = 0.5),
    axis.text.x        = element_text(size = 18, colour = "black"),
    axis.text.y.right  = element_text(size = 13, colour = "black"), # right-side labels
    axis.text.y.left   = element_blank(),  # remove left labels
    axis.title         = element_blank()
  )

#geatmap

library(viridisLite) # for palette values only (base ggplot can use these)

# Reuse plot_df from above
heat_df <- plot_df

ggplot(heat_df, aes(x = condition, y = model, fill = factor(level))) +
  geom_tile(color = "white", linewidth = 0.4) +
  geom_text(aes(label = level), size = 5) +
  scale_fill_manual(
    name = "Level",
    values = viridisLite::viridis(n = length(unique(heat_df$level)), option = "D", begin = 0.1, end = 0.9)
  ) +
  theme_minimal(base_size = 18) +
  theme(
    legend.position = "right",
    panel.grid = element_blank(),
    axis.title.x = element_blank(),  
    axis.title.y = element_blank(),
    axis.text.x     = element_text(size = 18, colour = "black"),
    axis.text.y     = element_text(size = 18, colour = "black"),
  )


level_cols <- c(
  "1" = "#F3DA7D",  
  "2" = "#E9A061",  
  "3" = "#C2604F",  
  "4" = "#A13043"   
)

ggplot(heat_df, aes(x = condition, y = model, fill = factor(level))) +
  geom_tile(color = "white", linewidth = 0.4, alpha = 0.7) +
  geom_text(aes(label = level), size = 5) +
  scale_fill_manual(
    name = "Level",
    values = level_cols
  ) +
  theme_minimal(base_size = 18) +
  theme(
    legend.position = "right",          
    legend.justification = "top",   
    panel.grid = element_blank(),
    axis.title.x = element_blank(),
    axis.title.y = element_blank(),
    axis.text.x  = element_text(size = 18, colour = "black"),
    axis.text.y  = element_text(size = 18, colour = "black"),
    legend.text  = element_text(size = 18),
    legend.title = element_text(size = 18)
  )
