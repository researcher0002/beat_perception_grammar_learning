
# BEHAVIORAL EXPLICITT MODELS
rm(list = ls())

setwd("C:/Users/bianc/OneDrive - Universitat de Barcelona/GitHub/beat-perception-speech/Analysis/data_analysis_R")
output_dir <- "C:/Users/bianc/OneDrive - Universitat de Barcelona/GitHub/beat-perception-speech/Analysis/output_analysis"


explicit<- read.csv("ExplicitTestData.csv", header = TRUE, sep = ",")



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
explicit$condition_off<- as.factor(explicit$condition_off)
explicit$conds_offline <- as.factor(explicit$conds_offline)
explicit$rule_norule<-as.factor(explicit$rule_norule)
explicit$language_off<- as.factor(explicit$language_off)
explicit$BMRQ_score<- as.numeric(explicit$BMRQ_score)
explicit$music_exp<- as.factor(explicit$music_exp)
explicit$n_lang<-as.numeric(explicit$n_lang)
explicit$n_lang_used<- as.numeric(explicit$n_lang_used)
explicit$ability_learn_l2<- as.numeric(explicit$ability_learn_l2)
explicit$tendence_mix_lan<- as.numeric(explicit$tendence_mix_lan)
explicit$partiture<- as.factor(explicit$partiture)
explicit$music_use<- as.factor(explicit$music_use)
explicit$info_index<- as.numeric(explicit$info_index)
explicit$conf_answer<- as.numeric(explicit$security_1_7.keys)
explicit$age<- as.numeric(explicit$age)
explicit$sex<- as.factor(explicit$sex)
explicit$education_level<- as.factor(explicit$education_level)
explicit$trial_order <- rep(1:24, length.out = nrow(explicit))
explicit$trial_order<- as.numeric(explicit$trial_order)
explicit$sec_rate_merged<- as.factor(explicit$sec_rate_merged)


#ensure info:index in correct order

explicit$info_index <- factor(explicit$info_index, levels = 1:4)
explicit$info_index <- as.numeric(as.character(explicit$info_index))

#set reference levels


# 1. ACCURACY 

#summary stats

participant_means<-explicit %>%
  group_by(participant,condition_off) %>%
  summarize(mean_accuracy = mean(accuracy), .groups = "drop")

# Step 2: Calculate summary statistics across participants
summary_stats <- participant_means %>%
  group_by(condition_off) %>%
  get_summary_stats(mean_accuracy, type = "mean_sd")


output_path <- file.path(output_dir, "summary_stats_ACC.xlsx")

write_xlsx(summary_stats, output_path)



#1.1 MODELS: ACCURACY logit link model with info index

mean_accuracy_df <- explicit %>%
  group_by(participant, condition_off) %>%
  summarise(
    mean_accuracy = mean(accuracy, na.rm = TRUE),
    n_trials = n(),                     # optional: number of trials per group
    .groups = "drop"
  )

m0<-glmer(accuracy ~ 1+ (1 | participant),
              data = explicit,
              family = binomial(link = "logit"))

#info_index that won bayesian model comaprisons

explicit$info_1_2_34 <- ifelse(explicit$info_index == 1, 1,
                               ifelse(explicit$info_index == 2, 2, 3))


m1 <- glmer(accuracy ~ info_1_2_34 + (1 | participant),
            data = explicit,
            family = binomial(link = "logit"))

summary(m1)

anova(m0, m1)

# test adding other variables

m2 <- glmer(accuracy ~  info_1_2_34 + partiture+(1 | participant),
                data = explicit,
                family = binomial(link = "logit"))

summary(m2)

anova(m1,m2)



# 1.3 Visualiations of mean accuracy

explicit_summary <- explicit %>%
  group_by(participant, info_index) %>%
  summarise(mean_accuracy = mean(accuracy, na.rm = TRUE)) %>%
  ungroup()


explicit_summary <- explicit_summary %>%
  mutate(info_index = ifelse(info_index == 4, 3, info_index))


