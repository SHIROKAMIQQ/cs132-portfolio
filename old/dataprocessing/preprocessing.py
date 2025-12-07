import csv

input_file = "dataprocessing/lfs_march_2024_1652208912570.csv"
output_file = "dataprocessing/processed.csv"

REGION = "Region"
AGE = "C05-Age as of Last Birthday"
HIGHEST_GRADE_ACCOMPLISHED = "C07-Highest Grade Completed"
LOCATION_OF_WORK = "C11 - Location of Work (Province, Municipality)"
MAJOR_INDUSTRY_GROUP = "C15-Major Industry Group"
EMPLOYMENT = "New Employment Criteria (jul 05, 2005)"


def is_null(s: str):
    return s.strip() == ""

employed_count = 0
unemployed_count = 0
non_labor_force = 0
ignored_count = 0
total = 0

with open(input_file, newline='', encoding='utf-8') as infile, \
     open(output_file, "w", newline='', encoding='utf-8') as outfile:
    
    reader = csv.DictReader(infile)     # reads rows as dicts
    fieldnames = ["Region", "Age", "Education", "WorkLocation", "Industry", "Employed"]
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    
    writer.writeheader()  # write header row
    
    for row in reader: 
        total += 1

        # Ignore those with empty employment status
        if is_null(row[EMPLOYMENT]):
            ignored_count += 1
            continue
        
        employed = int(row[EMPLOYMENT])
        # Only include those part of Labor Force
        if employed == 3:
            non_labor_force += 1
            continue

        assert not is_null(row[REGION])
        assert not is_null(row[AGE])
        assert not is_null(row[HIGHEST_GRADE_ACCOMPLISHED])

        # Copy Region, Age, and Education
        assert (employed == 1 or employed == 2)
        out = {}
        out["Region"] = row[REGION]
        out["Age"] = row[AGE]
        out["Education"] = row[HIGHEST_GRADE_ACCOMPLISHED]

        # If employed, copy work location and industry
        if employed == 1:
            assert not is_null(row[LOCATION_OF_WORK])
            assert not is_null(row[MAJOR_INDUSTRY_GROUP])
            out["WorkLocation"] = int(row[LOCATION_OF_WORK])
            out["Industry"] = int(row[MAJOR_INDUSTRY_GROUP])
            out["Employed"] = 1
            employed_count += 1
            writer.writerow(out)
            continue
        
        # If unemployed, zero out work location and industry
        if employed == 2:
            assert is_null(row[LOCATION_OF_WORK])
            assert is_null(row[MAJOR_INDUSTRY_GROUP])
            out["WorkLocation"] = 0
            out["Industry"] = 0
            out["Employed"] = 0
            unemployed_count += 1
            writer.writerow(out)
            continue

        print("YOU SHOULDNT BE HERE")
        


print(f"Processed data written to {output_file}")
print(f"employed: {employed_count}") 
print(f"unemployed: {unemployed_count}")
print(f"non Labor Force: {non_labor_force}")
print(f"ignored: {ignored_count}")
print(f"total: {total}")
assert employed_count + unemployed_count + non_labor_force + ignored_count == total
