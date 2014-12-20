theme-cold-omaha
================

The official theme repo for Cold Omaha.

## Getting Started

This theme uses LESS for CSS precompiling, and it uses Gulp for compiling the LESS into CSS, and also for concatenating and minifying JavaScript files.

_Note: You do not need LESS and Gulp to use this theme, you can just edit the CSS directly if you like. LESS and Gulp are for advanced users._

### 1) Clone Repo

Run the following command in Terminal to clone this repo:

```
git clone https://github.com/nerdburn/theme-cold-omaha.git
cd theme-cold-omaha
```

### 2) Install Node Modules

Run the following command in Terminal to install Gulp for LESS preprocessing.
```
npm install
```

### 3) Run Gulp

Run gulp to make sure all CSS and JavaScript files are the latest versions.
```
gulp
```
After making any changes to LESS, CSS, or Javascript files, run `gulp` to ensure assets are updated before pushing live.

### 4) Make Changes & Push

After making any changes, run Gulp again, commit and push back to GitHub to update the web site:
```
gulp
git add --all
git commit -am 'making a change'
git push origin master
```

## Need More Info? 

Check out our [help documentation](http://help.postach.io/tag/theme-code) for more information on theming Postach.io sites.

