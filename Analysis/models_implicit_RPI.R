rm(list = ls())

setwd("C:/users/bianc/OneDrive - Universitat de Barcelona/GitHub/beat-perception-speech/Analysis/data_analysis_R")
output_dir <- "C:/users/bianc/OneDrive - Universitat de Barcelona/GitHub/beat-perception-speech/Analysis/output_analysis"


RPI<- read.csv("RPIs.csv", header = TRUE, sep = ",")


library(lme4)
library(readr)
library(ggplot2)
library(lmerTest)
library(car)
library(interactions)
library(dplyr)
library(interactions)
library(MuMIn)
library(MASS)
library(fitdistrplus)
library(writexl)
library(svglite)
library(ggpattern)


RPI$info_index<- as.numeric(RPI$info_index)
RPI$participant <- as.factor(RPI$participant)

RPI$BMRQ_score<- as.numeric(RPI$BMRQ_score)
RPI$music_exp<- as.factor(RPI$music_exp)
RPI$n_lang<-as.numeric(RPI$n_lang)
RPI$block<- as.numeric(RPI$block)
RPI$syllable <- as.factor(RPI$syllable)
RPI$music_use<- as.factor(RPI$music_use)
RPI$n_lang<-as.numeric(RPI$n_lang)
RPI$n_lang_used<- as.numeric(RPI$n_lang_used)
RPI$ability_learn_l2<- as.numeric(RPI$ability_learn_l2)
RPI$tendence_mix_lan<- as.numeric(RPI$tendence_mix_lan)
RPI$partiture<- as.factor(RPI$partiture)
RPI$sex<- as.factor(RPI$sex)
RPI$age<- as.numeric(RPI$age)
RPI$hand<- as.factor(RPI$hand)
RPI$expName<- as.factor(RPI$expName)
RPI$group<-as.factor(RPI$group)
RPI$meanRTs<- as.numeric(RPI$meanRTs)

#1. summary stats

RPI <- RPI %>%
  mutate(meanRTs_ms = meanRTs * 1000)

summary_stats <-RPI%>%
  group_by(condition, syllable) %>%
  get_summary_stats(meanRTs, type = "mean_sd")

output_path <- file.path(output_dir, "summary_stats_RPI_all.xlsx")


write_xlsx(summary_stats, output_path)

#2.  check of distribution

#fit a normal distribution to the data
fit_normal <- fitdistr(RPI$meanRTs, "normal")

# Print the fit results
print(fit_normal)

#plot histogram 
hist(RPI$meanRTs, breaks = 10, probability = TRUE, main = "Histogram of RTs with Normal Fit")
curve(dnorm(x, mean = fit_normal$estimate["mean"], sd = fit_normal$estimate["sd"]), col = "blue", lwd = 2, add = TRUE)

#Q-Q plot for normal distribution
qqnorm(RPI$meanRTs, main = "Q-Q Plot of RTs vs. Normal Distribution")
qqline(RPI$meanRTs, col = "red")

# Kolmogorov-Smirnov test 
ks_test_normal <- ks.test(RPI$meanRTs, "pnorm", mean = fit_normal$estimate["mean"], sd = fit_normal$estimate["sd"])
print(ks_test_normal)

# 3.  MODELS:fit with info index as winnin in Bayesian model testing

model <- lmer(meanRTs ~ info_index + (1 | participant), data = RPI)

# Summary of the model
summary(model)

# Extract residuals
residuals_lmm <- resid(model)

# Q-Q plot of residuals
qqnorm(residuals_lmm)
qqline(residuals_lmm, col = "red")

# Histogram of residuals
hist(residuals_lmm, breaks = 30, main = "Histogram of Residuals")

# add syllable as factor 
model1 <- lmer(meanRTs ~ info_index + syllable+(1 | participant), data = RPI)

# Summary of the model
summary(model1)

anova(model,model1)

#include the interaction: not signficant

model2 <- lmer(meanRTs ~ info_index*syllable+(1 | participant), data = RPI)


# Summary of the model
summary(model2)

anova(model1,model2)

# check other variables 

model3<- lmer(meanRTs ~ info_index+syllable +BMRQ_score+ (1 | participant), data = RPI)

summary(model3)

anova(model1,model3)

#continue with other variables


model2<- lmer(meanRTs ~ info_index+ sex+hand+(1 | participant), data = RPI)

