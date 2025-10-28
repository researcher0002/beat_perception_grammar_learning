rm(list = ls())



setwd("C:/users/bianc/OneDrive - Universitat de Barcelona/GitHub/beat-perception-speech/Analysis/data_analysis_R")
output_dir <- "C:/users/bianc/OneDrive - Universitat de Barcelona/GitHub/beat-perception-speech/Analysis/output_analysis"

implicit<- read.csv("ImplicitTestData.csv", header = TRUE, sep = ",")


library(lme4)
library(readr)
library(ggplot2)
library(lmerTest)
library(interactions)
library(dplyr)
library(ggpubr)
library(rstatix)
library(fitdistrplus)
library(emmeans)
library(ggeffects)
library(writexl)
library(gghalves)


#prepare the variables
implicit$condition<- as.factor(implicit$condition)
implicit$info_index<- as.numeric(implicit$info_index)
implicit$syll_to_catch2 <- as.factor(implicit$syll_to_catch2)
implicit$beat_no_beat<-as.factor(implicit$beat_no_beat)

implicit$BMRQ_score<- as.numeric(implicit$BMRQ_score)
implicit$music_exp<- as.factor(implicit$music_exp)
implicit$music_use<- as.factor(implicit$music_use)
implicit$n_lang<-as.numeric(implicit$n_lang)
implicit$n_lang_used<- as.numeric(implicit$n_lang_used)
implicit$ability_learn_l2<- as.numeric(implicit$ability_learn_l2)
implicit$tendence_mix_lan<- as.numeric(implicit$tendence_mix_lan)
implicit$partiture<- as.factor(implicit$partiture)

implicit$order_trial_on<- as.numeric(implicit$order_trial_on)
implicit$participant<- as.factor(implicit$participant)
implicit$catch_rtsTR<- as.numeric(implicit$catch_rtsTR)

implicit$group<- as.factor(implicit$group)
implicit$sex<- as.factor(implicit$sex)
implicit$hand<- as.factor(implicit$hand)
implicit$age<- as.numeric(implicit$age)
implicit$block<- as.numeric(implicit$block)


# Create a new variable with substitutions
implicit$target <- gsub("X1|X2", "X", implicit$syll_to_catch2)
implicit$target<- as.factor(implicit$target)

#preliminary stats

#need to add by participant

implicit <- implicit %>%
  mutate(catch_rtsTR_ms = catch_rtsTR * 1000) #to ms

participant_means<- implicit %>%
  group_by(participant,condition, target) %>%
  summarize(catch_rtsTR_ms= mean(catch_rtsTR_ms), .groups = "drop")

# Step 2: Calculate summary statistics across participants
summary_stats <- participant_means %>%
  group_by(condition, target) %>%
  get_summary_stats(catch_rtsTR_ms, type = "mean_sd")


output_path <- file.path(output_dir, "summary_stats_RTs_x_merged.xlsx")

write_xlsx(summary_stats, output_path)

#set reference levels

implicit$condition <- relevel(implicit$condition, ref = "B")

implicit$syll_to_catch2 <- relevel(implicit$target, ref= "X")

#check the distribution 

# Fit a gamma distribution to the data
fit <- fitdistr(implicit$catch_rtsTR, "gamma")

# Plot histogram with fitted gamma density
hist(implicit$catch_rtsTR, breaks = 10, probability = TRUE, main = "Histogram of RTs with Gamma Fit")
curve(dgamma(x, shape = fit$estimate["shape"], rate = fit$estimate["rate"]), col = "blue", lwd = 2, add = TRUE)

# Q-Q plot
qqplot(implicit$catch_rtsTR, rgamma(length(implicit$catch_rtsTR), shape = fit$estimate["shape"], rate = fit$estimate["rate"]),
       main = "Q-Q Plot of RTs vs. Gamma Distribution")
abline(0, 1, col = "red")


#1. GLME model on RTs

#the data don't follow any specific distribution (due to thresholding probably), nevertheless this is the most
#similar one

model0<- glmer(catch_rtsTR ~  1+ (1 | participant), data = implicit,  family = Gamma(link = "log"),
               control = glmerControl(optimizer = 'bobyqa', optCtrl = list(maxfun=100000)))

model01<- glmer(catch_rtsTR ~ condition+ (1 | participant), data = implicit, family = Gamma(link = "log"),
                control = glmerControl(optimizer = 'bobyqa', optCtrl = list(maxfun=100000)))