ggplot(explicit_summary,
       aes(x = factor(info_index),
           y= mean_accuracy,
           fill = factor(info_index),   
           colour= factor(info_index)))+  
  geom_half_violin(side = "r", alpha = 0.8,
                   fill = "gray", colour = NA) +
  
  geom_half_point(side   = "l",
                  shape  = 21,  
                  size   = 2,
                  alpha  = 0.9,
                  stroke = 0.7) +
  
  stat_summary(fun = mean, geom = "point", size = 2, colour = "black") +
  stat_summary(fun = mean, geom = "line", aes(group = 1),
               colour = "black", linewidth = 1) +
  
  geom_hline(yintercept = 0.5, linetype = "dashed",
             colour = "gray40", linewidth = 0.8) +
  
  scale_x_discrete(labels = c("B", "R", "RB-/RB+")) +
  
  scale_fill_manual(values = c(
    `1` = "white",
    `2` = "gray",
    `3` = "gray"
  )) +
  scale_colour_manual(values = c(
    `1` = "black",
    `2` = "transparent",  
    `3` = "black"
  )) +
  
  labs(x = NULL, y = "Mean Accuracy") +
  theme(
    legend.position  = "none",
    panel.grid       = element_blank(),
    panel.background = element_blank(),
    plot.background  = element_blank(),
    axis.line        = element_line(color = "black", linewidth = 0.8),
    axis.text        = element_text(size = 18, color = "black"),
    axis.title.y     = element_text(size = 18, margin = margin(r = 10)),
    #plot.margin      = margin(t = 10, r = 50, b = 10, l = 50)
  )

# Colors

ggplot(explicit_summary,
       aes(x= factor(info_index),
           y= mean_accuracy,
           fill= factor(info_index),   
           colour= factor(info_index))) +  
  
  geom_half_violin(side = "r", alpha = 0.8,
                   fill = "white", colour = "darkgray") +
  
  geom_half_point(side= "l",
                  shape= 21,   
                  size= 2.5,
                  alpha= 0.9,
                  stroke= 0.7) +
  
  stat_summary(fun= mean, geom= "point", size= 2, colour = "black") +
  stat_summary(fun= mean, geom= "line", aes(group= 1),
               colour= "black", linewidth= 1) +
  
  geom_hline(yintercept= 0.5, linetype= "dashed",
             colour= "#474747", linewidth= 0.8) +
  
  scale_x_discrete(labels= c("B", "R", "RB-/RB+")) +
  
  scale_fill_manual(values = c(
    `1`= "white",      
    `2`= "lightblue",  
    `3`= "lightblue"   
  )) +
  
  scale_colour_manual(values = c(
    `1`= "darkblue",   
    `2`= "lightblue",  
    `3` = "darkblue"
    )) +
  
  coord_cartesian(ylim = c(0.1, 0.9))+
  
  labs(x = NULL, y = "Mean Accuracy") +
  theme(
    legend.position= "none",
    panel.grid= element_blank(),
    panel.background= element_blank(),
    plot.background= element_blank(),
    axis.line= element_line(color = "black", linewidth = 0.8),
    axis.text= element_text(size = 18, color = "black"),
    axis.title.y= element_text(size = 18, margin = margin(r = 10))
  )


 # 2. Security recoded (1-2= not sure; 3-4-5=uncertain; 6-7= Sure)


#relevel security rating as 1-2-3 for model

explicit <- explicit %>%
  mutate(
    sec_level = case_when(
      sec_rate_merged == "Unsecure" ~ 1,
      sec_rate_merged == "Uncertain" ~ 2,
      sec_rate_merged == "Secure" ~ 3,
      TRUE ~ NA_real_
    )
  )


explicit$condition_off <- relevel(explicit$condition_off, ref = "B")


model0 <- lmer(sec_level~ (1|participant), data=explicit)

model1 <- lmer(sec_level~ accuracy+(1|participant), data=explicit)

summary(model1)

model2<- lmer(sec_level~ accuracy+condition_off+(1|participant), data=explicit)

anova(model1, model2)

summary(model2)

model3<- lmer(sec_level~ accuracy*condition_off+(1|participant), data=explicit)

anova(model2, model3)



summary(model2)

anova(model1,model2)


# PLOT security rating 


plot_data_summary <- explicit %>%
  group_by(sec_rate_merged, condition_off) %>%
  summarise(count_acc = sum(accuracy == 1), .groups = "drop")

