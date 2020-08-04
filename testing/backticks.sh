#!/bin/bash
# A simple demostration of using backticks
# Pin 1/22/2019

lines=`cat $1 | wc -l`
echo The number of lines in the file $1 is $lines