summary(model01)


model1<-glmer(catch_rtsTR ~condition+ target +(1|participant), family = Gamma(link = "log"), 
                  data = implicit,control = glmerControl(optimizer = 'bobyqa', optCtrl = list(maxfun=100000)))

summary(model1)
anova(model01, model1)

model2<-glmer(catch_rtsTR ~condition*target +(1|participant), family = Gamma(link = "log"), 
              data = implicit,control = glmerControl(optimizer = 'bobyqa', optCtrl = list(maxfun=100000)))

summary(model2)

anova(model1,model2)


# check other variables 

model3<-glmer(catch_rtsTR ~ condition*target+partiture*condition +(1|participant), family = Gamma(link = "log"), 
              data = implicit,control = glmerControl(optimizer = 'bobyqa', optCtrl = list(maxfun=100000)))

summary(model3)

anova(model2, model3)



# 3. Visualizations

# 3.1 beat effect


beat_eff<-implicit[(implicit$condition != "R") & (implicit$target== "X"),]

beat_eff_summary <- implicit %>%
  filter(condition != "R", target == "X") %>%
  group_by(participant, beat_no_beat) %>%
  summarise(mean_rts = mean(catch_rtsTR_ms, na.rm = TRUE), .groups = "drop")

mean_summary <- beat_eff_summary %>%
  group_by(beat_no_beat) %>%
  summarise(mean_rt = mean(mean_rts, na.rm = TRUE), .groups = "drop")

mean_summary <- beat_eff_summary %>%
  group_by(beat_no_beat) %>%
  summarise(
    mean_rt = mean(mean_rts, na.rm = TRUE),
    se = sd(mean_rts, na.rm = TRUE) / sqrt(n()),
    n = n(),
    ci_lower = mean_rt - qt(0.975, df = n - 1) * se,
    ci_upper = mean_rt + qt(0.975, df = n - 1) * se,
    .groups = "drop"
  )

#half violin half dots



ggplot(beat_eff_summary,
       aes(x = beat_no_beat, y = mean_rts, fill = beat_no_beat)) +
  geom_line(aes(group=participant),color= "grey60", alpha=0.6,linewidth= 0.4)+
  geom_half_violin(side = "r", alpha = 0.6, color = NA) +
  geom_point(data = mean_summary,
             aes(x = beat_no_beat, y = mean_rt),
             shape = 23,  
             size = 4,
             fill = "black",
             color = "white",
             stroke = 1.2) +
  geom_line(data = mean_summary,
          aes(x = beat_no_beat, y = mean_rt, group = 1),
          color = "black",
          linewidth = 1)+
  geom_errorbar(data = mean_summary,
                aes(x = beat_no_beat, ymin = ci_lower, ymax = ci_upper),
                width = 0.15,
                inherit.aes = FALSE)+
  geom_half_point(
    side = "l",
    shape = 21,
    size = 2,
    alpha = 0.9,
    fill = "white",
    color = "black"
  ) +
  scale_fill_manual(values = c(
    "no_beat" = "grey80",   # light grey
    "beat"    = "grey20"    # dark grey
  )) +
  scale_x_discrete(
    labels = c("no_beat" = "No beat", "beat" = "Beat"),
    expand = expansion(mult = c(0, 0))
  ) +
  coord_cartesian(ylim = c(400, 1000)) +
  labs(x = NULL, y = "Mean RTs (ms)") +
  theme_minimal(base_size = 16) +
  theme(
    legend.position  = "none",
    panel.grid       = element_blank(),
    panel.background = element_blank(),
    plot.background  = element_blank(),
    axis.line        = element_line(color = "black"),
    axis.text        = element_text(size = 18, color = "black"),
    axis.title.y     = element_text(size = 18, margin = margin(r = 10))
  )


# 3.2 Interaction plot

implicit$target<- relevel(implicit$target, ref="X")

implicit_summary <- implicit %>%
  group_by(condition, target) %>%
  summarise(
    mean_RT = mean(catch_rtsTR_ms, na.rm = TRUE),
    SE = sd(catch_rtsTR_ms, na.rm = TRUE) / sqrt(n()),
    CI = SE * 1.96  
  ) %>%
  ungroup()

# Black white

pd <- position_dodge(0.2)  

