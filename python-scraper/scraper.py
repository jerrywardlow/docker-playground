#!/usr/bin/python

import yaml

# Open configuration file and read YAML contents
with open('config.yml', 'r') as config_file:
    cfg = yaml.load(config_file)
