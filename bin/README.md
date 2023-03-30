# GitHub Guide:

## At the start of each course: 
1. Clone this repo:
```
git clone git@github.com:LTUC/prep-course.git
```
2. Navigate to it:
```
cd prep-course
```
3. Create an empty repo on [LTUC GitHub](https://github.com/LTUC) and copy its SSH URL.
4. Run this command:
```
bash bin/shell.sh the_ssh_url_you_copied
```
5. After you make sure all done:
```
rm -rf bin
git add .
git commit -m "Delete bin folder"
git push origin main
```
## Class Repo naming convention:
- `asac-prep-d#`

> The number for each course should be the next number of the previous prep course course, no matter of the track.


## Emergency Backup:
- Everything is safely backed up in [backup Branch](https://github.com/LTUC/prep-course/tree/backup)
- Make sure you update this branch for any permanent changes in the prep courses.