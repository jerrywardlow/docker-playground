#!/usr/bin/python

# Library for parsing YAML files
import yaml

# Threading library
import threading

# Open configuration file and read YAML contents
with open('config.yml', 'r') as config_file:
    cfg = yaml.load(config_file)

def cron_loop():
    threading.Timer(10.0, cron_loop).start()
    print "Placeholder for cron function"

if __name__ == '__main__':
    cron_loop()