summary(model2)

anova(model1,model2)

#4.  Visualization

# Compute means and 95% CI for each condition-target combination
RPI_summary <- RPI %>%
  group_by(condition, syllable) %>%
  summarise(
    mean_RT = mean(meanRTs_ms, na.rm = TRUE),
    SE = sd(meanRTs_ms, na.rm = TRUE) / sqrt(n()),
    CI = SE * 1.96,
    .groups = "drop"
  ) %>%
  mutate(
    syllable = dplyr::recode(as.character(syllable),
                             "A" = "RPI-a",
                             "C" = "RPI-c"),
    syllable = factor(syllable, levels = c("RPI-a", "RPI-c"))
  )

pd <- position_dodge(width = 0.60)   


ggplot(RPI_summary,
       aes(x       = factor(condition),
           y       = mean_RT,
           fill    = syllable,         
           pattern = syllable,         
           group   = syllable)) +      
  
  geom_bar_pattern(
    stat            = "identity",
    position        = pd,
    width           = 0.60,
    colour          = "black",
    pattern_fill    = "transparent",   
    pattern_colour  = "grey40",
    pattern_angle   = 45,
    pattern_density = 0.5,
    pattern_spacing = 0.04
  ) +
  
  geom_errorbar(aes(ymin = mean_RT - SE, ymax = mean_RT + SE),
                position = pd, width = 0.20, linewidth = 0.8,
                colour = "black") +
  geom_hline(yintercept = 0, linetype = "dotted", color = "gray30", linewidth = 0.8) +
  
  
  geom_line(aes(colour = syllable), position = pd, linetype = "longdash",linewidth = 0.8) +

  scale_fill_manual(values = c(
    "RPI-c" = "white",   
    "RPI-a" = "white"  
  )) +
  scale_pattern_manual(values = c(
    "RPI-c" = "none",    
    "RPI-a" = "stripe"   
  )) +
  scale_colour_manual(values = c(      
    "RPI-a" = "black",
    "RPI-c" = "black"
  )) +
  
  labs(x       = NULL,
       y       = "RPIs (ms)",
       fill    = "RPI",
       pattern = "RPI",
       colour  = "RPI",
       ) +
  
  coord_cartesian(ylim = c(-12, 75)) +
  theme_classic(base_size = 16) +
  theme(
    legend.position = c(0.12, 0.88),
    legend.title    = element_text(size = 18),
    legend.text     = element_text(size = 16),
    axis.text.x     = element_text(size = 18, colour = "black"),
    axis.text.y     = element_text(size = 18, colour = "black"),
    axis.title      = element_text(size = 16)
  )


#coloursç

pd <- position_dodge(width = 0.60)   

ggplot(RPI_summary,
       aes(x     = factor(condition),
           y     = mean_RT,
           fill  = syllable,    # fill by syllable
           group = syllable)) +      
  
  geom_bar(stat     = "identity",
           position = pd,
           width    = 0.60,
           colour   = "black",
           alpha= 0.6) +   # keep black outline
  
  geom_errorbar(aes(ymin = mean_RT - SE, ymax = mean_RT + SE),
                position = pd, width = 0.20, linewidth = 0.8,
                colour = "black") +
  
  geom_hline(yintercept = 0, linetype = "dotted", 
             color = "gray30", linewidth = 0.8) +
  
  geom_line(aes(colour = syllable), 
            position = pd, linetype = "longdash", linewidth = 0.8) +
  
  # solid fills for bars
  scale_fill_manual(values = c(
    "RPI-a" = "#B71D3E", 
    "RPI-c" = "#3C8200"
  )) +
  

  
  scale_colour_manual(values = c(      
    "RPI-a" = "gray30", 
    "RPI-c" = "gray30"
  )) +
  
  labs(x      = NULL,
       y      = "RPIs (ms)",
       fill   = "RPI",
       colour = "RPI") +
  
  coord_cartesian(ylim = c(-12, 75)) +
  theme_classic(base_size = 16) +
  theme(
    legend.position = c(0.15, 0.88),
    legend.title    = element_text(size = 18),
    legend.text     = element_text(size = 16),
    axis.text.x     = element_text(size = 18, colour = "black"),
    axis.text.y     = element_text(size = 18, colour = "black"),
    axis.title      = element_text(size = 16)
  )

