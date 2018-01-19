#!/usr/bin/python

# Library for parsing YAML files
import yaml

from time import sleep

# Open configuration file and read YAML contents
with open('config.yml', 'r') as config_file:
    cfg = yaml.load(config_file)

def cron_loop():
    '''Cron loop placeholder, never exits'''
    while True:
        print "Placeholder for cron function"
        sleep(5)

if __name__ == '__main__':
    print "Placeholder for pre-cron functions"
    cron_loop()