ggplot(implicit_summary, aes(x = condition, y = mean_RT, group = target)) +
  geom_point(position = pd,
             shape = 16,            
             size  = 2.5) +  
  geom_line(aes(linetype = target), position = pd, linewidth = 0.8, color = "black") +  
  geom_errorbar(aes(ymin = mean_RT - SE, ymax = mean_RT + SE ), 
                position = pd, width = 0.1, linewidth = 0.8, color = "black") +  
  labs(x= NULL,
       y = "RTs (ms)",
       ) +
  theme_classic() +  
  scale_linetype_manual(values = c(
    "X" = "solid",
    "A" = "solid",
    "C"= "solid"
  ))+
  coord_cartesian(ylim = c(625, 695))+
  
  theme(
    legend.position = c(0.95, 0.90),  
    legend.text = element_text(size = 18),  
    legend.title = element_text(size = 16),
    axis.line        = element_line(color = "black", linewidth = 0.8),
    axis.text.x = element_text(size = 18, color = "black"),  
    axis.text.y = element_text(size = 18, color = "black"), 
    axis.title = element_text(size = 18)   
  ) 

# Colored
pd <- position_dodge(0.2)

ggplot(implicit_summary, aes(x = condition, y = mean_RT, group = target)) +
  geom_point(aes(color= target),         
             position= pd,
             shape= 16,            
             size= 2.5) +  
  geom_line(aes(linetype= target, color= target),  
            position= pd, linewidth= 0.8) +  
  geom_errorbar(aes(ymin = mean_RT - SE, ymax = mean_RT + SE, color = target), 
                position = pd, width = 0.1, linewidth = 0.8) +  
  labs(x= NULL, y = "RTs (ms)") +
  theme_classic() +  
  
  scale_linetype_manual(values = c(
    "X"= "solid",
    "A"= "solid",
    "C"= "solid"
  )) +
  
  scale_color_manual(values = c(
    "X" = "#434343",     # keep X black
    "A" = "#B71D3E",    # A orange
    "C" = "#3C8200"      # C green
 )) +
  
  coord_cartesian(ylim = c(625, 695)) +
  
  theme(
    legend.position = c(0.10, 0.90),  
    legend.text = element_text(size = 18),  
    legend.title = element_text(size = 16),
    axis.line = element_line(color = "black", linewidth = 0.8),
    axis.text.x = element_text(size = 18, color = "black"),  
    axis.text.y = element_text(size = 18, color = "black"), 
    axis.title  = element_text(size = 18)   
  )

# 4. Models of order of trials in supplementary material

implicit <- implicit %>%
  group_by(participant, condition) %>%
  mutate(new_order = row_number()) %>%
  ungroup()

implicit <- implicit %>%
  group_by(participant, condition) %>%
  mutate(new_order_scaled = scale(new_order)) %>%
  ungroup()


# lmer with order to assess learning in rule conditions (would need to show the A also)


conditions <-c( "B", "R","RB-", "RB+")

for (cond in conditions) {
  cat("\n--- Condition:", cond, "---\n")
  
  subset_data <- implicit[implicit$condition == cond, ]
  subset_data$target <- relevel(factor(subset_data$target), ref = "X")
  
  model0 <- lmer(catch_rtsTR~  new_order_scaled +
                   (1 | participant), 
                 data = subset_data, REML = FALSE,control = lmerControl(optimizer = 'bobyqa', optCtrl = list(maxfun=100000)))
  
  print(summary(model0))
  
  # Fit the mixed-effects model: Testing if `C` and `X` differ in their baseline RT
  model <- lmer(catch_rtsTR~ new_order_scaled + target +
                  (1 | participant), 
                data = subset_data, REML = FALSE,control = lmerControl(optimizer = 'bobyqa', optCtrl = list(maxfun=100000)))
  
  # Print the summary of the model
  print(summary(model))
  
  print(anova(model0, model))
  
  # Fit the mixed-effects model: Testing if `C` and `X` differ in their baseline RT
  model2 <- lmer(catch_rtsTR~ new_order_scaled *target +
                   (1 | participant), 
                 data = subset_data, REML = FALSE,control = lmerControl(optimizer = 'bobyqa', optCtrl = list(maxfun=100000)))
  
  # Print the summary of the model
  #print(summary(model2))
  
  print(anova(model, model2))
  
}




