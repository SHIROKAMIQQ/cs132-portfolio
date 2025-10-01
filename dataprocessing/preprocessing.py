import csv

input_file = "dataprocessing/lfs_march_2024_1104494873057.csv"
output_file = "dataprocessing/processed.csv"

"""
Fields:

Region 
C05-Age as of Last Birthday
C07-Highest Grade Completed
C09-Work Indicator
C10-Job Indicator
C11 - Location of Work (Province, Municipality)
C15-Major Industry Group
C25-Looked for Work or Tried to Establish Business during the past week
C26-Reason for not Looking for Work
C27-Available for Work
"""

REGION = "Region"
AGE = "C05-Age as of Last Birthday"
HIGHEST_GRADE_ACCOMPLISHED = "C07-Highest Grade Completed"
WORK_INDICATOR = "C09-Work Indicator"
JOB_INDICATOR = "C10-Job Indicator"
LOCATION_OF_WORK = "C11 - Location of Work (Province, Municipality)"
MAJOR_INDUSTRY_GROUP = "C15-Major Industry Group"
LOOKED_FOR_WORK = "C25-Looked for Work or Tried to Establish Business during the past week"
REASON_NOT_LOOKING = "C26-Reason for not Looking for Work"
AVAILABLE_FOR_WORK = "C27-Available for Work"


def is_null(s: str):
    return s.strip() == ""

underaged = 0
employ = 0
unemploy = 0
non = 0
with open(input_file, newline='', encoding='utf-8') as infile, \
     open(output_file, "w", newline='', encoding='utf-8') as outfile:
    
    reader = csv.DictReader(infile)     # reads rows as dicts
    fieldnames = ["Region", "Employed", "Unemployed", "Age", "Education", "LocationOfWork", "Industry"]
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    
    writer.writeheader()  # write header row
    
    for row in reader: 

        # Ignore entries of people not within age range of Labor Force
        if int(row[AGE]) < 15: 
            underaged += 1
            continue

        # Copy Region, Age, Highest Grade Accomplished
        if (is_null(row[REGION]) or is_null(row[AGE]) or is_null(row[HIGHEST_GRADE_ACCOMPLISHED])): continue
        out = {}
        out["Region"] = int(row[REGION])
        out["Age"] = int(row[AGE])
        out["Education"] = int(row[HIGHEST_GRADE_ACCOMPLISHED])

        # Employed - consists of persons in the labor force who were reported either as
        # at work or with a job or business although not at work. 
        # Persons at work are those who did some work, even for an hour, during the reference period.
        employed = False
        if (is_null(row[WORK_INDICATOR])): continue
        if (int(row[WORK_INDICATOR]) == 1):
            # if out["Region"] == 1: print(out["Region"], out["Age"], out["Education"])            
            out["Employed"] = 1
            out["Unemployed"] = 0
            employed = True
        if (int(row[WORK_INDICATOR]) == 2 and is_null(row[JOB_INDICATOR])): continue
        if(int(row[WORK_INDICATOR] == 2 and row[JOB_INDICATOR] == 1)):
            out["Employed"] = 1
            out["Unemployed"] = 0
            employed = True
        
        # Copy LocationOfWork and Industry of Employed entries.
        if (employed):
            # print(out["Region"], out["Age"], out["Education"], out["Employed"])
            if (is_null(row[LOCATION_OF_WORK]) or is_null(row[MAJOR_INDUSTRY_GROUP])): continue
            out["LocationOfWork"] = int(row[LOCATION_OF_WORK])
            out["Industry"] = int(row[MAJOR_INDUSTRY_GROUP])
            writer.writerow(out)
            employ += 1
            continue

        # Unemployed - consists of all persons 15 years old and over as of their last birthday who are reported as
        # without job and currently available for work OR
        # seeking work OR
        # not seeking work due to the following reasons: 
        #   (1) tired/believed no work available, i.e., the discouraged workers; 
        #   (2) awaiting results of previous job application; 
        #   (3) temporary illness/disability; 
        #   (4) bad weather;
        #   (5) waiting for rehire/job recall.
        if (is_null(row[LOOKED_FOR_WORK]) or is_null(row[AVAILABLE_FOR_WORK])): continue
        if (int(row[LOOKED_FOR_WORK]) == 1 or int(row[AVAILABLE_FOR_WORK]) == 1):
            out["Employed"] = 0
            out["Unemployed"] = 1
            out["LocationOfWork"] = 0
            out["Industry"] = 0
            writer.writerow(out)
            unemploy += 1
            continue
        if (is_null(row[REASON_NOT_LOOKING])): continue
        if (int(row[LOOKED_FOR_WORK]) == 2
            and (1 <= int(row[REASON_NOT_LOOKING]) and int(row[REASON_NOT_LOOKING]) <= 5)):
            out["Employed"] = 0
            out["Unemployed"] = 1
            out["LocationOfWork"] = 0
            out["Industry"] = 0
            writer.writerow(out)
            unemploy += 1
            continue

        # Entries that are neither Employed nor Unemployed are part of the Labor Force
        non += 1
        continue

print(f"Processed data written to {output_file}")
print(underaged, employ, unemploy, non) 
