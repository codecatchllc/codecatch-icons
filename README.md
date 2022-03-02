# CodeCatch Icons

CodeCatch Icons is a React-based icon library intended for all CodeCatch React projects.

## Table of Contents

- [Adding A New Icon](#adding-a-new-icon)
  - [Steps](#steps)

## Adding A New Icon

Please read this section if you are wanting to add a new icon to the icon library.

### Steps

1. Add the `.svg` file to the `./raw` directory

2. Run `yarn build`

3. Run `yarn changeset`

4. Run `git checkout dev` and `git pull` in your terminal if your local dev branch is not up to date

5. Create a new branch off the existing dev branch using the format ISSUE-\<issue_number>
   - e.g. `git branch ISSUE-#7`
