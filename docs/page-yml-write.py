# script to rewrite yml headers on content files based on pages nav data
import csv, os, string
replacer = """---
title:"""
# open csv
with open('all-pages.csv') as csvItems:
    allItems = list(csv.reader(csvItems, delimiter=','))
    for i in range(1,len(allItems)):
        file = allItems[i][1]
        header = "---\ntitle: " + allItems[i][0] + "\nsection: " + allItems[i][2] + "\npermalink: /" + file + "\n"
        newFile = "content/" + file
        if os.path.isfile(file):
            with open(file) as old:
                content = old.read()
                newContent = content.replace(replacer, header, 1)
                with open (newFile, "w") as new:
                    new.write(newContent)
    