# Plot
ggplot(plot_data_summary,
       aes(x = factor(sec_rate_merged), 
           y = count_acc,
           fill = condition_off)) +
  geom_col(position = "dodge") +
  labs(x = "Sec Rate Merged",
       y = "Count of Accuracy = 1",
       fill = "Condition") +
  theme_minimal()


# visualization paper


plot_data<- plot_data%>%
  group_by(sec_rate_merged, info_index) %>%
  summarise(mean_accuracy = mean(mean_accuracy, na.rm = TRUE),
            se_accuracy = sd(mean_accuracy, na.rm = TRUE) / sqrt(n())) 

plot_data <- plot_data %>%
  mutate(info_index = factor(info_index,
                             levels = c(1, 2, 3,4),
                             labels = c("B", "R", "RB-", "RB+")))

plot_data$sec_rate_merged <- factor(
  plot_data$sec_rate_merged,
  levels = c("Unsecure", "Uncertain", "Secure"),
  labels = c("Not Sure", "Uncertain", "Sure")
)


ggplot(plot_data,
       aes(x = factor(sec_rate_merged), y = mean_accuracy,
           group  = info_index,           
           fill   = info_index,           
           colour = info_index)) +        
  geom_line(colour = "black", linewidth = 1) +
  
  
  geom_point(shape = 21, size = 4, stroke = 1) +
  
  geom_hline(yintercept = 0.5, linetype = "dashed",
             colour = "grey40", linewidth = 0.8) +

  coord_cartesian(ylim = c(0.45, 0.60)) +
  
  scale_fill_manual(values = c(
    "B" = "white",
    "R" = "grey70",
    "RB-" = "grey70",
    "RB+"="black"
  )) +
  scale_colour_manual(values = c(
    "B" = "black",
    "R" = "transparent",   
    "RB-" = "black",
    "RB+"="black"
  )) +
  
  labs(x = NULL,
       y = "Mean Accuracy",
       fill   = "Condition",
       colour = "Condition") +
  
  theme_minimal(base_size = 16) +
  theme(
    legend.position = c(0.15, 0.85),
    legend.text     = element_text(size = 16),
    legend.title    = element_text(size = 16),
    panel.grid      = element_blank(),
    axis.line       = element_line(size = 1, colour = "black",linewidth=0.8),
    axis.ticks      = element_line(size = 1),
    axis.text       = element_text(size = 18, colour = "black"),
    axis.title      = element_text(size = 18, colour = "black"),
    #plot.margin      = margin(t = 10, r = 40, b = 10, l = 40)
  )

# Colours


ggplot(plot_data,
       aes(x = factor(sec_rate_merged), y = mean_accuracy,
           group  = info_index,           
           fill   = info_index,           
           colour = info_index)) +        
  geom_line(colour = "black", linewidth = 1) +
  
  
  geom_point(shape = 21, size = 4, stroke = 1) +
  
  geom_hline(yintercept = 0.5, linetype = "dashed",
             colour = "grey40", linewidth = 0.8) +
  
  coord_cartesian(ylim = c(0.45, 0.60)) +
  
  scale_fill_manual(values = c(
    "B" = "white",
    "R" = "lightblue",
    "RB-" = "lightblue",
    "RB+"="darkblue"
  )) +
  scale_colour_manual(values = c(
    "B" = "darkblue",
    "R" = "transparent",   
    "RB-" = "darkblue",
    "RB+"="darkblue"
  )) +
  
  labs(x = NULL,
       y = "Mean Accuracy",
       fill   = "Condition",
       colour = "Condition") +
  
  theme_minimal(base_size = 16) +
  theme(
    legend.position = c(0.15, 0.85),
    legend.text     = element_text(size = 16),
    legend.title    = element_text(size = 16),
    panel.grid      = element_blank(),
    axis.line       = element_line(size = 1, colour = "black",linewidth=0.8),
    axis.ticks      = element_line(size = 1),
    axis.text       = element_text(size = 18, colour = "black"),
    axis.title      = element_text(size = 18, colour = "black"),
    #plot.margin      = margin(t = 10, r = 40, b = 10, l = 40)
  )



